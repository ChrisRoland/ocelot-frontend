// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader, type GLTF } from 'three/addons/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

// interface ThreeJSBackgroundProps {
//   modelPath?: string;
// }

// export function ThreeJSBackground({ modelPath = '/models/LittlestTokyo.glb' }: ThreeJSBackgroundProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true,
//       alpha: false 
//     });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.shadowMap.enabled = true;
//     containerRef.current.appendChild(renderer.domElement);

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0o0);
//     scene.fog = new THREE.Fog(0o0, 10, 50);

//     const camera = new THREE.PerspectiveCamera(
//       40,
//       window.innerWidth / window.innerHeight,
//       1,
//       100
//     );
//     camera.position.set(5, 2, 8);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     directionalLight.position.set(5, 10, 5);
//     directionalLight.castShadow = true;
//     scene.add(directionalLight);

//     // Ground
//     const groundGeometry = new THREE.CircleGeometry(20, 32);
//     const groundMaterial = new THREE.MeshStandardMaterial({ 
//       color: 0o0,
//       side: THREE.DoubleSide 
//     });
//     const ground = new THREE.Mesh(groundGeometry, groundMaterial);
//     ground.rotation.x = -Math.PI / 2;
//     ground.receiveShadow = true;
//     scene.add(ground);

//     // Load the 3D model
//     const loader = new GLTFLoader();
    
//     // Setup Draco loader for compressed models
//     const dracoLoader = new DRACOLoader();
//     dracoLoader.setDecoderPath('/draco/gltf/');
//     loader.setDRACOLoader(dracoLoader);
    
//     let mixer: THREE.AnimationMixer | null = null;

//     loader.load(
//       modelPath,
//       (gltf: GLTF) => {
//         const model = gltf.scene;
//         model.position.set(1, 1, 0);
//         model.scale.set(0.01, 0.01, 0.01);
        
//         model.traverse((child) => {
//           if ((child as THREE.Mesh).isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//           }
//         });
        
//         scene.add(model);
        
//         // Play animations if they exist
//         if (gltf.animations && gltf.animations.length) {
//           mixer = new THREE.AnimationMixer(model);
//           mixer.clipAction(gltf.animations[0]).play();
//         }
//       },
//       (progress: ProgressEvent<EventTarget>) => {
//         const percent = (progress.loaded / progress.total) * 100;
//         console.log(`Loading model: ${percent.toFixed(2)}%`);
//       },
//       (error: unknown) => {
//         console.error('Error loading model:', error);
//       }
//     );

//     // OrbitControls
//     const controls = {
//       target: new THREE.Vector3(0, 0.5, 0),
//       dampingFactor: 0.05,
//       rotateSpeed: 0.5,
//       isPointerDown: false,
//       pointerX: 0,
//       pointerY: 0,
//       spherical: new THREE.Spherical(8, Math.PI / 3, 0),
//       sphericalDelta: new THREE.Spherical()
//     };

//     const handlePointerDown = (e: PointerEvent) => {
//       controls.isPointerDown = true;
//       controls.pointerX = e.clientX;
//       controls.pointerY = e.clientY;
//       renderer.domElement.style.cursor = 'grabbing';
//     };

//     const handlePointerMove = (e: PointerEvent) => {
//       if (!controls.isPointerDown) return;
//       const deltaX = e.clientX - controls.pointerX;
//       const deltaY = e.clientY - controls.pointerY;
//       controls.pointerX = e.clientX;
//       controls.pointerY = e.clientY;
//       controls.sphericalDelta.theta -= deltaX * 0.01 * controls.rotateSpeed;
//       controls.sphericalDelta.phi -= deltaY * 0.01 * controls.rotateSpeed;
//     };

//     const handlePointerUp = () => {
//       controls.isPointerDown = false;
//       renderer.domElement.style.cursor = 'grab';
//     };

//     renderer.domElement.addEventListener('pointerdown', handlePointerDown);
//     window.addEventListener('pointermove', handlePointerMove);
//     window.addEventListener('pointerup', handlePointerUp);
//     renderer.domElement.style.cursor = 'grab';
//     renderer.domElement.style.touchAction = 'none';

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     // Animation loop
//     const clock = new THREE.Clock();
//     const animate = () => {
//       requestAnimationFrame(animate);
//       const delta = clock.getDelta();

//       // Update model animations
//       if (mixer) {
//         mixer.update(delta);
//       }

//       // Update controls
//       controls.spherical.theta += controls.sphericalDelta.theta * controls.dampingFactor;
//       controls.spherical.phi += controls.sphericalDelta.phi * controls.dampingFactor;
//       controls.sphericalDelta.theta *= (1 - controls.dampingFactor);
//       controls.sphericalDelta.phi *= (1 - controls.dampingFactor);
//       controls.spherical.phi = Math.max(0, Math.min(Math.PI / 2, controls.spherical.phi));

//       const offset = new THREE.Vector3();
//       offset.setFromSpherical(controls.spherical);
//       camera.position.copy(controls.target).add(offset);
//       camera.lookAt(controls.target);

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
//       window.removeEventListener('pointermove', handlePointerMove);
//       window.removeEventListener('pointerup', handlePointerUp);
//       window.removeEventListener('resize', handleResize);
//       if (containerRef.current && renderer.domElement) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//       groundGeometry.dispose();
//       groundMaterial.dispose();
//       renderer.dispose();
//     };
//   }, [modelPath]);

//   return (
//     <div 
//       ref={containerRef} 
//       className="absolute inset-0 w-full h-full" 
//     />
//   );
// }

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface ThreeJSBackgroundProps {
  modelPath?: string;
}

export function ThreeJSBackground({ modelPath = '/models/LittlestTokyo.glb' }: ThreeJSBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Setup Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Fixed octal syntax
    scene.fog = new THREE.Fog(0x000000, 10, 50);

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.set(5, 2, 8);

    // Initialize OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;    // Enable zoom to test
    controls.enablePan = true;
    controls.autoRotate = true; 
    controls.autoRotateSpeed = 0.9;
    
    // Add event listener to verify controls are working
    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.addEventListener('mousedown', () => {
      console.log('Canvas clicked!');
      renderer.domElement.style.cursor = 'grabbing';
    });
    renderer.domElement.addEventListener('mouseup', () => {
      renderer.domElement.style.cursor = 'grab';
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.CircleGeometry(20, 32);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x000000,
      side: THREE.DoubleSide 
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Load Model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/'); // Use a stable CDN or your local path
    loader.setDRACOLoader(dracoLoader);
    
    let mixer: THREE.AnimationMixer | null = null;

    loader.load(
      modelPath,
      (gltf: GLTF) => {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        
        scene.add(model);
        
        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model);
          mixer.clipAction(gltf.animations[0]).play();
        }
      },
      undefined,
      (error: unknown) => {
        console.error('Error loading model:', error);
      }
    );

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      // 3. Update controls every frame
      controls.update();

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      // Remove manual pointer listeners (handled by OrbitControls now)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      groundGeometry.dispose();
      groundMaterial.dispose();
      renderer.dispose();
      controls.dispose(); // Clean up controls
    };
  }, [modelPath]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      // Ensure z-index is lower than your text overlay
      style={{ zIndex: 0 }} 
    />
  );
}