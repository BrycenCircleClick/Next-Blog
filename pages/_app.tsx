// _app.jsx
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import Navbar from "../components/components/Navbar.jsx";
import Footer from "../components/components/Footer.jsx";
import "../styles/index.css"; // Assuming your global CSS is correctly placed

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState(null); // Moved state to _app to provide data to all pages
  const [loading, setLoading] = useState(true); // Moved loading state to _app
  const [error, setError] = useState(null); // Moved error state to _app

  useEffect(() => {
    // Define the async function inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ahuraai.com/wp-json/wp/v2/pages/81955?acf_format=standard"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.acf); // Set the fetched data into state
        setLoading(false); // Set loading to false since the data is fetched
      } catch (error) {
        setError(error); // If there's an error, set it into state
        setLoading(false); // Set loading to false because the fetch attempt is done (even if it failed)
      }
    };

    fetchData(); // Call the async function
  }, []); // The empty array means this effect runs once when the app component mounts

  // Add a conditional rendering based on loading or error state if necessary
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="font-normal min-h-screen flex flex-col align-middle justify-center text-base font-inter text-[#111]">
      <Navbar />
      {/* Pass the fetched data to components as needed using props or a context provider */}
      <Component {...pageProps} data={data} />
      <Footer />
    </div>
  );
}

export default MyApp;
