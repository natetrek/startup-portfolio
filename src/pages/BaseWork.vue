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

    <!-- Solution highlights -->
    <div class="home-content-section container-inner mx-2 md:mx-auto py-8 md:py-16">
      <div class="space-y-8 pb-12">
        <div class="heading text-3xl md:text-4xl text-center">Address the Source of Payment Errors</div>
        <div class="content">Gold Prairie tracks the reasons why payment errors occur, helping you identify and understand their root causes. Beyond just catching errors, you can strengthen your internal controls and address problems at the source.</div>
      </div>
      <div v-if="isMobile" class="border-t-2 border-gray-100 pb-2"></div>
      <div class="flex flex-col md:flex-row basis-1/3 mx-2 md:mx-auto gap-8 md:gap-12 my-4">
        <div class="flex-col space-y-4">
          <div class="subheading">Retail & Grocery Payment Monitoring</div>
          <div class="content">Gold Prairie pinpoints and prevents a wide range of payment errors common in the retail industry, including duplicate payments, pricing errors, missed promotional allowances and missed rebates. With Gold Prairie, you can identify overpayments in real-time at a fraction of your current cost.</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div v-if="isMobile" class="border-t-2 border-gray-100"></div>
        <div class="flex-col space-y-4">
          <div class="subheading">Duplicate Payment Prevention</div>
          <div class="content">Why wait for a recovery audit to catch duplicate payments? With Gold Prairie, you can eliminate duplicate payments from your organization. Gold Prairie continuously monitors your payment systems and automatically detects potential duplicate payments before they go out the door.</div>
          <button class="font-bold text-blue-500">Learn More</button>
        </div>
        <div v-if="isMobile" class="border-t-2 border-gray-100"></div>
        <div class="flex-col space-y-4">
          <div class="subheading">Vendor File Analysis and Monitoring</div>
          <div class="content">Get your vendor file under control and keep it clean for the long-haul. Gold Prairie enables you to quickly identify duplicated and erroneous vendor entries. And, once it’s clean, Gold Prairie’s automated vendor monitoring system will help you keep it that way.</div>
          <button class="font-bold text-blue-500">Learn More</button>
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
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
  name: "BaseAbout",

  components: {
    SocialMediaLinks,
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
        // the default is set based on the window YOffset until the "hero" element is available in the DOM
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
  .heading {
    font-weight: 400;
  }
  .subheading {
    font-size: 1.125rem;
    font-weight: 600;
  }
  .content {
    line-height: 1.7rem;
  }
  .cta-btn {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.white');
    padding: 10px 28px 10px 28px;
    border: 1px solid theme('colors.white');
    border-radius: 25px;
  }

</style>

