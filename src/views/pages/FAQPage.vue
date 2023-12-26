<template>
<!-- main -->

<main>
 
 <div class="container">
   <h1 class="text-center fw-bolder">FAQs</h1>
   <p class="pp text-center">Have question? We're here to help.</p>
   <div class="border rounded-5 w-50 p-2 mx-auto mb-5">
     <label for=""><i class="fa fa-search ps-2"></i></label>
     <input type="text" placeholder="Search..." class="w-75 border-0 serach_outline text-black" style="font-size: 20px;">
   </div>
 </div>


 <div class="ques w-75 mx-auto mb-5">

   <div class="container mt-3">
     <h2>Questions</h2>
     
     <div id="accordion" class="mt-4">
       <div class="card">
         <div class="card-header">
           <a class="btn fw-bolder" data-bs-toggle="collapse" href="#collapseOne" >
             Question #1
           </a>
         </div>
         <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
           <div class="card-body">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </div>
         </div>
       </div>
       <div class="card">
         <div class="card-header">
           <a class="collapsed btn fw-bolder" data-bs-toggle="collapse" href="#collapseTwo">
             Question #2
         </a>
         </div>
         <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
           <div class="card-body">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </div>
         </div>
       </div>
       <div class="card">
         <div class="card-header">
           <a class="collapsed btn fw-bolder" data-bs-toggle="collapse" href="#collapseThree">
             Question #3
           </a>
         </div>
         <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
           <div class="card-body">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </div>
         </div>
       </div>
     </div>
   </div>

 </div>

</main>
</template>

<script>

</script>

<style>
@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/faq.css';

</style>