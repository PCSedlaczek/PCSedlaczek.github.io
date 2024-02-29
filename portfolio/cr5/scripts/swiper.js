// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

var slides = [
  "adam-hles-XhB9fPPpT8s-unsplash.jpg",
  "adiphotography-4923824-pixabay.jpg",
  "alain-pichot-6kw4HHGAQFk-unsplash.jpg",
  "alvan-nee-73flblFUksY-unsplash.jpg",
  "andrew-schultz-DTSDD968Mpw-unsplash.jpg",
  "andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg",
  "artem-beliaikin-9ZRbXlx9zQ4-unsplash.jpg",
  "berkay-gumustekin-ngqyo2AYYnE-unsplash.jpg",
  "bianca-ackermann-zOKrNguZwKo-unsplash.jpg",
  "brittney-weng-y8EUBGLDr5I-unsplash.jpg",
  "david-boyle-0YOhYO0NXPs-unsplash.jpg",
  "david-clode-km2f-EUivRU-unsplash.jpg",
  "derrick-treadwell-Ri1H25HEW7U-unsplash.jpg",
  "dupontmelissa24-6593947-pixabay.jpg",
  "flouffy-g4H8d2ffW2g-unsplash.jpg",
  "flouffy-T2ld_5QnZBQ-unsplash.jpg",
  "frances-goldberg-mnOVgsxg-8E-unsplash.jpg",
  "fukayamamo-QkhBR-m9Pck-unsplash.jpg",
  "hassan-pasha-zXGv2SrdZfU-unsplash.jpg",
  "irina-lSwleWcgPg4-unsplash.jpg",
  "jennifer-chen-aB3wYypke8M-unsplash.jpg",
  "jonathan-farber-WBjD3Y_bN8U-unsplash.jpg",
  "jonathan-fink-Sa1z1pEzjPI-unsplash.jpg",
  "josh-sorenson-K_JWksrK_Rk-unsplash.jpg",
  "joy-christian-6FOSy1Hfa40-unsplash.jpg",
  "karlijn-prot-5hMlxeWjVCo-unsplash.jpg",
  "kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",
  "kayla-farmer-Yx-u9ZNLsSs-unsplash.jpg",
  "kim-green-1VY30CTcsqE-unsplash.jpg",
  "kojirou-sasaki-eNjf3Kr6GBI-unsplash.jpg",
  "kojirou-sasaki-rdLQVeroHQ0-unsplash.jpg",
  "kojirou-sasaki-Tx7cJ3t207k-unsplash.jpg",
  "kojirou-sasaki-YBEcRCuufVk-unsplash.jpg",
  "kong-jun-9_V3wHZaS68-unsplash.jpg",
  "krista-mangulsone-9gz3wfHr65U-unsplash.jpg",
  "kristin-brown-MJymGVEazyY-unsplash.jpg",
  "kucukgulberkan-5394567-pixabay.jpg",
  "lana-werper-vFBqshrnBw8-unsplash.jpg",
  "luxstorm-1916542-pixabay.jpg",
  "melih-piranlioglu-yV7oP3S8Hig-unsplash.jpg",
  "michael-oxendine-t7wwffh6x8E-unsplash.jpg",
  "paul-hanaoka-C0zDWAPFT9A-unsplash.jpg",
  "pexels-1282309-pixabay.jpg",
  "polina-popova-PNTVcVAWNHk-unsplash.jpg",
  "roberto-carlos-roman-don-R2P6oKeuHWs-unsplash.jpg",
  "sgalagaev-5iSCtrJX5o-unsplash.jpg",
  "sq-lim-k4vhuUHv08o-unsplash.jpg",
  "taylor-sondgeroth-ltsKOg_q_Gc-unsplash.jpg",
  "wang-jiaolong-RzYBeV5IBrY-unsplash.jpg",
  "wes-hicks-qGheSe6xIVY-unsplash.jpg",
  "xavier-mirabelli-montan-CC2B_a4FpzM-unsplash.jpg",
  "yerlin-matu-GtwiBmtJvaU-unsplash.jpg",
];

let wrapper = document.getElementById("wrapper");

slides.forEach((val) => {
  wrapper.innerHTML += `
    <div class="swiper-slide"><img src="img/swiper/${val}"></div>`;
});
