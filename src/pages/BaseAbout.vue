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
          <img src="../assets/trekking-in-mountains.svg" width="275" alt="trekking in the mountains" class="mx-auto sm:mx-0">
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

    <!-- Why wait for results? -->
    <div class="bg-stone-200">
      <div class="home-content-section container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16">
          <div class="space-y-8 md:space-y-12 pt-4 md:pt-8">
            <div class="heading text-3xl md:text-4xl text-center md:text-left">Why Wait For Results?</div>
            <div class="content">Gold Prairie pinpoints payment errors automatically and delivers them directly to your internal staff—day and night, rain or shine. Rather than waiting for an outside audit to uncover these errors, you can identify and address them immediately, before they become a drain on your profits.</div>
            <div class="text-center md:text-left"><button class="section-btn hover:bg-blue-400 hover:bg-opacity-20">Learn More</button></div>
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

export default {
  name: "BaseAbout",

  components: {
    PageHeader,
    PageFooter,
  },

  data: function() {
    return {
      isMobile: false
    };
  },

  methods : {
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

