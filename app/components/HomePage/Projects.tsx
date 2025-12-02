import React from 'react';
import { ArrowRight, Camera, Car, TrendingUp } from 'lucide-react';

// --- INSTRUCTIONS FOR YOUR LOCAL IMAGES ---
// 1. Ensure your images are in the correct folder (e.g., 'public' or 'assets').
// 2. If using Next.js and images are in 'public', you don't need to import them. 
//    Just set imageSrc: "/ss1.png" directly.
// 3. If using Vite/Create-React-App with imports, uncomment the lines below:

// import img1 from "@/public/ss1.png";
// import img2 from "@/public/ss2.png";
// import img3 from "@/public/ss3.png";

// --- TYPES ---
type ProjectCardProps = {
  title: string;
  subtitle: string;
  tags: string[];
  bgColor: string;
  deviceType: 'tablet' | 'mobile';
  imageSrc: string;
  icon: React.ReactNode; // Added an icon prop for the background logo
};

// --- COMPONENT ---
const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  subtitle, 
  tags, 
  bgColor, 
  deviceType, 
  imageSrc,
  icon
}) => {
  return (
    <>

    <div className={`${bgColor} group relative w-full h-[600px] md:h-[650px]  flex flex-col items-center pt-5 overflow-hidden transition-all duration-300 hover:brightness-105 cursor-pointer`}>
      
      {/* Background Faded Icon/Text Overlay (Optional stylistic touch based on the original design) */}
      {/* <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none opacity-10">
        <div className="transform scale-[5] text-white">
           {icon}
        </div>
      </div> */}

      {/* Text Content */}
      <div className="z-10 flex flex-col items-center text-center px-6 mb-12 relative">
        <h2 className="text-white text-4xl font-bold mb-4 tracking-wide drop-shadow-md">
          {title}
        </h2>
        <p className="text-white text-sm font-normal opacity-90 mb-2 max-w-xs leading-relaxed">
          {subtitle}
        </p>
        <div className="flex items-center space-x-3 text-white text-xs md:text-sm font-normal opacity-80 uppercase tracking-widest">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span>{tag}</span>
              {index < tags.length - 1 && <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Device Mockup Container */}
      <div 
        className={`
          relative shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-6
          ${deviceType === 'tablet' ? 'w-[85%] md:w-[75%] rounded-t-3xl' : 'w-[60%] md:w-[50%] rounded-[2.5rem]'}
          mt-auto -mb-10 md:-mb-20
        `}
      >
        {/* Screen Reflection/Gloss Effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent z-20 pointer-events-none rounded-t-3xl"></div>

        {/* Actual Image */}
        <img 
          src={imageSrc} 
          alt={title} 
          className={`
            w-full h-auto block object-cover  bg-gray-100
            ${deviceType === 'tablet' ? 'rounded-t-3xl' : 'rounded-[2.5rem]'}
          `}
          style={{ 
            boxShadow: '0px -20px 50px rgba(0,0,0,0.3)',
            minHeight: '600px' // Ensures specific height if image fails to load
          }} 
        />
      </div>
    </div>
    </>
  );
};

const PortfolioSection = () => {
  // Using placeholder images so you can see the preview.
  // Replace these strings with your 'img1', 'img2' variables.
  const projects: ProjectCardProps[] = [
    {
      title: "RIGI",
      subtitle: "Innovated Community Empowerment Website",
      tags: ["UX-UI", "Web", "Mobile"],
      bgColor: "bg-[#FB5457]", 
      deviceType: "tablet",
      imageSrc: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800", // <--- Replace with: img1
      icon: <Camera />
    },
    {
      title: "BMW",
      subtitle: "Optimized the effortless on-the-go lifestyle",
      tags: ["UX-UI", "Web", "Mobile"],
      bgColor: "bg-[#5857F9]", 
      deviceType: "mobile",
      imageSrc: "https://images.unsplash.com/photo-1648803336451-d882ce46e68c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D", // <--- Replace with: img2
      icon: <Car />
    },
    {
      title: "Nirmal Bang",
      subtitle: "Engineered Investment Experience",
      tags: ["UX-UI", "Mobile"],
      bgColor: "bg-[#9C34F0]", 
      deviceType: "mobile",
      imageSrc: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=400", // <--- Replace with: img3
      icon: <TrendingUp />
    }
  ];

  return (
<div className="w-full h-full">

    {/* 1. mx-auto: Centers this div horizontally within the parent.
       2. justify-start: Ensures content aligns to the start.
       3. px-7: Matches the padding of your grid below so lines align visually.
    */}
    <div className='flex w-full max-w-3xl mx-auto items-center justify-start px-2 mb-10'>
        <p className='font- text-start text-[42px] font-extrabold'>
            As global leaders in UX/UI, technology, and marketing solutions, we partner with clients to simplify, strengthen, and transform their businesses.
        </p>
    </div>

    {/* Your Grid Section */}
    <div className="w-full grid grid-cols-1 px-7 gap-2 lg:grid-cols-3 font-sans max-w-7xl mx-auto">
        {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
    </div>

</div>
  );
};

export default PortfolioSection;