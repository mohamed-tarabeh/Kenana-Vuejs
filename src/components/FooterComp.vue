<template>
    <footer class="foot ">
 <hr class="container-fluid">
 <div class="row">
   <div class="col-lg-4">
     <img src="frontend/imgs/logo.PNG" alt="" style="transform: scale(.75,.75);">
     <div class="ms-3 foot-div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis fugit unde
       tempore quaerat quia soluta</div>
   </div>
   <div class="col-lg-2">
     <ul class="list-unstyled pt-5 ul-foot">
       <li>Home</li>
       <routerLink :to="{name:'about'}"><li>About Us</li></routerLink>
       <routerLink :to="{name:'contact'}"><li>Contact Us</li>
      </routerLink>
     </ul>
   </div>
   <div class="col-lg-2">
     <ul class="list-unstyled pt-5">
       <li><routerLink class="nav-link" :to="{name:'tours'}" >Tours</routerLink></li>
       <li>Destination</li>
       <li><routerLink class="nav-link" :to="{name:'tours-guides'}" >Blog</routerLink></li>
     </ul>
   </div>
   <div class="col-lg-2">
     <ul class="list-unstyled pt-5">
       <li><routerLink class="nav-link" :to="{name:'tours-guides'}" >Tour Guide</routerLink></li>
       <li>Join As a Tour Guide</li>
       <routerLink :to="{name:'faq'}"><li>FAQs</li></routerLink>
       <routerLink :to="{name:'term'}"><li>Term of services</li></routerLink>
       
       <routerLink :to="{name:'policy'}"><li>Privacy policy</li></routerLink>
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

</template>

<script>
export default{
    name:'FooterComp',
}
</script>
<style>
a{
  color: rgb(18, 18, 18);
}
</style>