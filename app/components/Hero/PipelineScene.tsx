import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useFrame } from "@react-three/fiber"
import SmartParticles from "./SmartParticles"
import Nodes from "./Nodes"
// import Connections from "./Connections"
import Pulses from "./Pulses"
export default function PipelineScene() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = mouse.x * 0.3
    camera.position.y = mouse.y * 0.2
    camera.lookAt(0, 0, 0)
  })
  return (
    <>
      <color attach="background" args={["#050A14"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} />
      <SmartParticles />
      <Nodes />
      {/* <Connections /> */}
      <Pulses />
      <EffectComposer>
        <Bloom intensity={0.6} />
      </EffectComposer>
    </>
  )
}
