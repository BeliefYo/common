// https://mp.weixin.qq.com/s/HYx-Fyf9-P6nPA0S8QPdug
// https://mp.weixin.qq.com/s?__biz=MzA4ODUzNTE2Nw==&mid=2451047301&idx=1&sn=f63b39ce421318c3ac0c03a6dbf7b618&chksm=87c41a95b0b39383dbf2860c314978d009f71de8f966dc89e1ecf64886fb87b1900603c63898&mpshare=1&scene=1&srcid=&sharer_sharetime=1591508450667&sharer_shareid=05ee3f3ece4598b69476198ce50af149&key=9aa7fd50078854b720e850d4a2d6963bffd82f63419aa0bb6b072d1f443fd2ac8e61954d9b710f4cb909d480737fd689b9db50ac646b52917bed065e199554887d18715564dfdaa148df8c6a4c88d4d1&ascene=1&uin=MjU0MzczOTc0MA%3D%3D&devicetype=Windows+XP+x64&version=62090070&lang=zh_CN&exportkey=AdJpY0C1A4QQmTpjM5%2BShGw%3D&pass_ticket=iNzhDNR4LMW0mt7VsWdgd4pZtB%2BJnA%2B6XVnIPoBGbxPRUHVReUN1f3sp6Icz7A8i

// 1.邮箱
const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

// 2.手机号码
const isMobile = (s) => {
  return /^1[0-9]{10}$/.test(s)
}

// 3.电话号码
const isPhone = (s) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 4.是否url地址
const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s)
}

// 5.是否字符串
const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

// 6.是否数字
const isNumber = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

// 7.是否boolean
const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

// 8.是否函数
const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

// 9.是否为null
const isNull = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

// 10.是否undefined
const isUndefined = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

// 11.是否对象
const isObj = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

// 12.是否数组
const isArray = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

// 13.是否时间
const isDate = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

// 14.是否正则
const isRegExp = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

// 15.是否错误对象
const isError = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

// 16.是否Symbol函数
const isSymbol = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

// 17.是否Promise对象
const isPromise = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

// 18.是否Set对象
const isSet = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}
const ua = navigator.userAgent.toLowerCase();

// 19.是否是微信浏览器
const isWeiXin = () => {
  return ua.match(/microMessenger/i) == 'micromessenger'
}

// 20.是否是移动端
const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

// 21.是否是QQ浏览器
const isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}

// 22.是否是爬虫
const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}

// 23.是否ios
const isIos = () => {
  var u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
    return false
  } else if (u.indexOf('iPhone') > -1) { //苹果手机
    return true
  } else if (u.indexOf('iPad') > -1) { //iPad
    return false
  } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
    return false
  } else {
    return false
  }
}

// 24.是否为PC端
const isPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 25.去除html标签
const removeHtmltag = (str) => {
  return str.replace(/<[^>]+>/g, '')
}

// 26.获取url参数
const getQueryString = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const search = window.location.search.split('?')[1] || '';
  const r = search.match(reg) || [];
  return r[2];
}

// 27.动态引入js
const injectScript = (src) => {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}

// 28.根据url地址下载
const download = (url) => {
  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  if (isChrome || isSafari) {
    var link = document.createElement('a');
    link.href = url;
    if (link.download !== undefined) {
      var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
      link.download = fileName;
    }
    if (document.createEvent) {
      var e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download';
  }
  window.open(url, '_self');
  return true;
}

// 29.el是否包含某个class
const hasClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 30.el添加某个class
const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 31.el去除某个class
const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return
  }
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

// 32.获取滚动的坐标
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 33.滚动到顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

// 34.el是否在视口范围内
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return partiallyVisible ?
    ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

// 35.洗牌算法随机
const shuffle = (arr) => {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result;
}

// 36.拦截粘贴板
const copyTextToClipboard = (value) => {
  var textArea = document.createElement("textarea");
  textArea.style.background = 'transparent';
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}

