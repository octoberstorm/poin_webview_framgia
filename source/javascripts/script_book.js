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
* NProgress 
* slim progress bars in JavaScript - Rico Sta Cruz
* https://github.com/rstacruz/nprogress
* 
* (c) 2013, Rico Sta. Cruz
* Released under the MIT License.
* http://ricostacruz.com/nprogress
*
*/




//
// unveil.js
//


;(function($){$.fn.unveil=function(threshold){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded,inview,source;this.one("unveil",function(){source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source)this.setAttribute("src",source);});function unveil(){inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);







/**
* 
* 
* NProgress 
* slim progress bars in JavaScript - Rico Sta Cruz
* https://github.com/rstacruz/nprogress
* 
* (c) 2013, Rico Sta. Cruz
* Released under the MIT License.
* http://ricostacruz.com/nprogress
*
*
*/

!function(c){"function"==typeof module?module.exports=c(this.jQuery||require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],function(g){return c(g)}):this.NProgress=c(this.jQuery)}(function(c){function g(a,b,h){var c;return c="translate3d"===d.positionUsing?{transform:"translate3d("+100*(-1+a)+"%,0,0)"}:"translate"===d.positionUsing?{transform:"translate("+100*(-1+a)+"%,0)"}:{"margin-left":100*(-1+a)+"%"},c.transition="all "+b+"ms "+h,c}var b={version:"0.1.2"},d=b.settings={minimum:0.08,
easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:0.02,trickleSpeed:800,showSpinner:!0,template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};return b.configure=function(a){return c.extend(d,a),this},b.status=null,b.set=function(a){var e=b.isStarted();a=d.minimum>a?d.minimum:1<a?1:a;b.status=1===a?null:a;var c=b.render(!e),k=c.find('[role="bar"]'),f=d.speed,l=d.easing;return c[0].offsetWidth,c.queue(function(e){""===
d.positionUsing&&(d.positionUsing=b.getPositioningCSS());k.css(g(a,f,l));1===a?(c.css({transition:"none",opacity:1}),c[0].offsetWidth,setTimeout(function(){c.css({transition:"all "+f+"ms linear",opacity:0});setTimeout(function(){b.remove();e()},f)},f)):setTimeout(e,f)}),this},b.isStarted=function(){return"number"==typeof b.status},b.start=function(){b.status||b.set(0);var a=function(){setTimeout(function(){b.status&&(b.trickle(),a())},d.trickleSpeed)};return d.trickle&&a(),this},b.done=function(a){return a||
b.status?b.inc(0.3+0.5*Math.random()).set(1):this},b.inc=function(a){var c=b.status;if(c){if("number"!=typeof a){a=1-c;var d=Math.random()*c;a*=0.1>d?0.1:0.95<d?0.95:d}a=(c=0>c+a?0:0.994<c+a?0.994:c+a,b.set(c))}else a=b.start();return a},b.trickle=function(){return b.inc(Math.random()*d.trickleRate)},b.render=function(a){if(b.isRendered())return c("#nprogress");c("html").addClass("nprogress-busy");var e=c("<div id='nprogress'>").html(d.template);a=a?"-100":100*(-1+(b.status||0));return e.find('[role="bar"]').css({transition:"all 0 linear",
transform:"translate3d("+a+"%,0,0)"}),d.showSpinner||e.find('[role="spinner"]').remove(),e.appendTo(document.body),e},b.remove=function(){c("html").removeClass("nprogress-busy");c("#nprogress").remove()},b.isRendered=function(){return 0<c("#nprogress").length},b.getPositioningCSS=function(){var a=document.body.style,b="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return b+"Perspective"in a?"translate3d":b+"Transform"in a?"translate":"margin"},
b});






//
// Start original scripts from here.
//




//
// Load image when it close to the viewport.
// See more: http://luis-almeida.github.io/unveil/
// 

$(document).ready(function() {
  $("img").unveil( 400 );
});


$(document).ready(function(){


	// Get socail counts
	// Thanks to cre8or.jp for his sterling work. http://unguis.cre8or.jp/web/2026
	// Facebookの反応（いいねとシェアの数）を取得
	function get_social_count_facebook(url, counterTarget) {
		$.ajax({
			url:'https://graph.facebook.com/',
			dataType:'jsonp',
			data:{
				id:url
			},
			success:function(res){
				$(counterTarget + ' .js-share--count').text( res.shares || 0 );
			},
			error:function(){
				$(counterTarget + ' .js-share--count').text('?');
			}
		});
	}
	// Twitterの反応（ツイートやリツイート数）を取得
	function get_social_count_twitter(url, counterTarget) {
		$.ajax({
			url:'http://urls.api.twitter.com/1/urls/count.json',
			dataType:'jsonp',
			data:{
				url:url
			},
			success:function(res){
				$(counterTarget + ' .js-share--count').text( res.count || 0 );
			},
			error:function(){
				$(counterTarget + ' .js-share--count').text('?');
			}
		});
	}

	// Get Social count
	$(function(){
		get_social_count_facebook("http://poin.co", ".js-share--facebook");
		get_social_count_twitter("http://poin.co", ".js-share--twitter");
	});









	// lazy loading background
	// Modified from http://stackoverflow.com/questions/977090/fading-in-a-background-image
	$.fn.smartBackgroundImage = function(url){
		var t = this;
		$(this).css({ 'opacity' : 0 });
		//create an img so the browser will download the image:
		$('<img />')
			.attr('src', url)
			.load(function(){ //attach onload to set background-image
				t.each(function(){
					$(this)
						.css('backgroundImage', "url('"+url+"')" )
						.animate({ opacity: 1 }, 350);
				});
			});
		return this;
	}

	$(window).load(function() {
		// Lazy load background images
		$(".js-load__bg").each(function() {
			$(this).smartBackgroundImage($(this).data('bg'));
		});
	});

});

