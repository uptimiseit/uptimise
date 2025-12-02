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
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.4360237766!2d75.625744603843!3d26.88542139078831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1763712670386!5m2!1sen!2sin"
            width="800"
            height="450"
            style={{ border: 10 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          /> */}

          <Image src="/map.png" alt="image" height={"600"} width={"800"} />
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
