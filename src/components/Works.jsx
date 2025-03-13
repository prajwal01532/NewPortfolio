import React, { useContext } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { ThemeContext } from '../context/ThemeContext';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div>
      <div className='bg-green-300 p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:translate-y-[-4px]'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] text-black ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-2'>
          <p className={`${styles.sectionSubText} ${
            theme === 'light' ? 'text-black' : 'text-white'
          } text-green-500 font-bold`}></p>
          <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent`}>MY PROJECTS</h2>
        </div>
        <div className='mt-20 flex flex-wrap gap-7 justify-center'>
          <p className={`mt-4 text-[24px] max-w-4xl leading-[42px] mx-auto text-justify font-medium ${theme === 'light' ? 'text-black' : 'text-secondary'}`}>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
