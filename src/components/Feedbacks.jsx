import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const blurFirstName = (fullName) => {
    const parts = fullName.split(' ');
    if (parts.length === 2) {
      return (
        <>
          <span className="blur-sm">{parts[0]}</span>{' '}
          <span>{parts[1]}</span>
        </>
      );
    }
    return fullName;
  };

  const blurredLastNames = ['neupane', 'rijal', 'budathoki'];
  const shouldBlur = blurredLastNames.includes(name.toLowerCase().split(' ')[1]);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-[#e0f2e9] p-10 rounded-3xl xs:w-[320px] w-full 
        hover:transform hover:-translate-y-2 transition-all duration-300 
        hover:shadow-[0_0_20px_rgba(224,242,233,0.7)] 
        hover:shadow-teal-200/50 relative
        after:absolute after:inset-0 after:z-[-1] after:rounded-3xl
        after:transition-all after:duration-300
        hover:after:blur-xl hover:after:bg-[#e0f2e9]/40'
    >
      <p className='text-black font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-black tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-black font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>{' '}
              {shouldBlur ? blurFirstName(name) : name}
            </p>
            <p className='mt-1 text-gray-600 text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className={`w-10 h-10 rounded-full object-cover ${shouldBlur ? 'blur-sm' : ''}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-orange-500`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
