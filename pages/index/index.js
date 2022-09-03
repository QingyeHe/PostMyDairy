// pages/index/index.js

var ListData = require('../../data/listdata')

Page({
  
  /**
   * 页面的初始数据
   */
  data:{
      InputValue:null,
      imageurls:[
        '../../images/dianzan1.png',
        '../../images/dianzan2.png'
      ],
      userinput:"",
      filterdata:[],
      createData:[],
      listdata:[],
  //     listdata:[
  //      {
  //       "id":0,
  //       "address":"上海",
  //       "time":"9月27日",
  //       "hotel":"花汀酒店",
  //       "content":"这个酒店给人感觉非常得好，比如说网络高速信号好，窗外风景好。有特别的开床服务，房间小摆件的设计也很有特色",
  //       "isComment":false,
  //       "isZan":false,
  //      },{
  //   "id":1,
  //   "address":"南京",
  //   "time":"9月27日",
  //   "hotel":"东苑酒店",
  //   "content":"姐妹们！这个酒店贼垃圾别来别来",
  //   "isComment":false,
  //   "isZan":false,
  //      },
  //      {
  //   "id":"2",
  //   "address":"杭州",
  //   "time":"9月28日",
  //   "hotel":"四季酒店",
  //   "content":"首先这家酒店有非常好的设计感,可见酒店方的品位很不错。其次酒店的硬件设施和软件设施都很好",
  //   "isComment":false,
  //   "isZan":false,
  //      },
  //      {
  //   "id":'3',
  //   "address":"杭州",
  //   "time":"9月28日",
  //   "hotel":"信华酒店",
  //   "content":"服务超好,前台不同时间值班的几个小姐姐说话都超有礼貌,而且很贴心,外卖送来会帮送上去",
  //   "isComment":false,
  //   "isZan":false,
  // },
  // {
  //   "id":'4',
  //   "address":"上海",
  //   "time":"9月28日",
  //   "hotel":"丰源酒店",
  //   "content":"酒店很特别,设计风格满满,古色古香的很有韵味。前台小姐姐服务很棒,前台还有一个服务框.",
  //   "isComment":false,
  //   "isZan":true,
  // },
  // {
  //   "id":'5',
  //   "address":"南京",
  //   "time":"9月28日",
  //   "hotel":"私家酒店",
  //   "content":"非常好,环境很漂亮,房间里面非常干净,还有浴池,双人洗手台,洗漱非常方便。店家很热情.v",
  //   "isComment":false,
  //   "isZan":false,
  // },{
  //   "id":'6',
  //   "address":"上海",
  //   "time":"9月28日",
  //   "hotel":"希曼酒店",
  //   "content":"性价比不错，下次还要入住",
  //   "isComment":false,
  //   "isZan":true,
  // },
  // {
  //   "id":'7',
  //   "address":"北京",
  //   "time":"9月28日",
  //   "hotel":"澜诗酒店",
  //   "content":"网络高速信号好，窗外风景好。有特别的开床服务，房间小摆件的设计也很有特色",
  //   "isComment":false,
  //   "isZan":false,
  // },
  // {
  //   "id":'8',
  //   "address":"北京",
  //   "time":"9月28日",
  //   "hotel":"仙缦女装",
  //   "content":"地理位置好，交通方便，房间舒适卫生，服务人员很热情",
  //   "isComment":false,
  //   "isZan":true,
  // },
  // {
  //   "id":'9',
  //   "address":"上海",
  //   "time":"9月28日",
  //   "hotel":"hello酒店",
  //   "content":"非常好,环境很漂亮,房间里面非常干净,还有浴池,双人洗手台,洗漱非常方便。店家很热情.v",
  //   "isComment":false,
  //   "isZan":false,
  // },
  //     ],
       colorarr:[
        '#FFB6C1',,'#E6E6FA','#483D8B','#E1FFFF','#00FF7F',
        '#F0E68C','#F5DEB3','#FFEBCD','#FAF0E6','#FFE4E1',
        '#F5EFEF','#E7F0FD','#DEECDD','FBFCBD','#005BEA'
      ],
      ani:''
},
  // 事件函数

  // 随机改变颜色
   changecolor:function(){
      var { colorarr,listdata} = this.data;
      listdata.forEach(item=>{
        item.color = colorarr[Math.floor(Math.random() * colorarr.length)]
      })
      this.setData({listdata})
  },
  // 清空input框架
  clearInput:function(){
    var{InputValue} = this.data
    this.setData({
      InputValue
    })
  },
     // 拿到input框的值
  getUserinput(e){
    //console.log(e);
    this.setData({ 
      userinput : e.detail.value.trim(),
    }) 
    this.filterAddress()
  },
  // 搜索实现
  filterAddress(){
    var {listdata,userinput,filterdata,InputValue} = this.data
    filterdata = [] 
    var reg =  new RegExp(userinput);
    for(var i=0; i<listdata.length;i++){
      if(reg.test(listdata[i].address) || reg.test(listdata[i].content)){ 
        filterdata.push(listdata[i])
      } else if(reg.test(listdata[i].hotel)){
        filterdata.push(listdata[i]) 
      }
      console.log(filterdata);
        this.setData({ 
       filterdata
        }) 
      
     
    }
      
    },
  
  // 去发布
  toCreate: function() {
    wx.navigateTo({
      url: '../index_create/index_create',
      events: {  
      setNewData: data=> { 
        console.log(data)
        this.setData({ 
          createData:data,
          userinput:""
        })
        
        this.addUsers() 
        this.clearInput()
      }, 
       // listdata里面增加新发布的内容
  },
})},
// 去评论,触发新事件，把数据存入commentdata
toComment: function(event) {
      wx.navigateTo({
      url: '../index_comment/index_comment?id=' + event.target.dataset.bind,
      success: res => {
        // 通过 eventChannel 向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromIndexPage', 
        {   
            data: this.data.listdata  
           }) 
      }})
    
}, 
// 新增列表项
addUsers:function(){
    var{createData,listdata } = this.data
    var id = listdata.length 
    
    const addthings = {
        "id":id, 
        "address":createData.useraddress,
        "time":createData.usertime,
        "hotel":createData.userhotel,
        "content":createData.usercontent,
        "isComment":createData.useriscomment,
         "isZan":createData.useriszan,
         "isDelete":false,
         "isShowDelete":false,
         "commentdata":[{
          "commentid":"博主",
          "commentcontent":"欢迎发表评论哦"
         }]
      }
        listdata.push(addthings)
        console.log(listdata.length);
        this.setData({ 
          listdata
        }) 
        this.changecolor()
       
},
// 点赞设置
toggleZan:function(event){
  var id = event.target.dataset.bind
  var{listdata,filterdata } = this.data
  console.log(id);
   listdata[id].isZan = !listdata[id].isZan
  
  this.setData({
    listdata,
    filterdata
  })
  

  wx.showToast({
    title: listdata[id].isZan ? '点赞成功' : '取消成功',
    icon: 'none',
    duration: 1000
  })
},
// 删除列表项
deleteusers:function(event){
  var id = event.target.dataset.bind
   var{listdata } = this.data
  console.log(id);
  listdata[id].isDelete = true
  // console.log(new_listdata);
  // new_listdata.isDelete = true
  wx.showToast({
    title: '删除成功',
    icon: 'none',
    duration: 1000
  })
  this.setData({
    listdata
  })
  
},
// 左滑显示删除按钮的动画
deleteanimation:function(event){
  var id = event.currentTarget.dataset.bind
  var{listdata } = this.data
  console.log(listdata[id]);
   listdata[id].isShowDelete = true
    this.setData({
      listdata
    })
},
// 显示删除页面时想要取消
canceldelete:function(event){
  var id = event.currentTarget.dataset.bind
  var{listdata } = this.data
  console.log(listdata[id]);
   listdata[id].isShowDelete = false
    this.setData({
      listdata
    })
},
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    this.setData({
      listdata: ListData.listdata
    })
     this.filterAddress() 
    this.changecolor() 
    wx.showToast({
      title:'长按列表删除',
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