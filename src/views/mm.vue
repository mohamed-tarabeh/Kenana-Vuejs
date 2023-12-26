<template>
     <div class="container master_div">


<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <!-- Container wrapper -->
  <!-- <div class="container-fluid"> -->
  <!-- Toggle button -->
  <!-- <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
  </button> -->


  <!-- side nav -->
  <div id="mySidenav" class="sidenav">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<a class="nav-link ps-5" href="#">Home</a>
<a class="nav-link" href="#">Tours</a>
<a class="nav-link" href="#">Destinations</a>
<a class="nav-link" href="#">Tour Gudies</a>
<a class="nav-link" href="#">Blog</a>

</div>

<div id="main">
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
</div>

<script>
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   document.getElementById("main").style.visibility='hidden';
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
//   document.body.style.backgroundColor = "white";
//   document.getElementById("main").style.visibility='visible';
// }
</script>
  <!-- end side nav -->




  <!-- Collapsible wrapper -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <!-- Navbar brand -->
    <a class="navbar-brand mt-2 mt-lg-0" href="#">
      <img src="imgs/logo.PNG" width="150px" height="80" alt="" loading="lazy" />
    </a>
    <!-- Left links -->
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
      <li class="nav-item">
        <a class="nav-link ps-5" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tours</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Destinations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tour Gudies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>



      <!-- <li class="nav-item">
        <a class="nav-link" href="#"><i class="fa-solid fa-globe"></i></a>
      </li> -->
    </ul>
    <!-- Left links -->
  </div>
  <!-- Collapsible wrapper -->

  <!-- Right elements -->
  <div class="d-flex align-items-center">
    <!-- Icon -->
    <a class="nav-link pe-3" href="#"><i class="fa-solid fa-globe" style="font-size: 19px;"></i></a>
    <a class="nav-link sign btn btn-primary ps-4 pe-4 rounded-4" href="#">Sign in</a>


  </div>

</nav>



<!-- end Navbar -->



<div class="container first_header mb-5">
  <div></div>
  <div
    style="position:absolute;height: 100%; width: 100%; background-color:rgba(0, 0, 0,.3);left:0px;z-index:1;">
    <div class="dream-text">
      <h1>Explore Dream <br> Tour & Travel</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br>elit. Eligendi eum aliquam nostrum ullam
        reprehenderit <br> laboriosam non esse reiciendis architecto, quibusdam sunt </p>
    </div>
  </div>
  <div class="position-absolute bottom-0  white-div container">

    <!-- white row -->
    <div class="row">
      <div class="col-lg-3 col-md-10 ms-md-3 border border-2 border rounded rounded-4  mt-4 cc">
        <!-- where card -->
        <div class="row inner_top">
          <div class="col-7 col-md-8  p-2 ps-3 where">
            <h6>Where</h6>
            <p class="small text-secondary">Lorem ipsum dolor </p>
          </div>

          <div class="col-4 d-flex justify-content-end align-items-center loc_ico">
            <!-- <i class="fa-solid fa-location-dot"></i> -->
            <img src="icons/location.svg" alt="">
          </div>
        </div>
      </div>
      <!-- end col1 -->



      <!-- col2 -->
      <div class="col-lg-3 col-md-10 border border-2 border rounded rounded-4 ms-md-3 mt-4 cc">
        <!-- where card -->
        <div class="row inner_top">
          <div class="col-7 col-md-8  p-2 ps-3 where">
            <h6>Date</h6>
            <p class="small text-secondary">Lorem ipsum dolor </p>
          </div>

          <div class="col-4 d-flex justify-content-end align-items-center date_ico">

            <!-- <i class="fas fa-calendar" id="calendar-icon"></i> -->
            <input type="text" id="date-picker" style="display: none;">
            <!-- <button id="date-picker-button" class="date_ico border-0 bg-transparent"><i class="fas fa-calendar" id="calendar-icon"></i></button> -->
            <button id="date-picker-button" class="date_ico border-0 bg-transparent">
              <img src="icons/calendar.svg" alt="">
            </button>


            <!-- calander date picker js -->
            <script src="js/scripts.js"></script>


          </div>
        </div>
      </div>
      <!-- end col2 -->

      <!-- col3 -->
      <div class="col-lg-3 col-md-10 border border-2 border rounded rounded-4 ms-md-3 mt-4  pe-0 cc">

        <!-- where card -->
        <div class="row inner_top">
          <div class="col-7 col-md-8  p-2 ps-3 where ">
            <h6>Trips Type</h6>
            <p class="small text-secondary">Type of Trip </p>
          </div>

          <div class="col-4 d-flex justify-content-end align-items-center date_ico">
            <!-- <i class="fa-solid fa-chevron-down"></i> -->
            <img src="icons/arrow-right.svg" alt="">
          </div>

        </div>
      </div>
      <!-- end col3 -->
      <!-- button -->
      <div class="col-lg-2  rounded rounded-4 ms-2 mt-4 d-flex justify-content-center align-items-center mb-md-0">
        <a href="#" class=" btn btn_search1  rounded rounded-4">Search</a>
      </div>

    </div>
    <!-- row white end -->

  </div>
