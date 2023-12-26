<template>
    <div  class="container">
  <headerComp></headerComp>
  <div>
    <DestinationsExplore></DestinationsExplore>

    <div class="allDestinations">
      <div class="container">
        <h3>Search results (9)</h3>
        <div class="row mt-4">
          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>          <div class="col-lg-2  col-md-4 col-sm-6">
            <router-link to="/search-single">

              <div class="position-relative">
                <img src="../../public/images/144c34d90763cefb8e6e1ab478ee21b1.png">
                <p class="visit">Vist</p>
              </div>
            <p class="text-center mt-2 pyramids-text">Pyramids</p>
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
  <ExploreDestinations></ExploreDestinations>
  <footerComp></footerComp>
   </div>  
 </template>
 <script>
import HeaderComp from '../components/Design/Header.vue';
import FooterComp from '../components/Design/Footer.vue';
import ExploreDestinations from '../components/Design/exploreDestinations.vue';
import DestinationsExplore from '../components/Design/destination.vue';
 export default {
  components: {HeaderComp,FooterComp, ExploreDestinations, DestinationsExplore},
     name:'DestinationsSearch', 
    
    }


 </script>
<style scoped>
.allDestinations {
padding: 60px 0;
}
.allDestinations img{
width: 100%;
border-radius: 125px;
max-width: 180px;
height: 230px;
}
.more{
  background: #FF7013;
  border-radius: 20px;
  padding: 9px 29px;
color: #fff;
border: 1px solid #FF7013;
transition: all .5s;
margin-top: 15px;
}
.more:hover{
background-color: transparent;
color: #FF7013;
}
a{
    color: #222;
    text-decoration: none;
}
@media(max-width: 576px) {
  .pyramids-text{
    text-align: start !important;
    padding: 0 50px;
  }
}
.visit{
  position: absolute;
  top: 45%;
  left: 39%;
  color: #fff;
  display: none;
} 
img{
  transition: .3s;

}
a:hover img{
  filter: brightness(0.5);
}
a:hover .visit{
display: block;
}
</style>