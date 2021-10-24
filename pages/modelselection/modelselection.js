// pages/modelselection/modelselection.js
Page({
  govs(){
    console.log("点击了按钮")
    wx.navigateTo({
      url: '/pages/vs/vs',
    })
    console.log("跳转成功")
  },
  go_renren(){
    console.log("点击了go_renren")
    wx.navigateTo({
      url: '/pages/renren/renren',
    })
    console.log("跳转成功")
  },
  go_ai(){
    console.log("点击了go_ai")
    wx.navigateTo({
      url: '/pages/ai/ai',
    })
    console.log("跳转成功")
  },
  go_online(){
    console.log("点击了go_online")
    wx.navigateTo({
      url: '/pages/onlinelogin/onlinelogin',
    })
    console.log("跳转成功")
  },
  rule(){
    wx.showModal({
      title: '规则',
      content: '1、由一名玩家开始，从<卡组>随机抽取翻开一张扑克牌，置于<放置区>上。\r\n2、切换到另外一名玩家操作，执行1操作，此时插入判定:若翻开的花色与<放置区>原顶部扑克牌花色相同，需将放置区的所有牌收到自己<手牌>内（即”吃“牌）。\r\n3、在执行1操作前，若玩家<手牌>非空，则：玩家可选择放弃翻牌，同时需要从<手牌>中选择一张牌置于<放置区>顶部作为替代，判定同2操作。\r\n4、若<卡组>非空，则重复2操作；\r\n5、当<卡组>为空，且插入判定结算完成，游戏终止，进行结算判定：比较两玩家<手牌>卡牌数量，剩余卡片数量小者获胜；数量相同则判断为平局。',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  hisbattle(){
    wx.showToast({
      title: '该功能待开发',
      icon: 'error',
      duration: 2000
    })
  },
  setting(){
    wx.showToast({
      title: '该功能待开发',
      icon: 'error',
      duration: 2000
    })
  }
})
