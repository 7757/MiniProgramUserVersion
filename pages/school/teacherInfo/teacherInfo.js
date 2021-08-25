// pages/school/teacherInfo/teacherInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnActive: 1,
    showType: "class",
    rotationChart: [
      "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",
    ],

    teacherInfo: {
      headPortrait: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
      entryTime: "2016",
      shopName:"ET英孚英语",
      selfIntroduc: "我是EF英孚教育老师傅鹏，很高兴能有机会与您和您的孩子认识，我将为你的家庭记录一段幸福的回忆!",
      major: "商务英语南京师范大学英语专业，文字文字文字文字文字文字文字文字文字",
      graduateSchool: "南京师范大学英语专业，文字文字文字文字文字文字文字文字文字",
      personalHonor: "2015 年江苏省文化工程奖，文字文字文字文字文字文字文字文字",
      score:4.9,
      teacherName:"傅鹏",
      classYear:5
    },

    classList: [{
      classId:1,
        //  课程轮播图
        classPicArry: [
          "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/1.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/2.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/3.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/4.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/5.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/6.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/7.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/8.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/9.jpg"
        ],
      className: "初级语法课",
        classStart:3    ,
         classComments: 251,
        coursePrice: 177,
      clouseDiscount: "儿童节特价8.7折",
      oragnInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…"
      },

      {
        classId: 2,
        //  课程轮播图
        classPicArry: [
          "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/1.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/2.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/3.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/4.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/5.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/6.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/7.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/8.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/9.jpg"
        ],
        className: "初级语法课",
        classStart: 4,
        classComments: 171,
        coursePrice: 89.9,
        clouseDiscount: "儿童节特价8.7折",
        oragnInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…"
      },


      {
        classId: 3,
        //  课程轮播图
        classPicArry: [
          "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/1.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/2.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/3.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/4.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/5.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/6.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/7.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/8.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/9.jpg"
        ],
        className: "课程名称",
        classStart: 5,
        classComments: 171,
        coursePrice: 89.9,
        clouseDiscount: "儿童节特价8.7折",
        oragnInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…"
      },

    ],

    commentArry:[
      { commentId:1,commentTime: "2019 年11月12日", commentName:"宋媛", commentHead:"https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",commentInfo:"评价评价评价评价评价评价评价评价评价评价评价评价评价评 评价评价评价价"},
      { commentId: 2,commentTime: "2019 年11月12日", commentName: "Esmeralda Zieme", commentHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg", commentInfo: "评价评价评价评价评价评价评价评价评价评价评价评价评价评 评价评价评价价" },
      { commentId: 3,commentTime: "2019 年11月12日", commentName: "Madge Jacobs", commentHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg", commentInfo: "评价评价评价评价评价评价评价评价评价评价评价评价评价评 评价评价评价价" },
      { commentId: 4,commentTime: "2019 年11月12日", commentName: "姚凌", commentHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg", commentInfo: "评价评价评价评价评价评价评价评价评价评价评价评价评价评 评价评价评价价" },
      { commentId: 5,commentTime: "2019 年11月12日", commentName: "孙悟空", commentHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg", commentInfo: "评价评价评价评价评价评价评价评价评价评价评价评价评价评 评价评价评价价" },
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {


  },
  // 点击主要授课处理函数
  masterHeander: function() {
    this.setData({
      btnActive: 1,
      showType: "class"
    })
    console.log(1)

  },

  // 点击主要授课处理函数
  detailsHeander: function() {
    this.setData({
      btnActive: 2,
      showType: "details"
    })
    console.log(2)

  },
  swiperHander: function () {
    var that = this

    var rotationChart = JSON.stringify(that.data.rotationChart)

    wx.navigateTo({
      url: '/pages/school/allPictures/allPictures?rotationChart=' + rotationChart,
    })

  },

  // 查看常见问题
  lookMoreHander(e) {

    var items = e.currentTarget.dataset.type;
    let that = this

  
    if (items =='major'){
      that.setData({
        bigTitle:"专业方向",
        smallTitle:"专业",
        introduction: that.data.teacherInfo.major,
        teacherName: that.data.teacherInfo.teacherName,
        shopName: that.data.teacherInfo.shopName,
        entryTime: that.data.teacherInfo.entryTime,
        classYear: that.data.teacherInfo.classYear,
        headPortrait: that.data.teacherInfo.headPortrait,  
      })
    } else if (items == 'educa'){
      that.setData({
        bigTitle: "获奖详情",
        smallTitle: "获奖",
        introduction: that.data.teacherInfo.personalHonor,
        teacherName: that.data.teacherInfo.teacherName,
        shopName: that.data.teacherInfo.shopName,
        entryTime: that.data.teacherInfo.entryTime,
        classYear: that.data.teacherInfo.classYear,
        headPortrait: that.data.teacherInfo.headPortrait, 
      })
    } else if (items == 'award') {
      that.setData({
        bigTitle: "学历经验",
        smallTitle: "学历",
        introduction: that.data.teacherInfo.graduateSchool,
        teacherName: that.data.teacherInfo.teacherName,
        shopName: that.data.teacherInfo.shopName,
        entryTime: that.data.teacherInfo.entryTime,
        classYear: that.data.teacherInfo.classYear,
        headPortrait: that.data.teacherInfo.headPortrait,  
      })
    }
   
    that.showModal();
  },
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 0)
  },
  //隐藏对话框
  hideModal: function () {
    wx.showTabBar({
      animation: false
    });
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animationw 
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 0)
  },
  // 禁止屏幕滚动
  preventTouchMove: function () {
    return true;
  },
  //跳转课程页面
  navClassHander(){

    wx.navigateTo({
      url: '../../school/cinfo/cinfo'
    })

    console.log(111111);
  }
})