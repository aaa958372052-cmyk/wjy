// ===============================
// Facebook Pixel - LINE Lead Track (Once)
// ===============================

(function () {

  var hasTracked = false;

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {

    var selectors = [
      '.btn-line',
      '.cta-btn'
    ];

    var lineButtons = document.querySelectorAll(selectors.join(','));
    if (!lineButtons.length) return;

    lineButtons.forEach(function (btn) {

      btn.addEventListener('click', function () {

        if (hasTracked) return;
        hasTracked = true;

        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', {
            content_name: 'LINE友だち追加',
            content_category: 'LINE'
          });
        }

      });

    });

  });

})();

