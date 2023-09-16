
<template>
  <main>
    <header class="header  js-header" data-x="header" data-x-toggle="is-menu-opened">
      <div data-anim="fade" class="header__container container">
        <div class="row justify-between items-center">

          <div class="col-auto">
            <div class="d-flex items-center">
              <a href="index.html" class="header-logo mr-20" data-x="header-logo" data-x-toggle="is-logo-dark">
                <img src="/img/general/logo.svg" alt="logo icon">
                <span class="text-white">Madura Indah Wisata</span>
              </a>
            </div>
          </div>


          <div class="col-auto">
            <div class="d-flex items-center">

              <div class="header-menu " data-x="mobile-menu" data-x-toggle="is-menu-active">
                <div class="mobile-overlay"></div>

                <div class="header-menu__content">
                  <div class="mobile-bg js-mobile-bg"></div>

                  <div class="menu js-navList">
                    <ul class="menu__nav text-white -is-active">

                      <li class="menu-item-has-children">
                        <a data-barba href="#">
                          <span class="mr-10">Home</span>
                          <i class="icon icon-chevron-sm-down"></i>
                        </a>

                        <ul class="subnav">
                          <li class="subnav__backBtn js-nav-list-back">
                            <a href="#"><i class="icon icon-chevron-sm-down"></i> Home</a>
                          </li>

                          <li><a href="index.html">Home 1</a></li>

                          <li><a href="home-2.html">Home 2</a></li>

                          <li><a href="home-3.html">Home 3</a></li>

                          <li><a href="home-4.html">Home 4</a></li>

                          <li><a href="home-5.html">Home 5</a></li>

                          <li><a href="home-6.html">Home 6</a></li>

                          <li><a href="home-7.html">Home 7</a></li>

                          <li><a href="home-8.html">Home 8</a></li>

                          <li><a href="home-9.html">Home 9</a></li>

                          <li><a href="home-10.html">Home 10</a></li>

                        </ul>

                      </li>
                    </ul>
                  </div>

                  <div class="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                  </div>
                </div>
              </div>


              <div class="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                <a href="login.html" class="button px-30 fw-400 text-14 -blue-1 bg-white h-50 text-dark-1">Registrasi Wisata Baru</a>
                <a href="signup.html" class="button px-30 fw-400 text-14 border-white -blue-1 h-50 text-white ml-20">Sign
                  In / Sign Up</a>
              </div>

              <div class="d-none xl:d-flex x-gap-20 items-center pl-30 text-white" data-x="header-mobile-icons"
                data-x-toggle="text-white">
                <div><a href="login.html" class="d-flex items-center icon-user text-inherit text-22"></a></div>
                <div><button class="d-flex items-center icon-menu text-inherit text-20"
                    data-x-click="html, header, header-logo, header-mobile-icons, mobile-menu"></button></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>

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

            <div data-anim-child="slide-up delay-6"
              class="mainSearch -w-950 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 mt-40">
              <div class="button-grid items-center">

                <div class="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">

                  <div data-x-dd-click="searchMenu-loc">
                    <h4 class="text-15 fw-500 ls-2 lh-16">Lokasi</h4>

                    <div class="text-15 text-light-1 ls-2 lh-16">
                      <input autocomplete="off" type="search" placeholder="Kemana Anda Pergi?"
                        class="js-search js-dd-focus" />
                    </div>
                  </div>
                </div>


                <div class="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">

                  <div data-x-dd-click="searchMenu-date">
                    <h4 class="text-15 fw-500 ls-2 lh-16">Tanggal Destinasi</h4>

                    <div class="text-15 text-light-1 ls-2 lh-16">
                      <span class="js-first-date">Rabu 9 Apr</span>
                      -
                      <span class="js-last-date">Kamis 10 Apr</span>
                    </div>
                  </div>
                </div>


                <div class="searchMenu-guests px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters">

                  <div data-x-dd-click="searchMenu-guests">
                    <h4 class="text-15 fw-500 ls-2 lh-16">Pengunjung</h4>

                    <div class="text-15 text-light-1 ls-2 lh-16">
                      <span class="js-count-adult">2</span> Dewasa
                      -
                      <span class="js-count-child">1</span> Anak - Anak
                    </div>
                  </div>
                </div>


                <div class="button-item">
                  <button class="mainSearch__submit button -dark-1 py-15 px-40 col-12 rounded-100 bg-blue-1 text-white">
                    <i class="icon-search text-20 mr-10"></i>
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  </main>
</template>
<script lang="ts">
declare const ScrollMagic: any;
declare const window: any;
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

onMounted(() => {
  animInit();
  const anim = document.querySelectorAll('[data-anim]');
  anim.forEach((el: any) => isInView(el));
  const animChilds: any = document.querySelectorAll('[data-anim-child]');
  animChilds.forEach((el: any) => animateElement(el));
  header();
});
function animInit() {
  const elementsToAnimate = document.querySelectorAll('[data-anim-child="fade"]');
  elementsToAnimate.forEach(function (element: any) {
    element.style.opacity = '0';
    element.style.transition = 'opacity 1s';
    setTimeout(function () {
      element.style.opacity = '1';
    }, 100);
  });
}


function animateElement(target: any) {
  let attrVal: any;
  let animDelay: any;
  let attrDelayPart: any;

  if (target.getAttribute('data-anim')) {
    attrVal = target.getAttribute('data-anim');
  } else {
    attrVal = target.getAttribute('data-anim-child');
    target.classList.add('is-in-view');
  }
  target.classList.add('animated');
  if (attrVal.includes('delay-')) {
    attrDelayPart = attrVal.split(' ').pop();
    animDelay = attrDelayPart.substr(attrDelayPart.indexOf('-') + 1) / 10;
    setTimeout;
  }
}

function header() {
  const header = document.querySelector('.js-header');
  if (!header) return;

  new ScrollMagic.Scene({
    offset: '6px'
  })
    .setClassToggle(header, 'is-sticky')
    .setClassToggle(header, 'bg-dark-1')
    .addTo(new ScrollMagic.Controller());
}

function isInView(el: any) {
  el.classList.add('is-in-view');
}

</script>