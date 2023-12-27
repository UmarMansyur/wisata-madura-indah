<template>
  <main>
    <div class="header-margin"></div>
    <TheHeader />
    <section class="pt-40 pb-40 bg-dark-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <h1 class="text-30 fw-600 text-white">Find Your Dream Luxury Hotel</h1>
            </div>

            <SearchDestionation />
          </div>
        </div>
      </div>
    </section>
    <section class="layout-pt-md layout-pb-lg mt-0 pt-30">
      <div class="container">
        <div class="row y-gap-30">
          <div class="col-xl-3 col-lg-4 lg:d-none">
            <ActivityType />
            <Price />
            <div class="sidebar__item">
              <h5 class="text-18 fw-500 mb-10 mt-10">Star Rating</h5>
              <div class="row x-gap-10 y-gap-10 pt-10">

                <div class="col-auto">
                  <a href="#" class="button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100">1</a>
                </div>

                <div class="col-auto">
                  <a href="#" class="button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100">2</a>
                </div>

                <div class="col-auto">
                  <a href="#" class="button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100">3</a>
                </div>

                <div class="col-auto">
                  <a href="#" class="button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100">4</a>
                </div>

                <div class="col-auto">
                  <a href="#" class="button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100">5</a>
                </div>

              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-8">
            <div class="row y-gap-10 items-center justify-between">
              <div class="col-auto">
                <div class="text-18"><span class="fw-500">3,269 properties</span> in Europe</div>
              </div>

              <div class="col-auto">
                <div class="row x-gap-20 y-gap-20">
                  <div class="col-auto">
                    <button class="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                      <i class="icon-up-down text-14 mr-10"></i>
                      Sort
                    </button>
                  </div>

                  <div class="col-auto d-none lg:d-block">
                    <button data-x-click="filterPopup"
                      class="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                      <i class="icon-up-down text-14 mr-10"></i>
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-top-light mt-30 mb-30"></div>

            <div class="row y-gap-30">

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/1.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                      <div class="cardImage__leftBadge">
                        <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-dark-1 text-white">
                          LIKELY TO SELL OUT*
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Westminster Borough, London</p>

                    <div class="row justify-between items-center pt-10">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="icon-star text-yellow-1 text-10 mr-5"></div>

                          <div class="text-14 text-light-1">
                            <span class="text-15 text-dark-1 fw-500">4.82</span>
                            94 reviews
                          </div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          From <span class="text-16 fw-500 text-dark-1">US$72</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>

            <div class="border-top-light mt-30 pt-30">
              <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                <div class="col-auto md:order-1">
                  <button class="button -blue-1 size-40 rounded-full border-light">
                    <i class="icon-chevron-left text-12"></i>
                  </button>
                </div>

                <div class="col-md-auto md:order-3">
                  <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">1</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">3</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">5</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">...</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">20</div>

                    </div>

                  </div>

                  <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">1</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">3</div>

                    </div>

                  </div>

                  <div class="text-center mt-30 md:mt-10">
                    <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                  </div>
                </div>

                <div class="col-auto md:order-2">
                  <button class="button -blue-1 size-40 rounded-full border-light">
                    <i class="icon-chevron-right text-12"></i>
                  </button>
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
import ActivityType from './activitytype.vue';
import TheFooter from '../../Components/TheFooter.vue';
import TheHeader from '../../Components/TheHeader.vue';
import Price from '../Destination/Price.vue';
import {
  animInit,
  animateElement,
  isInView,
} from '../../Helpers/main';
import { onMounted } from 'vue';
import TheContentSearch from '../../Components/TheContentSearch.vue';
import SearchDestionation from '../../Components/SearchDestionation.vue';

onMounted(() => {
  document.title = 'Madura Indah Wisata Travel & Tour';
  animInit();
  const anim = document.querySelectorAll('[data-anim]');
  anim.forEach((el: any) => isInView(el));
  const animChilds: any = document.querySelectorAll('[data-anim-child]');
  animChilds.forEach((el: any) => animateElement(el));

  new LazyLoad({
    elements_selector: '.js-lazy'
  });
  document.querySelector('.js-header')?.classList.add('bg-dark-1');
});
</script>