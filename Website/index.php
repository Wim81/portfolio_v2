<?php



?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Wim Verpoorten - Web Developer
    </title>
    <meta name="description" content="Portfolio site van Wim Verpoorten, Web Developer." />

    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@wim81">
    <meta name="twitter:title" content="Wim Verpoorten Web Developer">
    <meta name="twitter:description" content="Wim Verpoorten Web Developer">
    <meta name="twitter:creator" content="@wim81">
    <!-- deze nog herbekijken -->
    <meta name="twitter:image" content="http://www.wimverpoorten.com/images/portfolio/01_logo_full.jpg">

    <meta property="og:title" content="Wim Verpoorten Web Developer" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="http://www.wimverpoorten.com/" />
    <!-- deze nog herbekijken -->
    <meta property="og:image" content="http://www.wimverpoorten.com/images/portfolio/01_logo_full.png" />
    <meta property="og:description" content="Wim Verpoorten, Web Developer" />
    <meta property="og:site_name" content="Wim Verpoorten Web Developer" />
    <meta property="fb:admins" content="100003341137131" />

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">
    </script>
    <!--  offline backup jQuery
    <script src="js/jquery-2.1.4.min.js"></script>  -->
</head>

<body>



<div class="main_area">

    <div class="bg_animation"></div>
    <div class="bg_border bg_border_1 reset_links"></div>
    <div class="bg_border bg_border_2 reset_links"></div>

    <div class="main_text">

        <div class="main_text_1">
            <div class="main_text_1a">
                Wim
            </div>
            <div class="main_text_1b">
                Verpoorten
            </div>
        </div>
        <div class="main_text_2">
            <div class="main_text_2a">
                Web
            </div>
            <div class="main_text_2b">
                Developer
            </div>
        </div>

    </div>  <!--  einde main text  -->

    <!-- ach, let's have a logo, shall we? -->
    <img src="images/logo_gradient1.png" class="logo">

</div>  <!--  einde main area  -->

<nav>

    <!--  work link  -->
    <svg version="1.1" id="link_work" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 147.2 77.4" style="enable-background:new 0 0 147.2 77.4;" xml:space="preserve">

        <a class="nav nav_work" xlink:href="#">
            <polygon id="link_work_shape" points="13.5,0 2.2,42.3 125.3,75.3 145.5,0 "/>
            <text id="nav_work_text" x="58" y="40">work</text>
            <div class="whiteline" id="whiteline_work"></div>
        </a>

    </svg>

    <!--  contact link  -->
    <svg version="1.1" id="link_contact" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 147.2 77.4" style="enable-background:new 0 0 147.2 77.4;" xml:space="preserve">

        <a class="nav nav_contact" xlink:href="#">
            <polygon id="link_contact_shape" points="134.2,77.3 145.5,35 22.4,2 2.2,77.3 "/>
            <text id="nav_contact_text" x="48" y="50">contact</text>
            <div class="whiteline" id="whiteline_contact"></div>
        </a>

    </svg>

    <!--  about link 1 (mobile)  -->
    <svg version="1.1" id="link_about1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 138.5 93.5" style="enable-background:new 0 0 138.5 93.5;" xml:space="preserve">
        <a class="nav nav_about1" xlink:href="#">
            <rect x="7.2" y="16.8" transform="matrix(0.9659 0.2588 -0.2588 0.9659 14.4481 -16.244)" id="link_about1_shape" width="123.5" height="59.8"/>
            <text id="nav_about1_text" x="38" y="56">about</text>
        </a>
    </svg>

    <!--  about link 2 (desktop)  -->
    <svg version="1.1" id="link_about2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 91.8 77.4" style="enable-background:new 0 0 91.8 77.4;" xml:space="preserve">
        <a class="nav nav_about2" xlink:href="#">
            <polygon id="link_about2_shape" points="91.9,-0.1 13.2,-0.1 1.9,42.2 91.9,66.4 "/>
            <text id="nav_about2_text" x="20" y="40">about</text>
        </a>

    </svg>

