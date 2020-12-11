import React, { Component } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import PortThumbs from "../components/portthumbs";

import "../styles/styles.scss";

// Homepage
const IndexPage = () => {
  return (
    <>
      <Nav />
      <main>
        <h1>Web & UX</h1>
        <section></section>

        <h1>Graphic Design</h1>
        <section></section>

        <h1>Photography</h1>
        <section></section>

        <h1>Illustration</h1>
        <section></section>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
