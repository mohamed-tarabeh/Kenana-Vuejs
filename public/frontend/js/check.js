$(document).ready(function() {
    $('#myCheckbox').on('change', function() {
      if ($(this).is(':checked')) {
        $('.target-div').show();
      } else {
        $('.target-div').hide();
      }
    });
  });

  $(document).ready(function() {
    $('#myCheckbox2').on('change', function() {
      if ($(this).is(':checked')) {
        $('.target-div2').show();
      } else {
        $('.target-div2').hide();
      }
    });
  });


  $(document).ready(function() {
    $('#myCheckbox3').on('change', function() {
      if ($(this).is(':checked')) {
        $('.target-div3').show();
      } else {
        $('.target-div3').hide();
      }
    });
  });