Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    changeStatus:false,
    likeStatus:null,
    courseIndex:null,
    // 店铺轮播图
    rotationChart: [
      "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",
    ],
    items: {
      other: [{
          option: "取消政策",
          optionText: "所有费用的返还将按一下时间政策参考：\n1. 30天内取消，将收取50$/人的取消费；\n" +
            "2. 30 - 15天内取消，将收取150$/人的费用；\n 3. 14 - 7天内取消，将收取总用的50%；\n 4. 6 - 0天内取消，将收取总费用的100%；（不退还费用）"
        },
        {
          option: "预定须知",
          optionText: "当您对我们提供的所有的行程方案都满意并确定最终出行日期后，我们将为您进行各项预定（酒店、旅行车、导游等）" +
            "当您的预定完成，我们将通过E-mail、QQ或您提供的其他方式，发送预定确认及账单给您。您需在收到账单后15日内支付30%旅行费用定金。" +
            "如有碰到旺季酒店满房和飞机无位的情况，环亚旅游将为您推荐其他可选酒店和更改航班。在最高峰期时段，为保证您的出行计划不受耽误，环亚旅" +
            "游将保留权利再不事先通知的情况下先行更改同级其他酒店和不同时刻航班。（前提为不影响旅游行程）当您对我们提供的所有的行程方案都满意并确定最终出行日期后，我们将为您进行各项预定（酒店、旅行车、导游等）" +
            "当您的预定完成，我们将通过E-mail、QQ或您提供的其他方式，发送预定确认及账单给您。您需在收到账单后15日内支付30%旅行费用定金。" +
            "如有碰到旺季酒店满房和飞机无位的情况，环亚旅游将为您推荐其他可选酒店和更改航班。在最高峰期时段，为保证您的出行计划不受耽误，环亚旅" +
            "游将保留权利再不事先通知的情况下先行更改同级其他酒店和不同时刻航班。（前提为不影响旅游行程）当您对我们提供的所有的行程方案都满意并确定最终出行日期后，我们将为您进行各项预定（酒店、旅行车、导游等）" +
            "当您的预定完成，我们将通过E-mail、QQ或您提供的其他方式，发送预定确认及账单给您。您需在收到账单后15日内支付30%旅行费用定金。" +
            "如有碰到旺季酒店满房和飞机无位的情况，环亚旅游将为您推荐其他可选酒店和更改航班。在最高峰期时段，为保证您的出行计划不受耽误，环亚旅" +
            "游将保留权利再不事先通知的情况下先行更改同级其他酒店和不同时刻航班。（前提为不影响旅游行程）当您对我们提供的所有的行程方案都满意并确定最终出行日期后，我们将为您进行各项预定（酒店、旅行车、导游等）" +
            "当您的预定完成，我们将通过E-mail、QQ或您提供的其他方式，发送预定确认及账单给您。您需在收到账单后15日内支付30%旅行费用定金。" +
            "如有碰到旺季酒店满房和飞机无位的情况，环亚旅游将为您推荐其他可选酒店和更改航班。在最高峰期时段，为保证您的出行计划不受耽误，环亚旅" +
            "游将保留权利再不事先通知的情况下先行更改同级其他酒店和不同时刻航班。（前提为不影响旅游行程）当您对我们提供的所有的行程方案都满意并确定最终出行日期后，我们将为您进行各项预定（酒店、旅行车、导游等）" +
            "当您的预定完成，我们将通过E-mail、QQ或您提供的其他方式，发送预定确认及账单给您。您需在收到账单后15日内支付30%旅行费用定金。" +
            "如有碰到旺季酒店满房和飞机无位的情况，环亚旅游将为您推荐其他可选酒店和更改航班。在最高峰期时段，为保证您的出行计划不受耽误，环亚旅" +
            "游将保留权利再不事先通知的情况下先行更改同级其他酒店和不同时刻航班。（前提为不影响旅游行程）"
        },
        {
          option: "个人信息",
          optionText: "所有顾客需对您的身体健康状态负责，如您有自身的身体不适请事先通知您的旅行顾问。我们对任何隐瞒身体疾病而没有事先通知，而在旅途中造成的损失和意外不负任何责任。"
        },
        {
          option: "出行信息",
          optionText: "南京地铁1号线医科药学大学方向 天隆寺地铁站下车 2号出口 公交站  乘公交88路 宁双路站台下车"
        },
        {
          option: "温馨提示",
          optionText: "近期天气寒冷 伴有小中雨 请注意保暖及交通安全"
        },
        {
          option: "适合人数",
          optionText: "单份2人"
        },
      ],
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var flag = options.likeStatus
    
    this.setData({
      likeStatus: JSON.parse(flag),
      courseIndex: options.index
    })



   

    
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
  onShareAppMessage: function(res) {
      // 接受当前数据的的下标，
    return {
      title: '这是一门很棒的课',
      desc: '快来给跟我一起学习吧',
    }



  },
  looksou: function() {
    wx.navigateTo({
      url: '../../school/assess/assess', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })
  },
  mthe :function(){
    wx.navigateTo({
      url: '../../school/teacher/teacher', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })
  },
  otherinfos: function(e) {
    var that = this;
    var items = this.data.items.other[e.currentTarget.dataset.index];
    that.setData({
      istrue: true,
      title: items.option,
      text: items.optionText
    })
    that.showModal();
  },

  navTeacherDeatils: function(){
      wx.navigateTo({
        url: '../../school/teacherInfo/teacherInfo',
      })
  },
  purchaseHander:function(){
    wx.navigateTo({
      url: '../../school/orderdetails/orderdetails',
    })
  },//监听屏幕滚动 判断上下滚动
  onPageScroll: function (ev) {
    var animation= wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })

    this.animation=animation;
    this.animation.translateY(200).step();

    

    var _this = this;
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      console.log(ev.scrollTop)
      if (ev.scrollTop > 311) {
        this.setData({ changeStatus: true })
      }
  
      //向下滚动
    } else {
      console.log(ev.scrollTop +  '向上滚动')
      if (ev.scrollTop<=0){
        _this.setData({ 
          suspension:_this.animation.export()
          })
        setTimeout(function () {
          _this.setData({
            changeStatus: false 
          })
        }.bind(this), 400)

        setTimeout(function () {
          _this.animation.translateY(0).step()
          this.setData({
            suspension: animation.export()
          })
        }.bind(this), 400)
      }
      //向上滚动
   
    }
    //给scrollTop重新赋值
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },
  // 点赞函数

  likeItHander(){
    
    this.setData({
      likeStatus: !this.data.likeStatus
    })

    let pages = getCurrentPages(); 
    let prevPage = pages[pages.length - 2];
    let index = this.data.courseIndex
 
    let stauts = 'courseArray[' + index+'].collectionStatus'
    prevPage.setData({  
      [stauts]: this.data.likeStatus
    })
  
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
  // 禁止屏幕滚动
  preventTouchMove: function () {
    return true;
  },
  // 查看机构大图
  lookPrickHander(e){
    var that = this
    var rotationChart = JSON.stringify(that.data.rotationChart)

    wx.navigateTo({
      url: '/pages/school/cinfo/shopDetailPrice/shopDetailPrice?rotationChart=' + rotationChart,
    })

  }

})