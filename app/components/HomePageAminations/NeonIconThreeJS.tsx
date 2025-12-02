// "use client";

// import React, { useRef, useLayoutEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import * as THREE from "three";
// import gsap from "gsap";

// // --- The component that defines the 3D shape ---
// const GlowingLineShape: React.FC = () => {
//   // The ref will hold a THREE.Line object.
//   const lineRef = useRef<THREE.Line>(null);
  
//   const points: THREE.Vector3[] = [];
//   points.push(new THREE.Vector3(-3, -2, 0));
//   points.push(new THREE.Vector3(-1, 0, 0));
//   points.push(new THREE.Vector3(1, -2, 0));
//   points.push(new THREE.Vector3(3, 0, 0));
//   points.push(new THREE.Vector3(3, 3, 0));
//   points.push(new THREE.Vector3(5, 0, 0)); 
//   points.push(new THREE.Vector3(3, -2, 0));

//   const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

//   useLayoutEffect(() => {
//     // Safety check for TypeScript
//     if (!lineRef.current) return;

//     const ctx = gsap.context(() => {
//       // We can safely access .current now
//       lineRef.current!.scale.set(0,0,0);
//       lineRef.current!.rotation.z = -Math.PI / 2;

//       gsap.to(lineRef.current!.scale, {
//         x: 1, y: 1, z: 1, duration: 1.5, ease: "back.out(1.7)"
//       });
//       gsap.to(lineRef.current!.rotation, {
//         z: 0, duration: 1.5, ease: "power3.out"
//       });
//     }, lineRef);

//     return () => ctx.revert();
//   }, []);

//   useFrame((state, delta) => {
//     if(lineRef.current) {
//        // lineRef.current.rotation.y += delta * 0.2;
//     }
//   });

//   return (
//     <line ref={lineRef} geometry={lineGeometry}>
//       <lineBasicMaterial 
//         // R3F types handle THREE.Color correctly
//         color={new THREE.Color("#00fffa").multiplyScalar(20)} 
//         linewidth={10} 
//       />
//     </line>
//   );
// };


// // --- The Main Canvas Component ---
// const NeonIconThreeJS: React.FC = () => {
//   return (
//     <div style={{ width: "400px", height: "400px", background: "#050505" }}>
//       <Canvas camera={{ position: [0, 0, 10] }}>
//         <color attach="background" args={["#050505"]} />
        
//         <GlowingLineShape />

//         <EffectComposer>
//           <Bloom 
//             intensity={1.5} 
//             luminanceThreshold={1} 
//             luminanceSmoothing={0.9} 
//             // The 'height' prop is not part of the standard Bloom types 
//             // and can be removed as it's often inferred or unnecessary.
//           />
//         </EffectComposer>
//       </Canvas>
//     </div>
//   );
// };

// export default NeonIconThreeJS;