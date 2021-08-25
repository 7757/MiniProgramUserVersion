const app = getApp();

var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,

    // 是否需是转课订单
    items: {
      courseName:"初级语法课",
      schoolimage: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test4.jpg",
      schoolName: "南京华彩奥体中心",
      introduction: "文字介绍文字文 字文字介绍文字介绍文字介绍…",
      effectivetime: "2019-12-18",
      f_botten: "查看更多订单信息",
      course: [{
        pname: "原价",
        price: "288.00"
      }, {
        pname: "儿童节八折",
        price: "-50.00"
      }, {
        pname: "其他",
        price: "-50.00"
      }],
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
      ],
      sumPrice: "188.00",
      addressName: "南京华彩奥体中心",
      addressInfo: "江苏省南京市雨花台区安德门大街40号雨花客厅2号商务楼101",
      orderNumber: "19121912562577886",
      orderTime: "2019-12-19 12:56:25"
    }
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
  otherinfos: function(e) {
    var that = this;
    var items = this.data.items.other[e.currentTarget.dataset.index];
    this.setData({
      istrue: true,
      title: items.option,
      text: items.optionText
    })
    that.showModal();
  },

  bodadianhua() {
    wx.makePhoneCall({
      phoneNumber: app.globalData.kefuNumber //客服电话
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
  //点击到这里去处理函数

  goToShopHander() {
    wx.navigateTo({
      url: '../../../users/hisorder/map/map',
    })
  }



})