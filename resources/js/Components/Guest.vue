<template>
  <div class="searchMenu-guests px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters" id="guest-search"
    @click="handleGuest()">

    <div>
      <h4 class="text-15 fw-500 ls-2 lh-16">Pengunjung</h4>

      <div class="text-15 text-light-1 ls-2 lh-16">
        <span class="js-count-adult">2</span> Dewasa
        -
        <span class="js-count-child">1</span> Anak - Anak
      </div>
    </div>
    <div class="searchMenu-guests__field shadow-2" id="child-guest-search">
      <div class="bg-white px-30 py-30 rounded-4">
        <div class="row y-gap-10 justify-between items-center">
          <div class="col-auto">
            <div class="text-15 fw-500">Dewasa</div>
          </div>

          <div class="col-auto">
            <div class="d-flex items-center js-counter" data-value-change=".js-count-adult">
              <button class="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                <i class="icon-minus text-12"></i>
              </button>

              <div class="flex-center size-20 ml-15 mr-15">
                <div class="text-15 js-count">1</div>
              </div>

              <button class="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                <i class="icon-plus text-12"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="border-top-light mt-24 mb-24"></div>

        <div class="row y-gap-10 justify-between items-center">
          <div class="col-auto">
            <div class="text-15 lh-12 fw-500">Anak</div>
            <div class="text-14 lh-12 text-light-1 mt-5">Ages 0 - 17</div>
          </div>

          <div class="col-auto">
            <div class="d-flex items-center js-counter" data-value-change=".js-count-child">
              <button class="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                <i class="icon-minus text-12"></i>
              </button>

              <div class="flex-center size-20 ml-15 mr-15">
                <div class="text-15 js-count">1</div>
              </div>

              <button class="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                <i class="icon-plus text-12"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const handleGuest = () => {
  document.getElementById('child-guest-search')?.classList.toggle('-is-active');
  document.getElementById('guest-search')?.classList.toggle('-is-dd-wrap-active');
};
</script>