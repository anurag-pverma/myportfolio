import React, { useState } from 'react';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

return (
  <nav className="bg-slate-950 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-24">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <span className="text-lime-800 font-bold text-6xl">A</span><span className='text-amber-800 font-bold text-5xl' >V.</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-orange-700 transition-all duration-300 ease-in-out">
          <a href="#home" className="group font-mono bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Home</a>
          <a href="#about" className="group font-mono bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">About</a>
          <a href="#skills" className="group font-mono bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Skills</a>
          <a href="#project" className="group font-mono bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Project</a>
          <a href="#contact" className="group font-mono bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Contact</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon when menu is closed */}
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              /* Icon when menu is open */
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu, show/hide based on menu state */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-orange-700 bg-slate-950">
        <a href="#home" className="group font-mono block px-3 py-2 bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Home</a>
          <a href="#about" className="group font-mono block px-3 py-2 bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">About</a>
          <a href="#skills" className="group font-mono block px-3 py-2 bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Skills</a>
          <a href="#project" className="group font-mono block px-3 py-2 bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Project</a>
          <a href="#contact" className="group font-mono block px-3 py-2 bg-left-bottom bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-sm">Contact</a>
        </div>
      </div>
    )}
  </nav>
);
};

export default Navbar;