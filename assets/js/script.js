$( document ).ready(function() { 

  //*** Header js
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('header.land-header').addClass('sticky');
    } else {
      $('header.land-header').removeClass('sticky');
    }
  });
  $(document).on("click",'.menu-action',function(){    
    $('.menu-list').toggleClass('open');  
    $('.body-layear').toggleClass("open");   
  });
  if($(window).width() < 992){
      $(document).on("click",'.body-layear',function(){    
        $(".menu-list").removeClass("open");
        $(this).removeClass("open");       
      });   
      $(document).on("click",'.menu-list li a',function(){    
        $(".menu-list").removeClass("open");
        $('.body-layear').removeClass("open");
      });   
    }

  // *** Password Hide Show
  $('.toggle-show').click(function(){
    var inp = $('.showhide-password');
    if (inp.attr('type') == 'password') {
      setTimeout(function(){
          inp.attr('type','text');  
          $(".toggle-show").addClass('fa-eye-slash');   
      },250);
      } else {
        setTimeout(function(){
          inp.attr('type','password');;
          $(".toggle-show").removeClass('fa-eye-slash');
        },250);        
      } 
  });


  //*** Back To Top
  $(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
      $('.tap-top').addClass('show');
    } else {
      $('.tap-top').removeClass('show');
    } 
  });
  $(document).ready(function(){
    $(document).on("click",'.tap-top',function(){    
      $('html, body').animate({scrollTop:0}, '450');
    });
  });
});