import * as React from "react";
import Container from "../components/container";
import BlogSection from "../components/landing/BlogSection";
import BlurbSection from "../components/landing/BlurbSection";
import DemoCTA from "../components/landing/DemoCTA";
import HeroSection from "../components/landing/HeroSection";
import ImageSection1 from "../components/landing/ImageSection1";
import LearnToday from "../components/landing/LearnToday";

const MyComponent = (props) => {
  return (
    <div className="flex flex-col w-screen items-stretch overflow-hidden">
      <HeroSection />
      <Container>
        <DemoCTA />
      </Container>
      <ImageSection1
        image1="https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/caad3a70b5bc38343c21a5024a324a45b661ba00997879c371e11ed390306a0f?apiKey=15589348c8884353aa1a6f32b20bd58b&"
        image2="https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/419b163a8f9c16e77c63807d48e67847bf1b31c3cf3fce295baaa6c03c632da0?apiKey=15589348c8884353aa1a6f32b20bd58b&"
        image3="https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31e6ed6019590d6757e2f4c950d8bfb94ad623c35eb3130d6755ab49ee3b768e?apiKey=15589348c8884353aa1a6f32b20bd58b&"
      />
      <LearnToday
        header="How it works"
        h1="Learn today."
        h2="Lead tomorrow"
        body="At Ahura, our mission is to inspire, educate, and ignite your passion
        for the cosmos. We are your premier destination for all things related
        to space exploration, astronomy, and the mysteries of the universe.
        Whether you're a seasoned astronomer or a curious novice, join us on a
        journey to the furthest reaches of the cosmos."
        button="Get a Demo"
      />
      <Container>{/*        <ManGrid /> */}</Container>
      <Container>
        <BlurbSection />
      </Container>
      <div className="flex grow flex-col items-stretch max-md:max-w-full ">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad2491d8ddf1f83f18d4654b8b601f0b36197d2a2ec18603444b62ad76da6262?apiKey=15589348c8884353aa1a6f32b20bd58b&"
          className="aspect-[1.22] object-contain object-center w-full   max-md:max-w-full"
          alt=""
        />
      </div>
      <LearnToday
        header="How it works"
        h1="Simple yet"
        h2="Powerful features."
        body="At Ahura, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos."
        button="Get a Demo"
      />
      <LearnToday
        header="How it works"
        h1="Tomorrow's jobs need"
        h2="tomorrows education."
        body=""
        button=""
      />
      <ImageSection1 image1="/IS2a.png" image2="/IS2b.png" image3="/IS2c.png" />
      <BlogSection />{" "}
    </div>
  );
};
export default MyComponent;
