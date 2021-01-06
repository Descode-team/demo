$(document).ready(function() {
    tabClickColor();
});

function tabClickColor() {
    $("#tabsBlog").tabs();
    $(".page-linkEdit-blog").on("click", function() {
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
}