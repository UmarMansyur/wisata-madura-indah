

<template>
  <header class="header  js-header" data-x="header" data-x-toggle="is-menu-opened">
    <div data-anim="fade" class="header__container container">
      <div class="row justify-between items-center">

        <div class="col-auto">
          <div class="d-flex items-center">
            <Link href="/" class="header-logo mr-20" data-x="header-logo" data-x-toggle="is-logo-dark">
            <img src="/img/general/logo.svg" alt="logo icon">
            <span class="text-white">Madura Indah Wisata</span>
            </Link>
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
                      <!-- <a data-barba href="#">
                        <span class="mr-10">Home</span>
                        <i class="icon icon-chevron-sm-down"></i>
                      </a> -->

                      <ul class="subnav">
                        <!-- <li class="subnav__backBtn js-nav-list-back">
                          <a href="#"><i class="icon icon-chevron-sm-down"></i> Home</a>
                        </li> -->

                        <li><a href="/">Home 1</a></li>

                      </ul>

                    </li>
                    <li class="menu-item-has-children">
                      <a data-barba href="#">
                        <span class="mr-10">Home</span>
                      </a>
                    </li>
                    <li class="menu-item-has-children">
                      <a data-barba href="#">
                        <span class="mr-10">About</span>
                      </a>
                    </li>
                    <li class="menu-item-has-children">
                      <a data-barba href="#">
                        <span class="mr-10">Destinasi</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                </div>
              </div>
            </div>


            <div class="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
              <a href="login.html" class="button px-30 fw-400 text-14 -blue-1 bg-white h-50 text-dark-1">Registrasi Wisata
                Baru</a>
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
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>


<style lang="css">
.menu-item-has-children:hover {
  color: black;
}
.menu-item-has-children:hover>a {
  color: lightblue;
}
</style>
