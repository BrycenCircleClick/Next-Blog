// blog/[slug].tsx
import Head from "next/head";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import { fetchWordPressPostBySlug } from "../../lib/wordpress";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import { Router } from "next/router";

export default function BlogPost({ post }) {
  if (!post) {
    return <div>Post not found</div>;
  }
  function decodeHtmlEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }
  return (
    <Container>
      <Header />
      {Router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title.rendered}</title>
              {/*          <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <PostHeader
              title={decodeHtmlEntities(post.title.rendered)}
              coverImage={post.featured_image_url}
              date={post.date}
              author={post.author_image_url}
            />
            <PostBody content={decodeHtmlEntities(post.content.rendered)} />
          </article>
        </>
      )}
    </Container>
  );
}
export async function getServerSideProps({ params }) {
  const post = await fetchWordPressPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
}
