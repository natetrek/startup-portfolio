<template>
  <div>
    <div class="mx-auto flex flex-row items-center justify-between">
      <ul class="flex items-center space-x-4 md:space-x-8">
        <li>
          <a href="https://www.redcross.org/" target="_blank">
            <img class="w-48 h-max hover:scale-105" :src="getImgUrl('american-red-cross-logo.svg')" alt="American Red Cross Logo">
          </a>
        </li>
        <li>
          <a href="https://www.astellas.com/en/" target="_blank">
            <img class="w-48 h-max pb-1 md:pb-4 hover:scale-105" :src="getImgUrl('astellas-logo.svg')" alt="Astellas Pharma Logo">
          </a>
        </li>
        <li>
          <a href="https://www.medline.com/" target="_blank">
            <img class="w-36 h-max pt-2 hover:scale-105" :src="getImgUrl('medline-logo.svg')" alt="Medline Industries Logo">
          </a>
        </li>
        <li>
          <a href="https://www.condenast.com/" target="_blank">
            <img class="w-52 h-max pb-1 md:pb-4 hover:scale-105" :src="getImgUrl('conde-nast-logo.svg')" alt="Condé Nast Logo">
          </a>
        </li>
        <li>
          <a href="https://www.grainger.com/" target="_blank">
            <img class="w-48 h-max hover:scale-105" :src="getImgUrl('grainger-logo.svg')" alt="W.W. Grainger Logo">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "SocialMediaLinks",

  data: () => ({
  }),

  methods : {
      getImgUrl(imgName) {
        return new URL(`../assets/logos/${imgName}`, import.meta.url).href
      },
  },

};
</script>