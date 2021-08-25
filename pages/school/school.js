Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortFilterArray: ['综合排序', '好评优先', '价格由高到低', '收藏最多', '价格从低到高'],
    // 滑动隐藏控制器
    changeStatus: true,
    courseArray : [
      {
      courseId: 1,
      courseName: "初级语法课",
      shopInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…",
      newCourse: true,
      evaluateCount: 0,
      coursePrice: 199,
      activeName: "儿童节特价 8.7 折",
      collectionStatus: false,
      imgUrls: [{
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203509.jpg',
      },
      {
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203559.jpg',
      },
      {
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203623.jpg',
      },
      {

        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203649.jpg',
      },
      {

        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203740.jpg',
      }
      ],

    },
    {
      courseId: 2,
      courseName: "超级忍术课",
      shopInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…",
      newCourse: false,
      evaluateCount: 255,
      coursePrice: 99,
      statrCount: 3,
      collectionStatus: false,
      activeName: "儿童节特价 8.7 折",
      imgUrls: [{
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203509.jpg',
      },
      {
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203559.jpg',
      },
      {
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203623.jpg',
      },
      {

        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203649.jpg',
      },
      {

        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203740.jpg',
      }
      ],

    },
    {
      courseId: 3,
      courseName: "超级算法课",
      shopInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…",
      newCourse: false,
      evaluateCount: 146,
      coursePrice: 399,
      activeName: "儿童节特价 8.7 折",
      statrCount: 4,
      collectionStatus: false,
      imgUrls: [{
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203509.jpg',
      },
      {
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203559.jpg',
      },
      {
        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203623.jpg',
      },
      {

        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203649.jpg',
      },
      {

        link: '点击跳转路径',
        url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203740.jpg',
      }
      ],

      }, {
        courseId: 4,
        courseName: "超级算法课",
        shopInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…",
        newCourse: false,
        evaluateCount: 146,
        coursePrice: 399,
        activeName: "儿童节特价 8.7 折",
        statrCount: 4,
        collectionStatus: false,
        imgUrls: [{
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203509.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203559.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203623.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203649.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203740.jpg',
        }
        ],

      }, {
        courseId: 5,
        courseName: "超级算法课",
        shopInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…",
        newCourse: false,
        evaluateCount: 146,
        coursePrice: 399,
        activeName: "儿童节特价 8.7 折",
        statrCount: 4,
        collectionStatus: false,
        imgUrls: [{
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203509.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203559.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203623.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203649.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203740.jpg',
        }
        ],

      }, {
        courseId: 6,
        courseName: "超级算法课",
        shopInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…",
        newCourse: false,
        evaluateCount: 146,
        coursePrice: 399,
        activeName: "儿童节特价 8.7 折",
        statrCount: 4,
        collectionStatus: false,
        imgUrls: [{
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203509.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203559.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203623.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203649.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203740.jpg',
        }
        ],

      }, {
        courseId: 7,
        courseName: "超级算法课",
        shopInfo: "机构介绍机构介绍机构介绍机构介绍机构介绍…",
        newCourse: false,
        evaluateCount: 146,
        coursePrice: 399,
        activeName: "儿童节特价 8.7 折",
        statrCount: 4,
        collectionStatus: false,
        imgUrls: [{
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203509.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203559.jpg',
        },
        {
          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203623.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203649.jpg',
        },
        {

          link: '点击跳转路径',
          url: 'https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203740.jpg',
        }
        ],

      },
    
    ],

    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //#自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: true, //4跳1
    // 筛选按钮激活状态
    niceClassStatus: false,
    seasonStatus: false,

    // 排序筛选
    sortFilter: "排序筛选",
    sortFilters: null,
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
  sousuo: function (e) {
    wx.navigateTo({
      url: '../school/search/search', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })
  },
  toinfo: function (e) {
    
    wx.navigateTo({
      url: '../school/cinfo/cinfo?likeStatus=' + e.currentTarget.dataset.status + '&index=' + e.currentTarget.dataset.inx,//跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
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
  closeLayerStudent: function () {
    this.setData({
      istrueStudent: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
  determineHanderStudent: function (e) {
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
  // 点击x处理函数
  removeClassHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'StudentType') {
      this.setData({
        sortFilter: '排序筛选'
      })
    }
  },
  // 选择事件
  choseItem: function (e) {
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

  // 超赞课程处理函数
  niceClassHander() {
    let niceClassStatuss = this.data.niceClassStatus
    this.setData({
      niceClassStatus: !niceClassStatuss,
    })
  },
  // 当季活动处理函数
  seasonActivHander() {
    let seasonStatuss = this.data.seasonStatus
    this.setData({
      seasonStatus: !seasonStatuss,
    })
  },
  // 收藏
  collectionHander(e) {
    var index = e.currentTarget.dataset.index;
    var item = this.data.courseArray[index];
    item.collectionStatus = !item.collectionStatus;
    this.setData({
      courseArray: this.data.courseArray,
    });


  },


  onPageScroll: function (ev) {
    var _this = this;
    let courseNotices = _this.data.courseNotice
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    }
    // } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
    //   ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    // }

    console.log(wx.getSystemInfoSync().windowHeight+"手机高度")
      // || ev.scrollTop == wx.getSystemInfoSync().windowHeight
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop ) {


      //向下滚动 在这个地方处理开启通知
     
      this.setData({
        changeStatus: false
      })

    } else {
      //向上滚动
     
      this.setData({
        changeStatus: true
      })

    }
    //给scrollTop重新赋值
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },

})