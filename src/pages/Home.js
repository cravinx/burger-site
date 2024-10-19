import React from "react";
import Layout from "../components/layouts/Layout";
import "../styles/HomeStyle.css";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Promotion from "./Promotion";
import Shop from "./Shop";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Hero Banner */}
        <Hero />

        {/* About */}
        <About />

        {/* Menu */}
        <Menu />

        {/* Promotion */}
        <Promotion />

        {/* Shop */}
        <Shop />

        {/* Blog */}
        <Blog />

        {/* Contact */}
        <Contact />
      </Layout>
    </>
  );
};

export default Home;