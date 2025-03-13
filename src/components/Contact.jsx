import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: "" });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ show: false, success: false, message: "" });

    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Recipient",
          from_email: form.email,
          to_email: "htmlrohan@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setLoading(false);
          setStatus({
            show: true,
            success: true,
            message: "Message sent successfully! I'll get back to you soon.",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);
          setStatus({
            show: true,
            success: false,
            message: `Error: ${error.text || 'Something went wrong. Please try again.'}`,
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex flex-col-reverse xl:flex-row gap-8 overflow-hidden container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1.5] bg-black-100 p-6 sm:p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} mb-2 sm:mb-3 text-[16px] sm:text-[18px]`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-[36px] sm:text-[42px] mb-6 text-orange-500`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6 w-full'
        >
          <div className="grid grid-cols-1 gap-6">
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3 text-[16px] sm:text-[18px]'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px] sm:text-[18px]'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3 text-[16px] sm:text-[18px]'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px] sm:text-[18px]'
                required
              />
            </label>
          </div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-[16px] sm:text-[18px]'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px] sm:text-[18px] min-h-[180px] resize-none'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-4 px-8 rounded-lg outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary/80 transition-colors text-[16px] sm:text-[18px]'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {status.show && (
            <div
              className={`${
                status.success ? "bg-green-800" : "bg-red-800"
              } text-white p-5 rounded-lg mt-6 text-[16px] sm:text-[18px]`}
            >
              {status.message}
            </div>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-1 w-full h-[400px] sm:h-[500px] xl:h-[600px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
