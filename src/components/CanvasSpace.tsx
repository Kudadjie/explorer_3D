"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import Tetromino from "./Tetromino";
import styles from "./CanvasSpace.module.scss";

const Model = () => {
  // useGLTF.preload("/model/model_reduced.glb");
  // // const { scene } = useGLTF("/model/model_reduced.glb");

  // // console.log(scene);
  // // //don't put model in scene, yet.
  // return <primitive object={scene} />;
  return <></>;
};

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Html center className={styles.loadingModelContainer}>
      {!errors[0] && (
        <>
          <Tetromino />
          <p style={{ marginTop: "170px", color: "white", width: "50vw" }}>
            Loading 3D Model...
          </p>
          <p style={{ fontSize: "smaller" }}>
            This may take awhile depending on your internet speed.
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
