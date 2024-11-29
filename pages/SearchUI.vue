<template>
    <div class="bg-white text-gray-900 min-h-screen flex flex-col justify-center items-center">
      <!-- Header -->
      <header class="absolute top-0 left-0 p-4 flex items-center w-full">
        <div class="flex items-center">
          <div class="bg-orange-500 w-8 h-8 mr-2"></div>
          <span class="text-xl font-bold text-purple-700">ALIVE CV</span>
        </div>
      </header>
  
      <!-- Main container (centered content) -->
      <div class="flex flex-col items-center justify-center h-full">
        <!-- Search instruction text -->
        <p class="mb-6 text-lg text-gray-700 text-center">
          You can search here the Name of the people to get their data and can get <br>
          suggestion to build your Resume
        </p>
  
        <!-- Search box -->
        <div class="flex justify-center">
          <input type="text" placeholder="Search here..." class="w-80 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button class="p-3 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700">
            Search
          </button>
        </div>
      </div>
  
      <!-- Action Buttons (centered above footer) -->
      <div class="absolute bottom-16 w-full px-8">
        <div class="flex justify-between items-center">
          <nuxt-link to="/user"><button class="border-2 border-purple-700 text-purple-700 font-bold py-2 px-6">BACK</button></nuxt-link>
          <nuxt-link to="/searchpage2"><button class="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700">
            CONTINUE
          </button></nuxt-link>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="absolute bottom-0 w-full bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto py-4 text-gray-500 text-sm flex justify-between">
          <div class="space-x-4">
            <a href="#" class="hover:underline">About Us</a>
            <a href="#" class="hover:underline">Contact Us</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Terms & Conditions</a>
          </div>
          <div>© 2024 All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchUI",
    mounted() {
    this.$router.push('/SearchUI');
  },

  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  