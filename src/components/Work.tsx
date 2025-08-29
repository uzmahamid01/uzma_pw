import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import {InlineDoodle } from './DoodleElements';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  liveSite?: string;
}

export const projects: Project[] = [
  {
    id: 'ichild',
    title: 'iChild',
    category: 'AI Software',
    // description: 'iChild HealthWise: Building a RAG-Powered Healthcare Platform',
    description: 'iChild HealthWise is an AI-driven healthcare platform designed to provide personalized, context-aware health insights for pregnant women and families. Leveraging Retrieval-Augmented Generation (RAG) through LangChain and the OliviaHealth knowledge base, the system interprets natural language queries to deliver accurate, up-to-date responses. The backend, powered by Flask and PostgreSQL, handles NLP, embedding generation, and conversation context, while the frontend, built in React and TypeScript, provides a dynamic and responsive interface. Key features include follow-up question handling, conversational history, and upcoming real-time streaming for continuous interaction. The platform combines advanced AI, robust backend architecture, and user-friendly design to make healthcare information accessible, personalized, and actionable for users worldwide.',
    image: 'https://uzmah.netlify.app/p2_files/telehealth.png',
  url: '/projects/ichild',
    tags: ["TypeScript", "React", "React Query", "TailwindCSS", "Python/Flask", "PostgreSQL", "Sentence-Transformers", "LangChain for RAG", "AWS"],
    featured: true,
    github: 'https://github.com/oliviahealth/ichild',
    // liveSite: 'https://uzmah.netlify.app/projects/ichild'
  },
  {
    id: 'cleo',
    title: 'TeamUp-Cleo',
    category: 'Software',
    description: 'Cleo: Smart Course Schedule Builder is a platform that helps college students optimize their course selections and degree planning. Built with Ruby on Rails and PostgreSQL, Cleo integrates a recommendation algorithm that considers degree requirements, prerequisites, target graduation dates, and individual student preferences to generate personalized course schedules. The platform leverages Python scripts for maintaining up-to-date course catalogs, provides a responsive frontend using HTML, CSS, and JavaScript, and ensures secure authentication via Google OAuth. With modular architecture, CI/CD via GitHub Actions, and deployment through Docker and Heroku, Cleo streamlines academic planning, automates routine scheduling tasks, and supports both students and advisors in making informed academic decisions.',
    image: 'https://uzmah.netlify.app/p2_files/51.png',
    url: '/projects/cleo',
    github: 'https://github.com/FA24-CSCE431-software-engineering/project-turnover-asp-500',
    tags: ["Ruby on Rails", "Tailwind CSS", "HTML", "JavaScript", "Docker", "Heroku", "PostgreSQL", "Python Scrapping", "Google OAuth", "CI/CD"],
    featured: true,
    liveSite: 'https://teamup.org/apps/cleo/'
  },
  // {
  //   id: 'findEarth',
  //   title: 'findEarth',
  //   category: 'Software',
  //   // description: 'Personalized Climate Change News at Your Fingertips',
  //   description: '',
  //   image: 'https://uzmah.netlify.app/p2_files/59.png',
  // url: '/projects/findEarth',
  //   tags: [],
  //   featured: false
  // }, 
  {
    id: 'CreatorVerse',
    title: 'CreatorVerse',
    category: 'Software',
    // description: 'Connecting You with Top Creators Across All Fields',
    description: 'CreatorVerse is a full-stack web application that connects users with top creators across various fields, providing a centralized platform for discovery, engagement, and creative collaboration. Built with React on the frontend and Node.js on the backend, the platform enables users to search for creators, explore detailed profiles, interact with content via likes, comments, and shares, and follow creators to receive updates. The system integrates a robust backend with database support to manage profiles, content, and engagement data, ensuring a responsive, user-friendly interface. CreatorVerse fosters a vibrant creative community by combining seamless full-stack functionality with features that support discovery, interaction, and content management, making it easy for creators and audiences to connect meaningfully.',
    image: 'https://uzmah.netlify.app/p9_files/creator.png',
  url: '/projects/CreatorVerse',
    tags: ["React", "Node.js", "RESTful APIs", "PostgreSQL", "Vercel", ],
    featured: true,
    github: 'https://github.com/uzmahamid01/CreatorVerse',
    // liveSite: ''
  },
  {
    id: 'c4',
    title: 'Connect-Four',
    category: 'Game',
    // description: 'A JavaFX Implementation of the Classic Strategy Game',
    description: 'Connect-Four is a JavaFX-based implementation of the classic strategy game, designed to demonstrate object-oriented design and provide an intuitive graphical user interface. The application features a dynamically generated game board, single-player mode with a basic random AI, and multiplayer functionality. Core components, including ShadowData for board state management, AI for move generation, GameBoard for UI rendering, and Log for file I/O, were implemented to ensure modularity and maintainability. The project integrates features such as error handling for invalid moves, game reset, and save/load functionality, all built on a robust 2D array-based data structure. Connect-Four showcases Java programming principles, GUI design, and modular architecture to deliver an engaging and extendable gaming experience.',
    image: 'https://uzmah.netlify.app/p2_files/07.gif',
  url: '/projects/c4',
    tags: ["Java", "JavaFX", "OOP", "MVC"],
    featured: true,
    github: 'https://github.com/uzmahamid01/Connect-Four',
  },
  {
    id: 'revs',
    title: 'Revs',
    category: 'Software',
    description: 'Revs Restaurant Web Application is a full-stack web application designed to modernize point-of-sale systems and enhance the dining experience at Rev’s Grill. The platform leverages Django for backend operations and React for a dynamic frontend interface, implementing OAuth for secure login. It integrates a responsive, human-centered design for intuitive order placement, interactive menus, and streamlined checkout, while providing restaurant managers with detailed reports on sales, inventory, and customer preferences. By combining a robust backend capable of handling large datasets with an engaging, user-friendly frontend, Revs simplifies operational workflows, reduces errors, and improves customer satisfaction. The system also supports Agile development practices, enabling iterative improvements and feature enhancements to continuously refine the user experience.',
    image: 'https://uzmah.netlify.app/p2_files/04.gif',
  url: '/projects/revs',
    tags: ["Django", "Jinja Templates", "PostgreSQL", "OAuth", "Django ORM", "Heroku"],
    featured: true,
    github: 'https://github.com/csce-315-331-2024a/project-3-full-stack-agile-web-project-3-907-30',
    // liveSite: 'https://revs.me'
  },
  {
    id: 'yemberzal',
    title: 'Yemberzal',
    category: 'Software',
    // description: 'Reviving Kashmiri Fashion for the World',
    description: 'Yemberzal is a digital marketplace and search platform designed to bring Kashmiri clothing and cultural heritage to a global audience. The platform provides structured product listings with images, descriptions, categories, and links to authentic artisan brands, allowing users to explore and purchase traditional garments like Pherans and Pashmina shawls with ease. Built with a modern web stack, it incorporates a responsive frontend, dynamic search functionality, and backend systems to manage products, categories, and users. Sustainability and ethical sourcing are central, prioritizing eco-friendly artisan production methods. Yemberzal bridges artisans and international consumers, promoting both cultural preservation and the global accessibility of Kashmiri fashion.',
    image: 'https://uzmah.netlify.app/p2_files/50.png',
  url: '/projects/yemberzal',
    tags: ["React", "Django", "PostreSQL", "Supabase", "Web Scrapping", "Heroku"],
    featured: true,
    github: 'https://github.com/uzmahamid01/yemberzal',
    liveSite: 'https://yemberzal.me'
  },
  // {
  //   id: 'eve',
  //   title: 'eVe AI-Support',
  //   category: 'AI',
  //   // description: 'Your AI-Powered Emotional Support Companion',
  //   description: '',
  //   image: 'https://uzmah.netlify.app/p2_files/eve.png',
  // url: '/projects/eve',
  //   tags: [],
  //   featured: false
  // },
    {
    id: 'stan',
    title: 'Accuracy on the Negative Line',
    category: 'ML Research',
    description: 'Predictive Performance Under Dataset Shift investigates the challenges of deploying machine learning models on real-world, out-of-distribution (OOD) data. The research highlights the “Accuracy on the Negative Line” (AOTNL) phenomenon, where models with high in-distribution (ID) accuracy fail to generalize to unseen data. To address this, the project introduces a dual-evaluation framework that measures performance across both ID and OOD datasets. Using advanced neural networks, domain adaptation, regularization, and model calibration techniques, the study quantifies discrepancies between ID and OOD performance and proposes benchmarks for more robust model generalization. This work provides actionable insights for developing machine learning models that maintain reliability in diverse, real-world conditions.',
    image: 'https://uzmah.netlify.app/p2_files/poster.png',
  url: '/projects/stan',
    tags: ["Python", "Keras", "Sklearn", "Matplotlib", "Jupyter", "Google Colab", "Seaborn"],
    featured: true,
    github: 'https://github.com/uzmahamid01/stan',
    liveSite: 'https://uzmah.netlify.app/projects/stan'

  },
   {
    id: 'chip',
    title: 'Chip Visualization',
    category: 'Computer Vision/ML',
    description: 'Chip Visualization is a Python-based system for accurate and efficient image similarity identification, leveraging deep neural networks such as VGG, ResNet50, and AlexNet. The platform extracts high-level image features to compute visual and semantic similarities using Euclidean distance matrices and cosine similarity metrics. It identifies the top 7 matching images for any input and supports large-scale image datasets with reduced computational overhead. The system incorporates an encoder and classifier for clustering known manufacturers in an N-dimensional space, enabling robust similarity detection and retrieval. Integrated with libraries like NumPy, SciPy, PIL, and Matplotlib, Chip Visualization provides scalable image processing, advanced feature extraction, and intuitive visualization for applications ranging from visual search to product recognition.',
    image: 'https://uzmah.netlify.app/p2_files/05.png',
  url: '/projects/chip',
    tags: ["Python", "OpenCV", "VGG", "ResNet50", "AlexNet", "NumPy", "SciPy", "PIL", "Matplotlib", "Matplotlib", "Euclidean distance matrix", "Cosine similarity"],
    featured: true,
    github: 'https://github.com/uzmahamid01/Chip-Visualization',
  },
   {
    id: 'img',
    title: 'Image Processing and Annotation Pipeline',
    category: 'Computer Vision Research',
    description: 'Image Processing and Annotation Pipeline is a Python-based fine-grained image annotation tool designed to enhance computer vision workflows and accessibility. Integrated with Label Studio, the tool enables precise pixel-wise and polygon-based annotations for tasks like semantic segmentation and object detection. Leveraging advanced contour detection, polygon approximation, and image manipulation techniques such as scaling and rotation, the system resolves file format incompatibilities and improves annotation precision. Additionally, the tool is designed to be accessible for visually impaired users, ensuring broader usability while improving dataset quality for machine learning models in computer vision applications.',
    image: 'https://uzmah.netlify.app/p2_files/02.png',
  url: '/projects/img',
    tags: ["Python", "Label Studio integration", "Contour detection", "polygon approximation"],
    featured: true,
    github: "https://github.com/uzmahamid01/Image-Processing-and-Annotation-Pipeline"
  }, 
  {
    id: 'deep-learning-grasping',
    title: 'Deep Learning Based Object Grasping for Robots',
    category: 'Computer Vision/Robotics Research',
    description: 'Deep Learning Based Object Grasping for Robots is a research-focused project that enhances robotic manipulation through advanced image segmentation and Graph Neural Networks (GNNs). The system models relationships between object parts and their spatial context, enabling robots to accurately segment and recognize table-top objects in cluttered environments. Using datasets like OCID and OSD for training and testing, the model improves grasping success rates by 30% and reduces false positives by 25%, demonstrating robustness across diverse scenarios. By integrating GNNs with deep learning-based segmentation, the project provides a scalable and reliable framework for precise robotic object grasping, applicable in dynamic real-world settings.',
    image: 'https://uzmah.netlify.app/p2_files/03.png',
  url: '/projects/deep-learning-grasping',
    tags: ["Python", "PyTorch", "Graph Neural Networks (GNNs)", "deep learning-based object segmentation models", "OCID (Object Clutter Indoor Dataset)", "OSD (Object Segmentation Dataset)"],
    featured: true,
  }
];

function FeaturedProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden bg-gray-900 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className={`absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <ArrowUpRight size={18} className="text-white" />
        </div>

      </div>

      <div className="p-6 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.category}</span>
        </div>
      </div>
    </a>
  );
}

function RegularProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className={`absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <ArrowUpRight size={14} className="text-gray-700" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.category}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function Work() {
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="py-24 bg-gray-50/50 relative doodle-container">
      
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-lg md:text-xl font-medium text-foreground mb-8">
            [WORK]
          </h2>
          <div className="max-w-2xl">
            <p className="text-2xl md:text-2xl lg:text-4xl font-medium text-foreground leading-relaxed">
              creating innovative <span className="doodle-highlight">solutions</span> at the intersection of <span className="doodle-highlight">human creativity</span> and
              <br/><span className="doodle-highlight"><strong>technology</strong></span>.
            </p>
          </div>
        </div>

        {/* <div className="max-w-xl">
            <p className="text-2xl md:text-2xl lg:text-4xl font-medium text-foreground leading-relaxed mb-2">  
              <span className="doodle-highlight"> featured projects</span>
            </p>
        </div> */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredProjects
            .filter(project => project.featured)
            .map((project) => (
              <div key={project.id}>
                <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>

         {/* <div className="max-w-xl">
            <p className="text-2xl md:text-2xl lg:text-4xl font-medium text-foreground leading-relaxed mb-2">  
              <span className="doodle-highlight"> all projects</span>
            </p>
        </div>
         <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) =>
            !project.featured ? (
              <div key={project.id}>
                <RegularProjectCard project={project} />
              </div>
            ) : null
          )}
        </div> */}
      </div>
    </section>
  );
}