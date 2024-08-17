const bgMusic = wx.getBackgroundAudioManager();

Page({
  onLoad: function (options) {
    if (!options.item) return;
    try {
      const info = JSON.parse(decodeURIComponent(options.item));
      this.setData({
        item: info,
      });
      // const { src } = info;
      //https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html
      // if (!this.innerAudioContext) {
      //   this.innerAudioContext = wx.createInnerAudioContext({
      //     useWebAudioImplement: false,
      //   });
      //   this.innerAudioContext.src = decodeURIComponent(src);
      //   this.innerAudioContext.onCanplay((res) => {
      //     console.log("res", this.innerAudioContext);
      //   });
      // }
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
    isOpen: false, //播放开关
    starttime: "00:00", //正在播放时长
    duration: "00:00", //总时长
    src: "", // 当前音频的src地址
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

    // 如果离开当前页面就停止播放
    var that = this;
    that.listenerButtonStop(); //停止播放
  },
  listenerButtonPlay: function () {
    var that = this;
    const { src, name, poster, author } = this.data.item;
    if (!this.data.isPlay) {
      // ！！！ ios 播放时必须加title 不然会报错导致音乐不播放
      // 这块的值需要自己替换哦
      bgMusic.title = name;
      bgMusic.epname = author;
      bgMusic.src = decodeURIComponent(src);
      bgMusic.coverImgUrl = poster;
    }

    bgMusic.onTimeUpdate(() => {
      //bgMusic.duration总时长  bgMusic.currentTime当前进度
      // console.log("bgMusic", bgMusic);
      var duration = (bgMusic.duration / 60).toFixed(2);
      var offset = bgMusic.currentTime;
      var currentTime = parseInt(bgMusic.currentTime);
      var min = parseInt(currentTime / 60);
      var max = parseInt(bgMusic.duration);
      var sec = currentTime % 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (min < 10) {
        min = "0" + min;
      }
      var starttime = min + ":" + sec; /*  00:00  */
      that.setData({
        offset: currentTime,
        starttime: starttime,
        max: max,
        changePlay: true,
        duration,
        offset,
      });
    });
    // 监听播放结束
    bgMusic.onEnded(() => {
      that.setData({
        starttime: "00:00",
        isOpen: false,
        offset: 0,
      });
    });
    bgMusic.play();
    that.setData({
      isOpen: true,
      isPlay: true,
    });
  },
  //暂停播放
  listenerButtonPause() {
    var that = this;
    bgMusic.pause();
    that.setData({
      isOpen: false,
    });
  },
  listenerButtonStop() {
    var that = this;
    bgMusic.stop();
  },
  // 进度条拖拽
  sliderChange(e) {
    var that = this;
    var offset = parseInt(e.detail.value);
    bgMusic.play();
    bgMusic.seek(offset);
    that.setData({
      isOpen: true,
    });
  },
});
