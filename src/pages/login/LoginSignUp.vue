<template>
  <base-page>

    <div class="global-container flex flex-col items-center justify-center ">
      <h2 class="font-mono my-5 text-4xl font-bold">Login</h2>
      <div className="separator my-6 border-b border-b-gray-200 h-2 w-2/4 max-w-md"></div>

      <form class='flex flex-col items-center w-full'>
        <input type="text"
          class="w-full p-6 border boerder-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-4 max-w-md"
          placeholder="Enter your email" />
        <input type="password"
          class="w-full p-6 border boerder-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-4 max-w-md"
          placeholder="Enter your password" />
        <button
          class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-sm px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 mt-8  max-w-md">
          <span>Submit</span>
        </button>
      </form>

      <div className="separator my-6 border-b border-b-gray-200 h-2 w-2/4 max-w-md"></div>
      <router-link to='/joinUs'>
        <p class="max-w-sm mb-12 font-sans font-light text-blue-700">
          Sign Up Instead
        </p>
      </router-link>
    </div>

  </base-page>
</template>

<script>
import { ref } from 'vue';
import BasePage from '@/components/BasePage.vue';
export default {
  components: { BasePage, },
  setup() {
    const content = ref('Login');

    return {
      content,
    }
  }
}
</script>

<style scoped></style>