<template>

  <!-- Title -->
  <div class="text-3xl sm:text-4xl font-bold text-center py-8 sm:py-12">
    <h2> {{ title }} </h2>
  </div>

  <div class="container-inner mx-auto"><PlaceHolderOne /></div>
</template>

<script>
// Using vite-plugin-md plugin to import Markdown files as Vue components
import PlaceHolderOne from '../treks/posts/exploring-high-sierra-trail.md'

export default {
  name: "BaseAbout",
  props: ['title', 'slug'],

  components: {
    PlaceHolderOne,
  },

  data: () => ({
  }),
};
</script>

