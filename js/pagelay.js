$(document).ready(function(){
        $('.pannel').hide(0);
        $('.pannel-button').on('click', function(){
        	 $('.pannel').fadeOut(100);
          var pannelId=$(this).attr('data-pannelid');
          
         $('#'+pannelId).fadeIn(500);
       })

		});