<script>

$(window) .scroll(function (event) {
    var windowTop = $(this).scrollTop();
    if (windowTop >= $("#footer").offset().top) {
       $("div#sometimesfixed").addClass("fixed");
    } else {
       $("div#sometimesfixed").removeClass("fixed");
    }
 });

</script>