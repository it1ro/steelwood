import * as THREE from 'three'

/**
 * Геометрическая заглушка углового шкафа (Г-форма) + манекен.
 * Используется при отсутствии wardrobe.glb или при ошибке загрузки.
 * Габариты: длинная сторона ~3.1 м, высота ~2.6 м (1 unit = 1 m в сцене).
 */
export function WardrobePlaceholder() {
  const cabinetColor = new THREE.Color('#8b7355')
  const mannequinColor = new THREE.Color('#c4a77d')

  return (
    <group position={[0, 0, 0]} scale={1}>
      {/* Угловой шкаф Г-образный: два блока */}
      <mesh position={[-0.8, 1.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 2.6, 0.5]} />
        <meshStandardMaterial color={cabinetColor} metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.3, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 2.6, 1.6]} />
        <meshStandardMaterial color={cabinetColor} metalness={0.2} roughness={0.7} />
      </mesh>
      {/* Ростовой манекен рядом */}
      <group position={[1.2, 0.9, 0.5]}>
        <mesh position={[0, 0.9, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.14, 0.3, 16]} />
          <meshStandardMaterial color={mannequinColor} />
        </mesh>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[0.4, 0.6, 0.2]} />
          <meshStandardMaterial color={mannequinColor} />
        </mesh>
        <mesh position={[0, 0.1, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.5, 16]} />
          <meshStandardMaterial color={mannequinColor} />
        </mesh>
      </group>
    </group>
  )
}
