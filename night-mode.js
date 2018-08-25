//GatryNightMode
(function ($) {

  //initialize options
  var nightMode = false;

  chrome.storage.sync.get("nightModeValue", function (items) {
    if (!chrome.runtime.error) {
      nightMode = items.nightModeValue;
    }
  });

  var self = ($.nSteveBallmer = new function () {}());

  //populate array of Ballmer images
  var etcImg = chrome.extension.getURL("images/three-dots-pink.png");

  //core - JQuery
  $.extend(self, {
    handleImages: function () {
      $.each($("img"), function (i, item) {
        // console.log('scr= ' + $(item).attr("src"));
        if ($(item).attr("src") == '/img/three-dots.png?1534949112') {
          $(item).attr(
            "src",
            etcImg
          );
        }
      });
    },

    handleNightMode: function () {
      if (!nightMode) return;

      // var darkBlack = "#312d2d";
      // var lightBlack = "#545454";

      var lightBlack = "#3A3A3A";
      var darkBlack = "#232323";

      document.body.style.background = lightBlack;
      // document.body.style.color = "white";
      // document.body.style.fontFamily = "monospace";

      // tags = ["a", "p", "h1", "h2", "h3", "h4", "h5", "h6", "div", "span", "cite", "em", "strong", "table",
      //         "th", "ul", "il", "input", "body", "button", "dd", "dl", "dt", "em", "fieldset", "form", "i", 
      //         "label", "li", "ol", "header", "footer", "img", "content", "main", "pre", 
      //         "code", "blockquote", "textarea", "fb-appbar", "md-card", "console-footer", "Trends", "picture"];

      // tags = ["div", "body"];


      // tags.forEach(function(element) {
      //   // self.setColorOnTag("white", element);
      //   self.setBackgroundColorOnTag(darkBlack, element);
      //   // self.setFontOnTag("monospace", element);
      // }, this);

      // document.getElementById

      // tagsLightBlack = ["article", "footer"];

      // tagsLightBlack.forEach(function(element) {
      //   // self.setColorOnTag("white", element);
      //   self.setBackgroundColorOnTag(lightBlack, element);
      //   // self.setFontOnTag("monospace", element);
      // }, this);

      // document.getElementsByClassName("header-brand")[0].style.background = lightBlack;
      // document.getElementsByTagName("header")[0].style.background = lightBlack;
      // document.getElementsByTagName("nav")[0].style.background = lightBlack;
      // document.getElementsByTagName("nav")[0].style.color = "#b1b1b1";
      // document.getElementsByTagName("a")[0].style.color = "#b1b1b1";
      // document.getElementsByClassName("active")[0].style.color = "#b1b1b1";
      // document.getElementsByClassName("content")[0].style.background = "#4C4C4C";
      // document.getElementsByTagName("article")[0].style.background = lightBlack;

    },

    setColorOnTag: function (color, tag) {
      var itens = document.getElementsByTagName(tag);

      for (var i = 0; i < itens.length; i++) {
        itens[i].style.color = color;
      }
    },

    setBackgroundColorOnTag: function (bgColor, tag) {
      var itens = document.getElementsByTagName(tag);

      for (var i = 0; i < itens.length; i++) {
        itens[i].style.background = bgColor;
        itens[i].style.background.color = bgColor;
        itens[i].style.border = bgColor;
      }
    },

    setFontOnTag: function (fontName, tag) {
      var itens = document.getElementsByTagName(tag);

      for (var i = 0; i < itens.length; i++) {
        itens[i].style.fontFamily = fontName;
      }
    }
  });

  //Run on jQuery ready
  $(function () {
    self.handleImages();
    self.handleNightMode();
  });
})(jQuery);