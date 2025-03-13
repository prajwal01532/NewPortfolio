import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";
import Footer from './components/Footer';

const AppContent = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <BrowserRouter>
      <div className={`relative z-0 transition-colors duration-500 ${isDarkMode ? 'bg-primary' : 'bg-gray-50'}`}>
        <div className={`${isDarkMode ? 'bg-hero-pattern' : 'bg-hero-pattern-light'} bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
        </div>
        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <div className="relative">
            <About />
            <div className="absolute inset-0 z-[-1] opacity-30 bg-gradient-to-b from-transparent to-indigo-900 dark:opacity-10"></div>
          </div>
          
          <div className="relative">
            <Experience />
            <div className="absolute inset-0 z-[-1] opacity-5 bg-gradient-to-b from-indigo-900 to-transparent dark:opacity-10"></div>
          </div>
          
          <Tech />
          
          <div className="relative">
            <Works />
            <div className="absolute inset-0 z-[-1] opacity-5 bg-gradient-to-b from-transparent to-indigo-900 dark:opacity-10"></div>
          </div>
          
          <Feedbacks />
          
          <div className='relative z-0'>
            <Contact />
            {isDarkMode && <StarsCanvas />}
          </div>
        </div>
        <ThemeToggle />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
