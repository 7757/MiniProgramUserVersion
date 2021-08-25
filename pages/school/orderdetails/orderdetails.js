// pages/school/orderdetails/orderdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    commonProblem: [{ id: 1, title: "取消政策", content: "客户在接受商品订购与送货的同时，有义务遵守以下交易条款。您在京东下订单之前或接受送货之前，请您仔细阅读以下条款：" }, { id: 2, title: "预定须知", content: " 争议处理：如果客户与之间发生任何争议，可依据当时双方所认定的协议及相关法律进行解决" }, { id: 3, title: "个人信息", content: "如果一个ID帐号在一个月内有过1次以上或一年内有过3次以上（不含本数），因非因原因导致拒收配送的商品" }]

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
  showModalPrice: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationPriceData: animation.export(),
      priceStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationPriceData: animation.export()
      })
    }.bind(this), 0)
  },
  //隐藏对话框
  priceHideModal: function () {
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
      animationPriceData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationPriceData: animation.export(),
        priceStatus: false
      })
    }.bind(this), 0)
  },
  // 禁止屏幕滚动
  preventTouchMove: function () {
  },
  // 点击明细处理函数
  priceDetails: function () {
    this.showModalPrice();
  },
  jobNumberInput(e){

  },
  // 查看常见问题
  lookProblemHander(e){
    
    var that = this;
    var items = this.data.commonProblem[e.currentTarget.dataset.index];
    that.setData({
      title: items.title,
      text: items.content
    })
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
})