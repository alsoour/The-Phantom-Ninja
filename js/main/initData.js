define(["zepto"],function($){
		const canvas = $("#canvas");
		const context = canvas[0].getContext("2d");
		let winW = window.innerWidth;
		let winH = window.innerHeight;
		let screenNum = Math.ceil();
		let LoadNum = 0;
		let nowLoadNum = 0;
		let isLoad = false;
		let IMGArr = [];
		let SoundArr = [];
		let SpineArr = [];
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
					"isLoad":isLoad
				}; 
})
		