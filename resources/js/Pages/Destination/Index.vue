<template>
  <main>
    <div class="header-margin"></div>
    <TheHeader />
    <section class="layout-pt-md layout-pb-lg">
      <div class="container">
        <div class="row y-gap-30">
          <div class="col-xl-3 col-lg-4 lg:d-none">
            <div class="sidebar__item -no-border mb-3">
              <h5 class="text-18 fw-500 mb-10">Activity type</h5>
              <div class="sidebar-checkbox">

                <div class="row y-gap-10 items-center justify-between">
                  <div class="col-auto">

                    <div class="d-flex items-center">
                      <div class="form-checkbox ">
                        <input type="checkbox" name="name">
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div class="text-15 ml-10">Art and culture</div>

                    </div>

                  </div>

                  <div class="col-auto">
                    <div class="text-15 text-light-1">92</div>
                  </div>
                </div>

                <div class="row y-gap-10 items-center justify-between">
                  <div class="col-auto">

                    <div class="d-flex items-center">
                      <div class="form-checkbox ">
                        <input type="checkbox" name="name">
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div class="text-15 ml-10">Food and drink </div>

                    </div>

                  </div>

                  <div class="col-auto">
                    <div class="text-15 text-light-1">45</div>
                  </div>
                </div>

                <div class="row y-gap-10 items-center justify-between">
                  <div class="col-auto">

                    <div class="d-flex items-center">
                      <div class="form-checkbox ">
                        <input type="checkbox" name="name">
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div class="text-15 ml-10">Entertainment</div>

                    </div>

                  </div>

                  <div class="col-auto">
                    <div class="text-15 text-light-1">21</div>
                  </div>
                </div>

                <div class="row y-gap-10 items-center justify-between">
                  <div class="col-auto">

                    <div class="d-flex items-center">
                      <div class="form-checkbox ">
                        <input type="checkbox" name="name">
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div class="text-15 ml-10">Sports </div>

                    </div>

                  </div>

                  <div class="col-auto">
                    <div class="text-15 text-light-1">78</div>
                  </div>
                </div>

                <div class="row y-gap-10 items-center justify-between">
                  <div class="col-auto">

                    <div class="d-flex items-center">
                      <div class="form-checkbox ">
                        <input type="checkbox" name="name">
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div class="text-15 ml-10">Nature and outdoors </div>

                    </div>

                  </div>

                  <div class="col-auto">
                    <div class="text-15 text-light-1">679</div>
                  </div>
                </div>

              </div>
            </div>
            <div class="sidebar__item mb-3">
              <h5 class="text-18 fw-500 mb-10">Other</h5>
              <div class="sidebar-checkbox">

                <div class="row y-gap-10 items-center justify-between">
                  <div class="col-auto">

                    <div class="d-flex items-center">
                      <div class="form-checkbox ">
                        <input type="checkbox" name="name">
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div class="text-15 ml-10">Free cancellation</div>

                    </div>

                  </div>

                  <div class="col-auto">
                    <div class="text-15 text-light-1">92</div>
                  </div>
                </div>

              </div>
            </div>
            <div class="sidebar__item pb-30">
              <h5 class="text-18 fw-500 mb-10">Price</h5>
              <div class="row x-gap-10 y-gap-30">
                <div class="col-12">
                  <div class="js-price-rangeSlider">
                    <div class="text-14 fw-500"></div>

                    <div class="d-flex justify-between mb-20">
                      <div class="text-15 text-dark-1">
                        <span class="js-lower">$0</span>
                        -
                        <span class="js-upper">$500</span>
                      </div>
                    </div>

                    <div class="px-5">
                      <div class="js-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                        <div class="noUi-base">
                          <div class="noUi-connects">
                            <div class="noUi-connect" style="transform: translate(0%, 0px) scale(0.25, 1);"></div>
                          </div>
                          <div class="noUi-origin" style="transform: translate(-100%, 0px); z-index: 5;">
                            <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider"
                              aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="500.0" aria-valuenow="0.0"
                              aria-valuetext="$0">
                              <div class="noUi-touch-area"></div>
                            </div>
                          </div>
                          <div class="noUi-origin" style="transform: translate(-75%, 0px); z-index: 6;">
                            <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider"
                              aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="2000.0"
                              aria-valuenow="500.0" aria-valuetext="$500">
                              <div class="noUi-touch-area"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div class="filterPopup bg-white" data-x="filterPopup" data-x-toggle="-is-active">
              <aside class="sidebar -mobile-filter">
                <div data-x-click="filterPopup" class="-icon-close">
                  <i class="icon-close"></i>
                </div>

                <div class="sidebar__item -no-border">
                  <h5 class="text-18 fw-500 mb-10">Activity type</h5>
                  <div class="sidebar-checkbox">

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Art and culture</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Food and drink </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Entertainment</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">21</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Sports </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">78</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Nature and outdoors </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">679</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="sidebar__item mt-10">
                  <h5 class="text-18 fw-500 mt-10">Otasdher</h5>
                  <div class="sidebar-checkbox">

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Free cancellation</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="sidebar__item pb-30">
                  <h5 class="text-18 fw-500 mb-10">Price</h5>
                  <div class="row x-gap-10 y-gap-30">
                    <div class="col-12">
                      <div class="js-price-rangeSlider">
                        <div class="text-14 fw-500"></div>

                        <div class="d-flex justify-between mb-20">
                          <div class="text-15 text-dark-1">
                            <span class="js-lower"></span>
                            -
                            <span class="js-upper"></span>
                          </div>
                        </div>

                        <div class="px-5">
                          <div class="js-slider"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar__item">
                  <h5 class="text-18 fw-500 mb-10">Duration</h5>
                  <div class="sidebar-checkbox">

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Up to 1 hour</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">1 to 4 hours </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">4 hours to 1 day </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">21</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="sidebar__item">
                  <h5 class="text-18 fw-500 mb-10">Languages</h5>
                  <div class="sidebar-checkbox">

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">English</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Spanish</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">French</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Turkish</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">21</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="sidebar__item">
                  <h5 class="text-18 fw-500 mb-10">Popular Attractions</h5>
                  <div class="sidebar-checkbox">

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Buckingham Palace</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Tourope UK</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">European Tours Limited</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">21</div>
                      </div>
                    </div>

                    <div class="row y-gap-10 items-center justify-between">
                      <div class="col-auto">

                        <div class="d-flex items-center">
                          <div class="form-checkbox ">
                            <input type="checkbox" name="name">
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div class="text-15 ml-10">Westminster Abbey</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">78</div>
                      </div>
                    </div>

                  </div>
                </div>

              </aside>
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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">


                        <div class="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                          <div class="swiper-wrapper">

                            <div class="swiper-slide">
                              <img class="col-12" src="img/lists/activity/2/2.png" alt="image">
                            </div>

                            <div class="swiper-slide">
                              <img class="col-12" src="img/lists/activity/2/3.png" alt="image">
                            </div>

                            <div class="swiper-slide">
                              <img class="col-12" src="img/lists/activity/2/4.png" alt="image">
                            </div>

                            <div class="swiper-slide">
                              <img class="col-12" src="img/lists/activity/2/1.png" alt="image">
                            </div>

                          </div>

                          <div class="cardImage-slider__pagination js-pagination"></div>

                          <div class="cardImage-slider__nav -prev">
                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                              <i class="icon-chevron-left text-10"></i>
                            </button>
                          </div>

                          <div class="cardImage-slider__nav -next">
                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                              <i class="icon-chevron-right text-10"></i>
                            </button>
                          </div>
                        </div>

                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>Edinburgh Sky to Sea Bike Tour by Manual or E-Bike</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Ciutat Vella, Barcelona</p>

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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/3.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                      <div class="cardImage__leftBadge">
                        <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                          Best Seller
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Manhattan, New York</p>

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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/4.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                      <div class="cardImage__leftBadge">
                        <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-yellow-1 text-dark-1">
                          Top Rated
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>South Coast Full Day Tour by Minibus from Reykjavik</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Vaticano Prati, Rome</p>

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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/5.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>South Coast Full Day Tour by Minibus from Reykjavik</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Vaticano Prati, Rome</p>

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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/6.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>South Coast Full Day Tour by Minibus from Reykjavik</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Vaticano Prati, Rome</p>

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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/7.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>South Coast Full Day Tour by Minibus from Reykjavik</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Vaticano Prati, Rome</p>

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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/8.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>South Coast Full Day Tour by Minibus from Reykjavik</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Vaticano Prati, Rome</p>

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

              <div class="col-lg-4 col-sm-6">

                <a href="activity-single.html" class="activityCard -type-1 rounded-4 ">
                  <div class="activityCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/activity/2/9.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="activityCard__content mt-10">
                    <div class="text-14 lh-14 text-light-1 mb-5">6+ hours</div>

                    <h4 class="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>South Coast Full Day Tour by Minibus from Reykjavik</span>
                    </h4>

                    <p class="text-light-1 text-14 lh-14 mt-5">Vaticano Prati, Rome</p>

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
import TheFooter from '../../Components/TheFooter.vue';
import TheHeader from '../../Components/TheHeader.vue';
import {
  animInit,
  animateElement,
  isInView,
} from '../../Helpers/main';
import { onMounted } from 'vue';

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