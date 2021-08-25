//获取应用实例
var app = getApp()
var wxaSortPicker = require('../../../utils/wxaSortPicker/wxaSortPicker.js');
Page({
  data: {

    ssss: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",],
    // 排序筛选
    sortFilter: "排序筛选",
    sortFilters: null,
    // 滑动隐藏控制器
    changeStatus: true,
    // 筛选按钮激活状态
    niceClassStatus: false,
    sortFilterArray: ['综合排序', '好评优先', '教龄从高到低'],
    teacerArray: [
      {
        id: 1, teacherName: "李老师", teacherAbout: "我是EF英孚教育老师傅鹏，很高兴能有机会…", entryTime: 4, teachingAge: 8, teacherTag: ["超赞老师"], evaCount: 27, evaScope: 2, shopName:"EF英孚英语" ,morePhotos: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",]
      }, {
        id: 2, teacherName: "张老师", teacherAbout: "我是EF英孚教育老师傅鹏，很高兴能有机会…", entryTime: 2, teachingAge: 3, teacherTag: ["超赞老师"], evaCount: 28, evaScope: 5, shopName: "EF英孚英语" ,morePhotos: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",]
      }, {
        id: 3, teacherName: "徐老师", teacherAbout: "我是EF英孚教育老师傅鹏，很高兴能有机会…", entryTime: 3, teachingAge: 4, teacherTag: ["超赞老师"], evaCount: 88, evaScope: 3, shopName: "EF英孚英语" ,morePhotos: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",]
      }, {
        id: 4, teacherName: "胡老师", teacherAbout: "我是EF英孚教育老师傅鹏，很高兴能有机会…", entryTime: 5, teachingAge: 5, teacherTag: ["超赞老师"], evaCount: 64, evaScope: 4, shopName: "EF英孚英语", morePhotos: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",]
      }, {
        id: 5, teacherName: "来老师", teacherAbout: "我是EF英孚教育老师傅鹏，很高兴能有机会…", entryTime: 1, teachingAge: 2, teacherTag: ["超赞老师"], evaCount: 28, evaScope: 5, shopName: "EF英孚英语",morePhotos: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",]
      }, {
        id: 6, teacherName: "王老师", teacherAbout: "我是EF英孚教育老师傅鹏，很高兴能有机会…", entryTime: 6, teachingAge: 8, teacherTag: ["超赞老师"], evaCount: 72, evaScope: 2, shopName: "EF英孚英语" ,morePhotos: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",]
      }, {
        id: 7, teacherName: "赞老师", teacherAbout: "我是EF英孚教育老师傅鹏，很高兴能有机会…", entryTime: 2, teachingAge: 5, teacherTag: ["超赞老师"], evaCount: 28, evaScope: 3, shopName: "EF英孚英语", morePhotos: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",]
      },]

  },
  onLoad: function() {

  },
  onShow: function() {
    var that = this
  },
  wxaSortPickerItemTap: function(e) {
    console.log(e.target.dataset.text);
    console.log(e.target.dataset.value);
  },
  navTeacherHander: function() {
    wx.navigateTo({
      url: '../../school/teacherInfo/teacherInfo',
    })
  },
  // 排序筛选处理函数
  sortFilterHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'StudentType') {
      this.setData({
        istrueStudent: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  // 点击x处理函数
  removeClassHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'StudentType') {
      this.setData({
        sortFilter: '排序筛选'
      })
    }
  },

  // 超赞课程处理函数
  niceClassHander() {
    let niceClassStatuss = this.data.niceClassStatus
    this.setData({
      niceClassStatus: !niceClassStatuss,
    })
  },

  determineHanderStudent: function(e) {
    this.closeLayerStudent();
    var student = this.data.sortFilters;
    if (student == null) {
      this.setData({
        sortFilter: '排序筛选'
      })
    } else {
      this.setData({
        sortFilter: student
      })
    }

  },
  // 选择事件
  choseItem: function(e) {
    let value = e.detail.value;
    if (this.data.btnType === 'StudentType') {
      if (value == "" || value == null) {
        this.setData({
          sortFilters: '排序筛选    '
        })
      } else {
        this.setData({
          sortFilters: value
        })
      }

    }
  },
  closeLayerStudent: function() {
    this.setData({
      istrueStudent: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
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
    if (ev.scrollTop > this.data.scrollTop) {
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