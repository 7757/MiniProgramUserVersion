var that
Page({

  data: {

    items: [{
        images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/myfavorite.jpg",
        f_title: "南京市",
        f_summary: "南京市是六朝古都，虽然有很多历史文化古迹，但也是一座现代化的大都市，在南京除了可以去一些景点之外，很多大型的商圈也是游玩的好去处",
        f_price: "168.6",
        f_xingp: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/%E6%98%9F%E6%98%9F-01%20copy%204%403x.png",
        f_point: "0.9",
      },
      {
        images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test1.jpg",
        f_title: "新街口",
        f_summary: "南京最有名的商圈莫过于新街口，包括有很多大型的商城，比如中央商城等等，从普通到高档，从奢侈到限量应有尽有，还有各种电影院，美食店，逛一天完全没问题。",
        f_price: "366.6",
        f_xingp: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/%E6%98%9F%E6%98%9F-01%20copy%204%403x.png",
        f_point: "2.5",
      },
      {
        images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test2.jpg",
        f_title: "湖南路",
        f_summary: "湖南路也是南京非常出名的一条商业街，现在湖南路地下的街区就要开张了，估计你可以待在地下逛一天，而且湖南路还有书城，大排档等等，非常适合呆一整天。",
        f_price: "235.3",
        f_xingp: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/%E6%98%9F%E6%98%9F-01%20copy%204%403x.png",
        f_point: "3.7",
      },
      {
        images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test3.jpg",
        f_title: "百家湖商圈",
        f_summary: "江宁区的小伙伴肯定是对百家湖商圈比较熟悉咯，吃饱喝足还可以去百家湖散散步，划划船，简直完美。",
        f_price: "99.8",
        f_xingp: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/%E6%98%9F%E6%98%9F-01%20copy%204%403x.png",
        f_point: "4.9",
      },
      {
        images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test4.jpg",
        f_title: "金鹰商城",
        f_summary: "河西的小伙伴自然觉得金鹰是最佳去处，号称是亚洲最大的商城，里面的商店鳞次栉比，各种互动体感游戏应有尽有，吃饭电影通通可以体验。",
        f_price: "88.8",
        f_xingp: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/%E6%98%9F%E6%98%9F-01%20copy%204%403x.png",
        f_point: "5.0",
      },
      {
        images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test5.jpeg",
        f_title: "虹悦城",
        f_summary: "秦淮区的小伙伴常去的当然就是虹悦城了，不仅有美食和各类的商店，还有滑冰场，可以在娱乐之余适当的放松。",
        f_price: "128.0",
        f_xingp: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/%E6%98%9F%E6%98%9F-01%20copy%204%403x.png",
        f_point: "2.5",
      },
      {
        images: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/mycoll/test6.jpg",
        f_title: "水游城",
        f_summary: "当然南京的商圈还有不得不提的就是水游城，而且现在还有茂业天地等等，逛完商圈晚上还可以去夫子庙游玩，非常的惬意。",
        f_price: "386.6",
        f_xingp: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/%E6%98%9F%E6%98%9F-01%20copy%204%403x.png",
        f_point: "3.8",
      }
    ],

    startX: 0, //开始坐标
    startY: 0
  },

  onLoad: function(e) {
    var that = this;
    this.setData({
      items: this.data.items
    });
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function(e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function(v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })

    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })

  },

  //滑动事件处理

  touchmove: function(e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    that.data.items.forEach(function(v, i) {
      v.isTouchMove = false

      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) { //右滑
          v.isTouchMove = false
        } else { //左滑
          v.isTouchMove = true
        }
      }

    })

    //更新数据

    that.setData({

      items: that.data.items

    })

  },

  /**
    
  * 计算滑动角度
    
  * @param {Object} start 起点坐标
    
  * @param {Object} end 终点坐标
    
  */

  angle: function(start, end) {

    var _X = end.X - start.X,

      _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值

    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);

  },

  //删除事件

  del: function(e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认删除？',
      success: function(res) {
        if (res.confirm) {
          that.data.items.splice(e.currentTarget.dataset.index, 1)
          that.setData({
            items: that.data.items
          })
        } else if (res.cancel) {}
      }
    })
  },
  navCourseHander(e){
    wx.navigateTo({
      url: '../../school/cinfo/cinfo',
    })
  }
})