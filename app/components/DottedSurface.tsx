// 'use client';
// import { cn } from '@/lib/utils';
// import { useTheme } from 'next-themes';
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

// export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
// 	const { theme } = useTheme();

// 	const containerRef = useRef<HTMLDivElement>(null);
// 	const sceneRef = useRef<{
// 		scene: THREE.Scene;
// 		camera: THREE.PerspectiveCamera;
// 		renderer: THREE.WebGLRenderer;
// 		particles: THREE.Points[];
// 		animationId: number;
// 		count: number;
// 	} | null>(null);

// 	useEffect(() => {
// 		if (!containerRef.current) return;

// 		const SEPARATION = 150;
// 		const AMOUNTX = 40;
// 		const AMOUNTY = 60;

// 		// Scene setup
// 		const scene = new THREE.Scene();
// 		scene.fog = new THREE.Fog(0xffffff, 2000, 10000);

// 		const camera = new THREE.PerspectiveCamera(
// 			60,
// 			window.innerWidth / window.innerHeight,
// 			1,
// 			10000,
// 		);
// 		camera.position.set(0, 355, 1220);

// 		const renderer = new THREE.WebGLRenderer({
// 			alpha: true,
// 			antialias: true,
// 		});
// 		renderer.setPixelRatio(window.devicePixelRatio);
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		renderer.setClearColor(scene.fog.color, 0);

// 		containerRef.current.appendChild(renderer.domElement);

// 		// Create particles
// 		const particles: THREE.Points[] = [];
// 		const positions: number[] = [];
// 		const colors: number[] = [];

// 		// Create geometry for all particles
// 		const geometry = new THREE.BufferGeometry();

// 		for (let ix = 0; ix < AMOUNTX; ix++) {
// 			for (let iy = 0; iy < AMOUNTY; iy++) {
// 				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
// 				const y = 0; // Will be animated
// 				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

// 				positions.push(x, y, z);
// 				if (theme === 'dark') {
// 					colors.push(200, 200, 200);
// 				} else {
// 					colors.push(0, 0, 0);
// 				}
// 			}
// 		}

// 		geometry.setAttribute(
// 			'position',
// 			new THREE.Float32BufferAttribute(positions, 3),
// 		);
// 		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

// 		// Create material
// 		const material = new THREE.PointsMaterial({
// 			size: 8,
// 			vertexColors: true,
// 			transparent: true,
// 			opacity: 0.8,
// 			sizeAttenuation: true,
// 		});

// 		// Create points object
// 		const points = new THREE.Points(geometry, material);
// 		scene.add(points);

// 		let count = 0;
// 		let animationId: number;

// 		// Animation function
// 		const animate = () => {
// 			animationId = requestAnimationFrame(animate);

// 			const positionAttribute = geometry.attributes.position;
// 			const positions = positionAttribute.array as Float32Array;

// 			let i = 0;
// 			for (let ix = 0; ix < AMOUNTX; ix++) {
// 				for (let iy = 0; iy < AMOUNTY; iy++) {
// 					const index = i * 3;

// 					// Animate Y position with sine waves
// 					positions[index + 1] =
// 						Math.sin((ix + count) * 0.3) * 50 +
// 						Math.sin((iy + count) * 0.5) * 50;

// 					i++;
// 				}
// 			}

// 			positionAttribute.needsUpdate = true;

// 			// Update point sizes based on wave
// 			const customMaterial = material as THREE.PointsMaterial & {
// 				uniforms?: any;
// 			};
// 			if (!customMaterial.uniforms) {
// 				// For dynamic size changes, we'd need a custom shader
// 				// For now, keeping constant size for performance
// 			}

// 			renderer.render(scene, camera);
// 			count += 0.1;
// 		};

// 		// Handle window resize
// 		const handleResize = () => {
// 			camera.aspect = window.innerWidth / window.innerHeight;
// 			camera.updateProjectionMatrix();
// 			renderer.setSize(window.innerWidth, window.innerHeight);
// 		};

// 		window.addEventListener('resize', handleResize);

// 		// Start animation
// 		animate();

// 		// Store references
// 		sceneRef.current = {
// 			scene,
// 			camera,
// 			renderer,
// 			particles: [points],
// 			animationId,
// 			count,
// 		};

// 		// Cleanup function
// 		return () => {
// 			window.removeEventListener('resize', handleResize);

// 			if (sceneRef.current) {
// 				cancelAnimationFrame(sceneRef.current.animationId);

// 				// Clean up Three.js objects
// 				sceneRef.current.scene.traverse((object) => {
// 					if (object instanceof THREE.Points) {
// 						object.geometry.dispose();
// 						if (Array.isArray(object.material)) {
// 							object.material.forEach((material) => material.dispose());
// 						} else {
// 							object.material.dispose();
// 						}
// 					}
// 				});

// 				sceneRef.current.renderer.dispose();

// 				if (containerRef.current && sceneRef.current.renderer.domElement) {
// 					containerRef.current.removeChild(
// 						sceneRef.current.renderer.domElement,
// 					);
// 				}
// 			}
// 		};
// 	}, [theme]);

