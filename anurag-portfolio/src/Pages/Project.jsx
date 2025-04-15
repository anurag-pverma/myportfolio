import React from 'react';

function Project() {
const projects = [
  {
    title: "Email Builder Tool",
    description: "An intuitive email tool allowing users to create fully customized email templates with drag-and-drop functionality. Reduced email creation time by 30%.",
    tech: [
      "React.js", "Node.js", "MongoDB", "Express.js", "Redux", "Tailwind CSS"
    ],
    image: "/placeholder.svg",
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    title: "Marketing Automation Platform",
    description: "A complete platform for email marketing with drag-and-drop functionality. Reduced email creation time by 30%.",
    tech: [
      "React.js", "Node.js", "MongoDB", "Express.js", "Redux", "Tailwind CSS"
    ],
    image: "/placeholder.svg",
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    title: "Image Upload System",
    description: "A web platform for uploading, previewing, and managing images with optimized cloud storage.",
    tech: [
      "React.js", "Node.js", "MongoDB", "Express.js", "Redux", "Tailwind CSS"
    ],
    image: "/placeholder.svg",
    links: {
      demo: "#",
      code: "#"
    }
  },
];

return (
  <div className="bg-stone-900 py-20 px-4 min-h-screen">
    <div className="container mx-auto max-w-4xl">
      <div className="animation-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h2 className="text-3xl font-bold font-mono mb-8 flex items-center justify-center md:justify-start">
          <span className="text-emerald-300 mr-3">02.</span>
          <span className="text-amber-800">My Projects</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-stone-800 rounded-lg overflow-hidden border border-stone-700 hover:border-amber-800 transition-all duration-300 animation-fadeIn"
            style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold font-mono mb-3 text-slate-200">{project.title}</h3>
              <p className="text-slate-400 font-mono mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-stone-900 text-emerald-300 text-xs px-2 py-1 rounded font-mono">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between">
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-amber-800 hover:bg-amber-700 text-slate-200 font-bold py-2 px-4 rounded font-mono text-sm transition duration-300"
                >
                  Live Demo
                </a>
                <a 
                  href={project.links.code} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-transparent hover:bg-amber-700 text-amber-700 hover:text-slate-200 font-semibold py-2 px-4 border border-amber-700 hover:border-transparent rounded font-mono text-sm transition duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div 
        className="mt-12 text-center animation-fadeIn" 
        style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
      >
        <a 
          href="#" 
          className="inline-block bg-transparent hover:bg-amber-700 text-amber-700 hover:text-slate-200 font-semibold py-3 px-6 border border-amber-700 hover:border-transparent rounded font-mono transition duration-300"
        >
          View More Projects
        </a>
      </div>
    </div>
  </div>
);
}

export default Project;