// 37.判断类型集合
const checkStr = (str, type) => {
  switch (type) {
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date': //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    case 'number': //数字
      return /^[0-9]$/.test(str);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case 'lower': //小写
      return /^[a-z]+$/.test(str);
    case 'upper': //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
}

// 38.严格的身份证校验
const isCardID = (sId) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误')
    return false
  }
  //身份证城市
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log('你的身份证地区非法')
    return false
  }

  // 出生日期验证
  var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
    d = new Date(sBirthday)
  if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
    console.log('身份证上的出生日期非法')
    return false
  }

  // 身份证号码校验
  var sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = "10X98765432"
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.log('你输入的身份证号非法')
    return false
  }

  return true
}

// 39.随机数范围
const random = (min, max) => {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ((max + 1) - min))
  } else {
    return null;
  }
}

// 40.将阿拉伯数字翻译成中文的大写数字
const numberToChinese = (num) => {
  var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
  var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
    k = 0,
    re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
          .test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re;
    if (a[0].charAt(i) != 0)
      re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) // 加上小数部分(如果有小数部分)
  {
    re += BB[6];
    for (var i = 0; i < a[1].length; i++)
      re += AA[a[1].charAt(i)];
  }
  if (re == '一十')
    re = "十";
  if (re.match(/^一/) && re.length == 3)
    re = re.replace("一", "");
  return re;
}

// 41.将数字转换为大写金额
const changeToChinese = (Num) => {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == "number") {
    Num = new String(Num);
  };
  Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
  Num = Num.replace(/ /g, "") //替换tomoney()中的空格
  Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
  if (isNaN(Num)) { //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return "";
  };
  //字符处理完毕后开始转换，采用前后两部分分别转换
  var part = String(Num).split(".");
  var newchar = "";
  //小数点前进行转化
  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return "";
      //若数量超过拾亿单位，提示
    }
    var tmpnewchar = ""
    var perchar = part[0].charAt(i);
    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;
      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;
      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;
      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;
      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;
      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;
      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;
      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;
      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;
      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;
      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }
    var newchar = tmpnewchar + newchar;
  }
  //小数点之后进行转化
  if (Num.indexOf(".") != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2)
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = ""
      perchar = part[1].charAt(i)
      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;
        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;
        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;
        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;
        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;
        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;
        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;
        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;
        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;
        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }
      if (i == 0) tmpnewchar = tmpnewchar + "角";
      if (i == 1) tmpnewchar = tmpnewchar + "分";
      newchar = newchar + tmpnewchar;
    }
  }
  //替换所有无用汉字
  while (newchar.search("零零") != -1)
    newchar = newchar.replace("零零", "零");
  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "元");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");
  if (newchar.charAt(newchar.length - 1) == "元") {
    newchar = newchar + "整"
  }
  return newchar;
}

// 42.判断一个元素是否在数组中
const contains = (arr, val) => {
  return arr.indexOf(val) != -1 ? true : false;
}

// 43.数组排序，{type} 1：从小到大 2：从大到小 3：随机
const sort = (arr, type = 1) => {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  })
}

// 44.去重
const unique = (arr) => {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
      r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
}

// 45.求两个集合的并集
const union = (a, b) => {
  var newArr = a.concat(b);
  return this.unique(newArr);
}

// 46.求两个集合的交集
const intersect = (a, b) => {
  var _this = this;
  a = this.unique(a);
  return this.map(a, function (o) {
    return _this.contains(b, o) ? o : null;
  });
}

// 47.删除其中一个元素
const remove = (arr, ele) => {
  var index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// 48.将类数组转换为数组
const formArray = (ary) => {
  var arr = [];
  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  };
  return arr;
}

// 49.最大值
const max = (arr) => {
  return Math.max.apply(null, arr);
}

// 50.最小值
const min = (arr) => {
  return Math.min.apply(null, arr);
}

// 51.求和
const sum = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre + cur
  })
}

// 52.平均值
const average = (arr) => {
  return this.sum(arr) / arr.length
}

