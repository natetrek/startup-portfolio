
<template>
    <div class="trek-card">
        <router-link :to="`/treks/${trek.slug}`" @click.native="scrollToTop"><div class="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img :src="getImageUrl(trek.image)" :alt="trek.title">
        </div></router-link>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-6 flex flex-col justify-between leading-normal">
            <div class="mb-2">
            <p class="text-sm text-gray-600 flex items-center pb-2">
                {{ trek.location }}
            </p>
            <router-link :to="`/treks/${trek.slug}`" @click.native="scrollToTop"><div class="treks-title text-gray-900 font-bold text-xl mb-2">{{ trek.title }}</div></router-link>
            <p class="text-gray-700 text-base">{{ trek.description }}</p>
            </div>
            <div class="flex flex-col items-left text-sm">
            <p class="text-gray-900 leading-loose">{{ (trek.distance).toFixed(0) }} miles / {{ (trek.distance * 1.60934).toFixed(0) }} km</p>
            <p class="text-gray-600"> {{ trek.tripdate }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trek: {
            type: Object,
            required: true
        }
    },

    methods: {
        // get image URL for images in the list of trek posts
        getImageUrl(pic) {
        return new URL(`../treks/images/${pic}`, import.meta.url).href
        },

        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>


<style scoped>
  .treks-title:hover {
    color: theme('colors.blue');
    text-decoration: underline;
  }
</style>


