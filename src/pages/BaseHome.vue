<template>
  <div class="sm:mx-auto">

    <div class="container-inner flex flex-col sm:flex-row justify-left py-8">
      <div class="text-3xl sm:text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left self-center space-y-6">
        <div>Hello, I'm Nate</div>
        <div class="text-blue leading-snug">Startup founder & backcountry explorer</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="../assets/trekking-in-mountains.svg" width="275" style="box-shadow:5px 5px 5px #999; border-radius:50%;" alt="trekking in the mountains" class="mx-auto sm:mx-0">
      </div>
    </div> <!-- end hero -->

    <div class="container-inner">
      <p class="prose prose-lg sm:prose-xl  max-w-none">Thanks for stopping by. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum dolores officia praesentium quasi eius? Provident quam tenetur alias aperiam unde labore, dolore placeat
        laudantium fugit adipisci mollitia nam illum ab dolorum quos, delectus nobis ex? And checkout my last startup, <a href="/treks/how-to-get-better-at-coding/">Flex.io</a>
      </p>
      <div class="flex justify-center py-16">
        <img src="../assets/at-my-desk.svg" width="250" alt="at my desk">
      </div>
    </div>

    <div class="container-inner text-xl border-t border-gray-500 border-b py-16 mb-16">
      <h2 class="font-bold mb-6">Highlights</h2>

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
