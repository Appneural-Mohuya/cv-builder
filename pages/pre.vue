<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="w-full bg-white">
      <!-- Header Section -->
      <div class="flex items-center px-8 py-4">
        <div class="bg-orange-600 w-8 h-8"></div>
        <h1 class="text-2xl font-bold text-purple-900 ml-4">ALIVE CV</h1>
      </div>

      <!-- Main Wrapper -->
      <div class="bg-gray-100 min-h-screen flex justify-center items-center">
        <div class="w-full max-w-2xl">
          <div class="relative bg-white p-8 shadow-lg" id="cv-content">
            <!-- Header with buttons -->
            <div class="flex justify-between mb-4">
              <button @click="downloadCV" class="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                DOWNLOAD
              </button>
              <button class="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                EMAIL
              </button>
            </div>

            <!-- Main Content -->
            <div id="maincv">
              <h1 class="text-center text-3xl font-semibold mb-6">Preview</h1>
              <div class="border-2 border-purple-600">
                <!-- Profile Section -->
                <div class="flex items-center p-4">
                  <div class="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div class="ml-4">
                    <h2 class="font-bold text-lg">Lorem Ipsum</h2>
                    <p class="text-gray-600">Software Engineer</p>
                  </div>
                </div>

                <!-- Grid Layout -->
                <div class="grid grid-cols-3 gap-2 p-4">
                  <div class="border border-gray-300 h-24"></div>
                  <div class="border border-gray-300 h-24 col-span-2"></div>
                  <div class="border border-gray-300 h-24 col-span-2"></div>
                  <div class="border border-gray-300 h-24"></div>
                  <div class="border border-gray-300 h-24"></div>
                  <div class="border border-gray-300 h-24 col-span-2"></div>
                </div>
              </div>
            </div>

            <!-- Arrows -->
            <div class="absolute inset-y-1/2 left-0 transform -translate-y-1/2">
              <button class="border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div class="absolute inset-y-1/2 right-0 transform -translate-y-1/2">
              <button class="border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Back Button -->
          <div class="mt-6 flex justify-center">
            <button @click="openPopup" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              BACK
            </button>
          </div>

          <!-- Popup -->
          <TemplatePopup v-if="showPopup" @close="closePopup" :templates="templateList" />
        </div>
      </div>

      <!-- Footer -->
      <div class="w-full bg-white border-t border-gray-200 mt-12">
        <div class="max-w-7xl mx-auto py-4 text-gray-500 text-sm flex justify-between">
          <div class="space-x-4">
            <a href="#" class="hover:underline">About Us</a>
            <a href="#" class="hover:underline">Contact Us</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Terms & Conditions</a>
          </div>
          <div> © 2024 All Rights Reserved. </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TemplatePopup from '~/pages/TemplatePopup.vue';

export default {
  name: "CvPreview",
  components: {
    TemplatePopup,
  },
  data() {
    return {
      showPopup: false,
      // Modify the templateList to use the correct image paths
      templateList: [
        { id: 1, image: '~/assets/hero.png' },
        { id: 2, image: '~/assets/tem2.png' },
        { id: 3, image: '~/assets/man.png' },
        { id: 4, image: '~/assets/man.png' },
        { id: 5, image: '~/assets/man.png' },
        { id: 6, image: '~/assets/man.png' },
        { id: 7, image: '~/assets/tem1.png' },
        { id: 8, image: '~/assets/tem2.png' },
        { id: 9, image: '~/assets/man.png' },
        { id: 10, image: '~/assets/man.png' },
        { id: 11, image: '~/assets/man.png' },
        { id: 12, image: '~/assets/man.png' },
        { id: 13, image: '~/assets/tem1.png' },
        { id: 14, image: '~/assets/tem2.png' },
        { id: 15, image: '~/assets/man.png' },
        { id: 16, image: '~/assets/man.png' },
        { id: 17, image: '~/assets/man.png' },
        { id: 18, image: '~/assets/man.png' }
      ],
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    async downloadCV() {
      if (process.client) {
        const { default: html2pdf } = await import('html2pdf.js/dist/html2pdf.bundle.min');
        const cvContent = document.getElementById('maincv');
        html2pdf(cvContent, {
          margin: 10,
          filename: 'CV.pdf',
          html2canvas: { scale: 2 },
          jsPDF: { orientation: 'portrait' }
        });
      }
    },
  },
};
</script>


<style scoped>
/* Add custom styles if necessary */
</style>
