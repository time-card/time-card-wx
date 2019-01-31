//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    angle: 0
  },
  onLoad: function () {
    // setTimeout(() => {
    //   wx.navigateTo({
    //     url: '../home/index'
    //   })
    // }, 5000)
  },
  onShow:function(){
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle>14){ angle=14; }
      else if(angle<-14){ angle=-14; }
      if(that.data.angle !== angle){
        that.setData({
          angle: angle
        });
      }
    })
  }
})
