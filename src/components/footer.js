import React from "react";

const Footer = () => {
  return (
    <footer>
    <div class="space2 dark"></div>
      <div class="content dark">
        <p>Copyright {new Date().getFullYear()}</p>
        <p>
          <i class="material-icons">person</i>
          <span>Lillian Rose Design</span>   
        </p>
        <p>
          <i class="material-icons">phone</i>
          <span>(509) 724-6926</span>   
        </p>
        <p>
          <i class="material-icons">computer</i>
          <a href="https://linktr.ee/lillianrosedesign">Links to Elsewhere</a>  
        </p>
        <p>
          <i class="material-icons">mail</i>
          <span>lillianrose.design@gmail.com</span>   
        </p>
        <p>
          <i class="material-icons">place</i>
          <span>Spokane, WA</span>  
        </p>
      </div>
  </footer>
  );
};

export default Footer;
