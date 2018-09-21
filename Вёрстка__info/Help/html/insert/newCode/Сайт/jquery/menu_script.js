$(document).ready(function(){
	  $(window).scroll(function(){
		var tuScroll = $(this).scrollTop(); 
			console.log(tuScroll);
			if(tuScroll <= 600){
				$(".g_linear2").removeClass("img");
				$(".g_linear2").addClass("imgz");
			}else if(tuScroll => 600){
				$(".g_linear2").removeClass("imgz");
				$(".g_linear2").addClass("img");
			}
		});
		
		
		/* 
		
		$(window).scroll(function(){
			var st = $(this).scrollTop();
			$(".ho_p").css({
			"transform" : "translate(0%, +" + st /5 + "%"
	});
		});*/
	 
	  /* 
	  
	  function us_li_jq(){
		 $(".us_li li").addClass('us_li_jq');
	  } us_li_jq();
	  
	  $(window).scroll(function(){
		var blockScroll = $(this).scrollTop(); 
		console.log(blockScroll);
		if(blockScroll <= 336){
			  $(".us_li li").removeClass('us_li_jq').css({"-webkit-transition" : "-webkit-filter 0.9s ease"}).addClass('us_li_jq');
			   
		}else if( blockScroll => 336){ 
			$(".us_li li").addClass('us_li_jq').removeClass('us_li_jq') ;
		}
	  });
	  
	  
	  
	  $(".menu-naw button").click(function(){
		$(".menu-naw button").removeClass("active");
		$(this).addClass("active");
	  });
	  
	  */
});
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  // console.log(tuScroll);