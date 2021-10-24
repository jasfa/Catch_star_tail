// pages/onlinejoinroom/onlinejoinroom.js
const app = getApp()
Page({
  data: {

  },
  getuid(event){
    var id=event.detail.value
    app.globalData.uuid=id
    console.log(app.globalData.uuid)
  },
  define(){
    //加入一个对局接口
    wx.request({
      url: 'http://172.17.173.97:9000/api/game/'+app.globalData.uuid,
      data: { 
      },
      header: {
      "Content-Type": "application/x-www-form-urlencoded", //用于post
      "Authorization": wx.getStorageSync('token'),
      },
      method: 'POST',
      success: function (res) {
        console.log("res", res); 
        wx.navigateTo({
          url: '/pages/onlinejoinbattle/onlinejoinbattle',
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
