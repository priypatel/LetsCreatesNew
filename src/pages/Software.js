import React,{useEffect} from "react";
import styles from "./Software.module.css";
import Soft from "../assets/with-a-passion-for-driving.jpg";
import AOS from "aos";
import ContactAll from "./ContactAll";
const Software = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const Partner = (props) => {
  const { partners } = props;
  const detailParts = partners.detail.split('.').map((part, index) => (
    <li key={index}>{part.trim()}</li>
  ));
    return (
      <div className={styles["partner-card"]}>
        <div className={styles.header}>    
         <h3>{partners.title} </h3>
        </div>
        <div className={styles.detail}>
          <ul>
            {detailParts}
          </ul>  
        </div>
      </div>
    );
  };
  const partList = [
    {
      id: 1,
      title:"Architecture",
      detail: "Co-design hardware to ensure it meets customer software expectations",
    },
    {
      id: 2,
      title:"Pre-silicon SW running on RTLSIM",
      detail:"Bootrom/Bootloader and Device driver.IP verification Software development",
    },
    {
      id: 3,
      title:"Pre-silicon SW running on FPGA",
      detail:"Linux and U-Boot BSP development on FPGA.Device Driver Development and Verification.SoC Integration Verification by running full SW stack",
    },
    {
      id: 4,
      title:"Post-silicon SW running on SoC",
      detail:"SoC/Board bringup, and optimization.SDK development",
    },
  ];

  return (
    <>
      <div className={styles["hero-section"]}>
        <h1 className={styles.heading} data-aos="fade-up">Software</h1>
      </div>
      <div className={styles["software-container"]}>
        <div className={styles["software-detail"]}>
          <br />
          <p>
            VeriFast places emphasis on custom silicon that extends beyond mere
            hardware specifications, encompassing the fulfillment of
            comprehensive system-level application requirements. The pivotal
            role played by VeriFast's software development is instrumental in
            ensuring our customers' success.
          </p>
          <br />
          <br />
          <p>
            Throughout the software development journey, VeriFast actively
            collaborates with our clients to establish an ecosystem that
            guarantees steadfast and dependable custom SoC performance.
          </p>
          <br />
          <br />
          <p>
            Our in-house Software team at VeriFast boasts over one decade of
            expertise in system-level software engineering.
          </p>
        </div>
        <div className={styles["image-section"]}>
          <img src={Soft} alt="img" className={styles.images}data-aos="fade-left" />
        </div>
      </div>
      <div className={styles["lifecycle-container"]}>
        <h2 className={styles["software-heading"]} data-aos="fade-right">Engaged Throughout the Product Lifecycle</h2>
              <div className={styles["partner-section"]}>
        <div className={styles["partner-container"]}>
          {partList.map((id) => (
            <Partner partners={id} />
          ))}
        </div>
      </div>
      </div>
      <ContactAll></ContactAll>

    </>
  );
};

export default Software;
