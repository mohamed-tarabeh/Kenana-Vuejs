<template>

<!-- main -->

<main>

<div class="container mt-5">
  <h2>Favourites</h2>
</div>

<div class="tabs mt-5">
  <div class="tab-buttons">
    <button class="tab-button active-tab-button p-3" style="width: 400px;border-bottom-color: orangered;"
    @click="toggleTab(0)">TOURS</button>
    <button class="tab-button p-3"  @click="toggleTab(1)" style="width: 400px">Destination</button>
    <button class="tab-button p-3"  @click="toggleTab(2)" style="width: 400px">Blog</button>
    <!-- <button class="tab-button" onclick="toggleTab(2)">Tab 3</button> -->
  </div>
  <!-- tab1 -->
  <div class="tab mt-3 p-0 row11" id="tab1">
    <!-- <h2>Tours</h2>
  <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolor sapiente, nesciunt atque, totam quasi pariatur perspiciatis exercitationem nostrum nihil harum saepe. Consequuntur eaque corrupti adipisci porro nesciunt sint quos.</p> -->

  <!-- tours -->
<div class="tours container-fluid mb-4">
   
<!-- <a href="#" class="text-decoration-none">    -->
<div class="row mb-4">

  <div class="col-md-6 col-lg-4 top-trip">
    <div class="card rounded-4 overflow-hidden card-trip mb-4">
      <div class="card-header bg-transparent p-0">
    
      <img src="frontend/imgs/24d0ba77b05c09106404af72cbc22932.png" alt="trip" class="card-img-top new-trip-img">
      <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
              <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
                Top Trip
              </button> -->
              
                <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
             

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

  <img src="frontend/imgs/2ab37ca6249a1ff1defb3b3889df1069.png" alt="trip" class="card-img-top new-trip-img">
  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
          <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
            Top Trip
          </button> -->
          
            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
         

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

  <img src="frontend/imgs/64ac6f2d5fd548d9bf11ff3f1fae5fbc.png" alt="trip" class="card-img-top new-trip-img">
  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
          <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
            Top Trip
          </button> -->
          
            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
         

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

<!-- row2 -->

<div class="row mb-4">
<div class="col-md-6 col-lg-4 top-trip">
  <div class="card rounded-4 overflow-hidden card-trip mb-4">
    <div class="card-header bg-transparent p-0">
  
    <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
    <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
            <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
              Top Trip
            </button> -->
            
              <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
           

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
  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
          <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
            Top Trip
          </button> -->
          
            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
         

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
  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
          <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
            Top Trip
          </button> -->
          
            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
         

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

<!-- row3 -->
<div class="row mb-4">
<div class="col-md-6 col-lg-4 top-trip">
  <div class="card rounded-4 overflow-hidden card-trip mb-4">
    <div class="card-header bg-transparent p-0">
  
    <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
    <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
            <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
              Top Trip
            </button> -->
            
              <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
           

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
  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
          <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
            Top Trip
          </button> -->
          
            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
         

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
  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
          <!-- <button class=" aa1 btn btn-success text-white rounded-pill ">
            Top Trip
          </button> -->
          
            <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"  style=" background-color: rgba(0, 0, 0,.3);"></i>
         

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

<!-- end row3 -->

</div>


  </div>
  <!-- tab2 -->
  <div class="tab mt-3 p-0" id="tab2">
    <!-- <h2>Customize Tours</h2> -->
    <!-- 
    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolor sapiente, nesciunt atque, totam quasi pariatur perspiciatis exercitationem nostrum nihil harum saepe. Consequuntur eaque corrupti adipisci porro nesciunt sint quos.</p> -->

    <div class="container-fluid">
      <!-- <h1>Destinations</h1> -->
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



      <!--  -->


      <div id="myCarousel2" class="owl-carousel owl-theme my-1">
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




  </div>

  <div class="tab mt-3 p-0" id="tab3">
    <!-- <h2>Customize Tours</h2> -->
    <!-- <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolor sapiente, nesciunt atque, totam quasi pariatur perspiciatis exercitationem nostrum nihil harum saepe. Consequuntur eaque corrupti adipisci porro nesciunt sint quos.</p> -->


    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
      <!--  -->
    
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
      <!--  -->
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
    
    
    
    </div>
    <!-- end row1 -->
    
    <!-- row2 -->
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
      <!--  -->
    
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
      <!--  -->
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    </div>
    <!-- end row2 -->
    
    
    <!-- row3 -->
    
    <div class="row mb-5">
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
      <!--  -->
    
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
      <!--  -->
      <div class="col-lg-4 col-md-6">
        <div class="card blog  my-3"> <!--shadow-->
          <img
            src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
      
            <div class="over-blog">
            <h5> Cairo Tower</h5>
            <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
            </div>
        </div>
    
      </div>
    
    
    
    
    </div>
    <!-- end row3 -->




  </div>
  <!-- end tab3 -->

</div>



</main>
</template>

<script>
export default {
  mounted() {
    this.toggleTab(0);
  },
  methods: {
    toggleTab(tabIndex) {
      let tabs = document.getElementsByClassName("tab");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
      tabs[tabIndex].style.display = "block";

      let buttons = document.getElementsByClassName("tab-button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab-button");
      }
      buttons[tabIndex].classList.add("active-tab-button");
    }
  }
};
</script>
<style>
@import '../../../public/frontend/css/tour.css';
@import '../../../public/frontend/css/faq.css';
@import '../../../public/frontend/css/user-profile.css';



</style>