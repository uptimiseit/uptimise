"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type Particle = {
  x: number
  y: number
  z: number
  vx: number
  vy: number
}

export default function SmartParticles({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const dummy = new THREE.Object3D()

  // COLORS (reuse — NO new objects in loop)
  const colorInput = useMemo(() => new THREE.Color("#7BDFF2"), [])
  const colorProcessing = useMemo(() => new THREE.Color("#4F8CFF"), [])
  const colorOutput = useMemo(() => new THREE.Color("#B4F1FF"), [])

  // NODES
  const nodes = useMemo(
    () => [
      new THREE.Vector3(-3, 0.1, 0),
      new THREE.Vector3(-1, 0.7, 0),
      new THREE.Vector3(1, -0.5, 0),
      new THREE.Vector3(3, 0.2, 0),
    ],
    []
  )

  // GEOMETRY
  const geometry = useMemo(
    () => new THREE.SphereGeometry(0.05, 8, 8),
    []
  )

  // MATERIAL (CRITICAL)
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        toneMapped: false,
      }),
    []
  )

  // PARTICLES
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * -6,
      y: (Math.random() - 0.5) * 2,
      z: (Math.random() - 0.5) * 2,
      vx: 0.004 + Math.random() * 0.002,
      vy: 0,
    }))
  }, [count])

  // ✅ INITIALIZE COLORS (IMPORTANT — THIS FIXES BLACK ISSUE)
  useEffect(() => {
    if (!mesh.current) return

    for (let i = 0; i < count; i++) {
      mesh.current.setColorAt(i, colorInput)
    }

    mesh.current.instanceColor!.needsUpdate = true
  }, [count, colorInput])

  useFrame(() => {
    if (!mesh.current) return

    particles.forEach((p, i) => {
      const pos = new THREE.Vector3(p.x, p.y, p.z)

      // 🌊 smooth curved flow
      p.vy += Math.sin(p.x * 0.6) * 0.0003
      p.vy *= 0.9

      // 🧠 node interaction
      nodes.forEach((node) => {
        const dist = pos.distanceTo(node)

        if (dist < 1.3) {
          const dir = node.clone().sub(pos).normalize()
          p.vx += dir.x * 0.001
          p.vy += dir.y * 0.001
        }

        // prevent clustering
        if (dist < 0.25) {
          const dir = pos.clone().sub(node).normalize()
          p.vx += dir.x * 0.01
          p.vy += dir.y * 0.01
        }
      })

      // 🚫 LIMIT VELOCITY (VERY IMPORTANT)
      p.vx = Math.min(p.vx, 0.02)
      p.vy = Math.max(Math.min(p.vy, 0.015), -0.015)

      // ➡️ movement
      p.x += p.vx
      p.y += p.vy

      // 🎯 clean output zone
      if (p.x > 2) {
        p.y *= 0.97
      }

      // 🔁 reset
      if (p.x > 5) {
        p.x = -5
        p.y = (Math.random() - 0.5) * 2
        p.vx = 0.004 + Math.random() * 0.002
        p.vy = 0
      }

      // 🎨 COLOR LOGIC (SAFE)
      let color = colorInput

      if (p.x > -1 && p.x < 1) {
        color = colorProcessing
      }

      if (p.x > 2) {
        color = colorOutput
      }

      dummy.position.set(p.x, p.y, p.z)
      dummy.updateMatrix()

      mesh.current.setMatrixAt(i, dummy.matrix)
      mesh.current.setColorAt(i, color)
    })

    mesh.current.instanceMatrix.needsUpdate = true
    mesh.current.instanceColor!.needsUpdate = true
  })

  return <instancedMesh ref={mesh} args={[geometry, material, count]} />
}