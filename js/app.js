$(function() {
    $('#typed').typed({
        strings: [
            "'m Joel Rocha.",
            "'m a software developer.",
            "'m a Vim enthusiast.",
            "'m a coffee lover.",
            "use Twitter.",
            "'m a science lover.",
            "'m a TV shows addicted.",
            "'m crazy about movies too.",
            "'m someone too keep.",
            "'m Joel Rocha."
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