</div>
<!-- end header -->

<!-- <hr class="container border-2"> -->

<!-- destination cards -->

<div class="container-fluid">
  <h1>Destinations</h1>
  <div id="myCarousel" class="owl-carousel owl-theme my-1">
    <!-- get photos of destination -->
    <div class="card card1 overflow-hidden border-0">
      <img src="imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
        style="width: 150px; height: 180px;">

      <img src="imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

      <div class="card-body">
        <p>pyramids</p>
      </div>
    </div>
    <!--  -->
    <div class="card card1 overflow-hidden border-0">
      <img src="imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
        style="width: 150px; height: 180px;">

      <img src="imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

      <div class="card-body">
        <p>Aswan</p>
      </div>
    </div>
    <!--  -->
    <div class="card card1 overflow-hidden border-0 ">
      <img src="imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
        style="width: 150px; height: 180px;">

      <img src="imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

      <div class="card-body">
        <p>Sunsets</p>
      </div>
    </div>

    <!--  -->

    <div class="card card1 overflow-hidden border-0 ">
      <img src="imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
        style="width: 150px; height: 180px;">

      <img src="imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

      <div class="card-body">
        <p>Luxur</p>
      </div>
    </div>

    <!--  -->
    <div class="card card1 overflow-hidden border-0 ">
      <img src="imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
        style="width: 150px; height: 180px;">

      <img src="imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

      <div class="card-body">
        <p>Damietta</p>
      </div>
    </div>
    <!--  -->
    <div class="card card1 overflow-hidden border-0">
      <img src="imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
        style="width: 150px; height: 180px;">

      <img src="imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

      <div class="card-body">
        <p>Alex</p>
      </div>
    </div>


  </div>

</div>
<!-- end destination carousel -->
<!-- <hr class="container border-2"> -->


<!-- new trip -->
<div class="new-trip container-fluid mb-4">

  <div class="d-flex justify-content-between mb-4 mt-4">
    <h1>New Trips</h1>
    <span>See More</span>
  </div>

  <div class="row">
    <div class="col-md-6 col-lg-4 card-trip">
      <div class="card rounded-4 overflow-hidden mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/alex.jpg" alt="trip" class="card-img-top  new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa btn btn-success text-white rounded-pill ">
              New Trips
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>


          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span>
              <!-- <img src="icons/people.svg" width="30px"></i> -->
              <img src="icons/people.svg" width="30px">
            </span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
    <!--  -->

    <div class="col-md-6 col-lg-4">
      <div class="card rounded-4 overflow-hidden mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/alex.jpg" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa btn btn-success text-white rounded-pill ">
              New Trips
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>

          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px">
           
        </span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
    <!--  -->
    <div class="col-md-6 col-lg-4 card-trip">
      <div class="card rounded-4 overflow-hidden mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/alex.jpg" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa btn btn-success text-white rounded-pill ">
              New Trips
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>


          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px"></span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
  </div>

</div>



<!-- end new trip -->
<!-- <hr class="container border-2"> -->
<!-- ======================== -->



