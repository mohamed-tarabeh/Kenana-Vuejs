<template>
   <div  class="container master_div">
       
  <!-- Navbar -->
  <headerComp></headerComp>
  <!-- Navbar -->
  
  
  
  <div class="container first_header mb-5">
    <div></div>
      <div style="position:absolute;height: 100%; width: 100%; background-color:rgba(0, 0, 0,.3);left:0px;z-index:9999;">
  <div class="dream-text">
    <h1>Explore Dream <br> Tour  & Travel</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br>elit. Eligendi eum aliquam nostrum ullam reprehenderit <br> laboriosam non esse reiciendis architecto, quibusdam sunt </p>
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
      <h1 class="mb-5">Destinations</h1>
      <div id="myCarousel" class="owl-carousel owl-theme my-1">
<!-- get photos of destination -->
        <div class="card card1 overflow-hidden border-0">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"  style="width: 150px; height: 180px;">
         
          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">
       
          <div class="card-body">
            <p>pyramids</p>
          </div>
        </div>
        <!--  -->
        <div class="card card1 overflow-hidden border-0">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"  style="width: 150px; height: 180px;">
         
          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">
       
          <div class="card-body">
            <p>Aswan</p>
          </div>
        </div>
        <!--  -->
        <div class="card card1 overflow-hidden border-0 ">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"  style="width: 150px; height: 180px;">
         
          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">
       
          <div class="card-body">
            <p>Sunsets</p>
          </div>
        </div>

        <!--  -->

        <div class="card card1 overflow-hidden border-0 ">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"  style="width: 150px; height: 180px;">
         
          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">
       
          <div class="card-body">
            <p>Luxur</p>
          </div>
        </div>

        <!--  -->
        <div class="card card1 overflow-hidden border-0 ">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"  style="width: 150px; height: 180px;">
         
          <img src="frontend/imgs/Lighthouse.jpg" class="img-over1 card-img-top rounded rounded-pill" style="opacity: 0;">
       
          <div class="card-body">
            <p>Damietta</p>
          </div>
        </div>
        <!--  -->
        <div class="card card1 overflow-hidden border-0">
          <img src="frontend/imgs/ii.png" alt="" class="card-img-top im1 rounded position-relative rounded-pill"  style="width: 150px; height: 180px;">
         
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
     
      <div class="d-flex justify-content-between mb-5 mt-5">
        <h1>New Trips</h1>
        <span>See More</span>
      </div>

      <div class="row">
     <div class="col-md-6 col-lg-4 card-trip">
      <div class="card rounded-4 overflow-hidden mb-4">
        <div class="card-header bg-transparent p-0">
          
            <img src="frontend/imgs/alex.jpg" alt="trip" class="card-img-top  new-trip-img"  >
            <div class="new-trip-img-over d-flex container justify-content-between  w-100 "> 
                    <button class=" aa btn btn-success text-white rounded-pill ">
                      New Trips
                    </button>
                    
                      <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
                   

                  </div>
                </div>
        <div class="card-body">
              <div class="d-flex justify-content-between">
              <span>Pyramids -Egypt</span>
              <span><i class="fas fa-calendar date_ico"></i></span>
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
                    
                      <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
                   
                    </div>
                  </div>
        <div class="card-body">
              <div class="d-flex justify-content-between">
              <span>Pyramids -Egypt</span>
              <span><i class="fas fa-calendar date_ico"></i></span>
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
                    
                      <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
                   

                  </div>
                </div>
        <div class="card-body">
              <div class="d-flex justify-content-between">
              <span>Pyramids -Egypt</span>
              <span><i class="fas fa-calendar date_ico"></i></span>
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

    <div class="d-flex justify-content-between mb-5 mt-5">
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
                  
                    <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
                 

                </div>
              </div>
      <div class="card-body">
            <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><i class="fas fa-calendar date_ico"></i></span>
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
                  
                    <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
                 

                </div>
              </div>
      <div class="card-body">
            <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><i class="fas fa-calendar date_ico"></i></span>
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
                  
                    <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
                 

                </div>
              </div>
      <div class="card-body">
            <div class="d-flex justify-content-between">
            <span>Pyramids -Egypt</span>
            <span><i class="fas fa-calendar date_ico"></i></span>
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
<customizeComp></customizeComp>

<!-- end customize Tour -->
<!-- =============================== -->


<!-- <hr class="container border-2"> -->

<!-- start discount -->

