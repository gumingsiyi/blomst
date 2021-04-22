//index.js
const app = getApp()
Page({
  data: {
    current: "home",
    product_list: [1, 2, 3]
  },
  onLoad: function() {
    var that = this
    app.getProductions('productions').get({
      success: function(res) {
        console.log(res.data)
        that.setData({
          product_list: res.data
        })
      }
    })
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
})