<!-- Top Trips -->
<div class="top-trip container-fluid mb-4">

  <div class="d-flex justify-content-between mb-4 mt-4">
    <h1>Top Trips</h1>
    <span>See More</span>
  </div>

  <div class="row">
    <div class="col-md-6 col-lg-4 top-trip">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa1 btn btn-success text-white rounded-pill ">
              Top Trip
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>


          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px"></span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
    <!--  -->

    <div class="col-md-6 col-lg-4 top-trip">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa1 btn btn-success text-white rounded-pill ">
              Top Trip
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>


          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px"></span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
    <!--  -->
    <div class="col-md-6 col-lg-4 top-trip">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa1 btn btn-success text-white rounded-pill ">
              Top Trip
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>


          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px"></span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
  </div>

</div>

<!-- end top-trip -->
<!-- ======================= -->


<!-- start customize Tour -->

<div class="container">
  <div class="customize">
    <img src="imgs/customize.png" alt="" class="cust-img">



    <div class="dream-text1">
      <h1>You Can customize <br> Your Tour</h1>
      <a href="#" class="btn bg-white p-3 mt-3">Customize Now</a>
    </div>


  </div>

</div>




<!-- end customize Tour -->
<!-- =============================== -->


<!-- <hr class="container border-2"> -->

<!-- start discount -->

<div class="discount container mb-4 mt-4">
  <div class="d-flex justify-content-between mb-4 mt-4">
    <h1>Get Discounts</h1>
    <span>See More</span>
  </div>
  <div class="row">
    <div class="col-md-6 col-lg-4">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa2 btn btn-success text-white rounded-pill ">
              25% OFF
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>


          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px"></span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>

    <!--  -->

    <div class="col-md-6 col-lg-4">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa2 btn btn-success text-white rounded-pill ">
              25% OFF
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>


          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px"></span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
    <!--  -->
    <div class="col-md-6 col-lg-4">
      <div class="card rounded-4 overflow-hidden card-trip mb-4">
        <div class="card-header bg-transparent p-0">

          <img src="imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
          <div class="new-trip-img-over d-flex container justify-content-between  w-100 ">
            <button class=" aa2 btn btn-success text-white rounded-pill ">
              25% OFF
            </button>

            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
              style=" background-color: rgba(0, 0, 0,.3);"></i>

          </div>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><img src="icons/people.svg" width="30px"></span>
          </div>

          <h4>Riding Camels , See Fireworks at night</h4>
          <span class="fw-bold">100 EGP / <small class="fw-normal">Person</small></span>
        </div>

      </div>

    </div>
    <!--  -->
  </div>
</div>

<!-- end discount -->
<!-- <hr class="container border-2"> -->
<!-- ====================== -->
<!-- blog -->
<div class="d-flex justify-content-between">
  <h1>Our Blog</h1>
  <span>See More</span>
</div>
<div id="myCarousel1" class="owl-carousel owl-theme my-3 bg-transparent">

  <div class="card blog  my-3"> <!--shadow-->
    <img src="imgs/cairo_tower11.PNG" class="card-img-top" height="300" alt="Image 1" />

    <div class="over-blog">
      <h5> Cairo Tower</h5>
      <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
    </div>
  </div>

  <!--  -->
  <div class="card blog  my-3"> <!--shadow-->
    <img src="imgs/blo.png" class="card-img-top" alt="Image 2" height="300" />

    <div class="over-blog">
      <h5> Cairo Tower</h5>
      <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
    </div>

  </div>
  <div class="card blog  my-3"> <!--shadow-->
    <img src="imgs/blo1.png" class="card-img-top" alt="Image 3" height="300" />

    <div class="over-blog">
      <h5> Cairo Tower</h5>
      <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
    </div>

  </div>

</div>


<!-- End blog -->
<!-- <hr class="container border-2"> -->
<!--  ============================ -->

