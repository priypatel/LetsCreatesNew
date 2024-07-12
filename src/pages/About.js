import React,{useEffect} from "react";
import  styles from "./About.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { CiFlag1, CiHeart } from "react-icons/ci";
import AOS from "aos";
const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <div className={styles["main-img-container"]}>
        <div className={styles["main-img"]}></div>
        <div className={styles.heading} data-aos="fade-up">
          <h1>About Us</h1>
        </div>
      </div>
      <div className={styles["about-container"]}>
        <p>
          Founded in 2012, VeriFast Technologies is the leader in ASIC
          Verification Training and Consulting.{" "}
        </p>
        <br />
        <p>
          Our training programs are designed for entry-level to seasoned
          engineers, and they are great for individuals and teams.
        </p>
        <br />
        <p>
          Our training programs and consulting expertise is in ASIC Verification
          with an intense focus on SystemVerilog and UVM.
        </p>
        <br />
        <p> Our clients range from semiconductor giants to startups.</p>
        <br />
        <p>
          Now, VeriFast’s core business is its Semiconductor, Embedded and
          Software Services and also provides various design solutions for
          global customers through its diverse network.
        </p>
        <br />
        <p> We are expend our business in the Analog and Domain section. </p>
      </div>
      <div className={styles["vision-container"]}>
        <div className={styles.vision}>
          <div >
            <IoEyeOutline className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h1>Our Mission</h1>
            <br />
            <p>
              To help our clients scale and accelerate development of their
              products with our top-notch product engineering services, broad
              technology expertise, disciplined execution and delivery
              excellence. We also want to build an amazing company that attracts
              talents and transform them to an exceptional edge.{" "}
            </p>
          </div>
        </div>
        <div className={styles.vision}>
          <div >
            <CiFlag1 className={styles.icon} />
          </div>
          <div className="content">
            <h1>Our Vision</h1>
            <br />
            <p>
              Our vision is empowering innovation through cutting-edge
              semiconductor solutions, driving progress in technology and
              industry.
            </p>
          </div>
        </div>
        <div className={`${styles.vision} ${styles.last}`}>
          <div >
            <CiHeart className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h1>Our Values</h1>
            <br />
            <p>
              <ul>
                <li>Focus on customer success</li>
                <li>Deliver the best</li>
                <li>Respect every individual</li>
                <li>Keep an open communication</li>
                <li>Create a collaborative environment</li>
                <li>Have passion for learning and growing</li>
                <li>Inspire others and work as a team</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["leadership-section"]}>
        <h2 className={styles["leader-heading"]}data-aos="fade-right">VeriFast Executive Leadership</h2>
        <div className={styles["leader-container"]}>
          <div className={`${styles["leader-img"]} ${styles.l1}`}></div>
          <div className={styles.leader}>
            <h2>Mike Chandler</h2>
            <h3>CEO and Co-founder</h3>
            <br />
            <p>
              Mr. Chandler has more than 15 years of marketing and selling
              design services and EDA tools to the semiconductor and technology
              sectors where he has been responsible for generating more than
              $50M in revenue. He earned his Bachelor’s Degree in Strategic
              Management from California State University, Sacramento. In
              addition to his role as CEO at VeriFast, Mr. Chandler is also
              President and CEO of ASICSoft, one of VeriFast’s technology
              partners. Mr. Chandler is responsible for overall company vision,
              forging key technology partnerships, and directing the sales and
              marketing effort for VeriFast.
            </p>
          </div>
        </div>
        <div className={styles["leader-container"]}>
          <div className={`${styles["leader-img"]} ${styles.l2}`}></div>
          <div className={styles.leader}>
            <h2>Shashank Bharadwaj</h2>
            <h3>General Manager India Operations</h3>
            <br />
            <p>
              Shashank Bharadwaj brings more than 18 years of experience in the
              Semiconductor industry with expertise in ASIC Design &
              Verification and state of the art DSP based SW product
              development. Prior to joining VeriFast Technologies, Shashank has
              played leadership and engineering roles in Broadcom & Tektronix.
              He has been instrumental in leading cross functional teams across
              geographies to ensure timely delivery of quality products and to
              consistently meet client expectations. Shashank has an MS from
              University of South Florida, majoring in Semiconductor/VLSI. After
              a stint in the US in Florida and the Silicon Valley, Shashank is
              currently based in Ahmedabad, India.
            </p>
          </div>
        </div>
        <div className={styles["leader-container"]}>
          <div className={`${styles["leader-img"]} ${styles.l3}`}></div>
          <div className={styles.leader}>
            <h2>Montukumar Makadia</h2>
            <h3>Strategic Business Advisor</h3>
            <br />
            <p>
            Montu Makadia has more than 27 years of rich experience, in Sales and Business Development, working very closely with Top Level EDA, Semiconductor and Embedded System Companies.  He has been instrumental in setting up successful businesses for both products and services companies targeting Chip Design, Verification and Embedded Firmware development.  He has held leading director level roles at EVE Design Automation, Synopsys, and eInfochips.  He completed his Bachelors’ degree in Electronics and Communication Engineering from Manipal Institute of Technology in 1993 and holds a post graduate diploma in VLSI Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
