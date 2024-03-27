import React, { useState } from "react";

const NavItem = ({ children, href, className }) => {
  return (
    <li className={`${className && className} flex`}>
      <a className=" text-[16px] font-[400]" href={href}>
        {children}
      </a>
    </li>
  );
};

const NavColumn = ({ children, className }) => (
  <ul className={`${className && className} flex  justify-around`}>
    {children}
  </ul>
);

const Footer = () => {
  const hideFooter = false;
  // Create a ref for your footer element
  /*   const footerRef = useRef(null); */
  const [posts, setPosts] = useState([]);
  const spanClass = " flex flex-row ";
  /*   useEffect(() => {
    // Check if the footer should be shown
    if (!hideFooter) {
      // If not, exit the useEffect and do not run the rest of the code
      return;
    }

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
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [hideFooter]); // Add footer.showFooter as a dependency */

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

  // Footer styles
  const footerStyles = {
    display: "flex",
    background: "",
  };

  // Common text styles for footer elements
  const footerTextStyles =
    "text-[1.3rem] leading-[1.3rem] font-[500] flex mt-4 ";

  // "Latest News" section styles for small and medium screens
  const latestNewsStyles = {
    flex: "1", // Occupy full width on small and medium screens
    marginBottom: "1rem", // Add some spacing between sections
  };

  return (
    <div className="relative mt-auto" /* ref={footerRef} */>
      {" "}

      <div className=" bg-[#515151] h-fit w-screen align-top justify-between">
        {/* Background elements */}
        <div className="flex flex-col lg:flex-row align-middle justify-between w-screen max-w-7xl mx-auto">
          <div
            className={`flex flex-col md:flex-row w-full  ${!hideFooter ? "lg:w-full" : "lg:w-2/3"
              } align-middle justify-between lg:justify-around`}
          >
            {" "}
            <div
              className={`flex flex-col min-w-[250px] max-h-[200px]  items-center justify-around  w-full  ${!hideFooter ? "lg:w-full" : "lg:w-1/5"
                } `}
            >
              <div
                style={footerStyles}
                className={`w-full flex-row align-top justify-around ${footerTextStyles}`}
              >
                <a href="/">
                  <img
                    className="h-[50px] w-auto"
                    src="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/Ahura-Logo-horiz300px.png"
                    alt="Ahura Logo"
                  />
                </a>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=23%20Dorado%20Beach%20East%2C%20Dorado%2C%20PR%2000646"
                target="_blank"
                className="max-w-[300px] text-center"
              >
                23 Dorado Beach East
                <br />
                Dorado, PR 00646
                <br />
              </a>

              <a href="tel:+019493224716" className="max-w-[300px] text-left">
                +01 949-322-4716
              </a>
            </div>
            {/* Useful Links */}
            <div
              className={`flex flex-col min-w-[250px] w-full max-w-full ${!hideFooter ? "lg:w-full" : "lg:w-2/5"
                }  max-h-[200px] items-center`}
            >

              <div
                style={footerStyles}
                className={`w-full flex-row align-top h-full justify-around ${footerTextStyles}`}
              >
                <div
                  style={footerStyles}
                  className={`flex align-start ${footerTextStyles}`}
                >
                  <NavColumn className="flex flex-col">
                    <NavItem href="https://ahuraai.com/">
                      <span className={spanClass}> Home</span> <span></span>
                    </NavItem>
                    <NavItem href="https://ahuraai.com/solutions/">
                      <span className={spanClass}> Solutions</span>
                    </NavItem>
                    <NavItem href="https://ahuraai.com/company/">
                      <span className={spanClass}>Company</span>
                    </NavItem>
                  </NavColumn>
                </div>
                <div
                  style={footerStyles}
                  className={`flex align-start ${footerTextStyles}`}
                >
                  <NavColumn className="flex flex-col">
                    <NavItem href="https://ahuraai.com/signup/">
                      <span className={spanClass}>Get in Touch</span>
                    </NavItem>
                    <NavItem href="https://ahura.ai/privacy-policy">
                      <span className={spanClass}>Privacy Policy</span>
                    </NavItem>
                    <NavItem href="https://ahura.ai/terms-and-conditions">
                      <span className={spanClass}>Terms of Use</span>
                    </NavItem>
                  </NavColumn>
                </div>
              </div>
            </div>
          </div>

          {hideFooter && (
            <div className="flex flex-col min-w-[200px] align-top w-full lg:w-2/5 items-center">
              <span className={footerTextStyles}>Latest News</span>
              <div
                style={latestNewsStyles}
                className={`align-top justify-around flex flex-row lg:flex-col ${footerTextStyles}`}
              >
                <NavColumn className="flex flex-row gap-4 items-stretch">
                  {/*                   {posts == "hide" &&
                    posts.map((post, i) => (
                      <NavItem
                        key={post.id}
                        className={`${
                          i == 0
                            ? "post-animation"
                            : i == 1
                            ? "break-blog-2-footer post-animation"
                            : " hidden md:block lg:hidden post-animation"
                        } `}
                        href={post.link}
                      >
                        <div className="= flex  flex-col w-full   gap-2">
                          {" "}
                          <img
                            loading="lazy"
                            alt={post.title.rendered}
                            src={post.featuredImageUrl}
                            className="w-[200px] object-contain object-center h-auto mx-auto overflow-hidden  rounded-lg "
                          />
                          <div className="text-zinc-900 text-sm max-w-[200px] font-bold self-start ">
                            {post.title.rendered}
                          </div>
                          <div className="flex flex-row align-middle w-[200px] justify-between">
                            <a
                              href={post.link}
                              className="text-zinc-900 text-sm font-medium underline whitespace-nowrap mt-auto self-start "
                            >
                              View Post
                            </a>{" "}
                            <div className="text-zinc-900 text-sm font-medium  whitespace-nowrap mt-auto self-end">
                              {formatDate(post.date)}
                            </div>
                          </div>
                        </div>
                      </NavItem>
                    ))} */}
                </NavColumn>
              </div>
            </div>
          )}
        </div>
        <div
          className="w-screen mx-auto  max-w-7xl"
          style={{ borderTop: "1px solid rgba(29, 29, 31, 0.10)" }}
        />{" "}
        {/* Bottom section with copyright and logos */}
        <div className="flex flex-row align-middle justify-center w-full max-w-7xl p-5 mx-auto self-center">
          <span>© 2024 AHURA. All Rights Reserved.</span>
          <div className="flex flex-row">
            <a target="_blank" href="https://www.facebook.com/ahuraai/">
              {" "}
            </a>
            <a target="_blank" href="https://twitter.com/AhuraAi"></a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/ahura-a-i/about/"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
