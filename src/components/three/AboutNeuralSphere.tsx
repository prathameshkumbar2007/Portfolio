import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface AboutNeuralSphereProps {
  className?: string;
}

export const AboutNeuralSphere: React.FC<AboutNeuralSphereProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 24;

    const group = new THREE.Group();
    scene.add(group);

    // Outer Geodesic Icosahedron Wireframe (AI Sphere)
    const sphereGeometry = new THREE.IcosahedronGeometry(7.5, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const sphereMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    group.add(sphereMesh);

    // Inner Core Holographic Ring
    const innerRingGeo = new THREE.TorusGeometry(4.2, 0.1, 16, 80);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 3;
    group.add(innerRing);

    // Inner Glowing Core Sphere
    const coreGeo = new THREE.IcosahedronGeometry(2.5, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0052cc,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Vertices as Glowing Synaptic Nodes
    const posAttribute = sphereGeometry.attributes.position;
    const vertexCount = posAttribute.count;

    const nodesGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(vertexCount * 3);
    for (let i = 0; i < vertexCount; i++) {
      nodePositions[i * 3] = posAttribute.getX(i);
      nodePositions[i * 3 + 1] = posAttribute.getY(i);
      nodePositions[i * 3 + 2] = posAttribute.getZ(i);
    }
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

    // Circle Sprite
    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 32;
    canvasTexture.height = 32;
    const ctx = canvasTexture.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.3, '#00d2ff');
      gradient.addColorStop(0.7, 'rgba(0, 102, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 102, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }

    const nodeSprite = new THREE.CanvasTexture(canvasTexture);
    const nodesMaterial = new THREE.PointsMaterial({
      size: 1.2,
      map: nodeSprite,
      transparent: true,
      opacity: 0.9,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
    group.add(nodes);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        sphereMesh.rotation.y += delta * 0.2;
        sphereMesh.rotation.x += delta * 0.05;
        nodes.rotation.y += delta * 0.2;
        nodes.rotation.x += delta * 0.05;

        innerRing.rotation.z += delta * 0.35;
        innerRing.rotation.x += delta * 0.25;

        coreMesh.rotation.y -= delta * 0.3;
        coreMesh.rotation.z += delta * 0.15;

        // Smooth damping for drag interaction
        currentRotationX += (targetRotationX - currentRotationX) * 0.08;
        currentRotationY += (targetRotationY - currentRotationY) * 0.08;
        group.rotation.x = currentRotationX;
        group.rotation.y = currentRotationY;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      sphereGeometry.dispose();
      wireframeMaterial.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      nodesGeometry.dispose();
      nodesMaterial.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[320px] sm:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      title="Interactive 3D Neural Sphere — Drag to rotate"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/80 border border-blue-500/20 backdrop-blur-md shadow-sm pointer-events-none">
        <span className="text-[11px] font-mono text-blue-600 font-medium tracking-wide flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span>INTERACTIVE 3D NEURAL TOPOLOGY // DRAG TO ROTATE</span>
        </span>
      </div>
    </div>
  );
};