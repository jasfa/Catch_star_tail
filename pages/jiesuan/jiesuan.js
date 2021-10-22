// pages/jiesuan/jiesuan.js
Page({
  data:{
    cnt1 : 0,
    cnt2 : 0,
  },
  onLoad: function (options) {
    console.log('_cnt1:',options.cnt1)
    console.log('_cnt2:',options.cnt2)
    this.setData({
      cnt1 : options.cnt1,
      cnt2 : options.cnt2,
    })
    /*console.log('cnt1:',cnt1)
    console.log('cnt2:',cnt2)*/
    if(options.cnt1 < options.cnt2){
      console.log('玩家一胜利！')
    } 
    else if(options.cnt1 > options.cnt2)
      console.log('玩家二胜利！')
    else
      console.log('平局了！')
  },
})
