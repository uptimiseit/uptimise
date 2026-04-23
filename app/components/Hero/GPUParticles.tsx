import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
export default function GPUParticles({ count = 180 }) {
  const mesh = useRef<any>(null)
  const dummy = new THREE.Object3D()
  const lanes = [-1.5, 0, 1.5]
  const geometry = useMemo(() => new THREE.SphereGeometry(0.04, 8, 8), [])
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#7BDFF2",
        transparent: true,
        opacity: 0.7,
      }),
    []
  )
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * -6,
      y:
        lanes[Math.floor(Math.random() * lanes.length)] +
        (Math.random() * 0.1),
      z: (Math.random() - 0.5) * 2,
      speed: 0.01 + Math.random() * 0.015,
    }))
  }, [])
  useFrame(() => {
    particles.forEach((p, i) => {
      // skip center zone (for text clarity)
      if (Math.abs(p.y) < 0.4) return
      p.x += p.speed
      if (p.x > 5) p.x = -5
      dummy.position.set(p.x, p.y, p.z)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh args={[geometry, material, count]} ref={mesh} />
  )
}
