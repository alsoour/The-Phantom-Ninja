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
      "render":"Render/Render",
      "module_gameScence":"module/render_gameScence",
      "module_character":"module/render_character"
    },
    waitSeconds:0,
    shim:{
        "spine" : {
            exports : "spine"
        }
    }
})
require(["initData","zepto","Load","render","module_gameScence","module_character"],function(initData,$,load,render,module,module_character){
  $.getJSON("json/filePath.json",function(data){  
    load.LoadAll(data.filePath);
    initData.filePathSpineImg=data.filePathSpineImg
  })
  /*load file*/ 
  let i=3;
  let a=false;
  let b=false;
  requestAnimationFrame(JudgeLoadFinish);
  function JudgeLoadFinish(){// judge file finish
    if(initData.isLoad){
      for(let index in initData.SpineArr){
        render.initSpine(initData.SpineArr[index])
      }
      setTimeout(function(){
        a=false;
      },1000)
      // draw.renderSound(initData.SoundArr["bgm"]);
      run();
    }else{
      requestAnimationFrame(JudgeLoadFinish)
    }
  }


  $(".left").click(function(){
    console.log(module_character.Go)
    module_character.Go = true;
    console.log(module_character.Go)
    i--;
    a=true;
  })
  $(".right").click(function(){
    i++;
    b=true;
  })
  function run(){//after file finish to execute
    let now = Date.now() / 1000;
    initData.delta = now - initData.lastFrameTime;
    initData.lastFrameTime = now;
    render.clearCanvas();
    module.drawBg("map_Grassland");
    if(a){
      module_character.drawSpineAssassinRunLeft(i);
      module_character.drawSpineAssassinMove(i+1,30,function(){
        module_character.drawSpineAssassinRun(i);
      });
      setTimeout(function(){
        a=false;
      },140)
    }
    if(b){
      module_character.drawSpineAssassinRunRight(i);
      setTimeout(function(){
        b=false;
      },200)
    }
    if(!b&&!a){
      module_character.drawSpineAssassinRun(i);
    }
    requestAnimationFrame(run)
  }
});