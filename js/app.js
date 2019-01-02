$(function() {
    $('#typed').typed({
        strings: [
            "Joel Rocha.",
            "a software developer.",
            "a Vim enthusiast.",
            "a coffee lover.",
            "a cat person.",
            "someone that uses twitter.",
            "a science lover.",
            "a TV shows addicted.",
            "crazy about movies too.",
            "someone too keep.",
            "Joel Rocha."
        ],
        typeSpeed: 36,
        backSpeed: 0,
        backDelay: 1100,
    });

    $('a').click(function() {
        $(this).toggleClass("dont-turn-blue");
    });
    
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
});
