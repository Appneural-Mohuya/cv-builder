<template>
    <div class="bg-white text-gray-900 flex flex-col min-h-screen">
      <!-- Header -->
      <header class="p-4 flex items-center">
        <div class="flex items-center">
          <div class="bg-orange-500 w-8 h-8 mr-2"></div>
          <span class="text-xl font-bold text-purple-700">ALIVE CV</span>
        </div>
      </header>
  
      <!-- Main Section -->
      <div class="flex">
      <!-- Left Side: Stepper -->
      <aside class="w-1/6 bg-gray-800 text-white h-screen p-6 sticky top-0">
        <div class="space-y-6">
          <!-- Circular Progress -->
          <div class="flex flex-col items-center">
            <div class="relative">
              <svg class="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  class="text-gray-600"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="text-orange-500"
                  stroke-dasharray="80, 100"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-xl font-semibold">80%</span>
              </div>
            </div>
            <h2 class="mt-2 font-semibold text-lg">Completed</h2>
          </div>
  
          <!-- Steps Navigation -->
          <nav class="space-y-4 mt-6">
            <a
              href="#header"
              @click="setActiveStep(1)"
              :class="{
                'text-orange-400 font-semibold': activeStep === 1,
                'text-white': activeStep !== 1
              }"
              class="block text-lg"
            >
              1. Header
            </a>
            <a
              href="#experience"
              @click="setActiveStep(2)"
              :class="{
                'text-orange-400 font-semibold': activeStep === 2,
                'text-white': activeStep !== 2
              }"
              class="block text-lg"
            >
              2. Experience
            </a>
            <a
              href="#education"
              @click="setActiveStep(3)"
              :class="{
                'text-orange-400 font-semibold': activeStep === 3,
                'text-white': activeStep !== 3
              }"
              class="block text-lg"
            >
              3. Education
            </a>
            <a
              href="#skills"
              @click="setActiveStep(4)"
              :class="{
                'text-orange-400 font-semibold': activeStep === 4,
                'text-white': activeStep !== 4
              }"
              class="block text-lg"
            >
              4. Skills
            </a>
            <a
              href="#summary"
              @click="setActiveStep(5)"
              :class="{
                'text-orange-400 font-semibold': activeStep === 5,
                'text-white': activeStep !== 5
              }"
              class="block text-lg"
            >
              5. Summary
            </a>
            <a
              href="#additional"
              @click="setActiveStep(6)"
              :class="{
                'text-orange-400 font-semibold': activeStep === 6,
                'text-white': activeStep !== 6
              }"
              class="block text-lg"
            >
              6. Additional Details
            </a>
          </nav>
        </div>
      </aside>
  
  
        <!-- Middle Section: Form -->
   <div class="flex-1 overflow-y-auto bg-gray-100 p-10">
        <section>
          <!-- Back and Continue Buttons -->
          <div class="flex justify-between mb-6">
            <nuxt-link to="/user">  <button class="border border-purple-600 text-purple-600 px-8 py-2 rounded">BACK</button></nuxt-link>
              <nuxt-link to="/preview">  <button class="bg-purple-700 text-white px-8 py-2 rounded">CONTINUE</button></nuxt-link>
            </div>
          </section>
        <section id="header">
          <div v-if="activeStep === 1">
          <!-- Form Section -->
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold">Let’s Start With Header</h2>
            <p class="text-gray-500 mb-6">Fill out the basic information for your CV</p>

  <!-- image upload option -->
  
  <div class="flex items-center space-x-4 mb-6">
    <!-- Preview box for image -->
    <div class="border border-gray-300 w-24 h-24 flex items-center justify-center">
      <img v-if="imagePreview" :src="imagePreview" alt="Preview" class="w-full h-full object-cover" />
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H4z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- Upload button -->
    <div>
      <p class="text-gray-700">Add photo to CV</p>
      <button class="bg-purple-700 text-white px-4 py-2 mt-1 rounded" @click="triggerFileInput">ADD A PHOTO</button>
      <!-- Hidden file input -->
      <input type="file" ref="fileInput" accept="image/jpeg, image/png" @change="onFileChange" class="hidden" />
    </div>
  </div>
  
            <!-- Form Fields -->
            <div class="grid grid-cols-2 gap-6 mb-6">
              <!-- First Name -->
              <div>
                <label class="block text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name ..."
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Last Name -->
              <div>
                <label class="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name ..."
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- City -->
              <div>
                <label class="block text-gray-700">City</label>
                <input
                  type="text"
                  value="New Delhi"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Country -->
              <div>
                <label class="block text-gray-700">Country</label>
                <input
                  type="text"
                  value="India"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Phone Number -->
              <div>
                <label class="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value="+917053563472"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Email -->
              <div>
                <label class="block text-gray-700">Email</label>
                <input
                  type="email"
                  value="sdknfj23@gmail.com"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Pin Code -->
              <div>
                <label class="block text-gray-700">Pin Code</label>
                <input
                  type="text"
                  value="110034"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
            </div>
          </div>
          </div>
        </section>
  
        <!-- Experience Section -->
    <section id="experience">
    <div v-if="activeStep === 2">
     <div class="bg-gray-100 py-12">
      <div class="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full">
        <div class="min-h-screen bg-gray-100 py-10 px-6">
          <!-- Form Section -->
          <div class="max-w-4xl mx-auto">
            <!-- Heading -->
            <h2 class="text-3xl font-bold mb-2">Let’s talk about your Experience</h2>
            <p class="text-gray-500 mb-6">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
  
            <!-- Form Fields -->
            <div class="grid grid-cols-2 gap-6 mb-6">
              <!-- Job Title -->
              <div>
                <label class="block text-gray-700">Job Title</label>
                <input
                  type="text"
                  v-model="jobTitle"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Employer -->
              <div>
                <label class="block text-gray-700">Employer</label>
                <input
                  type="text"
                  v-model="employer"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- City -->
              <div>
                <label class="block text-gray-700">City</label>
                <input
                  type="text"
                  v-model="city"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Country -->
              <div>
                <label class="block text-gray-700">Country</label>
                <input
                  type="text"
                  v-model="country"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- Start Date -->
              <div>
                <label class="block text-gray-700">Start Date</label>
                <input
                  type="text"
                  v-model="startDate"
                  placeholder="Select Date"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
  
              <!-- End Date -->
              <div>
                <label class="block text-gray-700">End Date</label>
                <input
                  type="text"
                  v-model="endDate"
                  placeholder="Select Date"
                  class="mt-1 block w-full border-b-2 border-purple-600 focus:outline-none focus:border-purple-700"
                />
              </div>
            </div>
  
            <!-- Currently Working Checkbox -->
            <div class="mb-6">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  v-model="currentlyWorking"
                  class="form-checkbox h-5 w-5 text-purple-600 border-gray-300 rounded"
                />
                <span class="ml-2 text-gray-700">I am Currently Working Here</span>
              </label>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
    </section>
    
  
    <!-- Education Section -->
  <section id="education">
    <div v-if="activeStep === 3">
      <div class="bg-gray-100 py-12">
        <!-- Education Form -->
        <div class="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full">
          <h1 class="text-3xl font-bold mb-2">Fill details about your Education</h1>
          <p class="text-gray-500 mb-6">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
  
          <!-- Education Form -->
          <form @submit.prevent="submitEducationForm">
            <!-- School Name -->
            <div class="mb-4">
              <label for="schoolName" class="block text-gray-700 font-semibold mb-2">School Name</label>
              <input
                v-model="education.schoolName"
                type="text"
                id="schoolName"
                name="schoolName"
                placeholder="School Name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
  
            <!-- School Location -->
            <div class="mb-4">
              <label for="schoolLocation" class="block text-gray-700 font-semibold mb-2">School Location</label>
              <input
                v-model="education.schoolLocation"
                type="text"
                id="schoolLocation"
                name="schoolLocation"
                placeholder="New Delhi"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
  
            <!-- Degree -->
            <div class="mb-4">
              <label for="degree" class="block text-gray-700 font-semibold mb-2">Degree</label>
              <select
                v-model="education.degree"
                id="degree"
                name="degree"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>
  
            <!-- Field of Study -->
            <div class="mb-4">
              <label for="fieldOfStudy" class="block text-gray-700 font-semibold mb-2">Field of Study</label>
              <input
                v-model="education.fieldOfStudy"
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                placeholder="Field of Study"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
  
            <!-- Graduation Month and Year -->
            <div class="mb-4 flex space-x-4">
              <div class="w-1/2">
                <label for="graduationMonth" class="block text-gray-700 font-semibold mb-2">Graduation Month</label>
                <select
                  v-model="education.graduationMonth"
                  id="graduationMonth"
                  name="graduationMonth"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Month</option>
                  <option value="jan">January</option>
                  <option value="feb">February</option>
                  <option value="mar">March</option>
                  <!-- Add more months as needed -->
                </select>
              </div>
  
              <div class="w-1/2">
                <label for="graduationYear" class="block text-gray-700 font-semibold mb-2">Graduation Year</label>
                <select
                  v-model="education.graduationYear"
                  id="graduationYear"
                  name="graduationYear"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Year</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <!-- Add more years as needed -->
                </select>
              </div>
            </div>
  
            <!-- Still Enrolled Checkbox -->
            <div class="mb-6">
              <label class="inline-flex items-center">
                <input
                  v-model="education.stillEnrolled"
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-purple-600"
                  id="stillEnrolled"
                  name="stillEnrolled"
                />
                <span class="ml-2 text-gray-700">I am still enrolled</span>
              </label>
            </div>
  
            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>
  </section>
      <!-- Skills Form -->
  <section id="skills">
  <div v-if="activeStep === 4">
      <div class="max-w-4xl w-full p-8">
        <h1 class="text-3xl font-bold mb-2">Fill detail about your Skill</h1>
        <p class="text-gray-500 mb-6">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
  
        <div class="grid grid-cols-2 gap-6">
          <!-- Left Section: Skill Search -->
          <div class="border-2 border-purple-600 rounded-md p-4">
            <div class="mb-4">
              <label for="searchTitle" class="block text-gray-700 font-semibold mb-2">Search Title here</label>
              <div class="relative">
                <input
                  v-model="skills.searchTitle"
                  type="text"
                  id="searchTitle"
                  name="searchTitle"
                  placeholder="Search Title here"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <button class="absolute right-3 top-2.5 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-3.5-3.5m0 0A5 5 0 1115 15a5 5 0 01-3.5-1.5z" />
                  </svg>
                </button>
              </div>
            </div>
  
            <div class="space-y-3 overflow-y-auto h-40">
              <div
                v-for="(skill, index) in skills.skillList"
                :key="index"
                class="flex items-center"
              >
                <button class="text-orange-500 mr-2">+</button>
                <input
                  v-model="skill.name"
                  type="text"
                  placeholder="Skill Title"
                  class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>
  
            <div class="mt-4 text-center text-purple-600 cursor-pointer">
              <a href="#">See More</a> <span class="ml-2">▼</span>
            </div>
          </div>
  
          <!-- Right Section: Skill Editor -->
          <div class="border-2 border-purple-600 rounded-md p-4">
            <div class="mb-4 flex space-x-4 text-gray-700">
              <button class="font-bold">B</button>
              <button class="italic">I</button>
              <button class="underline">U</button>
              <button class="list-disc">•</button>
            </div>
  
            <textarea
              v-model="skills.skillText"
              id="skills"
              name="skills"
              rows="10"
              placeholder="Type Skills Here..."
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    </section>
  
  <section id="summary">
  <div v-if="activeStep === 5">
      <!-- Summary Form -->
      <div class="max-w-4xl w-full p-8">
        <h1 class="text-3xl font-bold mb-2">Fill detail Summary</h1>
        <p class="text-gray-500 mb-6">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
  
        <div class="grid grid-cols-2 gap-6">
          <!-- Left Section: Skill Search -->
          <div class="border-2 border-purple-600 rounded-md p-4">
            <div class="mb-4">
              <label for="searchTitle" class="block text-gray-700 font-semibold mb-2">Search Title here</label>
              <div class="relative">
                <input
                  v-model="skills.searchTitle"
                  type="text"
                  id="searchTitle"
                  name="searchTitle"
                  placeholder="Search Title here"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <button class="absolute right-3 top-2.5 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-3.5-3.5m0 0A5 5 0 1115 15a5 5 0 01-3.5-1.5z" />
                  </svg>
                </button>
              </div>
            </div>
  
            <div class="space-y-3 overflow-y-auto h-40">
              <div
                v-for="(skill, index) in skills.skillList"
                :key="index"
                class="flex items-center"
              >
                <button class="text-orange-500 mr-2">+</button>
                <input
                  v-model="skill.name"
                  type="text"
                  placeholder="Skill Title"
                  class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>
  
            <div class="mt-4 text-center text-purple-600 cursor-pointer">
              <a href="#">See More</a> <span class="ml-2">▼</span>
            </div>
          </div>
  
          <!-- Right Section: Skill Editor -->
          <div class="border-2 border-purple-600 rounded-md p-4">
            <div class="mb-4 flex space-x-4 text-gray-700">
              <button class="font-bold">B</button>
              <button class="italic">I</button>
              <button class="underline">U</button>
              <button class="list-disc">•</button>
            </div>
  
            <textarea
              v-model="skills.skillText"
              id="skills"
              name="skills"
              rows="10"
              placeholder="Type Skills Here..."
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            ></textarea>
          </div>
        </div>
      </div>
  </div>
  </section>
  
  
  
    <!-- activities sections -->
  <section id="additional">
  <div v-if="activeStep === 6">
  <div class="bg-gray-100 py-12">
      <div class="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full">
        <div class="min-h-screen bg-gray-100 py-10 px-6">
          <div class="max-w-3xl mx-auto">
            <!-- Header Section -->
            <h1 class="text-4xl font-bold mb-2">Fill Additional Details</h1>
            <p class="text-lg text-gray-600 mb-6">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
  
            <!-- Activities Section -->
            <ActivitySection title="Activities" />
    <div class="text-4xl font-bold mb-2">
      <div class="text-lg text-gray-600 mb-6">
        <div class="border-2 border-purple-600 rounded-lg p-5">
          <!-- Title Row -->
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl font-semibold text-gray-900">{{ title }}</h2>
            <svg
              class="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
  
          <!-- Subtext -->
          <p class="text-gray-600 mb-4">
            Show that you're a well-rounded individual! This highlights your ability to balance different aspects of your
            life.
          </p>
  
          <!-- Form -->
          <div class="relative border-2 border-gray-300 p-4 rounded-lg">
            <!-- Toolbar -->
            <div class="flex space-x-2 mb-4">
              <button class="font-bold text-xl text-gray-500 hover:text-black">B</button>
              <button class="italic text-xl text-gray-500 hover:text-black">I</button>
              <button class="underline text-xl text-gray-500 hover:text-black">U</button>
              <button class="text-xl text-gray-500 hover:text-black">•</button>
            </div>
  
            <!-- Text Area -->
            <textarea
              class="w-full h-32 p-2 border-none focus:ring-0 text-gray-700"
              placeholder="Type Summary Here..."
            ></textarea>
  
            <!-- Enhance With AI button -->
            <button
              class="absolute top-2 right-2 bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1"
            >
              <span>Enhance With AI</span>
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m4 4h-1v-4h-1m-4 0h.01M12 18h.01M12 6v6m-6 6h12M6 12h12"
                ></path>
              </svg>
            </button>
  
            <!-- Done Checkmark -->
            <svg
              class="absolute bottom-4 right-2 w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  
            <!-- Awards and Honor Section -->
            <ActivitySection title="Awards and Honor" />
    <div class="text-4xl font-bold mb-2">
      <div class="text-lg text-gray-600 mb-6">
        <div class="border-2 border-purple-600 rounded-lg p-5">
          <!-- Title Row -->
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl font-semibold text-gray-900">{{ title }}</h2>
            <svg
              class="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
  
          <!-- Subtext -->
          <p class="text-gray-600 mb-4">
            Show that you're a well-rounded individual! This highlights your ability to balance different aspects of your
            life.
          </p>
  
          <!-- Form -->
          <div class="relative border-2 border-gray-300 p-4 rounded-lg">
            <!-- Toolbar -->
            <div class="flex space-x-2 mb-4">
              <button class="font-bold text-xl text-gray-500 hover:text-black">B</button>
              <button class="italic text-xl text-gray-500 hover:text-black">I</button>
              <button class="underline text-xl text-gray-500 hover:text-black">U</button>
              <button class="text-xl text-gray-500 hover:text-black">•</button>
            </div>
  
            <!-- Text Area -->
            <textarea
              class="w-full h-32 p-2 border-none focus:ring-0 text-gray-700"
              placeholder="Type Summary Here..."
            ></textarea>
  
            <!-- Enhance With AI button -->
            <button
              class="absolute top-2 right-2 bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1"
            >
              <span>Enhance With AI</span>
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m4 4h-1v-4h-1m-4 0h.01M12 18h.01M12 6v6m-6 6h12M6 12h12"
                ></path>
              </svg>
            </button>
  
            <!-- Done Checkmark -->
            <svg
              class="absolute bottom-4 right-2 w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  
            <!-- Certifications and Licenses Section -->
            <ActivitySection title="Certifications and Licenses" />
    <div class="text-4xl font-bold mb-2">
      <div class="text-lg text-gray-600 mb-6">
        <div class="border-2 border-purple-600 rounded-lg p-5">
          <!-- Title Row -->
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl font-semibold text-gray-900">{{ title }}</h2>
            <svg
              class="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
  
          <!-- Subtext -->
          <p class="text-gray-600 mb-4">
            Show that you're a well-rounded individual! This highlights your ability to balance different aspects of your
            life.
          </p>
  
          <!-- Form -->
          <div class="relative border-2 border-gray-300 p-4 rounded-lg">
            <!-- Toolbar -->
            <div class="flex space-x-2 mb-4">
              <button class="font-bold text-xl text-gray-500 hover:text-black">B</button>
              <button class="italic text-xl text-gray-500 hover:text-black">I</button>
              <button class="underline text-xl text-gray-500 hover:text-black">U</button>
              <button class="text-xl text-gray-500 hover:text-black">•</button>
            </div>
  
            <!-- Text Area -->
            <textarea
              class="w-full h-32 p-2 border-none focus:ring-0 text-gray-700"
              placeholder="Type Summary Here..."
            ></textarea>
  
            <!-- Enhance With AI button -->
            <button
              class="absolute top-2 right-2 bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1"
            >
              <span>Enhance With AI</span>
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m4 4h-1v-4h-1m-4 0h.01M12 18h.01M12 6v6m-6 6h12M6 12h12"
                ></path>
              </svg>
            </button>
  
            <!-- Done Checkmark -->
            <svg
              class="absolute bottom-4 right-2 w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  
          </div>
        
  </div>
  
  
    <!-- language sections -->
    <div class="bg-gray-100 py-12">
    <div class="flex justify-start"> <!-- Change to flex and justify-start to align left -->
      <div class="max-w-3xl"> <!-- Removed mx-auto to avoid centering -->
        <!-- Languages Section -->
        <div class="border-2 border-purple-600 rounded-lg p-5">
          <!-- Title Row -->
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl font-semibold text-gray-900">Languages</h2>
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z" clip-rule="evenodd"></path>
            </svg>
          </div>
  
          <!-- Subtext -->
          <p class="text-gray-600 mb-4">Show that you're a well-rounded individual! This highlights your ability to balance different aspects of your life.</p>
  
          <!-- Form Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(language, index) in languages" :key="index" class="relative">
              <label class="block text-gray-700 mb-2">First Language</label>
              <input
                type="text"
                v-model="language.name"
                class="w-full border border-gray-300 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Language"
              />
              <label class="block text-gray-700 mb-2">Proficiency</label>
              <input
                type="text"
                v-model="language.proficiency"
                class="w-full border border-gray-300 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Proficiency"
              />
            </div>
          </div>
  
          <!-- Add More Button -->
          <div class="mt-4">
            <button @click="addLanguage" class="text-purple-600 hover:underline flex items-center">
              <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
              </svg>
              Add more
            </button>
          </div>
        </div>
  
        <!-- Social Links Section -->
        <div class="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full mt-10">
    <div class="border-2 border-purple-600 rounded-lg p-5">
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-2xl font-semibold text-gray-900">Websites and Social Links</h2>
        <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M16.707 5.707a1 1 0 00-1.414-1.414L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7z" clip-rule="evenodd"></path>
        </svg>
      </div>

      <!-- Form Fields -->
    <div class="relative">
        <label class="block text-gray-700 mb-2">Social Link</label>
        <input
          type="text"
          v-model="socialLink"
          class="w-full border border-gray-300 p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Social Link"
        />
      </div>

      <!-- Add More Button -->
      <div class="mt-4">
        <button @click="addSocialLink" class="text-purple-600 hover:underline flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
          </svg>
          Add more
        </button>
      </div>

      <!-- Display List of Social Links -->
      <ul class="mt-4">
        <li v-for="(link, index) in socialLinks" :key="index" class="mt-2">
          {{ link }}
        </li>
      </ul>
    </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </section>
  </div>
  
        <!-- Right Side: CV Preview -->
        <aside class="w-1/5 bg-white border-l-2 border-gray-200 p-4 sticky top-0 h-screen">
          <h3 class="text-lg font-semibold">CV Preview</h3>
          <div class="mt-4">
            <img src="@/assets/tem1.png" alt="CV Preview" class="w-full mb-4" />
            <!-- Dynamic CV content preview -->
            <p class="text-lg font-bold">Mark Smith</p>
            <p class="text-gray-600">Software Developer</p>
            <!-- Additional details like experience, education, etc. can go here -->
          </div>
        </aside>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CVForm',
    mounted() {
      this.$router.push('/Form');
    },
  props: {
      title: {
        type: String,
        required: true,
      },
    },
  
    // Combine both data sections into one
    data() {
      return {
        // Items array for steps
        activeStep: 1,
        imagePreview: null, // This will hold the selected image preview
  
        // Job details
        jobTitle: 'Software developer',
        employer: 'TCS',
        city: 'New Delhi',
        country: 'India',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
  
        // Education details
        education: {
          schoolName: '',
          schoolLocation: '',
          degree: '',
          fieldOfStudy: '',
          graduationMonth: '',
          graduationYear: '',
          stillEnrolled: false,
        },
  
        // Skills section
        skills: {
          searchTitle: '',
          skillList: [{ name: '' }],
          skillText: '',
        },
  
        // Summary section
        summary: {
          text: '',
        },
  
        // Languages array with initial values
        languages: [
          { name: 'Software developer', proficiency: 'TCS' },
          { name: '', proficiency: '' }
        ],
  
        // Social links array with one empty object for initialization
        socialLink: '',  // Single social link input value
      socialLinks: [] 
      };
    },
  
    methods: {

      triggerFileInput() {
      // Trigger the hidden file input when the button is clicked
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];

      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        // Create a preview URL of the image
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid JPG or PNG image.");
      }
    },

      setActiveStep(step) {
        this.activeStep = step; // Change the active step when clicked
      },
      // Handle form submission for education
      submitEducationForm() {
        console.log(this.education);
        // Additional form submission logic can go here
      },
  
      // Add a new language to the list
      addLanguage() {
        this.languages.push({ name: '', proficiency: '' });
      },
  
      // Add a new social link to the list
      addSocialLink() {
      // Check if input is not empty before adding
      if (this.socialLink.trim()) {
        this.socialLinks.push(this.socialLink); // Add the input value to the array
        this.socialLink = ''; // Clear the input field after adding
      } else {
        alert("Please enter a valid social link.");
      }
    }
    },
  };
  </script>
  
  <style scoped>
  /* Ensure that the right CV preview remains sticky and scrolls smoothly */
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
  </style>
  