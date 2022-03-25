<template>
  <div class="my-16">
    <div class="container-inner flex flex-col sm:flex-row justify-center py-8 mx-auto">
      <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
        <div class="text-3xl sm:text-4xl font-bold flex justify-center">About</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="../assets/rocket-in-clouds.svg" width="275" style="box-shadow:5px 5px 5px #999; border-radius:50%;" alt="trekking in the mountains" class="mx-auto sm:mx-0">
      </div>
    </div>
    <div class="container-inner py-8 mx-auto"><PlaceHolderOne /></div>
  </div>
</template>


<script>
// Using vite-plugin-md plugin to import Markdown files as Vue components
import PlaceHolderOne from '../store/placeholder-med.md'

export default {
  name: "BaseAbout",

  components: {
    PlaceHolderOne
  },

  data: () => ({
  }),
};
</script>
