//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Udesk测试支持2',
    userInfo: app.globalData.userInfo,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    customer_info: JSON.stringify({
      "email": "test@udesk.cn",
      "description": "描述",
      "organization_id": 1, //所属公司ID
      "tags": "标签1,标签2", //标签 已英文号分割
      "owner_id": 1, //客户负责人ID
      "owner_group_id": 1, //客户负责组ID
      "level": "normal", // 等级
      "cellphones": [["", "13100000002"]], //数组 [[电话ID, 电话文本]]
      "other_emails": [["", "13100000002@udesk.cn"]], //数组 [[邮箱ID, 邮箱]]
      "custom_fields": {
        "TextField_1": "普通文本内容",
      }
    }),
    note_info: JSON.stringify({
      "title": "业务记录标题",
      "custom_fields": {
        "TextField_1": "普通文本内容",
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
