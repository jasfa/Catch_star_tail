// pages/onlineselect/onlineselect.js
Page({
  go_create(){
    wx.navigateTo({
      url: '/pages/onlinecreateroom/onlinecreateroom',
    })
  },
  go_join(){
    wx.navigateTo({
      url: '/pages/onlinejoinroom/onlinejoinroom',
    })
  }
})