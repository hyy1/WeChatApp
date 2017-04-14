//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用喵云MC后台管理小程序',
    userInfo: {},
    shareData: {
      title: '喵云后台管理',
      desc: '重新定义MC服务器管理模式',
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
