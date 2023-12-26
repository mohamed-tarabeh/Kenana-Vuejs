<template>
     <!-- main -->
  <main>
<!-- Gallery -->



  <!--  -->
  <section>
    <!-- <h2 class="mb-4">Booking Tour</h2> -->
    <div class="container mb-5">
    <div class="row mt-5">
      <!-- col paragrph -->
       <!-- first col -->
      <div class="col-lg-8 col-md-12 pe-4">

    <div class="card p-3 rounded-4 mb-5">
      <div class="d-flex justify-content-between">
        <h4>Collective Tour</h4>
        <h3>100 EGP</h3>
      </div>

      <div class="border m-3 rounded-3">
        <div class="row p-3">
          <div class="col-lg-2 col-md-2">
            <img src="frontend/imgs/2ab37ca6249a1ff1defb3b3889df1069.png" class="rounded-3" width="100%" height="100%">
          </div>
          <!--  -->
          <div class="col-lg-10 col-md-10">
            <h3 class="pb-2">Sitting On Boat Spreading Her..</h3>
            <i class="fa fa-location"></i><span class="fw-bolder ms-2 spa4">Cairo</span>

            
          </div>
        </div>
      </div>
      <!-- ============ -->
     
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <p class="fw-bold" style="font-size: 20px;"> Thuresday , Dec 8</p>
          <p class="text-secondary">Check-in</p>
        </div>

        <div class="col-lg-4 col-md-4">
          <img src="frontend/imgs/card.PNG" alt="" width="130px" class="ps-5">
        </div>


        <div class="col-lg-4 col-md-4">
          <p class="fw-bold" style="font-size: 20px;"> Thuresday , Dec 8</p>
          <p class="text-secondary">Check-in</p>
        </div>

      </div>
      

    </div>

    <!-- ------------------------------- -->
    <form>
    <div class="card p-3 rounded-4 mb-5">
      <div>
        <h6 class="fw-bold">Visa or Master Card</h6>
      </div>

    <div class="d-flex justify-content-between mb-5 pe-3">
      <div>
        <img src="frontend/imgs/visa2.PNG" width="40px">
        <img src="frontend/imgs/master.PNG" width="40px">
      </div>
      <label>
        <!-- id mycheckbox in check.js -->
        <input type="radio" id="myCheckbox1" name="ch1" class="form-check-input rounded-5 border border-3 border-black" style="width: 22px; height: 22px;">
      </label>
    </div>
