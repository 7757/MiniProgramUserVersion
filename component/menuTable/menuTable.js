// components/Menu/menu.js
var systemInfo = wx.getSystemInfoSync();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,//是否已经弹出
    animMain: {},//旋转动画
    animAdd: {},//item位移,透明度
    animDelLots: {},//item位移,透明度
    weekCount:6,
    donghua:null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击弹出或者收起
    showOrHide: function () {

      // var query = wx.createSelectorQuery();
      // //选择id
      // var that = this;
      // query.select('.timetable_content').boundingClientRect(function (rect) {
      //   console.log(rect.width);
      //   that.setData({
      //     width: rect.width
      //   })

      // }).exec();
      


      if (this.data.isShow) {
        //缩回动画
        this.setData({
          isShow: false,
          donghua:'donghua02'
        })
      } else {
        //弹出动画
        this.setData({
          isShow: true,
          donghua:'donghua01'
        })
      }
    },

    navTbaleHander: function (e) {
      let index = e.currentTarget.dataset.index
    
      let currentIndex={
        current: index
      }
      this.triggerEvent("navTbaleHander", currentIndex)
    },

    //弹出动画
    popp: function () {
      // //main按钮顺时针旋转
      var animationMain = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
     
      animationMain.translate(-500, -1).step()
         
      this.setData({
        animMain: animationMain.export(),
      
      })

    
    },
    //收回动画
    takeback: function () {
      var animationMain = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
 
   
      animationMain.rotateZ(0).step();
      this.setData({
        animMain: animationMain.export(),

      })
    }
  },
  //解决滚动穿透问题
  myCatchTouch: function () {
    return
  }
})