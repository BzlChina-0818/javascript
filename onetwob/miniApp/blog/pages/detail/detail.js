// pages/detail/detail.js


var WxParse = require('../../tool/wxParse/wxParse.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    wx.request({
      url: 'https://miniapp.chenyuanguang.cn/api/front/miniApp/getArticle?id='+options.id, //仅为示例，并非真实的接口地址

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res)
        // console.log(res.data.data[0])
        this.setData({
          article: res.data.data,
          content: WxParse.wxParse('content', 'html', res.data.data.content, this, 5)
        })
       
        
      }
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