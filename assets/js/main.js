document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numbers = document.querySelectorAll(".number");
        numbers.forEach((number) => {
          animateNumber(number);
        });
        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector("#stats");
  observer.observe(target);

  function animateNumber(element) {
    const max = +element.getAttribute("data-max");
    let current = 0;
    const increment = max / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= max) {
        element.textContent = max;
        clearInterval(interval);
      } else {
        element.textContent = Math.ceil(current);
      }
    }, 20);
  }
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
