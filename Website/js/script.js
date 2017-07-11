/*  javascript file portfolio v2  */

$(document).ready(function() {

    /* work link */

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

    $("#whiteline_work").hover(function() {
        $(".st0").css("fill", "#e7e7e7");
        $(".st0").css("stroke", "#084E96");
        $(".st0").css("stroke-width", "1.6px");
        $("#nav_work_text").css("fill", "#084E96");
    }, function() {
    });

    /* contact link */

    $(".st1").hover(function() {
        $(".st1").css("fill", "#e7e7e7");
        $(".st1").css("stroke", "#9b0408");
        $(".st1").css("stroke-width", "1.6px");
        $("#nav_contact_text").css("fill", "#9b0408");
    }, function() {
        $(".st1").css("fill", "#9b0408");
        $(".st1").css("stroke", "#9b0408");
        $(".st1").css("stroke-width", "0px");
        $("#nav_contact_text").css("fill", "#e7e7e7");
    });

    $("#nav_contact_text").hover(function() {
        $(".st1").css("fill", "#e7e7e7");
        $(".st1").css("stroke", "#9b0408");
        $(".st1").css("stroke-width", "1.6px");
        $("#nav_contact_text").css("fill", "#9b0408");
    }, function() {
    });

    $("#whiteline_contact").hover(function() {
        $(".st1").css("fill", "#e7e7e7");
        $(".st1").css("stroke", "#9b0408");
        $(".st1").css("stroke-width", "1.6px");
        $("#nav_contact_text").css("fill", "#9b0408");
    }, function() {
    });

    /* about link 1 */

    $(".st2").hover(function() {
        $(".st2").css("fill", "#084E96");
        $(".st2").css("stroke", "#e7e7e7");
        $(".st2").css("stroke-width", "1.6px");
        $("#nav_about1_text").css("fill", "#e7e7e7");
    }, function() {
        $(".st2").css("fill", "#e7e7e7");
        $(".st2").css("stroke", "#084E96");
        $(".st2").css("stroke-width", "2.6px");
        $("#nav_about1_text").css("fill", "#084E96");
    });

    $("#nav_about1_text").hover(function() {
        $(".st2").css("fill", "#084E96");
        $(".st2").css("stroke", "#e7e7e7");
        $(".st2").css("stroke-width", "1.6px");
        $("#nav_about1_text").css("fill", "#e7e7e7");
    }, function() {
    });

    /* about link 2 */

    $(".st2b").hover(function() {
        $(".st2b").css("fill", "#084E96");
        $(".st2b").css("stroke", "#e7e7e7");
        $(".st2b").css("stroke-width", "0px");
        $("#nav_about2_text").css("fill", "#e7e7e7");
    }, function() {
        $(".st2b").css("fill", "#e7e7e7");
        $(".st2b").css("stroke", "#084E96");
        $(".st2b").css("stroke-width", "1.2px");
        $("#nav_about2_text").css("fill", "#084E96");
    });

    $("#nav_about2_text").hover(function() {
        $(".st2b").css("fill", "#084E96");
        $(".st2b").css("stroke", "#e7e7e7");
        $(".st2b").css("stroke-width", "0px");
        $("#nav_about2_text").css("fill", "#e7e7e7");
    }, function() {
    });

});
