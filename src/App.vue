<template>
  <img class="mx-auto h-1/4" alt="Baco logo" src="./assets/logo-baco.svg" />
  <section class="flex flex-col-reverse sm:flex-row | p-3 ">
    <a
      class="w-full h-1/3 | sm:w-1/2 sm:h-3/4 | my-2 sm:mx-3 | overflow-hidden rounded-2xl shadow-xl"
      style="background-color: #732619"
      href="https://baco.rest/"
    >
      <img
        class="object-cover w-full h-4/5 sm:h-4/5"
        src="./assets/delivery.jpg"
        alt="Fotografia de delivery"
      />
      <div
        class="flex justify-center items-center | sm:h-1/5 "
        style="background-color: #732619"
      >
        <h1 class="text-white text-xl">Delivery</h1>
      </div>
    </a>
    <a
      class="w-full h-1/3 | sm:w-1/2 sm:h-3/4 | my-2 sm:mx-3 | overflow-hidden rounded-2xl shadow-xl"
      style="background-color: #732619"
      href="https://baco.netlify.app/"
    >
      <img
        class="object-cover w-full h-4/5 sm:h-4/5"
        src="./assets/cartaQr.jpg"
        alt="carta Qr"
      />
      <div
        class="flex justify-center items-center | sm:h-1/5 "
        style="background-color: #732619"
      >
        <h1 class="text-white text-xl">Carta QR</h1>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
