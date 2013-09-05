//------------------------------------------------------------
//
//  $Script for landing page layout.
//
//------------------------------------------------------------


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



//
// Typer.js
//


(function(e){e.fn.typer=function(t,n){n=e.extend({},{"char":"",delay:2e3,duration:600,endless:true,onType:e.noop,afterAll:e.noop,afterPhrase:e.noop},n||t);t=e.isPlainObject(t)?n.text:t;t=e.isArray(t)?t:t.split(" ");return this.each(function(){var r=e(this),i={input:1,textarea:1}[this.tagName.toLowerCase()],s=false,o,u=0;(function a(f){var l=({string:1,number:1}[typeof t]?t:t[f])+"",h=l.substr(u++,1);if(h==="<"){s=true}if(h===">"){s=false}r[i?"val":"html"](l.substr(0,u)+(e.isFunction(n.char)?n.char():n.char||" "));if(u<=l.length){if(s){a(f)}else{o=setTimeout(a,n.duration/10,f)}n.onType(o)}else{u=0;f++;if(f===t.length&&!n.endless){return}else if(f===t.length){f=0}o=setTimeout(a,n.delay,f);if(f===t.length-1)n.afterAll(o);n.afterPhrase(o)}})(0)})}})(jQuery)




//
// unveil.js
//


;(function($){$.fn.unveil=function(threshold){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded,inview,source;this.one("unveil",function(){source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source)this.setAttribute("src",source);});function unveil(){inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);








//
// Load image when it close to the viewport.
// See more: http://luis-almeida.github.io/unveil/
// 

$(document).ready(function() {
  $("img").unveil( 400 );
});







//
// Start original scripts
//


$(document).ready(function(){




    // About Email

    $('input.email').focus();

    $('input.email').on('keyup', function(){
        var text    = $(this).val();
        if (validateEmail(text) === false) {
            $(this).parents('.lp--beta--field').removeClass('valid');
        }
        else {
            $(this).parents('.lp--beta--field').addClass('valid');
        }
    });

    // Email varidation
    function validateEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    // typewriter effect
    var win = $(window),
        words = $('.lp__sub-title');

    words.typer([
        'Write about <span class="bg-water__lightest">sake</span>, <br>as <span class="bg-water">Sake Journal</span>.',
        'Write about <span class="bg-lime__lightest">movies</span>, <br>as <span class="bg-lime">Movies I\'ve watched</span>.',
        'Write about <span class="bg-orange__lightest">Tokyo food</span>, <br>as <span class="bg-orange">Tokyo Restaurant Guide</span>.',
        'Write about <span class="bg-peach__lightest">art</span>, <br>as <span class="bg-peach__lighter">My Favorite Museums</span>.',
        'Write about <span class="bg-orange__lightest">nails</span>, <br>as <span class="bg-orange">My Nail Collection</span>.'
        ]
    );










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






    //
    // Show tips bubble
    // Its located in about page.
    // 
    // # Use this on...
    //   - About
    //

    $('.tips').on('click', function(){
        $('body').toggleClass('js-tips--active');
        return false;
    });

    $(document).on('click', function(){
        $(this).find('.js-tips--active').removeClass();
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















