require.config({
    // 改变根目录
    baseUrl:"js",
    // 配置外部js
    paths:{
      "zepto":"zepto",
      "spine":"spine-canvas",
      "custom":"custom",
      "initData":"Init/initData",
      "initCanvas":"Init/initCanvas",
      "init":"Init/init",
      "Load":"Load/LoadFile",
      "draw":"Render/draw"
    },
    waitSeconds: 0,
    shim:{
        "spine" : {
            exports : "spine"
        }
    }
})
require(["initData","zepto","Load","draw"],function(initData,$,load,draw){
  let FilePath = [
        "images/logo/background.jpg",
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
  /*load file*/ 

  requestAnimationFrame(JudgeLoadFinish);
  function JudgeLoadFinish(){// judge file finish
    if(initData.isLoad){
      for(let index in initData.SpineArr){
        draw.initSpine(initData.SpineArr[index])
      }
      console.log(initData.SpineArr)
      run();
    }else{
      requestAnimationFrame(JudgeLoadFinish)
    }
  }


  function run(){//after file finish to execute
    let now = Date.now() / 1000;
    initData.delta = now - initData.lastFrameTime;
    initData.lastFrameTime = now;

    draw.clearCanvas();
    draw.drawSpineAssassinRun(initData.SpineArr.spine_player_assassin_top,"animation")
    requestAnimationFrame(run)
  }
});