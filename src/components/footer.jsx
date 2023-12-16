import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footerTxt">© 2023 All rights reserved</p>
      <div className="socialMediaLink">
        <p>
          <a
            className="linkedinLink"
            href="https://www.linkedin.com/in/nabil-slimani-620848272/"
          >
            Linkedin{" "}
          </a>
          /
        </p>
        <p>
          <a className="githubLink" href="hhttps://github.com/NabilSli">
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
