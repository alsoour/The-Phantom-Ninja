define(["zepto","FN","initData"],function($,FN,initData){
	return {
		LoadALLIMG:function(obj){
			let URLArr = [];
			let loadNumber = 0;
			if(FN.isArray(obj)){
				URLArr = obj;
			}else if(typeof obj==="string"){
				URLArr.push(obj); 
			}else{
				return;
			}
			let IMGNumber = URLArr.length;
			for(let i=0;i<URLArr.length;i++){
				FN.loadImage(URLArr[i],function(){
					loadNumber++;
					if(loadNumber == IMGNumber){
						initData.isLoadIMG = true;
					}
				})
			}
		},
		LoadALLSound:function(obj){
			let URLArr = [];
			let loadNumber = 0;
			if(FN.isArray(obj)){
				URLArr = obj;
			}else if(typeof obj==="string"){
				URLArr.push(obj); 
			}else{
				return;
			}
			let SoundNumber = URLArr.length;
			for(let i=0;i<URLArr.length;i++){
				FN.loadSound(URLArr[i],function(){
					loadNumber++;
					if(loadNumber == SoundNumber){
						initData.isLoadSound = true;
					}
				})
			}
		}
	}
})