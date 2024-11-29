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
            <nuxt-link to="/template">SELECT TEMPLATE</nuxt-link>
          </a>
        </div>
        <div class="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img src="@/assets/landingmanimage.png" alt="Hero Image" class="max-w-full h-auto" />
        </div>
      </div>
    </section>


<!-- pagination section of template showing -->


<section class="py-16 bg-white text-center">
  <h2 class="text-3xl font-bold text-gray-800 mb-4">SOME TEMPLATE CATEGORIES</h2>
  <p class="text-gray-600 mb-6">
    Win over employers and recruiters by using one of our professionally-designed resume templates. Download PDF.
  </p>
  <button class="px-6 py-3 bg-purple-600 text-white rounded-md mb-10">SELECT TEMPLATE</button>

  <!-- Template Cards Container -->
  <div id="template-container" class="flex justify-center items-center space-x-6 mb-10">
    <!-- Dynamically Rendered Template Cards (only images) -->
    <div v-for="(template, index) in templatesToShow" :key="index" class="w-64">
      <div class="w-full h-96 bg-gray-200 rounded-lg mb-4 flex justify-center items-center">
        <!-- Placeholder for CV template image -->
        <img :src="template.image" alt="CV Template Image" class="w-full h-full object-cover rounded-lg">
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <div class="flex justify-center space-x-2 mt-4">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      :class="{
        'bg-purple-600': currentPage === page,
        'bg-gray-300': currentPage !== page
      }"
      class="w-4 h-4 rounded-full"
    ></button>
  </div>
</section>

  <!-- How it works -->
  <section class="py-12 mt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold">How It Works Section</h2>
          <p class="text-gray-500 mt-2">Add your unique details, skills, and career highlights.</p>
        </div>
        <div class="max-w-4xl mx-auto mt-8">
          <div class="flex justify-center">
            <img src="@/assets/howitwork.png" alt="How It Works" class="rounded-lg" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
            <div>
              <h3 class="font-semibold text-lg">Choose Your Template</h3>
              <p class="text-gray-500 mt-2">Select from a wide range of professionally designed templates that fit your style and industry.</p>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Customize Your Portfolio</h3>
              <p class="text-gray-500 mt-2">Use our drag-and-drop editor to easily add your projects, skills, testimonials, and more. No coding required.</p>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Publish & Share</h3>
              <p class="text-gray-500 mt-2">Launch your portfolio with a single click. Share it via a unique link or download it as a PDF to include in applications.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ai powered code  -->
<section>
      <div class="bg-white p-10 max-w-4xl mx-auto">
    <!-- Header Section -->
    <div class="text-center mb-10">
      <h1 class="text-2xl font-bold">Create Your AI-Powered Video CV in Minutes</h1>
      <p class="text-md text-gray-500 mt-2">Stand out with a personalized video resume powered by AI. Let your personality shine through!</p>
      <button class="mt-6 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all">
        START RECORDING NOW
      </button>
    </div>

    <!-- CV and Video Section -->
    <div class="grid grid-cols-2 gap-4 justify-center items-center border-2 border-gray-300 p-4 rounded-lg shadow-md">
      <!-- CV Preview Section -->
      <div>
        <img src="@/assets/tem1.png" alt="CV Preview" class="w-full max-w-xs" />
      </div>

      <!-- Video Preview Section -->
      <div class="relative">
        <img src="@/assets/man.png" alt="Video Preview" class="w-full max-w-xs" />
        <button class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
   

  <!-- empowered jb search -->
  <section>
  <div class="bg-white py-10">
    <!-- Header Section -->
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-4">
        Empower Your Job Search with Effortless CV Creation
      </h1>
      <p class="text-lg mb-8">
        Create professional CVs in minutes, enhance your applications with AI, and land your dream job faster.
      </p>
    </div>

    <!-- Features Section -->
    <div class="flex justify-center space-x-8">
      <!-- Feature 1 -->
      <div class="text-center max-w-xs">
        <div class="border border-gray-300 h-48 flex items-center justify-center mb-4">
          <!-- Placeholder for the image or icon -->
          <div class="w-24 h-24 bg-gray-200"></div>
        </div>
        <h2 class="font-semibold text-lg mb-2">Time Efficiency</h2>
        <p class="text-gray-600">
          Create a polished, professional CV in minutes with our easy-to-use platform.
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="text-center max-w-xs">
        <div class="border border-gray-300 h-48 flex items-center justify-center mb-4">
          <!-- Placeholder for the image or icon -->
          <div class="w-24 h-24 bg-gray-200"></div>
        </div>
        <h2 class="font-semibold text-lg mb-2">User-Friendly</h2>
        <p class="text-gray-600">
          Get real-time feedback to help you refine your CV until it's perfect.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="text-center max-w-xs">
        <div class="border border-gray-300 h-48 flex items-center justify-center mb-4">
          <!-- Placeholder for the image or icon -->
          <div class="w-24 h-24 bg-gray-200"></div>
        </div>
        <h2 class="font-semibold text-lg mb-2">AI-Powered Suggestions</h2>
        <p class="text-gray-600">
          Create a polished, professional CV in minutes with our easy-to-use platform.
        </p>
      </div>
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
// import { auth, googleProvider, facebookProvider, appleProvider } from '~/plugins/firebaseConfig.js';


export default {
  name: "LandingPage",
  mounted() {
    this.$router.push('/landingpage');
  },
  data() {
    return {
      templates: [
        { image: "/tem1.png" },
        { image: "/cv-template-2.png" },
        { image: "/cv-template-3.png" },
        { image: "/cv-template-4.png" },
        { image: "/cv-template-5.png" },
        { image: "/cv-template-1.png" },
        { image: "/cv-template-2.png" },
        { image: "/cv-template-3.png" },
        { image: "/cv-template-4.png" },
        { image: "/cv-template-5.png" },
        { image: "/cv-template-1.png" },
        { image: "/cv-template-2.png" },
        { image: "/cv-template-3.png" },
        { image: "/cv-template-4.png" },
        { image: "/cv-template-5.png" },
        { image: "/cv-template-5.png" },


        // Add more template images as needed
      ],
      templatesPerPage: 4, // Show 3 templates per page
      currentPage: 1,
    };
  },
  computed: {
    // Calculate the templates to display on the current page
    templatesToShow() {
      const start = (this.currentPage - 1) * this.templatesPerPage;
      return this.templates.slice(start, start + this.templatesPerPage);
    },
    // Calculate total number of pages based on templatesPerPage
    totalPages() {
      return Math.ceil(this.templates.length / this.templatesPerPage);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
/* Custom styles can be added here */
</style>
