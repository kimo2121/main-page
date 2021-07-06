import React from "react";
import "./Footer.css";
import Logo from "../Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo1 from "../../assests/logo1.png";
import logo2 from "../../assests/logo2.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer_flex">
        <div className="footer_col0">
          <div className="flex items-center">
            <img src={logo1} alt="logo" className="" />
            <img src={logo2} alt="logo" className="" />
          </div>
          <div className="soicalSvg">
            <FaFacebookF style={{ fontSize: "1.5rem" }} />
            <FaInstagram style={{ fontSize: "1.5rem" }} />
            <FaLinkedinIn style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div className="footer_col1">
          <p className="">Navigate</p>
          <p className="">Home</p>
          <p className="">Products</p>
          <p className="">Popular Nfts</p>
          <p className="">About</p>
        </div>
        <div className="footer_col2">
          <p className="">Support</p>
          <p className="">Contact Us</p>
          <p className="">FAQs</p>
          <p className="">Email</p>
        </div>
        <div className="footer_col3">
          <p>
            Subscribe to our newsletter to stay updated on the latest release
          </p>
          <div className="footer_input">
            <input
              type="text"
              placeholder="Enter your email"
              className="input_contianer"
            />
            <button className="footer_input_btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer_down">
        <p className="text-sm md:mr-24 md:text-lg ">
          Copyright © 2010-2021 ECCHI COIN. All rights reserved.
        </p>
        <p className="text-sm md:text-lg">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
