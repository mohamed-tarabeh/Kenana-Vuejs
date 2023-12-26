<template>
<!-- <headerComp></headerComp> -->
  <!-- main -->
  <main>
<!-- Gallery -->



  <!--  -->
  <section>
    <h2 class="mb-5 mt-5">Booking Tour</h2>
    <div class="container">
    <div class="row">
      <!-- col paragrph -->
      <div class="col-lg-8 col-md-12 pe-4">

      

        <!--  private check-->
            <div class="card choose rounded-4 mb-2">
              <div class="card-header bg-white p-4 rounded-4">
                    <label>
                      <!-- id mycheckbox in check.js -->
                      <input type="checkbox" id="myCheckbox" class="form-check-input rounded-5 border border-3 border-black"> Private
                    </label>
              </div>
              <div class="card-body bg-light target-div">
             

                <!-- inner row1 -->
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <span class="ms-5 me-4">Date</span>
                    <input type="date"  class="border-0 p-2 rounded-4 datee">
                  </div>
    
                  <div class="col-lg-6 col-md-12">
    
                    <span class="ms-5 me-4">Time</span>
                    <input type="time"  class="border-0 p-2 rounded-4 datee">
                  </div>
                </div>
                <!-- end inner row1 -->
                <hr>
    
                <!--inner row 2 -->
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <label class="ms-5">
                      <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Adult (+18 Years)
                    </label>
                  </div>
    
                  <div class="col-lg-6 col-md-12">
    
                    <label class="ms-5">
                      <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Youth (13-17 Years)
                    </label>
                </div>
    
                </div>
                <!-- end inner row2 -->
              </div>
                  
            </div>
         <!-- end private check -->






         <!-- family check -->
         <div class="card choose rounded-4 mb-2">
          <div class="card-header bg-white p-4 rounded-4">
                <label>
                  <!-- id mycheckbox3 in check.js -->
                  <input type="checkbox" id="myCheckbox2" class="form-check-input rounded-5 border border-3 border-black"> Family
                </label>
          </div>
          <div class="card-body bg-light target-div2">
             

            <!-- inner row1 -->
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <span class="ms-5 me-4">Date</span>
                <input type="date"  class="border-0 p-2 rounded-4 datee">
              </div>

              <div class="col-lg-6 col-md-12">

                <span class="ms-5 me-4">Time</span>
                <input type="time"  class="border-0 p-2 rounded-4 datee">
              </div>
            </div>
            <!-- end inner row1 -->
            <hr>

            <!--inner row 2 -->
            <div class="row">
              <div class="col-lg-4 col-md-12 ">
                <label class="ms-5 lab">
                  <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Adult (+18 Years)
                </label>
                <p align="center" class="mt-3">
                <input type="number" class="w-50 rounded-3 text-center" placeholder="1">
              </p>
              </div>

              <div class="col-lg-4 col-md-12 ">

                <label class="ms-5 lab">
                  <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Youth (13-17 Years)
                </label>
                <p align="center" class="mt-3">
                  <input type="number" class="w-50 rounded-3 text-center" placeholder="1">
                </p>
              </div>


            <!--  -->
            <div class="col-lg-4 col-md-12 ">

              <label class="ms-5 lab">
                <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Child (0-12)
              </label>
              <p align="center" class="mt-3">
                <input type="number" class="w-50 rounded-3 text-center" placeholder="1">
              </p>
          </div>

            </div>
            <!-- end inner row2 -->
          </div>
              
        </div>
         <!-- end family check -->


          <!-- collective check -->
          <div class="card choose rounded-4 mb-2">
            <div class="card-header bg-white p-4 rounded-4">
                  <label>
                    <!-- id mycheckbox3 in check.js -->
                    <input type="checkbox" id="myCheckbox3" class="form-check-input rounded-5 border border-3 border-black"> Collective
                  </label>
            </div>
            <div class="card-body bg-light target-div3">
             

              <!-- inner row1 -->
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <span class="ms-5 me-4">Date</span>
                  <input type="date"  class="border-0 p-2 rounded-4 datee">
                </div>
  
                <div class="col-lg-6 col-md-12">
  
                  <span class="ms-5 me-4">Time</span>
                  <input type="time"  class="border-0 p-2 rounded-4 datee">
                </div>
              </div>
              <!-- end inner row1 -->
              <hr>
  
              <!--inner row 2 -->
              <div class="row">
                <div class="col-lg-4 col-md-12 ">
                  <label class="ms-5 lab">
                    <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Adult (+18 Years)
                  </label>
                  <p align="center" class="mt-3">
                  <input type="number" class="w-50 rounded-3 text-center" placeholder="1">
                </p>
                </div>
  
                <div class="col-lg-4 col-md-12 ">
  
                  <label class="ms-5 lab">
                    <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Youth (13-17 Years)
                  </label>
                  <p align="center" class="mt-3">
                    <input type="number" class="w-50 rounded-3 text-center" placeholder="1">
                  </p>
                </div>
  
  
              <!--  -->
              <div class="col-lg-4 col-md-12 ">
  
                <label class="ms-5 lab">
                  <input type="checkbox" class="form-check-input rounded-5 border border-3 border-black"> Child (0-12)
                </label>
                <p align="center" class="mt-3">
                  <input type="number" class="w-50 rounded-3 text-center" placeholder="1">
                </p>
            </div>
  
              </div>
              <!-- end inner row2 -->
            </div>
                
          </div>
           <!-- end collective check -->
          
           <div class="col-lg-12 col-md-12 mt-4 d-flex justify-content-between">
            <button class=" btn pt-3 pb-3 back rounded-5 fw-bold" > Back</button>
         <routerLink :to="{name:'checkout'}">
            <button class=" btn pt-3 pb-3 back rounded-5 fw-bold check-out" > Check out</button>
          </routerLink>
           </div>
                  
  </div>




      <!-- col book -->
      <div class="book col-lg-4 col-md-12 border  rounded-3  p-4 mb-5">
     
          <table class="table container mt-4">
            <tr>
              <td class="pb-3">
                <h3 class="d-inline">100 EGP</h3>/Person
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-regular fa-clock me-2"></i>Duration
              </td>
              <td class="pb-3 text-right fw-bold">
                1 Day
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-regular fa-user me-2"></i>Max Guests
              </td>
              <td class="pb-3 text-right fw-bold">
                30
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-regular fa-user me-2"></i>Minimum Age
              </td>
              <td class="pb-3 fw-bold">
                + 12
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-solid fa-location-dot me-2"></i>Tour Location
              </td>
              <td class="pb-3 fw-bold">
                Cairo
              </td>
            </tr>

            <tr>
              <td class="pb-3">
                <i class="fa-solid fa-earth-americas me-2"></i>Language
              </td>
              <td class="pb-3 fw-bold">
                Arabic
              </td>
            </tr>

           

          </table>
          <div class="mb-5"></div>
          
            <!-- <button class="book_btn w-100 rounded-5 p-2">Book Now</button> -->

      </div>
      

    </div>

  </div>
  <!-- end container -->
  </section>



<!--  -->



 


 

</main>
</template>

<script>
// import HeaderComp2 from '@/components/HeaderComp2.vue';
// import HeaderComp from '@/components/HeaderComp.vue';
// import FooterComp from '@/components/FooterComp.vue';
export default{
    // components:{HeaderComp},
  name:'MasterPage',


  mounted(){
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
      // Code to run after jQuery is loaded
      /* eslint-disable no-undef */
      $(document).ready(function() {
    $('#myCheckbox').on('change', function() {
      if ($(this).is(':checked')) {
        $('.target-div').show();
      } else {
        $('.target-div').hide();
      }
    });
  });

  $(document).ready(function() {
    $('#myCheckbox2').on('change', function() {
      if ($(this).is(':checked')) {
        $('.target-div2').show();
      } else {
        $('.target-div2').hide();
      }
    });
  });


  $(document).ready(function() {
    $('#myCheckbox3').on('change', function() {
      if ($(this).is(':checked')) {
        $('.target-div3').show();
      } else {
        $('.target-div3').hide();
      }
    });
  });
      
    };
    document.head.appendChild(script);

  },

};
</script>

<style>
@import '../../../public/frontend/css/tour.css';
@import '../../../public/frontend/css/book.css';



</style>