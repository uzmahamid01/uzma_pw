import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Revolutionary analytics platform that uses machine learning to provide predictive insights for enterprise clients. Serves over 1M+ users and processes 100TB+ of data daily.',
      tech: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1531535807748-218331acbcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NTgzMjI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Comprehensive DevOps solution that automated deployment processes across multiple cloud providers, reducing deployment time by 90% and infrastructure costs by 40%.',
      tech: ['Kubernetes', 'Terraform', 'Docker', 'Azure', 'Jenkins'],
      image: 'https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc1NTgzMjI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Mobile-First E-commerce Platform',
      description: 'Next-generation e-commerce platform optimized for mobile commerce, featuring personalized recommendations and real-time inventory management.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1660578008487-087c3024dfe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2glMjBDRU98ZW58MXx8fHwxNzU1ODMyMjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-stone-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Innovative solutions that have transformed businesses and created significant value for users and stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-stone-800 mb-3">{project.title}</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-rose-50 text-rose-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-stone-600 hover:text-rose-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-stone-600 hover:text-rose-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-rose-400 text-white px-8 py-3 rounded-lg hover:bg-rose-500 transition-colors duration-200"
          >
            Let's Build Something Together
          </a>
        </div>
      </div>
    </section>
  );
}