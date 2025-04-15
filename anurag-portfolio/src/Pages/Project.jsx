import React from 'react';

function Project() {

  const projects = [
    {
      title: "Email Builder Tool",
      description: "An intuitive email tool allowing users to create fully customized email templates with drag-and-drop functionality. Reduced email creation time by 30%.",
      tech: [
        "React.js", "Node.js", "MongoDB", "Express.js", "Redux", "Tailwind CSS"
      ],
      impage: "/placeholder.svg",
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
      impage: "/placeholder.svg",
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
      impage: "/placeholder.svg",
      links: {
        demo: "#",
        code: "#"
      }
    },
  ];

  return (
    <div className=" px-4 bg-stone-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto max-w-4xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={project.impage} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-amber-800 text-blue-800 text-sm px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