<div class="explore container mb-5">
  <div class="d-flex justify-content-between mb-4">
    <h1>Explor Tour Guide</h1>
    <span>See More</span>
  </div>

  <div class="row">
    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 mb-4">
        <div class="card-header bg-transparent bg-transparent d-flex justify-content-center">
          <img src="imgs/alex.jpg" alt="" class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi
            nisi. Architecto provident minus excepturi</p>

        </div>

      </div>

    </div>
    <!--  -->

    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 mb-4 ">
        <div class="card-header bg-transparent bg-transparent d-flex justify-content-center">
          <img src="imgs/alex.jpg" alt="" class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi
            nisi. Architecto provident minus excepturi</p>

        </div>

      </div>

    </div>
    <!--  -->
    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 mb-4 ">
        <div class="card-header bg-transparent bg-transparent d-flex justify-content-center">
          <img src="imgs/alex.jpg" alt="" class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi
            nisi. Architecto provident minus excepturi</p>

        </div>

      </div>

    </div>
    <!--  -->






  </div>
  <!-- end row -->


</div>
<!-- end explore -->
<!-- ======================= -->
<!-- client openion -->
<div class="container mb-5">
  <div class="row openion">
    <div class="col-lg-6 col-md-12">
      <img src="imgs/clients_openion.PNG" alt="" width="110%">
    </div>

    <div class="col-lg-6 col-md-12">
      <h1 class="mt-5 mb-5">What Our Clients Say</h1>

      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <!-- <ol class="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="First slide"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
        </ol> -->

        
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            
            <div class="card pb-5 border-bottom-0">
              <p class="text-black op">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente nihil culpa quisquam et
                doloribus error, nisi quos aut ipsa expedita provident, quam officiis distinctio fuga porro necessitatibus
                itaque eligendi?
              </p>
              <p id="starss">
                <script src="js/script_stars.js"></script>
  
              </p>
  
              <p class="text-black fw-bolder"> Soha Karim</p>
              <span class="text-black">Engineer</span>
  
  
            </div>


          </div>
          <div class="carousel-item">
            <!-- <img src="holder.js/900x500/auto/#666:#444/text:Second slide" class="w-100 d-block"
              alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Title</h3>
              <p>Description</p>
            </div> -->


            <div class="card pb-5 border-bottom-0">
              <p class="text-black op">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente nihil culpa quisquam et
                doloribus error, nisi quos aut ipsa expedita provident, quam officiis distinctio fuga porro necessitatibus
                itaque eligendi?
              </p>
              <p id="starss">
                <!-- <script src="js/script_stars.js"></script> -->
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
  
              </p>
  
              <p class="text-black fw-bolder"> Soha Karim</p>
              <span class="text-black">Engineer</span>
  
              
            </div>
            
          </div>
          
        </div>
        <!-- arrows -->
        <div class="d-flex justify-content-end border border-top-0">
        
        <button class="carousel-control btn" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
          <i class="fa fa-arrow-alt-circle-left text-black"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control btn" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
          <i class="fa fa-arrow-alt-circle-right text-black"></i>

          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
      <!-- end arrows -->

        
      </div>

      
      
    </div>
  </div>

</div>




<!-- end client opinion -->

<!-- ================ -->
<!-- footer -->

<footer class="foot ">
  <hr class="container-fluid">
  <div class="row">
    <div class="col-lg-4">
      <img src="imgs/logo.PNG" alt="" style="transform: scale(.75,.75);">
      <div class="ms-3 foot-div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis fugit unde
        tempore quaerat quia soluta</div>
    </div>
    <div class="col-lg-2">
      <ul class="list-unstyled pt-5 ul-foot">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="col-lg-2">
      <ul class="list-unstyled pt-5">
        <li>Tour</li>
        <li>Destination</li>
        <li>Blog</li>
      </ul>
    </div>
    <div class="col-lg-2">
      <ul class="list-unstyled pt-5">
        <li>Tour Guide</li>
        <li>Join As a Tour Guide</li>
        <li>FAQs</li>
        <li>Term of services</li>
        <li>Privacy Plicy</li>
      </ul>
    </div>

    <div class="col-lg-2">
      <ul class="list-unstyled pt-5">
        <i class="fa-brands fa-square-facebook me-3 social"></i>
        <i class="fa-brands fa-linkedin social me-3 "></i>
        <i class="fa-brands fa-instagram social me-3 "></i>
        <i class="fa-brands fa-square-twitter social me-3 "></i>
        <p>&copy; All Rights Reserved to Kenana 2023</p>
      </ul>
    </div>
  </div>
</footer>
</div>
</template>

<script>
export default{
   name:'MasterPage',

};

</script>