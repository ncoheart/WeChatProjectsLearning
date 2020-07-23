// pages/searchbar/searchbar.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    clearInputEvent: function(e) {
        this.setData({
            value: ""
        })
    }
})