// pages/amtCourse.js

var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
 //  showModal: false,
  
  data: {
    showDialog: false,
 
    tipsContent:"已成功预约到心仪的课程",

    // 预约成功对象
    amtClass:{
      amtTime:"添加时间",
      amtTeacher:"选择老师",
      amtClassInfo:"安排课程"
    },
    //可预约课程列表
    amtClassList:['初级语法课','高级语法课','儿童文学','奥数新天地','新现代思想','少儿编程','插花艺术','方程式赛车'],

    dataInfo:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 查看手机型号
    let isIphoneX = app.globalData.isIphoneX;
    let isIphoneXR = app.globalData.isIphoneXR;
    this.setData({
      isIphoneX: isIphoneX,
      isIphoneXR: isIphoneXR
    })




    // 获取用户信息

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

  },
  // 点击添加时间处理函数
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  // 点击重置处理函数
  resetHander:function (){
    let classDate = 'amtClass.amtTime'
    let teacher = 'amtClass.amtTeacher'
    let className = 'amtClass.amtClassInfo'
      this.setData({
        [classDate]: "添加时间",
        [teacher]: "选择老师",
        [className]: "安排课程"
      })
  },
  // 点击确定处理函数
  nextHander: function (e) {
    // let classDate = e.currentTarget.dataset.classDate
    // let teacher = e.currentTarget.dataset.classTeacher
    // let className = e.currentTarget.dataset.className
    // classDate, teacher, className
    let that=this;
    let classDate = this.data.amtClass.amtTime
    let teacher = this.data.amtClass.amtTeacher
    let className = this.data.amtClass.amtClassInfo


 
    if (classDate != '添加时间' && teacher != '选择老师' && className != '安排课程'){
      that.setData({
        tipsContent: "已成功预约到心仪的课程"
      })
      that.showModals();
    }else{
      that.setData({
        tipsContent: "无法预约,信息选择不完整"
      })
      that.showModal(); 
    }
   
  },

  // 禁止屏幕滚动
  preventTouchMove: function () {
  },

  showModal: function () {
    // 显示遮罩层
    // classDate, teacher, className
    // this.setData({
    //   animationData: animation.export(),
    //   showModalStatus: true
    // })
    var animation = wx.createAnimation({
      duration: 200,
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
    }.bind(this), 200)
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
    this.animation = animation
    animation.translateY(0).step()
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
  // 选择事件页面
  addTime :function(){
    wx.navigateTo({
      url: 'selectTime/selectTime',
    })
  },
  //点击老师事件处理函数 
  chooseTeacher:function(){

    
  },
  chooseClass:function(){
   
    this.setData({
      istrue: true
    })
  }
  ,
  closeLayer: function () {
    this.setData({
      istrue: false
    })
   

  },
  // 选择课程事件处理函数
  choseItem:function(e){
    let that = this;
    let  s= e.detail.value
   
    that.setData({
      dataInfo: s 
    })
  },
  // 确定事件处理函数
  determineHander:function(e){
    let className = this.data.dataInfo
    let classNames ='amtClass.amtClassInfo'
    let that= this;
    if (className == null || className==''){
      console.log(className+"记录");
      that.setData({
        [classNames]: "安排课程",
      })
    }else{
      that.setData({
        [classNames]: className,
      })
    }
    this.closeLayer();

    
  },
  // 预约老师
  chooseTacher:function(){
      wx.navigateTo({
        url: 'addTeacher/addTeacher',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },

// 预约成功提醒
 // 点击确定处理函数
  Sure: function () {
    let that=this;
    that.hideModals();

  // 在此处请求后台
    setTimeout(function () {
      that.showModal();
    }.bind(that), 1000)
  
    setTimeout(function () {
      that.hideModal();
    }.bind(that), 3000)
    setTimeout(function () {
      wx.navigateBack({
        delta: 2,
      })
    }.bind(that), 4000)
   

  },
  showModals: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      ssss: animation.export(),
      showModalStatuss: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        ssss: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModals: function () {
    wx.showTabBar({
      animation: false
    });
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(0).step()
    this.setData({
      ssss: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        ssss: animation.export(),
        showModalStatuss: false
      })
    }.bind(this), 0)
  },

// 取消处理函数

  modal_click_Hidden(){
    this.hideModals();
  }

})