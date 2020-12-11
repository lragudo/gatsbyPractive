import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Eclectic = () => {
  return (
    <>
      <Nav />
      <div class="ux">
        <h1>Eclectic Outlet</h1>
        <div class="info">
          <p>
            <i class="material-icons">title</i>
            <span>Digital instructions for a tabletop game.</span>
          </p>
          <p>
            <i class="material-icons">date_range</i>
            <span>January 2020 - Febuary 2020</span>
          </p>
          <p>
            <i class="material-icons">person</i>
            <span>Self Initiated</span>
          </p>
          <p>
            <i class="material-icons">send</i>
            <span>Cards and Mobile App</span>
          </p>
          <p>
            <i class="material-icons">build</i>
            <span>Indesign, Illustrator, Figma & Protopie</span>
          </p>
          <p>
            <i class="material-icons">article</i>
            <span>
              I love playing tabletop games with friends and family. It’s an
              easy way for me to connect with others. However, your first time
              playing a new game can be difficult and the instructions are often
              long and complicated. I was inspired by the creators of Exploding
              Kittens and their animated instructions for all of their games.
              Eclectic Outlet is a card game that is fun and quick for highscool
              and college aged people. This game is accessible to anyone who
              wants to play it by being downloadable to print and the
              instructions are online.
            </span>
          </p>
          <a href="https://cloud.protopie.io/p/b586671520">
            <i class="material-icons">computer</i>
            <span>Prototype</span>
          </a>
        </div>
        <div class="dark"></div>
        <section>
          <img src="../content/eclectic/thumb.png" />
          <img src="../content/eclectic/eclectic_1.jpg" />
          <img src="../content/eclectic/eclectic_2.jpg" />
          <img src="../content/eclectic/eclectic_3.jpg" />
          <img src="../content/eclectic/eclectic_4.jpg" />
          <img src="../content/eclectic/eclectic_5.jpg" />
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Eclectic;
