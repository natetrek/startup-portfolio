<template>
    <!-- Height is set so carousel container is 384px on portrait mobile screens and 288px on landscape -->
    <div id="carousel-container" class="relative flex justify-center items-center h-screen">
      <div class="absolute">
        <!-- Carousel image -->
        <div><img id="carousel-img-id" class="shadow-xl" :width="imgWidth" :src="getImgUrl(imgIndex)" alt="Automate your internal recovery process"></div>
        <!-- Content -->
        <div id="carousel-content" class="mx-auto mt-8">
            <div class="carousel-text">{{ content[contentIdx].headings[0] }}</div>
            <div class="carousel-text">{{ content[contentIdx].headings[1] }}</div>
        </div>
      </div>
      <!-- Carousel image selectors-->
      <div id="carousel-selectors" class="absolute flex bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
        <div v-for="(item,idx) in new Array(4)" :key="idx">
          <button v-if="this.imgIndex==(idx+1)" @click="btnUpdateCarousel(idx)" v-bind:value="contentIdx" class="px-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 24 24" class="fill-white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>
          </button>
          <button v-else @click="btnUpdateCarousel(idx)" v-bind:value="contentIdx" class="px-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 24 24" class="fill-slate-300"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>
          </button>
        </div>
      </div>
    </div>

</template>

<script>

export default {
    props: {
      images: {
          type: Object,
          required: true
      },
      content: {
          type: Object,
          required: true
      },
    },

    data: function() {
      return {
          isMobile: false,
          contentIdx: 0,
          imgIndex: 1,
          imgWidth: 300,
          carouselKey: 0,
        };
    },

    methods: {
        // get image URL for the carousel images
        getImgUrl(pic) {
          this.heroImage = 'hero-0'+pic+'-lg.jpg'
          return new URL(`../assets/${this.heroImage}`, import.meta.url).href
        },

        getImgWidth(viewWidth, viewHeight) {

          console.log(viewHeight)
          let calcWidth = 600
          return calcWidth
        },

        // update the carousel image when user clicks a carousel button
        btnUpdateCarousel(idx) {
          this.imgIndex = idx+1
          this.contentIdx = idx
          this.refreshCarousel()
        },

        refreshCarousel() {

          // set the width of the carousel image based on the screen size
          let viewWidth = window.innerWidth;
          let viewHeight = window.innerHeight;
          this.imgWidth = this.getImgWidth(viewWidth, viewHeight)

          console.log(this.imgWidth)

          //update carousel background color
          document.getElementById("carousel-container").style.backgroundColor = this.content[this.contentIdx].background
          //update carousel image
          document.getElementById("carousel-img-id").src = this.getImgUrl(this.imgIndex)
        },

        rotateCarousel: function () {
          var carousel = this;
          setInterval(function () {
            carousel.imgIndex = (carousel.imgIndex < 4) ? carousel.imgIndex+1 : 1
            carousel.contentIdx = carousel.imgIndex - 1
            carousel.refreshCarousel
          }, 20000);
        }
    },

    created() {
      // add an event listener to the window so we can switch carousel image sizes
      window.addEventListener('resize', this.refreshCarousel)
    },

    destroyed() {
        window.removeEventListener('resize', this.refreshCarousel)
    },

    mounted () {
      this.refreshCarousel()
    }
}
</script>


<style scoped>

  .carousel-text {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding-bottom: 8px;
    color: theme('colors.white');
  }

  @media (min-width: 1024px) {
    .carousel-text {
      color: theme('colors.white');
    }
  }

  svg {
    filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.3));
  }

</style>
