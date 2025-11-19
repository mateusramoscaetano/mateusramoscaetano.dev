"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Vertex Shader: Controla a posição e tamanho das partículas
const vertexShader = `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uMouse;
  uniform vec3 uColor;
  
  varying vec3 vPos;

  // Função de ruído pseudo-aleatório
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec3 pos = position;
    
    // Animação de Onda (Senoide baseada no tempo e posição)
    float wave = sin(pos.x * 0.5 + uTime * 0.5) * 0.5 + sin(pos.z * 0.5 + uTime * 0.5) * 0.5;
    
    // Interação com Mouse (Distorção)
    float dist = distance(pos.xz, uMouse * 15.0 - 7.5); // Ajuste de escala do mouse
    float mouseEffect = smoothstep(5.0, 0.0, dist) * 2.0;
    
    pos.y += wave + mouseEffect;
    
    vPos = pos;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Tamanho da partícula baseado na profundidade e pixel ratio
    gl_PointSize = (4.0 * uPixelRatio) / -mvPosition.z;
    
    // Variação de tamanho baseada no mouse
    gl_PointSize *= (1.0 + mouseEffect);
  }
`;

// Fragment Shader: Controla a cor e forma das partículas
const fragmentShader = `
  uniform vec3 uColor;
  
  void main() {
    // Transforma o ponto quadrado em círculo suave
    float r = distance(gl_PointCoord, vec2(0.5));
    if (r > 0.5) discard;
    
    // Suavização da borda
    float alpha = 1.0 - smoothstep(0.3, 0.5, r);
    
    gl_FragColor = vec4(uColor, alpha);
  }
`;

function ParticleWave() {
  const meshRef = useRef<THREE.Points>(null);
  const { viewport, pointer } = useThree();

  // Parâmetros da Grade
  const count = 100; // 100x100 = 10.000 partículas
  const sep = 0.3; // Separação entre pontos

  const positions = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = 0;
        const i = (xi * count + zi) * 3;
        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;
      }
    }
    return positions;
  }, [count, sep]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: {
        value: typeof window !== "undefined" ? window.devicePixelRatio : 1,
      },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color("#8b5cf6") }, // Cor base violeta
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;

      // Atualiza tempo
      material.uniforms.uTime.value = state.clock.getElapsedTime();

      // Interpolação suave do mouse
      material.uniforms.uMouse.value.lerp(
        new THREE.Vector2(
          (state.pointer.x + 1) / 2, // Normaliza para 0..1
          (state.pointer.y + 1) / 2
        ),
        0.1
      );
    }
  });

  return (
    <points ref={meshRef} rotation={[Math.PI / 6, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[new Float32Array(positions.length / 3), 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 5, 10], fov: 45 }}
        dpr={[1, 2]} // Otimização para telas retina
      >
        {/* Fundo escuro sutil para contraste */}
        <color attach="background" args={["#050505"]} />

        <ParticleWave />

        {/* Efeito de Brilho */}
        <EffectComposer enableNormalPass={false}>
          <Bloom
            luminanceThreshold={0.2}
            mipmapBlur
            intensity={0.8}
            radius={0.4}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
