<template>
    <base-page>
        <div class="flex flex-col items-center">
            <h2 class="font-mono my-5 text-4xl font-bold">Join The Comunity!</h2>

            <form class="flex flex-col items-center w-full">
                <input type="text"
                    class="w-full p-6 border boerder-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-4 max-w-md"
                    placeholder="Username" autocomplete />

                <input type="email"
                    class="w-full p-6 border boerder-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-4 max-w-md"
                    placeholder="Email" autocomplete />

                <input type="password"
                    class="w-full p-6 border boerder-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-4 max-w-md"
                    placeholder="Password" autocomplete />

                <input type="password"
                    class="w-full p-6 border boerder-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-4 max-w-md"
                    placeholder="Confirm password" autocomplete=false />

                <div class='mt-4'>
                    <input type="checkbox" class='mx-2'>
                    <a href="#" class='text-blue-700'>Community Guidelines</a>
                </div>

                <button
                    class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-sm px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 mt-4 mb-8 max-w-md">
                    <span>Submit</span>
                </button>
            </form>

            <router-link to='/login'>
                <p class="max-w-sm mb-12 font-sans font-light text-blue-700">
                    Login Instead
                </p>
            </router-link>
        </div>

    </base-page>
</template>

<script>
import { ref } from 'vue';
import BasePage from '@/components/BasePage.vue';
export default {
    components: {
        BasePage,
    },
    setup() {
        const content = ref('Join Us Form');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>