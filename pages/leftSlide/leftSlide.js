// pages/leftSlide/leftSlide.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var systemInfo = wx.getSystemInfoSync();
        var width = systemInfo.windowWidth;

        this.setData({
            width: width
        })
    },

    onTouchStart: function(e) {
        var startPageX = e.touches[0].pageX;
        this.setData({
            startPageX: startPageX
        });
    },

    onChange: function(e){
        var x = e.detail.x;
        console.log(x);
        
        this.setData({
            x: x
        });
    },

    onTouchEnd: function(e) {
        var endPageX = e.changedTouches[0].pageX;
        var statPageX = this.data.startPageX;
        var left = this.data.x;
        if (statPageX > endPageX) {
            // 左移
            if(left < -20) {
                left = -100;
            }else {
                left = 0;
            }
        }else{
            // 右移
            if(left > -80) {
                left = 0;
            }else {
                left = -100;
            }
        }

        this.setData({
            left: left
        });
    },

    
})