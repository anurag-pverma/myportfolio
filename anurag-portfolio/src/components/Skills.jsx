import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className="bg-gray-100 p-8"
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Skills & Proficiencies</h2>
        <ul className="mt-4 list-disc list-inside">
          <li>HTML, CSS, and JavaScript</li>
          <li>Data structure algorithms</li>
          <li>React.js, Node.js, Express.js, MongoDB</li>
          <li>Chakra UI, Tailwind CSS, Git, Jira</li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Skills;
