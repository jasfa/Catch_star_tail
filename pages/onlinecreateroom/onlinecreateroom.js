// pages/onlinejoinroom/onlinejoinroom.js
const app = getApp()
Page({
  data:{
    id:''
  },
  fetchId(){
    this.setData({
       id:app.globalData.uuid
    })
    //console.log('id',this.data.id)
  },
  onLoad(){
    //创建一个对局的接口
    wx.request({
      url: 'http://172.17.173.97:9000/api/game',
      data: {
        "private": true
      },
      header: {
      //"Content-Type": "application/x-www-form-urlencoded" ,//用于post
      "Authorization": wx.getStorageSync('token')
      },
      method: 'POST',
      success: function (res) {
        console.log("res", res); 
        app.globalData.uuid = res.data.data.uuid 
        console.log(app.globalData.uuid)
        wx.showToast({
          title: '创建成功',
          icon: 'success',
          duration: 1500
        })
      },
      fail: function (res) { 
        console.log("res", res); 
      },
      complete: function (res) { 
      },
    }) 
  },
  enter(){
    wx.navigateTo({
      url: '/pages/onlinecreateroomwaiting/onlinecreateroomwaiting?roomid='+this.data.id,
    })
  }
})
