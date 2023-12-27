<template>
  <div class="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar" id="calender-search" @click="handleDate()">
    <h4 class="text-15 fw-500 ls-2 lh-16">Tanggal Destinasi</h4>
    <div class="text-15 text-light-1 ls-2 lh-16">
      <span class="js-first-date">Rabu 9 Apr</span>
      -
      <span class="js-last-date">Kamis 10 Apr</span>
    </div>
    <div class="searchMenu-date__field shadow-2" id="child-calendar-search">
      <div class="bg-white px-30 py-30 rounded-4">
        <div
          class="overflow-hidden js-calendar-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight">
          <div class="swiper-wrapper" id="swiper-wrapper" aria-live="polite" style="height: 416px;">
            <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 12" style="width: 420px;">
              <div class="text-28 fw-500 text-center mb-10">{{ months[0] }}</div>
              <div class="table-calendar js-calendar-single">
                <div class="table-calendar__header">
                  <div v-for="day in days" :key="day">{{ day }}</div>
                </div>
                <div class="table-calendar__grid overflow-hidden">
                  <div v-for="(date, i) in dates" :key="i" :data-index="i" data-week="Sun" data-month="Dec"
                    class="table-calendar__cell lh-1 text-light-1">
                    <span class="js-date">{{ date }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 12" style="width: 420px;">
              <div class="text-28 fw-500 text-center mb-10">{{ months[1] }}</div>
              <div class="table-calendar js-calendar-single">
                <div class="table-calendar__header">
                  <div v-for="day in days" :key="day">{{ day }}</div>
                </div>
                <div class="table-calendar__grid overflow-hidden">
                  <div v-for="(date, i) in dates2" :key="i" :data-index="i" data-week="Sun" data-month="Dec"
                    class="table-calendar__cell lh-1 text-light-1">
                    <span class="js-date">{{ date }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="calendar-icon -left js-calendar-prev z-2 " tabindex="-1"
            aria-label="Previous slide" aria-controls="swiper-wrapper" aria-disabled="true" @click="prevMonth()">
            <i class="icon-arrow-left text-24"></i>
          </button>
          <button type="button" class="calendar-icon -right js-calendar-next z-2" tabindex="0" aria-label="Next slide"
            aria-controls="swiper-wrapper" aria-disabled="false" @click="nextMonth()">
            <i class="icon-arrow-right text-24"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

let monthNames = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

let days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

let ActiveMonth = ref(new Date().getMonth());
let year = ref(new Date().getFullYear());
let dates = ref<number[]>([]);
let dates2 = ref<number[]>([]);
let months = ref<string[]>([]);

const generateCalendar = () => {
  let totalFeb = 28;

  if ((year.value % 100 !== 0) && (year.value % 4 === 0) || (year.value % 400 === 0)) {
    totalFeb = 29;
  }

  let totalDays = [31, totalFeb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (ActiveMonth.value % 2 !== 0) {
    ActiveMonth.value = ActiveMonth.value - 1;
  }



  let monthActive = ActiveMonth.value;

  let firstDay = new Date(year.value, monthActive, 1).getDay();

  if (monthActive === 0) {
    let i = totalDays[11] - (firstDay - 1);
    dates.value = generateDate(totalDays[11], totalDays[monthActive], i);
  } else {
    let i = totalDays[monthActive - 1] - (firstDay - 1);
    dates.value = generateDate(totalDays[monthActive - 1], totalDays[monthActive], i);
  }

  let nextMonth = (monthActive + 1) % 12;
  months.value = [monthNames[monthActive] + ' ' + year.value, monthNames[nextMonth] + ' ' + year.value];
  firstDay = new Date(year.value, nextMonth, 1).getDay();

  let i = totalDays[monthActive] - (firstDay - 1);

  dates2.value = generateDate(totalDays[monthActive], totalDays[nextMonth], i);

};

const handleDate = () => {
  document.getElementById('child-calendar-search')?.classList.toggle('-is-active');
  document.getElementById('calender-search')?.classList.toggle('-is-dd-wrap-active');
  generateCalendar();
};

const generateDate = (prevDays: number, activeDays: number, i: number) => {
  let tanggal: number[] = [];
  let prevMonthCheck = false;
  while (tanggal.length <= 42) {
    if (i > prevDays && !prevMonthCheck) {
      i = 1;
      prevMonthCheck = true;
    } else if (i > activeDays && prevMonthCheck) {
      break;
    }
    tanggal.push(i);
    i++;
  }
  return tanggal;
};

const nextMonth = () => {
  ActiveMonth.value = (ActiveMonth.value + 2) % 12;
  if (ActiveMonth.value === 0) {
    year.value++;
  }
  document.getElementById('child-calendar-search')?.classList.toggle('-is-active');
  document.getElementById('calender-search')?.classList.toggle('-is-dd-wrap-active');
  generateCalendar();
};

const prevMonth = () => {
  ActiveMonth.value = (ActiveMonth.value - 1 + 12) % 12;
  if (ActiveMonth.value === 11) {
    year.value--;
  }
  document.getElementById('child-calendar-search')?.classList.toggle('-is-active');
  document.getElementById('calender-search')?.classList.toggle('-is-dd-wrap-active');
  generateCalendar();
};
</script>

