Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchChecked: false,
    showStatus:true,
    // 评论课程下标
    evaIndex: null,
    score:-1,
    scores: -1,
    scoress: -1,
    fraction:0,
    noteMaxLen: 300, // 最多放多少字
    info: "",
    noteNowLen: 0,//备注当前字数

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log
      this.setData({

        evaIndex: options.index

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
    
  },
  switchChange:function(e){
    console.log( e.detail.value)

    this.setData({
      switchChecked: e.detail.value,
    })
  },

// 如是描述
  tureStartHader(e){

    let i = e.currentTarget.dataset.index;
    
    if (i == this.data.score) {
      this.setData({
        score: -1
      })
    } else {
      this.setData({
        score: e.currentTarget.dataset.index - 0
      })
    }

    let statrNumberOne=this.data.score+1;
    let statrNumberTwo = this.data.scores+1;
    let statrNumberThere = this.data.scoress+1;
    let totalCount = ((statrNumberOne + statrNumberTwo + statrNumberThere) / 3).toFixed(2)
    if (statrNumberOne > 0 && statrNumberTwo>0 && statrNumberThere>0){
      this.setData({
        showStatus: false,
        fraction: totalCount
      })
    }else{
      this.setData({
        showStatus: true,
        fraction: totalCount
      })
    }
    console.log(totalCount);

  },
  // 课堂效果
  tureStartClassHader(e){

    let i = e.currentTarget.dataset.index;
    if (i == this.data.scores) {
      this.setData({
        scores: -1
      })
    } else {
      this.setData({
        scores: e.currentTarget.dataset.index - 0
      })
    }
    let statrNumberOne = this.data.score + 1;
    let statrNumberTwo = this.data.scores + 1;
    let statrNumberThere = this.data.scoress + 1;
    let totalCount = ((statrNumberOne + statrNumberTwo + statrNumberThere) / 3).toFixed(2)
    if (statrNumberOne > 0 && statrNumberTwo > 0 && statrNumberThere > 0) {
      this.setData({
        showStatus: false,
        fraction: totalCount
      })
    } else {
      this.setData({
        showStatus: true,
        fraction: totalCount
      })
    }
    console.log(totalCount);


  },
  tureStartHygieHader(e){
    let i = e.currentTarget.dataset.index;
    if (i == this.data.scoress) {
      this.setData({
        scoress: -1
      })
    } else {
      this.setData({
        scoress: e.currentTarget.dataset.index - 0
      })
    }
    let statrNumberOne = this.data.score + 1;
    let statrNumberTwo = this.data.scores + 1;
    let statrNumberThere = this.data.scoress + 1;
    let totalCount = ((statrNumberOne + statrNumberTwo + statrNumberThere) / 3).toFixed(2)
    if (statrNumberOne > 0 && statrNumberTwo > 0 && statrNumberThere > 0) {
      this.setData({
        showStatus: false,
        fraction: totalCount
      })
    } else {
      this.setData({
        showStatus: true,
        fraction: totalCount
      })
    }
    console.log(totalCount);

  },
  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value,
      len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({ info: value, noteNowLen: len })

  },
  // 提交清空当前值
  bindSubmit: function () {
    var that = this;
    let showStatus = this.data.showStatus;
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 2];
    let flag = 'teacherArray[' + that.data.evaIndex +'].evaluateStatus'
    


    if (!showStatus){
      wx.showToast({
        title: '评价成功',
        icon: 'success',
        duration: 1500,
        mask: false,
        success: function () {
          that.setData({ info: '', noteNowLen: 0, flag: 0 })
          
          prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。

            [flag]: true

          })
        
    
        }
      })
      setTimeout(function () {
        wx.navigateBack({
          delta: 2
        })
      }, 1500)
   

    }else{
      wx.showToast({
        title: '请评价后发表',
        icon: 'none',
        duration: 1500,
        mask: false,
        success: function () {
         
         
        }
      })
    }
 

  },
  
})