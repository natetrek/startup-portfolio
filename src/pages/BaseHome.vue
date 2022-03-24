<template>
  <div v-if="!isMobile" class="flex grow">
    <div class="flex flex-col basis-2/5 h-screen px-4 ">
        <div class="container-inner flex flex-col grow mx-auto py-12">
          <div class="basis-1/4 pb-8 lg:pb-12"><img src="../assets/nate-williams-logo-200.svg" alt="nate-williams-logo" width="200" /></div>
          <div class="basis-3/4">
            <div class="text-3xl sm:text-4xl font-bold uppercase text-myblue space-y-4 pb-10">
              <p>Startup founder</p>
              <p>Developer &</p>
              <p>Designer</p>
            </div>
            <div class="prose pb-10">
              Hi, I'm Nate. Thanks for stopping by. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum dolores officia praesentium quasi eius? Lorem ipsum dolor sit amet consectetur adipisicing
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="https://flexio.natewilliams.tech" target="_blank">@flex.io</a>
            </div>
            <SocialMediaLinks class="pb-16" />
            <button class="section-btn-lg hover:bg-blue-400 hover:bg-opacity-20 pb-8" @click="btnSendEmail">Get in touch</button>
          </div>
        </div>
    </div>
    <div class="flex flex-col basis-3/5">
      <ImageCarousel :images="images" :content="content" />
    </div>
  </div>
  <div v-else>
    <div class="container-inner mx-auto py-12">
      <div class="pb-12"><img src="../assets/nate-williams-logo-180.svg" alt="nate-williams-logo" width="180" /></div>
      <div>
        <div class="text-3xl sm:text-4xl font-bold uppercase text-myblue space-y-4 pb-10">
          <p>Startup founder</p>
          <p>Developer &</p>
          <p>Designer</p>
        </div>
        <div class="prose pb-8">
          Hi, I'm Nate. Thanks for stopping by. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsum dolores officia praesentium quasi eius? Lorem ipsum dolor sit amet consectetur adipisicing
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="https://flexio.natewilliams.tech" target="_blank">@flex.io</a>
        </div>
        <div class="flex justify-center"><SocialMediaLinks class="pb-10" /></div>
        <div class="flex justify-center"><button class="section-btn-sm hover:bg-blue-400 hover:bg-opacity-20 pb-8" @click="btnSendEmail">Get in touch</button></div>
      </div>
    </div>
  </div>

</template>

<script>
import SocialMediaLinks from '../components/SocialMediaLinks.vue'
import ImageCarousel from '../components/ImageCarousel.vue'
import json from '../store/home-carousel-data.json'

export default {
  name: "BaseHome",

  components: {
    SocialMediaLinks,
    ImageCarousel,
  },

  data: function() {
    return {
      content: json.content,
      images: json.images,
      isMobile: false
    };
  },

  methods : {
      // open a mail client to handle sending an email
      btnSendEmail: function() {
          window.open("mailto:nate@natewilliams.tech");
      },
      // update variable used to select mobile display elements
      handleResize() {
        this.isMobile = (window.innerWidth < 725 || window.innerHeight < 725);
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
  .section-btn-lg {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.myblue');
    padding: 10px 28px 10px 28px;
    border: 1px solid theme('colors.myblue');
    border-radius: 25px;
  }
  .section-btn-sm {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: theme('colors.myblue');
    padding: 10px 28px 10px 28px;
    border: 1px solid theme('colors.myblue');
    border-radius: 25px;
  }
</style>
