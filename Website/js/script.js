/*  javascript file portfolio v2  */

$(document).ready(function() {

    /* work link hover effect */

    $("#link_work_shape").hover(function() {
        $("#link_work_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "3s"});
        if($(window).width() < 640) {
            $("#link_work_shape").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $("#link_work_shape").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#nav_work_text").css({fill: "#084E96", transition: "3s"});
        $("#whiteline_work").hide("1s");
    }, function() {
    });

    /* contact link hover effect */

    $("#link_contact_shape").hover(function() {
        $("#link_contact_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "3s"});
        if($(window).width() < 640) {
            $("#link_contact_shape").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $("#link_contact_shape").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#nav_contact_text").css({fill: "#9b0408", transition: "3s"});
        $("#whiteline_contact").hide("1s");
    }, function() {
    });

    /* about link 1 hover effect */

    $("#link_about1_shape").hover(function() {
        $("#link_about1_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_about1_shape").css({stroke: "#e7e7e7", transition: "3s"});
        $("#link_about1_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#e7e7e7", transition: "3s"});
    }, function() {}
    );

    /* about link 2 hover effect */

    $("#link_about2_shape").hover(function() {
        $("#link_about2_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_about2_shape").css({stroke: "#e7e7e7", transition: "3s"});
        $("#link_about2_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#e7e7e7", transition: "3s"});
    }, function() {
    });

    /* resetten wanneer terug weg van link */

    $(".bg_border").hover(function() {

        /* work link reset */

        $("#link_work_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_work_shape").css({strokeWidth: "0px", transition: "0s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});
        $("#whiteline_work").show("1s");

        /* contact link reset */

        $("#link_contact_shape").css({fill: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({strokeWidth: "0px", transition: "0s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});
        $("#whiteline_contact").show("1s");

        /* about link 1 reset */

        $("#link_about1_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about1_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "3s"});

        /* about link 2 reset */

        $("#link_about2_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about2_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about2_shape").css({strokeWidth: "1.2px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "3s"});

    }, function() {
    });

    $("#link_work_shape").click(function() {
        $("#link_work").css({zIndex: "20"});
        $("#link_work_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_work_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_work").delay(1500).queue(function (next) {
            $(this).css({bottom: "0vh", transition: "3s"});
            next();
        });
        $("#link_work").delay(1500).queue(function (next) {
            $(this).css({top: "100vh", transition: "3s"});
            next();
        });
    });

    $(".nav_work").click(function() {
        $("#link_work").css({zIndex: "20"});
        $("#link_work_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_work_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_work").delay(1500).queue(function (next) {
         $(this).css({bottom: "0vh", transition: "3s"});
         next();
         });
        $("#link_work").delay(1500).queue(function (next) {
            $(this).css({top: "100vh", transition: "3s"});
            next();
        });
    });

});
