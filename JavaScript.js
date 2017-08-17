$(document).ready(function () {

    var p = document.querySelector('.path'),
    p1 = document.querySelector('.path1'),
    p2 = document.querySelector('.path2'),
    p3 = document.querySelector('.path3'),
    p4 = document.querySelector('.path4'),
    p5 = document.querySelector('.path5'),
    p6 = document.querySelector('.path6'),
    p7 = document.querySelector('.path7'),
    p8 = document.querySelector('.path8'),
    p9 = document.querySelector('.path9'),
    p10 = document.querySelector('.path10'),
    p11 = document.querySelector('.path11'),
    p12 = document.querySelector('.path12'),
    p13 = document.querySelector('.path13'),
    p14 = document.querySelector('.path14'),
    p15 = document.querySelector('.path15'),
    p16 = document.querySelector('.path16'),
    p17 = document.querySelector('.path17'),
    p18 = document.querySelector('.path18'),
    p19 = document.querySelector('.path19'),
    p20 = document.querySelector('.path20'),
    offset = 1000;
    $(window).scroll(function () {
        var windowPos = $(window).scrollTop();
        windowPosCust = $(window).scrollTop();
        windowPos = windowPos + ($(window).height() - ($(window).height() / 5));

        featPos = $('.iron').offset().top
        featHeight = $('.iron').height();
     
            var offsetMe = function () {
                if (offset > 0) {

                p.style.strokeDashoffset = offset;
                p1.style.strokeDashoffset = offset;
                p2.style.strokeDashoffset = offset;
                p3.style.strokeDashoffset = offset;
                p4.style.strokeDashoffset = offset;
                p5.style.strokeDashoffset = offset;
                p6.style.strokeDashoffset = offset;
                p7.style.strokeDashoffset = offset;
                p8.style.strokeDashoffset = offset;
                p9.style.strokeDashoffset = offset;
                p10.style.strokeDashoffset = offset;
                p11.style.strokeDashoffset = offset;
                p12.style.strokeDashoffset = offset;
                p13.style.strokeDashoffset = offset;
                p14.style.strokeDashoffset = offset;
                p15.style.strokeDashoffset = offset;
                p16.style.strokeDashoffset = offset;
                p17.style.strokeDashoffset = offset;
                p18.style.strokeDashoffset = offset;
                p19.style.strokeDashoffset = offset;
                p20.style.strokeDashoffset = offset;
                offset--;

                    requestAnimationFrame(offsetMe);
                  
                } else {
                    cancelAnimationFrame(offsetMe);
                }

            }
           
                if (windowPos >= featPos) {
                    offsetMe();
                }

                console.log("wind", windowPos)
                console.log("pos", featPos)
    });
 
});



