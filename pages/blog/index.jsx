import React, { useEffect, useState } from "react";

const NewBlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // To track if there are more posts to load

  useEffect(() => {
    console.log(`Current Page: ${currentPage}`); // Debug current page
    setIsLoading(true);
    fetch(
      `https://ahuraai.com/wp-json/wp/v2/posts?per_page=25&page=${currentPage}`
    )
      .then((response) => {
        // If the last page was reached
        if (!response.ok && response.status === 400) {
          setHasMore(false);
          throw new Error("No more posts to load");
        }
        return response.json();
      })
      .then((posts) => {
        console.log(`Fetched Posts: ${posts.length}`); // Debug fetched posts count
        return Promise.all(
          posts.map((post) => {
            if (post._links["wp:featuredmedia"]) {
              // Check if featured media exists
              return fetch(post._links["wp:featuredmedia"][0].href)
                .then((response) => response.json())
                .then((media) => ({
                  ...post,
                  featuredImageUrl: media.source_url, // Use featured image URL
                }));
            } else {
              return {
                ...post,
                featuredImageUrl: "/path/to/default/image.jpg", // Use a default image URL
              };
            }
          })
        );
      })
      .then((postsWithMedia) => {
        setPosts((prevPosts) => [...prevPosts, ...postsWithMedia]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      });
  }, [currentPage]);

  const loadMorePosts = () => {
    if (!isLoading && hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const event = new Date(dateString);
    return event.toLocaleDateString("en-GB", options);
  };

  const decodeHtmlEntities = (text) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };
  const makeRelativeUrl = (absoluteUrl) => {
    const url = new URL(absoluteUrl);
    return `/blog${url.pathname}`;
  };

  return (
    <div className="flex flex-row max-w-screen overflow-hidden h-fit flex-wrap items-center px-1 md:px-5">
      <div className="w-full max-md:mt-5 flex">
        <div className="gap-5  flex flex-row flex-wrap w-full max-w-7xl self-center mx-auto items-stretch align-middle justify-center max-md:items-stretch max-md:gap-0">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`post-animation border bg-white flex grow flex-col  w-[300px] pb-11 border-solid border-zinc-400 my-5 `}
            >
              <img
                loading="lazy"
                alt={decodeHtmlEntities(post.title.rendered)}
                src={post.featuredImageUrl}
                className="blogImages object-contain object-center overflow-hidden self-stretch"
              />
              <div className="flex items-stretch gap-3 ml-7 mt-8 self-start max-md:justify-center max-md:ml-2.5">
                <div className="text-zinc-900 text-base font-medium leading-5 tracking-wider uppercase self-center grow whitespace-nowrap mb-2">
                  {formatDate(post.date)}
                </div>
              </div>
              <div className="text-zinc-900 text-2xl font-bold ml-7 self-start max-md:ml-2.5">
                {decodeHtmlEntities(post.title.rendered).replace(
                  /<[^>]+>/g,
                  ""
                )}
              </div>
              <div className="text-zinc-900 text-base leading-7 mx-7 self-start max-md:ml-2.5 mb-2">
                {decodeHtmlEntities(post.excerpt.rendered)
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 150)}
                ...
              </div>
              <a
                href={makeRelativeUrl(post.link)}
                className="text-zinc-900 text-lg font-medium leading-7 underline whitespace-nowrap ml-7 mt-auto self-start max-md:ml-2.5"
              >
                View Post
              </a>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="mx-auto text-center"></div>
      {isLoading && <p className="mx-auto">Loading more posts...</p>}
      {!isLoading && hasMore && (
        <button
          onClick={loadMorePosts}
          className="mt-5 bg-blue-500 mx-auto mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      )}
      {!hasMore && <p className="text-center mt-5">No more posts to load.</p>}
    </div>
  );
};

export default NewBlogSection;
