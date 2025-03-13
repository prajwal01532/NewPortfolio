import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ServiceCard = ({ index, title, icon }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full p-[1px] rounded-[20px] shadow-card 
          transition-all duration-300 
          bg-gradient-to-b from-indigo-500/30 to-purple-600/30
          hover:shadow-lg hover:shadow-indigo-500/20
          relative'
      >
        <div
          className={`${isDarkMode ? 'bg-tertiary/30' : 'bg-white/80'} rounded-[20px] py-5 px-12 min-h-[280px] 
                    flex justify-evenly items-center flex-col backdrop-blur-sm
                    transition-all duration-300 hover:translate-y-[-5px]`}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-purple-500/20
                        hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            <img
              src={icon}
              alt={title}
              className="w-10 h-10 object-contain filter drop-shadow-lg"
            />
          </div>

          <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-[20px] font-bold text-center`}>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent`}>INTRODUCTION</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[24px] max-w-4xl leading-[42px] mx-auto text-justify font-medium'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 rounded-full bg-indigo-600/5 filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/5 filter blur-3xl"></div>
    </>
  );
};

export default SectionWrapper(About, "about");