// 53.去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
const trim = (str, type) => {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

// 54.字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
const changeCase = (str, type) => {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}

// 55.检测密码强度
const checkPwd = (str) => {
  var Lv = 0;
  if (str.length < 6) {
    return Lv
  }
  if (/[0-9]/.test(str)) {
    Lv++
  }
  if (/[a-z]/.test(str)) {
    Lv++
  }
  if (/[A-Z]/.test(str)) {
    Lv++
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++
  }
  return Lv;
}

// 56.函数节流器
const debouncer = (fn, time, interval = 200) => {
  if (time - (window.debounceTimestamp || 0) > interval) {
    fn && fn();
    window.debounceTimestamp = time;
  }
}

// 57.在字符串中插入新字符串
const insertStr = (soure, index, newStr) => {
  var str = soure.slice(0, index) + newStr + soure.slice(index);
  return str;
}

// 58.判断两个对象是否键值相同
const isObjectEqual = (a, b) => {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}

// 59.16进制颜色转RGBRGBA字符串
const colorToRGB = (val, opa) => {

  var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
  var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

  if (!pattern.test(val)) { //如果值不符合规则返回空字符
    return '';
  }

  var v = val.replace(/#/, ''); //如果有#号先去除#号
  var rgbArr = [];
  var rgbStr = '';

  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }

  rgbStr = rgbArr.join();
  rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
  return rgbStr;
}

// 60.追加url参数
const appendQuery = (url, key, value) => {
  var options = key;
  if (typeof options == 'string') {
    options = {};
    options[key] = value;
  }
  options = $.param(options);
  if (url.includes('?')) {
    url += '&' + options
  } else {
    url += '?' + options
  }
  return url;
}

// 61.匹配正整数
let isPositiveNum = val => {
  return /^[1-9]d*$/.test(val);
};

// 62.匹配负整数
let isNegativeNum = val => {
  return /^-[1-9]d*$/.test(val);
};

// 63.匹配整数
let isInteger = val => {
  return /^(-|\+)?\d+$/.test(val);
};

// 64.匹配非负浮点数
let isNotNegativeFloatNum = val => {
  return /^\d+(\.\d+)?$/.test(val);
};

// 65.匹配由 26 个英文字母组成的字符串
let isAZaz = val => {
  return /^[A-Za-z]+$/.test(val);
};

// 66.匹配由 26 个英文字母的大写组成的字符串
let isAZ = val => {
  return /^[A-Z]+$/.test(val);
};

// 67.匹配由 26 个英文字母的小写组成的字符串
let isaz = val => {
  return /^[a-z]+$/.test(val);
};

// 68.匹配电子邮件地址
let isEmailAddress = val => {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
};

// 69.返回数组中的最大值
let arrayMax = arr => Math.max(...arr);

// 70.返回数组中的最小值
let arrayMin = arr => Math.min(...arr);

// 71.将数组块划分为指定大小的较小数组
let chunk = (arr, size) => Array.from({
  length: Math.ceil(arr.length / size)
}, (v, i) => arr.slice(i * size, i * size + size));

// 72.从数组中移除 falsey 值
let compact = arr => arr.filter(Boolean);
let arr = [false, null, 0, "", undefined, NaN, 1]

// 73.计算数组中值的出现次数
let countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

// 74.深拼合数组
let deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));

// 75.返回两个数组之间的差异
let difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

// 76.返回数组的所有不同值
let distinctValuesOfArray = arr => [...new Set(arr)];

// 77.返回数组中的每个第 n 个元素
let everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);

// 78.筛选出数组中的非唯一值
let filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// 79.拼合数组
let flatten = arr => arr.reduce((a, v) => a.concat(v), []);

// 80.将数组向上拼合到指定深度
let falttenDepth = (arr, depth = 1) => depth != 1 ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), []) : arr.reduce((a, v) => a.concat(v), [])

// 81.根据给定函数对数组元素进行分组
let groupBy = (arr, func) => arr.map(typeof func === 'function' ? func : val => val[func]).reduce((acc, val, i) => {
  acc[val] = (acc[val] || []).concat(arr[i]);
  return acc;
}, {})

// 82.返回列表的头
let head = arr => arr[0];

// 83.返回除最后一个数组之外的所有元素
let initial = arr => arr.slice(0, -1);

// 84.初始化并填充具有指定值的数组
let initializeArrayWithRange = (end, start = 0) => Array.from({
  length: end - start
}).map((v, i) => i + start);

// 85.初始化并填充具有指定值的数组
let initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);

// 86.返回两个数组中存在的元素的列表
let intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

// 87.返回数组中的最后一个元素
let last = arr => arr[arr.length - 1];

