require.config({
    // 改变根目录
    baseUrl:"js",
    // 配置外部js
    paths:{
      "zepto":"zepto",
      "spine":"spine-canvas",
      "initData":"Init/initData",
      "initCanvas":"Init/initCanvas",
      "init":"Init/init",
      "Load":"Load/LoadFile",
      "custom":"custom"
    },
    waitSeconds: 0,
    shim:{
        "spine" : {
            exports : "spine"
        }
    }
})
require(["initData","initCanvas","Load","FN"],function(initData,$,load,FN){
  let FilePath = [
      "images/3.png",
        "images/4.png",
        "images/5.png",
        "images/3885730_124701000519_2.jpg",
        "images/22.png",
        "sound/bgm.mp3",
        "spine/eye/skeleton.atlas",
        "spine/player/assassin/top/skeleton.atlas",
        "spine/player/bear/top/skeleton.atlas",
        "spine/player/fox/top/skeleton.atlas",
        "spine/player/ninja/top/skeleton.atlas",
        "spine/player/white/top/skeleton.atlas"
  ];
  load.LoadAll(FilePath);
  requestAnimationFrame(JudgeLoadFinish);
  function JudgeLoadFinish(){
    if(initData.isLoad){
      console.log(1)
    }else{
      requestAnimationFrame(JudgeLoadFinish)
    }
  }
});