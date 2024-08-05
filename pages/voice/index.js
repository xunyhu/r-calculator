// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createAudioContext("myAudio");
  },
  data: {
    list: [
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-01",
        author: "许巍",
        src: "https://hep-urc-media.hep.com.cn/audio/44924cce6ac3415f89287f312e9cf8fd.mp3?Expires=1724574881&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=QTfjU4%2B%2Fvn3s8oTIJNpQX8R7%2BFA%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-02",
        author: "许巍",
        src: "https://hep-urc-media.hep.com.cn/audio/44924cce6ac3415f89287f312e9cf8fd.mp3?Expires=1724574881&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=QTfjU4%2B%2Fvn3s8oTIJNpQX8R7%2BFA%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-03",
        author: "许巍",
        src: "https://hep-urc-media.hep.com.cn/audio/44924cce6ac3415f89287f312e9cf8fd.mp3?Expires=1724574881&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=QTfjU4%2B%2Fvn3s8oTIJNpQX8R7%2BFA%3D",
      },
    ],
  },
});
