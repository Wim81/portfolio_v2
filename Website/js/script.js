/*  javascript file portfolio v2  */

$(document).ready(function() {

    /* work link hover effect */

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

    /* contact link hover effect */

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

    /* about link 1 hover effect */

    $(".st2").hover(function() {
        $(".st2").css({fill: "#084E96", transition: "3s"});
        $(".st2").css({stroke: "#e7e7e7", transition: "3s"});
        $(".st2").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#e7e7e7", transition: "3s"});
    }, function() {}
    );

    /* about link 2 hover effect */

    $(".st2b").hover(function() {
        $(".st2b").css({fill: "#084E96", transition: "3s"});
        $(".st2b").css({stroke: "#e7e7e7", transition: "3s"});
        $(".st2b").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#e7e7e7", transition: "3s"});
    }, function() {
    });

    /* resetten wanneer terug weg van link */

    $(".bg_border").hover(function() {

        /* work link reset */

        $(".st0").css({fill: "#084E96", transition: "3s"});
        $(".st0").css({stroke: "#084E96", transition: "3s"});
        $(".st0").css({strokeWidth: "0px", transition: "0s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});
        $("#whiteline_work").show("1s");

        /* contact link reset */

        $(".st1").css({fill: "#9b0408", transition: "3s"});
        $(".st1").css({stroke: "#9b0408", transition: "3s"});
        $(".st1").css({strokeWidth: "0px", transition: "0s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});
        $("#whiteline_contact").show("1s");

        /* about link 1 reset */

        $(".st2").css({fill: "#e7e7e7", transition: "3s"});
        $(".st2").css({stroke: "#084E96", transition: "3s"});
        $(".st2").css({strokeWidth: "2.6px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "3s"});

        /* about link 2 reset */

        $(".st2b").css({fill: "#e7e7e7", transition: "3s"});
        $(".st2b").css({stroke: "#084E96", transition: "3s"});
        $(".st2b").css({strokeWidth: "1.2px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "3s"});

    }, function() {
    });

});