// 88.使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成
let mapObject = (arr, fn) => (a => (a = [arr, arr.map(fn)], a[0].reduce((acc, val, ind) => (acc[val] = a[1][ind], acc), {})))();

// 89.nthElement: 返回数组的第 n 个元素
let nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

// 90.从对象中选取对应于给定键的键值对
let pick = (obj, arr) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

// 91.对原始数组进行变异, 以筛选出指定的值
let pull = (arr, ...args) => {
  let pulled = arr.filter((v, i) => !args.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};

// 92.从数组中移除给定函数返回false的元素
let remove = (arr, func) => Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
  arr.splice(arr.indexOf(val), 1);
  return acc.concat(val);
}, []) : [];

// 93.返回数组中的随机元素
let sample = arr => arr[Math.floor(Math.random() * arr.length)];

// 94.随机数组值的顺序
let shuffle = arr => arr.sort(() => Math.random() - 0.5);

// 95.返回两个数组中都显示的元素的数组
let similarity = (arr, values) => arr.filter(v => values.includes(v));

// 96.返回两个数组之间的对称差
let symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

// 97.返回数组中的所有元素, 除第一个
let tail = arr => arr.length > 1 ? arr.slice(1) : arr;

// 98.返回一个数组, 其中 n 个元素从开始处移除
let take = (arr, n = 1) => arr.slice(0, n);

// 99.返回一个数组, 其中 n 个元素从末尾移除
let takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

// 100.返回在两个数组中的任意一个中存在的每个元素
let union = (a, b) => Array.from(new Set([...a, ...b]));

// 101.筛选出数组中具有指定值之一的元素
let without = (arr, ...args) => arr.filter(v => !args.includes(v));

// 102.创建基于原始数组中的位置分组的元素数组
let zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({
    length: maxLength
  }).map((_, i) => {
    return Array.from({
      length: arrays.length
    }, (_, k) => arrays[k][i]);
  })
};

// 103.从给定数组中移除一项
let removeArrayItem = function (arr, item) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] == item) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};

// 104.检查给定数组中是否包含某项
let contains = function (arr, item) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

// 105.验证不能包含字母
export const isNoWord = value => /^[^A-Za-z]*$/g.test(value);

// 106.验证中文和数字
export const isCHNAndEN = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);

// 107.验证邮政编码(中国)
export const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);

// 108.验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
export const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);

// 109.验证16进制颜色
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);

// 110.验证火车车次
export const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);

// 111.验证手机机身码(IMEI)
export const isIMEI = value => /^\d{15,17}$/g.test(value);

// 112.验证必须带端口号的网址(或ip)
export const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);

// 113.验证网址(支持端口和"?+参数"和"#+参数)
export const isRightWebsite = value => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);

// 114.验证统一社会信用代码
export const isCreditCode = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);

// 115.验证股票代码(A股)
export const isAShare = value => /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(value);

//116.验证图片链接地址（图片格式可按需增删）
export const isImageUrl = value => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);

// 117.验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value);

// 118.验证中文姓名
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);

// 119.验证英文姓名
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);

// 120.验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
export const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);

// 121.验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);

// 122.验证email(邮箱)
export const isEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);

// 123.验证身份证号(1代,15位数字).
export const isIDCardOld = value => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);

// 124.验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
export const isIDCardNew = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);

// 125.验证身份证号, 支持1/2代(15位/18位数字)
export const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);

// 126.验证护照（包含香港、澳门）
export const isPassport = value => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);

// 127.验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
export const isWebAccount = value => /^[a-zA-Z]\w{4,15}$/g.test(value);

// 128.验证中文/汉字
export const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

// 129.验证小数
export const isDecimal = value => /^\d+\.\d+$/g.test(value);

// 130.验证数字
export const isNumber = value => /^\d{1,}$/g.test(value);

// 131.验证qq号格式
export const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value);

// 132.验证数字和字母组成
export const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value);

// 133.验证英文字母
export const isEnglish = value => /^[a-zA-Z]+$/g.test(value);

// 134.验证大写英文字母
export const isCapital = value => /^[A-Z]+$/g.test(value);

// 135.验证小写英文字母
export const isLowercase = value => /^[a-z]+$/g.test(value);

