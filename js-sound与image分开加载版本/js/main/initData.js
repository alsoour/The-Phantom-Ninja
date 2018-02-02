define(["zepto"],function($){
		const canvas = $("#canvas");
		const context = canvas[0].getContext("2d");
		let winW = window.innerWidth;
		let winH = window.innerHeight;
		let screenNum = Math.ceil();
		let isLoadIMG = false;
		let isLoadSound = false;
		let IMGArr = [];
		let SoundArr = [];
		return {
					"canvas":canvas[0],
					"context":context,
					"winW":winW,
					"winH":winH,
					"isLoadIMG":isLoadIMG,
					"isLoadSound":isLoadSound,
					"IMGArr":IMGArr,
					"SoundArr":SoundArr
				}; 
})
		