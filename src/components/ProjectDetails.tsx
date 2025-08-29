import { useParams, Link } from 'react-router-dom';
import { projects } from './Work';
import { Header } from './Header';
import { Contact } from './Contact';
import Footer from './Footer';
import { ArrowDown, ArrowUpRight, Github, Globe, Mail, Linkedin, Twitter, ChevronLeft, ChevronRight, Home } from 'lucide-react';


export type Project = {
  id: string;
  title: string;
  description?: string;
  image: string;
  tags: string[];
  liveSite?: string; 
  github?: string;
};

export default function ProjectDetails() {
  const { id } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  
  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700">
        Project not found.
      </div>
    );
    const isLast = projectIndex === projects.length - 1;
    const nextProject = !isLast ? projects[projectIndex + 1] : null;

  return (
    <>
    <Header currentPage="projects" setCurrentPage={() => {}} />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <main className="px-6 py-12 md:py-20 mt-24">
            <div className="flex justify-center mb-6">
            <div className="w-3/4 flex justify-between items-center">
                <p className="text-2xl md:text-2xl lg:text-4xl font-medium text-foreground leading-relaxed mb-2">  
                <span className="doodle-highlight">{project.title}</span>
                </p>

                <div className="flex flex-wrap gap-3">
                {project.github && (
                    <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-white to-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                    Live Code
                    </a>
                )}
                </div>
            </div>
            </div>


        <div className="mb-16 flex justify-center">
            <div className="overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-2 rounded-xl w-3/4">
                <div className="overflow-hidden bg-white ">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[500px] md:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                </div>
            </div>
            </div>



<div className="flex justify-center mb-16">
  <div className="w-3/4 grid md:grid-cols-2 gap-12">
    
    <div className="space-y-6 mt-6">
      <div>
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          Project Overview 
        </h2>
        <div className="bg-white ">
          <div className="flex flex-wrap gap-3">
            {project.tags.length > 0 ? (
              project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-8 py-3 bg-gradient-to-r from-white to-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No tech stack listed.</span>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        </h2>
        <div className="bg-white p-8 ">
          <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {project.description || 'No description available.'}
          </p>
        </div>
      </div>
      <div className="bg-white ml-8">
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" px-8 py-3 bg-gradient-to-r from-white to-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                GitHub Repository
              </a>
            ) }
          </div>
        </div>
       
    </div>
    <div className="flex justify-start mt-16">
      <div className="w-full flex justify-between items-center">
        <Link
          to={projectIndex > 0 ? `/projects/${projects[projectIndex - 1].id}` : "/"}
          className="px-6 py-3 bg-gradient-to-r from-slate-200 to-slate-300 text-gray-800 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300"
        >
          <ChevronLeft size={18} /> 
          {projectIndex > 0 ? `Back to ${projects[projectIndex - 1].title}` : "Back to Home"}
        </Link>
      </div>
    </div>
<div className="flex justify-end w-full mt-12">
  

  {!isLast ? (
    <Link
      to={`/projects/${nextProject?.id}`}
      className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full flex items-center gap-2 transition-all duration-300 
               text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
  >
      Next Project: {nextProject?.title}
      <ChevronRight size={18} />
    </Link>
  ) : (
    <Link
      to="/"
      className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full flex items-center gap-2 transition-all duration-300 
               text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
  >
      <Home size={18} /> Back to Home
    </Link>
  )}
</div>
  
    

  </div>
</div>


        

       
      </main>
        <Footer />
    </div>
        </>
  );
}