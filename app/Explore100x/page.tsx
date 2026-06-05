// import React from 'react'
// import { PhilosophyHero } from '../components/100X/Philosophy'
// import PhilosophyComparison from '../components/100X/PhilosophyComparison'
// import MultiplierMap from '../components/100X/MultiplierMap'

// const Explore = () => {
//   return (
//    <>
//    <PhilosophyHero />
//    <PhilosophyComparison />
//    <MultiplierMap />
   
//    </>
//   )
// }

// export default Explore

// app/explore/page.tsx or where your page sits
import React from 'react';
import { PhilosophyHero } from '../components/100X/Philosophy';
import PhilosophyComparison from '../components/100X/PhilosophyComparison';
import { AsymmetricBentoMatrix } from '../components/100X/AsymmetricBentoMatrix'; // Bento layout parameters
import { AgentExecutionMatrix } from '../components/100X/AgentExecutionMatrix'; // Live workspace simulation
import MultiplierMap from '../components/100X/MultiplierMap';
import { GrowthRoadmapTrack } from '../components/100X/GrowthRoadmapTrack'; // Delivery sequence track

const Explore = () => {
  return (
    <>
      {/* 🟦 Section 1: Hero Focus Entry */}
      <PhilosophyHero />
      
      {/* ⬜ Section 2: Conflict Side-by-Side Analysis */}
      <PhilosophyComparison />

      {/* ⬜ Section 3: High-Density Bento Grid System Capabilities */}
      <AsymmetricBentoMatrix />
      
      {/* 🟦 Section 4: Live Agent Execution Code Simulator */}
      <AgentExecutionMatrix />
      
      {/* ⬜ Section 5: Vector Capability Clusters Map */}
      <MultiplierMap />

      {/* ⬜ Section 6: Standard Delivery Roadmaps Track Lifecycle */}
      <GrowthRoadmapTrack />
    </>
  );
};

export default Explore;