// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/layouts/containers.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/layouts/header.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\envelope.svg":[["envelope.645ee32d.svg","assets/images/icons/envelope.svg"],"assets/images/icons/envelope.svg"],"./..\\..\\assets\\images\\icons\\location.svg":[["location.1f079381.svg","assets/images/icons/location.svg"],"assets/images/icons/location.svg"],"./..\\..\\assets\\images\\icons\\icon-facebook.svg":[["icon-facebook.1c2dc6d6.svg","assets/images/icons/icon-facebook.svg"],"assets/images/icons/icon-facebook.svg"],"./..\\..\\assets\\images\\icons\\icon-twitter.svg":[["icon-twitter.65d911e4.svg","assets/images/icons/icon-twitter.svg"],"assets/images/icons/icon-twitter.svg"],"./..\\..\\assets\\images\\icons\\icon-instagram.svg":[["icon-instagram.dbadbd96.svg","assets/images/icons/icon-instagram.svg"],"assets/images/icons/icon-instagram.svg"],"./..\\..\\assets\\images\\icons\\icon-youtube.svg":[["icon-youtube.27e51cb5.svg","assets/images/icons/icon-youtube.svg"],"assets/images/icons/icon-youtube.svg"],"./..\\..\\assets\\images\\icons\\icon-pinterset.svg":[["icon-pinterset.f7077cdb.svg","assets/images/icons/icon-pinterset.svg"],"assets/images/icons/icon-pinterset.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/layouts/footer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\arrow-down.svg":[["arrow-down.e5467e58.svg","assets/images/icons/arrow-down.svg"],"assets/images/icons/arrow-down.svg"],"./..\\..\\assets\\images\\icons\\mail-footer.svg":[["mail-footer.cec12424.svg","assets/images/icons/mail-footer.svg"],"assets/images/icons/mail-footer.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/layouts/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./containers.css":"styles/layouts/containers.css","./header.css":"styles/layouts/header.css","./footer.css":"styles/layouts/footer.css","_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/icon.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/button.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/revenue.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/box.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/card-resources.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\buyer.svg":[["buyer.691454d6.svg","assets/images/icons/buyer.svg"],"assets/images/icons/buyer.svg"],"./..\\..\\assets\\images\\icons\\renter.svg":[["renter.9cfe31b5.svg","assets/images/icons/renter.svg"],"assets/images/icons/renter.svg"],"./..\\..\\assets\\images\\icons\\seller.svg":[["seller.f7cfb648.svg","assets/images/icons/seller.svg"],"assets/images/icons/seller.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/card-space.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\clarity_home-line.svg":[["clarity_home-line.71b8de16.svg","assets/images/icons/clarity_home-line.svg"],"assets/images/icons/clarity_home-line.svg"],"./..\\..\\assets\\images\\icons\\clarity_user-outline-alerted.svg":[["clarity_user-outline-alerted.335c1320.svg","assets/images/icons/clarity_user-outline-alerted.svg"],"assets/images/icons/clarity_user-outline-alerted.svg"],"./..\\..\\assets\\images\\icons\\fluent_globe-location.svg":[["fluent_globe-location.c287a0ae.svg","assets/images/icons/fluent_globe-location.svg"],"assets/images/icons/fluent_globe-location.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/card-services.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\bed.svg":[["bed.5eba3c9b.svg","assets/images/icons/bed.svg"],"assets/images/icons/bed.svg"],"./..\\..\\assets\\images\\icons\\arrow-black.svg":[["arrow-black.fb528db5.svg","assets/images/icons/arrow-black.svg"],"assets/images/icons/arrow-black.svg"],"./..\\..\\assets\\images\\icons\\pool.svg":[["pool.1bef8acc.svg","assets/images/icons/pool.svg"],"assets/images/icons/pool.svg"],"./..\\..\\assets\\images\\icons\\copywriting.svg":[["copywriting.3017b29c.svg","assets/images/icons/copywriting.svg"],"assets/images/icons/copywriting.svg"],"./..\\..\\assets\\images\\icons\\smart-home.svg":[["smart-home.72eb80b9.svg","assets/images/icons/smart-home.svg"],"assets/images/icons/smart-home.svg"],"./..\\..\\assets\\images\\icons\\library.svg":[["library.61a56745.svg","assets/images/icons/library.svg"],"assets/images/icons/library.svg"],"./..\\..\\assets\\images\\icons\\duity.svg":[["duity.3c4fd95b.svg","assets/images/icons/duity.svg"],"assets/images/icons/duity.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/card-feature.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/feature-detail.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\map.svg":[["map.ed2a6f4a.svg","assets/images/icons/map.svg"],"assets/images/icons/map.svg"],"./..\\..\\assets\\images\\icons\\btn-arrow.svg":[["btn-arrow.cde080b5.svg","assets/images/icons/btn-arrow.svg"],"assets/images/icons/btn-arrow.svg"],"./..\\..\\assets\\images\\icons\\btn-arrow-hover.svg":[["btn-arrow-hover.1ea2f019.svg","assets/images/icons/btn-arrow-hover.svg"],"assets/images/icons/btn-arrow-hover.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/card-project.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\arrow-orange.svg":[["arrow-orange.26aecdbd.svg","assets/images/icons/arrow-orange.svg"],"assets/images/icons/arrow-orange.svg"],"./..\\..\\assets\\images\\icons\\icon-arrow-right.svg":[["icon-arrow-right.d3dc4ae5.svg","assets/images/icons/icon-arrow-right.svg"],"assets/images/icons/icon-arrow-right.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/components/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./icon.css":"styles/components/icon.css","./button.css":"styles/components/button.css","./revenue.css":"styles/components/revenue.css","./box.css":"styles/components/box.css","./card-resources.css":"styles/components/card-resources.css","./card-space.css":"styles/components/card-space.css","./card-services.css":"styles/components/card-services.css","./card-feature.css":"styles/components/card-feature.css","./feature-detail.css":"styles/components/feature-detail.css","./card-project.css":"styles/components/card-project.css","./subscribe.css":"styles/components/subscribe.css","_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/navbar.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\menu.svg":[["menu.067fce70.svg","assets/images/icons/menu.svg"],"assets/images/icons/menu.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/banner.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\icon-play.svg":[["icon-play.c72e5821.svg","assets/images/icons/icon-play.svg"],"assets/images/icons/icon-play.svg"],"./..\\..\\assets\\images\\icons\\icon-arrow-right.svg":[["icon-arrow-right.d3dc4ae5.svg","assets/images/icons/icon-arrow-right.svg"],"assets/images/icons/icon-arrow-right.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/resources.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/space.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/properties.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\about.svg":[["about.5cf007b8.svg","assets/images/icons/about.svg"],"assets/images/icons/about.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/services.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/feature.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/feedback.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\icon-quotation.svg":[["icon-quotation.47f6ebb9.svg","assets/images/icons/icon-quotation.svg"],"assets/images/icons/icon-quotation.svg"],"./..\\..\\assets\\images\\icons\\rating-star.svg":[["rating-star.ac0c67e3.svg","assets/images/icons/rating-star.svg"],"assets/images/icons/rating-star.svg"],"./..\\..\\assets\\images\\icons\\next-left.svg":[["next-left.c6431a66.svg","assets/images/icons/next-left.svg"],"assets/images/icons/next-left.svg"],"./..\\..\\assets\\images\\icons\\next-right.svg":[["next-right.5b286f09.svg","assets/images/icons/next-right.svg"],"assets/images/icons/next-right.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/project.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\images\\icons\\email-box.svg":[["email-box.f1454b56.svg","assets/images/icons/email-box.svg"],"assets/images/icons/email-box.svg"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/sections/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./navbar.css":"styles/sections/navbar.css","./banner.css":"styles/sections/banner.css","./resources.css":"styles/sections/resources.css","./space.css":"styles/sections/space.css","./properties.css":"styles/sections/properties.css","./services.css":"styles/sections/services.css","./feature.css":"styles/sections/feature.css","./feedback.css":"styles/sections/feedback.css","./project.css":"styles/sections/project.css","_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./utilities/index.css":"styles/utilities/index.css","./bases/index.css":"styles/bases/index.css","./layouts/index.css":"styles/layouts/index.css","./components/index.css":"styles/components/index.css","./sections/index.css":"styles/sections/index.css","_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/utilities/variables.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/bases/global.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/bases/reset.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/bases/typography.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\fonts\\Poppins-Regular.ttf":[["Poppins-Regular.3d15a542.ttf","assets/fonts/Poppins-Regular.ttf"],"assets/fonts/Poppins-Regular.ttf"],"./..\\..\\assets\\fonts\\Nunito-VariableFont_wght.ttf":[["Nunito-VariableFont_wght.87bf395b.ttf","assets/fonts/Nunito-VariableFont_wght.ttf"],"assets/fonts/Nunito-VariableFont_wght.ttf"],"_css_loader":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61331" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}],"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/css-loader.js":[function(require,module,exports) {
module.exports = function loadCSSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = bundle;
    link.onerror = function (e) {
      link.onerror = link.onload = null;
      reject(e);
    };
    link.onload = function () {
      link.onerror = link.onload = null;
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(link);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("css",require("C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/css-loader.js"));b.load([]);
},{}]},{},["C:/Users/ADMIN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/styles.6145e9cd.js.map