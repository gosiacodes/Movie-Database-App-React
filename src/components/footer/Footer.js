import { Fragment } from "react";

const Footer = () => {
  // Returning footer with copyrights, links to social media and links to icons authors
  return (
    <Fragment>
      <footer className="footer">
        <h4>Copyright © 2022 | Malgorzata Pick</h4>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/malgorzatapick/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/margareta75"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://malgorzatapick.eu/" target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
        <div className="icon-authors ">
          <a
            href="https://iconscout.com/contributors/jemismali"
            target="_blank"
            rel="noreferrer"
            title="'Page not found' Icon by Jemis Mali"
          >
            Jemis Mali
          </a>
          <a
            href="https://iconscout.com/contributors/vectors-market"
            target="_blank"
            rel="noreferrer"
            title="'Camera Action' Icon by Vectors Market"
          >
            Vectors Market
          </a>
          <a
            href="https://iconscout.com/contributors/omarsafaa"
            target="_blank"
            rel="noreferrer"
            title="'Chevron-double-left' Icon by Omar Safaa"
          >
            Omar Safaa
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
