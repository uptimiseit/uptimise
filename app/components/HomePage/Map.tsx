// "use client";

// import React, { useRef, useLayoutEffect, useMemo } from 'react';
// import { Canvas } from '@react-three/fiber';
// import * as THREE from 'three';
// import gsap from 'gsap';

// // --- Constants ---
// const COLORS = {
//   red: '#F87171',
//   purple: '#A855F7',
//   blue: '#60A5FA',
//   gray: '#CBD5E1', 
//   mapFill: '#F1F5F9',
// };

// // --- Types ---
// type Vector3Tuple = [number, number, number];

// interface NodeProps {
//   position: Vector3Tuple;
//   color: string;
//   delay?: number;
// }

// interface ConnectionProps {
//   start: Vector3Tuple;
//   end: Vector3Tuple;
//   controlPoint: Vector3Tuple;
//   delay?: number;
// }

// // --- 1. The Node Component ---
// const Node = ({ position, color, delay = 0 }: NodeProps) => {
//   // Explicitly type the refs for TypeScript
//   const groupRef = useRef<THREE.Group>(null);
//   const ringRef = useRef<THREE.Line>(null);

//   const ringGeometry = useMemo(() => {
//     const curve = new THREE.EllipseCurve(0, 0, 1.2, 1.2, 0, 2 * Math.PI, false, 0);
//     const points = curve.getPoints(50);
//     return new THREE.BufferGeometry().setFromPoints(points);
//   }, []);

//   useLayoutEffect(() => {
//     // TypeScript check: Ensure refs exist before using them
//     if (ringRef.current) {
//       ringRef.current.computeLineDistances();
//     }

//     // Context for GSAP cleanup
//     const ctx = gsap.context(() => {
//       if (groupRef.current) {
//         gsap.to(groupRef.current.scale, {
//           x: 1.1,
//           y: 1.1,
//           duration: 2,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           delay: delay,
//         });
        
//         gsap.to(groupRef.current.rotation, {
//           z: Math.PI * 2,
//           duration: 20,
//           repeat: -1,
//           ease: "linear",
//         });
//       }
//     }, groupRef);

//     return () => ctx.revert();
//   }, [delay]);

//   return (
//     <group ref={groupRef} position={position}>
//       <mesh>
//         <circleGeometry args={[0.7, 32]} />
//         <meshBasicMaterial color={color} />
//       </mesh>

//       <line ref={ringRef} geometry={ringGeometry}>
//         <lineDashedMaterial
//           color={COLORS.gray}
//           linewidth={1}
//           scale={1}
//           dashSize={0.2}
//           gapSize={0.2}
//         />
//       </line>
//     </group>
//   );
// };

// // --- 2. The Connection Component ---
// const Connection = ({ start, end, controlPoint, delay = 0 }: ConnectionProps) => {
//   const lineRef = useRef<THREE.Line>(null);
//   const materialRef = useRef<THREE.LineDashedMaterial>(null);

//   const curveGeometry = useMemo(() => {
//     const curve = new THREE.QuadraticBezierCurve3(
//       new THREE.Vector3(...start),
//       new THREE.Vector3(...controlPoint),
//       new THREE.Vector3(...end)
//     );
//     const points = curve.getPoints(50);
//     return new THREE.BufferGeometry().setFromPoints(points);
//   }, [start, end, controlPoint]);

//   useLayoutEffect(() => {
//     if (lineRef.current) {
//       lineRef.current.computeLineDistances();
//     }

//     const ctx = gsap.context(() => {
//       if (materialRef.current) {
//         gsap.to(materialRef.current, {
//           dashOffset: -2,
//           duration: 3,
//           repeat: -1,
//           ease: "linear",
//           delay: delay,
//         });
//       }
//     }, lineRef); // Scope to the lineRef
//     return () => ctx.revert();
//   }, [delay, curveGeometry]);

//   return (
//     <line ref={lineRef} geometry={curveGeometry}>
//       <lineDashedMaterial
//         ref={materialRef}
//         color={COLORS.gray}
//         linewidth={1}
//         scale={1}
//         dashSize={0.2}
//         gapSize={0.3}
//         dashOffset={0}
//       />
//     </line>
//   );
// };

