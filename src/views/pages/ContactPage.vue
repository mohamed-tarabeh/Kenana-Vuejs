<template>
<main>
 
 <div class="container mb-5 " align="center">
   <h1 class="mx-auto mb-3 fw-bolder">Contact Us</h1>
   <p style="font-size: 20px;">Say Somthing to start a live chat</p>
 
 </div>

 <div class="container startt ms-5 me-5 mb-5 border rounded-3 p-4">

<div class="row">
 <!-- orange side -->
 <div class="col-lg-6 col-md-12 border rounded-3 p-5 orang-side contact" >
   <h3 class="text-white fw-bolder">Contact Information</h3>
   <p class="mb-5">Say Somthing to start a live chat</p>
   <table>
     <tr class="mb-3">
       <td class="pe-4"><i class="fa-solid fa-phone-volume" style="color: #ffffff;"></i></td>
       <td class="pt-2"><p>00201200463319</p></td>
     </tr>

     <tr class="mb-3">
       <td class="pe-4"><i class="fa-solid fa-envelope" style="color: #ffffff;"></i></td>
       <td class="pt-2"><p>info@kenana.com</p></td>
     </tr>

     <tr class="mb-3">
       <td class="pe-4"><i class="fa-solid  fa-location-dot " style="font-size: 20px;color: #ffffff;"></i></td>
       <td class="pt-2"><p>New Damietta , The Ceentral Disrtrict</p></td>
     </tr>
   </table>

   <div align="center" style="margin-top: 200px;">
     <i class="fa-brands fa-square-facebook me-3 social1"></i>
     <i class="fa-brands fa-linkedin social1 me-3 "></i>
     <i class="fa-brands fa-instagram social1 me-3 "></i>
     <i class="fa-brands fa-square-twitter social1 me-3 "></i>
   </div>

 </div>
 <!-- end orange side -->
 <div class="col-lg-6 col-md-12 " >

   <div class="ps-4">

     <form action="" class="form-group p-4">
       <label for="" class="form-label ms-2">Full name*</label>
       <input type="text" class="form-control p-3 border-secondary rounded-4 mb-2" required>
      

       <label for="" class="form-label ms-2">Phone Number*</label>
     

     
 <div class="input-group">
   <div class="input-group-prepend">
     <select id="country-code" name="country-code" class="form-control p-3 border-secondary rounded-4 mb-2 form-select">
      
         <option data-countryCode="GB" value="44">UK (+44)</option>
         <option data-countryCode="US" value="1">USA (+1)</option>
         
           <option data-countryCode="DZ" value="213">(+213)</option>
           <option data-countryCode="AD" value="376">(+376)</option>
           <option data-countryCode="AO" value="244">(+244)</option>
           <option data-countryCode="AI" value="1264">(+1264)</option>
           <option data-countryCode="AG" value="1268">(+1268)</option>
           <option data-countryCode="AR" value="54">(+54)</option>
           <option data-countryCode="AM" value="374">(+374)</option>
           <option data-countryCode="AW" value="297">(+297)</option>
           <option data-countryCode="AU" value="61">(+61)</option>
           <option data-countryCode="AT" value="43">(+43)</option>
           <option data-countryCode="AZ" value="994">(+994)</option>
           <option data-countryCode="BS" value="1242">(+1242)</option>
           <option data-countryCode="BH" value="973">(+973)</option>
           <option data-countryCode="BD" value="880">(+880)</option>
           <option data-countryCode="BB" value="1246">(+1246)</option>
           <option data-countryCode="BY" value="375">(+375)</option>
           <option data-countryCode="BE" value="32">(+32)</option>
           <option data-countryCode="BZ" value="501">(+501)</option>
           <option data-countryCode="BJ" value="229">(+229)</option>
           <option data-countryCode="BM" value="1441">(+1441)</option>
           <option data-countryCode="BT" value="975">(+975)</option>
           <option data-countryCode="BO" value="591">(+591)</option>
           <option data-countryCode="BA" value="387">(+387)</option>
           <option data-countryCode="BW" value="267">(+267)</option>
           <option data-countryCode="BR" value="55">(+55)</option>
           <option data-countryCode="BN" value="673">(+673)</option>
           <option data-countryCode="BG" value="359">(+359)</option>
           <option data-countryCode="BF" value="226">(+226)</option>
           <option data-countryCode="BI" value="257"> (+257)</option>
           <option data-countryCode="KH" value="855">(+855)</option>
           <option data-countryCode="CM" value="237">(+237)</option>
           <option data-countryCode="CA" value="1">(+1)</option>
           <option data-countryCode="CV" value="238">(+238)</option>
           <option data-countryCode="KY" value="1345">(+1345)</option>
           <option data-countryCode="CF" value="236">(+236)</option>
           <option data-countryCode="CL" value="56">(+56)</option>
           <option data-countryCode="CN" value="86">(+86)</option>
           <option data-countryCode="CO" value="57">(+57)</option>
           <option data-countryCode="KM" value="269">(+269)</option>
           <option data-countryCode="CG" value="242">(+242)</option>
           <option data-countryCode="CK" value="682">(+682)</option>
           <option data-countryCode="CR" value="506">(+506)</option>
           <option data-countryCode="HR" value="385">(+385)</option>
           <option data-countryCode="CU" value="53">(+53)</option>
           <option data-countryCode="EG" value="20" selected> (+20)</option>
           <option data-countryCode="GA" value="241">(+241)</option>
           <option data-countryCode="GM" value="220">(+220)</option>
           <option data-countryCode="DE" value="49">(+49)</option>
           <option data-countryCode="GH" value="233">(+233)</option>
           
        
       </select>
       <!-- Add more country codes as needed -->
   

   </div>
   <input type="tel" id="phone" name="phone" placeholder="" pattern="^\d{3}\s\d{4}$" class="form-control p-3 border-secondary rounded-4 mb-2" required>
 </div>

           

       
       <label for="" class="form-label ms-2">E-mail*</label>
       <input type="email" class="form-control p-3 border-secondary rounded-4 mb-2" required>

       <label for="" class="form-label ms-2  ">Message*</label>
       <textarea name="" id="" cols="30" rows="10" class="form-control border-secondary p-2" placeholder="write your nessage ..."></textarea>

       


    

       <div class="col-12 mt-3">
         <button class="btn cust_btn ps-4 pe-4 rounded-pill p-3 text-white fw-bold" style="background-color: #ff7013; margin-left: 65%;font-size: 16px;" data-bs-toggle="modal" data-bs-target="#myModal">Send Message</button>

       </div>
    </form>

       <!-- modal -->

       <!-- The Modal -->
<div class="modal" id="myModal">
<div class="modal-dialog modal-lg">
<div class="modal-content">

 <!-- Modal Header -->
 <!-- <div class="modal-header">
  
   <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
 </div> -->

 <!-- Modal body -->
 <div class="modal-body">
   <div class="container" align="center">
     <img src="frontend/imgs/cust_book.PNG" alt="" class="after_book">
     <div class="mt-5 pe-5 ps-5" align="center">
       <h3 class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptas nulla ullam quidem ducimus nesciunt libero provident nesciunt libero provident  </h3>

       <button class="btn text-white fw-bolder bttn rounded-5">Back To Home</button>


     </div>
    
   </div>
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




   <!-- </form> -->
   </div>
 </div>
</div>  
<!-- </div> -->

 

</main>
</template>

<script>

</script>
<style scoped>
/* @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'); */

@import '../../../public/frontend/css/contact.css';
@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/faq.css';


input{
  height: 55px !important;
}

@media (max-width:990px)
{
  .startt{
    margin-left: 10px !important;
  }
}
</style>