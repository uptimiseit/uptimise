import Image from "next/image";
import React from "react";

const ProjectsDelivered = () => {
  const topRow = ["Foodtech", "Fintech", "Healthtech", "Ai Bots"];
  const bottomRow = ["Traveltech", "ECom", "Realtech", "Edtech"];

  return (
    <section className="w-full  py-24 flex flex-col items-center font-sans overflow-hidden">
      {/* 1. Headline Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 tracking-tight">
          260+ Projects Delivered
        </h2>
        <p className="text-lg md:text-xl text-gray-800 font-medium">
          and counting more..
        </p>
      </div>

      {/* 2. Map Visualization Area */}
      <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] mb-10 flex items-center justify-center">
        <div>
       <div className="flex items-center justify-center">
  <Image src="/map.svg" alt="" height={800} width={800} />
</div>
          {/* <Image src="/map.png" alt="image" height={"600"} width={"800"} /> */}
        </div>

      
      </div>

      {/* 3. Industries Grid */}
      <div className="w-full max-w-5xl px-6">
        <div className="flex flex-col w-full">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-4 pt-4 text-center">
            {topRow.map((item, index) => (
              <span
                key={index}
                className="text-xl md:text-2xl font-bold text-black"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-200 mb-4"></div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {bottomRow.map((item, index) => (
              <span
                key={index}
                className="text-xl md:text-2xl italic font-sans font-bold text-black"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDelivered;
