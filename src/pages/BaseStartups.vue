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

    <!-- Flex.io highlights -->
    <div class="flexio container-inner flex flex-col sm:flex-row sm:mx-auto py-16">
      <div class="flex-auto sm:w-1/3 mx-auto mb-12 sm:mb-0">
        <button @click="btnOpenFlexio" class="items-center px-8 py-12 sm:py-24">
            <img src="../assets/flexio-logo.png" width="200" alt="trekking in the mountains" class="mx-auto sm:mx-0">
        </button>
      </div>
      <div class="prose max-w-none flex-auto sm:w-2/3 sm:pl-8">
        <h2>Flex.io</h2>
        <TestPost />
      </div>
    </div>

    <!-- Gold Prairie highlights -->
    <div class="goldprairie container-inner flex flex-col sm:flex-row sm:mx-auto pb-16">
      <div class="flex-auto sm:w-1/3 mx-auto mb-12 sm:mb-0">
        <button @click="btnOpenGoldPrairie" class="items-center sm:mx-0 px-8 py-12 sm:py-24">
            <img src="../assets/gp-logo.png" width="200" alt="trekking in the mountains" class="mx-auto sm:mx-0">
        </button>
      </div>
      <div class="prose max-w-none flex-auto sm:w-2/3 sm:pl-8">
        <h2>Gold Prairie</h2>
        <TestPost />
      </div>
    </div>

    <!-- Kirix highlights -->
    <div class="kirix container-inner flex flex-col sm:flex-row sm:mx-auto pb-16">
      <div class="flex-auto sm:w-1/3 mx-auto mb-12 sm:mb-0">
        <button @click="btnOpenKirix" class="items-center sm:mx-0 px-8 py-12 sm:py-24">
            <img src="../assets/kirix-logo.png" width="200" alt="trekking in the mountains" class="mx-auto sm:mx-0">
        </button>
      </div>
      <div class="prose max-w-none flex-auto sm:w-2/3 sm:pl-8">
        <h2>Kirix Resarch</h2>
        <TestPost />
      </div>
    </div>

  </div>

</template>


<script>
// Using vite-plugin-md plugin to import Markdown files as Vue components
import TestPost from '../store/placeholder-short.md'

export default {
  name: "BaseStartups",

  components: {
    TestPost,
  },

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

