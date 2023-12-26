<!-- eslint-disable no-undef -->
<template>
    <main>
  <!-- <div id="myCarousel1" class="owl-carousel owl-theme my-3 bg-transparent"> -->
  <div class="my-3 bg-transparent">

<h1 class="ps-3 mr-5 mb-4 fw-bold">Our Blog</h1>
</div>
<div class="row">
  <div class="col-lg-4 col-md-6">
    <div class="card blog  my-3"> <!--shadow-->
      <img
        src="frontend/imgs/ii.png" class="card-img-top" height="300" alt="Image 1"/>
        
        <div class="over-blog">
          <routerLink  :to="{name:'blog-info'}" >
        <h5> Cairo Tower</h5>
        <p>The Tour toke us to some of the most <br> beautiful places i have ever seen</p>
      </routerLink>
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




<!-- </div> -->
<!-- end row1 -->

<!-- row2 -->
<!-- <div class="row"> -->
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
<!-- </div> -->
<!-- end row2 -->


<!-- row3 -->

<!-- <div class="row"> -->
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




<!-- </div> -->
<!-- end row3 -->
  
   
  
  </div>
  <div class="container d-flex justify-content-center mb-5">
    <button class="btn text-white see-btn rounded-4" id="seee">See More</button>
  </div>

<!-- hidden div to show see more -->
<div id="see_more">
<div class="row">
  <div class="col-lg-4 col-md-6" >
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
<!-- end show row -->
</div>




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
      $('#seee').click(function() {
        $('#see_more').slideDown(1000);
        $('#seee').hide();
      });
    };
    document.head.appendChild(script);
  },
};



</script>
<style>
@import '../../../public/frontend/css/custm.css';

.see-btn{
    background-color:#ff7013;
    padding: 10px 30px;
   font-size: 20px;
  }
  .see-btn:hover{
    background-color: #ff7013;
  }
  #see_more{
    display: none;
  }
  a{
    text-decoration: none;
  }

</style>