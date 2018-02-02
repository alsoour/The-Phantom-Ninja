define(["zepto","spine"],function($,spine){
		const canvas = $("#canvas");
		const context = canvas[0].getContext("2d");
		const skeletonRenderer = new spine.canvas.SkeletonRenderer(context);
		// context.drawImage(initData.IMGArr["background"].Obj,0,-initData.winH,initData.winW,initData.winH)
		canvas[0].width = document.body.clientWidth;
		canvas[0].height = document.body.clientHeight;
		let lastFrameTime = Date.now() / 1000;
		let delta = Date.now() / 1000;
		let winW = window.innerWidth;
		let winH = window.innerHeight;
		let screenNum = null;
		let LoadNum = 0;
		let nowLoadNum = 0;
		let isLoad = false;
		let IMGArr = {};
		let SoundArr = {};
		let SpineArr = {};
		let filePathSpineImg = null;
		return {
					"canvas":canvas[0],
					"context":context,
					"winW":winW,
					"winH":winH,
					"LoadNum":LoadNum,
					"nowLoadNum":nowLoadNum,
					"IMGArr":IMGArr,
					"SoundArr":SoundArr,
					"SpineArr":SpineArr,
					"isLoad":isLoad,
					"skeletonRenderer":skeletonRenderer,
					"lastFrameTime":lastFrameTime,
					"delta":delta,
					"filePathSpineImg":filePathSpineImg
				}; 
})
		