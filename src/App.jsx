import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Phone, Mail, ChevronDown, Clock } from 'lucide-react';
import pilotsBreakImage from '../src/assets/pilots_break.png';
import { Analytics } from "@vercel/analytics/react"

const AnhedralWebsite = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'manifest', 'projects', 'contact'];
      const currentSection = sections.find((section, index) => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        const isLast = index === sections.length - 1;
        
        if (isLast) {
          return rect.top <= window.innerHeight / 2;
        }
        
        return rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  // Background particle effect component
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="stars absolute w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/80"></div>
      </div>
    );
  };

  // BrakeTime image component
  const BrakeTimeImage = () => {
    return (
      <div className="flex justify-center mt-6">
        <div className="rounded-lg overflow-hidden shadow-lg max-w-2xl">
          <img 
            src={pilotsBreakImage} 
            alt="BrakeTime - Simplifies Part 117 Calculations" 
            className="w-full h-auto"
            onError={(e) => {
              console.error('Image failed to load:', e);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    );
  };
  
  // Navigation link component
  const NavLink = ({ children, active, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`px-1 py-2 font-medium transition-colors ${
          active ? 'text-blue-400 border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'
        }`}
      >
        {children}
      </button>
    );
  };

  // Contact item component
  const ContactItem = ({ icon, title, content }) => {
    return (
      <div className="flex">
        <div className="mt-1 mr-4">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-gray-400">{title}</h4>
          <div className="text-white">{content}</div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="relative min-h-screen text-white font-sans bg-black">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black/80 backdrop-blur-md shadow-lg py-2' : 'py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Anhedral</span>
            <span className="text-blue-400 text-xl ml-1">LLC</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink active={activeSection === 'about'} onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink active={activeSection === 'manifest'} onClick={() => scrollToSection('manifest')}>Manifest</NavLink>
            <NavLink active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Anhedral LLC
          </h1>
          <p className="text-xl text-blue-300 mb-8">
            Elevating aviation technology to new heights
          </p>
          
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-colors"
            >
              <ChevronDown size={30} />
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block border-b-2 border-blue-500 pb-2">About Us</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-6">
              Anhedral LLC is an innovative technology company dedicated to enhancing the aviation experience for pilots worldwide. Specializing in the development of cutting-edge aviation applications, we create tools that improve flight safety, efficiency, and navigation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Manifest Section */}
      <section id="manifest" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block border-b-2 border-blue-500 pb-2">Our Manifest</h2>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <blockquote className="text-xl italic">
                "Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return."
                <footer className="text-right text-blue-300 mt-2">— Leonardo da Vinci</footer>
              </blockquote>
            </div>
            
            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <blockquote className="text-xl italic">
                "The airplane stays up because it doesn't have the time to fall."
                <footer className="text-right text-blue-300 mt-2">— Orville Wright</footer>
              </blockquote>
            </div>
            
            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <blockquote className="text-xl italic">
                "The only time you have too much fuel is when you're on fire."
                <footer className="text-right text-blue-300 mt-2">— Col. Robin Olds</footer>
              </blockquote>
            </div>
            
            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <blockquote className="text-xl italic">
                "Aviation is proof that given the will, we have the capacity to achieve the impossible."
                <footer className="text-right text-blue-300 mt-2">— Eddie Rickenbacker</footer>
              </blockquote>
            </div>
          </div>
          
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              At Anhedral LLC, we're committed to pushing the boundaries of aviation technology to new heights, ensuring pilots have access to the best resources for their flying endeavors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block border-b-2 border-blue-500 pb-2">Featured Project</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
              <div className="px-8 py-12">
                <h3 className="text-3xl font-bold mb-4">BrakeTime</h3>
                <p className="text-lg mb-6">
                  Getting lost in the clouds is bad, but getting lost in time is just embarrassing...
                </p>
                
                <div className="bg-black/30 p-6 rounded-xl mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Clock className="text-blue-400 mr-2" />
                      <span className="text-xl font-bold">Download BrakeTime</span>
                    </div>
                    <a 
                      href="https://flybraketime.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src={pilotsBreakImage} 
                      alt="BrakeTime simplifies Part 117 calculations for you!" 
                      className="w-full max-w-xl rounded-lg shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300"
                      onError={(e) => {
                        console.error('Image failed to load:', e);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block border-b-2 border-blue-500 pb-2">Contact Us</h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
            <div className="p-12">
              <h3 className="text-3xl font-bold mb-8 text-center">Get In Touch</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <ContactItem 
                    icon={<MapPin className="text-blue-400" size={28} />}
                    title="Address"
                    content={<>30N Gould St, STE R<br/>Sheridan WY, 82801</>}
                  />
                  
                  <ContactItem 
                    icon={<Mail className="text-blue-400" size={28} />}
                    title="Email"
                    content={<a href="mailto:info@anhedral.io" className="hover:text-blue-300 transition-colors">info@anhedral.io</a>}
                  />
                </div>
                
                <div className="space-y-8">
                  <ContactItem 
                    icon={<Phone className="text-blue-400" size={28} />}
                    title="Phone"
                    content={<a href="tel:+12148101783" className="hover:text-blue-300 transition-colors">(214) 810-1783</a>}
                  />
                  
                  <ContactItem 
                    icon={<Globe className="text-blue-400" size={28} />}
                    title="Website"
                    content={<a href="https://flybraketime.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">flybraketime.com</a>}
                  />
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <a 
                  href="https://flybraketime.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-bold text-lg"
                >
                  Visit BrakeTime
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Analytics />
      
      {/* Footer */}
      <footer className="py-8 bg-black/80 backdrop-blur-sm border-t border-gray-800 z-10 relative">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Anhedral LLC. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Star styling */}
      <style jsx>{`
        .stars {
          background: #000 url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPgo8ZyBmaWxsPSIjZmZmIj4KPGNpcmNsZSBjeD0iNTAxIiBjeT0iNTAxIiByPSIxIi8+CjxjaXJjbGUgY3g9IjcyMCIgY3k9IjMzMCIgcj0iMSIvPgo8Y2lyY2xlIGN4PSIyNTQiIGN5PSI4NzAiIHI9IjEiLz4KPGNpcmNsZSBjeD0iODQwIiBjeT0iNjMwIiByPSIwLjgiLz4KPGNpcmNsZSBjeD0iMTAyIiBjeT0iNTgwIiByPSIwLjgiLz4KPGNpcmNsZSBjeD0iODI1IiBjeT0iOTUiIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSIzNTAiIGN5PSI5MzAiIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSI0MDMiIGN5PSIxMzAiIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSI3NzciIGN5PSI0MzMiIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSIxNzciIGN5PSI2MzMiIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSI5MzMiIGN5PSI3MzciIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSIyMzMiIGN5PSIyMzciIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSI1NjciIGN5PSI4ODciIHI9IjAuNyIvPgo8Y2lyY2xlIGN4PSI4OTgiIGN5PSIxOTgiIHI9IjAuNSIvPgo8Y2lyY2xlIGN4PSI0MjMiIGN5PSIyODciIHI9IjAuNSIvPgo8Y2lyY2xlIGN4PSIzOTkiIGN5PSI3MTMiIHI9IjAuNSIvPgo8Y2lyY2xlIGN4PSI2MzkiIGN5PSIxMSIgcj0iMC41Ii8+CjxjaXJjbGUgY3g9IjIzOSIgY3k9IjY3MSIgcj0iMC41Ii8+CjxjaXJjbGUgY3g9IjExNSIgY3k9IjE3OSIgcj0iMC41Ii8+CjxjaXJjbGUgY3g9IjgyOSIgY3k9IjcyMSIgcj0iMC41Ii8+CjxjaXJjbGUgY3g9IjkyMSIgY3k9IjQ3MSIgcj0iMC41Ii8+CjxjaXJjbGUgY3g9Ijc1NSIgY3k9IjgyNSIgcj0iMC41Ii8+CjxjaXJjbGUgY3g9IjU1IiBjeT0iOTI1IiByPSIwLjUiLz4KPGNpcmNsZSBjeD0iNTU1IiBjeT0iNTU1IiByPSIwLjUiLz4KPGNpcmNsZSBjeD0iNjUiIGN5PSIzNzAiIHI9IjAuNCIvPgo8Y2lyY2xlIGN4PSIzMDUiIGN5PSI1MCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjUyNSIgY3k9IjIzMCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjY1NSIgY3k9IjE3NSIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjQ4MCIgY3k9IjM5NSIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjU4NSIgY3k9IjY5NSIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9Ijk0NSIgY3k9IjU5NSIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjMzNSIgY3k9IjM0NSIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjcyNSIgY3k9IjUyMCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjY0MCIgY3k9IjMyMCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjY0MCIgY3k9IjU3NSIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODUiIHI9IjAuNCIvPgo8Y2lyY2xlIGN4PSIxMzUiIGN5PSI0NjAiIHI9IjAuNCIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSI3ODUiIHI9IjAuNCIvPgo8Y2lyY2xlIGN4PSI3OTAiIGN5PSIyMzAiIHI9IjAuNCIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjcyMCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjUxMCIgY3k9IjgyMCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjY5MCIgY3k9IjQ3MCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjQ5MCIgY3k9IjYyMCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjI4MCIgY3k9IjQ5MCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjE5MCIgY3k9IjM4MCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9Ijk5MCIgY3k9IjM4MCIgcj0iMC40Ii8+CjxjaXJjbGUgY3g9IjQ1IiBjeT0iMjM1IiByPSIwLjMiLz4KPGNpcmNsZSBjeD0iMTQ1IiBjeT0iMjg1IiByPSIwLjMiLz4KPGNpcmNsZSBjeD0iMjkwIiBjeT0iMTM1IiByPSIwLjMiLz4KPC9nPgo8L3N2Zz4=') repeat top center;
          /* Reduced background size to increase star density */
          background-size: 700px 700px;
          /* Faster animation (80s instead of 100s) */
          animation: stars-move 80s linear infinite;
        }
        
        @keyframes stars-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 700px 700px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnhedralWebsite;