import Image from 'next/image';
import type { Project } from '@/app/data/projects'; // Adjust path if not using TS

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col group  cursor-pointer">
      {/* Project Company Title (e.g., RIGI, BMW) */}
      <h3 className="text-xl font-bold italic  text-black mb-6">
        {project.company}
      </h3>

      {/* Image Container */}
      {/* We add rounded corners, overflow hidden, and a subtle hover effect */}
      <div className="w-full rounded-2xl overflow-hidden bg-gray-100 transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src={project.imageUrl}
          alt={project.altText}
          // Using standard width/height for static images. 
          // Ensure your actual images have good resolution.
          width={800}
          height={900}
          className="w-full h-[500px] object-cover"
          priority={false} // Set true only for above-the-fold images
        />
      </div>
    </div>
  );
};

export default ProjectCard;