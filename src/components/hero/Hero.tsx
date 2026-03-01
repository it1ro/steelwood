import { Canvas } from '@react-three/fiber'
import { HeroScene } from './HeroScene'

const CAMERA_POSITION: [number, number, number] = [5, 1.4, 5]
const CAMERA_FOV = 45

export function Hero() {
  return (
    <section
      className="relative h-screen w-full"
      style={{ minHeight: '100vh' }}
      aria-label="Главный экран — 3D угловой шкаф"
    >
      <Canvas
        className="h-full w-full"
        camera={{
          position: CAMERA_POSITION,
          fov: CAMERA_FOV,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        shadows
      >
        <HeroScene />
      </Canvas>
    </section>
  )
}
