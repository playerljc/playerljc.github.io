window.GlobalIndicator = (function () {
  var selectorPrefix = 'globalIndicator';

  function createElement(html) {
    var dom = document.createElement('div');
    dom.innerHTML = html;
    return dom.firstElementChild;
  }

  return {
    open: function () {
      var el = createElement(
  '<div class="' + selectorPrefix + '">' +
        ' <img src="/components/globalindicator/preloader2.gif" class="' + selectorPrefix + '-inner" />' +
        '</div>'
      );
      document.body.appendChild(el);
      return el;
    },
    close: function (el) {
      el.parentElement.removeChild(el);
    }
  }
})();