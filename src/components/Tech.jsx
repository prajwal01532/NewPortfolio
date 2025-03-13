import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useTheme } from '../context/ThemeContext';

const Tech = () => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <h2 className={`text-center text-5xl font-bold mb-20 tracking-wider ${isDarkMode ? 'text-white' : 'text-blue-500'} ${isDarkMode ? '' : 'bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text'}`}>
        <strong>SKILLS</strong>
      </h2>
      <div className='flex flex-row flex-wrap justify-center items-start gap-10 max-w-5xl mx-auto px-4'>
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className='w-32 cursor-pointer group'
          >
            <div className='bg-[#151030] rounded-lg p-4 h-32 flex items-center justify-center relative 
                          shadow-[0_0_15px_rgba(0,255,0,0.3)]
                          before:absolute before:inset-0 before:rounded-lg before:border-2 
                          before:border-[#00ff00] before:animate-neon-blink
                          after:absolute after:inset-0 after:rounded-lg after:border-2 
                          after:border-[#00ff00] after:animate-neon-pulse
                          hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-shadow duration-300'>
              <img 
                src={technology.icon}
                alt={technology.name}
                className='w-20 h-20 object-contain'
              />
            </div>
            <p className='text-orange-500 text-center mt-3 font-medium text-sm group-hover:text-orange-600 transition-colors duration-300 hover:shadow-[0_0_10px rgba(255,165,0,0.5)]'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
