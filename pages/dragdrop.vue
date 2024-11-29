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
      <main class="flex justify-center items-center h-screen">
        <div class="flex w-3/4 space-x-4">
           <!-- Left Box for Upload Area -->
        <div
          class="w-1/2 border-2 border-purple-700 flex items-center justify-center bg-gray-100"
          style="height: 500px;"
          @drop="onDrop"
          @dragover.prevent
        >
          <!-- Display uploaded image or file input -->
          <div v-if="uploadedImage" class="w-40 h-40 border-2 border-gray-300" draggable="true" @dragstart="dragImage($event)">
            <img :src="uploadedImage" alt="Uploaded Image" class="w-full h-full object-cover" />
          </div>
          <div v-else>
            <input type="file" @change="onFileChange" class="bg-gray-200 p-2 border border-purple-700" />
          </div>
        </div>

  
          <!-- Arrow in between -->
        <div class="flex items-center justify-center">
          <svg class="w-8 h-8 text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M14.293 7.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L17.586 13H3a1 1 0 110-2h14.586l-3.293-3.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>

 <!-- Right Box for CV Preview -->
        <div
          class="w-1/2 border-2 border-purple-700 flex flex-col"
          @drop="onDropRight"
          @dragover.prevent
        >
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
            <div v-if="draggedImage" class="border border-gray-300 h-32">
              <img :src="draggedImage" alt="Dragged Image" class="w-full h-full object-cover" />
            </div>
            <div class="border border-gray-300 h-32"></div>
            <div class="border border-gray-300 h-32"></div>
            <div class="border border-gray-300 h-32"></div>
          </div>
        </div>
      </div>
    </main>
  
     <!-- Action Buttons -->
    <div class="flex justify-between items-center px-8 pb-8">
      <button class="border-2 border-purple-700 text-purple-700 font-bold py-2 px-6">BACK</button>
      <button class="bg-purple-700 text-white font-bold py-2 px-6">CONTINUE</button>
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
    name: 'DragDrop', 
    data() {
      return {
        uploadedImage: null, // Store the uploaded image
        draggedImage: null, // Store the dragged image in the right box
      };
    },
    methods: {
      // Handle file input change
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.uploadedImage = URL.createObjectURL(file); // Create a URL for the image
        }
      },
      // Handle image drag start
      dragImage(event) {
        event.dataTransfer.setData("imageSrc", this.uploadedImage); // Store the image URL in drag event
      },
      // Handle drop on the right box
      onDropRight(event) {
        const imageSrc = event.dataTransfer.getData("imageSrc");
        if (imageSrc) {
          this.draggedImage = imageSrc; // Set the dragged image in the right box
          this.uploadedImage = null; // Remove the image from the left box
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  