// // --- 3. Map Placeholder ---
// const WorldMapPlaceholder = () => {
//   const shapeGeometry = useMemo(() => {
//     const shape = new THREE.Shape();
//     // Americas
//     shape.moveTo(-6, 2); shape.lineTo(-8, 3); shape.lineTo(-9, 2); shape.lineTo(-8, -3); shape.lineTo(-6, -5); shape.lineTo(-4, -2); shape.lineTo(-5, 1);
//     // Eurasia
//     shape.moveTo(-2, 2); shape.lineTo(2, 3); shape.lineTo(6, 2); shape.lineTo(7, 0); shape.lineTo(5, -3); shape.lineTo(1, -4); shape.lineTo(-1, -2); shape.lineTo(-2, 0);
//     // Australia
//     shape.moveTo(6, -3.5); shape.lineTo(8, -3.5); shape.lineTo(8, -5); shape.lineTo(6, -5);

//     return new THREE.ShapeGeometry(shape);
//   }, []);

//   return (
//     <group position={[0, -1, -1]}>
//       <mesh geometry={shapeGeometry}>
//         <meshBasicMaterial color={COLORS.mapFill} />
//       </mesh>
      
//       <lineSegments>
//         <edgesGeometry args={[shapeGeometry]} attach="geometry" />
//         <lineDashedMaterial color={COLORS.gray} dashSize={0.3} gapSize={0.2} scale={1} />
//       </lineSegments>
//     </group>
//   );
// };

// // --- 4. The Scene ---
// const Scene = () => {
//   const centerPos: Vector3Tuple = [0, 4, 0];
//   const leftPos: Vector3Tuple = [-5, 4, 0];
//   const rightPos: Vector3Tuple = [5, 4, 0];

//   return (
//     <>
//       <WorldMapPlaceholder />

//       <group>
//         <Node position={leftPos} color={COLORS.red} delay={0} />
//         <Node position={centerPos} color={COLORS.purple} delay={0.5} />
//         <Node position={rightPos} color={COLORS.blue} delay={1} />
//       </group>

//       <group>
//         {/* Top Connections */}
//         <Connection start={leftPos} end={centerPos} controlPoint={[-2.5, 3.5, 0]} />
//         <Connection start={centerPos} end={rightPos} controlPoint={[2.5, 3.5, 0]} delay={0.5} />

//         {/* Connections to Map */}
//         <Connection start={centerPos} end={[-6, 1, 0]} controlPoint={[-3, 3, 0]} delay={1} />
//         <Connection start={centerPos} end={[0, 1, 0]} controlPoint={[0, 2.5, 0]} delay={1.2} />
//         <Connection start={centerPos} end={[5, 1, 0]} controlPoint={[3, 3, 0]} delay={1.5} />
//         <Connection start={rightPos} end={[7, -4, 0]} controlPoint={[8, 0, 0]} delay={1.8} />
//       </group>
//     </>
//   );
// };

// // --- Main App ---
// export default function Map() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', background: 'white' }}>
//       <Canvas
//         orthographic
//         camera={{ zoom: 40, position: [0, 0, 100] }}
//         gl={{ alpha: true, antialias: true }}
//         onCreated={({ gl }) => {
//           gl.setClearColor('white');
//         }}
//       >
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }
"use client";

