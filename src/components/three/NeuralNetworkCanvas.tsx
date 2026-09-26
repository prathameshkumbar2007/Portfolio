import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface NeuralNetworkCanvasProps {
  className?: string;
}

export const NeuralNetworkCanvas: React.FC<NeuralNetworkCanvasProps> = ({ className = '' }) => {
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
      console.warn('WebGL not supported. Rendering static fallback.');
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 75;

    // Detect mobile for particle scaling
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 45 : 85;

    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    const spreadX = isMobile ? 60 : 100;
    const spreadY = isMobile ? 50 : 70;
    const spreadZ = 40;

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * spreadX,
        (Math.random() - 0.5) * spreadY,
        (Math.random() - 0.5) * spreadZ
      );
      nodePositions.push(pos);

      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.035,
          (Math.random() - 0.5) * 0.035,
          (Math.random() - 0.5) * 0.02
        )
      );
    }

    // Node Points Material & Geometry
    const pointsGeometry = new THREE.BufferGeometry();
    const positionsArray = new Float32Array(nodeCount * 3);
    const colorsArray = new Float32Array(nodeCount * 3);

    // Electric Blue palette
    const electricBlue = new THREE.Color('#0066ff');
    const cyanBlue = new THREE.Color('#00d2ff');
    const deepNavy = new THREE.Color('#1e40af');

    for (let i = 0; i < nodeCount; i++) {
      positionsArray[i * 3] = nodePositions[i].x;
      positionsArray[i * 3 + 1] = nodePositions[i].y;
      positionsArray[i * 3 + 2] = nodePositions[i].z;

      const rand = Math.random();
      const nodeColor = rand > 0.6 ? electricBlue : rand > 0.3 ? cyanBlue : deepNavy;
      colorsArray[i * 3] = nodeColor.r;
      colorsArray[i * 3 + 1] = nodeColor.g;
      colorsArray[i * 3 + 2] = nodeColor.b;
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    // Custom circle sprite texture
    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 64;
    canvasTexture.height = 64;
    const ctx = canvasTexture.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(0, 102, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(0, 210, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(0, 102, 255, 0.25)');
      gradient.addColorStop(1, 'rgba(0, 102, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }

    const spriteTexture = new THREE.CanvasTexture(canvasTexture);

    const pointsMaterial = new THREE.PointsMaterial({
      size: isMobile ? 3.5 : 4.5,
      map: spriteTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointCloud);

    // Dynamic Connections Lines
    const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineSegments);

    // Subtle 3D Geometric Ring in Background
    const ringGeometry = new THREE.TorusGeometry(32, 0.25, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    });
    const torusRing = new THREE.Mesh(ringGeometry, ringMaterial);
    torusRing.rotation.x = Math.PI / 4;
    scene.add(torusRing);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (event.clientX - windowHalfX) * 0.015;
      targetMouseY = (event.clientY - windowHalfY) * 0.015;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      // Inertial mouse interpolation
      if (!prefersReducedMotion) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        pointCloud.rotation.y = currentMouseX * 0.3;
        pointCloud.rotation.x = currentMouseY * 0.3;
        lineSegments.rotation.y = currentMouseX * 0.3;
        lineSegments.rotation.x = currentMouseY * 0.3;
        torusRing.rotation.z += delta * 0.1;
      }

      // Update Node Positions
      const positions = pointsGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodeCount; i++) {
        if (!prefersReducedMotion) {
          nodePositions[i].add(nodeVelocities[i]);

          // Boundary bouncing
          if (Math.abs(nodePositions[i].x) > spreadX / 2) nodeVelocities[i].x *= -1;
          if (Math.abs(nodePositions[i].y) > spreadY / 2) nodeVelocities[i].y *= -1;
          if (Math.abs(nodePositions[i].z) > spreadZ / 2) nodeVelocities[i].z *= -1;
        }

        positions[i * 3] = nodePositions[i].x;
        positions[i * 3 + 1] = nodePositions[i].y;
        positions[i * 3 + 2] = nodePositions[i].z;
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      // Update Interconnecting Lines
      let lineVertexIndex = 0;
      let colorVertexIndex = 0;
      const connectionDist = isMobile ? 16 : 22;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodePositions[i].x - nodePositions[j].x;
          const dy = nodePositions[i].y - nodePositions[j].y;
          const dz = nodePositions[i].z - nodePositions[j].z;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < connectionDist * connectionDist) {
            const dist = Math.sqrt(distSq);
            const alpha = 1.0 - dist / connectionDist;

            linePositions[lineVertexIndex++] = nodePositions[i].x;
            linePositions[lineVertexIndex++] = nodePositions[i].y;
            linePositions[lineVertexIndex++] = nodePositions[i].z;
            linePositions[lineVertexIndex++] = nodePositions[j].x;
            linePositions[lineVertexIndex++] = nodePositions[j].y;
            linePositions[lineVertexIndex++] = nodePositions[j].z;

            // Electric blue line fade
            lineColors[colorVertexIndex++] = 0.0;
            lineColors[colorVertexIndex++] = 0.4 + alpha * 0.2;
            lineColors[colorVertexIndex++] = 1.0;

            lineColors[colorVertexIndex++] = 0.0;
            lineColors[colorVertexIndex++] = 0.4 + alpha * 0.2;
            lineColors[colorVertexIndex++] = 1.0;
          }
        }
      }

      linesGeometry.setDrawRange(0, lineVertexIndex / 3);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};