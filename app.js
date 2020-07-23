//app.js
App({
  onLaunch: function(options) {
    console.log(options);
    console.log("onLauch");
  },

  onShow: function(options) {
    console.log("===============");
    console.log(options);
    console.log("onShow");
  },

  onHide: function() {
    console.log("onHide");
    // console.log(username);
  },

  onError: function(msg) {
    console.log(msg);
  },

  globalData: {
    userInfo: null
  }
})