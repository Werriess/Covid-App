import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import "../css/index.css"

const World = () => {
  const mountRef = useRef(null);
  let camera, renderer, scene, sphere, controls;

  useEffect(() => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1400, 400);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(27, 40, 20);
    const material = new THREE.MeshBasicMaterial({ color: 0xB22222, wireframe: true });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphere.position.set(3, 0, 0);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const animate = () => {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef}>
    </div>
  );
};

export default World;
