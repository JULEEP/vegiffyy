import React, { useState } from 'react';
import vegiffyLogo from '../images/veggifylogo.png'; // Adjust path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.veggify.veegify&pli=1', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 fixed w-full z-50 h-20 shadow-lg">
      {/* Custom style for the glowing animation */}
      <style>
        {`
          @keyframes softGlow {
            0% {
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
            }
          }
          .glow-button {
            animation: softGlow 2s infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md">
                <img 
                  src={vegiffyLogo} 
                  alt="Vegiffy Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white drop-shadow-md">
                VEGIFFYY
              </span>
            </div>
          </div>

          {/* Center - Navigation Items */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-yellow-200 font-semibold transition-all duration-200 text-lg relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side - Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={openPlayStore}
              className="hidden sm:flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 glow-button"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.5l2.5 2.5-3.5 3.5-2.5-2.5 3.5-3.5zM15.5 11.5l-3.5 3.5-2.5-2.5 3.5-3.5 2.5 2.5z"/>
                <path d="M21.201 11.3l-5.5-3.2-2.2 2.2 2.5 2.5 5.2-1.5a1 1 0 0 0 0-1.8z"/>
                <path d="M13.5 8.5l2.2-2.2 5.5 3.2-5.2 1.5-2.5-2.5z"/>
              </svg>
              Install Now
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-xl text-white hover:bg-green-700 focus:outline-none transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-500 mt-2">
            <div className="px-2 pt-4 pb-4 space-y-3 bg-gradient-to-br from-green-700 to-green-800 rounded-xl mt-2 shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:bg-green-600 block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-3">
                <button 
                  onClick={openPlayStore}
                  className="w-full flex justify-center items-center gap-2 bg-white text-green-600 font-bold py-3 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 glow-button"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.5l2.5 2.5-3.5 3.5-2.5-2.5 3.5-3.5zM15.5 11.5l-3.5 3.5-2.5-2.5 3.5-3.5 2.5 2.5z"/>
                    <path d="M21.201 11.3l-5.5-3.2-2.2 2.2 2.5 2.5 5.2-1.5a1 1 0 0 0 0-1.8z"/>
                    <path d="M13.5 8.5l2.2-2.2 5.5 3.2-5.2 1.5-2.5-2.5z"/>
                  </svg>
                  Install Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;