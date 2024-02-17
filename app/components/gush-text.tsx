import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Text3D,
} from "@react-three/drei";

export function GushText() {
  return (
    <Text3D
      font="/gush.json"
      height={10}
      bevelEnabled
      bevelThickness={1}
      bevelSize={0.05}
      bevelSegments={24}
    >
      GUSH
      {/* <meshNormalMaterial /> */}
      <MeshDistortMaterial
        distort={0.1}
        color={"blue"}
        specularColor={"green"}
        specularIntensity={200}
        roughness={0.7}
      />
      {/* <MeshWobbleMaterial factor={0.001} speed={5}></MeshWobbleMaterial> */}
    </Text3D>
  );
}
