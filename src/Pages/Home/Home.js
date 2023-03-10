import React from "react";
import Banner from "./Banner";
import ContactPage from "./ContactPage";
import Footer from "../Shared/Footer/Footer";
import HomePageAppoinment from "./HomePageAppoinment";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div className="px-16">
      <Banner />
      <Info />
      <Services />
      <Treatment />
      <HomePageAppoinment />
      <Testimonials />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Home;
