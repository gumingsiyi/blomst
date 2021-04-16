//index.js
const app = getApp()

Page({
  data: {
    current: "home"
  },

  onLoad: function() {
    
  },

  getUserProfile() {
    
  },

  onGetUserInfo: function(e) {
    
  },
  
  onGetOpenid: function() {
    
  },

  onChange({ detail }) {
    this.setData({
      current: detail
    })
    console.log(this.data.current)
  },

  // 上传图片
  doUpload: function () {
  },

})
