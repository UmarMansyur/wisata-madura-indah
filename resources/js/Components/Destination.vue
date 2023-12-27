<template>
  <div class="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch" id="locationSearch" @click="search()">

    <div data-x-dd-click="searchMenu-loc">
      <h4 class="text-15 fw-500 ls-2 lh-16">Lokasi</h4>

      <div class="text-15 text-light-1 ls-2 lh-16">
        <input autocomplete="off" type="search" placeholder="Kemana Anda Pergi?" class="js-search js-dd-focus" />
      </div>
    </div>
    <div class="searchMenu-loc__field shadow-2 js-popup-window" id="formLocationSearch">
      <div class="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
        <div class="y-gap-5 js-results">
          <div>
            <button class="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
              <div class="d-flex">
                <div class="icon-location-2 text-light-1 text-20 pt-4"></div>
                <div class="ml-10">
                  <div class="text-15 lh-12 fw-500 js-search-option-target">Sumenep</div>
                  <div class="text-14 lh-12 text-light-1 mt-5">Saronngghi</div>
                </div>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function search() {
  document.getElementById("locationSearch")?.classList.toggle("-is-dd-wrap-active");
  document.getElementById("formLocationSearch")?.classList.toggle("-is-active");

}
</script>