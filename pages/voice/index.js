Page({
  onClick: (e) => {
    const {
      dataset: { item, index },
    } = e.currentTarget;
    wx.navigateTo({
      url:
        "./detail?item=" +
        JSON.stringify({
          ...item,
          src: encodeURIComponent(
            `https://petsmp3-1305214533.cos.ap-guangzhou.myqcloud.com/unit-${
              index + 1
            }.mp3`
          ),
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
        src: "https://petsmp3-1305214533.cos.ap-guangzhou.myqcloud.com/unit-1.mp3",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-02",
        author: "People",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-03",
        author: "House and Family",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-04",
        author: "Environment",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-05",
        author: "Weather and Climate",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-06",
        author: "Eating and Drinking",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-07",
        author: "Food Culture",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-08",
        author: "At Home",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-09",
        author: "At Work",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-10",
        author: "Hobbies and Interests",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-11",
        author: "Entertainments and Sports",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-12",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-13",
        author: "Shopping",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-14",
        author: "Holidays and Festivals",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-15",
        author: "Holiday Activities",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-16",
        author: "Places and Locations",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-17",
        author: "Travel and Tourism",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-18",
        author: "Sightseeing and Travel Plans",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-19",
        author: "Visiting a Doctor and Health Insurance",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-20",
        author: "Bodybuilding and Enviormental Sanitation",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-21",
        author: "Services(1)",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-22",
        author: "Services(2)",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-23",
        author: "Making Friends and Communication",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-24",
        author: "Political, Legal and Social Issues",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-25",
        author: "Work and Posts",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-26",
        author: "Finding a Job",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-27",
        author: "Education",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-28",
        author: "Popular Science",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-29",
        author: "History",
      },
      {
        poster:
          "https://img11.360buyimg.com/n1/jfs/t1/87024/28/24837/408980/6246b6faE67db59be/b3e968aeccde669b.jpg",
        name: "Unit-30",
        author: "Geography",
      },
    ],
  },
});
