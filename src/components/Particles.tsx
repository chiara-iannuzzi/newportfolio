import { useFrame } from '@react-three/fiber'
import { FC, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

interface ParticlesProps {
    positionY: number
}

const Particles:FC<ParticlesProps> = ({ positionY }) => {

    const geometryRef = useRef(null)

    const verticesCount = 100 * 3

    useFrame(() => {
        geometryRef.current.rotation.y += 0.0005;
    })

    const positions = useMemo(() => {
        const positions = new Float32Array( verticesCount * 3 )

        for(let i = 0; i < verticesCount * 3; i++){
            positions[i * 3] = (Math.random() - 0.5) * 5
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 3
        }

        return positions
    }, [])

    return(
        <points ref={ geometryRef } position={new THREE.Vector3(0, positionY, 0 )}>
            <bufferGeometry >
                <bufferAttribute attach="attributes-position" count={verticesCount} itemSize={3} array={positions}  />
            </bufferGeometry>
            <pointsMaterial size={0.005} color="#ff00ff" side={THREE.DoubleSide}/>
        </points>
    )
}

export default Particles