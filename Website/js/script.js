/*  javascript file portfolio v2  */

$(document).ready(function() {

    $(".st0").hover(function() {
        $(".st0").css("fill", "#e7e7e7");
        $(".st0").css("stroke", "#084E96");
        $(".st0").css("stroke-width", "1.6px");
        $("#nav_work_text").css("fill", "#084E96");
    }, function() {
        $(".st0").css("fill", "#084E96");
        $(".st0").css("stroke", "#084E96");
        $(".st0").css("stroke-width", "0px");
        $("#nav_work_text").css("fill", "#e7e7e7");
    });

    $("#nav_work_text").hover(function() {
        $(".st0").css("fill", "#e7e7e7");
        $(".st0").css("stroke", "#084E96");
        $(".st0").css("stroke-width", "1.6px");
        $("#nav_work_text").css("fill", "#084E96");
    }, function() {
    });
});
