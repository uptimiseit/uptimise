"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const THEME = {
  background: '#050a14',
  primaryGlow: '#4f8cff',
  accentFlow: '#7bdff2',
  nodeCore: '#ffffff',
  lineColor: '#1e293b'
};

const NODES = [
  { pos: [-5, 1.5, -2], type: 'small', scale: 0.2 },
  { pos: [-4, -1.2, 0], type: 'medium', scale: 0.35 },
  { pos: [-3, 0.5, 1], type: 'small', scale: 0.2 },
  { pos: [-2, 2.8, -1], type: 'core', scale: 0.5, emissive: THEME.primaryGlow, intensity: 3 },
  { pos: [-1.5, -2.5, -2], type: 'medium', scale: 0.4 },
  { pos: [1.5, -2.8, 1], type: 'core', scale: 0.5, emissive: THEME.accentFlow, intensity: 3 },
  { pos: [2, 2.5, -1], type: 'medium', scale: 0.35 },
  { pos: [3.5, 0.5, 0], type: 'small', scale: 0.25 },
  { pos: [4.5, -0.8, -1], type: 'small', scale: 0.2 },
  { pos: [5, 1.2, 1], type: 'small', scale: 0.15 }
];

const CONNECTIONS = [
  [0, 3], [1, 3], [2, 4], [1, 4], [3, 5], [4, 5], [3, 6], [5, 7], [6, 8], [5, 9], [7, 8], [8, 9]
];

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>(0); // Store frame ID in a ref to survive re-renders

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // --- OBJECTS ---
    const nodesData: any[] = [];
    const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
    NODES.forEach((n, i) => {
      const g = new THREE.Group();
      g.position.set(n.pos[0], n.pos[1], n.pos[2]);
      const mat = new THREE.MeshStandardMaterial({
        color: THEME.nodeCore,
        emissive: n.emissive || THEME.primaryGlow,
        emissiveIntensity: n.intensity || 1.5,
        toneMapped: false
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      g.add(mesh);
      g.scale.setScalar(n.scale);
      group.add(g);
      nodesData.push({ group: g, baseScale: n.scale, delay: i });
    });

    const pulsesData: any[] = [];
    const pulseGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const pulseMat = new THREE.MeshBasicMaterial({ color: THEME.accentFlow });
    CONNECTIONS.forEach(([s, e]) => {
      const start = new THREE.Vector3(...(NODES[s].pos as [number, number, number]));
      const end = new THREE.Vector3(...(NODES[e].pos as [number, number, number]));
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([start, end]),
        new THREE.LineBasicMaterial({ color: THEME.primaryGlow, transparent: true, opacity: 0.15 })
      );
      group.add(line);
      const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
      group.add(pMesh);
      pulsesData.push({ mesh: pMesh, start, end, offset: Math.random() });
    });

    const pCount = 150;
    const instMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(0.02, 8, 8),
      new THREE.MeshBasicMaterial({ color: THEME.accentFlow, transparent: true, opacity: 0.5 }),
      
      pCount
    );
    group.add(instMesh);
    const pData = Array.from({ length: pCount }).map(() => ({
      x: (Math.random() - 0.5) * 14,
      y: (Math.random() - 0.5) * 10,
      z: (Math.random() - 0.5) * 4,
      speed: 0.01 + Math.random() * 0.02
    }));

    // --- ANIMATION ---
    const clock = new THREE.Clock();
    const dummy = new THREE.Object3D();
    let mX = 0, mY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mX = (e.clientX / window.innerWidth) * 2 - 1;
      mY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // 1. Logic
      const t = clock.getElapsedTime();

      pData.forEach((p, i) => {
        p.x += p.speed;
        if (p.x > 7) p.x = -7;
        dummy.position.set(p.x, p.y, p.z);
        dummy.updateMatrix();
        instMesh.setMatrixAt(i, dummy.matrix);
      });
      instMesh.instanceMatrix.needsUpdate = true;

      pulsesData.forEach(p => {
        const prog = (t * 0.4 + p.offset) % 1;
        p.mesh.position.lerpVectors(p.start, p.end, prog);
      });

      nodesData.forEach(nd => {
        nd.group.scale.setScalar(nd.baseScale * (1 + Math.sin(t * 3 + nd.delay) * 0.15));
      });

      group.rotation.y += (mX * 0.1 - group.rotation.y) * 0.05;
      group.rotation.x += (-mY * 0.05 - group.rotation.x) * 0.05;

      // 2. Execute
      renderer.render(scene, camera);
      frameId.current = requestAnimationFrame(render);
    };

    // Kickstart the loop
    render();

    // --- RESIZE ---
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // --- CLEANUP ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId.current);
      renderer.dispose();
      sphereGeo.dispose();
      pulseGeo.dispose();
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050a14]">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
          Uptimise <span className="text-blue-500">IT</span>
        </h1>
        <p className="text-lg md:text-2xl text-blue-200/60 font-light tracking-[0.3em] uppercase mt-4">
          The AI-Native Software Factory
        </p>
        <div className="mt-12 flex gap-4 pointer-events-auto">
          <button     aria-label="Uptimiseit" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase text-xs tracking-widest shadow-lg hover:bg-blue-500 transition-all">
            Explore Pipeline
          </button>
          <button     aria-label="Uptimiseit" className="px-10 py-4 border border-white/20 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
            Capabilities
          </button>
        </div>
      </div>
    </div>
  );
}