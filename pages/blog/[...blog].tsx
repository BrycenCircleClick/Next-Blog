import React, { useState, useEffect, useRef } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { fetchWordPressPostBySlug } from "../../lib/wordpress";

// Define your types here
type Post = {
  // Post type definition
};

type Props = {
  allPosts: Post[];
};

const postsDirectory = path.join(process.cwd(), "content/posts"); // Adjust based on your directory structure
export default function BlogPost({ post, source }) {
  // For simplicity, assuming WordPress post content is safe to use with dangerouslySetInnerHTML
  // You might want to sanitize it or use a safer method depending on your content

  if (source === "mdx") {
    return (
      <article>
        <h1>{post.title}</h1>
        <MDXRemote {...post.content} />
      </article>
    );
  } else if (source === "wordpress") {
    return (
      <article>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </article>
    );
  }

  return <p>Post not found.</p>;
}

export async function getServerSideProps({ params }) {
  const slug = params.blog.join("/"); // Adjust according to your URL structure
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

  if (fs.existsSync(mdxPath)) {
    const source = fs.readFileSync(mdxPath, "utf8");
    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    return {
      props: {
        post: {
          ...data,
          content: mdxSource,
        },
        source: "mdx",
      },
    };
  } else {
    // Fetch post from WordPress by slug
    const post = await fetchWordPressPostBySlug(slug);
    if (!post) {
      return { notFound: true };
    }

    return {
      props: {
        post,
        source: "wordpress",
      },
    };
  }
}
