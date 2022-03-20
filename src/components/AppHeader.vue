<template>
    <header class="top-0 left-0 z-40 fixed bg-white w-full border-t-7 border-blue">
      <nav class="container mx-auto flex flex-wrap justify-between pt-4 pb-2 md:py-4">
        <div class="mb-4 sm:mb-0">
          <router-link to="/" @click.native="scrollToTop">
            <img src="../assets/logo.png" class="hover:opacity-40" alt="logo" />
          </router-link>
        </div>
        <div class="block md:hidden"> <!-- hamburger -->
          <button @click="toggleBurger" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-700 hover:border-gray-700">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul class="uppercase tracking-wide font-bold w-full block flex-grow space-y-6 md:space-y-0 md:flex md:flex-initial md:w-auto items-center mt-4 mb-2 md:my-0"
            :class="isOpen ? 'block': 'hidden'"
        >
          <li class="mr-8"><router-link to="/startups" @click="closeBurger"><div class="text-gray-600 hover:text-gray-400">Startups</div></router-link></li>
          <li class="mr-8"><router-link to="/treks" @click="closeBurger"><div class="text-gray-600 hover:text-gray-400">Treks</div></router-link></li>
          <li><router-link to="/about" @click="closeBurger"><div class="text-gray-600 hover:text-gray-400">About</div></router-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
  export default {
    name: 'AppHeader',

    data() {
      return {
        isOpen: false,
      }
    },
    methods: {
      scrollToTop() {
        this.isOpen = false
        window.scrollTo(0,0);
      },
      closeBurger() {
        this.isOpen = false
        window.scrollTo(0,0);
      },
      toggleBurger() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
