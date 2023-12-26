<!-- eslint-disable vue/no-parsing-error -->
<template>

 <!-- main -->


 <main>
  <!-- header -->
  <div class="container mb-5 about_header">
    <div></div>
      <div style="position:absolute;height: 100%; width: 100%; background-color:rgba(0, 0, 0,.3);left:0px;z-index:1;">
  <div class="about_dream-text">
    <h1>About The Company</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore vel perspiciatis.<br> Excepturi architecto voluptates a neque blanditiis ipsum dolorum, deleniti vel <br> asperiores doloremque voluptatum animi pariatur. Similique, commodi veniam. </p>
  </div>  
  </div>
     

    </div>
    <!-- end header -->

    <div class="container mt-5 mb-5 about_main ">
      <div class="row">
        <div class="col-lg-6 col-md-12 ">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In recusandae vitae sit iure eum harum adipisci consectetur nemo error Dolore perspiciatis explicabo iste assumenda enim beatae quaerat 
            <p>Ad rerum saepe facere magnam quia eaque incidunt dolorum laborum totam quidem. Quam explicabo sint impedit dolorum eos quas culpa, quaerat neque architecto ratione ipsam recusandae quae placeat cum atque veritatis iste voluptate cumque exercitationem vitae aperiam
            </p>
        </p>

        </div>
        <div class="col-lg-6 col-md-12 ">
          <img src="frontend/imgs/travel2.PNG" alt="" width="100%" class="rounded-5">

        </div>
      </div>

    </div>

    <!-- end about_main -->

    <!-- mission vission -->

    <div class="container mb-5 mission">
      <div class="row">
        <div class="col-lg-6 col-md-12 container">
              <div class="border rounded-4 p-4 pe-2">
                <h3 class="fw-bold">Our Mission</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, odit maiores id quisquam quae assumenda, amet neque saepe cum libero aperiam fugit placeat aut quis! Sapiente in consequuntur minus quod.</p>
              </div>

        </div>
        <div class="col-lg-6 col-md-12 container">
          <div class="border rounded-4 p-4 pe-2">
            <h3 class="fw-bold">Our Vision</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, odit maiores id quisquam quae assumenda, amet neque saepe cum libero aperiam fugit placeat aut quis! Sapiente in consequuntur minus quod.</p>
          </div>

    </div>
      </div>
    </div>
    <!-- end mission vission -->

    <!-- blog -->

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
    <!-- end blog -->


    <!-- client openion -->
<div class="container mb-5 mt-5">
  <div class="row openion">
    <div class="col-lg-6 col-md-12">
      <img src="frontend/imgs/clients_openion.PNG" alt="" width="110%" >
    </div>
    <div class="col-lg-6 col-md-12">
      <h1 class="mt-5 mb-5">What Our Clients Say</h1>
      <div class="card pb-5">
        <p class="text-black op">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente nihil culpa quisquam et doloribus error, nisi quos aut ipsa expedita provident, quam officiis distinctio fuga porro necessitatibus itaque eligendi?
        </p>
          <p id="starss">
     <!-- <script src="js/script_stars.js"></script> -->
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>
    
        </p>
  
        <p class="text-black fw-bolder"> Soha Karim</p>
        <span class="text-black">Engineer</span>
  
        
      </div>
    </div>
  </div>
  
  </div>
  <!-- end client openion -->
  
 


</main>
 <!-- end main -->
</template>

<script>

</script>
<style>
@import '../../../public/frontend/css/style.css';
@import '../../../public/frontend/css/about.css';

.about_header{
  background-image: url('../../../public/frontend/imgs/cover.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>