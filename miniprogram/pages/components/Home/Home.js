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
    value: "",
    show: false,
    actions: [
      {
        name:"0-100",
        min:0,
        max:100
      }, {
        name:"100-200",
        min:100,
        max:200
      }, {
        name:"200-500",
        min:200,
        max:500
      }, {
        name:"500+",
        min:500,
        max:9999
      }
    ]
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
    },
    onFilter() {
      this.setData({
        show: !this.data.show
      })
    },
    onFilterClose() {
      this.setData({
        show: false
      })
    },
    onSelect({ detail }) {
      const that = this
      console.log(detail)
      app.databaseCommand('productions', app.globalData.search_info.detail,detail.min,detail.max).get({
        success: function(res) {
          console.log(res.data)
          that.setData({
            p_list: res.data
          })
        }
      })
    },
    onFilterCancel() {
      const that = this
      app.databaseCommand('productions', app.globalData.search_info.detail).get({
        success: function(res) {
          console.log(res.data)
          that.setData({
            p_list: res.data
          })
        }
      })
      this.setData({
        show: false
      })
    }
  },

  options: {
    addGlobalClass: true,
  },
})
