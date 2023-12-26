<template>
    
    <div class="container first_header mb-5">
      <div></div>
      <div
        style="position:absolute;height: 100%; width: 100%; background-color:rgba(0, 0, 0,.3);left:0px;z-index:0;">
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
                <img src="frontend/icons/location.svg" alt="">
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
                  <img src="frontend/icons/calendar.svg" alt="">
                </button>


                <!-- calander date picker js -->
                <!-- <script src="js/scripts.js"></script> -->


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
                <img src="frontend/icons/arrow-right.svg" alt="">
              </div>

            </div>
          </div>
          <!-- end col3 -->
          <!-- button -->
          <div class="col-lg-2  rounded rounded-4 ms-2 mt-4 d-flex  align-items-center justify-content-center mb-md-0">
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
      <h1 class="mt-5 mb-4">Destinations</h1>
      <div id="myCarousel" class="owl-carousel owl-theme my-1">
        <!-- get photos of destination -->
        <div class="card card1 overflow-hidden border-0">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
            style="width: 150px; height: 180px;">

          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

          <div class="card-body">
            <p>pyramids</p>
          </div>
        </div>
        <!--  -->
        <div class="card card1 overflow-hidden border-0">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
            style="width: 150px; height: 180px;">

          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

          <div class="card-body">
            <p>Aswan</p>
          </div>
        </div>
        <!--  -->
        <div class="card card1 overflow-hidden border-0 ">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
            style="width: 150px; height: 180px;">

          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

          <div class="card-body">
            <p>Sunsets</p>
          </div>
        </div>

        <!--  -->

        <div class="card card1 overflow-hidden border-0 ">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
            style="width: 150px; height: 180px;">

          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

          <div class="card-body">
            <p>Luxur</p>
          </div>
        </div>

        <!--  -->
        <div class="card card1 overflow-hidden border-0 ">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
            style="width: 150px; height: 180px;">

          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

          <div class="card-body">
            <p>Damietta</p>
          </div>
        </div>
        <!--  -->
        <div class="card card1 overflow-hidden border-0">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"
            style="width: 150px; height: 180px;">

          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">

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

              <img src="frontend/imgs/alex.jpg" alt="trip" class="card-img-top  new-trip-img">
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
                  <!-- <img src="frontend/icons/people.svg" width="30px"></i> -->
                  <img src="frontend/icons/people.svg" width="30px">
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

              <img src="frontend/imgs/alex.jpg" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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

              <img src="frontend/imgs/alex.jpg" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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

              <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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

              <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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

              <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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
        <img src="frontend/imgs/customize.png" alt="" class="cust-img">



        <div class="dream-text1">
          <h1>You Can customize <br> Your Tour</h1>
          <!-- <a href="#" class="btn bg-white p-3 mt-3">Customize Now</a> -->
          <routerLink class="btn bg-white p-3 mt-3" :to="{name:'customize'}" >Customize Now</routerLink>
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

              <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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

              <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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

              <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
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
                <span><img src="frontend/icons/people.svg" width="30px"></span>
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
        <img src="frontend/imgs/cairo_tower11.PNG" class="card-img-top" height="300" alt="Image 1" />

        <div class="over-blog">
          <h5> Cairo Tower</h5>
          <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
        </div>
      </div>

      <!--  -->
      <div class="card blog  my-3"> <!--shadow-->
        <img src="frontend/imgs/blo.png" class="card-img-top" alt="Image 2" height="300" />

        <div class="over-blog">
          <h5> Cairo Tower</h5>
          <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
        </div>

      </div>
      <div class="card blog  my-3"> <!--shadow-->
        <img src="frontend/imgs/blo1.png" class="card-img-top" alt="Image 3" height="300" />

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
            <div class="card-header bg-transparent bg-transparent d-flex justify-content-center border-0">
              <img src="frontend/imgs/alex.jpg" alt="" class="border border-2 rounded-circle" width="70px" height="70px">
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
            <div class="card-header bg-transparent bg-transparent d-flex justify-content-center border-0">
              <img src="frontend/imgs/alex.jpg" alt="" class="border border-2 rounded-circle" width="70px" height="70px">
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
            <div class="card-header bg-transparent bg-transparent d-flex justify-content-center border-0">
              <img src="frontend/imgs/alex.jpg" alt="" class="border border-2 rounded-circle" width="70px" height="70px">
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
          <img src="frontend/imgs/clients_openion.PNG" alt="" width="110%">
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
                    <!-- <script src="js/script_stars.js"></script> -->
      
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

<!-- end client opinion -->
</template>


<script>
export default{
    name:'HomePage',
    
}





</script>

<style>
/* @import '../../../public/frontend/css/style.css'; */