import React, { useRef, useLayoutEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

// --- Constants ---
const COLORS = {
  red: '#F87171',
  purple: '#A855F7',
  blue: '#60A5FA',
  gray: '#CBD5E1', 
  mapFill: '#F1F5F9',
};

// --- Types ---
type Vector3Tuple = [number, number, number];

interface NodeProps {
  position: Vector3Tuple;
  color: string;
  delay?: number;
}

interface ConnectionProps {
  start: Vector3Tuple;
  end: Vector3Tuple;
  controlPoint: Vector3Tuple;
  delay?: number;
}

// --- 1. The Node Component ---
const Node = ({ position, color, delay = 0 }: NodeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Line>(null);

  const ringGeometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 1.2, 1.2, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(50);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useLayoutEffect(() => {
    if (ringRef.current) {
      ringRef.current.computeLineDistances();
    }

    const ctx = gsap.context(() => {
      if (groupRef.current) {
        gsap.to(groupRef.current.scale, {
          x: 1.1,
          y: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay,
        });
        
        gsap.to(groupRef.current.rotation, {
          z: Math.PI * 2,
          duration: 20,
          repeat: -1,
          ease: "linear",
        });
      }
    }, groupRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <circleGeometry args={[0.7, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* FIX: usage of @ts-ignore 
        TypeScript treats <line> as an SVG element (which doesn't have a 'geometry' prop), 
        causing a conflict with React Three Fiber's <line>. 
      */}
      {/* @ts-ignore */}
      <line ref={ringRef} geometry={ringGeometry}>
        <lineDashedMaterial
          color={COLORS.gray}
          linewidth={1}
          scale={1}
          dashSize={0.2}
          gapSize={0.2}
        />
      </line>
    </group>
  );
};

// --- 2. The Connection Component ---
const Connection = ({ start, end, controlPoint, delay = 0 }: ConnectionProps) => {
  const lineRef = useRef<THREE.Line>(null);
  const materialRef = useRef<THREE.LineDashedMaterial>(null);

  const curveGeometry = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(...controlPoint),
      new THREE.Vector3(...end)
    );
    const points = curve.getPoints(50);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end, controlPoint]);

  useLayoutEffect(() => {
    if (lineRef.current) {
      lineRef.current.computeLineDistances();
    }
  }, [curveGeometry]);

  return (
    // FIX: usage of @ts-ignore to resolve SVG namespace collision
    // @ts-ignore
    <line ref={lineRef} geometry={curveGeometry}>
      <lineDashedMaterial
        ref={materialRef}
        color={COLORS.gray}
        linewidth={1}
        scale={1}
        dashSize={0.2}
        gapSize={0.3}
      />
    </line>
  );
};

// --- 3. Map Placeholder ---
const WorldMapPlaceholder = () => {
  const shapeGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Americas
    shape.moveTo(-6, 2); shape.lineTo(-8, 3); shape.lineTo(-9, 2); shape.lineTo(-8, -3); shape.lineTo(-6, -5); shape.lineTo(-4, -2); shape.lineTo(-5, 1);
    // Eurasia
    shape.moveTo(-2, 2); shape.lineTo(2, 3); shape.lineTo(6, 2); shape.lineTo(7, 0); shape.lineTo(5, -3); shape.lineTo(1, -4); shape.lineTo(-1, -2); shape.lineTo(-2, 0);
    // Australia
    shape.moveTo(6, -3.5); shape.lineTo(8, -3.5); shape.lineTo(8, -5); shape.lineTo(6, -5);

    return new THREE.ShapeGeometry(shape);
  }, []);

  return (
    <group position={[0, -1, -1]}>
      <mesh geometry={shapeGeometry}>
        <meshBasicMaterial color={COLORS.mapFill} />
      </mesh>
      
      <lineSegments>
        <edgesGeometry args={[shapeGeometry]} attach="geometry" />
        <lineDashedMaterial color={COLORS.gray} dashSize={0.3} gapSize={0.2} scale={1} />
      </lineSegments>
    </group>
  );
};

// --- 4. The Scene ---
const Scene = () => {
  const centerPos: Vector3Tuple = [0, 4, 0];
  const leftPos: Vector3Tuple = [-5, 4, 0];
  const rightPos: Vector3Tuple = [5, 4, 0];

  return (
    <>
      <WorldMapPlaceholder />

      <group>
        <Node position={leftPos} color={COLORS.red} delay={0} />
        <Node position={centerPos} color={COLORS.purple} delay={0.5} />
        <Node position={rightPos} color={COLORS.blue} delay={1} />
      </group>

      <group>
        {/* Top Connections */}
        <Connection start={leftPos} end={centerPos} controlPoint={[-2.5, 3.5, 0]} />
        <Connection start={centerPos} end={rightPos} controlPoint={[2.5, 3.5, 0]} delay={0.5} />

        {/* Connections to Map */}
        <Connection start={centerPos} end={[-6, 1, 0]} controlPoint={[-3, 3, 0]} delay={1} />
        <Connection start={centerPos} end={[0, 1, 0]} controlPoint={[0, 2.5, 0]} delay={1.2} />
        <Connection start={centerPos} end={[5, 1, 0]} controlPoint={[3, 3, 0]} delay={1.5} />
        <Connection start={rightPos} end={[7, -4, 0]} controlPoint={[8, 0, 0]} delay={1.8} />
      </group>
    </>
  );
};

// --- Main App ---
export default function Map() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'white' }}>
      <Canvas
        orthographic
        camera={{ zoom: 40, position: [0, 0, 100] }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('white');
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}