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
        <p className="mt-4">Dynamic and results-driven Frontend Developer with over 2 years of experience in building responsive, user-friendly websites and web applications, specializing in email marketing, digital marketing, and marketing automation tools...</p>
      </div>
    </motion.section>
  );
}

export default About;
