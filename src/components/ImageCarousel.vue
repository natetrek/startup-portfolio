<template>
    <div class="carousel-image-container relative h-64 sm:h-48 lg:h-400">
      <!-- Carousel image-->
      <img id="carousel-img-id" class="absolute w-full h-full" :src="getCarouselImgUrl(imgIndex)" alt="Trekking Logs">
      <!-- Carousel prev & next buttons-->
      <div class="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2"> <!-- Prev button-->
        <button @click="btnPrev()" class="carousel-nav">
          <svg class="fill-white h-8 w-8 lg:h-12 lg:w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
      </div>
      <div @click="btnNext()" class="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"> <!-- Next button-->
        <button class="carousel-nav">
          <svg class="fill-white h-8 w-8 lg:h-12 lg:w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      </div>
      <!-- Carousel image selectors-->
      <div id="carousel-img-selectors" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
        <div v-for="(item,idx) in new Array(7)" :key="idx">
          <button v-if="this.imgIndex==(idx+1)" @click="btnUpdateImg(idx)" class="carousel-btn bg-gray-300 p-1 m-2 lg:p-1.5 lg:m-2.5"></button>
          <button v-else @click="btnUpdateImg(idx)" class="carousel-btn p-1 m-2 lg:p-1.5 lg:m-2.5"></button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        isMobile: {
            type: Boolean,
            required: true
        }
    },

    data: function() {
        return {
          imgIndex: 1,
        };
    },

    methods: {
        // get image URL for the carousel images
        getCarouselImgUrl(pic) {
        this.heroImage = this.isMobile ? 'treks-hero-0'+pic+'-sm.jpg' : 'treks-hero-0'+pic+'-lg.jpg'
        return new URL(`../assets/${this.heroImage}`, import.meta.url).href
        },

        // update the carousel image when user clicks the previous nav button
        btnPrev() {
        this.imgIndex = this.imgIndex <= 1 ? 7 : this.imgIndex - 1
        document.getElementById("carousel-img-id").src = this.getCarouselImgUrl(this.imgIndex)
        },

        // update the carousel image when user clicks the next nav button
        btnNext() {
        this.imgIndex = this.imgIndex >= 7 ? 1 : this.imgIndex + 1
        document.getElementById("carousel-img-id").src = this.getCarouselImgUrl(this.imgIndex)
        },

        // update the carousel image when user clicks a carousel button
        btnUpdateImg(idx) {
        this.imgIndex = idx+1
        document.getElementById("carousel-img-id").src = this.getCarouselImgUrl(this.imgIndex)
        },

    }
}
</script>


<style scoped>
  /* don't show carousel buttons on mobile devices */
  @media (min-width: 1024px) {
    .carousel-image-container:hover #carousel-img-selectors {
        display: flex;
    }
  }

  /* only show the carousel buttons on hover */
  .carousel-image-container #carousel-img-selectors {
    display: none;
  }

  /* styling for previous and next buttons in the hero image */
  .carousel-nav {
    background-color: theme('colors.gray.800');
    opacity: 0.4;
    border-radius: 50%;
    border: none;
  }
  .carousel-nav:hover {
    opacity: 0.6;
  }
  .carousel-btn {
    color: theme('colors.white');
    border: 1px solid theme('colors.white');
    border-radius: 50%;
    opacity: 0.8;
  }
  .carousel-btn:hover {
    background-color: theme('colors.white');
  }
</style>