<div class="discount container mb-4 mt-4">
  <div class="d-flex justify-content-between mb-5 mt-5">
    <h1>Get Discounts</h1>
    <span>See More</span>
  </div>
  <div class="row">
 <div class="col-md-6 col-lg-4">
  <div class="card rounded-4 overflow-hidden card-trip mb-4">
    <div class="card-header bg-transparent p-0">
      
        <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
        <div class="new-trip-img-over d-flex justify-content-between  w-100 container "> 
                <button class=" aa1 btn btn-success text-white rounded-pill ">
                  25% OFF
                </button>
                
                  <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
               

              </div>
            </div>
    <div class="card-body">
          <div class="d-flex justify-content-between">
          <span>Pyramids -Egypt</span>
          <span><i class="fas fa-calendar date_ico"></i></span>
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
        <div class="new-trip-img-over d-flex justify-content-between  w-100 container "> 
                <button class=" aa1 btn btn-success text-white rounded-pill ">
                  25% OFF
                </button>
                
                  <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
               

              </div>
            </div>
    <div class="card-body">
          <div class="d-flex justify-content-between">
          <span>Pyramids -Egypt</span>
          <span><i class="fas fa-calendar date_ico"></i></span>
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
        <div class="new-trip-img-over d-flex justify-content-between  w-100 container"> 
                <button class=" aa1 btn btn-success text-white rounded-pill ">
                  25% OFF
                </button>
                
                  <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
               
                </div>
              </div>
    <div class="card-body">
          <div class="d-flex justify-content-between">
          <span>Pyramids -Egypt</span>
          <span><i class="fas fa-calendar date_ico"></i></span>
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
<div class="d-flex justify-content-between">
  <h1>Our Blog</h1>
  <span>See More</span>
</div>
<div id="myCarousel1" class="owl-carousel owl-theme my-3 bg-transparent">
  
  <div class="card blog  my-3"> <!--shadow-->
    <img
      src="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg" class="card-img-top" height="300" alt="Image 1"/>

      <div class="over-blog">
      <h5> Cairo Tower</h5>
      <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
      </div>
  </div>

  <!--  -->
  <div class="card blog  my-3"> <!--shadow-->
    <img src="https://images.pexels.com/photos/8754695/pexels-photo-8754695.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="Image 2" height="300"/>

    <div class="over-blog">
      <h5> Cairo Tower</h5>
      <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
      </div>
    
  </div>
  <div class="card blog  my-3"> <!--shadow-->
    <img src="https://images.pexels.com/photos/8754695/pexels-photo-8754695.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="Image 3" height="300"/>
   
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
  <div class="d-flex justify-content-between mb-5 mt-5">
    <h1>Explore Tour Guide</h1>
    <span>See More</span>
  </div>

  <div class="row">
    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 mb-4">
        <div class="card-header bg-transparent bg-transparent d-flex justify-content-center">
          <img src="frontend/imgs/alex.jpg" alt=""  class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi nisi. Architecto provident minus excepturi</p>

        </div>
    
      </div>

    </div>
    <!--  -->

    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 mb-4 ">
        <div class="card-header bg-transparent bg-transparent d-flex justify-content-center">
          <img src="frontend/imgs/alex.jpg" alt=""  class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi nisi. Architecto provident minus excepturi</p>

        </div>
    
      </div>

    </div>
    <!--  -->
    <div class="col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card border-1 mb-4 ">
        <div class="card-header bg-transparent bg-transparent d-flex justify-content-center">
          <img src="frontend/imgs/alex.jpg" alt=""  class="border border-2 rounded-circle" width="70px" height="70px">
        </div>
        <div class="card-body text-center">
          <h5>Dina Ahmed</h5>
          <strong>5.0 <i class="fa-solid fa-star"></i></strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita ea itaque excepturi nisi. Architecto provident minus excepturi</p>

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

<clientsComp></clientsComp>


<!-- ================ -->
  <!-- footer -->
<footerComp></footerComp>
  <!-- footer -->
 
  </div>
  
  <!-- end -->
 
</template>
<script>
import HeaderComp from '../components/Design/Header.vue';
import FooterComp from '../components/Design/Footer.vue';
import CustomizeComp from '../components/Design/Customize.vue';
import ClientsComp from '../components/Design/ClientSay.vue';
export default {
    components: {HeaderComp,FooterComp,ClientsComp,CustomizeComp},
    name:'MasterComp',
}
</script>
<!-- ,CustomizeComp,ClientsComp -->