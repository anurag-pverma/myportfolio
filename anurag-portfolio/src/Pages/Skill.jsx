import React from "react";

function Skill() {
const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Chakra UI", level: 80 },
    ],
  },
  {
    category: "State Management",
    skills: [
      { name: "Redux", level: 85 },
      { name: "Context API", level: 85 },
    ],
  },
  {
    category: "Backend Integration",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "UI/UX Design", level: 75 },
      { name: "Git & Version Control", level: 85 },
      { name: "Performance Optimization", level: 70 },
      { name: "Veeva Email Development", level: 90 },
    ],
  },
];

return (
  <div className="bg-stone-900 py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <div className="animation-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h2 className="text-3xl font-bold font-mono mb-8 flex items-center">
          <span className="text-emerald-300 mr-3">03.</span>
          <span className="text-amber-800">My Skills</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="space-y-6 animation-fadeIn" 
            style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <h3 className="text-xl font-bold font-mono mb-4 text-slate-400">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.skills.map((el, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-200 font-mono">{el.name}</span>
                    <span className="text-sm text-emerald-300 font-mono">
                      {el.level}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-stone-700 rounded">
                    <div
                      className="h-full bg-amber-800 rounded transition-all duration-1000 ease-out"
                      style={{ width: `${el.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div 
        className="mt-16 animation-fadeIn" 
        style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
      >
        <h3 className="text-xl font-bold font-mono mb-6 text-slate-400">
          Technologies I Use
        </h3>
        <div className="flex flex-wrap">
          {[
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Chakra UI",
            "Redux",
            "Context API",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git",
            "Jira",
            "Responsive Design",
            "Performance Optimization",
            "SEO",
            "Veeva Email",
            "Email Marketing",
          ].map((tech, index) => (
            <span
              key={index}
              className="text-slate-200 px-4 py-2 m-2 text-md bg-stone-800 border border-amber-800 rounded-lg font-mono hover:bg-amber-800 hover:text-slate-200 transition duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default Skill;