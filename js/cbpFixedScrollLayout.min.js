/**
 * cbpFixedScrollLayout.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpFixedScrollLayout=(function(){var a={$sections:$("#cbp-fbscroller > section"),$navlinks:$("#cbp-fbscroller > nav:first > a"),currentLink:0,$body:$("html, body"),animspeed:650,animeasing:"easeInOutExpo"};function d(){a.$navlinks.on("click",function(){c(a.$sections.eq($(this).index()).offset().top);return false});a.$sections.waypoint(function(e){if(e==="down"){b($(this))}},{offset:"30%"}).waypoint(function(e){if(e==="up"){b($(this))}},{offset:"-30%"});$(window).on("debouncedresize",function(){c(a.$sections.eq(a.currentLink).offset().top)})}function b(e){a.$navlinks.eq(a.currentLink).removeClass("cbp-fbcurrent");a.currentLink=e.index("section");a.$navlinks.eq(a.currentLink).addClass("cbp-fbcurrent")}function c(e){a.$body.stop().animate({scrollTop:e},a.animspeed,a.animeasing)}return{init:d}})();