

// "use client"; // Required for useState

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { CATEGORY_DATA, Article } from './data'; // Assuming you saved data separately

// // --- 1. Sub-Component: The Article Card Design ---
// // This replicates the look of the blog posts in your screenshot
// const ArticleCard = ({ article, isFeatured = false }: { article: Article; isFeatured?: boolean }) => {
//   return (
//     <div className={`flex flex-col ${isFeatured ? 'md:flex-row gap-8 mb-12' : 'md:flex-row gap-6 mb-8 items-center'}`}>
//       {/* Image Section */}
//       <div className={`relative overflow-hidden rounded-lg ${isFeatured ? 'w-full md:w-1/2 aspect-video' : 'w-full md:w-1/4 aspect-4/3'}`}>
//         {/* Replace src with your real images. Using gray div for demo. */}
//         <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
//            {/* <Image src={article.imageUrl} alt={article.title} fill className="object-cover" /> */}
//            Image Placeholder
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className={`flex flex-col justify-center ${isFeatured ? 'w-full md:w-1/2' : 'w-full md:w-3/4'}`}>
//         <span className="text-gray-400 text-sm mb-2">{article.category}</span>
//         <h3 className={`font-bold text-gray-900 mb-3 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
//           {article.title}
//         </h3>
//         {isFeatured && (
//           <p className="text-gray-600 mb-4 leading-relaxed">
//             {article.description}
//           </p>
//         )}
//         <div className="text-gray-400 text-xs mt-auto">
//           {article.date} • {article.readTime}
//         </div>
//       </div>
//     </div>
//   );
// };



// const DesignPsychologyComponent = () => (
//   <div>
//     {CATEGORY_DATA['Design Psychology']?.map((item, index) => (
//       <ArticleCard key={item.id} article={item} isFeatured={index === 0} />
//     )) || <p>No articles found.</p>}
//   </div>
// );

// const TechnologyComponent = () => (
//   <div className="p-10 bg-gray-50 rounded text-center">
//     <h2 className="text-2xl font-bold">Technology Section</h2>
//     <p>This component has a different layout!</p>
//   </div>
// );

// // --- 3. Main Page Component ---
// const BlogPage = () => {
//   // State to track which tab is active
//   const [activeTab, setActiveTab] = useState<string>("General");

//   const tabs = [
//     "Home",
//     "General",
//     "Design Psychology",
//     "Technology",
//     "Neuromarketing",
//     "Resources",
//     "Case Studies"
//   ];

//   // Function to determine which component to render
//   const renderContent = () => {
//     switch (activeTab) {
//       case "General":
//         return <GeneralComponent />;
//       case "Design Psychology":
//         return <DesignPsychologyComponent />;
//       case "Technology":
//         return <TechnologyComponent />; // Example of a unique layout
//       default:
//         return (
//           <div className="py-20 text-center text-gray-500">
//             Content for <strong>{activeTab}</strong> coming soon.
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10 font-sans">
//       {/* --- Navigation Tabs --- */}
//       <div className="flex flex-wrap gap-3 mb-12 justify-center border-b border-gray-100 pb-6">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`
//               px-6 py-1.5 rounded-full border transition-all duration-200 text-xs font-medium
//               ${activeTab === tab 
//                 ? ' bg-white shadow-sm hover:text-purple-500 hover:border-purple-500' // Active Style
//                 : 'border-gray-200 text-gray-500 hover:border-gray-400 bg-white' // Inactive Style
//               }
//             `}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- Dynamic Content Area --- */}
//       <div className="animate-fade-in-up">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;

"use client";

import React, { useState } from 'react';
import { CATEGORY_DATA } from './data';
import TechnologyComponent from '../components/Knowledge/TechnologyComponent';
import GeneralComponent from '../components/Knowledge/GeneralComponent';
import DesignPsychologyComponent from '../components/Knowledge/DesignPsychologyComponent';
import CategorySection from '../components/Knowledge/CategorySection.tsx';
import ResourcesComponent from '../components/Knowledge/Resources';
import CaseStudies from '../components/Knowledge/CaseStudies';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState("General");
  
  const tabs = ["Home", "General", "Design Psychology", "Technology", "Neuromarketing", "Resources", "Case Studies"];

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        // WE CALL THE COMPONENT WITH PROPS HERE
        return <GeneralComponent articles={CATEGORY_DATA['General']} />;
        
      case "Design Psychology":
        // WE REUSE THE SAME COMPONENT, JUST DIFFERENT DATA
        return <DesignPsychologyComponent articles={CATEGORY_DATA['Design Psychology']} />;
        
      case "Technology":
        // This one has a unique layout, so we use a different component
        return <TechnologyComponent  articles={CATEGORY_DATA['Technology']}/>;

        case "Resources":
        // This one has a unique layout, so we use a different component
        return <ResourcesComponent  articles={CATEGORY_DATA['Resources']}/>;
        
          case "Case Studies":
        // This one has a unique layout, so we use a different component
        return <CaseStudies  articles={CATEGORY_DATA['Case Studies']}/>;
        
      default:
        // Fallback for tabs defined in the list but not in CATEGORY_DATA
        return <CategorySection articles={CATEGORY_DATA[activeTab] || []} />;
    }
  };

  return (
    <div className='flex items-center justify-center'>
   <div className="max-w-4xl mx-auto px-5 py-10 font-sans">
      {/* Tab Buttons (same as before) */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-1.5 rounded-full border transition-all text-xs cursor-pointer font-medium ${
              activeTab === tab ? ' text-neutral-600' : 'bg-white text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render the active content */}
      {renderContent()}
    </div>

    </div>
 
  );
};

export default BlogPage;