import "/src/Components/spotlightZoneVibe100/spotlightZoneVibe100.js";
import "/src/Components/galleryMasterSeries/galleryMasterSeries.js";
import "/src/Components/environmentSection/environmentSection.js";
import "/src/Components/footer/logiFooter.js"; 

let multipleCardCarousel = document.querySelector(
    "#pop-carousel"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    let carouselWidth = $(".carousel-inner")[0].scrollWidth;
    let cardWidth = $(".carousel-item").width();
    let scrollPosition = 0;
    $("#pop-carousel .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#pop-carousel .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#pop-carousel .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#pop-carousel .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });