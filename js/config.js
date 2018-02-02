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
  $.getJSON("json/filePath.json",function(data){  
    // console.log(data);
    load.LoadAll(data.filePath);
    initData.filePathSpineImg=data.filePathSpineImg
  })
  /*load file*/ 

  requestAnimationFrame(JudgeLoadFinish);
  function JudgeLoadFinish(){// judge file finish
    if(initData.isLoad){
      for(let index in initData.SpineArr){
        draw.initSpine(initData.SpineArr[index])
      }
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