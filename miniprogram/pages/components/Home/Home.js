// pages/components/Home/Home.js
var app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    p_list: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    pic_path: app.globalData.pic_path,
    value: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch({detail}) {
      console.log("search")
      const that = this
      var dbname = 'productions'
      app.globalData.search_info.detail=detail
      app.databaseCommand(dbname, app.globalData.search_info.detail).get({
        success: function(res) {
          console.log(res.data)
          that.setData({
            p_list: res.data,
            value: detail
          })
        }
    })
    console.log("search finished")
    },
    onCancel() {
      const that = this
      var dbname = 'productions'
      var detail = ""
      app.globalData.search_info.detail=detail
      app.databaseCommand(dbname, app.globalData.search_info.detail).get({
        success: function(res) {
          console.log(res.data)
          that.setData({
            p_list: res.data,
            value: detail
          })
        }
    })
    }
  },

  options: {
    addGlobalClass: true,
  },
})
