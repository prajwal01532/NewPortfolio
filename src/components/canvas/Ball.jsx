import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const groupRef = useRef();
  const [isMoving, setIsMoving] = useState(true);
  
  useFrame(({ clock }) => {
    if (!isMoving) return;
    
    const time = clock.getElapsedTime();
    // Smaller movement range to stay within container
    const range = 0.2;
    const position = Math.sin(time * 1.5) * range;
    
    if (groupRef.current) {
      groupRef.current.position.x = position;
      // Add slight rotation for 3D effect
      groupRef.current.rotation.y = Math.sin(time) * 0.1;
    }
  });

  const handleClick = () => {
    setIsMoving(!isMoving);
  };

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.7} />
      <group ref={groupRef} onClick={handleClick}>
        {/* Main icon box */}
        <mesh castShadow receiveShadow scale={1.6}>
          <boxGeometry args={[1.4, 1.4, 0.2]} />
          <meshStandardMaterial
            color='#151030'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading={true}
          />
          <Decal
            position={[0, 0, 0.11]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1.4}
            map={decal}
            flatShading={false}
          />
        </mesh>
        
        {/* Border box */}
        <mesh scale={1.7}>
          <boxGeometry args={[1.4, 1.4, 0.1]} />
          <meshStandardMaterial
            color='#00ff00'
            transparent
            opacity={0.2}
            wireframe={true}
            emissive='#00ff00'
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Additional glow effect */}
        <mesh scale={1.75}>
          <boxGeometry args={[1.4, 1.4, 0.05]} />
          <meshStandardMaterial
            color='#00ff00'
            transparent
            opacity={0.1}
            wireframe={true}
            emissive='#00ff00'
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
