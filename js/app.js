$(function() {
  console.log("js is twerking");
  $('#typed').typed({
    strings: [
    "Joel Rocha.",
    "a software developer.",
    "a vim enthusiast.",
    "a coffee lover.",
    "a cat person.",
    "someone that uses twitter.",
    "a science lover.",
    "a TV shows addicted.",
    "crazy about movies too.",
    "shower singer.",
    "someone too keep.",
    "Joel Rocha."
    ],
    typeSpeed: 36,
    backSpeed: 0,
    backDelay: 1100,
  });
  $('a').click( function() {
    $(this).toggleClass("dont-turn-blue");
  });
}); 
