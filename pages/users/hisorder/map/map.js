// pages/users/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 24.4795100000,
    longitude: 118.0894800000,
    markers: [
      {
        id: 0,
        latitude: 24.4455700000,
        longitude: 118.0824000000,
        callout: {
          content: " 厦门思明区政府",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center',
        
        }

      }
      ,
      {
        id: 2,
        latitude: 24.7235700000,
        longitude: 118.1517300000,
        callout: {
          content: " 厦门市同安区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
      {
        id: 3,
        latitude: 24.5759000000,
        longitude: 118.0972700000,
        callout: {
          content: " 厦门市集美区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
      {
        id: 4,
        latitude: 24.4846000000,
        longitude: 118.0329300000,
        callout: {
          content: " 厦门市海沧区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },
      {
        id: 5,
        latitude: 24.6196000000,
        longitude: 118.2478900000,
        callout: {
          content: " 厦门市翔安区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }

      },

  ],
    mapWidth: '',
    mapHeight: ''

    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sy = wx.getSystemInfoSync(),
      mapWidth = sy.windowWidth * 2,
      mapHeight = sy.windowHeight * 2;
    this.setData({
      mapWidth: mapWidth,
      mapHeight: mapHeight
    })

  
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

  }
})