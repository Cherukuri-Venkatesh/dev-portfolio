import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePortfolio } from '../context/PortfolioContext';

export function ThreeCanvas() {
  const canvasRef = useRef(null);
  const { activeScene, animSpeed, burstSignal } = usePortfolio();

  // References to keep Three.js state across renders
  const stateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    currentMeshGroup: null,
    particleTexture: null,
    sparkleTexture: null,
    clock: new THREE.Clock(),
    mouseX: 0,
    mouseY: 0,
    targetX: 0,
    targetY: 0,
    scrollYOffset: 0,
    targetScrollY: 0,
    animSpeed: 0.22,
    activeScene: 0,
    // Dynamic stores
    dynPlexusPoints: [],
    dynPlexusMesh: null,
    dynPlexusLines: null,
    dynPlexusPackets: [],
    dynPlexusRedPoints: [],
    dynPlexusRedMesh: null,
    dynEcgLine: null,
    dynEcgLineGlow: null,
    dynPulseRings: [],
    dynEcgParticles: null,
    dynRedPoints: [],
    dynRedMesh: null,
    dynRedLines: null,
    dynRedPackets: [],
    dynGridPlaneMesh: null,
    dynGridPlaneGeo: null,
    dynGridPrisms: [],
    dynCircuitTraces: [],
    dynCircuitPulses: [],
    dynDnaRungs: [],
    dynRadarDots: [],
    dynRadarSweep: null,
    dynStarPoints: null,
    dynAccretion: null,
    dynSatellites: []
  });

  // Keep animSpeed and activeScene updated in stateRef
  useEffect(() => {
    stateRef.current.animSpeed = animSpeed;
  }, [animSpeed]);

  useEffect(() => {
    stateRef.current.activeScene = activeScene;
    if (stateRef.current.currentMeshGroup) {
      buildScenePreset(activeScene);
    }
  }, [activeScene]);

  // Handle burst surge
  useEffect(() => {
    if (burstSignal > 0 && stateRef.current.currentMeshGroup) {
      const g = stateRef.current.currentMeshGroup;
      g.scale.set(1.15, 1.15, 1.15);
      setTimeout(() => {
        if (g) g.scale.set(1.0, 1.0, 1.0);
      }, 400);
    }
  }, [burstSignal]);

  function createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.25, 'rgba(0, 242, 254, 0.95)');
    grad.addColorStop(0.6, 'rgba(0, 242, 254, 0.25)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }

  function createSparkleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 64, 64);
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(168, 85, 247, 0.85)');
    grad.addColorStop(0.7, 'rgba(0, 242, 254, 0.25)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(32, 4);
    ctx.lineTo(32, 60);
    ctx.moveTo(4, 32);
    ctx.lineTo(60, 32);
    ctx.stroke();
    return new THREE.CanvasTexture(canvas);
  }

  function buildScenePreset(index) {
    const s = stateRef.current;
    if (!s.currentMeshGroup) return;

    // Dispose previous children
    while (s.currentMeshGroup.children.length > 0) {
      const obj = s.currentMeshGroup.children[0];
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
      s.currentMeshGroup.remove(obj);
    }

    s.dynPlexusPoints = [];
    s.dynPlexusMesh = null;
    s.dynPlexusLines = null;
    s.dynPlexusPackets = [];
    s.dynPlexusRedPoints = [];
    s.dynPlexusRedMesh = null;
    s.dynEcgLine = null;
    s.dynEcgLineGlow = null;
    s.dynPulseRings = [];
    s.dynEcgParticles = null;
    s.dynRedPoints = [];
    s.dynRedMesh = null;
    s.dynRedLines = null;
    s.dynRedPackets = [];
    s.dynGridPlaneMesh = null;
    s.dynGridPlaneGeo = null;
    s.dynGridPrisms = [];
    s.dynCircuitTraces = [];
    s.dynCircuitPulses = [];
    s.dynDnaRungs = [];
    s.dynRadarDots = [];
    s.dynRadarSweep = null;
    s.dynStarPoints = null;
    s.dynAccretion = null;
    s.dynSatellites = [];

    s.currentMeshGroup.position.set(0, 0, 0);
    s.currentMeshGroup.rotation.set(0, 0, 0);

    // ==========================================
    // PRESET 0: NEURAL 3D PLEXUS
    // ==========================================
    if (index === 0) {
      const nodeCount = 160;
      const positions = new Float32Array(nodeCount * 3);
      const colors = new Float32Array(nodeCount * 3);
      const nodePalette = [
        [0.0, 0.95, 1.0],   // Cyan
        [0.10, 0.52, 1.0],  // Blue
        [0.05, 0.90, 0.52], // Emerald
        [0.12, 0.85, 0.38], // Mint
        [0.0, 0.82, 0.95]   // Aqua
      ];

      for (let i = 0; i < nodeCount; i++) {
        const px = (Math.random() - 0.5) * 115;
        const py = (Math.random() - 0.5) * 90;
        const pz = (Math.random() - 0.5) * 50 - 5;
        positions[i * 3] = px;
        positions[i * 3 + 1] = py;
        positions[i * 3 + 2] = pz;

        const col = nodePalette[Math.floor(Math.random() * nodePalette.length)];
        colors[i * 3] = col[0];
        colors[i * 3 + 1] = col[1];
        colors[i * 3 + 2] = col[2];

        s.dynPlexusPoints.push({
          pos: new THREE.Vector3(px, py, pz),
          vel: new THREE.Vector3((Math.random() - 0.5) * 0.012, (Math.random() - 0.5) * 0.012, (Math.random() - 0.5) * 0.008),
          color: col,
          baseY: py
        });
      }

      const pointGeo = new THREE.BufferGeometry();
      pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const pointMat = new THREE.PointsMaterial({
        size: 2.6,
        map: s.particleTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      s.dynPlexusMesh = new THREE.Points(pointGeo, pointMat);
      s.currentMeshGroup.add(s.dynPlexusMesh);

      // Micro Red Dots
      const redCount = 100;
      const redPositions = new Float32Array(redCount * 3);
      for (let r = 0; r < redCount; r++) {
        const rx = (Math.random() - 0.5) * 120;
        const ry = (Math.random() - 0.5) * 95;
        const rz = (Math.random() - 0.5) * 50 - 5;
        redPositions[r * 3] = rx;
        redPositions[r * 3 + 1] = ry;
        redPositions[r * 3 + 2] = rz;

        s.dynPlexusRedPoints.push({
          pos: new THREE.Vector3(rx, ry, rz),
          vel: new THREE.Vector3((Math.random() - 0.5) * 0.009, (Math.random() - 0.5) * 0.009, (Math.random() - 0.5) * 0.006)
        });
      }

      const redGeo = new THREE.BufferGeometry();
      redGeo.setAttribute('position', new THREE.BufferAttribute(redPositions, 3));
      const redMat = new THREE.PointsMaterial({
        size: 1.35,
        color: 0xff1e44,
        map: s.sparkleTexture || s.particleTexture,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      s.dynPlexusRedMesh = new THREE.Points(redGeo, redMat);
      s.currentMeshGroup.add(s.dynPlexusRedMesh);

      const maxLines = 450;
      const linePositions = new Float32Array(maxLines * 6);
      const lineColors = new Float32Array(maxLines * 6);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      s.dynPlexusLines = new THREE.LineSegments(lineGeo, lineMat);
      s.currentMeshGroup.add(s.dynPlexusLines);
    }

    // ==========================================
    // PRESET 1: BIO-DIGITAL HEARTBEAT PULSE (ECG)
    // ==========================================
    else if (index === 1) {
      const segCount = 420;
      const ecgPositions = new Float32Array(segCount * 3);
      for (let i = 0; i < segCount; i++) {
        ecgPositions[i * 3] = (i / segCount - 0.5) * 125;
        ecgPositions[i * 3 + 1] = 0;
        ecgPositions[i * 3 + 2] = 0;
      }
      const ecgGeo = new THREE.BufferGeometry();
      ecgGeo.setAttribute('position', new THREE.BufferAttribute(ecgPositions, 3));
      const ecgMat = new THREE.LineBasicMaterial({
        color: 0x10b981,
        linewidth: 3,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending
      });
      s.dynEcgLine = new THREE.Line(ecgGeo, ecgMat);
      s.currentMeshGroup.add(s.dynEcgLine);

      const glowGeo = new THREE.BufferGeometry();
      glowGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ecgPositions), 3));
      const glowMat = new THREE.LineBasicMaterial({
        color: 0x00f2fe,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      s.dynEcgLineGlow = new THREE.Line(glowGeo, glowMat);
      s.dynEcgLineGlow.position.z = -1;
      s.currentMeshGroup.add(s.dynEcgLineGlow);

      for (let r = 0; r < 5; r++) {
        const ringGeo = new THREE.RingGeometry(1, 1.4, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: r % 2 === 0 ? 0x10b981 : 0x00f2fe,
          transparent: true,
          opacity: 0.0,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.set(0, 0, -2);
        s.dynPulseRings.push({ mesh: ringMesh, scale: 0.1 + r * 0.25, age: r * 0.2 });
        s.currentMeshGroup.add(ringMesh);
      }

      const pCount = 90;
      const pPositions = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        pPositions[i * 3] = (Math.random() - 0.5) * 110;
        pPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
        pPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
      const pMat = new THREE.PointsMaterial({
        size: 2.2,
        color: 0x34d399,
        map: s.particleTexture,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });
      s.dynEcgParticles = new THREE.Points(pGeo, pMat);
      s.currentMeshGroup.add(s.dynEcgParticles);
    }

    // ==========================================
    // PRESET 2: CRIMSON RED CONNECTING DOTS
    // ==========================================
    else if (index === 2) {
      const redCount = 340;
      const positions = new Float32Array(redCount * 3);
      const colors = new Float32Array(redCount * 3);
      const redPalette = [
        [1.0, 0.08, 0.28], // Ruby Red
        [0.94, 0.27, 0.27], // Crimson
        [1.0, 0.42, 0.0],  // Sunset Orange
        [0.96, 0.62, 0.04], // Amber Gold
        [0.65, 0.20, 0.95]  // Violet
      ];

      for (let i = 0; i < redCount; i++) {
        const px = (Math.random() - 0.5) * 125;
        const py = (Math.random() - 0.5) * 95;
        const pz = (Math.random() - 0.5) * 55 - 5;
        positions[i * 3] = px;
        positions[i * 3 + 1] = py;
        positions[i * 3 + 2] = pz;

        const col = redPalette[Math.floor(Math.random() * redPalette.length)];
        colors[i * 3] = col[0];
        colors[i * 3 + 1] = col[1];
        colors[i * 3 + 2] = col[2];

        s.dynRedPoints.push({
          pos: new THREE.Vector3(px, py, pz),
          vel: new THREE.Vector3((Math.random() - 0.5) * 0.015, (Math.random() - 0.5) * 0.015, (Math.random() - 0.5) * 0.01),
          color: col
        });
      }

      const pointGeo = new THREE.BufferGeometry();
      pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const pointMat = new THREE.PointsMaterial({
        size: 2.4,
        map: s.particleTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      s.dynRedMesh = new THREE.Points(pointGeo, pointMat);
      s.currentMeshGroup.add(s.dynRedMesh);

      const maxRedLines = 700;
      const linePositions = new Float32Array(maxRedLines * 6);
      const lineColors = new Float32Array(maxRedLines * 6);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      s.dynRedLines = new THREE.LineSegments(lineGeo, lineMat);
      s.currentMeshGroup.add(s.dynRedLines);
    }

    // ==========================================
    // PRESET 3: HOLOGRAPHIC 3D COLORFUL TOPO MESH GRID
    // ==========================================
    else if (index === 3) {
      const width = 120;
      const height = 90;
      const segW = 80;
      const segH = 60;
      s.dynGridPlaneGeo = new THREE.PlaneGeometry(width, height, segW, segH);
      s.dynGridPlaneGeo.rotateX(-Math.PI / 3.2);
      s.dynGridPlaneGeo.translate(0, -10, -10);

      const pos = s.dynGridPlaneGeo.attributes.position;
      const colors = new Float32Array(pos.count * 3);
      for (let i = 0; i < pos.count; i++) {
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.85;
        colors[i * 3 + 2] = 1.0;
      }
      s.dynGridPlaneGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const planeMat = new THREE.MeshBasicMaterial({
        wireframe: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      s.dynGridPlaneMesh = new THREE.Mesh(s.dynGridPlaneGeo, planeMat);
      s.currentMeshGroup.add(s.dynGridPlaneMesh);

      for (let p = 0; p < 20; p++) {
        const prismGeo = new THREE.OctahedronGeometry(1.2 + Math.random() * 1.5, 0);
        const prismMat = new THREE.MeshBasicMaterial({
          color: p % 3 === 0 ? 0x00f2fe : (p % 3 === 1 ? 0xa855f7 : 0x10b981),
          wireframe: true,
          transparent: true,
          opacity: 0.65
        });
        const prismMesh = new THREE.Mesh(prismGeo, prismMat);
        prismMesh.position.set((Math.random() - 0.5) * 90, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 30);
        s.dynGridPrisms.push({
          mesh: prismMesh,
          rotSpeed: (Math.random() - 0.5) * 0.02,
          floatSpeed: 0.005 + Math.random() * 0.01,
          baseY: prismMesh.position.y
        });
        s.currentMeshGroup.add(prismMesh);
      }
    }

    // ==========================================
    // PRESET 4: CYBER CIRCUIT PULSE GRID
    // ==========================================
    else if (index === 4) {
      const traceCount = 65;
      for (let t = 0; t < traceCount; t++) {
        const points = [];
        let curr = new THREE.Vector3((Math.random() - 0.5) * 110, (Math.random() - 0.5) * 75, (Math.random() - 0.5) * 20 - 5);
        points.push(curr.clone());
        const segments = 3 + Math.floor(Math.random() * 4);
        for (let sIdx = 0; sIdx < segments; sIdx++) {
          const dir = Math.floor(Math.random() * 4);
          const len = 6 + Math.random() * 16;
          if (dir === 0) curr.x += len;
          else if (dir === 1) curr.x -= len;
          else if (dir === 2) curr.y += len;
          else curr.y -= len;
          points.push(curr.clone());
        }
        const traceGeo = new THREE.BufferGeometry().setFromPoints(points);
        const traceMat = new THREE.LineBasicMaterial({
          color: t % 2 === 0 ? 0x00f2fe : 0xa855f7,
          transparent: true,
          opacity: 0.35,
          blending: THREE.AdditiveBlending
        });
        const traceLine = new THREE.Line(traceGeo, traceMat);
        s.dynCircuitTraces.push({ line: traceLine, points });
        s.currentMeshGroup.add(traceLine);
      }

      for (let p = 0; p < 35; p++) {
        const pulseGeo = new THREE.SphereGeometry(0.65, 8, 8);
        const pulseMat = new THREE.MeshBasicMaterial({
          color: 0x39ff14,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending
        });
        const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
        s.dynCircuitPulses.push({
          mesh: pulseMesh,
          traceIdx: Math.floor(Math.random() * s.dynCircuitTraces.length),
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.005
        });
        s.currentMeshGroup.add(pulseMesh);
      }
    }

    // ==========================================
    // PRESET 5: DOUBLE-HELIX PULSE DNA
    // ==========================================
    else if (index === 5) {
      const rungCount = 70;
      const height = 90;
      const radius = 16;
      const turns = 3.5;

      for (let r = 0; r < rungCount; r++) {
        const t = (r / rungCount) * Math.PI * 2 * turns;
        const y = (r / rungCount - 0.5) * height;
        const x1 = Math.cos(t) * radius;
        const z1 = Math.sin(t) * radius;
        const x2 = Math.cos(t + Math.PI) * radius;
        const z2 = Math.sin(t + Math.PI) * radius;

        const rungGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x1, y, z1),
          new THREE.Vector3(x2, y, z2)
        ]);
        const rungMat = new THREE.LineBasicMaterial({
          color: r % 2 === 0 ? 0x10b981 : 0x00f2fe,
          transparent: true,
          opacity: 0.65,
          blending: THREE.AdditiveBlending
        });
        const rungLine = new THREE.Line(rungGeo, rungMat);
        s.dynDnaRungs.push({ line: rungLine, index: r, baseColor: rungMat.color.getHex() });
        s.currentMeshGroup.add(rungLine);
      }

      const pCount = 180;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const t = (i / pCount) * Math.PI * 2 * turns;
        const y = (i / pCount - 0.5) * height;
        const isStrandA = i % 2 === 0;
        const angle = isStrandA ? t : t + Math.PI;
        pPos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
        pPos[i * 3 + 1] = y + (Math.random() - 0.5) * 2;
        pPos[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
      }
      const helixPointsGeo = new THREE.BufferGeometry();
      helixPointsGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const helixPointsMat = new THREE.PointsMaterial({
        size: 2.2,
        color: 0x00f2fe,
        map: s.particleTexture,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      s.currentMeshGroup.add(new THREE.Points(helixPointsGeo, helixPointsMat));
    }

    // ==========================================
    // PRESET 6: SONAR RADAR PULSE & ECHOES
    // ==========================================
    else if (index === 6) {
      for (let ring = 1; ring <= 4; ring++) {
        const circleGeo = new THREE.RingGeometry(ring * 12, ring * 12 + 0.3, 64);
        const circleMat = new THREE.MeshBasicMaterial({
          color: 0x00f2fe,
          transparent: true,
          opacity: 0.25,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending
        });
        const circleMesh = new THREE.Mesh(circleGeo, circleMat);
        s.currentMeshGroup.add(circleMesh);
      }

      const dotCount = 90;
      for (let d = 0; d < dotCount; d++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 5 + Math.random() * 45;
        const dotGeo = new THREE.SphereGeometry(0.8, 8, 8);
        const dotMat = new THREE.MeshBasicMaterial({
          color: 0x00f2fe,
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending
        });
        const dotMesh = new THREE.Mesh(dotGeo, dotMat);
        dotMesh.position.set(Math.cos(angle) * dist, Math.sin(angle) * dist, (Math.random() - 0.5) * 10);
        s.dynRadarDots.push({ mesh: dotMesh, angle, dist, pulse: 0 });
        s.currentMeshGroup.add(dotMesh);
      }

      const sweepGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(50, 0, 0)
      ]);
      const sweepMat = new THREE.LineBasicMaterial({
        color: 0x39ff14,
        linewidth: 2,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      s.dynRadarSweep = new THREE.Line(sweepGeo, sweepMat);
      s.currentMeshGroup.add(s.dynRadarSweep);
    }

    // ==========================================
    // PRESET 7: GALACTIC STARBURST PLEXUS
    // ==========================================
    else if (index === 7) {
      const starCount = 300;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        const rad = 5 + Math.pow(Math.random(), 0.5) * 55;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        positions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = rad * Math.cos(phi);

        colors[i * 3] = 0.6 + Math.random() * 0.4;
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.3;
        colors[i * 3 + 2] = 1.0;
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const starMat = new THREE.PointsMaterial({
        size: 2.2,
        map: s.particleTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      s.dynStarPoints = new THREE.Points(starGeo, starMat);
      s.currentMeshGroup.add(s.dynStarPoints);
    }

    // ==========================================
    // PRESET 8: KINETIC CHRONO-GYROSCOPE
    // ==========================================
    else if (index === 8) {
      for (let i = 0; i < 3; i++) {
        const torusGeo = new THREE.TorusGeometry(14 + i * 5, 0.4, 16, 100);
        const torusMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0x00f2fe : (i === 1 ? 0xa855f7 : 0x10b981),
          wireframe: true,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        });
        const torusMesh = new THREE.Mesh(torusGeo, torusMat);
        torusMesh.rotation.set(i * 0.6, i * 0.4, 0);
        s.currentMeshGroup.add(torusMesh);
      }

      const coreGeo = new THREE.IcosahedronGeometry(6, 1);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        wireframe: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      s.currentMeshGroup.add(new THREE.Mesh(coreGeo, coreMat));
    }

    // ==========================================
    // PRESET 9: SINGULARITY OF FOCUS (SLOW VORTEX)
    // ==========================================
    else if (index === 9) {
      const pCount = 480;
      const positions = new Float32Array(pCount * 3);
      const colors = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const arm = i % 3;
        const r = 3 + Math.pow(Math.random(), 0.6) * 45;
        const theta = r * 0.35 + (arm * Math.PI * 2) / 3 + (Math.random() - 0.5) * 0.4;
        positions[i * 3] = Math.cos(theta) * r;
        positions[i * 3 + 1] = (Math.random() - 0.5) * (r * 0.18);
        positions[i * 3 + 2] = Math.sin(theta) * r;

        colors[i * 3] = 0.65 + Math.random() * 0.35;
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.6;
        colors[i * 3 + 2] = 0.95;
      }
      const accGeo = new THREE.BufferGeometry();
      accGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      accGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const accMat = new THREE.PointsMaterial({
        size: 2.4,
        map: s.particleTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      s.dynAccretion = new THREE.Points(accGeo, accMat);
      s.currentMeshGroup.add(s.dynAccretion);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const s = stateRef.current;
    s.particleTexture = createParticleTexture();
    s.sparkleTexture = createSparkleTexture();

    s.scene = new THREE.Scene();
    s.scene.fog = new THREE.FogExp2(0x030712, 0.012);

    s.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    s.camera.position.set(0, 0, 50);

    s.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    s.renderer.setSize(window.innerWidth, window.innerHeight);
    s.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const ambientLight = new THREE.AmbientLight(0x080f24, 2.0);
    s.scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f2fe, 3.2, 120);
    lightCyan.position.set(30, 25, 25);
    s.scene.add(lightCyan);

    const lightViolet = new THREE.PointLight(0xa855f7, 2.5, 120);
    lightViolet.position.set(-30, -20, 25);
    s.scene.add(lightViolet);

    s.currentMeshGroup = new THREE.Group();
    s.scene.add(s.currentMeshGroup);

    buildScenePreset(s.activeScene);

    const handleMouseMove = (e) => {
      s.mouseX = (e.clientX - window.innerWidth / 2) * 0.005;
      s.mouseY = (e.clientY - window.innerHeight / 2) * 0.005;
    };

    const handleScroll = () => {
      s.targetScrollY = window.scrollY * 0.018;
    };

    const handleResize = () => {
      if (!s.camera || !s.renderer) return;
      s.camera.aspect = window.innerWidth / window.innerHeight;
      s.camera.updateProjectionMatrix();
      s.renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = s.clock.getDelta();
      const speed = s.animSpeed;
      const time = s.clock.getElapsedTime() * speed;

      s.targetX += (s.mouseX - s.targetX) * 0.04;
      s.targetY += (s.mouseY - s.targetY) * 0.04;
      s.scrollYOffset += (s.targetScrollY - s.scrollYOffset) * 0.06;

      if (s.currentMeshGroup) {
        s.currentMeshGroup.rotation.y = s.targetX * 0.4;
        s.currentMeshGroup.rotation.x = -s.targetY * 0.4;
        s.currentMeshGroup.position.y = (s.scrollYOffset % 12) - 6;

        // Preset 0 updates
        if (s.activeScene === 0 && s.dynPlexusMesh && s.dynPlexusPoints.length > 0) {
          const posAttr = s.dynPlexusMesh.geometry.attributes.position;
          const count = s.dynPlexusPoints.length;

          for (let i = 0; i < count; i++) {
            const p = s.dynPlexusPoints[i];
            p.pos.addScaledVector(p.vel, speed * 25);
            if (p.pos.x > 60 || p.pos.x < -60) p.vel.x *= -1;
            if (p.pos.y > 45 || p.pos.y < -45) p.vel.y *= -1;
            if (p.pos.z > 25 || p.pos.z < -35) p.vel.z *= -1;
            posAttr.setXYZ(i, p.pos.x, p.pos.y, p.pos.z);
          }
          posAttr.needsUpdate = true;

          // Red micro-dots drift
          if (s.dynPlexusRedMesh && s.dynPlexusRedPoints.length > 0) {
            const redAttr = s.dynPlexusRedMesh.geometry.attributes.position;
            for (let r = 0; r < s.dynPlexusRedPoints.length; r++) {
              const rp = s.dynPlexusRedPoints[r];
              rp.pos.addScaledVector(rp.vel, speed * 20);
              if (rp.pos.x > 62 || rp.pos.x < -62) rp.vel.x *= -1;
              if (rp.pos.y > 48 || rp.pos.y < -48) rp.vel.y *= -1;
              if (rp.pos.z > 25 || rp.pos.z < -35) rp.vel.z *= -1;
              redAttr.setXYZ(r, rp.pos.x, rp.pos.y, rp.pos.z);
            }
            redAttr.needsUpdate = true;
          }

          // Line connections
          if (s.dynPlexusLines) {
            const linePos = s.dynPlexusLines.geometry.attributes.position;
            const lineCol = s.dynPlexusLines.geometry.attributes.color;
            let lineIdx = 0;
            const maxDistance = 17;

            for (let i = 0; i < count && lineIdx < 450; i++) {
              for (let j = i + 1; j < count && lineIdx < 450; j++) {
                const dist = s.dynPlexusPoints[i].pos.distanceTo(s.dynPlexusPoints[j].pos);
                if (dist < maxDistance) {
                  const alpha = (1.0 - dist / maxDistance) * 0.7;
                  const pi = s.dynPlexusPoints[i].pos;
                  const pj = s.dynPlexusPoints[j].pos;

                  linePos.setXYZ(lineIdx * 2, pi.x, pi.y, pi.z);
                  linePos.setXYZ(lineIdx * 2 + 1, pj.x, pj.y, pj.z);

                  const ci = s.dynPlexusPoints[i].color;
                  lineCol.setXYZ(lineIdx * 2, ci[0] * alpha, ci[1] * alpha, ci[2] * alpha);
                  lineCol.setXYZ(lineIdx * 2 + 1, ci[0] * alpha, ci[1] * alpha, ci[2] * alpha);
                  lineIdx++;
                }
              }
            }
            s.dynPlexusLines.geometry.setDrawRange(0, lineIdx * 2);
            linePos.needsUpdate = true;
            lineCol.needsUpdate = true;
          }
        }

        // Preset 1: ECG Wave updates
        else if (s.activeScene === 1 && s.dynEcgLine) {
          const pos = s.dynEcgLine.geometry.attributes.position;
          const segCount = pos.count;
          const sweepX = ((time * 30) % 130) - 65;

          for (let i = 0; i < segCount; i++) {
            const x = pos.getX(i);
            const distFromSweep = Math.abs(x - sweepX);
            let y = 0;
            if (distFromSweep < 6) {
              const norm = (x - sweepX) / 6;
              if (norm > -0.6 && norm < -0.3) y = -2.5;
              else if (norm >= -0.3 && norm < 0.2) y = 14 * Math.cos(norm * Math.PI * 2.5);
              else if (norm >= 0.2 && norm < 0.6) y = -4.5;
            }
            pos.setY(i, y);
          }
          pos.needsUpdate = true;

          if (s.dynEcgLineGlow) {
            const glowPos = s.dynEcgLineGlow.geometry.attributes.position;
            for (let i = 0; i < segCount; i++) {
              glowPos.setY(i, pos.getY(i) * 1.15);
            }
            glowPos.needsUpdate = true;
          }

          s.dynPulseRings.forEach(r => {
            r.scale += delta * speed * 2.5;
            if (r.scale > 35) r.scale = 0.1;
            r.mesh.scale.set(r.scale, r.scale, 1);
            r.mesh.material.opacity = Math.max(0, (1 - r.scale / 35) * 0.5);
          });
        }

        // Preset 2: Crimson red synapse
        else if (s.activeScene === 2 && s.dynRedMesh && s.dynRedPoints.length > 0) {
          const posAttr = s.dynRedMesh.geometry.attributes.position;
          const count = s.dynRedPoints.length;

          for (let i = 0; i < count; i++) {
            const p = s.dynRedPoints[i];
            p.pos.addScaledVector(p.vel, speed * 25);
            if (p.pos.x > 62 || p.pos.x < -62) p.vel.x *= -1;
            if (p.pos.y > 48 || p.pos.y < -48) p.vel.y *= -1;
            if (p.pos.z > 28 || p.pos.z < -38) p.vel.z *= -1;
            posAttr.setXYZ(i, p.pos.x, p.pos.y, p.pos.z);
          }
          posAttr.needsUpdate = true;

          if (s.dynRedLines) {
            const linePos = s.dynRedLines.geometry.attributes.position;
            const lineCol = s.dynRedLines.geometry.attributes.color;
            let lineIdx = 0;
            const maxDistance = 14;

            for (let i = 0; i < count && lineIdx < 700; i++) {
              for (let j = i + 1; j < count && lineIdx < 700; j++) {
                const dist = s.dynRedPoints[i].pos.distanceTo(s.dynRedPoints[j].pos);
                if (dist < maxDistance) {
                  const alpha = (1.0 - dist / maxDistance) * 0.65;
                  const pi = s.dynRedPoints[i].pos;
                  const pj = s.dynRedPoints[j].pos;

                  linePos.setXYZ(lineIdx * 2, pi.x, pi.y, pi.z);
                  linePos.setXYZ(lineIdx * 2 + 1, pj.x, pj.y, pj.z);

                  const ci = s.dynRedPoints[i].color;
                  lineCol.setXYZ(lineIdx * 2, ci[0] * alpha, ci[1] * alpha, ci[2] * alpha);
                  lineCol.setXYZ(lineIdx * 2 + 1, ci[0] * alpha, ci[1] * alpha, ci[2] * alpha);
                  lineIdx++;
                }
              }
            }
            s.dynRedLines.geometry.setDrawRange(0, lineIdx * 2);
            linePos.needsUpdate = true;
            lineCol.needsUpdate = true;
          }
        }

        // Preset 3: Topo mesh grid undulation
        else if (s.activeScene === 3 && s.dynGridPlaneGeo) {
          const pos = s.dynGridPlaneGeo.attributes.position;
          const cols = s.dynGridPlaneGeo.attributes.color;
          for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const z = Math.sin(x * 0.08 + time * 1.5) * 3.5 + Math.cos(y * 0.08 + time * 1.2) * 2.8;
            pos.setZ(i, z);

            const r = (Math.sin(x * 0.05 + time) + 1) * 0.45;
            const g = (Math.cos(y * 0.05 + time * 0.8) + 1) * 0.45;
            const b = 0.8;
            cols.setXYZ(i, r, g, b);
          }
          pos.needsUpdate = true;
          cols.needsUpdate = true;

          s.dynGridPrisms.forEach(pr => {
            pr.mesh.rotation.x += pr.rotSpeed * speed * 30;
            pr.mesh.rotation.y += pr.rotSpeed * speed * 40;
            pr.mesh.position.y = pr.baseY + Math.sin(time * 2 + pr.mesh.position.x) * 2.5;
          });
        }

        // Preset 4: Circuit trace pulses
        else if (s.activeScene === 4 && s.dynCircuitPulses.length > 0) {
          s.dynCircuitPulses.forEach(p => {
            p.progress += p.speed * speed * 15;
            if (p.progress >= 1.0) p.progress = 0;
            const trace = s.dynCircuitTraces[p.traceIdx];
            if (trace && trace.points.length > 1) {
              const segTotal = trace.points.length - 1;
              const segIdx = Math.min(Math.floor(p.progress * segTotal), segTotal - 1);
              const subProgress = (p.progress * segTotal) - segIdx;
              const p1 = trace.points[segIdx];
              const p2 = trace.points[segIdx + 1];
              p.mesh.position.lerpVectors(p1, p2, subProgress);
            }
          });
        }

        // Preset 5: Double helix DNA
        else if (s.activeScene === 5 && s.dynDnaRungs.length > 0) {
          s.dynDnaRungs.forEach(r => {
            const pulseWave = (Math.sin(time * 3 - r.index * 0.15) + 1) * 0.5;
            r.line.material.opacity = 0.25 + pulseWave * 0.7;
          });
        }

        // Preset 6: Sonar radar sweep
        else if (s.activeScene === 6 && s.dynRadarSweep) {
          s.dynRadarSweep.rotation.z -= delta * speed * 2.0;
          const sweepAngle = (-s.dynRadarSweep.rotation.z) % (Math.PI * 2);
          s.dynRadarDots.forEach(d => {
            const diff = Math.abs((d.angle - sweepAngle + Math.PI * 2) % (Math.PI * 2));
            if (diff < 0.25) {
              d.pulse = 1.0;
            }
            d.pulse = Math.max(0, d.pulse - delta * speed * 2.5);
            d.mesh.material.opacity = 0.25 + d.pulse * 0.75;
            const scale = 1.0 + d.pulse * 0.8;
            d.mesh.scale.set(scale, scale, scale);
          });
        }

        // Preset 7: Starburst
        else if (s.activeScene === 7 && s.dynStarPoints) {
          s.dynStarPoints.rotation.y += delta * speed * 0.12;
          s.dynStarPoints.rotation.x += delta * speed * 0.06;
        }

        // Preset 8: Gyroscope
        else if (s.activeScene === 8 && s.currentMeshGroup.children.length > 0) {
          s.currentMeshGroup.children.forEach((child, i) => {
            child.rotation.x += delta * speed * (0.4 + i * 0.2);
            child.rotation.y += delta * speed * (0.3 + i * 0.25);
          });
        }

        // Preset 9: Singularity
        else if (s.activeScene === 9 && s.dynAccretion) {
          s.dynAccretion.rotation.y += delta * speed * 0.8;
        }
      }

      s.renderer.render(s.scene, s.camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (s.renderer) {
        s.renderer.dispose();
      }
    };
  }, []);

  return (
    <div id="canvas-container" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} id="three-canvas" className="w-full h-full block" />
    </div>
  );
}
