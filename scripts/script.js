$(document).ready(function(){
    $("#menu-btn").click(function(){
      $(".sidebar").toggle();
      $(".overlayer").css("background-image", "linear-gradient(rgba(237, 224, 212, 0.52), rgba(117, 19, 93, 0.3))");   
    });
  });

  var slider = document.getElementById('slider')
  var active = document.getElementById('active')
  var line1 = document.getElementById('line1')
  var line2 = document.getElementById('line2')
  var line3 = document.getElementById('line3')
  var line4 = document.getElementById('line4')

  line1.onclick = function(){
      slider.style.transform = 'translateX(0)';
      active.style.top = '0px'
  }
  line2.onclick = function(){
      slider.style.transform = 'translateX(-100%)';
      active.style.top = '80px'
  }
  line3.onclick = function(){
      slider.style.transform = 'translateX(-200%)';
      active.style.top = '160px'
  }
  line4.onclick = function(){
      slider.style.transform = 'translateX(-300%)';
      active.style.top = '240px'
  }
