// pages/home/timeTable/timeTable.js
const app = getApp();



const conf = {
  data: {
    //当前周
    currentWeek: "一" ,
    //是否显示切换周
    weekShowStatus:false,
    // 默认第一周
    cur:0,
    //时间段数组
    dateArray:["08:00","08:50","09:50","11:30","14:05","14:50","15:30","16:00","16:50","17:30"],
    courseArray:[
      {
        // 周
        courseDate: 0,
        indexbegain: 1,
        indexend: 2,
        courseTimebegain: '08:00',
        courseTimeover: '08:50',
        courseName: "初级语法课",
        courseArea: "3区1-402"

      },

    ]
  },
  doSomeThing() {
    // 调用日历方法

  },/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight,
      statusBarHeight: app.globalData.statusBar
    })
    let arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五",]
    console.log(options);
    this.setData({
      cur: options.index ,
      currentWeek: arr[options.index],
    })

    // 获取到数据后,判断时间,处理成区域

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let a = new Array(70).join(',').split(',')
    let s=this.data.courseArray;
  
    this.setData({
      as: a
    })
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

  }, 
  // 切换周点击事件
  changeDataHander(e) {
  
    let weekShowStatus
    let than=this;
    than.setData({
      weekShowStatus: true
    })
  },
  // 点击周处理函数
  deWeekHander(e){
    let index = e.currentTarget.dataset.index
    let than = this;
    let arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五",]
    than.setData({
      weekShowStatus: false,
      currentWeek:arr[index],
      cur: index
    })
  },
   //监听屏幕滚动 判断上下滚动
  onPageScroll: function (ev) {
    var _this = this;
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      console.log("向下滚动")
      this.setData({ weekShowStatus: false })
      //向下滚动
    } else {
      //向上滚动
      console.log("向上滚动")
      
    //给scrollTop重新赋值
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  }},
  renturnHander(){
    wx.navigateBack({
      delta: 1,
    })
  }


 
 
};
Page(conf);


