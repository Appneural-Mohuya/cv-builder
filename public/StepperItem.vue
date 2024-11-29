<template>
    <div class="flex items-center space-x-4">
      <div
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center',
          active ? 'bg-orange-500' : 'bg-white text-purple-800 border border-purple-800',
        ]"
      >
        {{ step }}
      </div>
      <div :class="['font-semibold', active ? 'text-orange-500' : 'text-white']">
        {{ label }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      step: {
        type: Number,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  