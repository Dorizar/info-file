$(document).ready(function(){ 
  
    $("a").each(function(){
    var bb = $(this).attr("href");
    $(".attrA").append("<br>" + bb);
  });
  
   //Асобенные сылки
  

   
   var strH1 , strA , str1 , str2 , str3 , str4 , str5 , Match , Match1, str6 , str7;
   
   $("link[href]").each(function(){ 
        //Match = $("h3");
       // Match1 = $("h4");
        strA = $(this).attr("href");
		str1 = /^[https?]{4,5}:\/\/[webref]{6}\.[ru]{2}\/[assets||course||css||dev||html||layout||lesson||mobile||node||sites||tech]{6}\/(...){2,1000}\.[css||sass||less||scass||html]{3,4}$/ig; 
        str2 = /^\/{1}/ig;
        str3 = strA.search(str1);
        str4 = strA.search(str4); 
        //$(".str1").text(str3 + " \n " + str4);
        //$(".str1").text(str3);
    
    if(strA.search(str1) == 0 || strA.search(str2) == 0){
       // alert("Нев таме");
        if(strA.search(str1) == 0){ 
            $(".str1").text(str3);
            $("h3").text("str1");  
          $(this).css({color: "tomato"});
          
          
          var bll = $(this).attr("href");
    var newElement = bll.replace("https://web","../../../web");
    console.log(bll);
     console.log(newElement);
//alert(bll);

    $(this).attr("href", newElement);
          
          
        }else if(strA.search(str2) == 0){
             $("h4").text("str2");
            $(".str2").text(str4); 
            
          $(this).css({color: "green"});
            
              
            
          var bll = $(this).attr("href");
    var newElement = bll.replace("/","");
    console.log(bll);
     console.log(newElement);
//alert(bll);

    $(this).attr("href", newElement);
          
           
         
          
        }
    }else{
        $("h1").text("Совпадений не найдены");
        $(this).css({color: "#333"});
    }  
	});
	
	
	
	
	
	
	
	//Простые сылки
	
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	  
function t(t){
  var Сколько_элементов_на_странице = $(".easy-breadcrumb_segment-separator").length;
  alert(Сколько_элементов_на_странице );
  if(Сколько_элементов_на_странице == 0){
    $(".logo a").attr("href","index.html");
  }else if(Сколько_элементов_на_странице == 1){
    $(".logo a").attr("href","index.html");
  }else if(Сколько_элементов_на_странице == 2){
    $(".logo a").attr("href","../index.html");
  }else if(Сколько_элементов_на_странице == 3){
    $(".logo a").attr("href","../../index.html");
  }else if(Сколько_элементов_на_странице == 4){
    $(".logo a").attr("href","../../../index.html");
  }else if(Сколько_элементов_на_странице == 5){
    $(".logo a").attr("href","../../../../index.html");
  }
} 

 
	
  
  
  
     $("a").each(function (){
    var bb = $(this).attr("href");
    $(".attrB").append("<br>" + bb);
  });
  t(t); 
  
});  //артём лкбедев