<template>
  <!-- Non-mobile display -->
  <div v-if="!isMobile" id="carousel-container" class="relative flex justify-center items-center h-screen">
    <div class="absolute">
      <!-- Carousel image -->
      <div><a :href="content[contentIdx].link" target="_blank"><img id="carousel-img-id" class="carousel-img shadow-xl" :width="imgWidth" :src="getImgUrl(imgIndex)" :alt="content[contentIdx].alt"></a></div>
      <!-- Content -->
      <div id="carousel-content" class="mx-auto mt-8">
          <div class="carousel-text">{{ content[contentIdx].headings[0] }}</div>
          <div class="carousel-text">{{ content[contentIdx].headings[1] }}</div>
      </div>
    </div>
    <!-- Carousel image selectors-->
    <div id="carousel-selectors" class="absolute flex bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <div v-for="(item,idx) in new Array(4)" :key="idx">
        <button v-if="this.imgIndex==(idx+1)" @click="btnUpdateCarousel(idx)" v-bind:value="contentIdx" class="px-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 24 24" class="fill-white"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>
        </button>
        <button v-else @click="btnUpdateCarousel(idx)" v-bind:value="contentIdx" class="px-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 24 24" class="fill-slate-300"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile display -->
  <div v-else class="flex justify-center items-center h-550" v-for="item in content" :key="item.id" :style="{'background-color': item.background}">
      <div class="flex flex-col">
        <div><a :href="item.link" target="_blank"><img class="pt-6 shadow-xl" :width="imgWidth" :src="getImgUrl(item.id)" :alt="item.alt"></a></div>
        <div class="justify-left mt-6">
            <div class="carousel-text">{{ item.headings[0] }}</div>
            <div class="carousel-text">{{ item.headings[1] }}</div>
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
      isMobile: {
          type: Boolean,
          required: true
      }
    },

    data: function() {
      return {
          contentIdx: 0,
          imgIndex: 1,
          imgWidth: 300,
          carouselKey: 0,
        };
    },

    methods: {
        // get image URL for the carousel images
        getImgUrl(idx) {

          // Filter images by index; then find image with the current width and get its name
          const imgIndex = this.images.filter(obj => { return (obj.index === idx); });
          const imgName = imgIndex.find(obj => { return (obj.width === this.imgWidth); }).name;

          return new URL(`../assets/${imgName}`, import.meta.url).href
        },

        // calc the image width based on size of the carousel container; scale up as size increases
        getImgWidth(curWidth, curHeight) {
          let calcWidth = 300
          if (curWidth >  600 && curHeight >  700) calcWidth = 400
          if (curWidth >  800 && curHeight >  800) calcWidth = 500
          if (curWidth > 1000 && curHeight >  900) calcWidth = 600
          if (curWidth > 1200 && curHeight > 1000) calcWidth = 700
          if (curWidth > 1400 && curHeight > 1200) calcWidth = 800
          return calcWidth
        },

        // update the carousel image when user clicks a carousel button
        btnUpdateCarousel(idx) {
          this.imgIndex = idx+1
          this.contentIdx = idx
          this.refreshCarousel()
        },

        // update the source & width of the carousel image based on image selected & screen size
        // carousel container is not displayed on mobile screens
        refreshCarousel() {
          if (document.getElementById("carousel-container")) {
            let carouselWidth = document.getElementById("carousel-container").offsetWidth
            let carouselHeight = document.getElementById("carousel-container").offsetHeight
            this.imgWidth = this.getImgWidth(carouselWidth, carouselHeight)

            //update carousel background color
            document.getElementById("carousel-container").style.backgroundColor = this.content[this.contentIdx].background
            //update carousel image
            document.getElementById("carousel-img-id").src = this.getImgUrl(this.imgIndex)
          }
        },

        rotateCarousel: function () {
          var carousel = this;
          setInterval(function () {
            if (!this.isMobile) {
              carousel.imgIndex = (carousel.imgIndex < 4) ? carousel.imgIndex+1 : 1
              carousel.contentIdx = carousel.imgIndex - 1
              carousel.refreshCarousel()
            }
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
//      this.rotateCarousel()
    }
}
</script>


<style scoped>

  .carousel-img:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

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
