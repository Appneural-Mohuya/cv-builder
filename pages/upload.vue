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
        <div class="w-1/2 bg-purple-50 border-dashed border-2 border-purple-200 rounded-lg p-8 flex flex-col items-center mr-4"
          @dragover.prevent
          @drop.prevent="handleDrop"
          @dragenter="dragging = true"
          @dragleave="dragging = false"
          :class="{'border-purple-700': dragging}">
          
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
              <path
                d="M46.7805 18.0146C46.6045 18.605 46.9407 19.2254 47.5308 19.4014L47.6232 19.429L47.6264 19.4253C48.1886 19.541 48.7525 19.2079 48.9176 18.6503C50.4689 13.4379 55.3557 9.79694 60.8006 9.79694C61.4163 9.79694 61.9156 9.29756 61.9156 8.68187C61.9156 8.06616 61.4162 7.5668 60.8006 7.5668C54.1566 7.5668 48.5733 11.9904 46.7805 18.0146ZM46.7805 18.0146L46.9243 18.0575M46.7805 18.0146C46.7805 18.0147 46.7805 18.0147 46.7805 18.0147L46.9243 18.0575M46.9243 18.0575C46.7719 18.5683 47.0628 19.1053 47.5736 19.2576L47.5737 19.2575C48.0866 19.4106 48.6229 19.1176 48.7738 18.6075C50.3441 13.3314 55.2894 9.64694 60.8006 9.64694C61.3334 9.64694 61.7656 9.21472 61.7656 8.68187C61.7656 8.149 61.3334 7.7168 60.8006 7.7168C54.225 7.7168 48.6987 12.0948 46.9243 18.0575Z"
                fill="black"
                stroke="#F9FFF9"
                stroke-width="0.3"
              />
              <path
                d="M74.3104 55.971H68.5201C67.9873 55.971 67.5551 55.5388 67.5551 55.0059C67.5551 54.4731 67.9873 54.0409 68.5201 54.0409H74.3104C82.2921 54.0409 88.7864 47.5466 88.7864 39.5649C88.7864 31.5833 82.2921 25.089 74.3104 25.089H74.1712C73.8913 25.089 73.6252 24.9677 73.4419 24.7561C73.2585 24.5445 73.1758 24.2639 73.2158 23.9868C73.302 23.3857 73.3454 22.7818 73.3454 22.1939C73.3454 15.2765 67.7169 9.64799 60.7995 9.64799C58.1084 9.64799 55.542 10.489 53.3774 12.0806C52.9018 12.4301 52.2262 12.275 51.9512 11.7518C45.821 0.0787359 29.8096 -1.48884 21.5085 8.66571C18.0116 12.9437 16.6376 18.5086 17.7386 23.9324C17.8599 24.5314 17.4015 25.0898 16.7929 25.0898H16.4061C8.42445 25.0898 1.93022 31.584 1.93022 39.5657C1.93022 47.5474 8.42445 54.0416 16.4061 54.0416H22.1964C22.7293 54.0416 23.1615 54.4738 23.1615 55.0067C23.1615 55.5395 22.7293 55.9717 22.1964 55.9717H16.4061C7.35999 55.9717 0 48.6118 0 39.5656C0 30.7732 6.95252 23.5738 15.6486 23.1768C14.8317 17.5497 16.3937 11.8738 20.014 7.44423C28.9015 -3.42855 45.9338 -2.20985 53.1337 9.91408C55.4306 8.47406 58.059 7.71864 60.7992 7.71864C69.18 7.71864 75.8211 14.8519 75.24 23.1858C83.8559 23.669 90.7161 30.8304 90.7161 39.5649C90.7161 48.6118 83.3561 55.971 74.31 55.971L74.3104 55.971Z"
                fill="black"
              />
              <path
                d="M20.9535 54.4634C20.9535 67.8498 31.844 78.7402 45.2304 78.7402C58.6168 78.7402 69.5072 67.8497 69.5072 54.4634C69.5072 41.0769 58.6168 30.1865 45.2304 30.1865C31.8439 30.1865 20.9535 41.0771 20.9535 54.4634ZM23.1841 54.4634C23.1841 42.3074 33.0742 32.4171 45.2304 32.4171C57.3863 32.4171 67.2766 42.3072 67.2766 54.4634C67.2766 66.6193 57.3863 76.5096 45.2304 76.5096C33.0744 76.5096 23.1841 66.6195 23.1841 54.4634Z"
                fill="black"
                stroke="#F9FFF9"
                stroke-width="0.3"
              />
              <path
                d="M44.8144 74.726C44.8144 75.2034 45.1955 75.5951 45.6709 75.5951C46.1463 75.5951 46.5274 75.204 46.5274 74.726V56.0294C46.5274 55.552 46.1463 55.1603 45.6709 55.1603C45.1955 55.1603 44.8144 55.552 44.8144 56.0294V74.726Z"
                fill="black"
                stroke="black"
                stroke-width="0.3"
              />
              <path
                d="M45.2307 53.9995C45.6726 53.9995 46.0358 53.6364 46.0358 53.1944V35.1075C46.0358 34.6655 45.6726 34.3024 45.2307 34.3024C44.7887 34.3024 44.4255 34.6655 44.4255 35.1075V53.1944C44.4255 53.6364 44.7887 53.9995 45.2307 53.9995Z"
                fill="black"
              />
            </svg>
            </div>
            <p class="text-lg mb-2">Drag & drop files or 
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
              @click="removeFile">
              Remove File
            </button>
          </div>
        </div>

        <!-- Right Section (Google Drive Button & Extra Info) -->
        <div class="w-1/2 flex flex-col items-center justify-center">
          <!-- Google Drive Button -->
          <button class="border border-purple-500 rounded-md py-2 px-6 flex items-center space-x-2 text-purple-700 hover:bg-purple-700 hover:text-white" @click="handleGoogleDrive">
  <img src="@/assets/drive.png" alt="Google Drive" class="w-6 h-6">
  <span>Google Drive</span>
</button>


          <!-- Extra content, instructions, or any other info can go here -->
          <!-- <div class="mt-8 text-center">
            <p class="text-gray-600">Upload your CV via Google Drive or drag-and-drop your file here. Supported formats include PDF & Word.</p>
          </div> -->
        </div>
      </div>
    </main>

    <!-- Back Button Section -->
    <div class="flex justify-between items-center px-8 pb-8 mt-8">
        <nuxt-link to="/user"><button class="border-2 border-purple-700 text-purple-700 font-bold py-2 px-6">BACK</button></nuxt-link>
        <nuxt-link to="/loading"><button class="bg-purple-700 text-white font-bold py-2 px-6">CONTINUE</button></nuxt-link>
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
    this.$router.push('/upload');
  },
  data() {
    return {
      dragging: false,
      uploadedFile: null,  // To store the uploaded file
    };
  },
  methods: {
    // Handle the file drop
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

    // Check if the uploaded file is valid
    isFileValid(file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return validTypes.includes(file.type);
    },

    // Remove the uploaded file
    removeFile() {
      this.uploadedFile = null;
    },

    // Handle Google Drive button click
    handleGoogleDrive() {
      console.log("Google Drive button clicked");
      // Add Google Drive integration logic
    },
  },
};
</script>

<style scoped>
/* Add any custom styles */
</style>
