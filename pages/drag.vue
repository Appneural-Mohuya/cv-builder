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
    <main class="flex justify-center items-center h-full">
      <div class="flex w-3/4 space-x-4">
        <!-- Left Box for Upload Area -->
        <div
          class="w-1/2 border-2 border-purple-700 flex items-center justify-center bg-gray-100"
        >
          <!-- Display uploaded image -->
          <img src="@/assets/tem1.png" alt="Upload Preview" class="object-contain w-full h-full">
        </div>

        <!-- Arrow in between -->
        <div class="flex items-center justify-center">
          <svg
            class="w-8 h-8 text-purple-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.293 7.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L17.586 13H3a1 1 0 110-2h14.586l-3.293-3.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <!-- Right Box for CV Preview -->
        <div
          class="w-1/2 border-2 border-purple-700 flex items-center justify-center bg-gray-100"
        >
          <!-- Display CV image in the right section -->
          <img src="@/assets/tem2.png" alt="CV Preview" class="object-contain w-full h-full">
        </div>
      </div>
    </main>

    <!-- Action Buttons -->
    <div class="flex justify-between items-center px-8 pb-8">
      <nuxt-link to="/upload"><button class="border-2 border-purple-700 text-purple-700 font-bold py-2 px-6">BACK</button></nuxt-link>
      <nuxt-link to="/uploadcvform">
        <button class="bg-purple-700 text-white font-bold py-2 px-6">CONTINUE</button>
      </nuxt-link>
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
        <div>© 2024 All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadCV',
  mounted() {
    this.$router.push('/drag');
  }
};
</script>

<style scoped>
/* Set both image containers to the same height */
main .flex {
  height: 500px; /* Equal height for both the left and right sections */
}

img {
  object-fit: cover; /* Ensure the images are scaled to cover the available space */
}
</style>
