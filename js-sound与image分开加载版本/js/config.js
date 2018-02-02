require.config({
    // 改变根目录
    baseUrl:"js",
    // 配置外部js
    paths:{
      "zepto":[
            "zepto"
      ],
      "initData":"main/initData",
      "initCanvas":"main/initCanvas",
      "FN":"main/FN",
      "LoadIMG":"main/LoadIMG"
    }
})
require(["initData","initCanvas","LoadIMG","FN"],function(initData,$,load,FN){
  load.LoadALLIMG(["images/3.png",
                "images/4.png",
                "images/5.png",
                "images/3885730_124701000519_2.jpg",
                "images/22.png"
              ]);
  load.LoadALLSound("sound/bgm.mp3");
  //  setInterval(function(){
  //   console.log(initData.isLoadIMG,initData.isLoadSound)
  //     if(initData.isLoadIMG&&initData.isLoadSound){
  //       console.log(1,initData.IMGArr);
  //       console.log(2,initData.SoundArr);
  //     }else{
  //        console.log(3);
  //     }
  // },60)
});