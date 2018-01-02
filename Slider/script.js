function ws_fade(c, a, b) {
  var e = jQuery;
  var d = e("ul", b);
  var f = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  };
  this.go = function(g, h) {
    var i = e(a.get(g)).clone().css(f).hide().appendTo(b);
    if (!c.noCross) {
      var j = e(a.get(h)).clone().css(f).appendTo(b);
      d.hide();
      j.fadeOut(c.duration, function() {
        j.remove()
      })
    }
    i.fadeIn(c.duration, function() {
      d.css({
        left: -g + "00%"
      }).show();
      i.remove()
    });
    return g
  }
};

jQuery("#wowslider-container1").wowSlider({
  effect: "fade",
  prev: "",
  next: "",
  duration: 20 * 100,
  delay: 20 * 100,
  width: 1024,
  height: 768,
  autoPlay: true,
  stopOnHover: false,
  loop: false,
  bullets: true,
  caption: true,
  captionEffect: "slide",
  controls: true,
  logo: "Slider/triangle.png",
  images: 0
});
