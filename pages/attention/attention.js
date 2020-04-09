// pages/attention/attention.js
Page({
  data:{ 
    attention:"",
  },
  onLoad(){
    var self = this;
    wx.request({
      url: 'http://127.0.0.1:8000/massage/attention',
      success:function(res){
        console.log(res);
        self.setData({
          attention:res.data
          });
      }
    })
  },
  handledir:function(){
    //按同意后跳转
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})