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
    <div>
      <div className="py-20 px-4 bg-stone-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-heading text-white">
            <span className="font-mono mr-2">0.3</span>
            My Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((el, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-200">{el.name}</span>
                        <span className="text-sm text-slate-200">
                          {el.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="w-full h-2 bg-stone-700 rounded">
                        <div
                          className="h-full bg-lime-800 rounded"
                          style={{ width: `${el.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-slate-400">
              Technologies I use
            </h3>
            <div className="flex flex-wrap">
              {[
                "React.js",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Chakara UI",
                "Redux",
                "Context API",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git",
                "Jira",
                "Responsive Design",
                "Performance Optimisation",
                "SEO",
                "Veeva Email",
                "Email Marketing",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="text-slate-100 font px-4 py-2 mx-2 my-2 text-md bg-lime-800 rounded-lg font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
