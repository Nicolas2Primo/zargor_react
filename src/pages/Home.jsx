import React from "react";
import HomeSection from "../components/components_home/HomeSection";
import Section from "../components/components_home/Section";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full radial_gradient">
      <HomeSection />
      <Section
        section_title="Services"
        section_subtitle="The services we can offer to you"
        poster={true}
      />
      <Section
        section_title="Projects"
        section_subtitle="The projects we have developed"
        poster={true}
      />
      <Section
        section_title="Products"
        section_subtitle="The products we have made"
        poster={true}
      />
      <Section
        section_title="About"
        section_subtitle="The information you need about us"
        about_poster={true}
      />
      <Section
        section_title="Contact us"
        section_subtitle="The methods you need to contact us"
      />
    </div>
  );
};

export default Home;
