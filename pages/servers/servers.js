//plugins.js
Page({
    data: {
        servers: []
    },
    onLoad: function () {
        var that = this;
        wx.setNavigationBarTitle({
            title: '奇思妙想'
        })
        wx.request({
          url: 'http://www.yumc.pw/I/Statistics/getPluginList.html',
            success: function (res) {
                that.setData({
                    servers: res.data
                });
            }
        })
    }
})
