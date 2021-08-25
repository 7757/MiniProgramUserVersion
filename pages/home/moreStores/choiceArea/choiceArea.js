// pages/home/moreStores/choiceArea/choiceArea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 跳转过来的市 区
    layCity:null,
    layAera:null,
    
    btnActive: 2,
    showType: "area",

    
    cityArea: [{
      city: "北京市",
        area: ["全部地区", "东城区", "西城区", "朝阳区", "石景山区", "海淀区", "通州区", "昌平区", "大兴区", "丰台区", "房山区"]
      }, {
        city: "上海市",
        area: ["全部地区", "黄浦区", "徐汇区", "长宁区", "静安区", "虹口区", "杨浦区", "闵行区", "宝山区", "浦东新区", "松江区", "嘉定区", "普陀区", "青浦区"]
      }, {
        city: "广州市",
        area: ["全部地区", "荔湾区", "越秀区", "海珠区", "天河区", "白云区", "番禺区", "花都区"]
      }, {
        city: "深圳市",
        area: ["全部地区", "罗湖区", "福田区", "南山区", "宝安区", "龙岗区", "龙华区", "光明区", "盐田区"]
      }

      , {
        city: "南京市",
        area: ["全部地区", "玄武区", "秦淮区", "鼓楼区", "浦口区", "栖霞区", "江宁区", "雨花台区", "建邺区", "溧水区", "高淳区", "六合区"]
      }

      , {
        city: "苏州市",
        area: ["全部地区", "吴中区", "姑苏区", "吴江区", "虎丘区"]
      },

      {
        city: "杭州市",
        area: ["全部地区", "上城区", "下城区", "江干区", "拱墅区", "滨江区", "萧山区", "余杭区", "西湖区"]
      },

      {
        city: "佛山市",
        area: ["全部地区", "禅城区", "南海区", "顺德区"]
      },

      {
        city: "成都市",
        area: ["全部地区", "锦江区", "金牛区", "武侯区", "成华区", "青羊区"]
      },

      {
        city: "重庆市",
        area: ["全部地区", "渝中区", "江北区", "沙坪坝区", "九龙坡区", "南岸区"]
      },
      {
        city: "西安市",
        area: ["全部地区", "未央区", "莲湖区", "新城区", "碑林区", "雁塔区"]
      },
      {
        city: "武汉市",
        area: ["全部地区", "江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "洪山区"]
      },
      {
        city: "厦门市",
        area: ["全部地区", "思明区", "湖里区"]
      },
      {
        city: "福州市",
        area: ["全部地区", "闽侯县", "仓山区", "鼓楼区", "台江区", "晋安区"]
      },
      {
        city: "无锡市",
        area: ["全部地区", "锡山区", "梁溪区", "滨湖区"]
      },
      {
        city: "常州市",
        area: ["全部地区", "天宁区", "钟楼区", "武进区", "新北区"]
      },
      {
        city: "宁波市",
        area: ["全部地区", "江北区", "鄞州区"]
      },

      {
        city: "天津市",
        area: ["全部地区", "和平区", "南开区", "西青区", "河西区", "河东区"]
      },
      {
        city: "沈阳市",
        area: ["全部地区", "和平区", "大东区", "铁西区"]
      }, 　
      {
        city: "南通市",
        area: ["全部地区", "港闸市", "崇川市"]
      },
      {
        city: "济南市",
        area: ["全部地区", "历下区", "槐萌区", "历城区"]
      },

      {
        city: "青岛市",
        area: ["全部地区", "市南区", "市北区", "崂山区"]
      },

      {
        city: "扬州市",
        area: ["全部地区", "广陵区", "邗江区"]
      },
      {
        city: "徐州市",
        area: ["全部地区", "鼓楼区", "邗江区"]
      },
      {
        city: "合肥市",
        area: ["全部地区", "庐阳区", "包河区", "蜀山区"]
      }
    ],
    // 根据城市确定区坐标
    areaindex:null,
    showIoc: 0,
    showIoa: 0,
    city:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    // 请求城市数组

    // 请求区数组

    //获取区，锁定市

  
    let cityAreaArray=that.data.cityArea;
    

 
    let index

    console.log(options.city)
    for (var i = 0; i < cityAreaArray.length; i++) {
      if (cityAreaArray[i].city == options.city){
       
        index = i
      }
      console.log(cityAreaArray[i].city)

    }

    that.setData({
      city: options.city,
      areaindex:index,
      showIoa: index
    })

    console.log(this.data.areaindex)





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


  // 点击城市
  cityHeander: function() {
    this.setData({
      btnActive: 1,
      showType: "city"
    })
  },
  // 点击全部地区
  areaHeander: function() {
    this.setData({
      btnActive: 2,
      showType: "area"
    })
  },
  //选中城市处理函数
  chooseCity: function(e) {

    
    let query = e.currentTarget.dataset.index;

  // 选择市后自动跳转区域页面
    let that = this
    let result = e.currentTarget.dataset.citys;
    console.log(query)
    that.setData({
      showIoa: query,
      areaindex:query,
      showType:'area',
      btnActive:2,

      city: result
    })

  },
  //选中区处理函数
  chooseArea: function(e) {
    let that = this

    let resultcity=that.data.city;
    let query = e.currentTarget.dataset.index;
    let result = e.currentTarget.dataset.areas;
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 2];
    that.setData({
      showIoc: query
    })

    prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      city: resultcity,
      area: result

    })
    wx.navigateBack({
      delta: 1  // 返回上一级页面。
    })

  },
})