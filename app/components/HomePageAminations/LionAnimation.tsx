"use client";

import React, { useMemo, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

const generateLionData = () => {
  type LionNode = { id: number; x: number; y: number; type: "face" | "mane" };
  type LionEdge = { from: LionNode; to: LionNode; id: string };

  const nodes: LionNode[] = [];
  const edges: LionEdge[] = [];

  const addNode = (id: number, x: number, y: number, type: "face" | "mane") => {
    nodes.push({ id, x, y, type });
  };

  // Eyes
  addNode(1, -40, -30, "face");
  addNode(2, 40, -30, "face");
  // Nose bridge
  addNode(3, 0, -10, "face");
  addNode(4, -15, 20, "face");
  addNode(5, 15, 20, "face");
  // Chin/Mouth
  addNode(6, 0, 60, "face");

  // Inner Mane
  const innerRadius = 90;
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const x = Math.cos(angle - 1) * innerRadius;
    const y = Math.sin(angle - 1) * innerRadius;
    addNode(10 + i, x, y, "mane");
  }

  // Outer Mane
  const outerRadius = 160;
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const x = Math.cos(angle - 1) * outerRadius;
    const y = Math.sin(angle - 1) * outerRadius;
    addNode(30 + i, x, y, "mane");
  }

  // Connection Logic
  const existingConnections = new Set<string>();

  const addEdge = (fromNode: LionNode, toNode: LionNode) => {
    const connectionId1 = `${fromNode.id}-${toNode.id}`;
    const connectionId2 = `${toNode.id}-${fromNode.id}`;
    if (
      !existingConnections.has(connectionId1) &&
      !existingConnections.has(connectionId2)
    ) {
      edges.push({ from: fromNode, to: toNode, id: connectionId1 });
      existingConnections.add(connectionId1);
    }
  };

  nodes.forEach((nodeA) => {
    nodes.forEach((nodeB) => {
      if (nodeA.id === nodeB.id) return;

      const dx = nodeA.x - nodeB.x;
      const dy = nodeA.y - nodeB.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 75) {
        addEdge(nodeA, nodeB);
      }
    });
  });

  return { nodes, edges };
};

export default function LionAnimation() {
  const { nodes, edges } = useMemo(() => generateLionData(), []);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await controls.start("hidden");
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };
    sequence();
  }, [controls]);

  const getColor = (x: number, type: string) => {
    if (type === "face") return "var(--foreground)";

    if (x < -50) return "#FF4D4D";
    if (x > 50) return "#4D79FF";
    return "#A855F7";
  };

  const dotVariants: Variants = {
    hidden: {
      cx: 0,
      cy: 0,
      scale: 0,
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    visible: (i: number) => ({
      cx: nodes[i].x,
      cy: nodes[i].y,
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.04,
        duration: 1.2,
        type: "spring",
        bounce: 0.4,
      },
    }),
  };

  const lineVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      transition: { duration: 0.8 },
    },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 0.4,
      x1: edges[i].from.x,
      y1: edges[i].from.y,
      x2: edges[i].to.x,
      y2: edges[i].to.y,
      transition: {
        delay: i * 0.005 + 0.5,
        duration: 1.5,
      },
    }),
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <svg viewBox="-200 -200 400 400" className="w-full h-full">
        {edges.map((edge, i) => (
          <motion.line
            key={edge.id}
            stroke="currentColor"
            className=" opacity-40"
            strokeWidth="1"
            strokeDasharray="4 4"
            custom={i}
            variants={lineVariants}
            initial="hidden"
            animate={controls}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={node.id}
            r={node.type === "face" ? 8 : 5}
            fill={getColor(node.x, node.type)}
            custom={i}
            variants={dotVariants}
            initial="hidden"
            animate={controls}
          />
        ))}
      </svg>
    </div>
  );
}
