/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
$(document).ready(function() {
    $("#date-picker-button").click(function() {
      $("#date-picker").datepicker("show");
    });
  
    $("#date-picker").datepicker({
      onSelect: function(dateText) {
        console.log("Selected date:", dateText);
      }
    });
  });

  /////////////////////////////

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("main").style.visibility='hidden';
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.visibility='visible';
  }

  ////
