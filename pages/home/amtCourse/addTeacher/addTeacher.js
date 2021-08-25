//获取应用实例
var app = getApp()
var wxaSortPicker = require('../../../../utils/wxaSortPicker/wxaSortPicker.js');
Page({
  data: {},
  onLoad: function () {
    var that = this
    wxaSortPicker.init([{
      name: 'a老师',
      value: ''
    },
    {
      name: 'b老师',
      value: ''
    },
    {
      name: 'c老师',
      value: ''
    },
    {
      name: 'd老师',
      value: ''
    },
    {
      name: 'e老师',
      value: ''
    },
    {
      name: 'f老师',
      value: ''
    },
    {
      name: 'g老师',
      value: ''
    },
    {
      name: 'h老师',
      value: ''
    },
    {
      name: 'i老师',
      value: ''
    },
    {
      name: 'j老师',
      value: ''
    },
    {
      name: 'k老师',
      value: ''
    },
    {
      name: 'l老师',
      value: ''
    },
      {
        name: 'l老师',
        value: ''
      },
    {
      name: 'm老师',
      value: ''
    },
    {
      name: 'n老师 ',
      value: ''
    },
    {
      name: 'o老师',
      value: ''
    },
    ], that);
  },

  onShow: function () {
    var that = this
  },

  wxaSortPickerItemTap: function (e) {

    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    let tacher ='amtClass.amtTeacher'
    if (e.target.dataset.text!=null){
      prevPage.setData({
        [tacher]: e.target.dataset.text
      })
      wx.navigateBack({
        delta: 1,
      })
    }
  
    console.log(e.target.dataset.text);
    console.log(e.target.dataset.value);
  },
  stopTouchMove() {
    return false
  }
})