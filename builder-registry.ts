import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/landing/HeroSection")),
  {
    name: "HeroSection",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/landing/ImageSection1")),
  {
    name: "ImageSection1",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/landing/DemoCTA")),
  {
    name: "DemoCTA",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/landing/HeaderText")),
  {
    name: "HeaderText",
  }
);
