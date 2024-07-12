import React,{useEffect} from "react";
import  styles from "./Careers.module.css";
import Career from "../assets/Careers-img.jpg";
import ContactAll from "./ContactAll";
import AOS from "aos";
const Careers = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>

    <div className={styles["career-container"]}>
      <div className={styles["career-detail"]}>
        <h2 className={styles["career-heading"]} data-aos="fade-right">Current Openings Trainer for VLSI Design & Verification</h2><br />
        <ul className={styles["list-item"]}>
          <li  className={styles.list}>Role: Trainer for VLSI Design & Verification</li>
          <li className={styles.list}>Qualification: BE ECE/CS; ME VLSI</li>
          <li className={styles.list}>Work Experience: 3+years</li>
          <li className={styles.list}>Job Location: Telecommute option</li>
        </ul><br />
        <h2 className={styles["career-heading"]}data-aos="fade-right">Technical Skills Required</h2><br />
        <ul className={styles["list-item"]}>
          <li className={styles.list}>
            The candidate should possess a thorough knowledge of digital system
            design
          </li>
          <li className={styles.list}>The candidate should be proficient in Verilog</li>
          <li className={styles.list}>The candidate should have had exposure to FPGA design flow is desirable</li>
          <li className={styles.list}>The candidate should also have had prior knowledge in design verification</li>
          <li className={styles.list}>The candidate should be able to independently develop material for the above module</li>
          <li className={styles.list}>The candidate should desire and also be able to guide students in design and verification</li>
        </ul>
      </div>
      <div className={styles.image}>
        <img src={Career} alt="img" className={styles.images}data-aos="fade-left" />
      </div>
    </div>
    <ContactAll></ContactAll>
    </>
  );
};

export default Careers;
