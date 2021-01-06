$(document).ready(function() {
    onclikPageBlog();
});

function onclikPageBlog() {
    $(".fa-angle-double-down").addClass("icon-hide");
    $("button.navbar-toggler").on("click", function() {
        $(".fa-angle-double-down").toggleClass("icon-show");
        $(".fa-angle-double-up").toggleClass("icon-hide");
    });
}