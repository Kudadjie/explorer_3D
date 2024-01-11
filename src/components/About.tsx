"use client";
import React from "react";
import Image from "next/image";
import thanksImage from "../../public/assets/thanks.jpg";
import styles from "./Acknowledgement.module.scss";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";

function About() {
  const TextSection = () => {
    const { toggleAboutModal } = useInteractiveViewerStore((state) => ({
      toggleAboutModal: state.toggleAboutModal,
    }));

    return (
      <div className={styles.textSection}>
        {/*  */}
        <p
          onClick={() => {
            toggleAboutModal();
          }}
        >
          close
        </p>
        <h1>The Project</h1>
        <p>
          The 3D explorer Project was intented to be a web visualizer for a 3D
          photogrammtery produced model developed while undertaking a senior
          year project work by students of the Department of Earth Science -
          University of Ghana.
          <br />
          <br />
          <i style={{ margin: "0px" }}>Project Work Thesis:</i>
          <br />
          <b>
            SUPPLEMENTING TRADITIONAL GEOLOGICAL MAPPING WITH DRONE MAPPING: A
            FRONTIER TEST WITH QUARTZITES AND PHYLLITES IN THE TOGO STRUCTURAL
            UNIT AT THE BORTIANOR QUARRY, GHANA.
          </b>
          <br></br>
          <br></br>
          Traditional geological mapping methods and its associated outputs fall
          short in terms of delivering the desired level of precision and
          accessibility required for effectively visualizing visible structural
          and geological information in three dimensions (3D). Geologists are
          limited to using 2D geological maps and, in some cases, field
          photographs that may not accurately represent what was truly observed.
          Additionally, the absence of a 3D representation of the field makes it
          challenging to recreate the field observations. In response to these
          limitations, traditional mapping was carried to explore the
          distinctive geological attributes of quartzites and phyllites within
          the Togo Structural Unit with respect to a particular quarry site in
          Bortianor – Weija. To enhance this traditional mapping effort, a
          three-dimensional model of the mapped area was created using structure
          from motion (SfM) photogrammetry using geotagged vertical and oblique
          images captured by an unmanned aerial vehicle (drone) from varying
          altitudes. Data from the traditional mapping was then supposed to be
          incorporated into the 3D model, via clickable markers or annotations
          on the model to view structural measurements, 2D field photographs and
          any other geologic data. The results of this project offer valuable
          insights and practical recommendations in the fields of urban
          planning, land use, and geological management. Essentially, this
          project exemplifies the synergy between modern technology and
          geological science, with the overarching goal of producing a highly
          detailed and accurate map of the study area. This map proves to serve
          as a crucial resource for regional development and enriches our
          understanding of geological formations, mineral potential, and natural
          hazards within the study area and beyond.
          <br />
          <br />
          Unfortuantely, due to time, budget and computer hardware constraints,
          the full high definition 3D model could not be rendered online.
          However, a decimated version of the model can be viewed via Agisoft
          Cloud. The full HD model is also available for download on Agisoft
          Cloud.
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

export default About;
