//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用深蓝99的奇思妙想小程序',
    userInfo: {},
    shareData: {
      title: '奇思妙想',
      desc: '深蓝99的奇思妙想',
      path: '/'
    }
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
  ,
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
