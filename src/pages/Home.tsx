import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, Center, OrbitControls } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
//@ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Particles from "../components/Particles";
import * as THREE from 'three'
import url from "../fluids.mp4";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, '/my_laptop.glb')

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const laptopRef = useRef(null)

    useFrame((state, delta) => {
        const angle = state.clock.elapsedTime
            state.camera.position.z += Math.cos(angle) * 0.0005;
            state.camera.position.x += Math.sin(angle) * 0.0005

            state.camera.lookAt(0,0,0)
    })

//   useFrame(() => {
//     if(laptopRef.current != null){
//         //laptopRef.current.rotation.y += 0.001
//     }
//   })

  return (
        <>
            <group rotation={[0, 3, 0]}>
                <mesh scale={[0.9, 0.55, 1]} position={[0,0.01,0.29]} rotation={[0.15,0,0]}>
                    <planeGeometry />
                    <meshStandardMaterial side={THREE.DoubleSide}>
                        <videoTexture attach="map" args={[video]} />
                        <videoTexture attach="emissiveMap" args={[video]} />
                    </meshStandardMaterial>
                </mesh>
                <Center ref={laptopRef}>
                    <primitive object={gltf.scene} />
                </Center>
            </group>
            

            <directionalLight position={[-2, 2, 0]} intensity={3} color="#ffffff" />
            <ambientLight intensity={3}/>
            <pointLight position={[2, 3, 1]} intensity={15} color="#d84cdd" />
            <pointLight position={[-0.5, 0, 4]} intensity={20} color="#6829ef" />
    </>
  );
};

const Home = () => {
    const [scroll, setScroll] = useState(0)
    const bodyRef = useRef(null)
    const containerRef = useRef(null)

    const getScrollPercent = (e:any) => {
        var st = e.target.scrollTop,
            sh = containerRef.current ? containerRef.current.offsetHeight  : 0;
        return st/sh;
    }
    
  return (
    <div className="bg-gradient-radial dark:text-violet-200 bg-violet-100 text-violet-950 dark:bg-black" ref={containerRef}
            style={{
                height: "100vh",
                overflowY: "scroll",
            }}
            onScroll={(e) => { setScroll(getScrollPercent(e)) }}
        >
            <div ref={bodyRef}>
                <Canvas style={{ position:'fixed', zIndex: '1' }} camera={{ fov: 70, position: [0,0,2] }}>
                    <Particles positionY={scroll * 2} />
                    <OrbitControls/>
                </Canvas>
            <div style={{display: 'flex', zIndex: '5', position: 'relative', maxWidth: '1200px', margin: 'auto'}}>
                <div style={{ width: '50%', height: '100vh', marginTop: '100px' }}>
                    <span>Hi, I'm</span>
                    <br></br>
                    <span className="title-name font-display">Chiara IANNUZZI</span>
                    <h1>Welcome to my portfolio</h1>
                    <p>I'm mainly a front-end developer, but I also love design and and I am learning back-end</p>
                </div>
                <div style={{ width: '50%', height: '100vh' }}>
                    <Canvas camera={{ fov: 70, position: [0.2, 0.3, 1.2] }}>
                        <Scene />
                        <OrbitControls enableZoom={false}/>
                    </Canvas>

                </div>
            </div>

        </div>
        
    </div>
   
  );
};

export default Home;
