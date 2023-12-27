<template>
  <div data-anim-child="slide-up delay-6"
    class="mainSearch -w-950 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 mt-40">
    <div class="button-grid items-center">


      <Destination />

      <Calendar />

      <Guest />


      <div class="button-item">
        <button class="mainSearch__submit button -dark-1 py-15 px-40 col-12 rounded-100 bg-blue-1 text-white">
          <i class="icon-search text-20 mr-10"></i>
          Cari
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Calendar from './Calendar.vue'
  import Destination from './Destination.vue'
  import Guest from './Guest.vue'
</script>