<template>
<section id='creations'>
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-3xl text-center uppercase md:text-left md:text-5xl">
                    Our Themes
                </h2>
                <button className=" hidden md:block">
                    see all
                </button>
            </div>

            <div className="items-container">
                <div className="group relative overflow-hidden md:w-1/4">
                    <img src="../../../images/blood-bowl-desktop.jpeg" alt="blood-bowl" class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/blood-bowl-mobile.jpeg" alt="blood-bowl" class='md:hidden w-full'>
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        Blood Bowl
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <img src="../../../images/40k-desktop.jpeg" alt="blood-bowl" class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/40k-mobile.jpeg" alt="blood-bowl" class='md:hidden w-full'>
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        40K
                    </h5>
                </div>

                <div className="group relative overflow-hidden md:w-1/4">
                    <img src="../../../images/magic-desktop.jpg" alt="blood-bowl" class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/magic-mobile.jpg" alt="blood-bowl" class='md:hidden w-full'>
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        Magic
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <img src="../../../images/stratego-desktop.png" alt="blood-bowl" class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/stratego-mobile.png" alt="blood-bowl" class='md:hidden w-full'>
                    <div className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200"></div>
                    <h5 className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        Others
                    </h5>
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-10 mb-10 mx-6 md:hidden">
            <button className="btn w-full md:hidden">see all</button>
        </div>
    </section>
</template>
<script>
    import { ref } from 'vue';
    export default {
        setup(){
            const isOpen = ref(false);

            return {
                isOpen,
            }
        }
    }
</script>