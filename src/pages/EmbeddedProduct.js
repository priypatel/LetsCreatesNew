import React,{useEffect} from 'react'
import Soft from "../assets/Embedded.png";
import styles from "./EmbeddedProduct.module.css";
import AOS from "aos";
import ContactAll from './ContactAll';
const EmbeddedProduct = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div className={styles["hero-section"]}>
      <h1 className={styles.heading}  data-aos="fade-up">Embedded Software</h1>
    </div>
    <div className={styles["software-container"]}>
      <div className={styles["software-detail"]}>
        <br />
        <p>The embedded software team at VeriFast specializes in providing support across various stages of software development, including pre-silicon verification, post-silicon validation, and the production-quality development of software for a diverse range of applications. These applications span cellular and IoT technologies, encompassing both physical and protocol layers, as well as sectors such as networking, video processing, and radar signal processing.
        </p>
        <br />
        <br />
        <p>
        For safety-critical projects, we adhere to the V-model, a rigorous design and testing framework, ensuring the highest standards of reliability and robustness. Employing state-of-the-art test methodologies, we guarantee comprehensive coverage throughout the development process. Our embedded software services encompass a wide array of offerings, including design documentation, implementation, and validation, providing our clients with end-to-end support and expertise to bring their projects to fruition.
        </p>
      </div>
      <div className={styles["image-section"]}>
        <img src={Soft} alt="img" className={styles.images}data-aos="fade-left" />
      </div>
    </div>
    <ContactAll></ContactAll>
  </>
  )
}

export default EmbeddedProduct