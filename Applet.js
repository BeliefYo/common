/**
 * GET请求封装
 */


function get(url, data = {}) {
  return request(url, data, 'GET')
}

/**
 * POST请求封装
 */
function post(url, data = {}) {
  return request(url, data, 'POST')
}

/**
 * request
 */
function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    tt.showLoading({
      title: '正在加载...'
    });
    tt.request({
      url: realm + url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          tt.hideLoading();
          if (res.data.Result == "true") {
            resolve(res.data);
          } else {
            wx.showToast({
              title: res.data.errMsg,
              icon: "none"
            })
          }
        } else {
          //请求失败
          reject("请求失败：" + res.statusCode)
        }
      },
      fail: function (err) {
        reject("服务器连接异常，请检查网络再试")
      }
    })
  });
}

module.exports = {
  request,
  get,
  post
}

get('', {}).then((res) => {}).catch((errMsg) => {
  //错误提示信息
  wx.showToast({
    title: errMsg,
    icon: "none"
  })
});