.first_header {
      background-image: url('../../../public/frontend/imgs/cover2.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      /* background-position: bottom; */
    }

    .white-div {
      position:absolute;
      z-index: 1;
      bottom:0px;
      height: 150px;
      
      background-color: rgb(255, 255, 255);
      width: 100%;
      left: 0px;
      border-radius: 30px;
      
    }

    @media (max-width:990px) {
      .white-div {
        height: 420px !important;
        padding-left: 30px;
        padding-right: 30px;

      }

    }

    input {
      width: 10px;
      height: 27px;
      color: white;
    }
    




    /*  */
    *{
    box-sizing: border-box;
    padding: 0px;
}
ul{
    font-size: 20px;
}
ul li{
    padding-left: 20px;
}
.sign{
    background-color: #ff7013;
    color: white;
    padding: 12px;
    font-size: 20px;
}
.sign:hover{
    background-color: #e29b6b;
}
.first_header{
    height: 577px;
    border: solid 1px;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
   
    /* background-size: auto; */
    
}
@media (max-width:990px) {
    .first_header{
        background-position:70% 50%;
        height: 900px;
       
    }
   
 

}
.loc_ico,.date_ico{
    font-size: 30px;
    color: #ff7013;
   
}


.where p{
    font-size: 14px;
}
.btn_search1{
    background-color: #ff7013;
    color: #fff;
    
    padding: 20px 40px;
    font-size: 22px !important;
    font-weight: bold;
}

@media (max-width:990px) {
    .btn_search1{
        padding: 10px 20px;
        font-size: 20px;
        font-weight: bold;

    }

    
}

.dream-text{
    position: absolute;
    top: 150px;
    left: 60px;
    
}
.dream-text h1{
    font-size: 50px;
    font-weight: bolder;
    color: white;
}
.dream-text p{
    font-weight: bolder;
    color: white;
    
    

}
.card1{
    width: 150px;
  
    
}
.card1 p{
    margin-left: 30px;
}
.img-over1{
    position: absolute;
    top:0px;
     width: 150px;
     height: 180px;
     transition: opacity 1s;
     
     
}
.card:hover .img-over1{
    opacity: 1 !important;
}
/*  */

.new-trip-img{
    position: relative;
    width: 100%;
   
    
    
}
.new-trip-img-over{
    position: absolute;
    top: 10px;
    /* left: 10px; */
    width: 80%;
    

}
.card-trip img{
    max-height: 400px !important ;
    
}
/* buttons new trip , top trip */
.aa{
        padding: 0px 20px;
        background-color: rgb(9, 202, 64);
        border: none;
        font-weight: bold;
}
.aa1 {
    padding: 0px 20px;
        background-color: #ff7013;
        border: none;
        font-weight: bold;

}
.aa2{
    padding: 0px 20px;
    background-color: #763001;
    border: none;
    font-weight: bold;

}

.customize{
    width: 100%;
    position: relative;
   
    
   
}

.customize .cust-img{
    width: 100%;
   
 
    
}

@media (max-width:800px) {
    .customize .cust-img{
    height: 200px;
        
    }
}
.dream-text1{
position: absolute;
top: 20%;
left: 60px;
z-index: 9999;


}

@media (max-width:990px) {
    .dream-text1{
        top: 10%;
        left: 60px;
        z-index: 9999;
      
        
    }
}


.dream-text1 h1{
    font-size: 50px;
    font-weight: bolder;
    color: white;
}
@media(max-width:990px) {
    .dream-text1 h1{
        font-size: 30px;
    }
}
.dream-text1 a{
    color: orange;
    font-weight: bold;
}
    
.blog{
    height: 400px;
    background-color: transparent;
    border: none;
    position: relative;
    /* overflow: hidden; */
   
    
}
.blog img{
    height: 100%;
    border-radius: 10%;
   
   
}
.over-blog{
    position: absolute;
    background-color: rgba(0, 0, 0,.3);
    height: 100%;
    width: 100%;
    border-radius: 10%;
    
    
}
.over-blog h5, .over-blog p{
    color: white;
    margin-left: 30px;
    
 
}
.over-blog h5{
    margin-top: 300px;
    
}
/*  */
/*  */
.explore .card{
    padding-top: 50px;
    border-radius: 30px;

}
.explore p{
    color: black;
   
 
}
.fa-star{
    color: rgb(232, 217, 5);
}
.openion img{
    transform: scale(.75,.75);
   
   
}
.openion h1{
    font-size: 50px;
}
.openion .op{
    padding-top: 40px;
   
}
.openion p{
    margin-left: 30px;
}
.openion span{
    padding-left: 30px;
}
.foot-div{
    width: 70%;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: justify;
 
}
.foot li{
    font-family:Arial, Helvetica, sans-serif;
    padding-bottom: 20px;
    font-size: 16px;

}
.social{
    color: #ff7013;
    font-size: 23px;
}
.foot p{
    font-size: 13px;
}

/* side navbar */
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
   
  }
  
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .sidenav a:hover {
    color: #f1f1f1;
  }
  
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    z-index: 9999;
  }
  
  #main {
    transition: margin-left .5s;
    padding: 16px;
    display: none;
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
 


  @media (max-width:990px) {

    
    #main {
        display: block;
    }
    
  }


  /*  */
  /*  */
  /*  */

 



  /*  */
  /*  */
  /*  */


    

  </style>

