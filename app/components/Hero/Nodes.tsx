
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function Nodes() {
  const nodes = [
    [-3, 0.1, 0],
    [-1, 0.7, 0],
    [1, -0.5, 0],
    [3, 0.2, 0],
  ]
  return (
    <>
      {nodes.map((pos, i) => (
        <Node key={i} position={pos} />
      ))}
    </>
  )
}
function Node({ position }: any) {
  const ref = useRef<any>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const scale = 1 + Math.sin(t * 2) * 0.1
    ref.current.scale.set(scale, scale, scale)
    ref.current.rotation.y += 0.005
  })
  return (
    <group position={position}>
      {/* core */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#4F8CFF"
          emissive="#4F8CFF"
          emissiveIntensity={1.2}
        />
      </mesh>
      {/* outer glow */}
      <mesh scale={1.6}>
        <sphereGeometry args={[0.3, 32, 32]} />
        {/* <meshBasicMaterial
          color="#4F8CFF"
          transparent
          opacity={0.08}
        /> */}

        <meshBasicMaterial blending={THREE.MultiplyBlending} opacity={0.5} premultipliedAlpha={true} />
      </mesh>
    </group>
  )
}