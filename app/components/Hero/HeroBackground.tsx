"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const THEME = {
  nodeColor: "#4f46e5", // Punchy Indigo
  lineColor: "#6366f1", // Bright Indigo/Violet
  activeColor: "#06b6d4", // Electric Cyan when mouse is near
};

function NeuralNetwork({ count = 60 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport, mouse } = useThree();

  // Create a mouse vector for tracking
  const mouseVec = new THREE.Vector3();

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return [pos, vel];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position;
    const linePosAttr = linesRef.current.geometry.attributes.position;
    let lineIdx = 0;

    // Convert normalized mouse coordinates to world coordinates
    mouseVec.set(mouse.x * (viewport.width / 2), mouse.y * (viewport.height / 2), 0);

    for (let i = 0; i < count; i++) {
      // 1. Basic Movement
      posAttr.array[i * 3] += velocities[i * 3];
      posAttr.array[i * 3 + 1] += velocities[i * 3 + 1];
      posAttr.array[i * 3 + 2] += velocities[i * 3 + 2];

      // 2. Mouse Interaction (Magnetic Pull)
      const dx = mouseVec.x - posAttr.array[i * 3];
      const dy = mouseVec.y - posAttr.array[i * 3 + 1];
      const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

      if (distanceToMouse < 3) {
        // Gently pull toward mouse
        posAttr.array[i * 3] += dx * 0.02;
        posAttr.array[i * 3 + 1] += dy * 0.02;
      }

      // 3. Boundary check
      if (Math.abs(posAttr.array[i * 3]) > 6) velocities[i * 3] *= -1;
      if (Math.abs(posAttr.array[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
    }

    // 4. Draw Connections
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
        const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 2.5 && lineIdx < 2000) {
          linePosAttr.setXYZ(lineIdx++, posAttr.array[i * 3], posAttr.array[i * 3 + 1], posAttr.array[i * 3 + 2]);
          linePosAttr.setXYZ(lineIdx++, posAttr.array[j * 3], posAttr.array[j * 3 + 1], posAttr.array[j * 3 + 2]);
        }
      }
    }

    posAttr.needsUpdate = true;
    linePosAttr.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIdx);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15} // Slightly larger nodes
          color={THEME.nodeColor}
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={4000}
            array={new Float32Array(4000 * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={THEME.lineColor}
          transparent
          opacity={0.3} // Increased opacity for visibility
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 40 }} 
        dpr={[1, 2]}
      >
        <NeuralNetwork count={70} />
      </Canvas>
    </div>
  );
}