<template>
    <!-- Height is set so carousel container is 384px on portrait mobile screens and 288px on landscape -->
    <div class="relative flex justify-center items-center h-screen">
      <div class="absolute">
        <!-- Carousel image -->
        <div><img id="carousel-img-id" class="shadow-xl" :src="getCarouselImgUrl(imgIndex)" alt="Automate your internal recovery process"></div>
        <!-- Content -->
        <div id="carousel-content" class="mx-auto mt-8">
            <div class="hero-text-sm drop-shadow-md">{{ content[contentIdx].headings[0] }}</div>
            <div class="hero-text-sm drop-shadow-md">{{ content[contentIdx].headings[1] }}</div>
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
import json from '../store/hero-data.json'

export default {
    props: {
        isMobile: {
            type: Boolean,
            required: true
        }
    },

    data: function() {
        return {
          content: json.content,
          contentIdx: 0,
          imgIndex: 1,
          carouselKey: 0,
        };
    },

    methods: {
        // get image URL for the carousel images
        getCarouselImgUrl(pic) {
          this.heroImage = this.isMobile ? 'hero-0'+pic+'-sm.jpg' : 'hero-0'+pic+'-lg.jpg'
          return new URL(`../assets/${this.heroImage}`, import.meta.url).href
        },
        // update the carousel image when user clicks a carousel button
        btnUpdateCarousel(idx) {
          this.imgIndex = idx+1
          this.contentIdx = idx

          //update carousel image
          document.getElementById("carousel-img-id").src = this.getCarouselImgUrl(this.imgIndex)
        },

        rotateCarousel: function () {
          var carousel = this;
          setInterval(function () {
            carousel.imgIndex = (carousel.imgIndex < 4) ? carousel.imgIndex+1 : 1
            carousel.contentIdx = carousel.imgIndex - 1
            document.getElementById("carousel-img-id").src = carousel.getCarouselImgUrl(this.imgIndex)
          }, 20000);
        }
    },

    mounted () {
      //this.rotateCarousel()
    }
}
</script>


<style scoped>

  .hero-text-sm {
    font-size: 12px;
    letter-spacing: 0.08em;
    padding-bottom: 10px;
    text-transform: uppercase;
    color: theme('colors.white');
  }
  .hero-text-md {
    font-size: 16px;
    font-weight: 600;
    color: theme('colors.white');
  }
  .hero-text-lg {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.2;
    color: theme('colors.white');
  }

  .hero-btn {
    color: theme('colors.white');
    padding: 10px 18px 10px 18px;
    border: 1px solid theme('colors.white');
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    .hero-text-sm {
      font-size: 14px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: theme('colors.white');
    }
    .hero-text-md {
      font-size: 28px;
      font-weight: 600;
      color: theme('colors.white');
    }
    .hero-text-lg {
      font-size: 56px;
      font-weight: bold;
      color: theme('colors.white');
    }
    .hero-btn {
      color: theme('colors.white');
      padding: 16px 32px 16px 32px;
      border: 1px solid theme('colors.white');
      border-radius: 5px;
    }
  }

  svg {
    filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.3));
  }
</style>