</nav>


<div class="sectiondiv section_work">
    <div class="sectiondiv_inner section_work_inner">

        <img src="images/logo_white1.png" class="logo">

        <div class="top_row">
            <div class="page_title" id="page_title_work">Work</div>
            <p class="exit_p exit_work"></p>
        </div>

    </div>
</div>

<div class="sectiondiv section_contact">
    <div class="sectiondiv_inner section_contact_inner reset_links">

        <img src="images/logo_white1.png" class="logo">

        <div class="top_row">
            <div class="page_title" id="page_title_contact">Contact</div>
            <p class="exit_p exit_contact"></p>
        </div>

        <div class="content_contact_wrapper">
            <div class="content_contact">
            <form class="contact_form">

                <p>Got a question? Want a website? Worried about global warming? I like hearing from you, so just drop me a message....</p>

                <input type="text" placeholder="name" id="name">
                <input type="text" placeholder="email" id="email">
                <input type="text" placeholder="your message" id="message">
                <input type="submit" value="send" id="send_button">



            </form>
            </div>  <!--  einde contact inner section  -->

        </div>  <!--  einde van de wrapper  -->

    </div>

    <!--  send link  -->
    <svg version="1.1" id="link_send" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 147.2 77.4" style="enable-background:new 0 0 147.2 77.4;" xml:space="preserve">
        <a class="nav button_send" xlink:href="#">
            <polygon id="link_send_shape" points="134.2,77.3 145.5,35 22.4,2 2.2,77.3 "/>
            <text id="button_send_text" x="60" y="50">send</text>
            <div class="whiteline" id="redline_send"></div>
        </a>
    </svg>

</div>

<div class="sectiondiv section_about">
    <div class="sectiondiv_inner section_about_inner">

        <img src="images/logo_blue1.png" class="logo">

        <div class="top_row">
            <div class="page_title" id="page_title_about">About</div>
            <p class="exit_p exit_about"></p>
        </div>

        <div class="content_about_wrapper">
            <div class="content_about">

                <div id="about_text_1" class="about_item">
                    <p>Hi, my name is Wim, and I am currently a student, looking forward to becoming a professional web developer. I am currently 35 years old. Before I returned to studying, I have worked for a Swiss pharmaceutical company for just over 12 years, having had a mixture of responsibilities which included finance, technical support to the sales and marketing teams, number crunching and customer service. That was nice while it lasted, but my dream of becoming a web developer just did not want to disappear, so that's why I am changing direction now.</p>
                    <br>
                    <p>In the summer of 2018, I will graduate from Thomas More Hogeschool in Mechelen as a bachelor in Interactive Multimedia Design, option Web Development.</p>
                </div>

                <img src="images/bg_image_blue_on_white2.jpg" class="about_item" id="about_image">

                <div id="about_text_2" class="about_item">
                    <p>Even though I am not taking formal assignments yet, I have made this portfolio site to showcase the few initiatives which I have managed to squeeze in already, in between my busy study schedule.</p>
                        <br>
                        <p>I mainly like all things front-end: HTML, CSS/Sass, JS/Jquery. From a back-end point of view, I like working with PHP. Designing is fun as well. Even though I am not a trained illustrator, I know my way around Photoshop and Illustrator and I am always keen to learn new things.</p>
                    <br>
                    <p>If you want to say hi or have any question whatsoever, please do not hesitate to head over to the contact section and leave me a message. If not, if you'll excuse me please: I have some coding to do...</p>
                </div>



            </div>  <!--  einde about inner section  -->
        </div>  <!--  einde van de wrapper  -->
</div>  <!--  einde about section  -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="http://code.jquery.com/color/jquery.color.plus-names-2.1.2.min.js"></script>
<script src="js/script.js"></script>
<script src="js/jquery.nicescroll-3.7.5/jquery.nicescroll.min.js"></script>

</body>

</html>