<template>
  <div class="sidebar__item pb-30">
    <h5 class="text-18 fw-500 mb-10 mt-10">Price</h5>
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
                    aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="2000.0" aria-valuenow="500.0"
                    aria-valuetext="$500">
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
</template>