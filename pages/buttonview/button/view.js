// pages/buttonview/button/view.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articles: [
            {
                title: "第十四届全国冬季运动会有望于年底举办",
                time: "2020-07-23 20:35"
            },
            {
                title: "井贤栋谈腾讯老干妈事件：合同传统确认方式有巨大信任成本",
                time: "2020-07-23 20:34"
            },
            {
                title: "比亚迪：毛利逐季变化及研发费用增加导致扣非后净利润逐季下滑",
                time: "2020-07-23 20:34"
            },
            {
                title: "Nike将大裁员，一次性支出或高达2.5亿美元",
                time: "2020-07-23 20:20"
            },
            {
                title: "余承东：不要盲目吹捧1亿像素传感器，手机拍照是系统工程",
                time: "2020-07-23 20:20"
            },
            {
                title: "第十四届全国冬季运动会有望于年底举办",
                time: "2020-07-23 20:35"
            },
            {
                title: "井贤栋谈腾讯老干妈事件：合同传统确认方式有巨大信任成本",
                time: "2020-07-23 20:34"
            },
            {
                title: "比亚迪：毛利逐季变化及研发费用增加导致扣非后净利润逐季下滑",
                time: "2020-07-23 20:34"
            },
            {
                title: "Nike将大裁员，一次性支出或高达2.5亿美元",
                time: "2020-07-23 20:20"
            },
            {
                title: "余承东：不要盲目吹捧1亿像素传感器，手机拍照是系统工程",
                time: "2020-07-23 20:20"
            },
            {
                title: "第十四届全国冬季运动会有望于年底举办",
                time: "2020-07-23 20:35"
            },
            {
                title: "井贤栋谈腾讯老干妈事件：合同传统确认方式有巨大信任成本",
                time: "2020-07-23 20:34"
            },
            {
                title: "比亚迪：毛利逐季变化及研发费用增加导致扣非后净利润逐季下滑",
                time: "2020-07-23 20:34"
            },
            {
                title: "Nike将大裁员，一次性支出或高达2.5亿美元",
                time: "2020-07-23 20:20"
            },
            {
                title: "余承东：不要盲目吹捧1亿像素传感器，手机拍照是系统工程",
                time: "2020-07-23 20:20"
            },
            {
                title: "第十四届全国冬季运动会有望于年底举办",
                time: "2020-07-23 20:35"
            },
            {
                title: "井贤栋谈腾讯老干妈事件：合同传统确认方式有巨大信任成本",
                time: "2020-07-23 20:34"
            },
            {
                title: "比亚迪：毛利逐季变化及研发费用增加导致扣非后净利润逐季下滑",
                time: "2020-07-23 20:34"
            },
            {
                title: "Nike将大裁员，一次性支出或高达2.5亿美元",
                time: "2020-07-23 20:20"
            },
            {
                title: "余承东：不要盲目吹捧1亿像素传感器，手机拍照是系统工程",
                time: "2020-07-23 20:20"
            },
            {
                title: "第十四届全国冬季运动会有望于年底举办",
                time: "2020-07-23 20:35"
            },
            {
                title: "井贤栋谈腾讯老干妈事件：合同传统确认方式有巨大信任成本",
                time: "2020-07-23 20:34"
            },
            {
                title: "比亚迪：毛利逐季变化及研发费用增加导致扣非后净利润逐季下滑",
                time: "2020-07-23 20:34"
            },
            {
                title: "Nike将大裁员，一次性支出或高达2.5亿美元",
                time: "2020-07-23 20:20"
            },
            {
                title: "余承东：不要盲目吹捧1亿像素传感器，手机拍照是系统工程",
                time: "2020-07-23 20:20"
            },
            {
                title: "第十四届全国冬季运动会有望于年底举办",
                time: "2020-07-23 20:35"
            },
            {
                title: "井贤栋谈腾讯老干妈事件：合同传统确认方式有巨大信任成本",
                time: "2020-07-23 20:34"
            },
            {
                title: "比亚迪：毛利逐季变化及研发费用增加导致扣非后净利润逐季下滑",
                time: "2020-07-23 20:34"
            },
            {
                title: "Nike将大裁员，一次性支出或高达2.5亿美元",
                time: "2020-07-23 20:20"
            },
            {
                title: "余承东：不要盲目吹捧1亿像素传感器，手机拍照是系统工程",
                time: "2020-07-23 20:20"
            }   
        ],
        newses: [],
        flag: "block"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        setTimeout(() => {
            var articles =  that.data.articles;
            var newses = [];
            for (var i = 0; i < 10; i++) {
                var news = articles[i];
                newses.push(news);
            }
            that.setData({
                newses: newses
            })
        }, (1000));
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        var that = this;
        setTimeout(() => {
            var newses = that.data.newses;
            var newsesL = newses.length;
            var articles = that.data.articles;
            var articlesL = articles.length;
            var start = newsesL;
            var end = Math.min(start + 9, articlesL - 1);
            var flag = "block";
            if(start + 9 == articlesL - 1) {
                flag = "none";
            }
            for (var i = start; i <= end; i++) {
                var news = articles[i];
                newses.push(news);
            }
            that.setData({
                newses: newses,
                flag: flag
            });
        }, 400);
        
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})