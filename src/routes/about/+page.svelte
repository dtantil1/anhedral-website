<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
  });
  
  const timeline = [
    {
      year: '2022',
      title: 'Anhedral Founded',
      description: 'Established as an innovative technology company focused on aviation applications.'
    },
    {
      year: '2023',
      title: 'BrakeTime Launch',
      description: 'Released BrakeTime, the fastest way to calculate FAA Part 117 flight time limits for commercial pilots.'
    },
    {
      year: '2025',
      title: 'Fly BrakeTime PWA',
      description: 'Launched the Progressive Web App version of BrakeTime, making it even more accessible to pilots.'
    }
  ];
</script>

<svelte:head>
  <title>About | Anhedral.io</title>
  <meta name="description" content="Learn about Anhedral.io, our mission, vision, and our journey in aviation technology.">
</svelte:head>

<!-- Hero Section -->
<section class="relative py-32 bg-deep-space">
  <div class="grid-background absolute inset-0 opacity-20"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-cyber-blue/10 mix-blend-overlay"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    {#if isVisible}
      <div class="max-w-3xl mx-auto text-center">
        <h1 
          in:fly={{ y: 20, duration: 800, delay: 200 }}
          class="text-4xl md:text-5xl font-bold mb-6 neon-text"
        >
          About Anhedral
        </h1>
        
        <p 
          in:fly={{ y: 20, duration: 800, delay: 400 }}
          class="text-xl text-gray-300"
        >
          Enhancing the aviation experience through innovative technology
        </p>
      </div>
    {/if}
  </div>
</section>

<!-- Mission & Vision -->
<section class="py-20 bg-night">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1">
        <h2 class="text-3xl font-bold mb-6 text-white">Our Mission & Vision</h2>
        
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-3 text-cyber-blue">Mission</h3>
          <p class="text-gray-300">
            To enhance the aviation experience for pilots worldwide through innovative technology solutions that improve safety, efficiency, and navigation.
          </p>
        </div>
        
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-3 text-cyber-blue">Vision</h3>
          <p class="text-gray-300">
            A future where pilots have access to the best resources and tools for their flying endeavors, making aviation safer and more efficient for everyone.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-3 text-cyber-blue">Values</h3>
          <ul class="text-gray-300 space-y-2">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-cyber-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Innovation: Creating cutting-edge solutions for aviation challenges</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-cyber-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Excellence: Delivering reliable and accurate information</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-cyber-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>User-Focused: Prioritizing pilot needs and experience</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-cyber-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Safety: Ensuring reliable tools for flight operations</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="order-1 md:order-2">
        <div class="futuristic-card p-0 overflow-hidden">
          <div class="relative h-96 w-full overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-cyber-blue/20 mix-blend-overlay"></div>
            <div class="absolute inset-0 bg-night/60"></div>
            <div class="absolute inset-0 flex items-center justify-center p-8">
              <div>
                <div class="font-mono text-cyber-blue mb-4 text-lg">// ANHEDRAL MANIFESTO</div>
                <div class="text-white space-y-4">
                  <p>"We believe that technology should enhance the aviation experience, making it safer and more efficient for pilots."</p>
                  <p>"Our work focuses on creating user-friendly tools that provide reliable, accurate information for flight operations."</p>
                  <p>"At Anhedral, we're committed to pushing the boundaries of aviation technology to new heights."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Our Story Timeline -->
<section class="py-20 bg-deep-space">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl font-bold mb-4 neon-text">Our Journey</h2>
      <p class="text-gray-300">The evolution of Anhedral through the years</p>
    </div>
    
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-cyber-blue/30"></div>
      
      <div class="space-y-12">
        {#each timeline as item, i}
          <div class="relative flex justify-center">
            <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyber-blue animate-glow"></div>
            
            <div class="w-5/12 {i % 2 === 0 ? 'text-right pr-12' : 'ml-auto pl-12'}">
              <div class="font-mono text-cyber-blue mb-2">{item.year}</div>
              <h3 class="text-xl font-bold text-white mb-2">{item.title}</h3>
              {#if item.title === 'BrakeTime Launch'}
                <img 
                  src="/images/braketime-logo.svg" 
                  alt="BrakeTime Logo" 
                  class="w-24 h-24 mb-4 {i % 2 === 0 ? 'ml-auto' : 'mr-auto'}"
                />
              {/if}
              <p class="text-gray-400">{item.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-20 bg-night relative overflow-hidden">
  <div class="grid-background absolute inset-0 opacity-10"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-cyber-blue/20 mix-blend-overlay"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6 neon-text">Join Our Journey</h2>
      <p class="text-xl text-gray-300 mb-8">
        Whether you're looking to partner with us or join our team, we're always looking for passionate individuals and organizations to collaborate with.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="mailto:info@anhedral.io" class="cyber-button">Contact Us</a>
        <a href="mailto:careers@anhedral.io?subject=Career%20Opportunity&body=Insert%20resume" class="px-6 py-2 border border-gray-600 text-gray-300 rounded hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300">Careers</a>
      </div>
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