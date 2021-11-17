/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  const arr4 = queryIP.split('.');
  const arr6 = queryIP.split(':');

  if (arr4.length === 4) {
    if (arr4.every(num => num.match(/^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/g))) {
      return "IPv4";
    }
  } else if (arr6.length === 8) {
    if (arr6.every(item => item.match(/^[0-9a-fA-F]{1,4}$/g))) {
      return "IPv6";
    }
  }
  return "Neither";
};

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  let neither = 'Neither';
  if (IP.split('.').length === 4) {
    return validateIPv4(IP);
  }
  if (IP.split(':').length === 8) {
    return validateIPv6(IP);
  }
  return neither;
};

function validateIPv4(IP) {
  const nums = IP.split(/\./);
  const Neither = 'Neither'
  for (const num of nums) {
    if (num.length === 0 || num.length > 3) {
      return Neither
    }
    if (num.charAt(0) === '0' && num.length > 1) {
      return Neither;
    }
    if (!/^\d+$/.test(num)) {
      return Neither;
    }
    if (parseInt(num, 10) > 255) {
      return Neither;
    }
  }
  return "IPv4";
}

function validateIPv6(IP) {
  const nums = IP.split(':');
  const Neither = 'Neither';
  const hexdigits = "0123456789abcdefABCDEF";
  for (const num of nums) {
    if (num.length === 0 || num.length > 4) {
      return Neither;
    }
    for (let c of num) {
      if (hexdigits.indexOf(c) === -1) {
        return Neither
      }
    }
  }
  return "IPv6";
}

validIPAddress("172.16.254.1")

作者：luckyxutao
链接：https://leetcode-cn.com/problems/validate-ip-address/solution/468-yan-zheng-ipdi-zhi-by-luckyxutao-7ni3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。