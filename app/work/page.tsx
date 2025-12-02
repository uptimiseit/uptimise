import Link from 'next/link';
import { projectsData } from '@/app/data/projects'; // Import your data
import ProjectCard from '@/app/components/Work/ProjectCard';


const WorkSection = () => {
  return (
    <section className="bg-white py-20 container mx-auto">
      {/* Main Container to center content and provide padding */}
      <div className="max-w-5xl mx-auto  px-48    sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="mb-24">
          {/* Blue Label */}
          <span className="block text-blue-600 font-bold uppercase tracking-wider mb-4">
            WORK
          </span>

          {/* Breadcrumbs */}
          <nav className="flex items-center text-gray-500 text-sm mb-8 space-x-2">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span>•</span>
            <span className="text-gray-900">Work</span>
          </nav>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-5xl  font-extrabold text-black  max-w-4xl">
            We Have <br /> Designed Experiences <br/> For Over 260 Projects.
          </h2>
        </div>

        {/* The Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-24">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkSection;