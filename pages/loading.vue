<template>
    <div class="flex flex-col justify-between min-h-screen bg-white">
      <!-- Header -->
      <header class="p-4 flex items-center">
        <div class="flex items-center">
          <div class="bg-orange-500 w-8 h-8 mr-2"></div>
          <span class="text-xl font-bold text-purple-700">ALIVE CV</span>
        </div>
      </header>
  
      <!-- Loading Content -->
      <main class="flex-grow flex flex-col items-center justify-center">
        <div class="w-full max-w-4xl flex flex-col items-center justify-center">
          <!-- Upload Text -->
          <h1 class="text-4xl font-bold mb-8">Upload</h1>
  
          <!-- Loading Spinner -->
          <div class="relative w-80 h-60 bg-purple-700 flex items-center justify-center rounded-lg">
            <div class="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p class="absolute text-white text-xl">Loading...</p>
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="w-full bg-white border-t border-gray-200 py-4 mt-12">
        <div class="max-w-7xl mx-auto text-gray-500 text-sm flex justify-between">
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
    name: 'LoadingPage',
    mounted() {
      // Redirect after 3 seconds (adjust time as needed)
      setTimeout(() => {
        this.$router.push('/drag');  // Replace '/next-page' with the actual path you want to navigate to
      }, 3000);  // 3000 milliseconds = 3 seconds
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles for spinner */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  