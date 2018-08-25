//GatryNightMode
(function ($) {

  //initialize options
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
    handleThreeDotsImages: function () {
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
    addToogleButton: function () {
      /*
      //Add this to nav bar
      <li>
        <h4>Light</h4>
        <input class="tgl tgl-light" id="cb1" type="checkbox">
        <label class="tgl-btn" for="cb1"></label>
      </li>
      */

      // console.log(document.getElementsByClassName('promocao-menu'));

      var li = document.createElement("li");
      li.className = "tg-list-item";
      // var h4 = document.createElement("h4");
      // h4.innerHTML = "Night Mode";
      // li.appendChild(h4);
      var input = document.createElement("input");
      input.className = "tgl tgl-light";
      input.id = "cb1";
      input.type = "checkbox";
      li.appendChild(input);
      var label = document.createElement("label");
      label.className = "tgl-btn toogle-nav";
      label.htmlFor = "cb1";
      li.appendChild(label);

      document.getElementsByClassName('promocao-menu')[0].className += " tg-list";
      document.getElementsByClassName('promocao-menu')[0].appendChild(li);
    }

  });

  //Run on jQuery ready
  $(function () {
    self.handleThreeDotsImages();
    // self.addToogleButton();
  });
})(jQuery);