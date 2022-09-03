
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    InputValue:null,
    relistdata:{},
    colorarr:[
      '#FFB6C1',,'#E6E6FA','#483D8B','#E1FFFF','#00FF7F',
      '#F0E68C','#F5DEB3','#FFEBCD','#FAF0E6','#FFE4E1',
      '#F5EFEF','#E7F0FD','#DEECDD','FBFCBD','#005BEA'
    ],
    commentdata:[],
    userComment:""

  },
  // 切换颜色
changecolor:function(){
    var { colorarr,commentdata} = this.data; 

      commentdata.forEach(item=>{
      item.color = colorarr[Math.floor(Math.random() * colorarr.length)]
    })
    this.setData({commentdata})
    
    
},
// 清空输入框
clearUserinput:function(){
  var{InputValue} = this.data
  this.setData({ 
    InputValue
  }) 
},

  // 拿到评论区用户输入的内容并新增评论
  getUsercomment(e){
    console.log(e);
    this.setData({ 
      userComment : e.detail.value.trim(),
    }) 
    this.clearUserinput() //为什么clearUserInput和addComment换个位置就不奏效
    this.addComment()
  },
  addComment:function(){
    var{ commentdata,userComment } = this.data
    //console.log(userComment,commentdata);
    const addcomment = {
        "commentid":commentdata.length, 
        "commentcontent":userComment,
      } 
      commentdata.push(addcomment)
        this.setData({ 
          commentdata
        }) 
        
        this.changecolor()
  
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var id = options.id; 
    //console.log(id);
    this.setData({
      id: id
    })

    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromIndexPage',data => {
      console.log(data);
      console.log(id);
      this.setData({
        relistdata:data
      })
      this.loadcomment()
    })
       
    //this.loadcomment()
    this.changecolor()
  },
// 更换commentdata
loadcomment:function(){
  var{commentdata,relistdata,id} = this.data
  var commentdata = relistdata.data[id].commentdata
  console.log(commentdata);
  this.setData({
    commentdata
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