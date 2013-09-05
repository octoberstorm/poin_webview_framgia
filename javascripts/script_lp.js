/**
* jQuery Unveil
* A very lightweight jQuery plugin to lazy load images
* http://luis-almeida.github.com/unveil
*
* Licensed under the MIT license.
* Copyright 2013 Luís Almeida
* https://github.com/luis-almeida
*
*
* jquery.typer.js 0.0.4 - https://github.com/yckart/jquery.typer.js
* The typewriter effect
*
* Copyright (c) 2013 Yannick Albert (http://yckart.com)
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
* 2013/03/24
*
*
*
*/
!function(t){t.fn.typer=function(a,s){return s=t.extend({},{"char":"",delay:2e3,duration:600,endless:!0,onType:t.noop,afterAll:t.noop,afterPhrase:t.noop},s||a),a=t.isPlainObject(a)?s.text:a,a=t.isArray(a)?a:a.split(" "),this.each(function(){var e,n=t(this),i={input:1,textarea:1}[this.tagName.toLowerCase()],o=!1,r=0;!function c(u){var l=({string:1,number:1}[typeof a]?a:a[u])+"",p=l.substr(r++,1);if("<"===p&&(o=!0),">"===p&&(o=!1),n[i?"val":"html"](l.substr(0,r)+(t.isFunction(s.char)?s.char():s.char||" ")),r<=l.length)o?c(u):e=setTimeout(c,s.duration/10,u),s.onType(e);else{if(r=0,u++,u===a.length&&!s.endless)return;u===a.length&&(u=0),e=setTimeout(c,s.delay,u),u===a.length-1&&s.afterAll(e),s.afterPhrase(e)}}(0)})}}(jQuery),function(t){t.fn.unveil=function(a){function s(){n=l.filter(function(){var a=t(this),s=o.scrollTop(),e=s+o.height(),n=a.offset().top,i=n+a.height();return i>=s-r&&e+r>=n}),e=n.trigger("unveil"),l=l.not(e)}var e,n,i,o=t(window),r=a||0,c=window.devicePixelRatio>1,u=c?"data-src-retina":"data-src",l=this;return this.one("unveil",function(){i=this.getAttribute(u),i=i||this.getAttribute("data-src"),i&&this.setAttribute("src",i)}),o.scroll(s),o.resize(s),s(),this}}(window.jQuery||window.Zepto),$(document).ready(function(){$("img").unveil(400)}),$(document).ready(function(){function t(t){var a=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return a.test(t)}function a(t,a){$.ajax({url:"https://graph.facebook.com/",dataType:"jsonp",data:{id:t},success:function(t){$(a+" .js-share--count").text(t.shares||0)},error:function(){$(a+" .js-share--count").text("?")}})}function s(t,a){$.ajax({url:"http://urls.api.twitter.com/1/urls/count.json",dataType:"jsonp",data:{url:t},success:function(t){$(a+" .js-share--count").text(t.count||0)},error:function(){$(a+" .js-share--count").text("?")}})}$("input.email").focus(),$("input.email").on("keyup",function(){var a=$(this).val();t(a)===!1?$(this).parents(".lp--beta--field").removeClass("valid"):$(this).parents(".lp--beta--field").addClass("valid")});var e=($(window),$(".lp__sub-title"));e.typer(['Write about <span class="bg-water__lightest">sake</span>, <br>as <span class="bg-water">Sake Journal</span>.','Write about <span class="bg-lime__lightest">movies</span>, <br>as <span class="bg-lime">Movies I\'ve watched</span>.','Write about <span class="bg-orange__lightest">Tokyo food</span>, <br>as <span class="bg-orange">Tokyo Restaurant Guide</span>.','Write about <span class="bg-peach__lightest">art</span>, <br>as <span class="bg-peach__lighter">My Favorite Museums</span>.','Write about <span class="bg-orange__lightest">nails</span>, <br>as <span class="bg-orange">My Nail Collection</span>.']),$(function(){a("http://poin.co",".js-share--facebook"),s("http://poin.co",".js-share--twitter")}),$(".tips").on("click",function(){return $("body").toggleClass("js-tips--active"),!1}),$(document).on("click",function(){$(this).find(".js-tips--active").removeClass()}),$.fn.smartBackgroundImage=function(t){var a=this;return $(this).css({opacity:0}),$("<img />").attr("src",t).load(function(){a.each(function(){$(this).css("backgroundImage","url('"+t+"')").animate({opacity:1},350)})}),this},$(window).load(function(){$(".js-load__bg").each(function(){$(this).smartBackgroundImage($(this).data("bg"))})})});