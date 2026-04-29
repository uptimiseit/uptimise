"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const THEME = {
  background: '#ffffff',
  core: '#4f46e5',    // Indigo 600
  glow: '#818cf8',    // Indigo 400
  stream: '#2dd4bf',  // Teal 400
};

function NeuralNetwork({ count = 60 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport, mouse } = useThree();
  const mouseVec = new THREE.Vector3();

  // 1. Initial State
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      vel[i * 3] = (Math.random() - 0.5) * 0.008;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
    }
    return [pos, vel];
  }, [count]);

  const [lineArray, lineColors] = useMemo(() => [
    new Float32Array(4000 * 3), 
    new Float32Array(4000 * 3)
  ], []);

  const c1 = new THREE.Color(THEME.core);
  const c2 = new THREE.Color(THEME.stream);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position;
    const linePosAttr = linesRef.current.geometry.attributes.position;
    const lineColorAttr = linesRef.current.geometry.attributes.color;
    let lineIdx = 0;
    const t = state.clock.getElapsedTime();

    mouseVec.set(mouse.x * (viewport.width / 2), mouse.y * (viewport.height / 2), 0);

    for (let i = 0; i < count; i++) {
      // Basic drift
      posAttr.array[i * 3] += velocities[i * 3];
      posAttr.array[i * 3 + 1] += velocities[i * 3 + 1];
      posAttr.array[i * 3 + 2] += velocities[i * 3 + 2];

      // Mouse "Repel & Warp" Logic
      const dx = posAttr.array[i * 3] - mouseVec.x;
      const dy = posAttr.array[i * 3 + 1] - mouseVec.y;
      const distMouse = Math.sqrt(dx * dx + dy * dy);
      
      if (distMouse < 3.5) {
        const force = (3.5 - distMouse) / 3.5;
        posAttr.array[i * 3] += (dx / distMouse) * force * 0.1;
        posAttr.array[i * 3 + 1] += (dy / distMouse) * force * 0.1;
      }

      // Bounds
      if (Math.abs(posAttr.array[i * 3]) > 7) velocities[i * 3] *= -1;
      if (Math.abs(posAttr.array[i * 3 + 1]) > 7) velocities[i * 3 + 1] *= -1;
    }

    // Connections
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
        const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 2.8 && lineIdx < 4000) {
          linePosAttr.setXYZ(lineIdx, posAttr.array[i * 3], posAttr.array[i * 3 + 1], posAttr.array[i * 3 + 2]);
          c1.lerp(c2, Math.sin(t + i) * 0.5 + 0.5);
          lineColorAttr.setXYZ(lineIdx, c1.r, c1.g, c1.b);
          lineIdx++;

          linePosAttr.setXYZ(lineIdx, posAttr.array[j * 3], posAttr.array[j * 3 + 1], posAttr.array[j * 3 + 2]);
          lineColorAttr.setXYZ(lineIdx, c1.r, c1.g, c1.b);
          lineIdx++;
        }
      }
    }

    posAttr.needsUpdate = true;
    linePosAttr.needsUpdate = true;
    lineColorAttr.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIdx);
  });

  return (
    <group>
      {/* Cinematic Layering */}
      {/* 1. Subtle Background "Process" Glow */}
      <points>
        <bufferGeometry>
          <bufferAttribute args={[positions, 3]} attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.6} color={THEME.glow} transparent opacity={0.08} blending={THREE.AdditiveBlending} />
      </points>

      {/* 2. Main Neural Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute args={[positions, 3]} attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.18} color={THEME.core} transparent opacity={0.9} />
      </points>

      {/* 3. Data Flow Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute args={[lineArray, 3]} attach="attributes-position" count={lineArray.length / 3} array={lineArray} itemSize={3} />
          <bufferAttribute args={[lineColors, 3]} attach="attributes-color" count={lineColors.length / 3} array={lineColors} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.4} blending={THREE.MultiplyBlending} />
      </lineSegments>
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      <Canvas 
      frameloop="always"
        camera={{ position: [0, 0, 8], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <NeuralNetwork count={65} />
      </Canvas>
      {/* This Vignette grounds the white background to make it look premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)]" />
    </div>
  );
}