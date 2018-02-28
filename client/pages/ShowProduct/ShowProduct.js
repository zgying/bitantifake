// pages/ShowProduct/ShowProduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../image/maotai.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      text: options.data
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

  tapScan: function (event) {

    var app = getApp();
    app.gdata.qcode = "";


    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {

//        this.setData({
//          text: res.result
//        })

        if (res.result == '') {
          wx.navigateTo({
            url: '/pages/ShowProduct/ShowProduct?data=' + res.result
          })
        }
        else {
          wx.navigateTo({
            url: '/pages/Activate/Activate?data=' + res.result
          })
        }
      }
    })
  }
})