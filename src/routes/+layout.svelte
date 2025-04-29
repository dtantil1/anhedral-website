<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  let showMenu = false;
  let scrolled = false;

  onMount(() => {
    window.addEventListener('scroll', () => {
      scrolled = window.scrollY > 20;
    });
  });
</script>

<svelte:head>
  <title>Anhedral.io | Futuristic Aviation Technology</title>
  <meta name="description" content="Anhedral.io - Cutting-edge aviation technology solutions and services">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen flex flex-col">
  <!-- Navigation -->
  <header class="fixed w-full z-50 transition-all duration-300 {scrolled ? 'py-2 bg-deep-space bg-opacity-80 backdrop-blur-md' : 'py-4 bg-transparent'}">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="/" class="flex items-center gap-2">
        <span class="text-2xl font-bold neon-text">ANHEDRAL</span>
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-8">
        <a href="/" class="nav-link">Home</a>
        <a href="/about" class="nav-link">About</a>
        <a href="mailto:info@anhedral.io" class="nav-link cyber-button">Contact</a>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden text-white focus:outline-none"
        on:click={() => showMenu = !showMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Navigation -->
    {#if showMenu}
      <div 
        transition:fly={{ y: -20, duration: 200 }}
        class="lg:hidden bg-night bg-opacity-95 backdrop-blur-lg"
      >
        <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="/" class="nav-link py-2">Home</a>
          <a href="/about" class="nav-link py-2">About</a>
          <a href="/services" class="nav-link py-2">Services</a>
          <a href="/projects" class="nav-link py-2">Projects</a>
          <a href="/contact" class="cyber-button text-center mt-4">Contact</a>
        </div>
      </div>
    {/if}
  </header>
  
  <main class="flex-grow">
    <slot />
  </main>
  
  <!-- Footer -->
  <footer class="bg-deep-space py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Anhedral.io</h3>
          <p class="text-gray-400">Cutting-edge aviation technology solutions and services for a connected future.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/" class="text-gray-400 hover:text-cyber-blue">Home</a></li>
            <li><a href="/about" class="text-gray-400 hover:text-cyber-blue">About</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p class="text-gray-400 mb-2">30N Gould St, STE R</p>
          <p class="text-gray-400 mb-2">Sheridan WY, 82801</p>
          <p class="text-gray-400 mb-2">(214) 810-1783</p>
          <p class="text-gray-400">
            <a href="mailto:info@anhedral.io" class="text-cyber-blue hover:text-neon-purple">info@anhedral.io</a>
          </p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-400">© {new Date().getFullYear()} Anhedral.io. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>

<style>
  .nav-link {
    @apply text-gray-300 hover:text-cyber-blue transition-colors duration-300 relative;
  }
  
  .nav-link::after {
    content: '';
    @apply absolute left-0 bottom-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300;
  }
  
  .nav-link:hover::after {
    @apply w-full;
  }
</style> 