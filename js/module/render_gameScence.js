define(["zepto","render","initData"],function($,render,initData){
	let sceneData = [];
	let sceneNum = null;
	return{
		drawBg:function(obj){
			let sceneScale=initData.IMGArr[obj].Obj.width/initData.IMGArr[obj].Obj.height;
			let thisSceneH=initData.winW/sceneScale;
			if(sceneNum == null){
				if(thisSceneH>initData.winH || thisSceneH==initData.winH){
					sceneNum = 4;
				}else if(thisSceneH<initData.winH){
					sceneNum = Math.ceil(initData.winH/thisSceneH)+2;
				}
				for(let i = 0;i<sceneNum;i++){
					sceneData.push({
						"x":0,
						"y":thisSceneH*(i-2),
						"w":initData.winW,
						"h":thisSceneH
					})
				}
			}
			//img>screen,img=screen


			//img<screen
			//bg移动速率
			for(let i = 0;i<sceneNum;i++){
				sceneData[i].y=sceneData[i].y+initData.speed;
			}
				// console.log((initData.winH+thisSceneH),sceneData[sceneData.length-1].y)
			if((initData.winH+thisSceneH)<=sceneData[sceneData.length-1].y){
				sceneData.splice(sceneData.length-1,1);
				sceneData.unshift({
									"x":0,
									"y":sceneData[0].y-thisSceneH,
									"w":initData.winW,
									"h":thisSceneH
								})
			}
			for(let i = 0;i<sceneNum;i++){
				render.drawCanvas(initData.IMGArr[obj].Obj,sceneData[i].x,sceneData[i].y,sceneData[i].w,sceneData[i].h);
			}

			// console.log(initData.IMGArr[obj].Obj,0,0,initData.winW,thisSceneW*initData.winH/initData.winW)
			// render.drawCanvas(initData.IMGArr[obj].Obj,0,0,initData.winW,thisSceneW*initData.winH/initData.winW);
		}
		
	}
})