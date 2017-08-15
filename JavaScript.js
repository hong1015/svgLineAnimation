$(document).ready(function () {

    //var $dashOffset = $("ellipse").css("stroke-dashoffset");

    //on a scroll event - execute function
    //$(window).scroll(function () {
    //    //calculate how far down the page the user is 
    //    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //    //convert dashoffset pixel value to interger
    //    var $newUnit = parseInt($dashOffset, 10);

    //    //get the value to be subtracted from the 'stroke-dashoffset'
    //    var $offsetUnit = $percentageComplete * ($newUnit / 100);
       
    //    //set the new value of the dashoffset to create the drawing effect
       
    //    $("ellipse").css("stroke-dashoffset", $newUnit - $offsetUnit);

    //});
    //variable for the 'stroke-dashoffset' unit
    var $dashOffset = $(".iron path").css("stroke-dashoffset");
   
    $dashIEOffset = $(".iron ellipse").css("stroke-dashoffset");

    $dashCOffset = $(".cap path").css("stroke-dashoffset");
    $dashC1Offset = $(".cap .path1").css("stroke-dashoffset");
    $dashEOffset = $(".cap ellipse").css("stroke-dashoffset");

    //on a scroll event - execute function
    $(window).scroll(function () {

     
        //calculate how far down the page the user is 
        var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);

        //convert dashoffset pixel value to interger
        var $newUnit = parseInt($dashOffset, 10);
        $newIEUnit = parseInt($dashIEOffset, 10);
   

        //get the value to be subtracted from the 'stroke-dashoffset'
        var $offsetUnit = $percentageComplete * ($newUnit / 100);
        $offsetIEUnit = $percentageComplete * ($newIEUnit / 100);

      

        //set the new value of the dashoffset to create the drawing effect
        
          
        
        offsetTot = $newUnit - $offsetUnit
        offsetETot = $newIEUnit - $offsetIEUnit       
        if (offsetTot > 0) {
            $(".iron path").css("stroke-dashoffset", offsetTot);
            $(".iron ellipse").css("stroke-dashoffset", offsetETot);
   
        } 

        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowPosCust = $(window).scrollTop();
        var windowPos = windowPos + ($(window).height() - ($(window).height() / 5));

        var divPos = $('.cap').offset().top 
        var divHeight = $('.cap').height();


        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
 
            var $percentageCComplete = ((($(window).scrollTop() - divPos) * ($("html").height() - $(window).height())) / 10000);
            $newCUnit = parseInt($dashCOffset, 10);
            $newC1Unit = parseInt($dashC1Offset, 10);
            $newEUnit = parseInt($dashEOffset, 10);

            $offsetCUnit = $percentageCComplete * ($newCUnit / 100);
            $offsetC1Unit = $percentageCComplete * ($newC1Unit / 100);
            $offsetEUnit = $percentageCComplete * ($newEUnit / 100);

            offsetCTot = $newCUnit - $offsetCUnit
            offsetC1Tot = $newC1Unit - $offsetC1Unit
            offsetCETot = $newEUnit - $offsetEUnit

            
            if (offsetCTot > 1990 && offsetCTot < 3060) {
               $(".cap path").css("stroke-dashoffset", offsetCTot);
               $(".cap .path1").css("stroke-dashoffset", offsetC1Tot);
                $(".cap ellipse").css("stroke-dashoffset", offsetCETot);
            }
        }

        capTest = $('.cap').scrollTop();
        test = windowPos - divPos;
        test2 = (($(".cap").height()) / ($(window).scrollTop() - divPos)) * 100;
        cap = $("html").height();
        wH = $(window).height();
        console.log('window:' + windowPos);
        console.log('math:' + test);
        console.log(offsetCTot);
    });




    //var p = document.querySelector('.path'),
    //p1 = document.querySelector('.path1'),
    //p2 = document.querySelector('.path2'),
    //p3 = document.querySelector('.path3'),
    //p4 = document.querySelector('.path4'),
    //p5 = document.querySelector('.path5'),
    //p6 = document.querySelector('.path6'),
    //p7 = document.querySelector('.path7'),
    //p8 = document.querySelector('.path8'),
    //p9 = document.querySelector('.path9'),
    //p10 = document.querySelector('.path10'),
    //p11 = document.querySelector('.path11'),
    //p12 = document.querySelector('.path12'),
    //p13 = document.querySelector('.path13'),
    //p14 = document.querySelector('.path14'),
    //p15 = document.querySelector('.path15'),
    //p16 = document.querySelector('.path16'),
    //p17 = document.querySelector('.path17'),
    //p18 = document.querySelector('.path18'),
    //p19 = document.querySelector('.path19'),
    //p20 = document.querySelector('.path20'),
    //offset = 1000;

    //var offsetMe = function () {
    //    //if (offset > 0) {
    //        p.style.strokeDashoffset = offset;
    //        p1.style.strokeDashoffset = offset;
    //        p2.style.strokeDashoffset = offset;
    //        p3.style.strokeDashoffset = offset;
    //        p4.style.strokeDashoffset = offset;
    //        p5.style.strokeDashoffset = offset;
    //        p6.style.strokeDashoffset = offset;
    //        p7.style.strokeDashoffset = offset;
    //        p8.style.strokeDashoffset = offset;
    //        p9.style.strokeDashoffset = offset;
    //        p10.style.strokeDashoffset = offset;
    //        p11.style.strokeDashoffset = offset;
    //        p12.style.strokeDashoffset = offset;
    //        p13.style.strokeDashoffset = offset;
    //        p14.style.strokeDashoffset = offset;
    //        p15.style.strokeDashoffset = offset;
    //        p16.style.strokeDashoffset = offset;
    //        p17.style.strokeDashoffset = offset;
    //        p18.style.strokeDashoffset = offset;
    //        p19.style.strokeDashoffset = offset;
    //        p20.style.strokeDashoffset = offset;
    //        offset--;


    //        requestAnimationFrame(offsetMe);
    //    //} else {
    //    //    cancelAnimationFrame(offsetMe);
    //    //}

    //}

    //offsetMe();

    //Doesn't work in ie
    //var paths = document.querySelectorAll(' path');

    //[].forEach.call(paths, function (path) {
    //    var length = path.getTotalLength();
    //    // Clear any previous transition
    //    path.style.transition = path.style.WebkitTransition =
    //      'none';
    //    // Set up the starting positions
    //    path.style.strokeDasharray = length + ' ' + length;
    //    path.style.strokeDashoffset = length;
    //    // Trigger a layout so styles are calculated & the browser
    //    // picks up the starting position before animating
    //    path.getBoundingClientRect();
    //    // Define our transition
    //    path.style.transition = path.style.WebkitTransition =
    //      'stroke-dashoffset 2s ease-in-out';
    //    // Go!
    //    path.style.strokeDashoffset = '0';
    //})
});



