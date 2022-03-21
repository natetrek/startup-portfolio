<template>
  <div class="flex grow">
    <div class="flex flex-col basis-2/5 h-screen">
        <div class="container-inner flex flex-col grow mx-auto py-12">
          <div class="basis-1/4 pb-16"><img src="../assets/nate-williams-logo.svg" alt="nate-williams-logo" width="200" /></div>
          <div class="basis-3/4">
            <div class="text-3xl sm:text-4xl font-bold uppercase text-myblue space-y-4 pb-10">
              <p>Startup founder,</p>
              <p>Product manager &</p>
              <p>Developer</p>
            </div>
            <div class="prose pb-10">
              Hi, I'm Nate. Thanks for stopping by. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum dolores officia praesentium quasi eius? Lorem ipsum dolor sit amet consectetur adipisicing
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="/treks/how-to-get-better-at-coding/">Flex.io</a>
            </div>
            <SocialMediaLinks class="pb-16" />
            <button class="section-btn hover:bg-blue-400 hover:bg-opacity-20" @click="btnSendEmail">Get in touch</button>
          </div>
        </div>
    </div>
    <div class="flex flex-col basis-3/5 bg-blue-400">
      Hello, world
    </div>
  </div>
</template>

<script>
import SocialMediaLinks from '../components/SocialMediaLinks.vue'

export default {
  name: "BaseHome",

  components: {
    SocialMediaLinks,
  },

  data: () => ({
  }),

  methods : {
      btnSendEmail: function() {
          window.open("mailto:nate@natewilliams.tech");
      },
  }

};
</script>


<style scoped>
  .section-btn {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.myblue');
    padding: 12px 32px 12px 32px;
    border: 1px solid theme('colors.myblue');
    border-radius: 25px;
  }
</style>
