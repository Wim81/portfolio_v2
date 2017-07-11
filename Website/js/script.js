/*  javascript file portfolio v2  */

$(document).ready(function() {

    /* work link */

    $(".st0").hover(function() {
        $(".st0").css({fill: "#e7e7e7", transition: "3s"});
        $(".st0").css({stroke: "#084E96", transition: "3s"});
        if($(window).width() < 640) {
            $(".st0").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $(".st0").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#nav_work_text").css({fill: "#084E96", transition: "3s"});
        $("#whiteline_work").hide("1s");
    }, function() {
    });

    /* contact link */

    $(".st1").hover(function() {
        $(".st1").css({fill: "#e7e7e7", transition: "3s"});
        $(".st1").css({stroke: "#9b0408", transition: "3s"});
        if($(window).width() < 640) {
            $(".st1").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $(".st1").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#nav_contact_text").css({fill: "#9b0408", transition: "3s"});
        $("#whiteline_contact").hide("1s");
    }, function() {
    });

    /* resetten wanneer terug weg van link */

    $(".bg_border").hover(function() {

        $(".st0").css({fill: "#084E96", transition: "3s"});
        $(".st0").css({stroke: "#084E96", transition: "3s"});
        $(".st0").css({strokeWidth: "0px", transition: "0s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});
        $("#whiteline_work").show("1s");

        $(".st1").css({fill: "#9b0408", transition: "3s"});
        $(".st1").css({stroke: "#9b0408", transition: "3s"});
        $(".st1").css({strokeWidth: "0px", transition: "0s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});
        $("#whiteline_contact").show("1s");

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
