<template>

    <!-- Nav control -->
    <PageHeader :isMobile="isMobile" :isBlue="isBlue" />

    <!-- Hero area -->
    <div id="hero" class="flex items-center text-white bg-[#6facf2] w-full lg:h-96" :class="isMobile ? 'pt-24 pb-4': 'py-0'">
      <div class="container-inner flex flex-col sm:flex-row justify-left items-center py-8 mx-auto">
        <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
          <div class="text-3xl lg:text-4xl font-bold uppercase">Work</div>
          <div class="text-2xl leading-10">Highlights from the enterprise software startups I helped build</div>
        </div>
        <div class="mt-8 sm:mt-0">
          <img src="../assets/rocket-in-clouds.svg" width="275" alt="trekking in the mountains" class="mx-auto sm:mx-0 drop-shadow-xl">
        </div>
      </div>
    </div>


    <!-- Intro -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12">
        <div class="space-y-4 pt-4 md:pt-8">
          <div class="leading-7">Welcome to a guided tour of my startup portfolio.</div>
          <div class="leading-7">As Steve Jobs said, “Design is not just what it looks like and feels like. Design is how it works.” I took that to heart. That and, as Drew Houston said, "Learn early. Learn often."</div>
        </div>
    </div>

    <!-- Flex.io summary -->
    <div class="container-inner flex flex-col md:flex-row mx-auto py-8 border-y border-gray-300">
      <div v-if="!isMobile" class="basis-1/3 flex justify-center items-center">
        <a href="https://flexio.natewilliams.dev/" target="_blank">
          <img  src="../assets/flexio-logo.png" alt="Flex.io logo">
        </a>
      </div>
      <div class="basis-2/3">
        <div class="space-y-2">
          <div class="text-xl font-bold">Flex.io</div>
          <div>#NoCode platform for delvering data from cloud apps to spreadsheets</div>
          <div>Launched at PyCon Startup Row in 2017 and operated through 2020</div>
        </div>
      </div>
    </div>

    <!-- Flex.io details -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12">
      <div v-if="!isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://flexio.natewilliams.dev/" target="_blank">
          <img  src="../assets/flexio-work-01.png" alt="Flex.io formula example in Excel" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-12">Flex.io website (archive)</div>
        <a href="https://youtu.be/y9PYtsVnpHk" target="_blank">
          <img  src="../assets/flexio-work-02.png" alt="Flex.io formula example in Excel" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm">Product demo video</div>
      </div>
      <div class="basis-1/2 mx-4">
        <div class="space-y-8">
          <div>Flex.io was a cloud service for integrating data from popular web apps, like HubSpot and Shopify, directly into Microsoft Excel and Google Sheets. <br><br> It gave non-technical users a way to lookup data from web API without having to write any code.</div>
        </div>
      </div>
    </div>

    <!-- Gold Prairie summary -->
    <div class="container-inner flex flex-col md:flex-row mx-auto py-8 border-y border-gray-300">
      <div v-if="!isMobile" class="basis-1/3 flex justify-center items-center">
        <a href="https://goldprairie.natewilliams.dev/" target="_blank">
          <img  src="../assets/gp-logo.png" alt="Gold Prairie logo" class="w-3/4 mx-auto">
        </a>
      </div>
      <div class="basis-2/3">
        <div class="space-y-2">
          <div class="text-xl font-bold">Gold Prairie</div>
          <div>Enterprise SaaS solution for identifying and preventing payment errors</div>
          <div>Successfully exited in 2019 via a private sale</div>
        </div>
      </div>
    </div>

    <!-- Gold Prairie details -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12">
      <div v-if="!isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://goldprairie.natewilliams.dev/" target="_blank">
          <img  src="../assets/gp-work-01.png" alt="Flex.io formula example in Excel" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-8">Gold Prairie home page (archive)</div>
      </div>
      <div class="basis-1/2 mx-4">
        <div class="space-y-8">
          <div>Flex.io was a cloud service for integrating data from popular web apps, like HubSpot and Shopify, directly into Microsoft Excel and Google Sheets. <br><br> It gave non-technical users a way to lookup data from web API without having to write any code.</div>
        </div>
      </div>
    </div>


    <!-- Kirix summary -->
    <div class="container-inner flex flex-col md:flex-row mx-auto py-8 border-y border-gray-300">
      <div v-if="!isMobile" class="basis-1/3 flex justify-center items-center">
        <a href="https://www.kirix.com/" target="_blank">
          <img  src="../assets/kirix-logo.png" alt="Kirix logo" class="w-3/5 mx-auto">
        </a>
      </div>
      <div class="basis-2/3">
        <div class="space-y-2">
          <div class="text-xl font-bold">Kirix</div>
          <div>Productivity application for data preparation and ad hoc data analysis</div>
          <div>Awarded “Best Productivity Application” at LinuxWorld Boston 2005</div>
        </div>
      </div>
    </div>

    <!-- Kirix details -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12">
      <div v-if="!isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://youtu.be/3pA-W63oJYU" target="_blank">
          <img  src="../assets/kirix-work-01.png" alt="Flex.io formula example in Excel" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-8">Product demo video</div>
      </div>
      <div class="basis-1/2 mx-4">
        <div class="space-y-8">
          <div>Flex.io was a cloud service for integrating data from popular web apps, like HubSpot and Shopify, directly into Microsoft Excel and Google Sheets. <br><br> It gave non-technical users a way to lookup data from web API without having to write any code.</div>
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
      isBlue: false,
      isMobile: false,
    };
  },

  methods : {
      // update variable used to select mobile display elements
      handleResize() {
        this.isMobile = (window.innerWidth < 725 || window.innerHeight < 650 || (window.innerWidth < 920 && window.innerHeight < 720) );
      },
      // on scroll, check if we need switch the color of the buger icon from white to blue after scrolling past the hero area
      handleScroll() {
        // if hero element is not in the DOM yet, use default of 335
        if (document.getElementById("hero"))
          this.isBlue = window.pageYOffset > (document.getElementById("hero").clientHeight - 50)
        else
          this.isBlue = window.pageYOffset > 335
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

