import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="bg-gray-100 p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p>Pratapgarh, UP/ India</p>
        <p>Email: anurag.premaverma@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/anurag-verma-935bbb138</p>
      </div>
    </motion.section>
  );
}

export default Contact;
