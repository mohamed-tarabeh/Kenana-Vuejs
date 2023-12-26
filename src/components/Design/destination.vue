<template>
    <div  class="container">
    <div class="app-bg">
      <h2>Explore Destination</h2>
      <div class="search">
        <input type="text" placeholder="Destination name">
        <button>
            <router-link to="/search">
            <p class="m-0">Search</p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="38" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
        </router-link>
        </button>
      </div>
    </div>

   </div>  
 </template>
 <script>

 export default {
     name:'DestinationsExplore', 
    
    }


 </script>
<style scoped>
.app-bg{
  background-image: url('../../../public/images/74767c1008650146e6a398e1b9bb2712.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 130px 0;
  border-radius: 20px;
position: relative;
text-align: center;
}
.app-bg::after{
  background: linear-gradient(84deg, rgba(102, 44, 0, 0.80) -0.48%, rgba(255, 255, 255, 0.00) 124.85%);
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  border-radius: 20px;

}
.app-bg h2{
  font-size: 48px;
  font-weight: 600;
  color: #FFF;
  position: relative;
  z-index: 1;
}
@media(max-width: 650px) {
  .app-bg h2{
    font-size: 28px;
  } 
}
.search{
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
  position: relative;
  z-index: 1;

}
@media(max-width: 650px) {
 .search{
  align-items: center;
  display: flex;
} 
 .search input{
  width: 56% !important;
 }
 .search p{
  display: none;
 }
 .search svg{
  display: block !important;
 }
}
.search svg{
fill: #fff;
display: none;
}
.search input{
  width: 35%;
  border-radius: 20px  0px 0 20px;
  background: #FFF;
  border: 1px solid #DDD;
  padding: 20px;
  color: #000;
}
.search input:focus-visible{
  outline: none;
}
.search button {
  padding: 0px 20px;
  background: #FF7013;
  border: 1px solid #FF7013;
  border-radius: 0px 20px 20px 0px;
  color: #fff;
}
button a{
    color: #fff;
    text-decoration: none;
}
</style>