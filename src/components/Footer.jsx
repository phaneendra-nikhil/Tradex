import React from "react";

import footerimg from "../assets/images/footer-img.png";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <>
      
      <footer className="footer-container">
        <div className="footer-content-1">
          <div className="footer-text">
            <p className="caption">No credit card required</p>
            <h3 className="heading">
              Start using Trade<span>X</span> right now
            </h3>
            <div className="search-box">
              <input type="text" placeholder="Email Address" />
              <button className="search-icon">
                <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
          <div className="footer-image-container">
            <img src={footerimg} alt="" className="footer-img" />
          </div>
        </div>
        <div className="footer-container-2">
          <div className="footer-logo">
            <div className="logo-img">
              <img src={logo} alt="" />
              <h2 className="heading">
                Trade <span>X</span>
              </h2>
            </div>
            <div className="tag-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero delectus architecto ea nesciunt error?</div>
          </div>
          <div className="footer-menu">
          <ul className="menu">
            <li><a href="#" className="item">Home</a></li>
            <li><a href="#" className="item">About</a></li>
            <li><a href="#" className="item">Help</a></li>
          </ul>
          <ul className="menu">
            <li><a href="#" className="item">Help</a></li>
            <li><a href="#" className="item">Partners</a></li>
            <li><a href="#" className="item">FAQ's</a></li>
          </ul>
          <ul className="menu">
            <li><a href="#" className="item">Keep in touch</a></li>
            <li><a href="#" className="item">portfolio</a></li>
            <ul className="inner-menu">
              <li><a href="#" className="item"><i class="uil uil-instagram"></i></a></li>
              <li><a href="#" className="item"><i class="uil uil-github"></i></a></li>
              <li><a href="#" className="item"><i class="uil uil-linkedin"></i></a></li>
              <li><a href="#" className="item"><i class="uil uil-facebook-f"></i></a></li>
              <li><a href="#" className="item"><i class="uil uil-twitter-alt"></i></a></li>
            </ul>
          </ul>
          </div>
        </div>
        <div className="copy-right">
          <p className="copy-text">
            &copy; <a href="#">phaneendra-nikhil</a> 2023
          </p>
          <ul className="menu">
            <li><a href="" className="item">Terms & Conditions</a></li>
            <li><a href="" className="item">Privacy policy</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
