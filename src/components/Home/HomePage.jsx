import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone14.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProduct from "./FeaturedProduct";
const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="One of the best mobile that is available in this world comes with iOS"
        link="/product/654494438aa741fbd7c1cebd"
        image={iphone}
      />
      <FeaturedProduct />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studion Display and colour-matched Magic accessories to your bag after configure your mac mini"
        link="/product/654494438aa741fbd7c1cec5"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
