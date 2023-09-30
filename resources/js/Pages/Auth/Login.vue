
<template>
  <main>
    <TheHeader />
    <TheContentSearch />
    <TheSpecialOrder />
    <ThePopularTour />
    <TourCategories />
    <section class="section-bg layout-pt-lg layout-pb-lg bg-light-2">
      <div class="section-bg__item col-12">
        <img src="img/backgrounds/testimonials/bg-2.svg" alt="image">
      </div>

      <div data-anim-wrap class="container">
        <div data-anim-child="slide-up delay-1" class="row justify-center text-center">
          <div class="col-auto">
            <div class="sectionTitle -md">
              <h2 class="sectionTitle__title">Testimonials</h2>
              <p class=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
            </div>
          </div>
        </div>

        <div data-anim-child="slide-up delay-2" class="row justify-center pt-50 md:pt-30">
          <div class="col-xl-7 col-lg-10">
            <div class="overflow-hidden js-testimonials-slider">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="testimonials -type-2 text-center">
                    <div class="mb-40">
                      <img src="img/misc/quote.svg" alt="quote">
                    </div>

                    <div class="text-22 md:text-18 fw-600 text-dark-1">
                      "Our family was traveling via bullet train between cities in Japan with our luggage - the location
                      for this hotel made that so easy. Agoda price was fantastic."
                    </div>

                    <div class="mt-40">
                      <h5 class="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div class="">Product Manager, Apple Inc</div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonials -type-2 text-center">
                    <div class="mb-40">
                      <img src="img/misc/quote.svg" alt="quote">
                    </div>

                    <div class="text-22 md:text-18 fw-600 text-dark-1">
                      "Our family was traveling via bullet train between cities in Japan with our luggage - the location
                      for this hotel made that so easy. Agoda price was fantastic."
                    </div>

                    <div class="mt-40">
                      <h5 class="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div class="">Product Manager, Apple Inc</div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonials -type-2 text-center">
                    <div class="mb-40">
                      <img src="img/misc/quote.svg" alt="quote">
                    </div>

                    <div class="text-22 md:text-18 fw-600 text-dark-1">
                      "Our family was traveling via bullet train between cities in Japan with our luggage - the location
                      for this hotel made that so easy. Agoda price was fantastic."
                    </div>

                    <div class="mt-40">
                      <h5 class="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div class="">Product Manager, Apple Inc</div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonials -type-2 text-center">
                    <div class="mb-40">
                      <img src="img/misc/quote.svg" alt="quote">
                    </div>

                    <div class="text-22 md:text-18 fw-600 text-dark-1">
                      "Our family was traveling via bullet train between cities in Japan with our luggage - the location
                      for this hotel made that so easy. Agoda price was fantastic."
                    </div>

                    <div class="mt-40">
                      <h5 class="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div class="">Product Manager, Apple Inc</div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonials -type-2 text-center">
                    <div class="mb-40">
                      <img src="img/misc/quote.svg" alt="quote">
                    </div>

                    <div class="text-22 md:text-18 fw-600 text-dark-1">
                      "Our family was traveling via bullet train between cities in Japan with our luggage - the location
                      for this hotel made that so easy. Agoda price was fantastic."
                    </div>

                    <div class="mt-40">
                      <h5 class="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div class="">Product Manager, Apple Inc</div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="pt-60 lg:pt-40">
                <div class="pagination -avatars row x-gap-40 y-gap-20 justify-center js-testimonials-pagination">

                  <div class="col-auto">
                    <div class="pagination__item is-active">
                      <img src="img/avatars/testimonials/1.png" alt="image">
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="pagination__item ">
                      <img src="img/avatars/testimonials/2.png" alt="image">
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="pagination__item ">
                      <img src="img/avatars/testimonials/3.png" alt="image">
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="pagination__item ">
                      <img src="img/avatars/testimonials/4.png" alt="image">
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="pagination__item ">
                      <img src="img/avatars/testimonials/5.png" alt="image">
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
<script lang="ts">

declare const LazyLoad: any;
</script>

<script setup lang="ts">
import TheHeader from '../../Components/TheHeader.vue';
import TheContentSearch from '../../Components/TheContentSearch.vue';
import TheSpecialOrder from '../../Components/TheSpecialOrder.vue';
import ThePopularTour from '../../Components/ThePopularTour.vue';
import TourCategories from '../../Components/TourCategories.vue';
import TheFooter from '../../Components/TheFooter.vue';
import {
  animInit,
  container,
  header,
  isInView,
  sectionSlider,
  animateElement
} from '../../Helpers/main';
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Madura Indah Wisata Travel & Tour';
  animInit();
  const anim = document.querySelectorAll('[data-anim]');
  anim.forEach((el: any) => isInView(el));
  const animChilds: any = document.querySelectorAll('[data-anim-child]');
  animChilds.forEach((el: any) => animateElement(el));
  header();
  new LazyLoad({
    elements_selector: '.js-lazy'
  });
  container();
  sectionSlider();
});


</script>