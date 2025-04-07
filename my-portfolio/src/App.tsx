import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Character3D } from './components/Character3D';
import { FloatingParticles } from './components/FloatingParticles';
import gsap from 'gsap';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="https://github.com" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <FaTwitter size={24} />
            </a>
          </div>
          <div className="flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Character3D />
          <FloatingParticles />
        </Canvas>
        
        <div className="absolute inset-0 bg-dark-bg/50 backdrop-blur-sm" />
        
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="grid grid-cols-2 gap-8 w-full">
            <motion.div
              ref={heroRef}
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-neon-purple">Hello!</span> I'm Raj
              </h1>
            </motion.div>
            
            <motion.div
              ref={textRef}
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-right">
                A Creative Designer & Developer
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
}

export default App;
