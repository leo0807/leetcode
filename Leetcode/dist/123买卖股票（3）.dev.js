"use strict";

function maxProfit(prices) {
  // write code here
  var sell1 = 0,
      sell2 = 0,
      buy1 = -Infinity,
      buy2 = -Infinity;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = prices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      //         之前买入价格 和 当天买入价格
      //         价格越高，收益越低，所以用负号
      buy1 = Math.max(buy1, -i); //         之前最大卖出价格，和在当天卖出的价格进行对比

      sell1 = Math.max(sell1, buy1 + i);
      buy2 = Math.max(buy2, sell1 - i);
      sell2 = Math.max(sell2, buy2 + i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sell2;
}