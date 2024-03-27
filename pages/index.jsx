import React, { Suspense } from "react";

import HeroSection from "../components/components/HeroSection";
import Container from "../components/components/Container";
import DemoCTA from "../components/components/DemoCTA";
import BlurbSection from "../components/components/BlurbSection";

const HalfGrid = React.lazy(() => import("../components/components/HalfGrid"));
const ImageSection1 = React.lazy(() => import("../components/components/ImageSection1"));
const LearnToday = React.lazy(() => import("../components/components/LearnToday"));
const ManGrid = React.lazy(() => import("../components/components/ManGrid"));
const NewBlogsection = React.lazy(() => import("../components/components/NewBlogsection"));
const SpaceAnimation = React.lazy(() => import("../components/components/SpaceAnimation"));



const Home = ({ data }) => {
  return (
    <div className="flex flex-col w-screen items-stretch overflow-hidden z-[100]">
      <HeroSection />{" "}
      <Container>
        <DemoCTA />
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        <ImageSection1
          image1={data.topImageGroup.image1}
          image2={data.topImageGroup.image2}
          image3={data.topImageGroup.image3}
          video2="/uploads/iStock-1352464078.mp4"
          text1bold="Corporate Upskilling Made Easy:"
          text1=" From tech to management, our diverse courses are designed to empower your employees with tomorrow's skills."
          text2bold="Cutting-Edge Learning Technology:"
          text2="  Our AI-driven platform adapts to individual learning styles, ensuring your team not only learns but excels."
          text3bold="Data-Driven Insights:"
          text3=" Track progress and see tangible results. Our analytics help you make informed decisions about your workforce development."
        />
        <LearnToday
          header="How it works"
          h1="Learn today."
          h2="Lead tomorrow"
          body="At Ahura AI, we are redefining the boundaries of corporate learning. Our platform is an intersection of advanced technology and educational excellence, providing an engaging, customizable, and impactful learning experience. We are committed to not just equipping your team with knowledge but to fostering a culture of innovation and continuous improvement."
          button="Get a Demo"
        />
        <ManGrid
          text1=" Every course is tailored to fit the unique needs and learning styles of each individual, ensuring maximum engagement and retention."
          text2=" Our content is designed to be interactive and immersive, keeping learners engaged through real-world scenarios, gamification, and interactive assessments."
          text3=" We focus on equipping your team with skills that are critical in the evolving business world, such as digital literacy, critical thinking, and adaptive leadership."
          text1bold="Personalized Learning Experiences:"
          text2bold="Interactive and Immersive Content:"
          text3bold="Skills for the Future:"
          gridimage={data.homegrid.gridimage}
        />
        <Container>
          <BlurbSection blurbs={Object.values(data.blurbs)} />
        </Container>
        <SpaceAnimation />
        <LearnToday
          header="How it works"
          h1="Simple yet"
          h2="Powerful features."
          body="At Ahura, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos."
          button="Get a Demo"
        />
        <HalfGrid />
        <LearnToday
          header="How it works"
          h1="Tomorrow's jobs need"
          h2="Tomorrow's education."
          body=""
          button=""
        />{" "}
        <ImageSection1
          image1={data.bottomImageGroup.image1}
          image2={data.bottomImageGroup.image2}
          image3={data.bottomImageGroup.image3}
          video3="/uploads/iStock-939307278.mp4"
          text1bold="At Ahura, "
          text1="we focus on equipping your team with skills that are critical in the evolving business world, such as digital literacy, critical thinking, and adaptive leadership."
          text2bold=""
          text2="Our platform is engineered for flexibility, offering 24/7 access to learning resources from any device."
          text3bold=""
          text3="Our extensive range of courses covers everything from emerging technologies to leadership development, designed to prepare your workforce for the challenges of the future."
        />
        <NewBlogsection />
      </Suspense>
    </div>
  );
};
export default Home;
