$(document).ready(function () {
    $('#myCarousel').owlCarousel({
      items: 7, // Number of cards shown in each slide
      loop: true, // Continuously loop the carousel
      margin: 10, // Space between cards
      nav: true, // Show navigation buttons
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ], // Custom navigation icons
      autoplay: true, // Enable automatic sliding
      autoplayTimeout: 3000, // Set the duration between slides (in milliseconds)
      responsive: {
        0: {
          items: 2, // Number of cards shown in the carousel for smaller screens
        },
        768: {
          items: 3, // Number of cards shown in the carousel for medium screens
        },
        992: {
          items:6, // Number of cards shown in the carousel for large screens
        },
      },
    });
  });
  // /////////////////////////////////////////



  
//  carosel auto js id ->myCarousel1


$(document).ready(function () {
    $('#myCarousel1').owlCarousel({
      items: 4, // Number of cards shown in each slide
      loop: true, // Continuously loop the carousel
      margin: 10, // Space between cards
      nav: true, // Show navigation buttons
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ], // Custom navigation icons
      autoplay: true, // Enable automatic sliding
      autoplayTimeout: 3000, // Set the duration between slides (in milliseconds)
      responsive: {
        0: {
          items: 1, // Number of cards shown in the carousel for smaller screens
        },
        768: {
          items: 2, // Number of cards shown in the carousel for medium screens
        },
        992: {
          items:3, // Number of cards shown in the carousel for large screens
        },
      },
    });
  });



  /////////////////////////////////////////////////



  $(document).ready(function () {
    $('#myCarousel2').owlCarousel({
      items: 7, // Number of cards shown in each slide
      loop: true, // Continuously loop the carousel
      margin: 10, // Space between cards
      nav: true, // Show navigation buttons
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ], // Custom navigation icons
      autoplay: true, // Enable automatic sliding
      autoplayTimeout: 3000, // Set the duration between slides (in milliseconds)
      responsive: {
        0: {
          items: 2, // Number of cards shown in the carousel for smaller screens
        },
        768: {
          items: 3, // Number of cards shown in the carousel for medium screens
        },
        992: {
          items:6, // Number of cards shown in the carousel for large screens
        },
      },
    });
  });
  // /////////////////////////////////////////