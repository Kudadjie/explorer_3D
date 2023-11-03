import { useGLTF } from "@react-three/drei";

export default function Model() {
  useGLTF.preload("/model/final_model.gltf");
  const { scene } = useGLTF("/model/final_model.gltf");

  return <primitive object={scene} />;
  // return <div></div>;
}
