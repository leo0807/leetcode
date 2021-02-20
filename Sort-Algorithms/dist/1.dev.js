"use strict";

var newAjaxBasePromise = function newAjaxBasePromise(url) {
  return Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve();
        } else {
          reject();
        }
      } else {
        reject();
      }
    };
  });
};

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var _arguments = arguments,
        _this = this;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      fn.apply(_this, _arguments);
      timer = null;
    }, delay);
  };
}

function throttle(fn, delay) {
  var timer = null;
  return function () {
    var _arguments2 = arguments,
        _this2 = this;

    if (timer) return;
    timer = setTimeout(function () {
      fn.apply(_this2, _arguments2);
      timer = null;
    }, delay);
  };
}