Page({
  onLoad: function (options) {
    if (!options.item) return;
    try {
      const info = JSON.parse(decodeURIComponent(options.item));
      this.setData({
        item: info,
      });
      const { src } = info;
      //https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html
      if (!this.innerAudioContext) {
        this.innerAudioContext = wx.createInnerAudioContext({
          useWebAudioImplement: false,
        });
        this.innerAudioContext.src = decodeURIComponent(src);
        this.innerAudioContext.onCanplay((res) => {
          console.log("res", this.innerAudioContext);
        });
      }
      wx.setNavigationBarTitle({
        title: info.author || "",
      });
    } catch (error) {
      console.error(error);
    }
  },
  innerAudioContext: null,
  data: {
    item: {},
    isPlay: false,
    palyIcon: "../../assets/play.png",
    pauseIcon: "../../assets/pause.png",
  },
  onClick(e) {
    if (this.data.isPlay) {
      this.innerAudioContext.pause(); // 暂停
    } else {
      this.innerAudioContext.play(); // 播放
    }
    this.setData({
      isPlay: !this.data.isPlay,
    });
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    if (this.innerAudioContext) {
      this.innerAudioContext.destroy(); // 释放音频资源
    }
  },
});
