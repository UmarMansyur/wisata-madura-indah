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