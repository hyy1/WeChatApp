//plugins.js
Page({
    data: {
        plugins: []
    },
    onLoad: function () {
        var that = this;
        wx.setNavigationBarTitle({
            title: '喵云插件列表'
        })
        wx.request({
          url: 'http://www.yumc.pw/I/Statistics/getPluginList.htmlhttp://www.yumc.pw/I/Statistics/getPluginList.html',
            success: function (res) {
                that.setData({
                    plugins: res.data
                });
            }
        })
    }
})