<!--  -->
    <div class="d-flex justify-content-between p-3 rounded-4" style="background-color:#f9ebe2;">
      <div>
        <img src="frontend/imgs/voda.PNG" width="45px">
        <img src="frontend/imgs/tes.PNG" width="100px">
        <img src="frontend/imgs/mobi.PNG" width="70px">
      </div>
      <label>
        <!-- id mycheckbox in check.js -->
        <input type="radio" id="myCheckbox1" name="ch1" class="form-check-input rounded-5 border border-3 border-black" style="width: 22px; height: 22px;">
      </label>
    </div>

    </div>
    </form>
    <div class="col-lg-12 col-md-12 mt-4 d-flex justify-content-between">
      <button class=" btn pt-3 pb-3 back rounded-5 fw-bold" > Back</button>

      <button class=" btn pt-3 pb-3 back rounded-5 fw-bold check-out" data-bs-toggle="modal" data-bs-target="#myModal4"> Check out</button>
     </div>

     <!-- The Modal -->
     <div class="modal" id="myModal4">
                  <div class="modal-dialog modal-lg container">
                    <div class="modal-content p-5">

                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h2 class="modal-title">ِAdd New Card</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                      </div>

                      <!-- Modal body -->
                      <div class="modal-body container ps-5 pe-5">
                    <fieldset class="container">
                        <form action="" class="form-group p-4">
                          <label for="" class="form-label ms-2">Card Number*</label>
                          <!-- <input type="text" class="form-control p-4 border-secondary rounded-4 mb-2" required> -->
                          <input type="text" class="form-control p-3 border-secondary rounded-4 mb-2 " required>



                          <div class="row">

                            <div class="col-lg-5">
                              <label for="" class="form-label ms-2">Expiry Date*</label>
                              <div class="form-control ps-4 p-2 border-secondary rounded-4 mb-2">
                                <input type="text" class="border-0 mb-2 exp" required
                                  style="width: 30px; font-size: 17px;" maxlength="2">
                                <span>/</span>
                                <input type="text" class="border-0 mb-2 exp" required
                                  style="width: 30px; font-size: 17px" maxlength="2">



                              </div>

                            </div>
                            <div class="col-lg-1"></div>

                            <div class="col-lg-5">
                              <label for="" class="form-label ms-2">CVV*</label>
                              <input type="text" class="form-control p-3 border-secondary rounded-4 mb-2 " required>

                            </div>
                            <!-- end col -->
                          </div>
                          <!-- end row -->




                          <label for="" class="form-label ms-2">Name On Card*</label>
                          <!-- <input type="text" class="form-control p-4 border-secondary rounded-4 mb-2" required> -->
                          <input type="text" class="form-control p-3 border-secondary rounded-4 mb-2 " required>



                          <label for="" class="form-label ms-2">Country Or Region</label>
                          <select class="form-control form-select p-4 border-secondary rounded-4 mb-2" required>
                            <option>Egypt</option>
                            <option>Kuwait</option>
                            <option>Dubi</option>
                          </select>


                          <div class="row mt-3">
                            <div class="col-lg-12">

                              <input type="checkbox" class="border-2 ms-3 form-check-input check">
                              <label for="">Securly save my information for 1-click checkout</label>

                            </div>

                          </div>

                          <!--  -->
                          <div class="row mt-3 ps-3 pe-3">
                            <button class="btn rounded-5 fw-bolder add_btn_ p-3" style="font-size: 20px;">Add
                              Card</button>
                          </div>


                          <!--  -->
                          <div class="row text-center ps-4 pe-4 mt-3">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, corrupti! Quos a animi
                              culpa numquam porro magni voluptatem nemo repellendus eveniet</p>

                          </div>

                        </form>
                    </fieldset>

                      </div>

                      <!-- Modal footer -->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>

                <!-- end modal -->
  </div>
  <!-- end col1 -->




      <!-- col book -->
      <div class="book col-lg-4 col-md-12 border rounded-3 p-4 mt-4 ">
       <div class="row">
        <div class="col-lg-6 col-md-6 pe-0">
          <img src="frontend/imgs/2ab37ca6249a1ff1defb3b3889df1069.png" class="imm" alt="">
        </div>

          <div class="col-lg-6 col-md-6 p-0">
            <span>Collective Tour</span>
            <h4 class="pb-2">Sitting On Boat Spreading Her..</h4>
            <span class="spa ">4.2</span>
            <span class="small fw-bold spa2 ms-1 me-1">Very Good</span>
            <span class="small fw-bold spa3">45 Review</span>
          </div>
          <!--  -->

          <div class="row mt-3">
            <p class="pp">Your Booking is protected by <span class="kena">Kenana</span></p>
          </div>
          <hr>

          <h5 class="mb-2">Price Details</h5>

              <div class="mt-2 d-flex justify-content-between">
                <p class="pp">Base Fare</p>
                <p class="pp fw-bold">100 EGP</p>
                  
              </div>

              <div class="mt-2 d-flex justify-content-between">
                <p class="pp">Base Fare</p>
                <p class="pp fw-bold">20 EGP</p>
                  
              </div>

              <div class="mt-2 d-flex justify-content-between">
                <p class="pp">Base Fare</p>
                <p class="pp fw-bold">5 EGP</p>
                  
              </div>

              <hr>
              <div class="mt-2 d-flex justify-content-between">
                <p class="pp">Total</p>
                <p class="pp fw-bold">125 EGP</p>
                  
              </div>

       </div>
         
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
export default{
    mounted() {
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
@import '../../../public/frontend/css/checkout.css';
 /* check hidden */
 .target-div,.target-div2,.target-div3 {
      display: none;
      /* padding: 10px; */
      /* background-color: #f0f0f0; */
      /* margin-top: 10px; */
    }
    .back,.check-out{
      font-size: 20px;
      border: solid 2px #ff7013;
      padding-right: 80px;
      padding-left: 80px;
      color: #ff7013;
    }
    .check-out{
      background-color: #ff7013;
      color: white;
    }


</style>