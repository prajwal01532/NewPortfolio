import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${
        scrolled 
          ? isDarkMode 
            ? "bg-primary bg-opacity-80 backdrop-blur-md shadow-lg" 
            : "bg-white bg-opacity-80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center
                        shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]
                        transition-all duration-500 transform hover:scale-110">
            <span className="text-white text-2xl font-bold">P</span>
          </div>
          <p className={`${
            isDarkMode 
              ? 'text-white hover:text-indigo-300 filter hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.7)]' 
              : 'text-indigo-700 hover:text-indigo-500 filter hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]'
          } text-[18px] font-bold cursor-pointer flex transition-all duration-300`}>
            <span className="whitespace-nowrap">Prajwal</span>
            <span className='sm:block hidden ml-1 whitespace-nowrap'> | JavaScript Mastery</span>
          </p>
        </Link>

        <div className='flex items-center'>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title 
                    ? isDarkMode 
                      ? "text-white font-semibold" 
                      : "text-indigo-600 font-semibold"
                    : isDarkMode 
                      ? "text-secondary" 
                      : "text-gray-700"
                } hover:${
                  isDarkMode 
                    ? 'text-indigo-300' 
                    : 'text-indigo-600'
                } text-[16px] font-medium cursor-pointer transition-all duration-300 relative group`}
                onClick={() => setActive(nav.title)}
              >
                {nav.type === 'download' ? (
                  <a 
                    href={nav.url} 
                    download
                    className="flex flex-col items-center"
                  >
                    {nav.title}
                    <span className={`h-[2px] inline-block w-0 bg-${isDarkMode ? 'indigo-300' : 'indigo-600'} 
                                    absolute left-0 -bottom-1 group-hover:w-full transition-all duration-300
                                    ${active === nav.title ? 'w-full' : 'w-0'}`}>
                    </span>
                  </a>
                ) : (
                  <a href={`#${nav.id}`} className="flex flex-col items-center">
                    {nav.title}
                    <span className={`h-[2px] inline-block w-0 bg-${isDarkMode ? 'indigo-300' : 'indigo-600'} 
                                    absolute left-0 -bottom-1 group-hover:w-full transition-all duration-300
                                    ${active === nav.title ? 'w-full' : 'w-0'}`}>
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300 hover:opacity-80'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 ${
              isDarkMode 
                ? "bg-primary bg-opacity-90 backdrop-blur-md" 
                : "bg-white bg-opacity-90 backdrop-blur-md"
            } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-xl transition-all duration-300 ease-in-out`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title 
                      ? isDarkMode 
                        ? "text-white font-semibold" 
                        : "text-indigo-600 font-semibold"
                      : isDarkMode 
                        ? "text-secondary" 
                        : "text-gray-700"
                  } hover:${
                    isDarkMode 
                      ? 'text-indigo-300' 
                      : 'text-indigo-600'
                  } transition-all duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.type === 'download' ? (
                    <a href={nav.url} download>{nav.title}</a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
