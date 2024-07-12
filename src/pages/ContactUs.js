import React, { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "", // Clear error when input changes
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        errors[key] = "This field is required";
      }
    });

    setFormErrors(errors);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);


  return (
    <>
      <div className={styles["hero-section"]}>
        <h1 className={styles.heading} data-aos="fade-up">
          Contact Us
        </h1>
      </div>
      <div className={styles["contact-container"]}>
        <h2 className={styles["contact-heading"]}data-aos="fade-down">
          Questions on verification?
          <br /> Not sure where to start?
          <br /> Contact VeriFast today!
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
                  <p>"*" indicates required fields</p>
            <div className={styles.nameGroup}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className={styles.input1}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && (
                  <span className={styles.error}>{formErrors.firstName}</span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className={styles.input1}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && (
                  <span className={styles.error}>{formErrors.lastName}</span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company *</label>
            <input
              type="text"
              id="company"
              placeholder="Company"
              className={styles.input}
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            {formErrors.company && (
              <span className={styles.error}>{formErrors.company}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={styles.input}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className={styles.error}>{formErrors.email}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              placeholder="Message"
              className={styles.textarea}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {formErrors.message && (
              <span className={styles.error}>{formErrors.message}</span>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
