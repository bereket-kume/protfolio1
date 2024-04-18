import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white " style={{  width: "100%",height:'60px' }}>
      <div className="container d-flex flex-column align-items-center pb-2">
        <div className="mb-3">
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
        <div className="mb-5">
          &copy; 2023 bekume.
        </div>
      </div>
    </footer>
  );
}

export default Footer;