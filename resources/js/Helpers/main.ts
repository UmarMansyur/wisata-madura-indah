declare const ScrollMagic: any;
declare const Swiper: any;

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

  }
  target.classList.add('animated');
  if (attrVal.includes('delay-')) {
    attrDelayPart = attrVal.split(' ').pop();
    animDelay = attrDelayPart.substr(attrDelayPart.indexOf('-') + 1) / 10;
    setTimeout(function () {
      target.classList.add('fadeIn');
      target.classList.add('is-in-view');
    }, animDelay * 100);
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

function container() {

  const animationContainer = document.querySelectorAll('[data-anim-wrap]');

  if (!animationContainer.length) {
    return;
  }

  for (let i = 0; i < animationContainer.length; i++) {
    const el = animationContainer[i];

    new ScrollMagic.Scene({
      offset: '350px',
      triggerElement: el,
      triggerHook: "onEnter",
      reverse: false,
    })
      .on('enter', function (event: any) {

        const animChilds = el.querySelectorAll('[data-anim-child]');
        el.classList.add('animated');
        animChilds.forEach(el => animateElement(el));

      })
      .addTo(new ScrollMagic.Controller());
  }

}

function sectionSlider() {
  const sectionSlider = document.querySelectorAll('.js-section-slider');
  if (!sectionSlider.length) return;

  for (let i = 0; i < sectionSlider.length; i++) {
    const el: any = sectionSlider[i];

    let prevNavElement = el.querySelector('.js-prev');
    let nextNavElement = el.querySelector('.js-next');

    if (el.getAttribute('data-nav-prev'))
      prevNavElement = document.querySelector(`.${el.getAttribute('data-nav-prev')}`);
    if (el.getAttribute('data-nav-next'))
      nextNavElement = document.querySelector(`.${el.getAttribute('data-nav-next')}`);

    let gap: any = 0;
    let loop: any = false;
    let centered: any = false;
    let pagination: any = false;
    let scrollbar: any = false;

    if (el.getAttribute('data-gap')) gap = el.getAttribute('data-gap');
    if (el.hasAttribute('data-loop')) loop = true;
    if (el.hasAttribute('data-center')) centered = true;

    if (el.getAttribute('data-pagination')) {
      let paginationElement = document.querySelector(`.${el.getAttribute('data-pagination')}`);

      pagination = {
        el: paginationElement,
        bulletClass: 'pagination__item',
        bulletActiveClass: 'is-active',
        bulletElement: 'div',
        clickable: true
      };
    }

    if (el.hasAttribute('data-scrollbar')) {
      scrollbar = {
        el: '.js-scrollbar',
        draggable: true,
      };
    }

    const colsArray = el.getAttribute('data-slider-cols').split(' ');

    let cols_base:any = 1;
    let cols_xl:any = 1;
    let cols_lg:any = 1;
    let cols_md:any = 1;
    let cols_sm:any = 1;

    colsArray.forEach((el:any) => {
      if (el.includes('base')) cols_base = el.slice(-1);
      if (el.includes('xl')) cols_xl = el.slice(-1);
      if (el.includes('lg')) cols_lg = el.slice(-1);
      if (el.includes('md')) cols_md = el.slice(-1);
      if (el.includes('sm')) cols_sm = el.slice(-1);
    });

    new Swiper(el, {
      speed: 600,
      autoHeight: true,

      centeredSlides: centered,
      parallax: true,
      watchSlidesVisibility: true,
      loop: loop,
      loopAdditionalSlides: 1,
      preloadImages: false,
      width: 250,

      scrollbar: scrollbar,
      pagination: pagination,
      spaceBetween: 10,

      slidesPerView: parseInt(cols_base),
      breakpoints: {
        1199: { slidesPerView: parseInt(cols_xl), width: null, spaceBetween: parseInt(gap), },
        991: { slidesPerView: parseInt(cols_lg), width: null, spaceBetween: parseInt(gap), },
        767: { slidesPerView: parseInt(cols_md), width: null, spaceBetween: parseInt(gap), },
        574: { slidesPerView: parseInt(cols_sm), width: null, spaceBetween: parseInt(gap), },
      },

      lazy: {
        loadPrevNext: true,
      },
      navigation: {
        prevEl: prevNavElement,
        nextEl: nextNavElement,
      },
    });
  }
}


export {
  animInit,
  container,
  header,
  isInView,
  sectionSlider,
  animateElement
}