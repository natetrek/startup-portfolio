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
      <p class="prose prose-lg sm:prose-xl  max-w-none">I'm a web software entrepreneur who loves amazing technology, good design and
        backcountry treks. Formerly, I helped build three startups where I was Co-founder & CEO: <a href="https://flexio.natewilliams.dev/" target="_blank">Flex.io</a>,
        <a href="https://goldprairie.natewilliams.dev/" target="_blank">Gold Prairie</a>, and <a href="https://www.kirix.com/" target="_blank">Kirix</a>. I'm passionate about community, conservation and code.
      </p>
    </div>

    <div class="container-inner text-xl py-12 mb-16">
      <h2 class="font-bold mb-6">Work Highlights</h2>
      <ul class="text-lg sm:text-xl space-y-6">
        <li class="checkmark">
          <div>Entrepreneurship</div>
          <div class="text-lg text-gray-600 pt-4">Brought one company full cycle from market validation and product development to building a customer base and a successful exit</div>
        </li>
        <li class="checkmark">
          <div>Product Management</div>
          <div class="text-lg text-gray-600 pt-4">Led product development teams and managed the product lifecycle for three software startups</div>
        </li>
        <li class="checkmark">
          <div>Design & Development</div>
          <div class="text-lg text-gray-600 pt-4">Designed the user interface and user experience (UI/UX) for multiple software products</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseHome",

    data: () => ({
    }),
  };
</script>
