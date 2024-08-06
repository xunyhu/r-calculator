Page({
  onClick: (e) => {
    const {
      dataset: { item },
    } = e.currentTarget;
    wx.navigateTo({
      url:
        "./detail?item=" +
        JSON.stringify({
          ...item,
          src: encodeURIComponent(item.src),
        }),
    });
  },
  data: {
    list: [
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-01",
        author: "Greeting and Introduction",
        src: "https://hep-urc-media.hep.com.cn/audio/44924cce6ac3415f89287f312e9cf8fd.mp3?Expires=1724642915&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=%2B2mXXRv5tmCcYUGnmvCKAmmU2LQ%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-02",
        author: "People",
        src: "https://hep-urc-media.hep.com.cn/audio/d08eb80047c84a54ba93bb4656cfc8e3.mp3?Expires=1724613421&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=QGi%2FKsk0k2MH5zuheTqKpEnRAbM%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-03",
        author: "House and Family",
        src: "https://hep-urc-media.hep.com.cn/audio/a67250ce22e9438990c5a60867823ddf.mp3?Expires=1724613622&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=u9gNvZqaiWrd65MuuEuOWNM7Z5k%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-04",
        author: "Environment",
        src: "https://hep-urc-media.hep.com.cn/audio/0c876df88052428eac645de67cb48e49.mp3?Expires=1724613661&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=g4O%2FJEDFscaB9CJUPXulHFSpq00%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-05",
        author: "Weather and Climate",
        src: "https://hep-urc-media.hep.com.cn/audio/be1c297812884e6bad2999948e072b85.mp3?Expires=1724613680&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=eTtQFnCa9NMahVbplciBN0AiBeg%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-06",
        author: "Eating and Drinking",
        src: "https://hep-urc-media.hep.com.cn/audio/b08257d8f4ad4ccba307e421407fcb90.mp3?Expires=1724613703&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=qXTANhoAGwPcDy2Lwxjhd3Q9fZY%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-07",
        author: "Food Culture",
        src: "https://hep-urc-media.hep.com.cn/audio/9d749593bb25443dabfe39e9caaee28a.mp3?Expires=1724613724&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=%2BqG8QTxvMGGAb0ZBc9A5R%2FVhxUI%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-08",
        author: "At Home",
        src: "https://hep-urc-media.hep.com.cn/audio/30d4834dfcfe45929df7c7e79232e944.mp3?Expires=1724613748&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=Tne2rNGCSFOZDKOAjVQwP3jUaHo%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-09",
        author: "At Work",
        src: "https://hep-urc-media.hep.com.cn/audio/d567327ec05b46868d2814120b83597e.mp3?Expires=1724613770&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=m2wFFAXv7MiER%2BAXX02Xvc8nTqc%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-10",
        author: "Hobbies and Interests",
        src: "https://hep-urc-media.hep.com.cn/audio/f5dd53e11ff04b97bd6ce18b2bb4bd00.mp3?Expires=1724613794&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=zA2KItQXE3Z0HsAgLe43Fiw%2BQKU%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-11",
        author: "Entertainments and Sports",
        src: "https://hep-urc-media.hep.com.cn/audio/166d11ea97ad413c9c497b857fc05562.mp3?Expires=1724613813&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=dBaM8r3eLyEBtJO39XgAIZxc22I%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-12",
        author: "Shops and Commodities",
        src: "https://hep-urc-media.hep.com.cn/audio/510654e497f746d5bc434dbeb320e0f1.mp3?Expires=1724613835&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=F0RyVyxuS47Q%2FRAGw7uo1GaR8js%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-13",
        author: "Shopping",
        src: "https://hep-urc-media.hep.com.cn/audio/5041f84852fc46b4b6b4aada361c837f.mp3?Expires=1724613857&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=ApUeWQxWFwczeV5Xa%2FKqn1bYMEg%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-14",
        author: "Holidays and Festivals",
        src: "https://hep-urc-media.hep.com.cn/audio/5808f83a35ac4b379dbb30ae4c18d295.mp3?Expires=1724613878&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=4DDBpup7QL%2F6sDGga9RMEVtIPUQ%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-15",
        author: "Holiday Activities",
        src: "https://hep-urc-media.hep.com.cn/audio/ec9483c0d90b4aaea4278871fd8352b2.mp3?Expires=1724613903&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=fxRBDoayElJQZRSqUvzMcfbsrFs%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-16",
        author: "Places and Locations",
        src: "https://hep-urc-media.hep.com.cn/audio/5920dd57715b4a80b6011936302201a3.mp3?Expires=1724613928&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=Dnj06kV29EnlEhVBRcot%2BNMZ6y4%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-17",
        author: "Travel and Tourism",
        src: "https://hep-urc-media.hep.com.cn/audio/bae37fef066b4568a61cfe2c8cd1c041.mp3?Expires=1724613948&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=P5QrxYSw1mIzrR9YXxMrw%2Bxys30%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-18",
        author: "Sightseeing and Travel Plans",
        src: "https://hep-urc-media.hep.com.cn/audio/9d9f25cdbde34b30b0a42f2411c3e1a0.mp3?Expires=1724613967&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=nFiyh%2FfY3K1GsrAnI9FRSS3q1Pc%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-19",
        author: "Visiting a Doctor and Health Insurance",
        src: "https://hep-urc-media.hep.com.cn/audio/4152ed41d2fc4a6292d6f11a617a1834.mp3?Expires=1724613992&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=grT9utKFihZwyLBPojI8iRV5GZY%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-20",
        author: "Bodybuilding and Enviormental Sanitation",
        src: "https://hep-urc-media.hep.com.cn/audio/0db363f249304333864fa2b645ba9629.mp3?Expires=1724614014&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=cGl3XZhP5Bg%2F%2Fb5ytqAx2zViEi8%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-21",
        author: "Services(1)",
        src: "https://hep-urc-media.hep.com.cn/audio/808034e497d344718a2d6231356e353f.mp3?Expires=1724614040&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=x76t%2FcKMNMAPnjFurycPSccYQsA%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-22",
        author: "Services(2)",
        src: "https://hep-urc-media.hep.com.cn/audio/9ab21103e09e4a4e87a594114435968b.mp3?Expires=1724614068&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=TesUTIN2HDpehKDF4CU2eEvpbTM%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-23",
        author: "Making Friends and Communication",
        src: "https://hep-urc-media.hep.com.cn/audio/95913f79ccd5488a8fceaec8b4db859c.mp3?Expires=1724614090&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=aXMuZQ6wIfrL6mOFZjlwIdfGrRQ%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-24",
        author: "Political, Legal and Social Issues",
        src: "https://hep-urc-media.hep.com.cn/audio/d140bd9bb7504f509e78c471e17e8380.mp3?Expires=1724614110&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=Zbw8z0C6MBgLafLNlOya8QryNzo%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-25",
        author: "Work and Posts",
        src: "https://hep-urc-media.hep.com.cn/audio/33ad634677ef4357aa4e27880cd84817.mp3?Expires=1724614141&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=dU0iCPa7rjmND33rpkvSnndybX4%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-26",
        author: "Finding a Job",
        src: "https://hep-urc-media.hep.com.cn/audio/918ff7663e7941c0be5f768efaf60f17.mp3?Expires=1724614164&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=qteVsQg0cu%2FdQ88aWNXL%2B3eNpXk%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-27",
        author: "Education",
        src: "https://hep-urc-media.hep.com.cn/audio/c7caf90b06124a228d6cbdb3b492d72d.mp3?Expires=1724614190&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=oW%2Fqy52qAxOMSp5sC4My%2F9VrSyo%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-28",
        author: "Popular Science",
        src: "https://hep-urc-media.hep.com.cn/audio/749857565f054bbea46f1c74843048a0.mp3?Expires=1724614210&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=Nb9ImYRQSjyNtKd03HaAmi4fNfc%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-29",
        author: "History",
        src: "https://hep-urc-media.hep.com.cn/audio/dc11e0da536c48a3a8a377c7d8d1dfb5.mp3?Expires=1724614230&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=3dryrzWh3iXfBUnL6byTeqUjEZo%3D",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-30",
        author: "Geography",
        src: "https://hep-urc-media.hep.com.cn/audio/6e37cc3c5c984f3483a5a8fbd8b3cd33.mp3?Expires=1724614253&OSSAccessKeyId=LTAI5tHb6LUzL2mw4VudhmfK&Signature=FC%2B9mGcVOG0S3FQKSo%2F5fkmagGI%3D",
      },
    ],
  },
});
