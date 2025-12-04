'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Define the structure for our bubble data
interface BubbleData {
  id: number;
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  moveRangeX: number;
  moveRangeY: number;
  duration: number;
  delay: number;
}

// A nice palette of colorful Tailwind background classes
const colors = [
  'bg-red-400/40',
  'bg-blue-400/40',
  'bg-green-400/40',
  'bg-yellow-400/40',
  'bg-purple-400/40',
  'bg-pink-400/40',
  'bg-orange-400/40',
  'bg-cyan-400/40',
];

// Helper to get a random number between min and max
const random = (min: number, max: number) => Math.random() * (max - min) + min;

const BackgroundBubbles = () => {
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);

  useEffect(() => {
    // Generate bubbles ONLY on the client after mount to avoid hydration errors.
    const bubbleCount = 20; // Adjust number of bubbles here
    const newBubbles: BubbleData[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        // Random size between 40px and 120px
        size: random(40, 120),
        // Pick a random color from the palette
        color: colors[Math.floor(random(0, colors.length))],
        // Initial position percentage (0-100%)
        initialX: random(0, 100),
        initialY: random(0, 100),
        // How far they wander in pixels
        moveRangeX: random(50, 200),
        moveRangeY: random(50, 200),
        // Animation duration (slower is more calming)
        duration: random(15, 30),
        delay: random(0, 5),
      });
    }

    setBubbles(newBubbles);
  }, []);

  return (
    // Container: Absolute positioned, covers entire parent, pushed to back (-z-10)
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className={`absolute rounded-full blur-xl ${b.color}`}
          style={{
            width: b.size,
            height: b.size,
            top: `${b.initialY}%`,
            left: `${b.initialX}%`,
          }}
          // The Animation Keyframes
          animate={{
            x: [0, b.moveRangeX, -b.moveRangeX, 0], // Move right, then left, then back
            y: [0, -b.moveRangeY, b.moveRangeY, 0], // Move up, then down, then back
            scale: [1, 1.1, 0.9, 1], // Slight pulsing effect
          }}
          // Animation settings
          transition={{
            duration: b.duration,
            repeat: Infinity,    // Loop forever
            repeatType: "mirror", // Reverses smoothly
            ease: "easeInOut",   // Soft movement
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBubbles;