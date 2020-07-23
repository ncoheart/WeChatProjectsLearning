// pages/weibo/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        weibos:[]
    },

    addWeibo: function (e) {
        wx.navigateTo({
          url: '/pages/weibo/add/add',
        })
    }
})