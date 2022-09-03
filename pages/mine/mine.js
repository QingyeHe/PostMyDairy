// pages/index/index.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    "username":"",
    userimage: '../../images/maomao.png',
    imageuser:[
      '../../images/maomao.png',
      '../../images/gougou.png',
      '../../images/huhu.png',
      '../../images/niaoniao.png',
      '../../images/shizi.png'
    ],
    random:'',
    trasn:0,
    name:{
      name1:'吃大餐',
      name2:'听音乐',
      name3:'看电影',
      name4:'看看书',
      name5:'发发呆',
      name6:'聊聊天'
    }
 
  },
  // 随机改变头像
  changeimage:function(){
    var { imageuser ,userimage} = this.data;
    userimage = imageuser[Math.floor(Math.random() * imageuser.length)]
    this.setData({userimage})
},
// 拿到input框的值
getUsername(e){
      console.log(e);
      this.setData({ 
        username : e.detail.value.trim(),
      }) 
      wx.showToast({
        title:this.data.username + ' 您好！',
        icon: 'none',
        duration: 3000
      })
},
// 抽奖
zhuanin:function(e){
        let that = this
        let num = 0
        that.setData({
          random:Math.floor(Math.random() * 360),
          trasn:0,
        })
        let a = setInterval(function () {
          that.setData({
            trasn:that.data.trasn+5
          })
          if(360 <= that.data.trasn){
            that.data.trasn = 0
            num = num + 1
          }
          if(num == 3){
            that.currinl()
            clearInterval(a)
          }
        },5)
      },
currinl:function(e){
        let that = this
        let name = ''
        if(that.data.random == 30 || that.data.random == 90 || that.data.random == 150 || that.data.random == 210 || that.data.random == 330){
          that.setData({
            random:that.data.random + 1
          })
        }
        if(that.data.random < 30 || 330 < that.data.random){
          name = that.data.name.name1
        }else if(that.data.random > 30 && that.data.random < 90){
          name = that.data.name.name2
        }else if(that.data.random > 90 && that.data.random < 150){
          name = that.data.name.name3
        }else if(that.data.random > 150 && that.data.random < 210){
          name = that.data.name.name4
        }else if(that.data.random > 210 && that.data.random < 270){
          name = that.data.name.name5
        }else{
          name = that.data.name.name6
        }
        let b = setInterval(function () {
          that.setData({
            trasn:that.data.trasn+2
          })
          if(that.data.random <= that.data.trasn){
            wx.showToast({
              title: name,
              icon: 'none',
              duration: 2000
            })
            clearInterval(b)
          }
        },10)
      },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title:'点击头像切换 :)',
      icon: 'none',
      duration: 3000
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})