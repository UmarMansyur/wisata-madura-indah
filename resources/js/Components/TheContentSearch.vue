<template>
  <section data-anim-wrap class="masthead -type-6">
    <div data-anim-child="fade" class="masthead__bg bg-dark-3">
      <img src="img/general/home-2.jpg" alt="image">
    </div>

    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-9">
          <div class="text-center">
            <h1 data-anim-child="slide-up delay-4" class="text-60 lg:text-40 md:text-30 text-white">
              Madura Indah Wisata Travel & Tour
            </h1>
            <p data-anim-child="slide-up delay-5" class="text-white mt-5">
              Temukan tempat menakjubkan dengan penawaran eksklusif
            </p>
          </div>

          <SearchDestination/>
        </div>
      </div>
    </div>
  </section>
  <section class="layout-pt-md layout-pb-md bg-light-2">
    <div class="container">
      <div class="row y-gap-30">

        <div class="col-lg-4 col-md-6">
          <div class="d-flex pr-30">
            <img class="size-50" src="img/featureIcons/1/1.svg" alt="image">

            <div class="ml-15">
              <h4 class="text-18 fw-500">Harga Terbaik</h4>
              <p class="text-15 mt-10">Kami menawarkan harga terbaik untuk Anda.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="d-flex pr-30">
            <img class="size-50" src="img/featureIcons/1/2.svg" alt="image">

            <div class="ml-15">
              <h4 class="text-18 fw-500">Mudah & Cepat</h4>
              <p class="text-15 mt-10">Anda dapat memesan tiket dengan mudah dan cepat.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="d-flex pr-30">
            <img class="size-50" src="img/featureIcons/1/3.svg" alt="image">

            <div class="ml-15">
              <h4 class="text-18 fw-500">Layanan Pelanggan 24/7</h4>
              <p class="text-15 mt-10">Kami siap melayani Anda 24 jam sehari.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchDestination from './SearchDestionation.vue';

</script>