import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="bg-gray-800 p-4 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anurag Verma</h1>
        <nav>
          <a href="#about" className="mx-2">About</a>
          <a href="#skills" className="mx-2">Skills</a>
          <a href="#projects" className="mx-2">Projects</a>
          <a href="#contact" className="mx-2">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
