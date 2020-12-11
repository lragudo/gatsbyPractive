import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Coloring = () => {
  return (
    <>
      <Nav />
      <div class="print">
        <h1>Coloring Book</h1>
        <div class="info">
          <p>
            <i class="material-icons">title</i>
            <span>
              Fall Blossoms coloring book based off of my nature photography.
            </span>
          </p>
          <p>
            <i class="material-icons">date_range</i>
            <span>October - November 2020</span>
          </p>
          <p>
            <i class="material-icons">person</i>
            <span>Self Initiated</span>
          </p>
          <p>
            <i class="material-icons">send</i>
            <span>Free PDF Download</span>
          </p>
          <p>
            <i class="material-icons">build</i>
            <span>Indesign & Procreate</span>
          </p>
          <p>
            <i class="material-icons">article</i>
            <span>
              I created this coloring book first for myself to help me relax.
              After creating the first 2 pages and sharing them on Instagram I
              realized that I had friends who would also enjoy something to help
              them relax. A common problem that myself and my friends usually
              had with coloring books for adults was that they can be so
              intricate and detailed that you don't even want to start or finish
              them. In the end many are the opposite of relaxing. So I purposely
              made the pages simple enough to not be overwhelmed, but
              complicated enough so that it did not feel like a children's
              coloring book.
            </span>
          </p>
          <a href="../content/pdf/fallblossoms.pdf">
            <i class="material-icons">computer</i>
            <span>Free Download</span>
          </a>
        </div>
        <div class="dark"></div>
        <section>
          <img src="../content/coloring/color1.png" />
          <img src="../content/coloring/color2.png" />
          <img src="../content/coloring/color3.png" />
          <img src="../content/coloring/color4.png" />
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Coloring;
