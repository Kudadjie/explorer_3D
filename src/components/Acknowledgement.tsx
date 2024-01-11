"use client";
import React from "react";
import Image from "next/image";
import thanksImage from "../../public/assets/thanks.jpg";
import styles from "./Acknowledgement.module.scss";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";

function Acknowledgement() {
  const TextSection = () => {
    const { toggleAcknowledgementModal } = useInteractiveViewerStore(
      (state) => ({
        toggleAcknowledgementModal: state.toggleAcknowledgementModal,
      })
    );

    return (
      <div className={styles.textSection}>
        {/*  */}
        <p
          onClick={() => {
            toggleAcknowledgementModal();
          }}
        >
          close
        </p>
        <h1>Acknowledgements</h1>
        <p>
          We wish to express our heartfelt gratitude to everyone who supported
          us with this project, especially our supervisior, Dr. Elikplim Abla
          Dzikunoo as well as Dr. Daniel Kwayisi. Special thanks also goes to
          Dr. Samuel Nunoo, Prof. M. S. Yidana, Solomon Abban, Lab Technicians
          and the Teaching Assistants at the Department of Earth Science -
          University of Ghana, as well as the locals in the Weija-Bortianor
          (Ghana) area.
          <br></br>
          <br></br>
          <b style={{ margin: 0 }}>Team and Roles:</b>
          <br></br>Isaac Antwi - Geologist
          <a
            href="https://www.linkedin.com/in/isaac-antwi-1138171a1/"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{
                color: "#6f7680",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            ></i>
          </a>
          <br></br> Angelica Annan - Geologist
          <a>
            <i
              className="fa-brands fa-linkedin"
              style={{
                color: "#6f7680",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            ></i>
          </a>
          <br></br>Kenneth D. Ansah - Drone Pilot
          <a
            href="https://www.linkedin.com/in/kenneth-ansah-638259223/"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{
                color: "#6f7680",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            ></i>
          </a>
          <br></br>John David K.T. Kudadjie - Software Lead
          <a
            href="https://www.linkedin.com/in/john-david-kudadjie/"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{
                color: "#6f7680",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            ></i>
          </a>
        </p>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <Image
        src={thanksImage}
        alt="#"
        height={620}
        width={480}
        className={styles.thanksImage}
      />
      <TextSection></TextSection>
    </div>
  );
}

export default Acknowledgement;
