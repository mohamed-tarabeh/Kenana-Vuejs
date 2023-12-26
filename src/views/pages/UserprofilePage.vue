<template>
   <div class="container profile-guide">
      <h1 class="fw-bolder my-5 mb-5">Profile</h1>

      <div class="row mb-5">
        <div class="col-lg-5 col-md-12 border rounded-4 mb-5">
          <table class="table mt-3">
            <tr class="d-flex justify-content-center ">
              <td class="border-bottom-0">
                <img src="frontend/imgs/clients_openion.PNG" alt="" class="rounded-circle immm">
              </td>

            </tr>

            <tr class="d-flex justify-content-center border-top-0">
              <td>
                <h2>Mohamed Mahmoud</h2>
              </td>
            </tr>


            <!-- <tr class="d-flex justify-content-center">
              <td>
                <i class="fa-regular fa-message me-4 "></i>
                <i class="fa-solid fa-phone"></i>
              </td>
            </tr> -->


            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-account">Account</button>
              </td>
            </tr>

            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-hist">History</button>
              </td>
            </tr>

            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-pay">Payment Method</button>
              </td>
            </tr>



          </table>
        </div>

        <!-- col2  div show all tabs-->
        <div class="col-lg-7 col-md-12">
          <!-- iframe_div info -->
          <div class="container-fluid tablee" id="info_div">
            <table class="table border ">
              <h2>Account</h2>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Name</label>
                  <input type="text" class="form-control border-0" value="Kareem Ahmed" readonly>
                </td>

                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal1">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal1">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Name</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New Name"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              <input type="submit" value="Change" style="background-color: #ff7013; color: white;"
                                class="p-1 border-0 rounded-2 fw-light mt-3">
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">E-mail</label>
                  <input type="text" class="form-control border-0" value="Kareem@gmail.com" readonly>
                </td>


                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit E-mail</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter New E-mail"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              <input type="submit" value="Change" style="background-color: #ff7013; color: white;"
                                class="p-1 border-0 rounded-2 fw-light mt-3">
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Phone Number</label>
                  <input type="text" class="form-control border-0" value="+2 000-000-000" readonly>
                </td>


                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal2">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal2">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Phone Number</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter Phone Number"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              <input type="submit" value="Change" style="background-color: #ff7013; color: white;"
                                class="p-1 border-0 rounded-2 fw-light mt-3">
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Password</label>
                  <input type="password" class="form-control border-0" value="password" readonly>
                </td>



                <td class="d-flex justify-content-end">
                  <button class="change btn rounded-1 ps-4 pe-4 p-2 mt-4" type="button" data-bs-toggle="modal"
                    data-bs-target="#myModal3">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Change
                  </button>
                  <!-- The Modal -->
                  <div class="modal" id="myModal3">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Edit Password</h4>
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                          <form action="">
                            <input type="text" name="" id="" placeholder="Enter Password"
                              class="form-control small fw-lighter">
                            <div class="d-flex justify-content-center">
                              <input type="submit" value="Change" style="background-color: #ff7013; color: white;"
                                class="p-1 border-0 rounded-2 fw-light mt-3">
                            </div>
                          </form>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                  <!-- end modal -->
                </td>
              </tr>


            </table>
          </div>

          <!-- end info_div -->


          <!-- history_div -->
          <div class="history" id="history_div">
            <div class="d-flex justify-content-between">
            <h1 class="mb-4">History</h1>
            <select name="" id="" class="border rounded-4">
              <option value="" class="disabled ">Upcoming</option>
              <option value="">two</option>
              <option value="">two</option>
            </select>
          </div>

            <!-- tabs -->
            <div class="tabs">
              <div class="tab-buttons">
                <button class="tab-button active-tab-button p-3" style="width: 400px;border-bottom-color: #ff7013;"
                @click="toggleTab(0)">TOURS</button>
                <button class="tab-button p-3" @click="toggleTab(1)" style="width: 400px">Customize Tour</button>
                <!-- <button class="tab-button" onclick="toggleTab(2)">Tab 3</button> -->
              </div>
              <!-- tab1 -->
              <div class="tab mt-3 p-0 row11" id="tab1">
                <!-- <h2>Tours</h2>
              <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolor sapiente, nesciunt atque, totam quasi pariatur perspiciatis exercitationem nostrum nihil harum saepe. Consequuntur eaque corrupti adipisci porro nesciunt sint quos.</p> -->

              <div class="card rounded-4">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
                      <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5  p-0 ps-2 pt-1 secondd">
                      <p>Setting on Boat spreading her arms</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
                      <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                         <!-- inner -->
                         <div class="row">
                          <div class="col-1  pt-2">
                             <img src="frontend/icons/calendar__.svg" alt="">
                             <br><br>
                             <img src="frontend/icons/timmer.svg" alt="">
                          </div>

                          <div class="col">
                              <span class="date_span">Date</span><br>
                              <span class="fw-bolder">08-12-22</span> 
                              <br>
                              <span class="time_span">Tour Time</span><br>
                              <span class="fw-bolder">12:00 PM</span>

                              
                          </div>

                         </div>

                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
                      <div class="row">
                        <div class="col-1 pt-2">
                           <img src="frontend/icons/location.svg" width="25px" alt="">
                           <br><br>
                           <img src="frontend/icons/airline-seat-recline.svg" alt="">
                        </div>

                        <div class="col ps-3 pe-0">
                            <span class="date_span">Location</span><br>
                            <span class="fw-bolder">Cairo</span> 
                            <br>
                            <span class="time_span">Seat no</span><br>
                            <span class="fw-bolder">30</span>

                            
                        </div>

                       </div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1  fifthh">
                      <routerLink :to="{name:'download'}">
                      <i class="fa-solid fa-download rounded-4 "
                      style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i></routerLink>
                    </div>
                  </div>

                </div>
              </div>

              <!-- card2 -->
              <div class="card mt-4 rounded-4">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
                      <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5  p-0 ps-2 pt-1 secondd">
                      <p>Setting on Boat spreading her arms</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
                      <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                         <!-- inner -->
                         <div class="row">
                          <div class="col-1  pt-2">
                             <img src="frontend/icons/calendar__.svg" alt="">
                             <br><br>
                             <img src="frontend/icons/timmer.svg" alt="">
                          </div>

                          <div class="col  pe-0">
                              <span class="date_span">Date</span><br>
                              <span class="fw-bolder">08-12-22</span> 
                              <br>
                              <span class="time_span">Tour Time</span><br>
                              <span class="fw-bolder">12:00 PM</span>

                              
                          </div>

                         </div>

                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
                      <div class="row">
                        <div class="col-1 pt-2">
                           <img src="frontend/icons/location.svg" width="25px" alt="">
                           <br><br>
                           <img src="frontend/icons/airline-seat-recline.svg" alt="">
                        </div>

                        <div class="col ps-3 pe-0">
                            <span class="date_span">Location</span><br>
                            <span class="fw-bolder">Cairo</span> 
                            <br>
                            <span class="time_span">Seat no</span><br>
                            <span class="fw-bolder">30</span>

                            
                        </div>

                       </div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-1  fifthh">
                      <i class="fa-solid fa-download rounded-4 "
                      style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i>
                    </div>
                  </div>

                </div>
              </div>

              


              </div>
              <!-- tab2 -->
              <div class="tab mt-3 p-0" id="tab2">
                <!-- <h2>Customize Tours</h2> -->



                <!-- <h2>Tours</h2>
                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolor sapiente, nesciunt atque, totam quasi pariatur perspiciatis exercitationem nostrum nihil harum saepe. Consequuntur eaque corrupti adipisci porro nesciunt sint quos.</p> -->

                <div class="card rounded-4">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
                        <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
                      </div>
                      <div class="col-lg-5 col-md-5 col-sm-5  p-0 ps-2 pt-1 secondd">
                        <p>Setting on Boat spreading her arms</p>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
                        <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                           <!-- inner -->
                           <div class="row">
                            <div class="col-1  pt-2">
                               <img src="frontend/icons/calendar__.svg" alt="">
                               <br><br>
                               <img src="frontend/icons/timmer.svg" alt="">
                            </div>
  
                            <div class="col">
                                <span class="date_span">Date</span><br>
                                <span class="fw-bolder">08-12-22</span> 
                                <br>
                                <span class="time_span">Tour Time</span><br>
                                <span class="fw-bolder">12:00 PM</span>
  
                                
                            </div>
  
                           </div>
  
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
                        <div class="row">
                          <div class="col-1 pt-2">
                             <img src="frontend/icons/location.svg" width="25px" alt="">
                             <br><br>
                             <img src="frontend/icons/airline-seat-recline.svg" alt="">
                          </div>
  
                          <div class="col ps-3 pe-0">
                              <span class="date_span">Location</span><br>
                              <span class="fw-bolder">Cairo</span> 
                              <br>
                              <!-- <span class="time_span">Seat no</span><br>
                              <span class="fw-bolder">30</span> -->
  
                              
                          </div>
  
                         </div>
                      </div>
                      <div class="col-lg-1 col-md-1 col-sm-1  fifthh">
                        <i class="fa-solid fa-download rounded-4 "
                        style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i>
                      </div>
                    </div>
  
                  </div>
                </div>
  
                <!-- card2 -->
                <div class="card mt-4 rounded-4">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-lg-2 col-md-2 col-sm-2 p-0 ps-2 firstt">
                        <img src="frontend/imgs/alex.jpg" class="img-fluid rounded-3" alt="">
                      </div>
                      <div class="col-lg-5 col-md-5 col-sm-5  p-0 ps-2 pt-1 secondd">
                        <p>Setting on Boat spreading her arms</p>
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-2 p-0  thirdd">
                        <!-- <img src="frontend/icons/calendar__.svg" alt=""> -->
                           <!-- inner -->
                           <div class="row">
                            <div class="col-1  pt-2">
                               <img src="frontend/icons/calendar__.svg" alt="">
                               <br><br>
                               <img src="frontend/icons/timmer.svg" alt="">
                            </div>
  
                            <div class="col  pe-0">
                                <span class="date_span">Date</span><br>
                                <span class="fw-bolder">08-12-22</span> 
                                <br>
                                <span class="time_span">Tour Time</span><br>
                                <span class="fw-bolder">12:00 PM</span>
  
                                
                            </div>
  
                           </div>
  
                      </div>
                      <div class="col-lg-2 col-md-2 col-sm-2 p-0  fourthh">
                        <div class="row">
                          <div class="col-1 pt-2">
                             <img src="frontend/icons/location.svg" width="25px" alt="">
                             <br><br>
                             <img src="frontend/icons/airline-seat-recline.svg" alt="">
                          </div>
  
                          <div class="col ps-3 pe-0">
                              <span class="date_span">Location</span><br>
                              <span class="fw-bolder">Cairo</span> 
                              <br>
                              <!-- <span class="time_span">Seat no</span><br>
                              <span class="fw-bolder">30</span> -->
  
                              
                          </div>
  
                         </div>
                      </div>
                      <div class="col-lg-1 col-md-1 col-sm-1  fifthh">
                        <i class="fa-solid fa-download rounded-4 "
                        style="padding: 10px;border:solid #ff7013; color: #ff7013;"></i>
                      </div>
                    </div>
  
                  </div>
                </div>


              </div>

            </div>

          </div>


          <!-- end history_div -->




          <!-- payment_div -->

          <div class="payment" id="payment_div">
            <h2>Payment methods</h2>
            <div class="container-fluid">
              <div class="row ">
                <div class="col-lg-6 col-md-12  p-0">
                  <img src="frontend/imgs/visa.PNG" alt="" class="rounded-3" width="100%">
                </div>
                <div class="col-lg-6 col-md-12 ps-3 p-0">
                  <a href="#" class="text-decoration-none" data-bs-toggle="modal"
                    data-bs-target="#myModal4"><!--open modal-->
                    <div class="add_pay d-flex justify-content-center align-items-center">

                      <i class="fa-solid fa-circle-plus"></i>
                    </div>
                  </a>
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

            </div>
          </div>

          <!-- end payment_div -->


        </div>
      </div>
      <!-- end show all tabs -->


    </div>
    <!-- end row -->
</template>

<script>
export default {
  mounted() {
    this.toggleTab(0);
    
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
        document.getElementById('btn-account').addEventListener('click',function(){
             /* eslint-disable no-undef */
            $('#info_div').show();
            $('#history_div').hide();
            $('#payment_div').hide();
        });

        document.getElementById('btn-hist').addEventListener('click',function(){
            $('#info_div').hide();
            $('#history_div').show();
            $('#payment_div').hide();
        });

        document.getElementById('btn-pay').addEventListener('click',function(){
            $('#info_div').hide();
            $('#history_div').hide();
            $('#payment_div').show();
        });
    };
    document.head.appendChild(script);
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
@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/tour-profile.css';
@import '../../../public/frontend/css/tour.css';
@import '../../../public/frontend/css/user-profile.css';

</style>