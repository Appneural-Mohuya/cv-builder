<template>
    <div class="container mx-auto px-6 py-10">
      <!-- Header -->
      <header class="mb-12">
        <!-- Top Navigation -->
        <div class="flex justify-between items-center">
          <!-- Logo/Title -->
          <div class="flex items-center">
            <div class="bg-orange-500 h-6 w-6 mr-2"></div>
            <span class="text-xl font-bold text-purple-600">ALIVE CV</span>
          </div>
          <!-- Breadcrumb -->
          <nav>
            <a href="#" class="text-purple-600 hover:underline">Back to Templates</a>
          </nav>
        </div>
  
        <!-- Main Title -->
        <h1 class="text-4xl font-bold text-center mt-8">how would you like to start ?</h1>
      </header>
  
      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        <!-- Card 1 -->
        
        <div class="border border-purple-500 p-8 text-center hover:shadow-lg transition-shadow">
          
          <h2 class="text-2xl font-semibold mb-4">Upload Your CV</h2>
          <p class="text-gray-700 mb-6">Start with an existing CV and refine it.</p>
          <nuxt-link to="/upload"><button class="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">GET STARTED</button></nuxt-link>
        
        </div>
       
  
        <!-- Card 2 -->
        <div class="border border-gray-300 p-8 text-center hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-4">Provide Url</h2>
          <p class="text-gray-700 mb-6">Import details from LinkedIn or other profile links.</p>
          <nuxt-link to="/provide">
            <button class="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">GET STARTED</button> </nuxt-link>
        </div>
       
  
        <!-- Card 3 -->
        <div class="border border-gray-300 p-8 text-center hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-4">Open Text</h2>
          <p class="text-gray-700 mb-6">Fill in your details manually guided prompts.</p>
          <nuxt-link to="/opentext"><button class="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">GET STARTED</button></nuxt-link>
        </div>
  
        <!-- Card 4 -->
        <div class="border border-gray-300 p-8 text-center hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-4">Search</h2>
          <p class="text-gray-700 mb-6">Find job titles, skills, and qualifications instantly.</p>
          <nuxt-link to="/SearchUI"> <button class="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">GET STARTED</button></nuxt-link>
        </div>
  
        <!-- Card 5 -->
        <div class="border border-gray-300 p-8 text-center hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-4">Chat with AI</h2>
          <p class="text-gray-700 mb-6">Let our AI chat assistant guide you step-by-step.</p>
          <nuxt-link to="/ai"><button class="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">GET STARTED</button></nuxt-link>
        </div>
  
        <!-- Card 6 -->
        <div class="border border-gray-300 p-8 text-center hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-4">Using Form</h2>
          <p class="text-gray-700 mb-6">Let our AI chat assistant guide you step-by-step.</p>
          <nuxt-link to="/Form"><button class="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">GET STARTED</button></nuxt-link>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="mt-16 text-center text-sm text-gray-600">
        <p>
          <a href="#" class="mx-2">About Us</a> | 
          <a href="#" class="mx-2">Contact Us</a> | 
          <a href="#" class="mx-2">Privacy Policy</a> | 
          <a href="#" class="mx-2">Terms & Conditions</a>
        </p>
        <p class="mt-4">&copy; 2024. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'user',
    mounted() {
    this.$router.push('/user');
  }
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  