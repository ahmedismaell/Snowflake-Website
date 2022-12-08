$(document).ready(function() {
    "use strict"
    $(".antext").typed({
        strings:["<strong>i love</strong><strong class='primary'> coding</strong>","<strong>start</strong><strong class='primary'> here</strong>"],
         typespeed:90,
         loop:true
         
     });

     $(window).scroll(function(){
        
        var top = $(window).scrollTop();
         if(top>=70){
           $(".navbar-inverse").addClass('secondary'); 
         }
         
         else 
             if($(".navbar-inverse").hasClass('secondary')){
                 $(".navbar-inverse").removeClass('secondary'); 
             }
     });

     $(".owl-carousel").owlCarousel({
        items:3 , 
        autoplay : true,
        smartSpeed : 700 , 
        loop : true, 
        autoplayHoverPause : true ,
        
     });
})
 



$('a.smooth').smoothScroll();