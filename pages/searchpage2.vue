<template>
    <div class="bg-white text-gray-900 flex flex-col justify-between min-h-screen">
  
      <!-- Header -->
      <header class="p-4 flex items-center">
        <div class="flex items-center">
          <div class="bg-orange-500 w-8 h-8 mr-2"></div>
          <span class="text-xl font-bold text-purple-700">ALIVE CV</span>
        </div>
      </header>
  
      <!-- Main Section -->
      <main class="flex flex-col items-center mt-8">
        <h1 class="text-3xl font-bold mb-5"></h1>
        <p class="text-gray-700 text-center mb-6">
          
        </p>
  
        <!-- Main Flex Container -->
        <div class="flex w-3/4 space-x-8">
          
          <!-- Left Box for Search Area and Cards -->
          <div class="w-1/2 border-2 border-purple-700 p-6 bg-gray-50 flex flex-col justify-between">
  
            <!-- Search Bar -->
            <div class="mb-4">
              <div class="relative">
                <input 
                  type="text"
                  class="w-full border-2 border-gray-300 rounded-l-md p-2 focus:outline-none"
                  placeholder="Search here..."
                  v-model="textInput"
                />
                <button class="bg-purple-700 text-white px-6 py-2 rounded-r-md absolute right-0">Search</button>
              </div>
            </div>
  
            <!-- Cards -->
            <div class="flex-1 space-y-4">
              <div v-for="i in 4" :key="i" class="border-2 border-purple-700 rounded-lg p-4 flex space-x-4">
                <div class="w-16 h-16 bg-gray-300"></div>
                <div class="flex-1">
                  <h2 class="text-lg font-bold">Shivam Singh</h2>
                  <p class="text-sm text-gray-500">@shiv_123</p>
                  <p class="text-gray-600 mt-2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                </div>
                <div class="w-6 h-6 bg-gray-200"></div>
              </div>
            </div>
  
            <!-- More Button -->
            <div class="flex justify-center mt-4">
              <button class="text-purple-700 font-bold">More <span class="text-lg">▼</span></button>
            </div>
  
          </div>
  
          <!-- Right Box for CV Preview -->
          <div class="w-1/2 border-2 border-purple-700 flex flex-col">
            <!-- Profile Section -->
            <div class="flex items-center p-4 border-b border-gray-300">
              <div class="bg-gray-300 rounded-full w-16 h-16"></div>
              <div class="ml-4">
                <h2 class="text-xl font-bold">Lorem Ipsum</h2>
                <p class="text-sm text-gray-500">Software engg</p>
              </div>
            </div>
  
            <!-- Placeholder for CV sections -->
            <div class="grid grid-cols-2 gap-4 p-4">
              <div class="border border-gray-300 h-32"></div>
              <div class="border border-gray-300 h-32"></div>
              <div class="border border-gray-300 h-32"></div>
              <div class="border border-gray-300 h-32"></div>
            </div>
          </div>
        </div>
      </main>
  
      <!-- Action Buttons -->
      <div class="flex justify-between items-center px-8 pb-8 mt-8">
        <nuxt-link to="/SearchUI">
          <button class="border-2 border-purple-700 text-purple-700 font-bold py-2 px-6" @click="goBack">BACK</button>
        </nuxt-link>
        <nuxt-link to="/searchform">
          <button class="bg-purple-700 text-white font-bold py-2 px-6" @click="continueAction">CONTINUE</button>
        </nuxt-link>
      </div>
  
      <!-- Footer -->
      <footer class="w-full bg-white border-t border-gray-200">
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
    name: 'UploadCV',
    mounted() {
    this.$router.push('/searchpage2');
  },
    data() {
      return {
        textInput: '', // Bind the textarea value here
      };
    },
    methods: {
      goBack() {
        // Implement the back button logic here
        console.log('Back button clicked');
      },
      continueAction() {
        // Implement the continue button logic here
        console.log('Continue button clicked');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional scoped styles here */
  </style>
  