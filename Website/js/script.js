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
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "3s"});
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


    /* send link hover effect */

    $("#link_send_shape").hover(function() {
        $("#link_send_shape").css({fill: "#9b0408", transition: "3s"});
        $("#link_send_shape").css({stroke: "#e7e7e7", transition: "3s"});
        if($(window).width() < 640) {
            $("#link_send_shape").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $("#link_send_shape").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#button_send_text").css({fill: "#e7e7e7", transition: "3s"});
        $("#redline_send").hide("1s");
    }, function() {
    });

    /* resetten wanneer terug weg van link */

    $(".reset_links").hover(function() {

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

        /* send button reset */

        $("#link_send_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_send_shape").css({stroke: "#e7e7e7", transition: "3s"});
        $("#link_send_shape").css({strokeWidth: "0px", transition: "0s"});
        $("#button_send_text").css({fill: "#9b0408", transition: "3s"});
        $("#redline_send").show("1s");

    }, function() {
    });


    /*  overgang naar work section  */

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


    /*  overgang naar contact section  */

    $("#link_contact_shape").click(function() {
        $("#link_contact").css({zIndex: "20"});
        $("#link_contact_shape").css({fill: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_contact").delay(1500).queue(function (next) {
            $(this).css({top: "0vh", transition: "3s"});
            next();
        });
        $("#link_contact").delay(1500).queue(function (next) {
            $(this).css({bottom: "100vh", transition: "3s"});
            next();
        });
    });

    $(".nav_contact").click(function() {
        $("#link_contact").css({zIndex: "20"});
        $("#link_contact_shape").css({fill: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_contact").delay(1500).queue(function (next) {
            $(this).css({top: "0vh", transition: "3s"});
            next();
        });
        $("#link_contact").delay(1500).queue(function (next) {
            $(this).css({bottom: "100vh", transition: "3s"});
            next();
        });
    });


    /*  overgang naar about section (mobile)  */

    $("#link_about1_shape").click(function() {
        $("#link_about1").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about1_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about1_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about1").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });

    $(".nav_about1").click(function() {
        $("#link_about1").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about1_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about1_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about1").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });


    /*  overgang naar about section (desktop)  */

    $("#link_about2_shape").click(function() {
        $("#link_about2").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about2_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about2_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about2_shape").css({strokeWidth: "1.2px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about2").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });

    $(".nav_about2").click(function() {
        $("#link_about2").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about2_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about2_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about2_shape").css({strokeWidth: "1.2px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about2").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });


    /*  overgang van work section terug naar home page  */

    $(".exit_work").click(function() {
        $("#whiteline_work").show();
        $(".section_work").delay(0).queue(function (next) {
            $(this).css({bottom: "100vh", transition: "3s"});
            next();
        });
        $("#link_work").delay(0).queue(function (next) {
            if($(window).width() < 640) {
                $(this).css({top: "-3px", transition: "3s"});
            } else {
                $(this).css({top: "-40px", transition: "3s"});
            }
            next();
        });

        $("#link_work").delay(1000).queue(function (next) {
            $(this).css("z-index", "0");
            next();
        });
    });


    /*  overgang van contact section terug naar home page  */

    $(".exit_contact").click(function() {
        $("#whiteline_contact").show();
        $(".section_contact").delay(0).queue(function (next) {
            $(this).css({top: "100vh", transition: "3s"});
            next();
        });
        $("#link_contact").delay(0).queue(function (next) {
            if($(window).width() < 640) {
                $(this).css({bottom: "-3px", transition: "3s"});
            } else {
                $(this).css({bottom: "-40px", transition: "3s"});
            }
            next();
        });

        $("#link_contact").delay(3000).queue(function (next) {
            $(this).css("z-index", "0");
            next();
        });
    });


    /*  overgang van about section terug naar home page  */

    $(".exit_about").click(function() {
        $(".section_about").delay(0).queue(function (next) {
            $(this).css({left: "100vw", transition: "3s"});
            next();
        });

        if($(window).width() < 640) {
            $("#link_about1").delay(1000).queue(function (next) {
                $(this).css("z-index", "0");
                next();
            });
        } else {
            $("#link_about2").delay(0).queue(function (next) {
                $(this).css({right: "-3px", transition: "3s"});
                next();
            });
            $("#link_about2").delay(1000).queue(function (next) {
                $(this).css("z-index", "0");
                next();
            });
        }
        $(".section_about").delay(100).queue(function (next) {
            $(this).css({borderLeft: "2px solid #084E96", transition: "0.5s"});
            next();
        });
    });


    /*  hover effect work item 1  */

    $("#work_item_1").hover(function() {
        $("#work_item_1").css({backgroundImage: "url('images/preview_1_bauweraertsjef.jpg')", cursor: "pointer"});
        $("#work_item_label_1").css({height: "15%", clipPath: "polygon(0 0, 100% 0, 100% 68%, 0 68%)"});

    }, function() {
        $("#work_item_1").css({backgroundImage: "url('images/preview_1_bauweraertsjef_bw.jpg')", cursor: "auto"});
        $("#work_item_label_1").css({height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 68%, 0 42%)"});
    });


    /*  scrollbar about  */

    $(".content_about").niceScroll({
        cursorcolor:"#084E96",
        cursorwidth:"8px",
        cursorborder: "0px solid #084E96",
        cursorborderradius: "0px",
        cursorfixedheight: 100,
        autohidemode: "leave",
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.7,
        background: "transparent",
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
    });

    /*  scrollbar contact  */

    $(".contact_form").niceScroll({
        cursorcolor:"#e7e7e7",
        cursorwidth:"8px",
        cursorborder: "0px solid #e7e7e7",
        cursorborderradius: "0px",
        cursorfixedheight: 100,
        autohidemode: "leave",
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.7,
        background: "transparent",
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
    });

});
