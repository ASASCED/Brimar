import { AboutHeader } from "./about-us/AboutHeader";
import { News } from "./news/News";
import { Shapes } from "./about-us/Shapes";
import { Home } from "./home/Home";
import { Navbar } from "./shared/Navbar";
import { AboutUs } from "./about-us/AboutUs";
import { Footer } from "./shared/Footer";

import MessengerCustomerChat from "react-messenger-customer-chat";

export const Main = () => {
  return (
    <div className="main animate__animated animate__fadeIn">
      <Navbar />
      <Home />
      <AboutHeader />
      <Shapes />
      <News />
      <AboutUs />
      <Footer />

      <MessengerCustomerChat pageId="101455912198716" appId="160936549419460" />
    </div>
  );
};
