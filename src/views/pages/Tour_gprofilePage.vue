<!-- eslint-disable vue/no-parsing-error -->
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
                <h2>Kareem Ahmed</h2>
              </td>
            </tr>


            <tr class="d-flex justify-content-center">
              <td>
                <i class="fa-regular fa-message me-4 "></i>
                <i class="fa-solid fa-phone"></i>
              </td>
            </tr>


            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-inform">Information</button>
              </td>
            </tr>

            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-tour">Tour</button>
              </td>
            </tr>

            <tr>
              <td class="p-4">
                <button class="btn btn-light w-100 btn-prof" id="btn-review">Review</button>
              </td>
            </tr>



          </table>
        </div>

        <!-- col2  div show all tabs-->
        <div class="col-lg-7 col-md-12">
          <!-- iframe_div info -->
          <div class="container-fluid tablee" id="info_div">
            <table class="table">
              <h2>Information</h2>
              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Name</label>
                  <input type="text" class="form-control border-0" value="Kareem Ahmed" readonly>
                </td>
              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">E-mail</label>
                  <input type="text" class="form-control border-0" value="Kareem@gmail.com" readonly>
                </td>
              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Phone Number</label>
                  <input type="text" class="form-control border-0" value="+2 000-000-000" readonly>
                </td>
              </tr>

              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Description</label>
                  <textarea rows="3" class="form-control border-0 " readonly>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium odio saepe voluptatum, eligendi excepturi! Distinctio, ratione aspernatur porro saepe 
              </textarea>
                </td>
              </tr>

              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">City</label>
                  <input type="text" class="form-control border-0" value="Cairo" readonly>
                </td>
              </tr>


              <tr>
                <td class="pb-4">
                  <label for="" class="form-label">Language</label>
                  <input type="text" class="form-control border-0" value="English" readonly>
                </td>
              </tr>


            </table>
          </div>

          <!-- end info_div -->




          <!-- tour_div -->
          <div class="tours container-fluid mb-4" id="tour_div">

            <!-- <a href="#" class="text-decoration-none">    -->
              <div class="row mb-4">
                <div class="col">
                  <h1 class="mt-5 mb-4 fw-bolder">Tours</h1>
                </div>
                <div class="col">
                  <routerLink :to="{name:'customize'}">
                  <button style="float: right; background-color: #ff7013;" class="btn text-white fw-bolder ps-4 pe-4 mt-5 p-3 rounded-5">Customize Tour</button>
                </routerLink>
                </div>
              

              </div>
            

            <div class="row mb-4">
              <!-- <div class="col-md-12 col-lg-6 mb-4">
                <a href="pyramids.html" class="text-decoration-none">
                  <div class="card rounded-4 overflow-hidden">
                    <div class="card-header bg-transparent p-0">

                      <img src="frontend/imgs/2ab37ca6249a1ff1defb3b3889df1069.png" alt="trip" class="card-img-top tour-img">
                      <div class="tour-img-over d-flex justify-content-end ">


                        <i class="fa-regular fa-heart loc_ico p-2 rounded-circle"
                          style=" background-color: rgba(0, 0, 0,.3);"></i>


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
                </a>


              </div> -->

              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
                  <div class="card-header bg-transparent p-0">
                
                  <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
                  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                          
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

              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
                  <div class="card-header bg-transparent p-0">
                
                  <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
                  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                          
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
              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
                  <div class="card-header bg-transparent p-0">
                
                  <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
                  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                          
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

              <div class="col-md-12 col-lg-6 top-trip">
                <div class="card rounded-4 overflow-hidden card-trip mb-4">
                  <div class="card-header bg-transparent p-0">
                
                  <img src="frontend/imgs/ii.png" alt="trip" class="card-img-top new-trip-img">
                  <div class="new-trip-img-over d-flex container justify-content-end  w-100 ">  
                          
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

            <!-- end row tour -->
          </div>
          <!-- tour_div -->




          <!-- review_div -->

          <div class="container-fluid" id="review_div">
            <button style="float: right;margin-top: -30px; background-color: #ff7013;" class="btn text-white fw-bolder ps-4 pe-4 p-3 rounded-5" data-bs-toggle="modal" data-bs-target="#myModal-guide">Add Review</button>

 <!-- The Modal -->
 <div class="modal" id="myModal-guide">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header border-0 ">
        <div class="modal-title p-4" style="margin-left: 34%;">
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
          <i class="fa fa-star s"></i>
         
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body me-4">
        <form action="">
          <label class="form-label ms-3">Reviews</label>
          <input type="text"  class="form-control small fw-lighter p-4 border-1 border-dark ms-3 me-4">
          <div class="d-flex justify-content-center">
          <button style="background-color:#ff7013; color: white;padding: 10px 200px; font-size: 20px;" class=" border-0 rounded-5 fw-bold mt-3">Send</button>
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
            <h2>Review</h2>
            
            <div class="row">

              <div class="col-lg-6 col-md-12">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>


              <div class="col-lg-6 col-md-12 mt-3">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>


              <div class="col-lg-6 col-md-12 mt-3">
                <div class="p-3 pb-1 border rounded-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim sapiente quod nam animi adipisci non .</p>
                  <p class="ps-3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                  <p>
                    <h5 class="ps-3">Kareem Ahmed</h5>
                    <span class="ps-3">Engineer</span>
                  </p>

                </div>
              </div>

                
              </div>

            </div>

          </div>

          <!-- end review div -->
        </div>
        <!-- end col2 -->

      </div>

</template>

<script>

export default{
 mounted(){
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.onload = () => {
      // Code to run after jQuery is loaded
      /* eslint-disable no-undef */
    

document.getElementById('btn-inform').addEventListener('click',function(){

$('#info_div').show();
$('#review_div').hide();
$('#tour_div').hide();
});

document.getElementById('btn-tour').addEventListener('click',function(){
    $('#info_div').hide();
    $('#review_div').hide();
    $('#tour_div').show();

});

document.getElementById('btn-review').addEventListener('click',function(){
    $('#info_div').hide();
    $('#tour_div').hide();
    $('#review_div').show();

});
  
};
    document.head.appendChild(script);

 }
}




</script>

<style>

@import '../../../public/frontend/css/tour\ _guide.css';
@import '../../../public/frontend/css/user-profile.css';
@import '../../../public/frontend/css/tour.css';
@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/tour-profile.css';


</style>