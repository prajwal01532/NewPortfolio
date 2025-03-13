import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className={`${styles.cardStyle} sm:w-[360px] w-full`}>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-t-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                        bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300
                        hover:shadow-lg hover:shadow-purple-500/30 hover:scale-110'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className={`${styles.cardInnerStyle} rounded-t-none py-5 px-6 min-h-[230px]`}>
          <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-bold text-[24px]`}>{name}</h3>
          <p className={`mt-2 ${isDarkMode ? 'text-secondary' : 'text-gray-600'} text-[14px]`}>{description}</p>
        
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`px-2 py-1 text-xs rounded-full ${
                  isDarkMode 
                    ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-700/50' 
                    : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                } backdrop-blur-sm transition-all duration-300`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Portfolio</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. These projects reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-600/5 filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-600/5 filter blur-3xl"></div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
