<template>
  <div class="sm:mx-auto">

    <div class="container-inner flex flex-col sm:flex-row justify-left py-10">
      <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
        <div class="text-3xl sm:text-4xl font-bold">Startup Experience</div>
        <div class="text-2xl font-bold text-blue leading-10">Highlights from the enterprise software startups I helped build</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="../assets/rocket-in-clouds.svg" width="275" style="box-shadow:5px 5px 5px #999; border-radius:50%;" alt="trekking in the mountains" class="mx-auto sm:mx-0">
      </div>
    </div>

    <!-- Intro -->
    <div class="container-inner prose max-w-none mx-auto mt-6 py-10 border-y border-gray-300">
      <p>Welcome to a tour of my startup experience.</p>
      <p>I led product development, helped create new technology, and managed customer relationships at three enterprise software startups: Flex.io, Gold Prairie, and Kirix. Here are some highlights from this journey.</p>
    </div>

    <!-- Flex.io highlights -->
    <div id="flexio" class="flexio container-inner flex flex-col sm:flex-row sm:mx-auto py-16">
      <div class="flex-auto sm:w-1/3 mx-auto mb-12 sm:mb-0">
        <button @click="btnOpenFlexio" class="items-center px-8 py-12 sm:py-24">
            <img src="../assets/flexio-logo.png" width="200" alt="trekking in the mountains" class="mx-auto sm:mx-0">
        </button>
      </div>
      <div class="prose max-w-none flex-auto sm:w-2/3 sm:pl-8">
        <h2>Flex.io</h2>
        <p>Flex.io was a cloud service for integrating data from Web apps directly into Microsoft Excel and Google Sheets. It gave spreadsheet users a way to get live, refreshable data from the cloud without having to write code or go through an IT project.</p>
        <p>I led the product development team, focusing on product-market fit.</p>
        <p>Some highlights from building Flex.io include:</p>
        <ul>
          <li>Demoing an early version of the product at PyCon Startup Row</li>
          <li>Leveraging the new Dynamic Arrays feature in Excel</li>
          <li>Proving out new market opportunities with Crunchbase</li>
        </ul>
      </div>
    </div>

    <!-- Gold Prairie highlights -->
    <div id="goldprairie" class="goldprairie container-inner flex flex-col sm:flex-row sm:mx-auto pb-16">
      <div class="flex-auto sm:w-1/3 mx-auto mb-12 sm:mb-0">
        <button @click="btnOpenGoldPrairie" class="items-center sm:mx-0 px-8 py-12 sm:py-24">
            <img src="../assets/gp-logo.png" width="200" alt="trekking in the mountains" class="mx-auto sm:mx-0">
        </button>
      </div>
      <div class="prose max-w-none flex-auto sm:w-2/3 sm:pl-8">
        <h2>Gold Prairie</h2>
        <p>Gold Prairie was a SaaS solution for identifying and preventing payment errors. It operated as an automated, internal financial control for accounting staff at large organizations.</p>
        <p>I managed all aspects of the product lifecycle from creating initial prototypes to leading development efforts and deploying the solution.</p>
        <p>Solution highlights include:</p>
        <ul>
          <li>Deploying the solution at 30+ enterprise customers</li>
          <li>Cutting the recovery timeframe from 1-2 years to a month or less</li>
          <li>Generating an average of $2 million annual savings per customer</li>
        </ul>
      </div>
    </div>

    <!-- Kirix highlights -->
    <div id="kirix" class="kirix container-inner flex flex-col sm:flex-row sm:mx-auto pb-16">
      <div class="flex-auto sm:w-1/3 mx-auto mb-12 sm:mb-0">
        <button @click="btnOpenKirix" class="items-center sm:mx-0 px-8 py-12 sm:py-24">
            <img src="../assets/kirix-logo.png" width="200" alt="trekking in the mountains" class="mx-auto sm:mx-0">
        </button>
      </div>
      <div class="prose max-w-none flex-auto sm:w-2/3 sm:pl-8">
        <h2>Kirix Research</h2>
        <p>Kirix Strata was an award-winning productivity tool for data preparation and ad hoc data analysis. It also incorporated a built-in web browser for working with data from the cloud.</p>
        <p>Product development was a team effort. I focused primarily on product strategy as well as sales and marketing.</p>
        <p>Some highlights include:</p>
        <ul>
          <li>Winning “Best Productivity Application” at LinuxWorld Boston 2005</li>
          <li>Generating media coverage from a number of tech news sources</li>
          <li>Delivering an innovative feature set, such as dynamic calculations</li>
        </ul>
      </div>
    </div>

  </div>

</template>


<script>

export default {
  name: "BaseStartups",

  data: () => ({
  }),

  methods : {
      btnOpenFlexio: function() {
          window.open("https://flexio.natewilliams.dev");
      },
      btnOpenGoldPrairie: function() {
          window.open("https://goldprairie.natewilliams.dev");
      },
      btnOpenKirix: function() {
          window.open("https://www.kirix.com");
      }
  },
};
</script>


<style>
  button {
    margin: 0px 0px 0px 0px;
    background: transparent;
    border: 1px solid theme('colors.gray.400');
  }

  button:hover {
    border: 1px solid theme('colors.gray.700');
  }
</style>

