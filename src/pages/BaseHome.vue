<template>
  <div class="sm:mx-auto">

    <div class="container-inner flex flex-col sm:flex-row justify-left py-10">
      <div class="text-3xl sm:text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left self-center space-y-6">
        <div>Hello, I'm Nate</div>
        <div class="text-blue leading-snug">Startup founder & backcountry explorer</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="../assets/trekking-in-mountains.svg" width="275" style="box-shadow:5px 5px 5px #999; border-radius:50%;" alt="trekking in the mountains" class="mx-auto sm:mx-0">
      </div>
    </div> <!-- end hero -->

    <div class="container-inner">
      <p class="prose prose-lg sm:prose-xl  max-w-none">Thanks for stopping by. I'm a web software entrepreneur who loves amazing tech, good design and
        backcountry treks. Formerly, I helped build <a href="https://flexio.natewilliams.dev/" target="_blank">Flex.io</a> and
        <a href="https://goldprairie.natewilliams.dev/" target="_blank">Gold Prairie</a>, where I was Co-founder & CEO. I'm passionate about community, conservation and code.
      </p>
    </div>

    <div class="container-inner text-xl py-12 mb-16">
      <h2 class="font-bold mb-6">Work Highlights</h2>

      <ul class="text-lg sm:text-xl space-y-6">
        <li class="checkmark">
          <div>Highlight One</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
        <li class="checkmark">
          <div>Highlight Two</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
        <li class="checkmark">
          <div>Highlight Three</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
        <li class="checkmark">
          <div>Highlight Four</div>
          <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
        </li>
      </ul>
    </div> <!-- end projects -->
  </div>

</template>

<script>
  export default {
    name: "BaseHome",

    data: () => ({
    }),
  };
</script>
