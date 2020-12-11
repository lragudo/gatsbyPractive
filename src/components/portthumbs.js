import React from "react";

const PortThumbs = (Title, Tagline, Thumbnail, DesignType, siteLink) => {
  return (
    <a href={siteLink} class={DesignType} key={Title}>
      <img src={Thumbnail[0].thumbnails.large.url} alt="" />
      <h3>{Title}</h3>
    </a>
  );
};
export default PortThumbs;
