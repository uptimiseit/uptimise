import { Line } from "@react-three/drei"
export default function Connections() {
  const points = [
    [-3, 0.1, 0],
    [-1, 0.7, 0],
    [1, -0.5, 0],
    [3, 0.2, 0],
  ]
  return (
    <Line
      points={points}
      color="#4F8CFF"
      lineWidth={1.2}
      transparent
      opacity={0.25}
    />
  )
}