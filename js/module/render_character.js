define(["zepto","initData"],function($,initData){
	let lastState = null;
	let long = initData.screenRoadCenter[1]-initData.screenRoadCenter[0];
	let everLong = 0;
	let goTime = 0;
	let Go = false;
	return {
		"Go":Go,
		"goTime":goTime,
		drawSpineAssassinRun:function(stateOn){
			let obj = initData.SpineArr.spine_player_ninja_top;
			let animate = "animation";
			let Dirstate =((typeof stateOn)=="undefined")?1:stateOn;
			let scale = 0.5;
			let centerX = obj.bounds.offset.x*scale;
			let centerY = obj.bounds.offset.y*scale;
			// console.log(obj.state[animate])
			let thisW=obj.skeleton.data.width;
			let thisH=obj.skeleton.data.height;
			let nowW=long;
			let nowH=long*thisH/thisW;
			obj.skeleton.data.width=500;
			obj.skeleton.data.height=500;
			console.log(obj)
			initData.context.save();
			initData.context.setTransform(1, 0, 0, 1, 0, 0);
			initData.context.translate(initData.screenRoadCenter[Dirstate]-centerX/2,initData.winH*0.62-centerY/2);
			initData.context.scale(scale,scale);
			obj.state[animate].update(initData.delta);
			// console.log(obj.state,animate)
			obj.state[animate].apply(obj.skeleton);
			obj.skeleton.updateWorldTransform();
			initData.skeletonRenderer.draw(obj.skeleton);
			initData.context.restore();
			// initData.skeletonRenderer.draw(obj.skeleton);
			// console.log(initData.skeletonRenderer)
		},
		drawSpineAssassinMove:function(i,time,fn){

			if(this.Go)fn();
			if(!this.Go)return;
			everLong+= long/time*initData.delta*1000;
			goTime+= initData.delta*1000;
			if(everLong>long){
				everLong=long;
			}
			console.log(goTime)
			if(goTime<=time){
				let obj = initData.SpineArr.spine_player_ninja_top;
				let animate = "animation";
				let Dirstate =((typeof stateOn)=="undefined")?1:stateOn;
				let scale = 0.5;
				let centerX = obj.bounds.offset.x*scale;
				let centerY = obj.bounds.offset.y*scale;
				initData.context.save();
				initData.context.setTransform(1, 0, 0, 1, 0, 0);
				initData.context.translate(initData.screenRoadCenter[i]-everLong-centerX/2,initData.winH*0.62-centerY/2);
				initData.context.scale(scale,scale);
				obj.state[animate].update(initData.delta);
				// console.log(obj.state,animate)
				obj.state[animate].apply(obj.skeleton);
				obj.skeleton.updateWorldTransform();
				initData.skeletonRenderer.draw(obj.skeleton);
				initData.context.restore();
			}else{
				goTime = 0;
				everLong = 0;
				this.Go = false;
			}
		},
		drawSpineAssassinRunLeft:function(stateOn){
			let obj = initData.SpineArr.spine_player_ninja_top;
			let animate = "animation2";
			let Dirstate =((typeof stateOn)=="undefined")?1:stateOn;
			let scale = 0.5;
			let centerX = obj.bounds.offset.x*scale;
			let centerY = obj.bounds.offset.y*scale;
			initData.context.save();
			initData.context.setTransform(1, 0, 0, 1, 0, 0);
			initData.context.translate(initData.screenRoadCenter[Dirstate]-centerX*3/4,initData.winH*0.62-centerY/2);
			initData.context.scale(scale,scale);
			obj.state[animate].update(initData.delta);
			// console.log(obj.state,animate)
			obj.state[animate].apply(obj.skeleton);
			obj.skeleton.updateWorldTransform();
			initData.skeletonRenderer.draw(obj.skeleton);
			initData.context.restore();
			// initData.skeletonRenderer.draw(obj.skeleton);
			// console.log(initData.skeletonRenderer);
		},
		drawSpineAssassinRunRight:function(stateOn){
			let obj = initData.SpineArr.spine_player_ninja_top;
			let animate = "animation3";
			let Dirstate =((typeof stateOn)=="undefined")?1:stateOn;
			let scale = 0.5;
			let centerX = obj.bounds.offset.x*scale;
			let centerY = obj.bounds.offset.y*scale;
			initData.context.save();
			initData.context.setTransform(1, 0, 0, 1, 0, 0);
			initData.context.translate(initData.screenRoadCenter[Dirstate]-centerX/2,initData.winH*0.62-centerY/2);
			initData.context.scale(scale,scale);
			obj.state[animate].update(initData.delta);
			// console.log(obj.state,animate)
			obj.state[animate].apply(obj.skeleton);
			obj.skeleton.updateWorldTransform();
			initData.skeletonRenderer.draw(obj.skeleton);
			initData.context.restore();
			// initData.skeletonRenderer.draw(obj.skeleton);
			// console.log(initData.skeletonRenderer);
		}
	}
})