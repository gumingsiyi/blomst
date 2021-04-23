// miniprogram/pages/productPage/productPage.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic_path: app.globalData.pic_path,
    pics: Array,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    app.getOneProduction("productions", options.id).get({
      success: function(res) {
        res.data[0].name = res.data[0].name.toUpperCase()
        res.data[0].detail_desc = res.data[0].detail_desc.replace(/\\n/g, "\n\n")
        var pic_array = []
        console.log(res.data[0].pic_num)
        for(var i=1; i <= res.data[0].pic_num; i++) {
          pic_array.push(i)
        }
        console.log(pic_array)
        that.setData({
          pics: pic_array,
          production_info:res.data[0]
        })
      }
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  }
})