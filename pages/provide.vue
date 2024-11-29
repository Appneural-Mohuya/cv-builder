<template>
  <div class="bg-white text-gray-900 flex flex-col justify-between min-h-screen">

    <!-- Header -->
    <header class="p-4 flex items-center">
      <div class="flex items-center">
        <div class="bg-orange-500 w-8 h-8 mr-2"></div>
        <span class="text-xl font-bold text-purple-700">ALIVE CV</span>
      </div>
    </header>

    <!-- Main Content -->
    <div class="bg-white font-sans flex flex-1 items-center justify-center">
      <div class="max-w-7xl w-full mx-auto px-6 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <!-- Left Side (URL Input Form) -->
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Provide URL</h1>
            <p class="text-lg mb-8 text-center">Provide us the URL to fetch the data from the website to create your resume</p>

            <!-- Input Field -->
            <div class="flex items-center">
              <input 
                v-model="urlInput"
                type="text" 
                placeholder="PASTE YOUR LINK HERE...." 
                class="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-purple-500 focus:outline-none">
              <button 
                class="ml-2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center" @click="submitUrl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-500 mt-2 text-center">Provide link like: LinkedIn, Glassdoor, Indeed etc..</p>
          </div>

          <!-- Right Side (Resume Preview - CV Template) -->
          <div class="flex justify-center">
            <div class="border border-gray-300 p-4 bg-gray-50" style="width: 150mm; height: 200mm;">
              <!-- Header Section (Name and Job Title) -->
              <div class="flex items-center p-4 border-b border-gray-300">
                <div class="w-12 h-12 rounded-full bg-gray-300"></div>
                <div class="ml-4">
                  <h2 class="text-xl font-bold">Lorem Ipsum</h2>
                  <p class="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>

              <!-- Resume Placeholder Sections -->
              <div class="grid grid-cols-2 gap-4 p-4">
                <div class="border border-gray-300 h-24"></div>
                <div class="border border-gray-300 h-24"></div>
                <div class="border border-gray-300 h-24"></div>
                <div class="border border-gray-300 h-24"></div>
                <div class="border border-gray-300 h-24"></div>
                <div class="border border-gray-300 h-24"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-between items-center px-8 pb-8">
      <nuxt-link to="/user"><button class="border-2 border-purple-700 text-purple-700 font-bold py-2 px-6" @click="goBack">BACK</button></nuxt-link>
      <nuxt-link to="/provideurlform"><button class="bg-purple-700 text-white font-bold py-2 px-6" @click="continueAction">CONTINUE</button></nuxt-link>
    </div>

    <!-- Footer -->
    <footer class="w-full bg-white border-t border-gray-200 mt-12">
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
    this.$router.push('/provide');
  },

  data() {
    return {
      urlInput: '', // Bind the input value here
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
    submitUrl() {
      // Handle the URL submission
      console.log('Submitted URL:', this.urlInput);
    },
  },
};
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
