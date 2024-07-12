import React, { useState, useRef } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import companyLogo from '../assets/companyLogo.jpg'

const CustomNavDropdown = ({ title, children, drop, dropend }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <NavDropdown
      title={title}
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      drop={drop}
      dropend={dropend}
    >
      {children}
    </NavDropdown>
  );
};

const Header = () => {
  
  return (
  
    <Navbar expand="lg" className="px-5 " style={{ padding: 0 }}>
      <Navbar.Brand href="/">
        {/* <img
          src="https://www.verifasttech.com/wp-content/uploads/2018/09/logo.png"
          srcSet="https://www.verifasttech.com/wp-content/uploads/2018/09/logo.png 1x, https://www.verifasttech.com/wp-content/uploads/2018/09/VeriFast-Retina-Logo.png 2x"
          width="227"
          height="35"
          alt="VeriFast Technologies Logo"
          data-retina_logo_url="https://www.verifasttech.com/wp-content/uploads/2018/09/VeriFast-Retina-Logo.png"
          className="fusion-standard-logo"
        /> */}
        <img
          src={companyLogo}
          width="80"
          alt="Let's Create New Company Logo"
          className="fusion-standard-logo"
        />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ms-auto">
          <Nav.Link href="/" active>
            Home
          </Nav.Link>
          <CustomNavDropdown title="Services & Solutions">         
            <CustomNavDropdown title="Semiconductor Service" drop="end">
              <NavDropdown.Item href="/ASICDesign">ASIC Design & Verification</NavDropdown.Item>
              <NavDropdown.Item href="/SemiconductorServices">Semiconductor Design Service</NavDropdown.Item>
            </CustomNavDropdown>
            <CustomNavDropdown title="Engineering Service" drop="end">
              <NavDropdown.Item href="/EmbeddedEngineeringService">Embedded Engineering</NavDropdown.Item>
              <NavDropdown.Item href="/SemiconductorServices">Semiconductor Design Service</NavDropdown.Item>
            </CustomNavDropdown>
            <NavDropdown.Item href="/Software">Software Service</NavDropdown.Item>
          </CustomNavDropdown>

          <CustomNavDropdown title="Products">
            <NavDropdown.Item href="/VerificationIps">Verification Ips</NavDropdown.Item>
            <NavDropdown.Item href="/EmbeddedProduct">Embedded Software Products</NavDropdown.Item>
          </CustomNavDropdown>

          <CustomNavDropdown title="Training">
            <NavDropdown.Item href="https://www.vedasity.live/" target="_blank">Vedasity</NavDropdown.Item>
          </CustomNavDropdown>

          <CustomNavDropdown title="Company">
            <NavDropdown.Item href="/About">About Us</NavDropdown.Item>
            <NavDropdown.Item href="/Partners">Partners</NavDropdown.Item>
            <NavDropdown.Item href="/Careers">Careers</NavDropdown.Item>
          </CustomNavDropdown>
          
          <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
