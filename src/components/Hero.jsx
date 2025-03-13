import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { styles } from "../styles";
import { useTheme } from "../context/ThemeContext";

const ParticleEffect = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = isDarkMode 
          ? `rgba(${Math.floor(Math.random() * 50) + 100}, ${Math.floor(Math.random() * 50) + 100}, ${Math.floor(Math.random() * 100) + 155}, ${Math.random() * 0.5 + 0.1})`
          : `rgba(${Math.floor(Math.random() * 100) + 50}, ${Math.floor(Math.random() * 50) + 50}, ${Math.floor(Math.random() * 100) + 155}, ${Math.random() * 0.3 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    const init = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth * 0.05, 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    init();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles with lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = isDarkMode 
              ? `rgba(120, 120, 255, ${0.1 * (1 - distance/100)})`
              : `rgba(80, 80, 180, ${0.05 * (1 - distance/100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay to ensure smooth animation after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-primary' : 'bg-gray-50'} transition-colors duration-500`}></div>
        <div className={`absolute bottom-0 left-0 right-0 h-1/3 ${isDarkMode ? 'bg-gradient-to-t from-[#1a0b2e] to-transparent' : 'bg-gradient-to-t from-indigo-50 to-transparent'} transition-colors duration-500`}></div>
        
        {/* Particle effect background */}
        <ParticleEffect />
        
        {/* Animated circles in background */}
        {isDarkMode && (
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700 opacity-10 filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-700 opacity-10 filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </>
        )}
      </div>

      <div
        className={`relative inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start justify-between gap-8 md:gap-5 z-10`}
      >
        <div className='hidden md:flex flex-col justify-center items-center mt-5'>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className='w-5 h-5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-purple-500/30' 
          />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: isVisible ? 'auto' : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-600 to-transparent' 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-left max-w-2xl"
        >
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>Prajwal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I am a full stack developer skilled in both front-end and back-end technologies.<br className='sm:block hidden' />
            I design responsive user interfaces, develop robust server-side logic, and manage databases efficiently.
          </p>
          
          {/* Skills badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Three.js'].map((skill, index) => (
              <span 
                key={index}
                className={`px-3 py-1 text-sm rounded-full ${
                  isDarkMode 
                    ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-700/50' 
                    : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                } backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                {skill}
              </span>
            ))}
          </motion.div>
          
          <div className="mt-8">
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`inline-block px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg 
                        bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700
                        shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40`}
            >
              Let's work together
            </motion.a>
            
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className={`ml-4 inline-block px-8 py-3 font-semibold transition-all duration-300 rounded-lg 
                        border-2 border-indigo-600 
                        ${isDarkMode ? 'text-white hover:bg-indigo-900/30' : 'text-indigo-700 hover:bg-indigo-50'}
                        shadow-lg shadow-transparent hover:shadow-purple-500/20`}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="md:sticky md:top-[120px] md:self-start flex justify-end"
        >
          <div 
            className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] 
                     rounded-full overflow-hidden
                     transition-all duration-500 ease-in-out
                     group
                     shadow-[0_0_30px_rgba(124,58,237,0.5)]
                     border-4 border-violet-600/30
                     hover:shadow-[0_0_50px_rgba(124,58,237,0.7)]
                     before:content-['']
                     before:absolute
                     before:inset-0
                     before:z-10
                     before:rounded-full
                     before:bg-gradient-to-b
                     before:from-transparent
                     before:to-black/30
                     ml-auto"
          >
            <div 
              className="w-full h-full rounded-full
                       bg-cover bg-center bg-no-repeat
                       transform transition-transform duration-700
                       group-hover:scale-110"
              style={{
                backgroundImage: "url('/porfolio.jpg')"
              }}
            />
            
            {/* Decorative elements around profile image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg animate-bounce" style={{ animationDuration: '2s' }}></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg animate-ping" style={{ animationDuration: '3s' }}></div>
          </div>
        </motion.div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className={`w-[35px] h-[64px] rounded-3xl border-4 ${isDarkMode ? 'border-secondary' : 'border-indigo-600'} 
                      flex justify-center items-start p-2 backdrop-blur-sm
                      hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300`}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-indigo-600'} mb-1`}
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
