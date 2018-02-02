require.config({
    // 改变根目录
    baseUrl:"js",
    // 配置外部js
    paths:{
      "zepto":"zepto",
      "initData":"main/initData",
      "initCanvas":"main/initCanvas",
      "FN":"main/FN",
      "LoadIMG":"main/LoadIMG",
      "spine":"spine-canvas"
    },
    waitSeconds: 0,
    shim:{
        "spine" : {
            exports : "spine"
        }
    }
})
require(["initData","initCanvas","LoadIMG","FN"],function(initData,$,load,FN){
  load.LoadAll({
    "image":["images/3.png",
              "images/4.png",
              "images/5.png",
              "images/3885730_124701000519_2.jpg",
              "images/22.png"
            ],
    "sound":"sound/bgm.mp3",
    "spine":[
              "spine/eye/skeleton.png",
              "spine/player/assassin/top/skeleton.png",
              "spine/player/bear/top/skeleton.png",
              "spine/player/fox/top/skeleton.png",
              "spine/player/ninja/top/skeleton.png",
              "spine/player/white/top/skeleton.png"
            ]
  });
  requestAnimationFrame(JudgeLoad);
  function JudgeLoad(){
    if(initData.isLoad){
      console.log(1)
    }else{
      requestAnimationFrame(JudgeLoad)
    }
  }
  // load.LoadALLSpine([
  //   "spine/eye/skeleton.png",
  //   "spine/player/assassin/top/skeleton.png",
  //   "spine/player/bear/top/skeleton.png",
  //   "spine/player/fox/top/skeleton.png",
  //   "spine/player/ninja/top/skeleton.png",
  //   "spine/player/white/top/skeleton.png"
  // ]);
  // setInterval(function(){
  //     console.log(initData.nowLoadNum,initData.LoadNum,initData.isLoad)
  // },60)

});