// 140.返回当前url
export const currentURL = () => window.location.href;

// 141.获取url参数（第一种）
export function getUrlParam(name, origin = null) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin == null) {
    r = window.location.search.substr(1).match(reg);
  } else {
    r = origin.substr(1).match(reg);
  }
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

// 142.获取url参数（第二种）
export function getUrlParams(name, origin = null) {
  let url = location.href;
  let temp1 = url.split('?');
  let pram = temp1[1];
  let keyValue = pram.split('&');
  let obj = {};
  for (let i = 0; i < keyValue.length; i++) {
    let item = keyValue[i].split('=');
    let key = item[0];
    let value = item[1];
    obj[key] = value;
  }
  return obj[name];
}

// 143.修改url中的参数
export function replaceParamVal(paramName, replaceWith) {
  var oUrl = location.href.toString();
  var re = eval('/(' + paramName + '=)([^&]*)/gi');
  location.href = oUrl.replace(re, paramName + '=' + replaceWith);
  return location.href;
}

// 144.删除url中指定的参数
export function funcUrlDel(name) {
  var loca = location;
  var baseUrl = loca.origin + loca.pathname + "?";
  var query = loca.search.substr(1);
  if (query.indexOf(name) > -1) {
    var obj = {};
    var arr = query.split("&");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
    return url
  }
}

// 145.获取窗口可视范围的高度
export function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  } else {
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
}

// 146.获取窗口可视范围宽度
export function getPageViewWidth() {
  let d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}

// 147.获取窗口宽度
export function getPageWidth() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

// 148.获取窗口尺寸
export function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}

// 149.获取滚动条距顶部高度
export function getPageScrollTop() {
  let a = document;
  return a.documentElement.scrollTop || a.body.scrollTop;
}

// 150.获取滚动条距左边的高度
export function getPageScrollLeft() {
  let a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}

// 151.开启全屏
export function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}

// 152.关闭全屏
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

// 153.返回当前滚动条位置
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 154.滚动到指定元素区域
export const smoothScroll = element => {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
};

// 155.平滑滚动到页面顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// 156.http跳转https
export const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

// 157.检查页面底部是否可见
export const bottomVisible = () => {
  return document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};

// 158.打开一个窗口
export function openWindow(url, windowName, width, height) {
  var x = parseInt(screen.width / 2.0) - width / 2.0;
  var y = parseInt(screen.height / 2.0) - height / 2.0;
  var isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
    var p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width;
    p = p + ",height=";
    p = p + height;
    p = p + ",left=";
    p = p + x;
    p = p + ",top=";
    p = p + y;
    window.open(url, windowName, p);
  } else {
    var win = window.open(
      url,
      "ZyiisPopup",
      "top=" +
      y +
      ",left=" +
      x +
      ",scrollbars=" +
      scrollbars +
      ",dialog=yes,modal=yes,width=" +
      width +
      ",height=" +
      height +
      ",resizable=no"
    );
    eval("try { win.resizeTo(width, height); } catch(e) { }");
    win.focus();
  }
}

// 159.自适应页面（rem）
export function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600 ?
    (target.style.fontSize = "80px") :
    (target.style.fontSize = target.clientWidth / width * 100 + "px");
}

// 160.金钱格式化，三位加逗号
export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// 161.截取字符串并加身略号
export function subText(str, length) {
  if (str.length === 0) {
    return '';
  }
  if (str.length > length) {
    return str.substr(0, length) + "...";
  } else {
    return str;
  }
}

// 162.B转换到KB,MB,GB并保留两位小数
export function formatFileSize(fileSize) {
  let temp;
  if (fileSize < 1024) {
    return fileSize + 'B';
  } else if (fileSize < (1024 * 1024)) {
    temp = fileSize / 1024;
    temp = temp.toFixed(2);
    return temp + 'KB';
  } else if (fileSize < (1024 * 1024 * 1024)) {
    temp = fileSize / (1024 * 1024);
    temp = temp.toFixed(2);
    return temp + 'MB';
  } else {
    temp = fileSize / (1024 * 1024 * 1024);
    temp = temp.toFixed(2);
    return temp + 'GB';
  }
}