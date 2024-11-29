<template>
  <div class="bg-white text-gray-900 flex flex-col justify-between min-h-screen">

    <!-- Header -->
    <header class="p-4 flex items-center">
      <div class="flex items-center">
        <div class="bg-orange-500 w-8 h-8 mr-2"></div>
        <span class="text-xl font-bold text-purple-700">ALIVE CV</span>
      </div>
    </header>

    <!-- Main Section (Split into Left and Right) -->
    <main class="flex-grow flex items-center justify-center">
      <div class="flex max-w-6xl w-full">
        
        <!-- Left Section (File Upload Section) -->
        <div 
          class="w-1/2 bg-purple-50 border-dashed border-2 border-purple-200 rounded-lg p-8 flex flex-col items-center mr-4"
          @dragover.prevent
          @drop.prevent="handleDrop"
          @dragenter="dragging = true"
          @dragleave="dragging = false"
          :class="{'border-purple-700': dragging}"
        >
          
          <!-- Hidden file input -->
          <input 
            type="file" 
            ref="fileInput" 
            @change="handleFileChange" 
            class="hidden" 
            accept=".pdf,.doc,.docx" 
          />

          <!-- Show file upload options if no file is uploaded -->
          <div v-if="!uploadedFile" class="flex flex-col items-center justify-center">
            <div class="mb-4">
              <!-- SVG Icon for Cloud Upload -->
              <svg
                width="91"
                height="79"
                viewBox="0 0 91 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Cloud Icon Code Here -->
              </svg>
            </div>
            <p class="text-lg mb-2">
              Drag & drop files or 
              <span class="text-blue-500 cursor-pointer" @click="browseFiles">Browse</span>
            </p>
            <p class="text-sm text-gray-500">Supported formats: PDF & Word</p>
          </div>

          <!-- Show file information after a file is uploaded -->
          <div v-if="uploadedFile" class="flex flex-col items-center">
            <p class="text-lg font-bold mb-2">File Uploaded</p>
            <p class="text-sm text-gray-700">{{ uploadedFile.name }}</p>
            <p class="text-sm text-gray-500">Size: {{ (uploadedFile.size / 1024).toFixed(2) }} KB</p>

            <!-- Option to remove the uploaded file -->
            <button 
              class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" 
              @click="removeFile"
            >
              Remove File
            </button>
          </div>
        </div>

        <!-- Right Section (Google Drive Button & Extra Info) -->
        <div class="w-1/2 flex flex-col items-center justify-center">
          <!-- Google Drive Button -->
          <button 
            class="border border-purple-500 rounded-md py-2 px-6 flex items-center space-x-2 text-purple-700 hover:bg-purple-700 hover:text-white" 
            @click="handleGoogleDrive"
          >
            <img :src="require('@/assets/drive.png')" alt="Google Drive" class="w-6 h-6">
            <span>Google Drive</span>
          </button>
        </div>
      </div>
    </main>

    <!-- Back Button Section -->
    <div class="p-4 flex justify-start">
      <button 
        class="text-purple-700 border border-purple-700 px-6 py-2 rounded-md font-bold hover:bg-purple-700 hover:text-white"
        @click="goBack"
      >
        BACK
      </button>
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
  name: 'FileUpload',
  mounted() {
    this.$router.push('/user');
  },
  
  data() {
    return {
      dragging: false,
      uploadedFile: null,  // To store the uploaded file
    };
  },
  methods: {
    handleDrop(event) {
      this.dragging = false;
      const file = event.dataTransfer.files[0];
      if (this.isFileValid(file)) {
        this.uploadedFile = file;
        console.log("File dropped:", file.name);
      } else {
        alert("Invalid file format. Only PDF and Word files are supported.");
      }
    },

    // Open file browser when clicking "Browse"
    browseFiles() {
      this.$refs.fileInput.click();
    },

    // Handle file input change
    handleFileChange(event) {
      const file = event.target.files[0];
      if (this.isFileValid(file)) {
        this.uploadedFile = file;
        console.log("File selected:", file.name);
      } else {
        alert("Invalid file format. Only PDF and Word files are supported.");
      }
    },

    // Validate uploaded file type
    isFileValid(file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return validTypes.includes(file.type);
    },

    // Remove the uploaded file
    removeFile() {
      this.uploadedFile = null;
    },

    // Handle Google Drive button click (placeholder)
    handleGoogleDrive() {
      console.log("Google Drive button clicked");
      // Add Google Drive integration logic here
    },

    // Handle back button click
    goBack() {
      this.$router.go(-1);  // Navigates back to the previous page
    }
  }
};
</script>

<style scoped>
/* Add any custom styles */
</style>
