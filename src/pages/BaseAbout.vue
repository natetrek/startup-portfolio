<template>
  <div class="container-inner sm:mx-auto py-8">
    <h2 class="text-4xl font-bold">About</h2>
  </div>

  <div class="container-inner mx-auto"><PlaceHolderOne /></div>
</template>


<script>
// Using vite-plugin-md plugin to import Markdown files as Vue components
import PlaceHolderOne from '../treks/posts/exploring-high-sierra-trail.md'

export default {
  name: "BaseAbout",

  components: {
    PlaceHolderOne
  },

  data: () => ({
  }),
};
</script>
