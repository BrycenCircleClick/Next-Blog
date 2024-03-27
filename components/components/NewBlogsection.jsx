import React, { useEffect, useState, useRef } from "react";

const NewBlogsection = () => {
  const [posts, setPosts] = useState([]);
  const blogRef = useRef(null);

  useEffect(() => {
    // Function to handle the intersection callback
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        // The footer is in view, fetch data or perform your action here
        fetch("https://ahuraai.com/wp-json/wp/v2/posts?per_page=3")
          .then((response) => response.json())
          .then((posts) => {
            Promise.all(
              posts.map((post) =>
                fetch(post._links["wp:featuredmedia"][0].href)
                  .then((response) => response.json())
                  .then((media) => ({
                    ...post,
                    featuredImageUrl: media.source_url,
                  }))
              )
            ).then((posts) => setPosts(posts));
          })
          .catch((error) => console.error("Error fetching posts:", error));

        // Disconnect the observer since you only need it once
        observer.disconnect();
      }
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection);

    // Observe the footer element
    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);
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
  return (
    <div className="flex flex-col items-center px-1 md:px-5" ref={blogRef}>
      <h1 className="text-zinc-900 text-center text-xl md:text-3xl lg:text-4xl font-bold  w-full px-1 md:px-5 mt-5">
        Revolutionizing workplaces with smart learning.
      </h1>
      <div className=" w-full   max-md:mt-5 ">
        <div className="gap-5 flex flex-row  md:flex-nowrap w-full max-w-7xl self-center mx-auto items-stretch align-middle justify-center max-md:items-stretch max-md:gap-0">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`post-animation border bg-white flex grow flex-col w-full  pb-11  border-solid border-zinc-400   my-5 ${i == 0 ? "" : i == 1 ? "" : "flex md:hidden lg:flex"
                }`}
            >
              <img
                loading="lazy"
                alt={post.title.rendered}
                src={post.featuredImageUrl}
                className="blogImages object-contain object-center  overflow-hidden self-stretch "
              />
              <div className="flex items-stretch gap-3 ml-7 mt-8 self-start max-md:justify-center max-md:ml-2.5">
                <div className="text-zinc-900 text-base font-medium leading-5 tracking-wider uppercase self-center grow whitespace-nowrap mb-2">
                  {formatDate(post.date)}
                </div>
              </div>
              <div className="text-zinc-900 text-2xl font-bold  ml-7 self-start max-md:ml-2.5">
                {decodeHtmlEntities(post.title.rendered).replace(
                  /<[^>]+>/g,
                  ""
                )}
              </div>
              <div className="text-zinc-900 text-base leading-7  mx-7 self-start max-md:ml-2.5 mb-2">
                {decodeHtmlEntities(post.excerpt.rendered).replace(
                  /<[^>]+>/g,
                  ""
                )}
              </div>
              <a
                href={post.link}
                className="text-zinc-900 text-lg font-medium leading-7 underline whitespace-nowrap ml-7 mt-auto self-start max-md:ml-2.5"
              >
                View Post
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBlogsection;
