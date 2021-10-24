// pages/onlinecreateroomwaiting/onlinecreateroomwaiting.js
const app = getApp()
Page({
  data: {
    timer: '',
    roomid:'',
    flag:0
  },
  onLoad: function (options) {
    this.setData({
      roomid:options.roomid
    })
    console.log('roomid:',this.data.roomid)
  },
  
  listen(){
    var that=this
    wx.request({
      url: 'http://172.17.173.97:9000/api/game/' + app.globalData.uuid + '/last',
      data: {
      },
      header: { 
        "Content-Type": 'application/json',
        "Authorization": wx.getStorageSync('token'),
        // "Content-Type": "application/x-www-form-urlencoded" 用于post
      },
      method: 'GET',
      success: function (res) {
        console.log("res", res); 
        if(res.data.code == "200"){
          wx.showToast({
            title: '对局开始啦',
            icon: 'success',
            duration: 1500
          })
          /*//登录成功跳转页面
           wx.navigateTo({
              url: '/pages/onlinecreatebattle/onlinecreatebattle',
            })*/
            that.setData({
              flag:1
            })
            setTimeout(() => {
              wx.navigateTo({
                url: '/pages/onlinecreatebattle/onlinecreatebattle',
              })
            }, 3000)
        }
        else{
          wx.showToast({
            title: '人还没齐',
            icon: 'error',
            duration: 1500
          })
        }
      },
      fail: function (res) { 
        wx.showToast({
          title: '出错了，请重试',
          icon: 'error',
          duration: 1500
        })
      },
      complete: function (res) { },
    })
  },
  onShow(){
		let that = this
		this.setData({
			timer: setInterval(() => {
				that.listen() 
			}, 6000),
		})
  },
  onHide: function () {
		clearInterval(this.data.timer)
		this.setData({
			timer: null,
		})
	},
	onUnload: function () {
		clearInterval(this.data.timer)
		this.setData({
			timer: null,
		})
  },
  go(){
    //登录成功跳转页面
    wx.navigateTo({
      url: '/pages/onlinecreatebattle/onlinecreatebattle',
    })
  }
})

