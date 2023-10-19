<template>
    <base-component>
        <p class='bg-blue-500'>{{ content || "News Feed" }}</p>
        <div class="feed relative flex flex-col items-end mb-3" v-for='feed in feeds' :key='feed.id'>
            <div class=' flex flex-col items-center md:items-start bg-gray-500 mb-1 py-2 rounded-xl'>
                <div class='flex items-center mb-1 w-full'>
                    <div class='user-img relative w-10 h-10 rounded-full bg-black ml-1'></div>

                    <p class="username relative capitalize ml-1">{{ feed.author }}:</p>
                </div>
                <div class='image-container bg-black'></div>

                <div>
                    <p class='feed-text px-2'>{{ feed.content }}</p>
                </div>
                <div class="likes-area flex" v-if='feed.likes'>
                    <div class='likes'>❤️</div>
                    <div class='likes-amount'>{{ feed.likes }}</div>
                </div>
            </div>
            <div class='comment-item relative flex flex-col items-start justify-center p-2 rounded-xl bg-gray-500 mb-1'
                v-for='comment in feed.comments' :key='comment.id'>
                <div class='flex items-center gap-2'>
                    <div class='user-img relative w-10 h-10 rounded-full bg-black ml-1'></div>
                    <p class="username relative capitalize">{{ comment.author }}:</p>
                </div>
                <div class='pl-2'>
                    <p class='comment-content relative '>{{ comment.comment }}</p>
                </div>
            </div>
        </div>
    </base-component>
</template>

<script>
import { ref } from 'vue';
import BaseComponent from '../BaseComponent.vue';
export default {
    components: { BaseComponent, },
    data() {
        return {
            feeds: [
                {
                    id: 1,
                    title: "What is Lorem Ipsum?",
                    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                    image: "",
                    author: "david",
                    comments: [
                        {
                            id: "1a",
                            comment: "wow!",
                            author: "darryn",
                        },
                        {
                            id: "2b",
                            comment: "I have seen bigger!",
                            author: "machete",
                        },
                    ],
                    likes: 3,
                },
                {
                    id: 2,
                    title: "When we use Lorem Ipsum?",
                    content: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                    image: "",
                    author: "victor",
                    comments: [
                        {
                            id: "1a",
                            comment: "how much for a couple of those?",
                            author: "aaron",
                        },
                        {
                            id: "2b",
                            comment: "I have one for free, if you want it... but its full of hairs",
                            author: "pontus",
                        },
                    ],
                    likes: 1,
                }
            ]
        }
    },
    setup() {
        const content = ref('Feed component');

        return {
            content,
        }
    }
}
/*
    <div class='news-container max-h-screen'>
        

            

               



        </div>
    </div>
*/
</script>

<style scoped>
.news-container {
    overflow-y: scroll;
}

.image-container {
    height: 150px;
    width: 240px;
}

.comment-item {
    max-width: 75vw;
}
</style>