// 	return (
// 		<div
// 			ref={containerRef}
// 			className={cn('pointer-events-none  inset-0 -z-1', className)}
// 			{...props}
// 		/>
// 	);
// }


'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Database, Layout, CheckCircle2, 
  FastForward, Workflow, Brain, Target, 
  Activity, ShieldCheck 
} from 'lucide-react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils'; // Assuming you have shadcn's cn utility

// --------------------------------------------------------
// 1. The Amplification Layer Section
// --------------------------------------------------------

export default function AmplificationSection() {
  return (
    <section className="relative bg-slate-950 py-24 px-6 overflow-clip min-h-screen flex items-center">
      
      {/* BACKGROUND: Dotted Surface called here */}
      <DottedSurface className="absolute inset-0 z-0 opacity-60" />

      {/* CONTENT: Elevated above the background using relative z-10 */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-6 flex items-center flex-col lg:flex-row gap-5 justify-between"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm backdrop-blur-md">
            <Sparkles className="text-blue-400 size-3 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
              The Amplification Layer
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-white leading-[0.85] text-center lg:text-right uppercase">
            Human Ingenuity. <br />
            <span className="text-blue-500 italic">AI Velocity.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          
          {/* LEFT: THE AI ENGINE */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-10 rounded-[3rem] bg-slate-900/60 backdrop-blur-md border border-slate-800 space-y-10 relative shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-900/50">
                <Database size={24} />
              </div>
              <h3 className="text-3xl font-black font-header text-white tracking-tight uppercase">AI Systems</h3>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Layout size={18} />, title: "Development Scaffolding" },
                { icon: <CheckCircle2 size={18} />, title: "Automated Testing" },
                { icon: <FastForward size={18} />, title: "Deployment Automation" },
                { icon: <Workflow size={18} />, title: "Architecture Analysis" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10, backgroundColor: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)" }}
                  className="flex items-center gap-6 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 transition-colors"
                >
                  <div className="text-blue-400">{item.icon}</div>
                  <h4 className="font-bold text-slate-200 uppercase text-xs tracking-widest">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE ELITE ENGINEER */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-10 rounded-[3rem] bg-slate-950 text-white space-y-10 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-slate-800"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,41,59,0.8),transparent)] opacity-50 pointer-events-none" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white border border-white/10 shadow-inner">
                <Brain size={24} />
              </div>
              <h3 className="text-3xl font-black font-header tracking-tight uppercase">Elite Engineers</h3>
            </div>

            <div className="space-y-4 relative z-10">
              {[
                { icon: <Target size={18} />, title: "Architecture Decisions" },
                { icon: <Activity size={18} />, title: "System Performance" },
                { icon: <ShieldCheck size={18} />, title: "Security Enforcement" },
                { icon: <Sparkles size={18} />, title: "Product Quality" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl transition-colors"
                >
                  <div className="text-blue-400">{item.icon}</div>
                  <h4 className="font-bold text-slate-100 uppercase text-xs tracking-widest">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CENTRAL INTERACTIVE SYNAPSE */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <div className="central-synapse relative w-24 h-24 rounded-full bg-slate-950 border-[10px] border-slate-900 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.4)]">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
               />
               {/* Pulsing Outer Ring */}
               <motion.div 
                 animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute inset-0 border-2 border-blue-400 rounded-full"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// 2. The Dotted Surface Background Component
// --------------------------------------------------------

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 150;
        const AMOUNTX = 40;
        const AMOUNTY = 60;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x020617, 2000, 10000); // Slate-950 fog color

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        camera.position.set(0, 355, 1220);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(scene.fog.color, 0); // Transparent background

        containerRef.current.appendChild(renderer.domElement);

        // Create particles
        const positions: number[] = [];
        const colors: number[] = [];

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
                
                positions.push(x, 0, z); // Initial Y is 0
                
                // FIXED: Three.js colors must be between 0.0 and 1.0
                if (theme === 'light') {
                    colors.push(0.2, 0.2, 0.2); // Dark dots for light mode
                } else {
                    colors.push(0.8, 0.8, 0.8); // Light dots for dark mode
                }
            }
        }

        const geometry = new THREE.BufferGeometry();
        
        // FIXED: Tell WebGL this buffer will change every frame so it animates
        const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
        positionAttribute.setUsage(THREE.DynamicDrawUsage);
        geometry.setAttribute('position', positionAttribute);
        
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 8,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let count = 0;
        let animationId: number; 

        // Animation function
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const posArray = geometry.attributes.position.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const index = i * 3;

                    // Animate Y position with sine waves
                    posArray[index + 1] =
                        Math.sin((ix + count) * 0.3) * 50 +
                        Math.sin((iy + count) * 0.5) * 50;

                    i++;
                }
            }

            geometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.1;
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Start animation
        animate();

        // FIXED: Safe Cleanup function to prevent memory leaks
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId); 

            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [theme]);

    return (
        <div
            ref={containerRef}
            // FIXED: Using absolute inset-0 to fill the section, z-0 to stay behind content
            className={cn('pointer-events-none absolute inset-0 z-0', className)}
            {...props}
        />
    );
}