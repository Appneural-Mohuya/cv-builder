<template>
    <div class="bg-white font-sans">
  
      <!-- Header Section -->
      <header class="p-4 flex items-center">
      <div class="flex items-center">
        <div class="bg-orange-500 w-8 h-8 mr-2"></div>
        <span class="text-xl font-bold text-purple-700">ALIVE CV</span>
      </div>
    </header>
  
      <!-- Main Content Section -->
      <main class="max-w-screen-xl mx-auto px-4">
        <!-- Title Section -->
        <section class="text-center my-8">
          <h1 class="text-2xl font-bold">Here is the recommended templates for you!</h1>
          <p class="text-gray-600">You can change your template later</p>
        </section>
  
        <!-- Filters Section -->
        <section class="flex flex-wrap justify-center gap-4 mb-8">
          <select class="border border-gray-300 rounded-lg p-2">
            <option>Industry</option>
            <option>Industry1</option>
            <option>Industry2</option>
            <option>Industry3</option>
          </select>
          <select class="border border-gray-300 rounded-lg p-2">
            <option>Company</option>
            <option>Company1</option>
            <option>Company2</option>
            <option>Company3</option>
            <option>Company4</option>
          </select>
          <select class="border border-gray-300 rounded-lg p-2">
            <option>Layout</option>
          </select>
          <select class="border border-gray-300 rounded-lg p-2">
            <option>Photo Option</option>
          </select>
          <select class="border border-gray-300 rounded-lg p-2">
            <option>Experience</option>
          </select>
          <div class="flex items-center gap-2">
            <span>Color:</span>
            <div class="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div class="w-6 h-6 bg-gray-500 rounded-full"></div>
            <div class="w-6 h-6 bg-blue-600 rounded-full"></div>
            <div class="w-6 h-6 bg-green-600 rounded-full"></div>
            <div class="w-6 h-6 bg-red-600 rounded-full"></div>
          </div>
        </section>
  
        <!-- Showing Templates -->
        <section class="text-center mb-4">
          <p class="text-lg">Showing all templates (18)</p>
        </section>
  
        <!-- Templates Grid Section -->
        <section>
          <div class="grid grid-cols-3 gap-6">
            <!-- Template Card -->
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <!-- Repeat the above div block for additional templates -->
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem1.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
            <nuxt-link to="/user">
              <div class="border border-gray-300 rounded-lg flex flex-col items-center justify-center h-64">
                <img src="@/assets/tem2.png" alt="Template Image" class="w-40 h-48 object-cover mb-2">
                <button class="bg-purple-700 text-white py-2 px-4 rounded-lg">Select Template</button>
              </div>
            </nuxt-link>
          </div>
      
        </section>
      </main>
  
      <!-- Footer Section -->
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
    name: 'TemplateSelection',
    mounted() {
    this.$router.push('/template');
  }
  }
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  