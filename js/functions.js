$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow');
},  4000);



//FEATURE PAGE BUTTON - SHOWS ADDITIONAL CONTENT

$(".button").click(function () {

   $('#page1').hide(1000);
    $('.page2').show(1000);
    $('.button').hide();

    $("html, body").animate({ scrollTop: 0 }, 1000);
});
