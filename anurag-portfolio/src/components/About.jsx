import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="bg-white p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4"> and
          
          this is about page only
          .</p>
      </div>
    </motion.section>
  );
}

export default About;
