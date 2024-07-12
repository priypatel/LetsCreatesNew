import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faSquareFacebook,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <NavLink to="./About">
              <p>About Us</p>
            </NavLink>
            <NavLink to="./LeadershipTeam">
              <p>Leadership Team</p>
            </NavLink>
            <NavLink to="./Partners">
              <p>Partners</p>
            </NavLink>
            <NavLink to="./Careers">
              <p>Careers</p>
            </NavLink>
            <NavLink to="./ContactUs">
              <p>Contact Us</p>
            </NavLink>
          </div>
          <div className="sb_footer-links_div">
            <h4>Services</h4>
            <NavLink to="./SemiconductorServices">
              <p>Semiconductor Services</p>
            </NavLink>
            <NavLink to="./EmbeddedServices">
              <p>Embedded Services</p>
            </NavLink>
            <NavLink to="./Software">
              <p>Software</p>
            </NavLink>
          </div>
          <div className="sb_footer-links_div">
            <h4>Domain & Expertise</h4>
            <NavLink to="./AnalogPower">
              <p>Analog & Power</p>
            </NavLink>
            <NavLink to="./ChipletsDietodieInterface">
              <p>Chiplets & Die to die Interface</p>
            </NavLink>
          </div>
          
          <div className="sb_footer-links_div_add">
            <h4>Get In Touch</h4>
            <NavLink
              to="https://www.google.com/maps/place/4900+Hopyard+Rd+lobby+suite+100,+Pleasanton,+CA+94588,+USA/@37.6935045,-121.9047494,17z/data=!3m1!4b1!4m6!3m5!1s0x808febfc4a9ea4a3:0x343fca409fedccc0!8m2!3d37.6935045!4d-121.9047494!16s%2Fg%2F11m_lfzb_b?entry=ttu"
              target="_blank"
            >
              {" "}
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="op" /> 4900
                Hopyard Road Suite 100 Plesanton, CA 94588
              </p>
            </NavLink>
            <NavLink
              to="https://www.google.com/maps/place/4900+Hopyard+Rd+lobby+suite+100,+Pleasanton,+CA+94588,+USA/@37.6935045,-121.9047494,17z/data=!3m1!4b1!4m6!3m5!1s0x808febfc4a9ea4a3:0x343fca409fedccc0!8m2!3d37.6935045!4d-121.9047494!16s%2Fg%2F11m_lfzb_b?entry=ttu"
              target="_blank"
            >
              {" "}
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="op" /> 4900
                Hopyard Road Suite 100 Plesanton, CA 94588
              </p>
            </NavLink>
            <NavLink to="mailto:info@verifasttech.com" target="_blank">
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="op" />{" "}
                info@verifasttech.com
              </p>{" "}
            </NavLink>

            <div className="socialmedia">
              <NavLink to="https://www.linkedin.com/company/verifast-technologies/mycompany/" target="_blank">
                {" "}
                <p>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="socialmedia_img"
                  />
                </p>{" "}
              </NavLink>

              <NavLink
                to="https://www.facebook.com/VeriFast.Technologies" target="_blank">
                {" "}
                <p>
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="socialmedia_img"
                  />
                </p>{" "}
              </NavLink>

              <NavLink
                to="https://twitter.com/verifasttech" target="_blank">
                {" "}
                <p>
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="socialmedia_img"
                  />
                </p>{" "}
              </NavLink>

              
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
