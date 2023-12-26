<template>
   
   <nav class="navbar navbar-expand-lg navbar-light bg-white">
 <!-- Container wrapper -->
 <!-- <div class="container-fluid"> -->
 <!-- Toggle button -->
 <!-- <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i class="fas fa-bars"></i>
 </button> -->


 <!-- side nav -->
 <div id="mySidenav" class="sidenav">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<!-- <a class="nav-link ps-5" href="#">Home</a> -->
<routerLink class="nav-link ps-5" :to="{name:'home'}" >Home</routerLink>
<!-- <a class="nav-link" href="#">Tours</a> -->
<routerLink class="nav-link" :to="{name:'tours'}" >Tours</routerLink>
<a class="nav-link" href="#">Destinations</a>
<!-- <a class="nav-link" href="#">Tour Gudies</a> -->
<routerLink class="nav-link" :to="{name:'tours-guides'}" >Tour Guides</routerLink>

<!-- <a class="nav-link" href="#">Blog</a> -->
<routerLink class="nav-link" :to="{name:'blog'}">Blog</routerLink>

</div>

<div id="main">
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
</div>

<!---<script>
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   document.getElementById("main").style.visibility='hidden';
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
//   document.body.style.backgroundColor = "white";
//   document.getElementById("main").style.visibility='visible';
// }
</script> -->
 <!-- end side nav -->




 <!-- Collapsible wrapper -->
 <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <!-- Navbar brand -->
   <a class="navbar-brand mt-2 mt-lg-0" href="#">
     <img src="frontend/imgs/logo.PNG" width="150px" height="80" alt="" loading="lazy" />
   </a>
   <!-- Left links -->
   <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
     <li class="nav-item">
       <!-- <a class="nav-link ps-5" href="#">Home</a> -->
       <routerLink class="nav-link" :to="{name:'home'}" >Home</routerLink>
     </li>
     <li class="nav-item">
       <!-- <a class="nav-link" href="#">Tours</a> -->
       <routerLink class="nav-link" :to="{name:'tours'}" >Tours</routerLink>
     </li>
     <li class="nav-item">
       <!-- <a class="nav-link" href="#">Destinations</a> -->
       <!-- <router-link to="/destinations">Destination</router-link> -->
     </li>
     <li class="nav-item">
       <!-- <a class="nav-link" href="#">Tour Gudies</a> -->
       
       <routerLink class="nav-link" :to="{name:'tours-guides'}" >Tour Guides</routerLink>
     </li>
     <li class="nav-item">
       <!-- <a class="nav-link" href="#">Blog</a> -->
       <routerLink class="nav-link" :to="{name:'blog'}">Blog</routerLink>
     </li>



     <!-- <li class="nav-item">
       <a class="nav-link" href="#"><i class="fa-solid fa-globe"></i></a>
     </li> -->
   </ul>
   <!-- Left links -->
 </div>
 <!-- Collapsible wrapper -->

 <!-- Right elements -->
 <div class="d-flex align-items-center">
   <!-- Icon -->

   
   <a class="nav-link pe-3" href="#"><i class="fa-solid fa-globe" style="font-size: 19px;"></i></a>

   
   <!-- <a class="nav-link sign btn btn-primary ps-4 pe-4 rounded-4" href="#">
   Sign Up</a> -->
   <routerLink class="nav-link sign btn btn-primary ps-4 pe-4 rounded-4" :to="{name:'nav_2'}">Sign In</routerLink>


 </div>

</nav>



<!-- end Navbar -->




</template>

<script>
export default{
    name:'HeaderComp',
}

</script>
<style>

/* @import '../../../public/frontend/css/style.css'; */
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
    font-size: 30px;
}

@media (max-width:990px) {
    .btn_search1{
        padding: 10px 20px;
        font-size: 30px;

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

</style>