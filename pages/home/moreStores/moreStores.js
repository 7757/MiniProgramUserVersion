var QQMapWX = require('../../../utils/map/qqmap-wx-jssdk.js')

var qqmapsdk  = new QQMapWX({
  key: 'RUPBZ-GMU6U-3TOVU-4AR7B-SBKHH-FNFVN' // 必填
}); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop:{},
    markers:[],
    // 默认值
   shopIndex:null,

    city:'',
    area:"全部地区"

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let queryBean = JSON.parse(options.queryBean);
    let s = queryBean.map(item => {
      return { id: item.id, longitude: item.longitude, latitude: item.latitude, name: item.shopAddress }
    })
    that.setData({
      shop: queryBean,
      markers: s
    })
  

  
  
    qqmapsdk.reverseGeocoder({
      //位置坐标，默认获取当前位置，非必须参数
     
       //Object格式
        location: {
          latitude: s[0].latitude,
          longitude: s[0].longitude
        },
      
      success: function (res) {//成功后的回调
        console.log(res);
      
        
        // //当get_poi为0时或者为不填默认值时，检索目标位置，按需使用
        // mks.push({ // 获取返回结果，放到mks数组中
        //   title: res.address,
        //   id: 0,
        //   latitude: res.location.lat,
        //   longitude: res.location.lng,
        //   iconPath: './resources/placeholder.png',//图标路径
        //   width: 20,
        //   height: 20,
        //   callout: { //在markers上展示地址名称，根据需求是否需要
        //     content: res.address,
        //     color: '#000',
        //     display: 'ALWAYS'
        //   }
        // });
        // _this.setData({ //设置markers属性和地图位置poi，将结果在地图展示
        //   markers: mks,
        //   poi: {
        //     latitude: res.location.lat,
        //     longitude: res.location.lng
        //   }
        // });

        that.setData({
          city: res.result.address_component.city
        })

      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        
      }

     
    })
   
  



    
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
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

  // 选择地区事件处理函数
  choiceArea :function(){
    let city=this.data.city;
    wx.navigateTo({
      url: '/pages/home/moreStores/choiceArea/choiceArea?city=' + city,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

// 点击位置切换坐标
  moveToLocation: function (e) {
    let query = e.currentTarget.dataset['index']
    this.mapCtx.moveToLocation({
      latitude: this.data.markers[query].latitude,
      longitude: this.data.markers[query].longitude,
      success:function(e){
      }
    })
  },
  // 进店处理函数
  intoShopHander(e){
    let that= this;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面
    let curr = e.currentTarget.dataset.index
    let distance = e.currentTarget.dataset.distance
    
    that.setData({
      shopIndex: curr,
    })
    if (distance>10){
      that.showCancelOrder();
    }else{
    wx.navigateBack({
          delta: 1,
          success(){
            prevPage.setData({
              shopIndex: curr
            })
          }
        })
    }
    

  },

  showCancelOrder: function () {
    this.setData({
      showModal: true
    })
  },
  modal_click_Hidden: function () {
    this.setData({
      showModal: false,
    })
  },
  // 确定
  Sure: function () {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面
    let that=this;
    wx.navigateBack({
      delta: 1,
      success() {
        prevPage.setData({
          shopIndex: that.data.shopIndex
        })
        this.setData({
          showModal: false
        })
      }
    })
  
  },

  

  

})