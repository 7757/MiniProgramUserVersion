//获取应用实例
var app = getApp()
var wxaSortPicker = require('../../../utils/wxaSortPicker/wxaSortPicker.js');
Page({
  data: {},
  onLoad: function () {
    var that = this
    wxaSortPicker.init([{
      name: '初级语法课',
      value: ''
    },
    {
      name: '高级语法课',
      value: ''
    },
    {
      name: '学科课程',
      value: ''
    },
    {
      name: '经验课程',
      value: ''
    },
    {
      name: '分科课程',
      value: ''
    },
    {
      name: '综合课程',
      value: ''
    },
    {
      name: '必修课程',
      value: ''
    },
    {
      name: '选修课程',
      value: ''
    },
    {
      name: '基础型课程',
      value: ''
    },
    {
      name: '拓展型课程',
      value: ''
    },
    {
      name: '国家课程',
      value: ''
    },
    {
      name: '地方课程',
      value: ''
    },
    {
      name: '校本课程',
      value: ''
    },
    {
      name: '显性课程 ',
      value: ''
    },
    {
      name: '隐性课程',
      value: ''
    },
    ], that);
  },

  onShow: function () {
    var that = this
  },

  wxaSortPickerItemTap: function (e) {
    console.log(e.target.dataset.text);
    console.log(e.target.dataset.value);
  },
  stopTouchMove() {
    return false
  }
})