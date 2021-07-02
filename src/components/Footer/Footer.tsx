import React from "react";
import "./Footer.css";
import Logo from "../Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer  -mt-40 md:pt-16 pt-0 lg:pt-1  ">
      <div className="footer_flex">
        <div className="footer_col -mt-4">
          <Logo />
          <div className="soicalSvg">
            <FaFacebookF style={{ fontSize: "1.5rem" }} />
            <FaInstagram style={{ fontSize: "1.5rem" }} />
            <FaLinkedinIn style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div className="footer_col">
          <p className="mt-4">Navigate</p>
          <p className="mt-4">Home</p>
          <p className="mt-4">Products</p>
          <p className="mt-4">Popular Nfts</p>
          <p className="mt-4">About</p>
        </div>
        <div className="footer_col">
          <p className="mt-4">Support</p>
          <p className="mt-4">Contact Us</p>
          <p className="mt-4">FAQs</p>
          <p className="mt-4">Email</p>
        </div>
        <div className="footer_col mt-4">
          <p>
            Subscribe to our newsletter to stay updated on the latest release
          </p>

          <div className="footer_input mt-5">
            <div className="input_contianer ">
              <input
                type="text"
                placeholder="Enter your email"
                className="ml-5 "
              />
            </div>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between  md:my-10 md:mx-40 my-5 mx-5 md:flex-row text-base ">
        <p className="text-sm md:text-lg">
          Copyright © 2010-2021 ECCHI COIN. All rights reserved.
        </p>
        <p className="mt-5 text-sm md:text-lg">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
