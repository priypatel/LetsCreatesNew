import React,{useEffect} from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const Partner = (props) => {
    const { partners } = props;
    return (
      <div className={styles["partner-card"]}>
        <NavLink to="/Partners">
          <img src={partners.image} alt="p"></img>
        </NavLink>
      </div>
    );
  };
  
  const partList = [
    {
      id: 1,
      image: "./images/p1.webp",
    },
    {
      id: 2,
      image: "./images/p2.webp",
    },
    {
      id: 3,
      image: "./images/p3.png",
    },
    {
      id: 4,
      image: "./images/p4.webp",
    },
    {
      id: 5,
      image: "./images/p5.webp",
    },
  ];
  return (
    <>
      <div className={styles["hero_section"]}>
        <div className={styles.main} >
          <h1 className={styles.main_header}data-aos="fade-down" >VERIFAST TECHNOLOGIES</h1>
          <h1 className={styles["secondary_header"]}>
            The Leader in VLSI Design Verification Services
          </h1>
          <NavLink to="/About">
            <p className={styles.button}>
              LEARN MORE ABOUT CONSULTING SERVICES
            </p>
          </NavLink>
        </div>
      </div>
      <div className={styles["partner-section"]}>
        <div className={styles["partner-title"]}>
          <h2 data-aos="fade-right">Our Partners</h2>
        </div>
        <div className={styles["partner-container"]}>
          {partList.map((id) => (
            <Partner partners={id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
