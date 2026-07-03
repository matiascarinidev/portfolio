"use client";

import { useState, useEffect, useRef } from "react";

interface Blob {
  id: number;
  radius: number;
  speed: number;
  angle: number;
}

export default function BlobEffect() {
  const [blobs] = useState<Blob[]>([
    { id: 1, radius: 75, speed: 0.5, angle: -8 },
    { id: 2, radius: 60, speed: -0.7, angle: Math.PI / 2 },
    { id: 3, radius: 100, speed: 1.2, angle: Math.PI / -4 },
  ]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ filter: "url(#goo)" }}
    >
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="desaturated" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="desaturated" in2="goo" />
          </filter>
        </defs>
      </svg>

      {blobs.map((blob) => (
        <MovingBlob key={blob.id} {...blob} />
      ))}
    </div>
  );
}

function MovingBlob({
  radius,
  speed,
  angle,
}: {
  radius: number;
  speed: number;
  angle: number;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    let time = 0;

    const animate = () => {
      time += speed * 0.01;
      setPosition({
        x: Math.cos(angle + time) * 30,
        y: Math.sin(angle + time) * 60 + 90,
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, angle]);

  return (
    <div
      className="absolute rounded-full bg-white/50"
      style={{
        width: `${radius}px`,
        height: `${radius}px`,
        transform: `translate(${position.x}px, ${position.y}px)`,
        top: "50%",
        left: "50%",
        marginTop: `-${radius / 2}px`,
        marginLeft: `-${radius / 2}px`,
      }}
    />
  );
}
