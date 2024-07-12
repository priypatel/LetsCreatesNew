import React,{useEffect} from "react";
import styles from "./Partners.module.css";
import {NavLink} from "react-router-dom";
import AOS from "aos";
const Partners = () => {
  const Partner = (props) => {
    const { partners } = props;
    return (
      <div className={styles["partner-card"]}>
        <div className={styles.logo}>
          <NavLink to={partners.link} target="_blank">
          <img src={partners.image} alt="p"></img></NavLink>
        </div>
        <div className={styles.detail}>
          <h1>{partners.title}</h1><br /><br />
          <p>{partners.detail}</p>
        </div>
      </div>
    );
  };
  const partList = [
    {
      id: 1,
      image: "./images/asicsoft-logo1.jpg",
      link: "https://asicsoft.com/",
      title:"ASICSoft",
      detail: "ASICSoft is a Silicon Valley based design services and EDA tools reseller. ASICSoft provides sales and marketing support for VeriFast’s North American region.",
    },
    {
      id: 2,
      image: "./images/mentor.png",
      link:"https://eda.sw.siemens.com/en-US/",
      title:"SIEMENS",
      detail:"The Questa Vanguard Program (QVP) extends Mentor Graphics’ breadth of design and verification technologies through partnerships with industry-leading companies. QVP partners provide verification related tools and methods, verification IP, conversion services, training and consulting based on Mentor Graphics industry leading Questa verification platform. The program was established to bring design and verification engineers world-class product integrations and interoperability to enhance their Questa verification options and build a strong and comprehensive SystemVerilog ecosystem.",
    },
    {
      id: 3,
      image: "./images/volansys.png",
      link:"https://www.volansys.com/",
      title:"Volansys",
      detail:"Volansys was founded in 2008, by a team of experienced engineers to provide technology solutions and services along with exceptional business value. Volansys’s expertise lie in Electronic Product Engineering services, Mobility & Cloud Services and Software Solutions & Services.",
    },
    {
      id: 4,
      image: "./images/chipware_logo.png",
      link:"https://chipwaretechnologies.com/",
      title:"Chipware Technologies",
      detail:"Chipware Technologies is a Technology solution provider in the domain of VLSI, System Design Services in Digital, Analog & RF with complete turnkey development with a link to Supply chain management. Chipware Technologies also represents leading VLSI and System design EDA Tools for India market.",
    },
    {
      id: 5,
      image: "./images/p5.webp",
      link:"https://www.sugarloafdigital.com/",
      title:"Sugarloaf Digital",
      detail:"Sugarloaf Digital is a modern marketing and creative agency that offers various solutions proven to connect brands of all sizes with potential customers while engaging with current customers. Sugarloaf Digital build loyalty, increases visibility, manages the content and tracks results for their customers with an easy-to-use suite of innovative online, social, and mobile marketing tools.",
    },
  ];
 
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <>
    <div className={styles["hero-section"]}>
          <h1 className={styles.heading} data-aos="fade-up">Partners</h1>
    </div>

      <div className={styles["partner-section"]}>
        <div className={styles["partner-container"]}>
          {partList.map((id) => (
            <Partner partners={id} />
          ))}
        </div>
      </div>

    </>
  );
};

export default Partners;
