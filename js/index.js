$("ul li a").click(function(){
    let hrefClecked=$(this).attr("href");
    // console.log(hrefClecked)
    let sectionOffset=$(hrefClecked).offset().top;
    console.log(sectionOffset)
    $("body ,Html").animate({screenTop:sectionOffset},1000)
    

})

$(".fa-xmark").click(function(){
    
      $(".sideBar").animate({left : -sidBarsWidth},1000)  
});


 


const sidBarsWidth=$(".sideBar").outerWidth();
$(".sideBar").animate({left : - sidBarsWidth},1000)
$(".IconBarOpen ").click(function () { 
   
    // console.log(sidBarsWidth)
    
        $(".sideBar").animate({ left : 0},1000)
    
    
    
}); 


$(".sliderDown h3").click(function(){
    // $(".sliderDown div").eq(0).toggle().eq(1).toggle().eq(2).toggle().eq(3).toggle();
    $(this).next().slideToggle();
    $(".sliderDown div").not($(this).next()).slideUp();
})





window.onload = function() {
   
    countDownToTime("10 october 2025 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


  $("textarea").keydown(function (e) { 
    
 
    let lenghtText= $(this).val().length; 
    console.log(lenghtText)
    $("#chars").text(
        100 -lenghtText <= 0 ?"your avilable char finshed" : 100 -lenghtText
    )
    
  });