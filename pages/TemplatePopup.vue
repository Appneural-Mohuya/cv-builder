<template>
  <!-- Transparent background overlay -->
  <div class="fixed inset-0 bg-purple-900 bg-opacity-90 flex justify-center items-center z-50">
    <!-- Popup Content -->
    <div class="bg-white w-4/5 h-4/5 relative shadow-xl flex">
      
      <!-- Close Icon in Top Right Corner -->
      <button @click="$emit('close')" 
              class="absolute top-4 right-4 text-black text-3xl font-bold hover:text-purple-500 focus:outline-none">
        ✖
      </button>
      
      <!-- Left Side: Template Selection with Scrollbar -->
      <div class="w-2/5 border-r border-gray-200 overflow-y-auto p-6">
        <h2 class="text-xl font-semibold mb-4 text-purple-900">Templates</h2>
        <div class="grid grid-cols-3 gap-4">
          <!-- Template Selection Boxes -->
          <div v-for="template in templates" :key="template.id" 
               class="cursor-pointer border hover:border-purple-500 p-2 rounded-md"    
               @click="selectTemplate(template)">
            <img :src="`/assets/${template.image}`" alt="Template" 
                 class="w-full h-32 object-cover border border-gray-300">
          </div>
        </div>
      </div>

      <!-- Right Side: Template Preview -->
      <div class="w-3/5 p-6">
        <div v-if="selectedTemplate" class="flex justify-center">
          <!-- Template Preview Image -->
          <img :src="`/assets/${selectedTemplate.image}`" alt="Template Preview" 
               class="w-3/4 h-auto border border-gray-300 shadow-lg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    templates: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedTemplate: null
    };
  },
  methods: {
    selectTemplate(template) {
      this.selectedTemplate = template;
    }
  }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
