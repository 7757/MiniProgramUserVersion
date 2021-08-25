 // pages/home/home.js
 Page({

   /**
    * 页面的初始数据
    */
   data: {

     //  默认展示离我最近的店铺信息
     shopIndex: 0,
     // 取消预约弹窗
     showModel: false, //默认隐藏莫太框
     // 取消预约
     indexDelete: null,
     isDialogShow: false,
     isScroll: true,
     openid: "",
     session_key: "",
     access_token: "",
     currDates: '',
     currNames: '',
     //  课表
     isRuleTrue: false,

     // 课程通知是否取消
     courseNotice: true,
     // 用户对象
     user: {
       id: "1",
       name: "来忆凡",
       heard: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
       // 课程对象总和
       classNumber: 0,
       // 课程对象中剩余课程总和
       remainClassHour: 0,
       // 会员码，学员号
       vipCard: "BKT00005465464",
       // 二维码
       qrCode: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/qrcode.png",

     },
     // 店铺对象
     shop: [{
         id: 1,
         shopAddress: "雨花软件谷店",
         //默认单位未km
         shopDistance: 0.2,
         // 分店名称
         shopBranchName: "南京市·EF瑞珂英语·南京软件谷",
         // 维度
         latitude: 31.9702396379,
         // 经度
         longitude: 118.7651038170,
         //地址
         detailedAddress: "江苏省南京市雨花台区南京软件谷南京软件谷西南方向",
         //店铺地址logo
         // 营业时间
         amtTime: "10:00-22:30"
       },
       {
         id: 2,
         shopAddress: "雨花铁心桥店",
         //默认单位未km
         shopDistance: 14.5,
         // 分店名称
         shopBranchName: "南京市·EF瑞珂奥数·雨花铁心桥",
         // 维度
         latitude: 31.9629800000,
         // 经度
         longitude: 118.7434920000,
         //地址
         detailedAddress: "江苏省南京市雨花台区铁心桥街道新河社区西北方向 "
           //店铺地址logo
           ,
         // 营业时间
         amtTime: "10:00-22:30"
       },
       {
         id: 3,
         shopAddress: "建邺生态科技店",
         //默认单位未km
         shopDistance: 15.8,
         // 分店名称
         shopBranchName: "南京市·EF瑞珂体育·建邺生态科技",
         // 维度
         latitude: 32.0284580000,
         // 经度
         longitude: 118.6966780000,
         //地址
         detailedAddress: "江苏省南京市建邺区中新南京生态科技岛东南方向"
           //店铺地址logo
           ,
         // 营业时间
         amtTime: "10:00-22:30"
       }

     ],
     // 店铺轮播图
     rotationChart: [
       "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203530.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203706.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203712.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203719.jpg", "https://sappbkt.oss-cn-shanghai.aliyuncs.com/school/studentimage/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200506203732.jpg",
     ],

     // 课程对象
     classDetails: [{
         classId: 1,
         classTime: "2019年11月26日9:30-10:30",
         className: "初级语法课",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "",
         courseIntroduction: "",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "张老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 5,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classthere.jpg",
         // 课程有效期
         classTermValidity: "2019-11-04"

       },
       {
         classId: 2,
         classTime: "2019年12月16日10:30-11:30",
         className: "儿童文学",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "中华人民共和国建立后的儿童文学称中国当代儿童文学。1949...",
         courseIntroduction: "儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代溉为主",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 2,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classone.jpg",
         // 课程有效期
         classTermValidity: "2019-10-04"

       },

       {
         classId: 3,
         classTime: "2019年10月18日14:30-15:30",
         className: "思维奥数",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "20世纪上半叶，不同国家相继组织了各级各类的数学竞赛...",
         courseIntroduction: "奥数发展到今天有不同的学习方法，快速规律解题法是我们重点讲解的内容。",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "许老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 3,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 4,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classtwo.jpg",
         // 课程有效期
         classTermValidity: "2019-12-20"
       },
       {
         classId: 4,
         classTime: "2019年11月26日9:30-10:30",
         className: "初级语法课",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "外教来自全球官方语言或母语为英语的国家，保证外教的口音地...",
         courseIntroduction: "初级语法课对儿童建立对世界语言了解有至关重要的作用，学好很重要。",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 5,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classthere.jpg",
         // 课程有效期
         classTermValidity: "2019-11-04"

       },
       {
         classId: 5,
         classTime: "2019年12月16日10:30-11:30",
         className: "儿童文学",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "中华人民共和国建立后的儿童文学称中国当代儿童文学。1949...",
         courseIntroduction: "儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代溉为主",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 2,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classone.jpg",
         // 课程有效期
         classTermValidity: "2019-10-04"

       },

       {
         classId: 6,
         classTime: "2019年10月18日14:30-15:30",
         className: "思维奥数",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "20世纪上半叶，不同国家相继组织了各级各类的数学竞赛...",
         courseIntroduction: "奥数发展到今天有不同的学习方法，快速规律解题法是我们重点讲解的内容。",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 3,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 4,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classtwo.jpg",
         // 课程有效期
         classTermValidity: "2019-12-20"
       }, {
         classId: 7,
         classTime: "2019年11月26日9:30-10:30",
         className: "初级语法课",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "外教来自全球官方语言或母语为英语的国家，保证外教的口音地...",
         courseIntroduction: "初级语法课对儿童建立对世界语言了解有至关重要的作用，学好很重要。",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 5,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classthere.jpg",
         // 课程有效期
         classTermValidity: "2019-11-04"

       },
       {
         classId: 8,
         classTime: "2019年12月16日10:30-11:30",
         className: "儿童文学",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "中华人民共和国建立后的儿童文学称中国当代儿童文学。1949...",
         courseIntroduction: "儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代溉为主",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 2,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classone.jpg",
         // 课程有效期
         classTermValidity: "2019-10-04"

       },

       {
         classId: 9,
         classTime: "2019年10月18日14:30-15:30",
         className: "思维奥数",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "20世纪上半叶，不同国家相继组织了各级各类的数学竞赛...",
         courseIntroduction: "奥数发展到今天有不同的学习方法，快速规律解题法是我们重点讲解的内容。",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 3,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 4,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classtwo.jpg",
         // 课程有效期
         classTermValidity: "2019-12-20"
       },
       {
         classId: 10,
         classTime: "2019年11月26日9:30-10:30",
         className: "初级语法课",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "外教来自全球官方语言或母语为英语的国家，保证外教的口音地...",
         courseIntroduction: "初级语法课对儿童建立对世界语言了解有至关重要的作用，学好很重要。",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 5,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classthere.jpg",
         // 课程有效期
         classTermValidity: "2019-11-04"

       },
       {
         classId: 11,
         classTime: "2019年12月16日10:30-11:30",
         className: "儿童文学",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "中华人民共和国建立后的儿童文学称中国当代儿童文学。1949...",
         courseIntroduction: "儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代，唐僖，他认为儿童教育以文学灌溉为主儿童文学的建立者来自中国古代溉为主",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 2,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 5,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classone.jpg",
         // 课程有效期
         classTermValidity: "2019-10-04"

       },

       {
         classId: 12,
         classTime: "2019年10月18日14:30-15:30",
         className: "思维奥数",
         classRoom: "江宁景峰校区A区3室",
         classIntroduce: "20世纪上半叶，不同国家相继组织了各级各类的数学竞赛...",
         courseIntroduction: "奥数发展到今天有不同的学习方法，快速规律解题法是我们重点讲解的内容。",
         classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
         classTeacher: "来老师",
         teacherEntryTime: 2019,
         // 教龄
         teachingAge: 3,
         //预约状态
         appointStatus: "已经预约",
         // 剩余课时
         remainingClassHour: 4,
         // 课程头图
         classHeadDiagram: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/classtwo.jpg",
         // 课程有效期
         classTermValidity: "2019-12-20"
       },
     ],

     layerClass: {
       classId: 0,
       courseIntroduction: "",
       classTeacherHead: "",
       classTeacher: "",
       teacherEntryTime: 0,
       // 教龄
       teachingAge: 0,
     },
     layerClassDetails: {
       classId: 0,
       className: "",
       courseIntroduction: "",
       classTermValidity: "",
       remainingClassHour: 0,
     },
     // 访问时间
     accesTime: "下午",
     btnActive: 1,
     brandName: " EF 英柯成人英语"


   },

   /**
    *  点击最近店铺事件处理函数
    */
   latelyShop: function() {
     var that = this
     var queryBean = JSON.stringify(that.data.shop)
     wx.navigateTo({
       url: '/pages/home/moreStores/moreStores?queryBean=' + queryBean,
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
   },



   /**
    *  点击更多店铺事件处理函数
    */
   moreShop: function() {

     wx.navigateTo({
       url: '/pages/home/shopDetails/shopDetails',
     })
   },
   /**
    *  点击预约事件处理函数
    */
   appointment: function() {
     wx: wx.navigateTo({
       url: '/pages/home/amtCourse/amtCourse',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
   },

   /**
    * 点击课程事件处理函数
    */
   classBtn: function() {
     this.setData({
       btnActive: 1
     })
     console.log("点击课程事件处理函数")
   },
   /**
    * 点击课时事件处理函数
    */
   remainClassBtn: function() {
     this.setData({
       btnActive: 2
     })
     console.log("点击课时事件处理函数")
   },
   /**
    * 点击会员事件处理函数
    */
   vipCardBtn: function() {
     console.log("点击会员事件处理函数")
     this.setData({
       btnActive: 3
     })
   },

   /**
    * 点击探索事件处理函数
    */
   exploreBtn: function() {
     console.log("点击探索事件处理函数")
   },

   /**
    *点击备案的事件处理函数
    */
   keepOnRecord: function(e) {
     let curr = e.currentTarget.dataset.index
     let intro = e.currentTarget.dataset.intro
     let classId = 'layerClass.classId';
     let courseIntroduction = 'layerClass.courseIntroduction';
     let classTeacherHead = 'layerClass.classTeacherHead';
     let classTeacher = 'layerClass.classTeacher';
     let teacherEntryTime = 'layerClass.teacherEntryTime';
     let teachingAge = 'layerClass.teachingAge';
     let that = this
     that.setData({
       [classId]: that.data.classDetails[curr].classId,
       [courseIntroduction]: that.data.classDetails[curr].courseIntroduction,
       [classTeacherHead]: that.data.classDetails[curr].classTeacherHead,
       [classTeacher]: that.data.classDetails[curr].classTeacher,
       [teacherEntryTime]: that.data.classDetails[curr].teacherEntryTime,
       [teachingAge]: that.data.classDetails[curr].teachingAge
     })
     if (intro.length > 0) {
       that.showModal();
     }



   },

   /**
    *点击取消预约事件处理函数
    */
   cancelReservation: function(e) {
     let currIndex = e.currentTarget.dataset.index;
     let name = e.currentTarget.dataset.sname;
     let time = e.currentTarget.dataset.s;
     let that = this;
     that.setData({
       currDates: time,
       currNames: name,
       indexDelete: currIndex,
       showModel: true
     })



   },

   //点击刷新事件处理函数
   refreshBtn: function() {
     console.log("点击刷新事件处理函数")
   },


   // 点击查看课程详情处理函数
   lookClassDetails: function() {
     console.log("点击查看课程详情处理函数")

   },



   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
     // 获取二维码

     // 设置计算课程数量与剩余课程数量
     let that = this;
     let totalClassHour = (that.data.classDetails).reduce((acc, cur) => acc + cur.remainingClassHour, 0);

     let classNumber = 'user.classNumber'
     let remainClassHour = 'user.remainClassHour'
     that.setData({
       [classNumber]: that.data.classDetails.length,
       [remainClassHour]: totalClassHour,
     })

     // 根据权限获取用户对象信息
     // 获取定位
     wx.getLocation({
       type: 'wgs84',
       success(res) {
         // 维度     
         const latitude = res.latitude
         // 经度
         const longitude = res.longitude
         console.log(res);
       }
     })
     // 根据定位获取用户附件的店铺位置，距离从近到远排列（Arraylist）
     // 根据用户获取用户附近店铺对象（Arraylist） 对课程介绍进行判断使用

     // 获取轮播图

     //根据用户id获取用户的课程对象（Arraylist）

     //生成通知
     //  wx.login({
     //    success: function(data) {
     //      console.log(data.code, data)
     //      console.log("12345");
     //      wx.request({
     //        url: 'https://api.weixin.qq.com/sns/jscode2session',
     //        data: {
     //          appid: "wxbdd83d05148d022d",
     //          secret: "8758e0303fe93bb28ee32909cf97d18b",
     //          js_code: data.code //wx.login获取到的code
     //        },
     //        method: "post",
     //        header: {
     //          "Content-Type": "application/x-www-form-urlencoded"
     //        },
     //        success: function(res) {
     //          console.log(res);
     //          that.setData({
     //            openid: res.data.openid,
     //            session_key: res.data.session_key,
     //          })
     //        }
     //      })
     //    }
     //  })

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

   // 轮播图点击处理函数
   swiperHander: function() {

     var that = this
     var rotationChart = JSON.stringify(that.data.rotationChart)

     wx.navigateTo({
       url: '/pages/home/allPictures/allPictures?rotationChart=' + rotationChart,
     })

   },
   showModal: function() {
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
     setTimeout(function() {
       animation.translateY(0).step()
       this.setData({
         animationData: animation.export()
       })
     }.bind(this), 0)
   },
   //隐藏对话框
   hideModal: function() {
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
     setTimeout(function() {
       animation.translateY(0).step()
       this.setData({
         animationData: animation.export(),
         showModalStatus: false
       })
     }.bind(this), 0)
   },
   // 禁止屏幕滚动
   preventTouchMove: function() {
     return true;
   },

   // 剩余课时点击弹窗
   classDetailsHander: function(e) {
     let curr = e.currentTarget.dataset.index
     //  let classId = 'layerClassDetails.classId';
     //  let className = 'layerClassDetails.className';
     //  let courseIntroduction = 'layerClassDetails.courseIntroduction';
     //  let remainingClassHour = 'layerClassDetails.remainingClassHour';
     //  let classTermValidity = 'layerClassDetails.classTermValidity';
     let that = this

     that.setData({
       className: that.data.classDetails[curr].className,
       courseIntroduction: that.data.classDetails[curr].courseIntroduction,
       remainingClassHour: that.data.classDetails[curr].remainingClassHour,
       classTermValidity: that.data.classDetails[curr].classTermValidity
     })
     that.courseShow();

     console.log(111);

   },
   //监听屏幕滚动 判断上下滚动
   onPageScroll: function(ev) {
     var _this = this;
     let courseNotices = _this.data.courseNotice
     //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
     if (ev.scrollTop <= 0) {
       ev.scrollTop = 0;
     } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
       ev.scrollTop = wx.getSystemInfoSync().windowHeight;
     }
     //判断浏览器滚动条上下滚动
     if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {


       //向下滚动 在这个地方处理开启通知
       console.log("向下滚动" + ev.scrollTop)
       if (ev.scrollTop > 220 && courseNotices) {
         _this.showModals();
       }

     } else {
       //向上滚动
       console.log("向上滚动" + ev.scrollTop)
       if (ev.scrollTop < 220) {

       }

     }
     //给scrollTop重新赋值
     setTimeout(function() {
       _this.setData({
         scrollTop: ev.scrollTop
       })
     }, 0)
   },

   showModals: function() {
     // 显示遮罩层
     var animations = wx.createAnimation({
       duration: 0,
       timingFunction: "linear",
       delay: 0
     })
     this.animations = animations
     animations.translateY(300).step()
     this.setData({
       animationDatas: animations.export(),
       showModalStatuss: true
     })
     setTimeout(function() {
       animations.translateY(100).step()
       this.setData({
         animationDatas: animations.export()
       })
     }.bind(this), 50)
   },
   //隐藏对话框
   hideModals: function() {
     wx.showTabBar({
       animations: false
     });
     // 隐藏遮罩层
     var animations = wx.createAnimation({
       duration: 0,
       timingFunction: "linear",
       delay: 0
     })
     this.animations = animations
     animations.translateY(300).step()
     this.setData({
       animationDatas: animations.export(),
     })
     setTimeout(function() {
       animations.translateY(100).step()
       this.setData({
         animationDatas: animations.export(),
         showModalStatuss: false
       })
     }.bind(this), 50)
   },
   // 关闭课程通知按钮处理函数
   closeNoticeHander() {
     this.hideModals();
     this.setData({
       courseNotice: false,
     })
   },

   // 点击课表具体周处理函数
   _deleteLotsEvent(e) {
     var that = this
   
     wx.navigateTo({
       url: '/pages/home/timeTable/timeTable?index=' + e.detail.current,
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })

   },
   //  点击课表展示具体课表处理函数
   opentimetable(e) {

     this.setData({
       isRuleTrue: true
     })

     var timeTable = wx.createAnimation({
       duration: 8000,
       timingFunction: "ease-in",
       delay: 0
     })

     this.timeTable = timeTable
     timeTable.translateY(8000).step()
     this.setData({
       timeTableData: timeTable.export(),
     })
     setTimeout(function() {
       timeTable.translateY(8000).step()
       this.setData({
         timeTableData: timeTable.export(),
         showModalStatusss: true
       })
     }.bind(this), 500)


     setTimeout(function() {
       this.setData({
         isRuleTrue: false
       })
     }.bind(this), 5000)



   },





   // 点击确定处理函数
   Sure: function() {
     let that = this;
     let indexs = that.data.indexDelete
     let evaAry = that.data.classDetails
     evaAry.splice(indexs, 1);
     that.setData({
       classDetails: evaAry,
       showModel: false

     })
   },
   showAmt: function() {
     // 显示遮罩层
     var animation = wx.createAnimation({
       duration: 200,
       timingFunction: "linear",
       delay: 0
     })
     this.animation = animation
     animation.translateY(0).step()
     this.setData({
       ssss: animation.export(),
       showAmtStatus: true
     })
     setTimeout(function() {
       animation.translateY(0).step()
       this.setData({
         ssss: animation.export()
       })
     }.bind(this), 200)
   },
   //隐藏对话框
   hideAmt: function() {
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
     animation.translateY(0).step()
     this.setData({
       ssss: animation.export(),
     })
     setTimeout(function() {
       animation.translateY(0).step()
       this.setData({
         ssss: animation.export(),
         showAmtStatus: false
       })
     }.bind(this), 0)
   },

   // 取消处理函数

   modal_click_Hidden() {


     this.setData({
       showModel: false,
       indexDelete: null

     })
   },

   //  弹出层
   hiddenmodel: function() {
     this.setData({
       showModel: false
     })
   },
   showDialogBtn: function() {
     this.setData({
       showModel: true
     })
   },


   preventTouchMove: function() {

   },

   // 点击课时详情时的弹出层
   courseShow: function() {
     // 显示遮罩层
     var animation = wx.createAnimation({
       duration: 0,
       timingFunction: "linear",
       delay: 0
     })
     this.animation = animation
     animation.translateY(300).step()
     this.setData({
       courseDetailAnimation: animation.export(),
       courseDetails: true
     })
     setTimeout(function() {
       animation.translateY(0).step()
       this.setData({
         courseDetailAnimation: animation.export()
       })
     }.bind(this), 0)
   },
   //隐藏对话框
   courseHiden: function() {
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
       courseDetailAnimation: animation.export(),
     })
     setTimeout(function() {
       animation.translateY(0).step()
       this.setData({
         courseDetailAnimation: animation.export(),
         courseDetails: false
       })
     }.bind(this), 0)
   },
   openClassHander() {
     wx.requestSubscribeMessage({
       tmplIds: ['template_id'], // 此处可填写多个模板 ID，但低版本微信不兼容只能授权一个
       success(res) {
         console.log('已授权接收订阅消息')
       }
     })
   }



 })