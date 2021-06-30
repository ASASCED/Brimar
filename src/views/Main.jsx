import { useEffect, useState } from "react";
import { AboutHeader } from "./about-us/AboutHeader";
import { News } from "./news/News";
import { Shapes } from "./about-us/Shapes";
import { Home } from "./home/Home";
import { Navbar } from "./shared/Navbar";
import { AboutUs } from "./about-us/AboutUs";
import { Footer } from "./shared/Footer";

import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export const Main = () => {
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    console.log(
      localStorage.getItem("msg") !== "show" &&
        localStorage.getItem("msg") !== "hide"
    );
    if (
      localStorage.getItem("msg") !== "show" &&
      localStorage.getItem("msg") !== "hide"
    ) {
      localStorage.setItem("msg", "show");
      setMsg(true);
    } else if (localStorage.getItem("msg") === "hide") {
      setMsg(false);
    } else {
      setMsg(true);
    }
  }, [msg]);

  return (
    <div className="main animate__animated animate__fadeIn">
      <Navbar />
      <Home />
      <AboutHeader />
      <Shapes />
      <News />
      <AboutUs />
      <Footer />

      {msg && (
        <div className="float-message">
          ¿Tienes dudas? Contacta con nosotrtos cuanto antes. Te contestaremos
          en la brevedad de lo posible
          <button
            onClick={() => {
              localStorage.setItem("msg", "hide");
              setMsg(false);
            }}
          >
            x
          </button>
        </div>
      )}

      <WhatsAppWidget phoneNumber="+5215548250892" />
      <MessengerCustomerChat
        pageId="107889634770488"
        appId="544514809929470"
        language="es_ES"
        minimized={false}
        shouldShowDialog={true}
        greetingDialogDisplay="show"
        autoLogAppEvents={true}
      />
    </div>
  );
};
