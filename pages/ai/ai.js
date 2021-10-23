var turn = 1
var hosted1 = 0
var hosted2 = 0
Page({
  data:{
    // 0-12 红桃hearts 13-25 方片square 26-38 黑桃spade 39-51 草花grass
    place_area : [],
    player1_area_hearts : [],
    player1_area_square : [],
    player1_area_spade : [],
    player1_area_grass : [],
    player2_area_hearts : [],
    player2_area_square : [],
    player2_area_spade : [],
    player2_area_grass : [],
    cnt_stack_area :0,
    cnt_place_area : 0,
    cnt1_player1_area_hearts : 0,
    cnt1_player1_area_square : 0,
    cnt1_player1_area_spade : 0,
    cnt1_player1_area_grass : 0,
    cnt2_player2_area_hearts : 0,
    cnt2_player2_area_square : 0,
    cnt2_player2_area_spade : 0,
    cnt2_player2_area_grass : 0,
    stack_area : [],
    vis: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    stacktop: '',
    placetop: 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player1_area_hearts_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player1_area_square_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player1_area_spade_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player1_area_grass_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player2_area_hearts_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player2_area_square_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player2_area_spade_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754',
    player2_area_grass_top : 'https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754'
  },
  onLoad(){
    this.init_stack()
    console.log(this.data.stack_area)
     turn =  Math.floor(Math.random() * 2 + 1)
    console.log(turn)
    this.host_switch1()
  },
  //随机生成卡组
  init_stack(){
    var stack_area0 = this.data.stack_area
    var vis0 =this.data.vis
    var len = vis0.length
    for(var i = 0 ; i < len ; i++ )
      vis0[i] = 0
    for(var i = 0 ; i < len ; i++){
      var tmp = Math.floor( Math.random() * 51 )
      for(var j = 0 ; j < len ; j++){
        if(vis0[tmp] === 1)
          tmp++
        else
          break
      }
      stack_area0.push(tmp)
      vis0[tmp] = 1
    }
    this.setData({
      stack_area: stack_area0
    })
    this.setback_stack()
    this.update_place()
    this.update_player1()
    this.update_player2()
  },
    //获取图片地址
    fetchImgAddr(i){
      //console.log("i",i)
      //红心
      if(i==0){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/A%E7%BA%A2%E5%BF%83.jpg?sign=d75c19b81682ef0186532bbbdc7acda1&t=1634824492"
      }
      else if(i==1){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/2%E7%BA%A2%E5%BF%83.jpg?sign=e42124820908bc9bdf68584902abeddf&t=1634814748"
      }
      else if(i==2){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/3%E7%BA%A2%E5%BF%83.jpg?sign=79a9f5c3435382669f6e0b5c80768a1e&t=1634814763"
      }
      else if(i==3){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/4%E7%BA%A2%E5%BF%83.jpg?sign=07d4edecccdf9a7f820f7b975ec14f01&t=1634814779"
      }
      else if(i==4){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/5%E7%BA%A2%E5%BF%83.jpg?sign=0251295025e7e053134a77de8cad9f82&t=1634814793"
      }
      else if(i==5){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/6%E7%BA%A2%E5%BF%83.jpg?sign=6ee39f1a1a1751333a9d31ee3bf5e0f4&t=1634814804"
      }
      else if(i==6){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/7%E7%BA%A2%E5%BF%83.jpg?sign=4be3ac2538b20c29220618bff65e7547&t=1634814814"
      }
      else if(i==7){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/8%E7%BA%A2%E5%BF%83.jpg?sign=bb756edbe974275629acafd4917f88ff&t=1634814823"
      }
      else if(i==8){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/9%E7%BA%A2%E5%BF%83.jpg?sign=2fe796c382113f1274495af50d71bb66&t=1634814831"
      }
      else if(i==9){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/10%E7%BA%A2%E5%BF%83.jpg?sign=efb9b25295fc8f0fc1a33db82f5febb6&t=1634814851"
      }
      else if(i==10){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/11%E7%BA%A2%E5%BF%83.jpg?sign=b1a688c30862b65c35c139fe54537926&t=1634814862"
      }
      else if(i==11){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/12%E7%BA%A2%E5%BF%83.jpg?sign=8c759a38c185b8758ca2968aec19e086&t=1634814871"
      }
      else if(i==12){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E7%BA%A2%E5%BF%83/13%E7%BA%A2%E5%BF%83.jpg?sign=54ac0c0a1c3f22810827e57f35740ba1&t=1634814878"
      }
      // 方块
      else if(i==13){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/A%E6%96%B9%E5%9D%97.jpg?sign=7a417cf0389174f8a6ecdaa87a5ac8e9&t=1634806433"
      }
      else if(i==14){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/2%E6%96%B9%E5%9D%97.jpg?sign=d32c68fbffd42aa49675a13a72b9be2a&t=1634806526"
      }
      else if(i==15){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/3%E6%96%B9%E5%9D%97.jpg?sign=4e645c6d71d1494e167b0c72ba44dc01&t=1634806546"
      }
      else if(i==16){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/4%E6%96%B9%E5%9D%97.jpg?sign=24fcca12ed471f3b36a19aafcfafd9e8&t=1634806569"
      }
      else if(i==17){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/5%E6%96%B9%E5%9D%97.jpg?sign=56e558b041d0d605ada9f8aa0a854805&t=1634806949"
      }
      else if(i==18){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/6%E6%96%B9%E5%9D%97.jpg?sign=cb9733a28da2d1cbc714c8d2cc542264&t=1634806960"
      }
      else if(i==19){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/7%E6%96%B9%E5%9D%97.jpg?sign=c08dca668fd7f0fe2f74c0e773b5dd0b&t=1634806970"
      }
      else if(i==20){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/7%E6%96%B9%E5%9D%97.jpg?sign=c08dca668fd7f0fe2f74c0e773b5dd0b&t=1634806970"
      }
      else if(i==21){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/9%E6%96%B9%E5%9D%97.jpg?sign=583176d4a78179e12bbaea280ccf5b61&t=1634806998"
      }
      else if(i==22){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/10%E6%96%B9%E5%9D%97.jpg?sign=d3bb0bf97febed279001285afb66b7b9&t=1634807008"
      }
      else if(i==23){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/11%E6%96%B9%E5%9D%97.jpg?sign=1bef1d32977f7e0af444cecde3db7f1c&t=1634807017"
      }
      else if(i==24){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/12%E6%96%B9%E5%9D%97.jpg?sign=c9a274b7e370fdf7f71507013f171b2c&t=1634807028"
      }
      else if(i==25){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%96%B9%E5%9D%97/13%E6%96%B9%E5%9D%97.jpg?sign=c43397fffd7892cabc390fc6bcb73b59&t=1634810502"
      }
      //黑桃
      else if(i==26){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/A%E9%BB%91%E6%A1%83.jpg?sign=6aca7ce3a4d8d39fdded203cfc231d02&t=1634814903"
      }
      else if(i==27){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/2%E9%BB%91%E6%A1%83.jpg?sign=bfb47a9abca11127a94c0cc46ed322be&t=1634814915"
      }
      else if(i==28){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/3%E9%BB%91%E6%A1%83.jpg?sign=22eca9ef83876f746f344b63669da316&t=1634814925"
      }
      else if(i==29){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/4%E9%BB%91%E6%A1%83.jpg?sign=4417f112b720720db5038e8c457e8f6b&t=1634814934"
      }
      else if(i==30){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/5%E9%BB%91%E6%A1%83.jpg?sign=ce61aeb0f69f94400843dc2a694afb98&t=1634814941"
      }
      else if(i==31){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/6%E9%BB%91%E6%A1%83.jpg?sign=ed39c0fd41c1f46da93089fc3e10cd9e&t=1634814950"
      }
      else if(i==32){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/7%E9%BB%91%E6%A1%83.jpg?sign=009bbb82260a8fb7e9730423cb99b4f6&t=1634814957"
      }
      else if(i==33){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/8%E9%BB%91%E6%A1%83.jpg?sign=9d3f1227f99d2c9f968a084f821b8277&t=1634814964"
      }
      else if(i==34){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/9%E9%BB%91%E6%A1%83.jpg?sign=8b0043fea51ef5d3639d9fe89ddcfb43&t=1634814973"
      }
      else if(i==35){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/10%E9%BB%91%E6%A1%83.jpg?sign=9d2915c7e05a557b2b87965e76498ad5&t=1634814984"
      }
      else if(i==36){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/11%E9%BB%91%E6%A1%83.jpg?sign=db86fa685d3eb225b51d035eff75bd17&t=1634814992"
      }
      else if(i==37){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/12%E9%BB%91%E6%A1%83.jpg?sign=4a40694c90d18e39f384ae8f1a8288ca&t=1634814999"
      }
      else if(i==38){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E9%BB%91%E6%A1%83/13%E9%BB%91%E6%A1%83.jpg?sign=4aa9aff0fe60c0d5ee9d7d72731817ca&t=1634815008"
      }
      //梅花
      else if(i==39){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/A%E6%A2%85%E8%8A%B1.jpg?sign=5ed3a82d670bc588896c4d4e05f04cef&t=1634815034"
      }
      else if(i==40){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/2%E6%A2%85%E8%8A%B1.jpg?sign=daa0feba68fa1ceeeeed7d1105023577&t=1634815044"
      }
      else if(i==41){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/3%E6%A2%85%E8%8A%B1.jpg?sign=75b3614bf497c8d2db713fa2e41c90d2&t=1634815053"
      }
      else if(i==42){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/4%E6%A2%85%E8%8A%B1.jpg?sign=6d0dff0df6facab4b5f6a122138db4a3&t=1634815063"
      }
      else if(i==43){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/5%E6%A2%85%E8%8A%B1.jpg?sign=8a0b212092320da9b2b63be35e2737c8&t=1634815072"
      }
      else if(i==44){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/6%E6%A2%85%E8%8A%B1.jpg?sign=e05bcfdd701becac34706c63904f0058&t=1634815081"
      }
      else if(i==45){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/7%E6%A2%85%E8%8A%B1.jpg?sign=b639a54f6ffe0a36ddb73383364f9b75&t=1634815090"
      }
      else if(i==46){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/8%E6%A2%85%E8%8A%B1.jpg?sign=8df6f095f40725905bc64a116c377da8&t=1634815099"
      }
      else if(i==47){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/9%E6%A2%85%E8%8A%B1.jpg?sign=e2408b27164c515b0550b21e8252731a&t=1634815110"
      }
      else if(i==48){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/10%E6%A2%85%E8%8A%B1.jpg?sign=b8d486fe0edbe6970d19dc3f63f86186&t=1634815119"
      }
      else if(i==49){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/11%E6%A2%85%E8%8A%B1.jpg?sign=7632bb623a6476f2da2d7addd127055d&t=1634815128"
      }
      else if(i==50){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/12%E6%A2%85%E8%8A%B1.jpg?sign=1b1e95727cbb51a88ec42c1847b834e4&t=1634815136"
      }
      else if(i==51){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E6%A2%85%E8%8A%B1/13%E6%A2%85%E8%8A%B1.jpg?sign=d97c522019c91bc51fcf76e8bff362c1&t=1634815145"
      }
      else if(i==52){
        return "https://636c-cloud1-8gizt3c91a9e2cee-1307872384.tcb.qcloud.la/%E6%89%91%E5%85%8B/%E8%83%8C%E9%9D%A2.jpg?sign=82438d63ca2418e7bb64cb0b13ca7bd7&t=1634828754"
      }
    },
  //玩家一托管
  host_switch1(){
    if(hosted1 === 1)
      hosted1 = 0
    else  
      hosted1 = 1
    //console.log(turn,hosted1)
    if(turn === 1 && hosted1 === 1)
      this.host1();
  },
  host1(){
    this.ai_Host1()
    // var t = this.match_player1_hearts()
    // //console.log(t)
    // if(t === -1)
    //   t = this.match_player1_square()
    // if(t === -1)
    //   t = this.match_player1_spade()
    // if(t === -1)
    //   t = this.match_player1_grass()
    // if(t === -1)
    //   t = this.match_stack()
  },
  //玩家二托管
  host_switch2(){
    if(hosted2 === 1)
      hosted2 = 0
    else  
      hosted2 = 1
    if(turn === 2 && hosted2 === 1)
      this.host2();
  },
  host2(){
    this.ai_Host2()
    // var t = this.match_player2_hearts()
    // if(t === -1)
    //   t = this.match_player2_square()
    // if(t === -1)
    //   t = this.match_player2_spade()
    // if(t === -1)
    //   t = this.match_player2_grass()
    // if(t === -1)
    //   t = this.match_stack()
  },
  // 玩家一出牌
  match_player1_hearts(){
    if(turn === 2){
      wx.showToast({
        title: '玩家2时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player1_area_hearts0 = this.data.player1_area_hearts
    if(player1_area_hearts0.length <= 0)
      return -1
    turn = 2
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player1_area_hearts0[0] / 13)
    //console.log('len:',place_area0.length)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all1()
      if(hosted2 === 1)
        this.host2()
      return 1 
    }
    place_area0.unshift(player1_area_hearts0[0]);
    player1_area_hearts0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player1_area_hearts:player1_area_hearts0
    })
    this.update_place()
    this.update_player1()
    if(hosted2 === 1)
      this.host2()
    return 1
  },
  match_player1_square(){
    if(turn === 2){
      wx.showToast({
        title: '玩家2时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player1_area_square0 = this.data.player1_area_square
    if(player1_area_square0.length <= 0)
      return -1
    turn = 2
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player1_area_square0[0] / 13)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all1()
      if(hosted2 === 1)
        this.host2()
      return 1 
    }
    place_area0.unshift(player1_area_square0[0]);
    player1_area_square0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player1_area_square:player1_area_square0
    })
    this.update_place()
    this.update_player1()
    if(hosted2 === 1)
      this.host2()
    return 1
  },
  match_player1_spade(){
    if(turn === 2){
      wx.showToast({
        title: '玩家2时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player1_area_spade0 = this.data.player1_area_spade
    if(player1_area_spade0.length <= 0)
      return -1
    turn = 2
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player1_area_spade0[0] / 13)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all1()
      if(hosted2 === 1)
        this.host2()
      return 1 
    }
    place_area0.unshift(player1_area_spade0[0]);
    player1_area_spade0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player1_area_spade:player1_area_spade0
    })
    this.update_place()
    this.update_player1()
    if(hosted2 === 1)
      this.host2()
    return 1
  },
  match_player1_grass(){
    if(turn === 2){
      wx.showToast({
        title: '玩家2时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player1_area_grass0 = this.data.player1_area_grass
    if(player1_area_grass0.length <= 0)
      return -1
    turn = 2
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player1_area_grass0[0] / 13)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all1()
      if(hosted2 === 1)
        this.host2()
      return 1 
    }
    place_area0.unshift(player1_area_grass0[0]);
    player1_area_grass0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player1_area_grass:player1_area_grass0
    })
    this.update_place()
    this.update_player1()
    if(hosted2 === 1)
      this.host2()
    return 1
  },
  // 玩家二出牌
  match_player2_hearts(){
    console.log('turn',turn)
    if(turn === 1){
      wx.showToast({
        title: '玩家1时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player2_area_hearts0 = this.data.player2_area_hearts
    if(player2_area_hearts0.length <= 0)
      return -1
    turn = 1
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player2_area_hearts0[0] / 13)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all2()
      if(hosted1 === 1)
        this.host1()
      return 1 
    }
    place_area0.unshift(player2_area_hearts0[0]);
    player2_area_hearts0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player2_area_hearts:player2_area_hearts0
    })
    this.update_place()
    this.update_player2()
    if(hosted1 === 1)
      this.host1()
    return 1
  },
  match_player2_square(){
    if(turn === 1){
      wx.showToast({
        title: '玩家1时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player2_area_square0 = this.data.player2_area_square
    if(player2_area_square0.length <= 0)
      return -1
    turn = 1
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player2_area_square0[0] / 13)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all2()
      if(hosted1 === 1)
        this.host1()
      return 1 
    }
    place_area0.unshift(player2_area_square0[0]);
    player2_area_square0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player2_area_square:player2_area_square0
    })
    this.update_place()
    this.update_player2()
    if(hosted1 === 1)
      this.host1()
    return 1
  },
  match_player2_spade(){
    if(turn === 1){
      wx.showToast({
        title: '玩家1时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player2_area_spade0 = this.data.player2_area_spade
    if(player2_area_spade0.length <= 0)
      return -1
    turn = 1
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player2_area_spade0[0] / 13)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all2()
      if(hosted1 === 1)
        this.host1()
      return 1 
    }
    place_area0.unshift(player2_area_spade0[0]);
    player2_area_spade0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player2_area_spade:player2_area_spade0
    })
    this.update_place()
    this.update_player2()
    if(hosted1 === 1)
      this.host1()
    return 1
  },
  match_player2_grass(){
    if(turn === 1){
      wx.showToast({
        title: '玩家1时间',
        icon: 'error',
      })
      return -1
    }
    var place_area0 = this.data.place_area
    var player2_area_grass0 = this.data.player2_area_grass
    if(player2_area_grass0.length <= 0)
      return -1
    turn = 1
    var tmp1 = parseInt(place_area0[0] / 13)
    var tmp2 = parseInt(player2_area_grass0[0] / 13)
    if(tmp1 === tmp2 && place_area0.length > 0){
      this.eat_all2()
      if(hosted1 === 1)
        this.host1()
      return 1 
    }
    place_area0.unshift(player2_area_grass0[0]);
    player2_area_grass0.shift();
    this.setData({
      place_area:place_area0
    })
    this.setData({
      player2_area_grass:player2_area_grass0
    })
    this.update_place()
    this.update_player2()
    if(hosted1 === 1)
      this.host1()
    return 1
  },
  // 抽牌时牌面花色匹配环节
  match_stack(){
    //console.log('turn:',turn)
    var stack_area0 = this.data.stack_area
    if(turn === 1){
      this.match_stack1();
      turn = 2
    }
    else{
      this.match_stack2();
      turn = 1
    }
    if(stack_area0.length === 0){
      var player1_area_hearts0 = this.data.player1_area_hearts
      var player1_area_square0 = this.data.player1_area_square
      var player1_area_spade0 = this.data.player1_area_spade
      var player1_area_grass0 = this.data.player1_area_grass
      var player2_area_hearts0 = this.data.player2_area_hearts
      var player2_area_square0 = this.data.player2_area_square
      var player2_area_spade0 = this.data.player2_area_spade
      var player2_area_grass0 = this.data.player2_area_grass
      console.log('游戏结束啦！')
      var cnt1 = player1_area_hearts0.length + player1_area_spade0.length + player1_area_square0.length + player1_area_grass0.length 
      var cnt2 = player2_area_hearts0.length + player2_area_spade0.length + player2_area_square0.length + player2_area_grass0.length 
      console.log(cnt1,cnt2)
      if(cnt1 < cnt2){
        console.log('玩家一胜利！')
      } 
      else if(cnt1 < cnt2)
        console.log('玩家二胜利！')
      else
        console.log('平局了！')
      //带参数的页面跳转
      wx.navigateTo({
        url: '/pages/jiesuan/jiesuan?cnt1='+cnt1+'&cnt2='+cnt2
      })
      return 
    }
    console.log('turn:',turn)
    console.log(hosted1,hosted2)
    if(turn === 1){
      if(hosted1 === 1){
        console.log('host1')
        this.host1()
      }
    }
    if(turn === 2){
      if(hosted2 === 1)
        this.host2()
    }
  },
  // 如果当前回合是玩家一
  match_stack1(){
    var flag = 0
    var place_area0 = this.data.place_area
    var stack_area0 = this.data.stack_area
    if(place_area0.length > 0){ //放置区有牌
      var tmp1 = parseInt(place_area0[0] / 13)
      var tmp2 = parseInt(stack_area0[0] / 13)
      //console.log('tmp1:',tmp1,'tmp2:',tmp2)
      if(tmp1 === tmp2 && place_area0.length > 0){ //花色相同且放置区有牌
        flag = 1
        place_area0.unshift(stack_area0[0]); //向数组的开头添加一个元素
        stack_area0.shift(); //将数组中的数整体下移
        this.setData({
          stack_area:stack_area0
        })
        this.setback_stack()
        //this.update_stack()
        this.eat_all1()
      }    
    }
    if(flag === 0){ //放置区没牌
      var tmp=stack_area0[0]
      stack_area0.shift();
      place_area0.unshift(tmp);
      this.setData({
        place_area:place_area0
      })
      this.setback_stack()
      this.update_place()//更新放置区手牌
      this.setData({
        stack_area:stack_area0
      })
      this.setback_stack()
      //this.update_stack()//更新卡组
    } 
  },
  // 如果当前回合是玩家二
  match_stack2(){
    var flag = 0
    var place_area0 = this.data.place_area
    var stack_area0 = this.data.stack_area
    if(place_area0.length > 0){ //放置区有牌
      var tmp1 = parseInt(place_area0[0] / 13)
      var tmp2 = parseInt(stack_area0[0] / 13)
      //console.log('tmp1:',tmp1,'tmp2:',tmp2)
      if(tmp1 === tmp2 && place_area0.length > 0){ //花色相同且放置区有牌
        flag = 1
        place_area0.unshift(stack_area0[0]); //将卡组堆顶手牌放入放置区堆顶
        stack_area0.shift();
        this.setData({
          stack_area:stack_area0
        })
        this.setback_stack()
        //this.update_stack()
        this.eat_all2()
      }  
    }
    if(flag === 0){   //花色不同或放置区无牌
      var tmp=stack_area0[0]
      stack_area0.shift();
      place_area0.unshift(tmp);
      this.setData({
        place_area:place_area0
      })
      this.setback_stack()
      this.update_place()//更新放置区手牌
      this.setData({
        stack_area:stack_area0
      })
      this.setback_stack()
      //setTimeout(this.update_stack(), 5000)
      //this.update_stack()//更新卡组
    } 
  },
  // 玩家一吃牌
  eat_all1(){
    var place_area0 = this.data.place_area
    var player1_area_hearts0 = this.data.player1_area_hearts
    var player1_area_square0 = this.data.player1_area_square
    var player1_area_spade0 = this.data.player1_area_spade
    var player1_area_grass0 = this.data.player1_area_grass
    var len = place_area0.length
    for(var i = 0;i < len;i++){
      var t = place_area0[i]
      if(parseInt(t / 13) === 0)
        player1_area_hearts0.unshift(t);
      else if(parseInt(t / 13) === 1)
        player1_area_square0.unshift(t);
      else if(parseInt(t / 13) === 2)
        player1_area_spade0.unshift(t);
      else
        player1_area_grass0.unshift(t);
      //this.update_player1()
    }
    for(var i = 0;i < len;i++){
      place_area0.shift();
    }
    this.setData({
      place_area:place_area0
    })
    this.update_place()
    this.setData({
      player1_area_hearts:player1_area_hearts0
    })
    this.setData({
      player1_area_square:player1_area_square0
    })
    this.setData({
      player1_area_spade:player1_area_spade0
    })
    this.setData({
      player1_area_grass:player1_area_grass0
    })
    //更新玩家1堆顶图片
    this.update_player1()
  },
  // 玩家二吃牌
  eat_all2(){
    var place_area0 = this.data.place_area
    var player2_area_hearts0 = this.data.player2_area_hearts
    var player2_area_square0 = this.data.player2_area_square
    var player2_area_spade0 = this.data.player2_area_spade
    var player2_area_grass0 = this.data.player2_area_grass
    var len = place_area0.length
    //console.log(len)
    for(var i = 0;i < len;i++){
      var t = place_area0[i]
      //console.log('t:',t)
      //console.log(parseInt("放置区顶: ",t / 13))
      if(parseInt(t / 13) === 0)
        player2_area_hearts0.unshift(t);
      else if(parseInt(t / 13) === 1)
        player2_area_square0.unshift(t);
      else if(parseInt(t / 13) === 2)
        player2_area_spade0.unshift(t);
      else
        player2_area_grass0.unshift(t);
      /*console.log('player2_area_hearts0:',player2_area_hearts0)
      console.log('player2_area_square0:',player2_area_square0)
      console.log('player2_area_spade0:',player2_area_spade0)
      console.log('player2_area_grass0:',player2_area_grass0)*/
    }
    for(var i = 0;i < len;i++){
      place_area0.shift();
      //console.log('place_area0:',place_area0)
    }
    this.setData({
      place_area:place_area0
    })
    this.update_place()
    this.setData({
      player2_area_hearts:player2_area_hearts0
    })
    this.setData({
      player2_area_square:player2_area_square0
    })
    this.setData({
      player2_area_spade:player2_area_spade0
    })
    this.setData({
      player2_area_grass:player2_area_grass0
    })
    /*console.log(player2_area_hearts0)
    console.log(player2_area_square0)
    console.log(player2_area_spade0)
    console.log(player2_area_grass0)*/
    //更新玩家2堆顶图片
    this.update_player2();
  },
  //跳转
  gojiesuan(){
    console.log("点击了跳转")
    wx.navigateTo({
      url: '/pages/jiesuan/jiesuan',
    })
    console.log("跳转成功")
  },
  //展示卡组背面
  setback_stack(){
    var s_top=this.fetchImgAddr(52)
    this.setData({
        stacktop : s_top,
        //cnt_stack_area : this.data.stack_area.length
    })
    this.setData({
      cnt_stack_area : this.data.stack_area.length
    })
  },
  //更新卡组
  update_stack(){
    var s_top=this.fetchImgAddr(this.data.stack_area[0])
    this.setData({
        stacktop : s_top,
        //cnt_stack_area : this.data.stack_area.length
    })
    this.setData({
      cnt_stack_area : this.data.stack_area.length
    })
  },
  //更新放置区手牌
  update_place(){
    var i = 52
    if(this.data.place_area.length > 0) 
    i=this.data.place_area[0]
    var p_top=this.fetchImgAddr(i)
    this.setData({
      placetop:p_top,
      //cnt_place_area : this.data.place_area.length
    })
    this.setData({
      cnt_place_area : this.data.place_area.length
    })
  },
  update_player1(){
    this.update_player1_area_grass();
    this.update_player1_area_hearts();
    this.update_player1_area_spade();
    this.update_player1_area_square();
  },
  update_player1_area_hearts(){
    var i=52
    if(this.data.player1_area_hearts.length > 0) 
    i=this.data.player1_area_hearts[0]
    var p1h_top=this.fetchImgAddr(i)
    this.setData({
      player1_area_hearts_top:p1h_top,
      //cnt1_area_hearts : this.data.player1_area_hearts.length
    })
    this.setData({
      cnt1_player1_area_hearts : this.data.player1_area_hearts.length
    })
  },
  update_player1_area_spade(){
    var i=52
    if(this.data.player1_area_spade.length>0) 
    i=this.data.player1_area_spade[0]
    var p1sq_top=this.fetchImgAddr(i)
    this.setData({
      player1_area_spade_top:p1sq_top,
      //cnt1_player1_area_spade : this.data.player1_area_spade.length
    })
    this.setData({
      cnt1_player1_area_spade : this.data.player1_area_spade.length
    })
  },
  update_player1_area_square(){
    var i=52
    if(this.data.player1_area_square.length > 0) 
    i=this.data.player1_area_square[0]
    var p1sp_top=this.fetchImgAddr(i)
    this.setData({
      player1_area_square_top:p1sp_top,
      //cnt1_player1_area_square : this.data.player1_area_square.length
    })
    this.setData({
      cnt1_player1_area_square : this.data.player1_area_square.length
    })
  },
  update_player1_area_grass(){
    var i=52
    if(this.data.player1_area_grass.length > 0) 
    i=this.data.player1_area_grass[0]
    var p1g_top=this.fetchImgAddr(i)
    this.setData({
      player1_area_grass_top:p1g_top,
      //cnt1_player1_area_grass : this.data.player2_area_grass.length
    })
    this.setData({
      cnt1_player1_area_grass : this.data.player1_area_grass.length
    })
  },
  update_player2(){
    this.update_player2_area_grass();
    this.update_player2_area_hearts();
    this.update_player2_area_spade();
    this.update_player2_area_square();
  },
  update_player2_area_hearts(){
    var i=52
    if(this.data.player2_area_hearts.length > 0) 
    i=this.data.player2_area_hearts[0]
    var p2h_top=this.fetchImgAddr(i)
    this.setData({
      player2_area_hearts_top:p2h_top,
      //cnt2_player2_area_hearts : this.data.player2_area_hearts.length
    })
    this.setData({
      cnt2_player2_area_hearts : this.data.player2_area_hearts.length
    })
  },
  update_player2_area_spade(){
    var i=52
    if(this.data.player2_area_spade.length>0) 
    i=this.data.player2_area_spade[0]
    var p2sq_top=this.fetchImgAddr(i)
    this.setData({
      player2_area_spade_top:p2sq_top,
      //cnt2_player2_area_spade : this.data.player2_area_spade.length
    })
    this.setData({
      cnt2_player2_area_spade : this.data.player2_area_spade.length
    })
  },
  update_player2_area_square(){
    var i=52
    if(this.data.player2_area_square.length > 0) 
    i=this.data.player2_area_square[0]
    var p2sp_top=this.fetchImgAddr(i)
    this.setData({
      player2_area_square_top:p2sp_top,
      //cnt2_player2_area_square : this.data.player2_area_square.length
    })
    this.setData({
      cnt2_player2_area_square : this.data.player2_area_square.length
    })
  },
  update_player2_area_grass(){
    var i=52
    if(this.data.player2_area_grass.length > 0) 
    i=this.data.player2_area_grass[0]
    var p2g_top=this.fetchImgAddr(i)
    this.setData({
      player2_area_grass_top:p2g_top,
      //cnt2_player2_area_grass : this.data.player2_area_grass.length()
    })
    this.setData({
      cnt2_player2_area_grass : this.data.player2_area_grass.length
    })
  },
  //AI操作
  ai_Host1(){
    //console.log('轮到玩家一了')
    var player1_area_hearts0 = this.data.player1_area_hearts
    var player1_area_square0 = this.data.player1_area_square
    var player1_area_spade0 = this.data.player1_area_spade
    var player1_area_grass0 = this.data.player1_area_grass
    var player2_area_hearts0 = this.data.player2_area_hearts
    var player2_area_square0 = this.data.player2_area_square
    var player2_area_spade0 = this.data.player2_area_spade
    var player2_area_grass0 = this.data.player2_area_grass
    var stack_area0 = this.data.stack_area
    var place_area0 = this.data.place_area
    var cnt1 = player1_area_hearts0.length + player1_area_spade0.length + player1_area_square0.length + player1_area_grass0.length 
    var cnt2 = player2_area_hearts0.length + player2_area_spade0.length + player2_area_square0.length + player2_area_grass0.length 
    var cnts = stack_area0.length
    var cntp = place_area0.length
    if(cnt1 + 3 * cnts + cntp < cnt2){//如果当前已经为必胜点，则选择抽卡，加速游戏结束
      //console.log('1如果当前已经为必胜点')
      this.match_stack()
    }
    else if(cnt1 == 0){//如果无手牌则只能抽牌
      //console.log('1当前无手牌')
      this.match_stack()
    }
    else if(cntp == 0){//如果放置区为空
      if(cnt1 < 13){//如果当前处于优势，就抽牌
        //console.log('1放置区为空且处于优势')
        this.match_stack()
      }
      else{//否则出数量多的那堆
        if(player1_area_hearts0.length > 0 && player1_area_hearts0.length >= player1_area_spade0.length && player1_area_hearts0.length >= player1_area_square0.length && player1_area_hearts0.length >= player1_area_grass0.length ){
          //console.log('1放置区为空且出红桃')
          this.match_player1_hearts()
        }
        else if(player1_area_square0.length > 0 && player1_area_square0.length >= player1_area_hearts0.length && player1_area_square0.length >= player1_area_spade0.length && player1_area_square0.length >= player1_area_grass0.length ){
          //console.log('1放置区为空且出方片')
          this.match_player1_square()
        }
        else if(player1_area_spade0.length > 0 && player1_area_spade0.length >= player1_area_hearts0.length && player1_area_spade0.length >= player1_area_square0.length && player1_area_spade0.length >= player1_area_grass0.length ){
          //console.log('1放置区为空且出黑桃')
          this.match_player1_spade()
        }
        else if(player1_area_grass0.length > 0 && player1_area_grass0.length >= player1_area_hearts0.length && player1_area_grass0.length >= player1_area_square0.length && player1_area_grass0.length >= player1_area_spade0.length ){
          //console.log('1放置区为空且出草花')
          this.match_player1_grass() 
        }
      } 
    }
    else{//放置区非空则需要判断顶部
      if(cnt1 + cntp < 13){//如果吃牌后仍然处于优势
        var top = parseInt(place_area0[0] / 13)
        if(top == 0){//红心
          if(player1_area_hearts0.length > 0){
            //console.log('1放置区不为空且吃牌后处于优势','顶为红桃且出红桃')
            this.match_player1_hearts()
          } 
          else{
            //console.log('1放置区不为空且吃牌后处于优势','顶为红桃且出抽牌')
            this.match_stack()
          }
        }
        else if(top == 1){//方片
          if(player1_area_square0.length > 0){
            //console.log('1放置区不为空且吃牌后处于优势','顶为方片且出方片')
            this.match_player1_square()
          }
          else {
            //console.log('1放置区不为空且吃牌后处于优势','顶为方片且出抽牌')
            this.match_stack()
          }
        }
        else if(top == 2){//黑桃
          if(player1_area_spade0.length > 0){
            //console.log('1放置区不为空且吃牌后处于优势','顶为黑桃且出黑桃')
            this.match_player1_spade()
          }
          else  {
            //console.log('1放置区不为空且吃牌后处于优势','顶为黑桃且出抽牌')
            this.match_stack()
          }  
        }
        else{//草花
          if(player1_area_grass0.length > 0){
            //console.log('1放置区不为空且吃牌后处于优势','顶为草花且出草花')
            this.match_player1_grass()
          }
          else  {
            //console.log('1放置区不为空且吃牌后处于优势','顶为草花且出抽牌')
            this.match_stack()
          }
        } 
      }
      else{//尽量不吃牌,有牌则出数量多的那堆
        var top = parseInt(place_area0[0] / 13)
        if(top == 0){//红心
          if(player1_area_square0.length > 0 && player1_area_square0.length >= player1_area_spade0.length && player1_area_square0.length >= player1_area_grass0.length ){
            //console.log('1放置区非空','顶为红桃','出方片')
            this.match_player1_square()
          }
          else if(player1_area_spade0.length > 0 && player1_area_spade0.length >= player1_area_square0.length && player1_area_spade0.length >= player1_area_grass0.length ){
            //console.log('1放置区非空','顶为红桃','出黑桃')
            this.match_player1_spade()
          }
          else if(player1_area_grass0.length > 0 && player1_area_grass0.length >= player1_area_square0.length && player1_area_grass0.length >= player1_area_spade0.length ){
            //console.log('1放置区非空','顶为红桃','出草花')
            this.match_player1_grass()  
          }
          else{
            //console.log('1放置区非空','顶为红桃','抽牌')
            this.match_stack()
          }
        }
        else if(top == 1){//方片
          if(player1_area_hearts0.length > 0 && player1_area_hearts0.length >= player1_area_spade0.length && player1_area_hearts0.length >= player1_area_grass0.length ){
            //console.log('1放置区非空','顶为方片','出红桃')
            this.match_player1_hearts()
          }
          else if(player1_area_spade0.length > 0 && player1_area_spade0.length >= player1_area_hearts0.length && player1_area_spade0.length >= player1_area_grass0.length ){
            //console.log('1放置区非空','顶为方片','出黑桃')
            this.match_player1_spade()
          }
          else if(player1_area_grass0.length > 0 && player1_area_grass0.length >= player1_area_hearts0.length && player1_area_grass0.length >= player1_area_spade0.length ){
            //console.log('1放置区非空','顶为方片','出草花')
            this.match_player1_grass() 
          }
          else{
            //console.log('1放置区非空','顶为方片','抽牌')
            this.match_stack() 
          }
        }
        else if(top == 2){//黑桃
          if(player1_area_hearts0.length > 0 && player1_area_hearts0.length >= player1_area_square0.length && player1_area_hearts0.length >= player1_area_grass0.length ){
            //console.log('1放置区非空','顶为黑桃','出红桃')
            this.match_player1_hearts()  
          }
          else if(player1_area_square0.length > 0 && player1_area_square0.length >= player1_area_hearts0.length && player1_area_square0.length >= player1_area_grass0.length ){
            //console.log('1放置区非空','顶为黑桃','出方片')
            this.match_player1_square()
          }
          else if(player1_area_grass0.length > 0 && player1_area_grass0.length >= player1_area_hearts0.length && player1_area_grass0.length >= player1_area_square0.length){
            //console.log('1放置区非空','顶为黑桃','出草花')
            this.match_player1_grass()  
          }
          else{
            //console.log('1放置区非空','顶为黑桃','抽牌')
            this.match_stack()
          }
        }
        else{//草花
          if(player1_area_hearts0.length > 0 && player1_area_hearts0.length >= player1_area_spade0.length && player1_area_hearts0.length >= player1_area_square0.length ){
            //console.log('1放置区非空','顶为草花','出红桃')
            this.match_player1_hearts()
          }
          else if(player1_area_square0.length > 0 && player1_area_square0.length >= player1_area_hearts0.length && player1_area_square0.length >= player1_area_spade0.length ){
            //console.log('1放置区非空','顶为草花','出方片')
            this.match_player1_square()
          }
          else if(player1_area_spade0.length > 0 && player1_area_spade0.length >= player1_area_hearts0.length && player1_area_spade0.length >= player1_area_square0.length){
            //console.log('1放置区非空','顶为草花','出黑桃')
            this.match_player1_spade()
          }
          else{
            //console.log('1放置区非空','顶为草花','抽牌')
            this.match_stack()
          }
        } 
      }
    }
  },
  ai_Host2(){
    console.log('轮到玩家二了')
    var player1_area_hearts0 = this.data.player1_area_hearts
    var player1_area_square0 = this.data.player1_area_square
    var player1_area_spade0 = this.data.player1_area_spade
    var player1_area_grass0 = this.data.player1_area_grass
    var player2_area_hearts0 = this.data.player2_area_hearts
    var player2_area_square0 = this.data.player2_area_square
    var player2_area_spade0 = this.data.player2_area_spade
    var player2_area_grass0 = this.data.player2_area_grass
    var stack_area0 = this.data.stack_area
    var place_area0 = this.data.place_area
    var cnt1 = player1_area_hearts0.length + player1_area_spade0.length + player1_area_square0.length + player1_area_grass0.length 
    var cnt2 = player2_area_hearts0.length + player2_area_spade0.length + player2_area_square0.length + player2_area_grass0.length 
    var cnts = stack_area0.length
    var cntp = place_area0.length
    if(cnt2 + 3 * cnts + cntp < cnt1)//如果当前已经为必胜点，则选择抽卡，加速游戏结束
      this.match_stack()
    else if(cnt2 == 0)//如果无手牌则只能抽牌
      this.match_stack()
    else if(cntp == 0){//如果放置区为空
      if(cnt2 < 13)//如果当前处于优势，就抽牌
        this.match_stack()
      else{//否则出数量多的那堆
        if(player2_area_hearts0.length > 0 && player2_area_hearts0.length >= player2_area_spade0.length && player2_area_hearts0.length >= player2_area_square0.length && player2_area_hearts0.length >= player2_area_grass0.length )
          this.match_player2_hearts()
        else if(player2_area_square0.length > 0 && player2_area_square0.length >= player2_area_hearts0.length && player2_area_square0.length >= player2_area_spade0.length && player2_area_square0.length >= player2_area_grass0.length )
          this.match_player2_square()
        else if(player2_area_spade0.length > 0 && player2_area_spade0.length >= player2_area_hearts0.length && player2_area_spade0.length >= player2_area_square0.length && player2_area_spade0.length >= player2_area_grass0.length )
          this.match_player2_spade()
        else if(player2_area_grass0.length > 0 && player2_area_grass0.length >= player2_area_hearts0.length && player2_area_grass0.length >= player2_area_square0.length && player2_area_grass0.length >= player2_area_spade0.length )
          this.match_player2_grass()  
      } 
    }
    else{//放置区非空则需要判断顶部
      if(cnt2 + cntp < 13){//如果吃牌后仍然处于优势
        var top = parseInt(place_area0[0] / 13)
        if(top == 0){//红心
          if(player2_area_hearts0.length > 0)
            this.match_player2_hearts()
          else
            this.match_stack()
        }
        else if(top == 1){//方片
          if(player2_area_square0.length > 0)
            this.match_player2_square()
          else  
            this.match_stack()
        }
        else if(top == 2){//黑桃
          if(player2_area_spade0.length > 0)
            this.match_player2_spade()
          else  
            this.match_stack()
        }
        else{//草花
          if(player2_area_grass0.length > 0)
            this.match_player2_grass()
          else  
            this.match_stack()
        } 
      }
      else{//尽量不吃牌,有牌则出数量多的那堆
        var top = parseInt(place_area0[0] / 13)
        if(top == 0){//红心
          if(player2_area_square0.length > 0 && player2_area_square0.length >= player2_area_spade0.length && player2_area_square0.length >= player2_area_grass0.length )
            this.match_player2_square()
          else if(player2_area_spade0.length > 0 && player2_area_spade0.length >= player2_area_square0.length && player2_area_spade0.length >= player2_area_grass0.length )
            this.match_player2_spade()
          else if(player2_area_grass0.length > 0 && player2_area_grass0.length >= player2_area_square0.length && player2_area_grass0.length >= player2_area_spade0.length )
            this.match_player2_grass()  
          else
            this.match_stack()
        }
        else if(top == 1){//方片
          if(player2_area_hearts0.length > 0 && player2_area_hearts0.length >= player2_area_spade0.length && player2_area_hearts0.length >= player2_area_grass0.length )
            this.match_player2_hearts()
          else if(player2_area_spade0.length > 0 && player2_area_spade0.length >= player2_area_hearts0.length && player2_area_spade0.length >= player2_area_grass0.length )
            this.match_player2_spade()
          else if(player2_area_grass0.length > 0 && player2_area_grass0.length >= player2_area_hearts0.length && player2_area_grass0.length >= player2_area_spade0.length )
            this.match_player2_grass() 
          else
            this.match_stack() 
        }
        else if(top == 2){//黑桃
          if(player2_area_hearts0.length > 0 && player2_area_hearts0.length >= player2_area_square0.length && player2_area_hearts0.length >= player2_area_grass0.length )
            this.match_player2_hearts()
          else if(player2_area_square0.length > 0 && player2_area_square0.length >= player2_area_hearts0.length && player2_area_square0.length >= player2_area_grass0.length )
            this.match_player2_square()
          else if(player2_area_grass0.length > 0 && player2_area_grass0.length >= player2_area_hearts0.length && player2_area_grass0.length >= player2_area_square0.length )
            this.match_player2_grass()  
          else 
            this.match_stack()
        }
        else{//草花
          if(player2_area_hearts0.length > 0 && player2_area_hearts0.length >= player2_area_spade0.length && player2_area_hearts0.length >= player2_area_square0.length )
            this.match_player2_hearts()
          else if(player2_area_square0.length > 0 && player2_area_square0.length >= player2_area_hearts0.length && player2_area_square0.length >= player2_area_spade0.length )
            this.match_player2_square()
          else if(player2_area_spade0.length > 0 && player2_area_spade0.length >= player2_area_hearts0.length && player2_area_spade0.length >= player2_area_square0.length)
            this.match_player2_spade()
          else 
            this.match_stack()
        } 
      }
    }
  }
})
