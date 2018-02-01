define(["zepto","initData"],function($,initData){
	return {
		drawCanvas:function(img,x,y,w,h){//画图
			initData.context.drawImage(
		      img,x,y,w,h
		    );
		},
		initSpine:function(obj){
			let skeletonAnimate = [];
			let skin = "default";
			let atlas = new spine.TextureAtlas(obj.Obj.get(obj.address + obj.name + ".atlas"), function(path) {
				return obj.Obj.get(obj.address + path);
			});
			let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
			let skeletonJson = new spine.SkeletonJson(atlasLoader);
			let skeletonData = skeletonJson.readSkeletonData(obj.Obj.get(obj.address + obj.name + ".json"));
			// console.log(skeletonData.animations)
			for(let i=0;i<skeletonData.animations.length;i++){
				skeletonAnimate.push(skeletonData.animations[i])
			}

			let skeleton = new spine.Skeleton(skeletonData);
			skeleton.flipY = true;
			let bounds = calculateBounds(skeleton);
			skeleton.setSkinByName(skin);
			obj.skeleton = skeleton;
			obj.bounds = bounds;
			for(let i=0;i<skeletonAnimate.length;i++){
				let animationState = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
				animationState.setAnimation(0, skeletonAnimate[i].name, true);
				if(!obj.state){
					obj.state = {};
				}
				obj.state[skeletonAnimate[i].name] = animationState;
			}
			
			function calculateBounds(skeleton) {
				var data = skeleton.data;
				skeleton.setToSetupPose();
				skeleton.updateWorldTransform();
				var offset = new spine.Vector2();
				var size = new spine.Vector2();
				skeleton.getBounds(offset, size, []);
				return { offset: offset, size: size };
			}
			
		},
		drawSpineAssassinRun:function(obj,animate){
			var centerX = obj.bounds.offset.x;
			var centerY = obj.bounds.offset.y;
			var width = canvas.width;
			var height = canvas.height;

			initData.context.setTransform(1, 0, 0, 1, 0, 0);
			initData.context.translate(-centerX, -centerY);
			obj.state[animate].update(initData.delta);
			// console.log(obj.state,animate)
			obj.state[animate].apply(obj.skeleton);
			obj.skeleton.updateWorldTransform();
			initData.skeletonRenderer.draw(obj.skeleton);
		},
		drawBg:function(){
			draw.drawCanvas(initData.IMGArr["background"].Obj,0,0,initData.winW,initData.winH);
		},
		clearCanvas:function(){
			initData.context.clearRect(0, 0, canvas.width, canvas.height);
			initData.context.save();
			initData.context.setTransform(1, 0, 0, 1, 0, 0);
			initData.context.clearRect(0, 0, canvas.width, canvas.height);
			initData.context.restore();
		}
	}
})