import React, { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Introduction from "./components/Introduction";
import Links from "./components/Links";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <Introduction />
        <About />
        <Menu />
        <Testimonials />
        <GetStarted />
        <Links />
        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
}

export default App;
