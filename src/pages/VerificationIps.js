import React,{useEffect} from "react";
import styles from "./VerificationIps.module.css";
import Soft from "../assets/vip1.webp";
import AOS from "aos";
import ContactAll from "./ContactAll";
const VerificationIps = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const Partner = (props) => {
    const { partners } = props;
    return (
      <div className={styles["partner-card"]}>
        <img src={partners.image} alt="p"></img>
        <p>{partners.detail}</p>
      </div>
    );
  };
  const partList = [
    {
      id: 1,
      image: "./images/v1.png",
      detail: "Native SystemVerilog/UVM",
    },
    {
      id: 2,
      image: "./images/v2.png",
      detail: "Built-In Verification Plans & Coverage",
    },
    {
      id: 3,
      image: "./images/v3.png",
      detail: "Source Code Test Suites",
    },
    {
      id: 4,
      image: "./images/v4.png",
      detail: "Support for the Latest Protocol Specifications",
    },
  ];

  return (
    <>
      <div className={styles["hero-section"]}>
        <h1 className={styles.heading} data-aos="fade-up">Verification IP</h1>
      </div>
      <div className={styles["software-container"]}>
        <div className={styles["software-detail"]}>
          <h1 className={styles.title}data-aos="fade-right">Overview</h1>
          <br />
          <p>
            VeriFast Verification IP (VIP) offers verification engineers access
            to cutting-edge protocols, interfaces, and memories essential for
            verifying their System-on-Chip (SoC) designs. Widely deployed across
            numerous projects, VeriFast VIP supports various industry-standard
            protocols
          </p>
          <br />
          <br />
          <p>
            VeriFast provides a comprehensive suite of test suites designed to
            accelerate testbench development and closure by offering tests for
            components specified in the protocols. These test suites are
            utilized in conjunction with the VIP.
          </p>
          <br />
          <br />
          <p>
            VeriFast offers Verification IP services aimed at enhancing
            productivity and mitigating risk by collaborating closely with
            domain experts to implement effective verification methodologies.
          </p>
        </div>
        <div className={styles["image-section"]}>
          <img src={Soft} alt="img" className={styles.images}data-aos="fade-left" />
        </div>
      </div>
      <div className={styles["partner-section"]}>
        <div>
          <h2 className={styles["partner-title"]}data-aos="fade-down">Key Benefits</h2>
        </div>
        <div className={styles["partner-container"]}>
          {partList.map((id) => (
            <Partner partners={id} />
          ))}
        </div>
      </div>
      <ContactAll></ContactAll>
    </>
  );
};

export default VerificationIps;
