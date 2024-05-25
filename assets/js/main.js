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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    },
  },
});

function scrollTop() {
  const scrollBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}

scrollTop();

//header lower
function handleScroll() {
  const headerLower = document.querySelector(".header-lower");
  if (window.scrollY === 0) {
    headerLower.style.display = "flex";
  } else {
    headerLower.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();

//google translator
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,ar,zh-CN",
    },
    "google_element"
  );
}
