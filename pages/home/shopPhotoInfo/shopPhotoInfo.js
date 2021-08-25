// pages/home/shopPhotoInfo/shopPhotoInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s: true,
    //
    change: [{
      // 控制字体
      chooseFont: "快速浏览",
      // 控制展示风格
      viewFlag: "big",
      typeIco: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/allPictures/samllPic.png",
    }, {
      // 控制字体
      chooseFont: "查看大图",
      // 控制展示风格
      viewFlag: "small",
      typeIco: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/allPictures/BigPic.png",
    }],
    // 轮播图

    rotationChart: ["https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg", ],

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
  /**
   * 切换视图处理函数
   */
  switchView: function (e) {
    let that = this;
    let query = e.currentTarget.dataset['s']
    that.setData({
      s: !that.data.s
    })
  },

  previewImage: function (e) {
    let current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.rotationChart
    })
  },
})