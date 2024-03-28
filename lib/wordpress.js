// lib/wordpress.js

async function fetchWordPressPostBySlug(slug) {
  const baseUrl = "https://ahuraai.com/wp-json/wp/v2"; // Change this to your WordPress site URL
  const postsEndpoint = `${baseUrl}/posts`;

  try {
    const response = await fetch(`${postsEndpoint}?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const posts = await response.json();
    if (posts.length > 0) {
      return posts[0]; // Assuming the slug uniquely identifies the post, return the first (and presumably only) post
    }
    return null; // No post found with this slug
  } catch (error) {
    console.error("Error fetching post from WordPress:", error);
    return null; // Handle error appropriately in your application
  }
}

export { fetchWordPressPostBySlug };
