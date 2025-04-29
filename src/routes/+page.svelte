<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
    
    // Particle animation setup (optional enhancement)
    if (typeof window !== 'undefined') {
      const canvas = document.getElementById('particles') as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          
          let particles: Particle[] = [];
          
          class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            alpha: number;
            
            constructor() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.size = Math.random() * 2 + 0.5;
              this.speedX = Math.random() * 1 - 0.5;
              this.speedY = Math.random() * 1 - 0.5;
              this.color = '#5eead4';
              this.alpha = Math.random() * 0.5 + 0.1;
            }
            
            update() {
              this.x += this.speedX;
              this.y += this.speedY;
              
              if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
              if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            
            draw(ctx: CanvasRenderingContext2D) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fillStyle = this.color;
              ctx.globalAlpha = this.alpha;
              ctx.fill();
            }
          }
          
          const init = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 8, 150);
            for (let i = 0; i < particleCount; i++) {
              particles.push(new Particle());
            }
          };
          
          const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
              particles[i].update();
              particles[i].draw(ctx);
            }
            
            requestAnimationFrame(animate);
          };
          
          window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
          });
          
          init();
          animate();
        }
      }
    }
  });
  
  // Featured projects
  const featuredProjects = [
    {
      title: 'BrakeTime',
      description: 'The fastest way to calculate FAA Part 117 flight time limits for commercial pilots',
      url: 'https://flybraketime.com',
      category: 'Aviation Software'
    }
  ];
  
  // Services
  const services = [
    {
      title: 'Avionics Development s',
      description: 'Custom avionics solutions designed for next-generation aircraft',
      icon: 'M7 15l5 5 5-5m-5-5v10'
    },
    {
      title: 'Flight Systems Integration',
      description: 'Seamless integration of complex systems for optimal performance',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'UAV/Drone Solutions',
      description: 'Specialized unmanned aerial vehicle development and customization',
      icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
    },
    {
      title: 'Aviation Software',
      description: 'Robust, secure software solutions for aviation applications',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    }
  ];
</script>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <canvas id="particles" class="absolute inset-0 z-0"></canvas>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-space-black z-10"></div>
  
  <div class="grid-background absolute inset-0 opacity-20 z-0"></div>
  
  <div class="container mx-auto px-4 relative z-20">
    {#if isVisible}
      <div class="max-w-3xl mx-auto text-center">
        <h1 
          in:fly={{ y: 20, duration: 800, delay: 200 }}
          class="text-4xl md:text-6xl font-bold mb-6 neon-text"
        >
          Anhedral LLC
        </h1>
        
        <p 
          in:fly={{ y: 20, duration: 800, delay: 400 }}
          class="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Enhancing the aviation experience for pilots worldwide
        </p>
      </div>
    {/if}
  </div>
  
  <div class="absolute bottom-10 left-0 right-0 flex justify-center z-20">
    <a 
      href="#about" 
      class="text-gray-400 hover:text-cyber-blue animate-bounce"
      aria-label="Scroll down"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </a>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-deep-space">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl font-bold mb-4 neon-text">About Anhedral</h2>
      <p class="text-gray-300">Innovative technology company dedicated to enhancing the aviation experience</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 class="text-2xl font-bold mb-4 text-white">Our Mission</h3>
        <p class="text-gray-300 mb-6">
          Anhedral LLC is an innovative technology company dedicated to enhancing the aviation experience for pilots worldwide. Specializing in the development of cutting-edge aviation applications, Anhedral LLC offers a suite of tools designed to improve flight safety, efficiency, and navigation.
        </p>
        <p class="text-gray-300 mb-6">
          Our products cater to the needs of both professional and amateur pilots, providing real-time data, weather updates, flight planning assistance, and comprehensive navigational support. With a focus on user-friendly interfaces and reliable, accurate information, Anhedral LLC is committed to pushing the boundaries of aviation technology to new heights, ensuring pilots have access to the best resources for their flying endeavors.
        </p>
      </div>
      
      <div class="futuristic-card p-6">
        <h3 class="text-2xl font-bold mb-4 text-white">Contact Us</h3>
        <div class="space-y-4">
          <p class="text-gray-300">
            <strong>Phone:</strong><br>
            (214) 810-1783
          </p>
          <p class="text-gray-300">
            <strong>Email:</strong><br>
            <a href="mailto:info@anhedral.io" class="text-cyber-blue hover:text-neon-purple">info@anhedral.io</a>
          </p>
          <p class="text-gray-300">
            <strong>Address:</strong><br>
            30N Gould St, STE R<br>
            Sheridan WY, 82801
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Map Section -->
<section class="py-20 bg-night">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl font-bold mb-4 neon-text">Our Location</h2>
    </div>
    <div class="futuristic-card p-0 overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.123456789012!2d-106.9557!3d44.7972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5330f3c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2s30N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus&dark=1" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen={true} 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

<!-- Featured Projects -->
<section class="py-20 bg-deep-space">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl font-bold mb-4 neon-text">Our Projects</h2>
      <p class="text-gray-300">Explore our innovative aviation technology solutions</p>
    </div>
    
    <div class="grid grid-cols-1 gap-8">
      {#each featuredProjects as project}
        <div class="futuristic-card">
          <div class="p-4">
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p class="text-gray-400 mb-3">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" class="cyber-button inline-block">
                  Visit Project
                </a>
              </div>
              {#if project.title === 'BrakeTime'}
                <div class="flex-shrink-0">
                  <img 
                    src="/images/pilots_break.png" 
                    alt="Pilots Break Time" 
                    class="w-80 h-80 object-contain rounded-lg drop-shadow-[0_0_15px_rgba(94,234,212,0.3)] hover:drop-shadow-[0_0_20px_rgba(94,234,212,0.5)] transition-all duration-300"
                  />
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="py-20 bg-night">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl font-bold mb-4 neon-text">Our Services</h2>
      <p class="text-gray-300">Comprehensive aviation technology solutions for every need</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each services as service, i}
        <div class="futuristic-card">
          <div class="rounded-full w-14 h-14 flex items-center justify-center bg-cyber-blue/10 border border-cyber-blue mb-6">
            <svg class="w-6 h-6 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={service.icon}></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-white">{service.title}</h3>
          <p class="text-gray-400 mb-4">{service.description}</p>
          <a href="/services" class="text-cyber-blue hover:text-neon-purple inline-flex items-center">
            Learn more
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .neon-text {
    color: #5eead4;
    text-shadow: 0 0 10px rgba(94, 234, 212, 0.5);
  }
  
  .cyber-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(45deg, #5eead4, #818cf8);
    color: white;
    border-radius: 0.25rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .cyber-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(94, 234, 212, 0.3);
  }
  
  .futuristic-card {
    background: rgba(17, 24, 39, 0.7);
    border: 1px solid rgba(94, 234, 212, 0.2);
    border-radius: 0.5rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  .futuristic-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(94, 234, 212, 0.2);
  }
</style>
