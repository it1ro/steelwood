import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

/** Направляет камеру на целевую точку (центр угла шкафа). */
export function CameraTarget({ target = [0, 0, 0] }: { target?: [number, number, number] }) {
  const { camera } = useThree()
  useEffect(() => {
    camera.lookAt(new THREE.Vector3(...target))
  }, [camera, target])
  return null
}
