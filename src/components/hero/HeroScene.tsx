import { Suspense } from 'react'
import { Center, Environment, Html, useProgress } from '@react-three/drei'
import { WardrobeModel } from './WardrobeModel'
import { CameraTarget } from './CameraTarget'
import { ModelErrorBoundary } from './ModelErrorBoundary'

function LoaderFallback() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span className="rounded bg-black/60 px-4 py-2 text-sm text-white">
        Загрузка модели… {Math.round(progress)}%
      </span>
    </Html>
  )
}

export function HeroScene() {
  return (
    <>
      <CameraTarget target={[0, 0, 0]} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize={[2048, 2048]} />
      <ambientLight intensity={0.4} />
      <Environment preset="studio" />
      <Center>
        <ModelErrorBoundary>
          <Suspense fallback={<LoaderFallback />}>
            <WardrobeModel />
          </Suspense>
        </ModelErrorBoundary>
      </Center>
    </>
  )
}
