import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram
} from "react-icons/fa";

const ad = () => {
    return (
    <div className="ad">
      <div className="container">
        <div className="adSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="adSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exe- rcitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="adCircles">
                <li>
                  <FaFacebookF className="adIcon" />
                </li>
                <li>
                  <FaTwitter className="adIcon" />
                </li>
                <li>
                  <FaPinterest className="adIcon" />
                </li>
                <li>
                  <FaInstagram className="adIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ad
