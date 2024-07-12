import React, { useEffect } from "react";
import styles from "./SemiconductorService.module.css";
import Soft from "../assets/semicon_01.jpg";
import bg from "../assets/software.jpg";
import AOS from "aos";
import ContactAll from "./ContactAll";
const SemiconductorServices = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={`${styles["hero-section"]} ${styles["img-fluid"]}`}>
       {/* <img src={bg} alt="bg" className={styles["main-img"]} />*/}
        <h1 className={styles.heading} data-aos="fade-up">
          Semiconductor
        </h1>
      </div>
      <div className={styles["software-container"]}>
        <div className={styles["software-detail"]}>
          <br />
          <p>
            In today's rapidly evolving technological environment, the
            semiconductor industry stands as a critical driver of innovation,
            underpinning the operation of countless electronic devices. As
            manufacturers strive to meet the escalating demand for semiconductor
            solutions that are more efficient, powerful, and cost-effective,
            they encounter a multitude of challenges. These challenges encompass
            intricate requirements in very large-scale integration (VLSI) design
            and verification, the necessity for compact form factors, stringent
            quality benchmarks, compressed time-to-market schedules, and the
            imperative for exhaustive testing and validation protocols.
          </p>
          <br />
          <br />
          <p>
            VeriFast, as a company deeply entrenched in this industry, maintains
            close collaborative relationships with a spectrum of key players,
            ranging from integrated device manufacturers (IDMs) and silicon
            manufacturers to original equipment manufacturers (OEMs), foundries,
            electronic design automation (EDA) firms, and intellectual property
            (IP) vendors.
          </p>
          <br />
          <br />
          <p>
            Leveraging our profound expertise in VLSI design and verification
            services, we ensure that our clients receive cutting-edge solutions
            that not only meet but surpass the most exacting quality standards.
            Furthermore, our services are engineered to expedite our clients'
            time-to-market objectives, thereby positioning them for triumph
            within the dynamic and fiercely competitive semiconductor landscape.
          </p>
        </div>
        <div className={styles["image-section"]}>
          <img src={Soft} alt="img" className={styles.images} />
        </div>
      </div>
      <ContactAll></ContactAll>
    </>
  );
};

export default SemiconductorServices;
