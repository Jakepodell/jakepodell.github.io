/*  ----------------------------------------------

 jakepodell.com WORK JS File
 AUTHOR: Jake Podell| jhp246@cornell.edu
 FILE CREATED: 12/29/15
 REQUIRES: JQUERY 1.7+

 ----------------------------------------------  */

var Site = Site || {};

Site.work = {

    $work: $("#work"),
    screen_percent: screen.width<770 ? 0.75 : 0.5,


    /**
     * initialize the work section of the site, including image and text
     */
    init: function () {
        this.work_item_scroll();
        this.init_work_item_scroll();
    },

    work_item_scroll: function () {
        $(".work_item").each(function(){
            var $image = $(this).find(".work_image");
            var $hr = $(this).find(".work_item_divider");
            var $description = $(this).find(".work_description");
            var image_scroll_top = $image.position().top;
            var vertical_scroll_position = $(document).scrollTop()+(window.innerHeight*Site.work.screen_percent);
            var offset_difference = vertical_scroll_position - (image_scroll_top - parseInt(Site.work.$work.css("padding-top")));
            //Behavior for the 100px transition region
            if (offset_difference >= 0 && offset_difference <= 100) {
                $image.css("opacity" , ""+offset_difference*0.01);
                $image.css("transform" , "translateX("+((offset_difference/2-25)*($image.hasClass("slide_from_left") ? 1 : -1))+"px)"); //25 =initial transform
            }
            //Behavior for before the transition region has been reached
            else if(offset_difference<0){
                $image.css("opacity" , "0");
                $image.css("transform" , "translateX("+($image.hasClass("slide_from_left") ? -2 : 2)+"5px)");
                $hr.css("opacity","0");
            }
            //Behavior for after the transion region has been passed
            else if(offset_difference>100){
                $image.css("opacity" , "1");
                $image.css("transform" , "translateX("+($image.hasClass("slide_from_left") ? 2 : -2)+"5px)");
                $hr.css("opacity","0.25");
                $hr.css("width","50%");
            }
            //Show or hide the description based on if the transition region has been passed
            $description.css("opacity","" + offset_difference>100 ? 1 : 0);
            $description.css("transform","translateY(" + (offset_difference>100 ? 0 : 15) + "px)");
        })
    },

    /**
     * initialize the onScroll function for the work preview animations
     * go through each work item and define the visibility of its elements
     * based on the vertical scroll distance
     */
    init_work_item_scroll: function () {
        window.onscroll = function() {
            Site.work.work_item_scroll()
        }
    },
}

$(document).ready(function()
{
    Site.work.init();

});

window.trace = function(arg){
    if(this.console){
        console.log(arg);
    }
};

