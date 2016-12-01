/*  ----------------------------------------------

 jakepodell.com Header JS File
 AUTHOR: Jake Podell| jhp246@cornell.edu
 FILE CREATED: 12/27/15
 REQUIRES: JQUERY 1.7+

 ----------------------------------------------  */

var Site = Site || {};

Site.header = {

    $header_image: $("#header_img"),
    $header_text: $("#header_text"),
    $header_svg: $("#header_svg"),
    $header_container: $("#header_container"),


    /**
     * initialize the header of the site
     */
    init: function () {
        Site.header.init_text_entry();
    },

    /**
     * Slide the text up and ease into visible
     */
    init_text_entry: function () {
        this.$header_text.removeClass("header_text_low");
        this.$header_text.addClass("header_text_raised");
    }
}

$(document).ready(function()
{
    Site.header.init();

});

window.trace = function(arg){
    if(this.console){
        console.log(arg);
    }
};

