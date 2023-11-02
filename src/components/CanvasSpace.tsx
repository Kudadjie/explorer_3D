"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import Tetromino from "./Tetromino";
import styles from "./CanvasSpace.module.scss";

const Model = () => {
  useGLTF.preload("/model/Project.gltf");
  const { scene } = useGLTF("/model/Project.gltf");

  // return <primitive object={scene} />;
  return <div></div>;
};

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Html center className={styles.loadingModelContainer}>
      {!errors[0] && (
        <>
          <Tetromino />
          <p style={{ marginTop: "270px", color: "white", width: "50vw" }}>
            Loading 3D Model...
            <br></br>
            <br></br>
            <em>
              This may take awhile depending on your internet speed as the model
              is well over 100MB.
            </em>
          </p>
        </>
      )}

      {errors[0] && (
        <>
          <p>
            <i
              className="fa-solid fa-circle-exclamation fa-xl"
              style={{ color: "#e51f1f" }}
            ></i>
          </p>
          <span style={{ color: "white", marginLeft: "10px" }}>
            An error occured. Try again.
          </span>
        </>
      )}
    </Html>
  );
}

function CanvasSpace() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <directionalLight />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default CanvasSpace;
