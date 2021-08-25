Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    organName:"EF英柯英语",
    // 滑动隐藏控制器
    changeStatus: true,
    // 新的评价数
    conterCount: 0,
    //新的评价点击状态
    conterStatus: false,
    //评论回复
    reponse: 0,
    reponseStatus: false,
    selectedEvame: "评语",
    selectedRepoe: "回复",

    //老师课程对象
    teacherArray: [
      {
        id: 1,
        classTime: "2019年10月26日 9:30-10:30",
        className: "初级语法课初级语",
        schoolArea: "雨花安德门校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "",
        teacherName: "张老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg", entryTime: 2018, teachingAgeA: 5, achievement: 89,
        ranking: 15,
        evaluateResponeStatus: 2,
        evaluateStatus:true,


      },
      {
        id: 2,
        classTime: "2019年9月26日 9:30-10:30",
        className: "初级语法课初级语",
        schoolArea: "鼓楼三牌楼校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "课程介绍课程介绍课程介绍课程介绍课程介课…",
        teacherName: "李老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2013,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 27,
        evaluateResponeStatus: 0,
        evaluateStatus: false,
      },
      {
        id: 3,
        classTime: "2019年11月26日 9:30-10:30",
        className: "初级语法课初级语",
        schoolArea: "江宁景枫校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "课程介绍课程介绍课程介绍课程介绍课程介课…",
        teacherName: "来老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2020,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 16,
        evaluateResponeStatus: 1,
        evaluateStatus: true,
      },
      {
        id: 4,
        classTime: "2019年10月26日 9:30-10:30",
        className: "初级语法课初级语",
        schoolArea: "雨花安德门校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "",
        teacherName: "张老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg", entryTime: 2018, teachingAgeA: 5, achievement: 89,
        ranking: 15,
        evaluateResponeStatus: 2,
        evaluateStatus: true,


      },
      {
        id: 5,
        classTime: "2019年9月26日 9:30-10:30",
        className: "初级语法课初级语",
        schoolArea: "鼓楼三牌楼校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "课程介绍课程介绍课程介绍课程介绍课程介课…",
        teacherName: "李老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2013,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 27,
        evaluateResponeStatus: 0,
        evaluateStatus: false,
      },
      {
        id: 6,
        classTime: "2019年11月26日 9:30-10:30",
        className: "初级语法课初级语",
        schoolArea: "江宁景枫校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "课程介绍课程介绍课程介绍课程介绍课程介课…",
        teacherName: "来老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2020,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 16,
        evaluateResponeStatus: 1,
        evaluateStatus: true,
      },
    ],
    // 按钮类型
    btnType: '',
    selectedCourse: '课程',
    selectedCourses: null,
    selectedTeacher: '老师',
    selectedTeachers: null,
    selectedSchool: '校区',
    selectedSchools: null,
    selectedDate: '时间',
    selectedTime: '全部',
    //弹出层评价 
    layerEvaluate: {
      id: 0,
      calssEvaluate: "",
      classTeacherHead: "",
      teacherName: "",
      entryTime: 0,
      // 教龄
      teachingAgeA: 0,
    },
    //弹出层课程介绍 
    layerInfo: {
      id: 0,
      classInfo: "",
      className :"",
      classTeacherHead: "",
      teacherName: "",
      entryTime: 0,
      // 教龄
      teachingAgeA: 0,
    },
  },
  openDialog: function () {
    this.setData({
      istrue: true
    })
  },
  closeDialog: function () {
    this.setData({
      istrue: false
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

  },
  topingjia: function () {
    wx.navigateTo({
      url: '../annal/appraise/appraise'
    })
  },
  //选择老师处理函数
  chenckTeacherHander: function (e) {
    let that = this
    if (e.currentTarget.dataset.type === 'teacherType') {
      this.setData({
        istrue3: true,
        btnType: e.currentTarget.dataset.type
      })
    }

  },

  //选择日期处理函数
  chenckTimeHander: function (e) {
    wx.navigateTo({
      url: '../annal/addTime/addTime'
    })
  },

  //选择课程处理函数
  chenckClassHander: function (e) {
    let that = this
    if (e.currentTarget.dataset.type === 'courseType') {
      this.setData({
        istrue1: true,
        btnType: e.currentTarget.dataset.type
      })
    }

  },

  //选择校区处理函数
  chenckSchoolHander: function (e) {
    if (e.currentTarget.dataset.type === 'schoolType') {
      this.setData({
        istrue2: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  //
  commentHander: function (e) {
    
    let index=e.currentTarget.dataset.index

    let count = e.currentTarget.dataset.count
    let evaluate = e.currentTarget.dataset.evaluate
    
    let obj = this.data.teacherArray[index]
    let data = JSON.stringify(obj);
    console.log(count)
    if (count>0){
      wx.navigateTo({
        url: '../annal/evalu/evalu?data=' + data
      })
    } else if (count == 0 && evaluate){
      wx.navigateTo({
        url: '../annal/evaluLook/evaluLook' 
    })
    }else{
      wx.navigateTo({
        url: '../annal/appraise/appraise?index=' + index 
      })
    }

    
  },

  // 关闭遮罩1
  closeLayer1: function () {
    this.setData({
      istrue1: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },

  // 关闭遮罩2
  closeLayer2: function () {
    this.setData({
      istrue2: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
  // 关闭遮罩3
  closeLayer3: function () {
    this.setData({
      istrue3: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
  // 确定事件处理函数
  determineHander1: function (e) {
    this.closeLayer1();
    var than =this;
    let selectedCourses = than.data.selectedCourses;
    if (selectedCourses===null){
      than.setData({
        selectedCourse: '课程'
      })
    }else{
      than.setData({
        selectedCourse: selectedCourses
      })
    }
  },
  determineHander2: function (e) {
    this.closeLayer2();
    var than = this;
    let selectedSchools = than.data.selectedSchools;
    if (selectedSchools ===null) {
      than.setData({
        selectedSchool: '校区'
      })
    } else {
      than.setData({
        selectedSchool: selectedSchools
      })
    }
  },  // 确定事件处理函数
  determineHander3: function (e) {
    this.closeLayer3();
    var than = this;
    let selectedTeachers = than.data.selectedTeachers;
    if (selectedTeachers === null) {
      than.setData({
        selectedTeacher: '老师'
      })
    } else {
      than.setData({
        selectedTeacher: selectedTeachers
      })
    }
  },
  //选择时间
  choseItem: function (e) {
    let value = e.detail.value;
    if (this.data.btnType === 'courseType') {
      this.setData({ selectedCourses: value })
    } else if (this.data.btnType === 'schoolType') {
      this.setData({ selectedSchools: value })
      

    } if (this.data.btnType === 'teacherType') {
      this.setData({ selectedTeachers: value })
    
    }

  },
  
//查看更多评价信息
  keepOnComment: function (e) {
    let curr = e.currentTarget.dataset.index
    let eva = e.currentTarget.dataset.eva
    let id = 'layerEvaluate.id';
    let calssEvaluate = 'layerEvaluate.calssEvaluate';
    let classTeacherHead = 'layerEvaluate.classTeacherHead';
    let teachingAgeA = 'layerEvaluate.teachingAgeA';
    let teacherName = 'layerEvaluate.teacherName';
    let entryTime = 'layerEvaluate.entryTime';
    let that = this
    
    that.setData({
      [id]: that.data.teacherArray[curr].id,
      [calssEvaluate]: that.data.teacherArray[curr].calssEvaluate,
      [classTeacherHead]: that.data.teacherArray[curr].classTeacherHead,
      [teachingAgeA]: that.data.teacherArray[curr].teachingAgeA,
      [teacherName]: that.data.teacherArray[curr].teacherName,
      [entryTime]: that.data.teacherArray[curr].entryTime
    })
    if(eva.length>0){
      that.showModal();
    }
    
 
  },

  //查看更多教案信息
  keepOnRecord: function (e) {
    let curr = e.currentTarget.dataset.index
    let id = 'layerInfo.id';
    let classInfo = 'layerInfo.classInfo';
    let className = 'layerInfo.className';
    let classTeacherHead = 'layerInfo.classTeacherHead';
    let teachingAgeA = 'layerInfo.teachingAgeA';
    let teacherName = 'layerInfo.teacherName';
    let entryTime = 'layerInfo.entryTime';
    let that = this

    that.setData({
      [id]: that.data.teacherArray[curr].id,
      [classInfo]: that.data.teacherArray[curr].classInfo,
      [className]: that.data.teacherArray[curr].className,
      [classTeacherHead]: that.data.teacherArray[curr].classTeacherHead,
      [teachingAgeA]: that.data.teacherArray[curr].teachingAgeA,
      [teacherName]: that.data.teacherArray[curr].teacherName,
      [entryTime]: that.data.teacherArray[curr].entryTime
    })
    that.showModals();

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
    this.animation = animation
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

  // 课程介绍
  showModals: function () {
    // 显示遮罩层
    var animations = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animations = animations
    animations.translateY(300).step()
    this.setData({
      sssss: animations.export(),
      showModalStatuss: true
    })
    setTimeout(function () {
      animations.translateY(0).step()
      this.setData({
        sssss: animations.export()
      })
    }.bind(this), 0)
  },
  //隐藏对话框
  hideModals: function () {
    wx.showTabBar({
      animations: false
    });
    // 隐藏遮罩层
    var animations = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animations = animations
    animations.translateY(300).step()
    this.setData({
      sssss: animations.export(),
    })
    setTimeout(function () {
      animations.translateY(0).step()
      this.setData({
        sssss: animations.export(),
        showModalStatuss: false
      })
    }.bind(this), 0)
  },
  // 禁止屏幕滚动
  preventTouchMove: function () {
    return true;
  },
 
  // 点击x处理函数
  removeHander(e) {

    let that = this
    if (e.currentTarget.dataset.type === 'teacherType') {

      that.setData({
        selectedTeacher: '老师'
      })
    } else if (e.currentTarget.dataset.type === 'dateType') {
      that.setData({
        selectedDate: '时间',
      })
    } else if (e.currentTarget.dataset.type === 'schoolType') {
      that.setData({
        selectedSchool: '校区',
      })
    } else if (e.currentTarget.dataset.type === 'ccourseType') {
      that.setData({
        selectedCourse: '课程',
      })
    } 
  },

  // 点击新的评价处理函数
  allEvameHander(e) {
    let conterStatuss = this.data.conterStatus;

    if (e.currentTarget.dataset.type === 'EvameType') {
      this.setData({
        conterStatus: !conterStatuss,
      })
    }

  },
  // 点击评论回复处理函数
  allRepoeHander(e) {
    let reponseStatuss = this.data.reponseStatus;

    if (e.currentTarget.dataset.type === 'RepoeType') {
      this.setData({
        reponseStatus: !reponseStatuss,
      })
    }

  },

  //监听屏幕滚动 判断上下滚动
  onPageScroll: function (ev) {
    var _this = this;
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } 


    // else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
    //   ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    // }|| ev.scrollTop == wx.getSystemInfoSync().windowHeight
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop ) {
      this.setData({
        changeStatus: false
      })
    } else {
      this.setData({
        changeStatus: true
      })
    }
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },


  


})