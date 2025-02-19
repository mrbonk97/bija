"use client";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";

export const IcosObject = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let { clientHeight: h, clientWidth: w } = ref.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(w, h);
    ref.current.appendChild(renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
    scene.add(hemisphereLight);

    const spotLight = new THREE.SpotLight(0xffffff, 200);
    spotLight.position.set(-10, 10, 10);
    camera.add(spotLight);

    const pointLight = new THREE.PointLight(0xffffff, 30, 100);
    pointLight.position.set(2, 2, 2);
    camera.add(pointLight);

    const geometry = new THREE.IcosahedronGeometry(1);
    const material = new THREE.MeshStandardMaterial({ color: 0x2e335c });
    const icos = new THREE.Mesh(geometry, material);
    icos.rotation.z = 1;
    scene.add(icos);

    const control = new OrbitControls(camera, renderer.domElement);
    control.enableDamping = true;

    camera.position.z = 2;
    scene.add(camera);

    const handleResize = () => {
      if (!ref.current) return;
      h = ref.current.clientHeight;
      w = ref.current.clientWidth;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.render(scene, camera); // -> Also needed
    };

    window.addEventListener("resize", handleResize);

    function animate() {
      renderer.render(scene, camera);
      icos.rotation.z += 0.005;
      icos.rotation.y += 0.01;
      control.update();
    }

    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      control.dispose();
      renderer.setAnimationLoop(null);
    };
  }, []);

  return <div ref={ref} className="h-1/2 max-h-96" />;
};
