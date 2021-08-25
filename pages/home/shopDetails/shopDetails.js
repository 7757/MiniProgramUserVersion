// pages/shopDetails/shopDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop: {
      shopId: 1,
      shopName: "江宁景枫店",
      shopDistance: 0.8,
      shopTripInfo: "乘坐地铁1号百家湖站，从2号出口，进入 金鹰百家湖商场，进入景枫凤凰台，乘坐电梯至3楼，威尔士健身旁。",
      shopTelephone: 83368889,
      // 营业范围
      scopeBusin: "周一至周日",
      shopTime: "10:00-21:30",
      ohterInfo: "有机会交易是缘分,开心合作是最重要的,如果你买了满意请告诉大家,如果你不满意请告诉我,我想任何事都是可以通过交流和协商解决的,因为我相信大家跟"

    }
  },

  // 查看更多档案信息的处理函数
  lookMoreDetails: function() {
    // 传递店铺id
    wx.navigateTo({
      url: '/pages/home/shopPhotoInfo/shopPhotoInfo',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 根据传过来的信息获取门店详细信息
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

  }
})