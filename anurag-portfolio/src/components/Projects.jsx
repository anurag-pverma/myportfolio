import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="bg-white p-8"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">Project 1</h3>
          <p>Email Customization: Designed and developed an intuitive email builder tool allowing users to create fully customized email templates using a drag-and-drop feature to reduce the time by 30 % of volume...</p>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">Project 2</h3>
          <p>A web application built with React on the front end and Node.js, Express.js, and MongoDB on the back end...</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
