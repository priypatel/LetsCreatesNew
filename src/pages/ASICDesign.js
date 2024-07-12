import React from "react";
import styles from "./ASICDesign.module.css";
import Career from "../assets/ASIC-Development.jpg";
import ContactAll from "./ContactAll";
const ASICDesign = () => {
  return (
    <>
      <div className={styles["career-container"]}>
        <div className={styles["career-detail"]}>
          <p>
            VeriFast provides extensive services for Design, Development &
            Verification of ASIC & FPGA
          </p>
          <br />
          <br />
          <p>
            Our team along with its partners take full responsibility of RTL
            Design, right from inception to design, synthesis, meeting timing,
            area and power requirements
          </p>
          <br />
          <br />
          <p>
            Our verification services model provides for mutually benefit
            partnership with <b>Design & Verification </b>teams in assisting
            them get their chips verified. With this model verification manager
            can augment their teams fast by adding 3, 5, 10, 15+ engineers to
            their team for achieving critical verification deadlines and
            maximizing verification coverage.
          </p>
          <br />
          <h2 className={styles["title"]}>Our Specialization includes:</h2>
          <br />
          <ul className={styles["list-item"]}>
            <li className={styles.list}>Architecture Development</li>
            <li className={styles.list}>RTL Development & Integration</li>
            <li className={styles.list}>
              Formal Verification & Equivalence checking
            </li>
            <li className={styles.list}>Synthesis & STA</li>
            <li className={styles.list}>
              Verification using System Verilog, Vera, systemC etc.
            </li>
            <li className={styles.list}>Verification using Methodologies like UVM, VMM</li>
          </ul>
          <br />
        </div>
        <div className={styles.image}>
          <img src={Career} alt="img" className={styles.images} />
        </div>
      </div>
      <ContactAll></ContactAll>
    </>
  );
};

export default ASICDesign;
