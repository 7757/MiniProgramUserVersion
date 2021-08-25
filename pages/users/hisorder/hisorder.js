Page({

  /**
   * 页面的初始数据
   */
  data: {

    items: [{
      images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test4.jpg",
      f_title: "初级语法课",
      f_time: "2019-12-18 08:12:25",
      f_botten: "订单详情",
      transferStatus:false,
    }, {
      images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test1.jpg",
      f_title: "高级语法课",
      f_time: "2019-12-20 12:12:25",
      f_botten: "订单详情",
        transferStatus: false,
    }, {
      images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test2.jpg",
      f_title: "中级语法课",
      f_time: "2019-12-22 16:12:25",
      f_botten: "订单详情",
        transferStatus: true,
    }, {
      images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test3.jpg",
      f_title: "高级奥数课",
      f_time: "2019-12-25 09:12:25",
      f_botten: "订单详情",
        transferStatus: false,
    }, {
      images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test4.jpg",
      f_title: "初级体育课",
      f_time: "2019-12-29 12:12:25",
      f_botten: "订单详情",
        transferStatus: false,
    }, {
      images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test6.jpg",
      f_title: "高级物理课",
      f_time: "2019-12-30 11:12:25",
      f_botten: "订单详情",
        transferStatus: true,
    }, {
      images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/myfavorite.jpg",
      f_title: "初级物理课",
      f_time: "2019-12-31 15:12:25",
      f_botten: "订单详情",
        transferStatus: true,
    }]
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
  infos: function(e) {
    let status = e.currentTarget.dataset.status
    if (status){
      wx.navigateTo({
        url: '../../users/hisorder/transferClass/transferClass' 
      })
    }else{
      wx.navigateTo({
        url: '../../users/hisorder/details/details'
      })
    }
   

  }
})