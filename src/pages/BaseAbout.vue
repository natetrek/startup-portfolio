<template>
  <div class="sm:mx-auto">

    <div class="container-inner flex flex-col sm:flex-row justify-left py-10">
      <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
        <div class="text-3xl sm:text-4xl font-bold">About Me</div>
        <div class="text-2xl font-bold text-blue leading-10">Highlights from the enterprise software startups I helped build</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="../assets/coder-at-desk.svg" width="275" alt="trekking in the mountains" class="mx-auto sm:mx-0">
      </div>
    </div>

    <!-- Technologies, frameworks & tools -->
    <div class="container-inner mx-2 sm:mx-auto py-8 md:py-16">
      <div class="heading text-2xl md:text-3xl text-center pb-12">Technologies, Frameworks & Tools</div>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-8">
          <div class="flex flex-col items-center" v-for="item in technologies" :key="item.id">
              <img class="w-48 h-48" :src="getImgUrl(item.img)" :alt="item.name">
              <div class="prose prose-sm flex justify-center pt-4">{{ item.name }} </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
import json from '../store/about-technologies-data.json'

export default {
  name: "BaseAbout",

  data: function() {
    return {
      technologies: json.technologies,
      isMobile: false
    };
  },

  methods : {
      getImgUrl(imgName) {
        return new URL(`../assets/logos/${imgName}`, import.meta.url).href
      },
      // update variable used to select mobile display elements
      handleResize() {
        this.isMobile = (window.innerWidth < 725 || window.innerHeight < 650 || (window.innerWidth < 920 && window.innerHeight < 720) );
      },
  },

  created() {
    // add an event listener to the window so we can switch image sizes
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed() {
      window.removeEventListener('resize', this.handleResize)
  }

};
</script>

<style scoped>
  .heading {
    font-weight: 400;
    color: #222;
  }

</style>
