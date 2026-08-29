// Cookie consent gate for Google Analytics, Meta Pixel and Metricool.
// Nothing tracking-related loads until the visitor accepts.
(function () {
  var STORAGE_KEY = 'foreman_cookie_consent';

  function loadAnalytics() {
    if (window.__foremanAnalyticsLoaded) return;
    window.__foremanAnalyticsLoaded = true;

    // Google Analytics
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-WC42958MQL';
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-WC42958MQL');

    // Meta Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = true; t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', '2463232994177897');
    window.fbq('track', 'PageView');

    // Metricool
    var img = document.createElement('img');
    img.src = 'https://tracker.metricool.com/c3po.jpg?hash=ed0bf62d8102b464e638d41be700c59a';
    img.style.display = 'none';
    document.body.appendChild(img);
  }

  function showBanner() {
    var el = document.getElementById('cookieBanner');
    if (el) el.hidden = false;
  }

  function hideBanner() {
    var el = document.getElementById('cookieBanner');
    if (el) el.hidden = true;
  }

  function init() {
    var consent = localStorage.getItem(STORAGE_KEY);
    if (consent === 'accepted') {
      loadAnalytics();
    } else if (consent !== 'declined') {
      showBanner();
    }

    var acceptBtn = document.getElementById('cookieAccept');
    var declineBtn = document.getElementById('cookieDecline');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        hideBanner();
        loadAnalytics();
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', function () {
        localStorage.setItem(STORAGE_KEY, 'declined');
        hideBanner();
      });
    }

    // Lets a "Cookie settings" link in the footer reopen the banner.
    window.foremanReopenCookieBanner = function (e) {
      if (e) e.preventDefault();
      showBanner();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
