<template>

    <!-- Nav control -->
    <PageHeader :isMobile="isMobile" />

    <!-- Hero area -->
    <div class="flex items-center text-white bg-blue-400 lg:h-96 w-full" :class="isMobile ? 'pt-24 pb-4': 'py-0'">
      <div class="container-inner flex flex-col sm:flex-row justify-left items-center py-8 mx-auto">
        <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
          <div class="text-3xl xl:text-4xl font-bold uppercase">About me</div>
          <div class="text-2xl leading-10">Highlights from the enterprise software startups I helped build</div>
        </div>
        <div class="mt-8 sm:mt-0">
          <img src="../assets/trekking-in-mountains.svg" width="275" alt="trekking in the mountains" class="mx-auto sm:mx-0 drop-shadow-xl">
        </div>
      </div>
    </div>

    <!-- Why wait for results? -->
    <div class="bg-white">
      <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16">
          <div class="space-y-8 md:space-y-12 pt-4 md:pt-8">
            <div class="heading text-2xl md:text-3xl text-center md:text-left">Why Wait For Results?</div>
            <div class="content">Gold Prairie pinpoints payment errors automatically and delivers them directly to your internal staff—day and night, rain or shine. Rather than waiting for an outside audit to uncover these errors, you can identify and address them immediately, before they become a drain on your profits.</div>
            <div class="text-center md:text-left"><button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button></div>
          </div>
      </div>
    </div>

    <!-- Why wait for results? -->
    <div class="bg-white">
      <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16 border-t border-gray-300">
          <div class="space-y-8 md:space-y-12 pt-4 md:pt-8">
            <div class="heading text-2xl md:text-3xl text-center">Why Wait For Results?</div>
            <div class="content">Gold Prairie pinpoints payment errors automatically and delivers them directly to your internal staff—day and night, rain or shine. Rather than waiting for an outside audit to uncover these errors, you can identify and address them immediately, before they become a drain on your profits.</div>
            <div class="text-center md:text-left"><button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button></div>
          </div>
      </div>
    </div>

    <!-- Technologies, frameworks & tools -->
    <div class="container-inner mx-2 sm:mx-auto py-8 md:py-16 border-t border-gray-300">
      <div class="heading text-2xl md:text-3xl text-center pb-12">Technologies, Frameworks & Tools</div>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-8">
          <div class="flex flex-col items-center" v-for="item in technologies" :key="item.id">
              <img class="w-48 h-48" :src="getImgUrl(item.img)" :alt="item.name">
              <div class="prose prose-sm flex justify-center pt-4">{{ item.name }} </div>
          </div>
      </div>
    </div>


    <!-- Page footer centered -->
    <div class="h-16">
      <PageFooter class="flex justify-center items-center h-full mx-auto" />
    </div>

</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
import json from '../store/about-technologies-data.json'

export default {
  name: "BaseAbout",

  components: {
    PageHeader,
    PageFooter,
  },

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
  .subheading {
    font-size: 1.125rem;
    font-weight: 600;
    color: #222;
  }
  .content {
    line-height: 1.7rem;
    color: #333;
  }
  .section-btn {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.blue.500');
    padding: 12px 32px 12px 32px;
    border: 1px solid theme('colors.blue.500');
    border-radius: 5px;
  }

  .call-to-action {
    background-color: #333333;
  }
  .cta-heading {
    font-weight: 400;
    color: theme('colors.white');
  }
  .cta-content {
    line-height: 1.7rem;
    color: theme('colors.white');
  }
  .cta-btn {
    text-transform: uppercase;
    font-weight: bold;
    padding: 12px 32px 12px 32px;
    color: theme('colors.white');
    background-color: theme('colors.blue.500');
    border: 1px solid theme('colors.blue.500');
    border-radius: 5px;
  }
  .cta-btn:hover {
    border: 1px solid theme('colors.white');
  }

</style>
