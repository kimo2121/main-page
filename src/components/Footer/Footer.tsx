import React from 'react'
import './Footer.css'
import Logo from '../Logo'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <div className="footer" >
            <div className="">

            </div>
            <div className="footer_flex">

                <div className="footer_col">
                    <Logo />
                    <div className="soical">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
                <div className="footer_col">
                    <p>Navigate</p>
                    <p>Home</p>
                    <p>Products</p>
                    <p>Popular Nfts</p>
                    <p>About</p>
                </div>
                <div className="footer_col">
                    <p>Support</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Email</p>
                </div>
                <div className="footer_col">
                    <p style={{ textAlign: "left", fontSize: '.9rem' }}>Subscribe to our newsletter to stay
                        updated on the latest release</p>

                    <div className="footer_input">
                        <div className="input_contianer">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className="footer_bottom">
                <p >
                    Copyright © 2010-2021 ECCHI COIN. All rights reserved.
                </p>
                <p>Privacy Policy</p>
            </div>

        </div>
    )
}

export default Footer
