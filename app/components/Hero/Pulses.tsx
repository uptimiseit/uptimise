import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
export default function Pulses() {
  const ref = useRef<any>(null)
  const start = new THREE.Vector3(-3, 0.1, 0)
  const end = new THREE.Vector3(3, 0.2, 0)
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * 0.4) % 1
    ref.current.position.lerpVectors(start, end, t)
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#B4F1FF" />
    </mesh>
  )
}