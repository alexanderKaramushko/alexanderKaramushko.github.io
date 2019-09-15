"use strict";

var lazy = [];

function registerListener (event, func) {
  if (window.addEventListener) {
    window.addEventListener(event, func);
  } else {
    window.attachEvent("on" + event, func);
  }
}

function initTooltip () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({
      delay: {
        show: 200,
        hide: 1500
      }
    });
  });
}

function initScrollableHeader () {
  window.onscroll = function () {
    if ($(document).scrollTop() > 80) {
      $("header").addClass("header_scrolled");
    } else {
      $("header").removeClass("header_scrolled");
    }
  };
}

function setLazy () {
  lazy = document.getElementsByClassName("lazy");
}

function lazyLoad () {
  for (var i = 0; i < lazy.length; i++) {
    if (isInViewport(lazy[i])) {
      if (lazy[i].getAttribute("data-src")) {
        lazy[i].src = lazy[i].getAttribute("data-src");
        lazy[i].onload = function () {
          this.classList.add("img-loaded-js");
        };
        lazy[i].removeAttribute("data-src");
      }
    }
  }

  cleanLazy();
}

function cleanLazy () {
  lazy = Array.prototype.filter.call(lazy, function (l) {
    return l.getAttribute("data-src");
  });
}

function isInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

registerListener("load", setLazy);
registerListener("load", lazyLoad);
registerListener("load", initTooltip);
registerListener("load", initScrollableHeader);
registerListener("load", objectFitImages);
registerListener("scroll", lazyLoad);
registerListener("resize", lazyLoad);

(function (document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: document.querySelector('.fixed-header').getBoundingClientRect().height,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function () {
      this.scrollToCurrent();
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function () {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function (href, pushToHistory) {
      var match, rect, anchorOffset;

      if (!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if (match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if (HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function () {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function (e) {
      var elem = e.target;

      if (
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);