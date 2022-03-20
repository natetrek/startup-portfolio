<template>

    <!-- Hero area -->
    <ImageCarousel :isMobile="isMobile" />

    <!-- Title -->
    <div class="text-3xl sm:text-4xl font-bold text-center py-8 sm:py-12">
      <h2>Treks</h2>
    </div>

    <!-- Trek summary cards -->
    <div class="treks-container container-inner mx-auto sm:pb-4" :key="treksListKey">
      <TrekCard
        class="max-w-sm w-full lg:max-w-full lg:flex pb-8"
        v-for="trek in paginatedTreks"
        :key="trek.id"
        :trek="trek"
      />
    </div>

    <!-- Pagination -->
    <div class="pagination-row mx-auto flex text-center pb-8 sm:pb-12">
      <button @click="btnPageSelect('prev')" class="pagination-prev p-2 w-9 sm:w-24">{{ isMobile ? '&lt;' : 'Previous' }}</button>
      <div v-for="(item, idx) in new Array(pageData.totalPages)" :key="idx">
        <button @click="btnPageSelect('by-number', idx+1)" class="pagination-inner p-2 w-9 sm:w-12">{{ idx + 1 }}</button>
      </div>
      <button @click="btnPageSelect('next')" class="pagination-next p-2 w-9 sm:w-24">{{ isMobile ? '&gt;' : 'Next' }}</button>
    </div>

</template>

<script>
import TrekCard from '../components/TrekCard.vue'
import ImageCarousel from '../components/ImageCarousel.vue'
import json from '../treks/treks-overview.json'
import paginate from '../util/paginate.js';

// set up the data for the pagination control and list of trek cards
const postsPerPage = 5
let pageData = paginate(json.treks.length, 1, postsPerPage, 20) //setup default pagination info

export default {
  name: "BaseTreks",

  components: {
    TrekCard,
    ImageCarousel,
  },

  data: function() {
    return {
      treks: json.treks,
      isMobile: false,
      treksListKey: 0,
      pageIndex: 1,
      pageStart: pageData.startIndex,
      pageEnd: pageData.endIndex + 1,
      postsPerPage,
      pageData
    };
  },

  created() {
    // add an event listener to the window so we can switch image sizes
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed() {
      window.removeEventListener('resize', this.handleResize)
  },

  computed: {
    // filter the list of treks to only those on the current page
    paginatedTreks() {
      return this.treks.slice(this.pageStart, this.pageEnd);
    }
  },

  methods: {
    // methods for the prev & next pagination buttons
    btnPageSelect(direction, idx=1) {
      // direction: -1 = previous; 0 = next; >0 = use idx
      if (direction === 'prev') {
        this.pageIndex = this.pageIndex <= 1 ? 1 : this.pageIndex - 1
      }
      else if (direction === 'next') {
        this.pageIndex = this.pageIndex >= pageData.totalPages ? pageData.totalPages : this.pageIndex + 1
      }
      else {
        this.pageIndex = idx
      }

      pageData = paginate(this.treks.length, this.pageIndex, this.postsPerPage, 20)
      this.pageStart = pageData.startIndex
      this.pageEnd = pageData.endIndex + 1

      //update treksListKey to force rerender the treks list
      this.treksListKey += 1;
      window.scrollTo(0,0);
    },

    // update variable used to select mobile display elements
    handleResize() {
      this.isMobile = window.innerWidth < 650;
    },

  }
};
</script>

<style scoped>
  /* styling for pagination controls */
  .pagination-inner {
    color: theme('colors.blue');
    border: 1px solid theme('colors.blue');
    border-right: none;
  }
  .pagination-inner:hover {
    background-color: theme('colors.gray.300');
  }
  .pagination-prev {
    color: theme('colors.blue');
    border: 1px solid theme('colors.blue');
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .pagination-prev:hover {
    background-color: theme('colors.gray.300');
  }
  .pagination-next {
    color: theme('colors.blue');
    border: 1px solid theme('colors.blue');
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .pagination-next:hover {
    background-color: theme('colors.gray.300');
  }

</style>

