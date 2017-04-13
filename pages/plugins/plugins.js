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
            url: 'https://y.yumc.pw/I/Statistics/getPluginList.html',
            success: function (res) {
                that.setData({
                    plugins: res.data
                });
            }
        })
    }
})
