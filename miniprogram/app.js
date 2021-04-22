//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    this.globalData = {
      pic_path : "cloud://xycloud-8gfk4lk7057bd117.7879-xycloud-8gfk4lk7057bd117-1305591493/pic/",
      search_info: {
        detail: "",
        max_price: 9999,
        min_price:0
      }
    }
  },
  getProductions: function(dbname, detail="",min_price=0, max_price=9999) {
    const db = wx.cloud.database()
    const _ = db.command
    detail = detail.replace(" ","")
    console.log(detail)
    return db.collection(dbname).where(_.or([
      {
        name: new RegExp(detail, "i")
      },
      {
        desc: new RegExp(detail, "i")
      }
    ]).and([{
      price: _.gt(min_price).lt(max_price)
    }]))
  },
  getOneProduction: function(dbname, id) {
    const db = wx.cloud.database()
    return db.collection(dbname).where({
      id:parseInt(id)
    })
  }
})
