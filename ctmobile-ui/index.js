var App = (function () {
  var menuData = [
    'Accordion',
    'BackTopAnimation',
    'CascadeCompared',
    'DragLayout',
    'FontSizeSetting',
    'Form',
    'ImageViewer',
    'JdCategoryTab',
    'KwList',
    'ListView',
    'MessageDialog',
    'Notification',
    'Popup',
    'PullRefresh',
    'Revolving',
    'ScrollLoad',
    'SidePanel',
    'SliderScale',
    'StickupLayout',
    'Surnames',
    'Swipeout',
    'Tab',
    'Tree',
  ];
  var globalIndicator;

  function createElement(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild;
  }

  function Application() {
    this.initVar();
    this.initEvents();
    this.render();
    this.curMenuEl = document.getElementById('Introduction');
  }

  Application.prototype = {
    initVar: function () {
      this.menuComponentWrapEl = document.getElementById('menuComponentWrap');
      this.iframeEl = document.getElementById('ctmobile-ui-iframe');
    },
    initEvents: function() {
      var self = this;
      this.menuComponentWrapEl.addEventListener('click', function (ev) {
        var el = ev.target;
        if(!el.classList.contains('menu-item')) return false;

        globalIndicator = window.GlobalIndicator.open();

        if(self.curMenuEl) {
          self.curMenuEl.classList.remove('active');
        }
        var code = el.dataset.code;
        el.classList.add('active');
        self.curMenuEl = el;
        self.iframeEl.src = 'html/' + code + '/index.html';
      });

      self.iframeEl.addEventListener('load', function () {
        window.GlobalIndicator.close(globalIndicator);
      });
    },
    render: function () {
      this.renderMenu();
    },
    renderMenu: function () {
      var i = 0, df = document.createDocumentFragment();
      for (i = 0; i < menuData.length; i++) {
        df.appendChild(createElement('<li class="menu-item" data-code="'+menuData[i]+'">' + menuData[i] + '</li>'));
      }
      this.menuComponentWrapEl.appendChild(df);
    }
  };

  return Application;
})();


window.onload = function (ev) {
  new App();
};


