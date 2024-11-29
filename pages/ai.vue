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
        <div class="flex w-3/4 space-x-8">
          <!-- Left Box for Upload Area -->
          <div class="w-1/2 border-2 border-purple-700 p-6 bg-gray-50 flex flex-col justify-between">
            <!-- Chat Header -->
            <div class="bg-purple-100 text-center py-3 border-b border-purple-400">
              <h1 class="text-lg font-semibold text-gray-800">AI Chat Bot</h1>
            </div>
  
            <!-- Chat Body -->
            <div class="flex-grow p-4 space-y-4 overflow-y-auto">
              <!-- Received Message -->
              <div class="flex items-start space-x-3">
                <div class="bg-orange-500 w-8 h-8 rounded-full"></div>
                <div class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow">Hi!!</div>
              </div>
  
              <!-- Sent Messages -->
              <div class="flex justify-end">
                <div class="bg-purple-500 text-white px-4 py-2 rounded-lg shadow">Hello</div>
              </div>
              <div class="flex justify-end">
                <div class="bg-purple-500 text-white px-4 py-2 rounded-lg shadow">What's your Name?</div>
              </div>
            </div>
  
            <!-- Chat Footer -->
            <div class="border-t border-purple-400 flex items-center p-3">
              <!-- Input field and Send button -->
              <div class="flex items-center w-full space-x-3">
                <div class="bg-orange-500 w-8 h-8 rounded-full"></div>
                <input
                  type="text"
                  v-model="message"
                  placeholder="Type Your Message Here..."
                  class="flex-grow border border-gray-300 rounded-lg p-2"
                />
                <button class="bg-purple-500 text-white p-2 rounded-lg shadow" @click="sendMessage">➤</button>
              </div>
            </div>
          </div>
  
          <!-- Right Box for CV Preview -->
          <div class="w-1/2 border-2 border-purple-700 flex flex-col">
            <!-- Profile Section -->
            <div class="flex items-center p-4 border-b border-gray-300">
              <div class="bg-gray-300 rounded-full w-16 h-16"></div>
              <div class="ml-4">
                <h2 class="text-xl font-bold">Lorem Ipsum</h2>
                <p class="text-sm text-gray-500">Software Engineer</p>
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
        <nuxt-link to="/user"><button class="border-2 border-purple-700 text-purple-700 font-bold py-2 px-6">BACK</button></nuxt-link>
        <nuxt-link to="/aiform"><button class="bg-purple-700 text-white font-bold py-2 px-6">CONTINUE</button></nuxt-link>
      </div>
  
      <!-- Footer -->
      <div class="w-full bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto py-4 text-gray-500 text-sm flex justify-between">
          <div class="space-x-4">
            <a href="#" class="hover:underline">About Us</a>
            <a href="#" class="hover:underline">Contact Us</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Terms & Conditions</a>
          </div>
          <div>© 2024 All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Ai",
    mounted() {
    this.$router.push('/ai');
  },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.message.trim() !== '') {
          console.log(this.message);
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles if necessary */
  </style>
  