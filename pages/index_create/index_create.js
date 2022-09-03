// pages/index_create/index_create.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    "userinput":"",
   "createinput1":"",
   "createinput2":"",
   "createinput3":"",
   "createinput4":"",
   "provinceTypes":  ['选择省','北京市','天津市','上海市','重庆市','河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省','内蒙古自治区','广西壮族自治区','西藏自治区','宁夏回族自治区','新疆维吾尔自治区','香港特别行政区','澳门特别行政区'],
    "provinceTypesIndex": 0,
    "months":  ['选择月份','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    "monthsIndex": 0,
    "days":  ['选择日期','1号','2号','3号','4号','5号','6号','7号','8号','9号','10号','11号','12号','13号','14号','15号','16号','17号','18号','19号','20号','21号','22号','23号','24号','25号','26号','27号','28号','29号','30号','31号'],
    "daysIndex": 0,
  },
  
   //选择省
   provinceTypeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      provinceTypesIndex: e.detail.value
    })
    this.showProvince()
  },
  //选择月
  monthTypeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      monthsIndex: e.detail.value
    })
    this.showProvince()
  },
  //选择日
  daysTypeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      daysIndex: e.detail.value
    })
    this.showProvince()
  },
  // 取省和月日的数据
  showProvince:function(){
    var{provinceTypes,provinceTypesIndex,months,monthsIndex,days,daysIndex} = this.data
     this.setData({
      createinput1:provinceTypes[provinceTypesIndex],
      createinput2:months[monthsIndex]+days[daysIndex]
     })
  },
  
  getUserinput3(e){
    //var{createinput3} = this.data
        console.log(e);
          this.setData({ 
            createinput3 : e.detail.value.trim(),
          })
       
        },
        
        //this.filterAddress() 
  getUserinput4(e){
          console.log(e);     
            this.setData({ 
              createinput4 :e.detail.value.trim() ,
            }) 
          },
          // 传参给上一级
  toIndex: function() {
            const eventChannel = this.getOpenerEventChannel()
            eventChannel.emit("setNewData", {
            
            useraddress:this.data.createinput1,
            usertime:this.data.createinput2,
            userhotel:this.data.createinput3,
            usercontent:this.data.createinput4,
            userinput:this.data.userinput,
            useriscomment:false,
            useriszan:false
            })
              wx.navigateBack({
              delta: 1
            })
          },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
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