/*  ----------------------------------------------

 jakepodell.com Mobile JS File
 AUTHOR: Jake Podell| jhp246@cornell.edu
 FILE CREATED: 1/6/16
 REQUIRES: JQUERY 1.7+

 ----------------------------------------------  */

var Site = Site || {};

Site.mobile = {

    $nav_button: $("#mobile_nav_button"),
    $nav_bar   : $("#mobile_nav_bar"),


    /**
     * The behavior for the mobile navigation menu.
     * When the hamberger style button is pressed, the menu flies out.
     * If the menu is out and there is a click outside of it, the menu closes.
     * This is done by toggling "visible" and "hidden" classes.
     */
    init: function () {

        $(document).click(function(e){

            //If the mobile nav button is pressed, show the menu
            if(Site.mobile.$nav_button.is(e.target)){
                Site.mobile.$nav_bar.removeClass("hidden");
                Site.mobile.$nav_bar.addClass("visible");
            }

            //If the menu is visible and the user clicks outside of it,
            //Hide the menu
            else if(!Site.mobile.$nav_bar.is(e.target)
            && Site.mobile.$nav_bar.hasClass("visible")){
                Site.mobile.$nav_bar.removeClass("visible");
                Site.mobile.$nav_bar.addClass("hidden");
            }
        });

        //If the user clicks a menu item, hide the menu
        $(".mobile_button").click(function(e){
            Site.mobile.$nav_bar.removeClass("visible");
            Site.mobile.$nav_bar.addClass("hidden");
        })
    },

}

$(document).ready(function()
{
    Site.mobile.init();

});

window.trace = function(arg){
    if(this.console){
        console.log(arg);
    }
};

