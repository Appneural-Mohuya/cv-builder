<template>
  <div>
    <!-- Purple background with icons -->
    <header class="bg-purple-800 p-4 flex justify-end items-center">
      <div class="flex space-x-4">
        <a href="#">
          <img src="@/assets/facebook.png" alt="Facebook" class="w-6 h-6" />
        </a>
        <a href="#">
          <img src="@/assets/apple.png" alt="Apple" class="w-6 h-6" />
        </a>
        <a href="#">
          <img src="@/assets/google.png" alt="Google" class="w-6 h-6" />
        </a>
      </div>
    </header>

    <!-- White background with text and sign in -->
    <section class="bg-white p-4 flex justify-between items-center">
      <div class="flex items-center">
        <div class="bg-orange-500 w-4 h-4 mr-2"></div>
        <h1 class="text-purple-800 text-xl font-bold">ALIVE CV</h1>
      </div>
      <a href="#" class="text-purple-800 font-bold"><nuxt-link to="/login">Sign in</nuxt-link></a>
    </section>

    <!-- Hero Section -->
    <section class="py-20 bg-white flex items-center">
      <div class="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl font-bold text-black leading-tight mb-4">
            CREATE A PROFESSIONAL CV IN MINUTES – FAST, EASY, AND FREE!
          </h1>
          <p class="text-lg text-gray-600 mb-6">
            Build your CV with customizable templates, real-time previews, and expert suggestions.
          </p>
          <a href="#" class="bg-purple-700 text-white px-8 py-3 font-semibold rounded-md hover:bg-purple-800 transition">
            SELECT TEMPLATE
          </a>
        </div>
        <div class="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img src="@/assets/landingmanimage.png" alt="Hero Image" class="max-w-full h-auto" />
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
        <h2 class="text-2xl font-bold text-black mb-4 lg:mb-0">
          All the Tools You Need to Craft a Standout CV
        </h2>
        <a href="#" class="bg-purple-700 text-white px-8 py-3 font-semibold rounded-md hover:bg-purple-800 transition">
          SELECT TEMPLATE
        </a>
      </div>
    </section>

    <!-- Grid Section After Hero -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border border-purple-300">
          <!-- Card 1 -->
          <div class="flex border p-6 rounded-lg">
            <div class="flex-shrink-0">
              <img src="@/assets/real.png" alt="Real-Time CV Preview Icon" class="h-12 w-12" />
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Real-Time CV Preview</h4>
              <p class="mt-2 text-base text-gray-500">
                Get instant visual feedback with our real-time CV preview panel, ensuring your document looks perfect before downloading.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex border p-6 rounded-lg">
            <div class="flex-shrink-0">
              <img src="@/assets/smart.png" alt="Smart Suggestions Icon" class="h-12 w-12" />
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Smart Suggestions</h4>
              <p class="mt-2 text-base text-gray-500">
                Leverage AI to help you craft the perfect bullet points, highlight key achievements, and suggest relevant skills.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="flex border p-6 rounded-lg">
            <div class="flex-shrink-0">
              <img src="@/assets/flex.png" alt="Flexible Export Options Icon" class="h-12 w-12" />
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Flexible Export Options</h4>
              <p class="mt-2 text-base text-gray-500">
                Download your CV in multiple formats—PDF, DOCX, and more—to fit any application requirement.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="flex border p-6 rounded-lg">
            <div class="flex-shrink-0">
              <img src="@/assets/xxx.png" alt="Mobile-Friendly Design Icon" class="h-12 w-12" />
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Mobile-Friendly Design</h4>
              <p class="mt-2 text-base text-gray-500">
                Our responsive design ensures that you can create or edit your CV from any device, whether you’re on a desktop, tablet, or phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- After Grid Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold mb-8">Create Your CV the Way That Suits You Best</h1>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12">
          <!-- Image on the Left -->
          <div class="w-full lg:w-1/2">
            <img src="@/assets/pic1.png" alt="CV Creation Options" class="mx-auto" />
          </div>

          <!-- Text and Button on the Right -->
          <div class="w-full lg:w-1/2 text-left">
            <ul class="space-y-4">
              <li><strong>Open Text Input:</strong> Fill in your details manually with guided prompts.</li>
              <li><strong>Interactive Chat:</strong> Let our AI chat assistant guide you step-by-step.</li>
              <li><strong>Search:</strong> Find job titles, skills, and qualifications instantly.</li>
              <li><strong>Upload Your Document:</strong> Start with an existing CV and refine it.</li>
              <li><strong>URL Input:</strong> Import details from LinkedIn or other profile links.</li>
            </ul>
            <div class="mt-8">
              <button class="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">Select Template</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-black py-8">
      <div class="container mx-auto text-center text-white">
        <!-- Navigation Links -->
        <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          <a href="#" class="hover:underline">About Us</a>
          <span class="hidden md:inline-block">|</span>
          <a href="#" class="hover:underline">Contact Us</a>
          <span class="hidden md:inline-block">|</span>
          <a href="#" class="hover:underline">Privacy Policy</a>
          <span class="hidden md:inline-block">|</span>
          <a href="#" class="hover:underline">Terms & Conditions</a>
        </div>

        <!-- Social Media Icons -->
        <div class="flex justify-center space-x-6 mb-6">
          <!-- Icons similar to the provided SVG icons can be directly embedded here -->
          <a href="#" class="text-white hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <!-- Facebook Icon SVG -->
              <path d="..."></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <!-- Apple Icon SVG -->
              <path d="..."></path>
            </svg>
          </a>
          <a href="#" class="text-white hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <!-- Google Icon SVG -->
              <path d="..."></path>
            </svg>
          </a>
        </div>

        <!-- Footer Text -->
        <p class="text-white text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    this.$router.push('/landingpage');
  }
};
</script>


<style scoped>
/* Custom styles can be added here */
</style>
