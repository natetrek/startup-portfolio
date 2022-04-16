<template>

    <!-- Nav control -->
    <PageHeader :isMobile="isMobile" :isBlue="isBlue" />

    <!-- Hero area -->
    <div class="flex items-center text-white bg-heroblue lg:h-96 w-full" :class="isMobile ? 'pt-24 pb-4': 'py-0'">
      <div class="container-inner flex flex-col sm:flex-row justify-left items-center py-8 mx-auto">
        <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
          <div class="text-3xl xl:text-4xl font-bold uppercase">About me</div>
          <div class="text-2xl leading-10">Some things I like to do when I'm not trekking in the Sierras</div>
        </div>
        <div class="mt-8 sm:mt-0">
          <img src="../assets/trekking-in-mountains.svg" width="275" alt="trekking in the mountains" class="mx-auto sm:mx-0 drop-shadow-xl">
        </div>
      </div>
    </div>

    <!-- Building great products -->
    <div class="bg-white">
      <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16 border-t border-gray-300">
          <div class="space-y-8 md:space-y-12 pt-4 md:pt-8">
            <div class="text-2xl md:text-3xl text-center">Building Great Products</div>
            <div class="leading-7">Gold Prairie pinpoints payment errors automatically and delivers them directly to your internal staff—day and night, rain or shine. Rather than waiting for an outside audit to uncover these errors, you can identify and address them immediately, before they become a drain on your profits.</div>
            <CustomerLogos class="flex justify-center" />
          </div>
      </div>
    </div>

    <!-- Design & Development -->
    <div class="bg-white">
      <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16 border-t border-gray-300">
          <div class="space-y-8 md:space-y-12 pt-4 md:pt-8">
            <div class="text-2xl md:text-3xl text-center">Design & Development</div>
            <div class="leading-7">Gold Prairie pinpoints payment errors automatically and delivers them directly to your internal staff—day and night, rain or shine. Rather than waiting for an outside audit to uncover these errors, you can identify and address them immediately, before they become a drain on your profits.</div>
          </div>
      </div>
    </div>

    <!-- Technologies, frameworks & tools -->
    <div class="container-inner mx-2 sm:mx-auto py-8 md:py-16 border-t border-gray-300">
      <div class="text-2xl md:text-3xl text-center pb-12">Tools, Technologies & Frameworks</div>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-8">
          <div class="flex flex-col items-center" v-for="item in technologies" :key="item.id">
              <img class="w-48 h-48" :src="getImgUrl(item.img)" :alt="item.name">
              <div class="prose prose-sm flex justify-center pt-4">{{ item.name }} </div>
          </div>
      </div>
    </div>

    <!-- Get in touch -->
    <div class="text-white bg-stone-500">
      <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16">
          <div class="space-y-8 md:space-y-10 text-center">
            <div class="text-2xl md:text-3xl">Get in touch</div>
            <div class="mx-2 md:mx-16">Please feel free to reach out. I'm glad to chat about work, trade thoughts, share feedback, or hear about any opportunities you're excited about.</div>
            <button class="cta-btn hover:bg-gray-400 hover:bg-opacity-20 pb-10" @click="btnSendEmail">Contact me</button>
            <SocialMediaLinks :isHome="false" class="flex justify-center" />
          </div>
      </div>
    </div>

    <!-- Page footer centered -->
    <div class="h-16">
      <PageFooter class="flex justify-center items-center h-full mx-auto" />
    </div>

</template>

<script>
import SocialMediaLinks from '../components/SocialMediaLinks.vue'
import CustomerLogos from '../components/CustomerLogos.vue'
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
import json from '../store/about-technologies-data.json'

export default {
  name: "BaseAbout",

  components: {
    SocialMediaLinks,
    CustomerLogos,
    PageHeader,
    PageFooter,
  },

  data: function() {
    return {
      technologies: json.technologies,
      isBlue: false,
      isMobile: false
    };
  },

  methods : {
      getImgUrl(imgName) {
        return new URL(`../assets/logos/${imgName}`, import.meta.url).href
      },
      // open a mail client to handle sending an email
      btnSendEmail: function() {
          window.open("mailto:nate@natewilliams.dev");
      },
      // update variable used to select mobile display elements
      handleResize() {
        this.isMobile = (window.innerWidth < 725 || window.innerHeight < 650 || (window.innerWidth < 920 && window.innerHeight < 720) );
      },
      // check scroll position
      handleScroll() {
        this.isBlue = (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350);
      },
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    this.handleResize()
    this.handleScroll()
  },

  destroyed() {
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handleScroll)
  }

};
</script>

<style scoped>
  .cta-btn {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.white');
    padding: 10px 28px 10px 28px;
    border: 1px solid theme('colors.white');
    border-radius: 25px;
  }
</style>
