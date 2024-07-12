import React,{useEffect} from "react";
import styles from "./EmbeddedEngineeringService.module.css";
import Soft from "../assets/Embedded.png";
import AOS from "aos";
import ContactAll from "./ContactAll";
const EmbeddedEngineeringService = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const Partner = (props) => {
    const { partners } = props;
    return (
      <div className={styles["partner-card"]}>
        <img src={partners.image} alt="p"></img>
        <h2 className={styles["em-title"]}>{partners.title}</h2>
        <br />
        <p>{partners.detail}</p>
      </div>
    );
  };
  const partList = [
    {
      id: 1,
      image: "./images/e1.png",
      title: "Product Development",
      detail:
        "Incorporate security by design in your hardware, firmware, and middleware by leveraging our capabilities across the product development life cycle.",
    },
    {
      id: 2,
      image: "./images/e2.png",
      title: "Software Engineering",
      detail:
        "Overcome challenges including low power, small footprint, and low-failure tolerance with our services across board support package development, firmware, device drivers, protocols, and cross-platform porting.",
    },
    {
      id: 3,
      image: "./images/e3.png",
      title: "Hardware Engineering",
      detail:
        "Optimize your hardware with our services including design and development of multilayer PCBs (printed circuit boards up to 24 layers) and FPGA-based hardware (field programmable gate arrays), prototyping and testing, failure analysis, and manufacturing.",
    },
    {
      id: 4,
      image: "./images/e4.png",
      title: "Verification and Validation",
      detail:
        "Develop solutions based on our broad experience in validating system and product safety. We enable rigorous testing at the quickest possible turnaround times. Our extensive interoperability testing capabilities help prevent data loss, operational issues, and compromises in functionality.",
    },
    {
      id: 5,
      image: "./images/e5.png",
      title: "Embedded Software Development",
      detail:
        "Build optimal real-time performance devices for critical hardware and software systems with our development services covering navigation devices, mobile applications, multimedia, and wireless communication. Follow the model-based-design approach with the help of simulation tools to design and verify safety-critical embedded software applications.",
    },
    {
      id: 6,
      image: "./images/e6.png",
      title: "Obsolescence Management",
      detail: "Ensure equivalent component identification, code re-usability, and input-cost reduction through our value-added services, well-defined processes, proven methodologies, and tools. Seamlessly upgrade to newer technologies and next-generation products.",
    },
    {
      id: 7,
      image: "./images/e7.png",
      title: "Power Electronics",
      detail: "Design power supplies for various topologies, sensor interfaces, and process controls. Utilize our services to create control algorithms for AC/DC drives, power device selection, and compliance.",
    },
  ];


  return (
    <>
      <div className={styles["hero-section"]}>
        <h1 className={styles.heading}  data-aos="fade-up">Embedded Engineering </h1>
      </div>
      <div className={styles["software-container"]}>
        <div className={styles["software-detail"]}>
          <br />
          <p>
            New age electronic devices are everywhere around us and embedded
            systems are at the core of these machines. Ride the next wave of
            embedded computing empowered with built-in intelligence. Choose the
            right partner to launch effective and secure solutions at the
            fastest time possible.
          </p>
        </div>
        <div className={styles["image-section"]}>
          <img src={Soft} alt="img" className={styles.images}data-aos="fade-left" />
        </div>
      </div>
      <div className={styles["process-container"]}>
        <h2 className={styles["software-heading"]}data-aos="fade-right">
          Powering the Embedded Value Chain from Concept to Production
        </h2>
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

export default EmbeddedEngineeringService;
