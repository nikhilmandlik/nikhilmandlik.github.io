// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 2.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider=function(A){var F=jQuery;var l=this;var h=l.get(0);A=F.extend({effect:function(){this.go=function(d,f){b(d);return d}},prev:"",next:"",duration:1000,delay:20*100,captionDuration:10,captionEffect:0,width:1024,height:768,caption:true,controls:true,autoPlay:true,bullets:true,onBeforeStep:function(d){return d+1},stopOnHover:0,preventCopy:1},A);var a=F(".ws_images",l);var I=a.find("ul");function b(d){I.css({left:-d+"00%"})}F("<div>").css({width:"100%",visibility:"hidden","font-size":0,"line-height":0}).append(a.find("li:first img:first").clone().css({width:"100%"})).prependTo(a);I.css({position:"absolute",top:0,animation:"none","-moz-animation":"none","-webkit-animation":"none"});var q=A.images&&(new wowsliderPreloader(this,A));A.loop=A.loop||Number.MAX_VALUE;var i=a.find("li");var D=i.length;function z(d){return((d||0)+D)%D}A.stopOn=z(A.stopOn);A.startSlide=z(A.startSlide);var u=navigator.userAgent;if((F.browser.msie&&parseInt(F.browser.version,10)<8)||(/Safari/.test(u))){var O=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(D)));I.css({width:O+"00%"});i.css({width:100/O+"%"})}else{I.css({width:D+"00%",display:"table"});i.css({display:"table-cell","float":"none",width:"auto"})}b(A.startSlide);var G;if(A.preventCopy&&!/iPhone/.test(navigator.platform)){G=F('<div><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(l).find("A").get(0)}var g=[];i.each(function(d){var t=F(">img:first,>a:first,>div:first",this).get(0);var V=F("<div></div>");for(var f=0;f<this.childNodes.length;){if(this.childNodes[f]!=t){V.append(this.childNodes[f])}else{f++}}if(!F(this).data("descr")){F(this).data("descr",V.html().replace(/^\s+|\s+$/g,""))}F(this).css({"font-size":0});g[g.length]=F(">a>img",this).get(0)||F(">*",this).get(0)});g=F(g);g.css("visibility","visible");if(typeof A.effect=="string"){A.effect=window["ws_"+A.effect]}var N=new A.effect(A,g,a);var C=A.startSlide;function k(t,f,d){if(isNaN(t)){t=A.onBeforeStep(C,D)}t=z(t);if(C==t){return}if(q){q.load(t,function(){r(t,f,d)})}else{r(t,f,d)}}function r(t,f,d){var t=N.go(t,C,f,d);if(t<0){return}p(t);if(A.caption){B(i[t])}C=t;if(C==A.stopOn&&!--A.loop){A.autoPlay=0}E();if(A.onStep){A.onStep(t)}}var w,v,j=0;if(h.addEventListener){h.addEventListener("touchmove",function(t){if(j){var f=(w-t.touches[0].pageX)/20;var d=(v-t.touches[0].pageY)/20;if((Math.abs(f)>1)||(Math.abs(d)>1)){w=v=j=0;U(t,C+((f+d)>0?1:-1),f,d)}}},false);h.addEventListener("touchstart",function(d){if(d.touches.length==1){w=d.touches[0].pageX;v=d.touches[0].pageY;j=1}else{j=0}},false);h.addEventListener("touchend",function(d){j=0},false)}function R(t){var f="";for(var d=0;d<t.length;d++){f+=String.fromCharCode(t.charCodeAt(d)^(1+(t.length-d)%32))}return f}function p(f){if(A.bullets){P(f)}if(G){var d=F("A",i.get(f)).get(0);if(d){G.setAttribute("href",d.href);G.setAttribute("target",d.target);G.style.display="block"}else{G.style.display="none"}}}var n;function E(d){o();if(A.autoPlay){n=setTimeout(function(){k()},A.delay+(d?0:A.duration))}}function o(){if(n){clearTimeout(n)}n=null}function U(V,t,f,d){o();V.preventDefault();k(t,f,d);E()}var J=c=a;var L="www.nikhilmandlik.com";if(!L){return};if(!L){return}c=L?F("<div> </div>"):0;if(c){c.css({position:"absolute",right:"2px",bottom:"2px",padding:"0 0 0 0","z-index":10});J.append(c)}if(c&&document.all){var Q=F('<iframe src="javascript:false"></iframe>');Q.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});Q.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});c.append(Q)}var T=c?F(document.createElement("A")):c;if(T){T.css({position:"relative",display:"block","background-color":"#FFF",color:"#000","font-family":"Lucida Grande,sans-serif","font-size":"11px","font-weight":"normal","font-style":"normal","-moz-border-radius":"5px","border-radius":"5px",padding:"1px 5px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});T.attr({href:"http://"+L.toLowerCase()});T.html(L);T.bind("contextmenu",function(d){return false});c.append(T)}if(A.controls){var x=F('<a href="#" class="ws_next">'+A.next+"</a>");var S=F('<a href="#" class="ws_prev">'+A.prev+"</a>");l.append(x);l.append(S);x.bind("click",function(d){U(d,C+1)});S.bind("click",function(d){U(d,C-1)});if(/iPhone/.test(navigator.platform)){S.get(0).addEventListener("touchend",function(d){U(d,C-1)},false);x.get(0).addEventListener("touchend",function(d){U(d,C+1)},false)}}function e(){var t=l.find(".ws_bullets>div");var Z=F("a",t);Z.click(function(aa){U(aa,F(aa.target).index())});var X=Z.find("IMG");if(X.length){var W=F('<div class="ws_bulframe"/>').appendTo(t);var f=F("<div/>").css({width:X.length+1+"00%"}).appendTo(F("<div/>").appendTo(W));X.appendTo(f);F("<span/>").appendTo(W);var V=-1;function Y(ac){if(ac<0){ac=0}if(q){q.loadTtip(ac)}F(Z.get(V)).removeClass("ws_overbull");F(Z.get(ac)).addClass("ws_overbull");W.show();var ad={left:Z.get(ac).offsetLeft-W.width()/2,"margin-top":Z.get(ac).offsetTop-Z.get(0).offsetTop+"px","margin-bottom":-Z.get(ac).offsetTop+Z.get(Z.length-1).offsetTop+"px"};var ab=X.get(ac);var aa={left:-ab.offsetLeft+(F(ab).outerWidth(true)-F(ab).outerWidth())/2};if(V<0){W.css(ad);f.css(aa)}else{if(!document.all){ad.opacity=1}W.stop().animate(ad,"fast");f.stop().animate(aa,"fast")}V=ac}Z.hover(function(){Y(F(this).index())});var d;t.hover(function(){if(d){clearTimeout(d);d=0}Y(V)},function(){Z.removeClass("ws_overbull");if(document.all){if(!d){d=setTimeout(function(){W.hide();d=0},400)}}else{W.stop().animate({opacity:0},{duration:"fast",complete:function(){W.hide()}})}});t.click(function(aa){U(aa,F(aa.target).index())})}}function P(d){F(".ws_bullets A",l).each(function(f){if(f==d){F(this).addClass("ws_selbull")}else{F(this).removeClass("ws_selbull")}})}if(A.caption){$caption=F("<div class='ws-title' style='display:none'></div>");l.append($caption);$caption.bind("mouseover",function(d){o()});$caption.bind("mouseout",function(d){E()})}var K=A.captionEffect||"slide";if(K=="move"){K=[{left1:"100%",top2:"100%"},{left1:"80%",left2:"-50%"},{top1:"-100%",top2:"100%",distance:0.7,easing:"easeOutBack"},{top1:"-80%",top2:"-80%",distance:0.3,easing:"easeOutBack"},{top1:"-80%",left2:"80%"},{left1:"80%",left2:"80%"}]}function B(f){var V=F("img",f).attr("title");var t=F(f).data("descr");var d=F(".ws-title",l);d.stop(1,1).stop(1,1).fadeOut(A.captionDuration/3,function(){if(V||t){d.html((V?"<span>"+V+"</span>":"")+(t?"<div>"+t+"</div>":""));if(K=="slide"){M(d,{direction:"left",easing:"easeInOutExpo",complete:function(){if(F.browser.msie){d.get(0).style.removeAttribute("filter")}},duration:A.captionDuration})}else{m(d,K[Math.floor(Math.random()*K.length)],0.5,"easeOutElastic1",A.captionDuration)}}})}if(A.bullets){e()}p(C);if(A.caption){B(i[C])}if(A.stopOnHover){this.bind("mouseover",function(d){o()});this.bind("mouseout",function(d){E()})}E(1);function H(W,f){var X,t=document.defaultView;if(t&&t.getComputedStyle){var V=t.getComputedStyle(W,"");if(V){X=V.getPropertyValue(f)}}else{var d=f.replace(/\-\w/g,function(Y){return Y.charAt(1).toUpperCase()});if(W.currentStyle){X=W.currentStyle[d]}else{X=W.style[d]}}return X}function y(V,t,Y){var X="padding-left|padding-right|border-left-width|border-right-width".split("|");var W=0;for(var f=0;f<X.length;f++){W+=parseFloat(H(V,X[f]))||0}var d=parseFloat(H(V,"width"))||((V.offsetWidth||0)-W);if(t){d+=W}if(Y){d+=(parseFloat(H(V,"margin-left"))||0)+(parseFloat(H(V,"margin-right"))||0)}return d}function s(V,t,Y){var X="padding-top|padding-bottom|border-top-width|border-bottom-width".split("|");var W=0;for(var f=0;f<X.length;f++){W+=parseFloat(H(V,X[f]))||0}var d=parseFloat(H(V,"height"))||((V.offsetHeight||0)-W);if(t){d+=W}if(Y){d+=(parseFloat(H(V,"margin-top"))||0)+(parseFloat(H(V,"margin-bottom"))||0)}return d}function m(W,aa,d,Y,t){var V=W.find(">span,>div").get();F(V).css({position:"relative",visibility:"hidden"});W.show();for(var f in aa){if(/\%/.test(aa[f])){aa[f]=parseInt(aa[f])/100;var Z=W.offset()[/left/.test(f)?"left":"top"];var ab=/left/.test(f)?"width":"height";if(aa[f]<0){aa[f]*=Z}else{aa[f]*=l[ab]()-W[ab]()-Z}}}F(V[0]).css({left:(aa.left1||0)+"px",top:(aa.top1||0)+"px"});F(V[1]).css({left:(aa.left2||0)+"px",top:(aa.top2||0)+"px"});var t=aa.duration||t;function X(ac){var ad=F(V[ac]).css("opacity");F(V[ac]).css({opacity:0,visibility:"visible"}).animate({opacity:ad},t,"easeOutCirc").animate({top:0,left:0},{duration:t,easing:(aa.easing||Y),queue:false})}X(0);setTimeout(function(){X(1)},t*(aa.distance||d))}function M(Z,ac){var ab={position:0,top:0,left:0,bottom:0,right:0};for(var t in ab){ab[t]=Z.get(0).style[t]||H(Z.get(0),t)}Z.show();var Y={width:y(Z.get(0),1,1),height:s(Z.get(0),1,1),"float":Z.css("float"),overflow:"hidden",opacity:0};for(var t in ab){Y[t]=ab[t]}var f=F("<div></div>").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});Z.wrap(f);f=Z.parent();if(Z.css("position")=="static"){f.css({position:"relative"});Z.css({position:"relative"})}else{F.extend(Y,{position:Z.css("position"),zIndex:Z.css("z-index")});Z.css({position:"absolute",top:0,left:0,right:"auto",bottom:"auto"})}f.css(Y).show();var aa=ac.direction||"left";var V=(aa=="up"||aa=="down")?"top":"left";var W=(aa=="up"||aa=="left");var d=ac.distance||(V=="top"?Z.outerHeight({margin:true}):Z.outerWidth({margin:true}));Z.css(V,W?(isNaN(d)?"-"+d:-d):d);var X={};X[V]=(W?"+=":"-=")+d;f.animate({opacity:1},{duration:ac.duration,easing:ac.easing});Z.animate(X,{queue:false,duration:ac.duration,easing:ac.easing,complete:function(){Z.css(ab);Z.parent().replaceWith(Z);if(ac.complete){ac.complete()}}})}h.wsStart=k;h.wsStop=o;return this};jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeOutElastic1:function(k,l,i,h,g){var f=Math.PI/2;var m=1.70158;var e=0;var j=h;if(l==0){return i}if((l/=g)==1){return i+h}if(!e){e=g*0.3}if(j<Math.abs(h)){j=h;var m=e/4}else{var m=e/f*Math.asin(h/j)}return j*Math.pow(2,-10*l)*Math.sin((l*g-m)*f/e)+h+i},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a}});