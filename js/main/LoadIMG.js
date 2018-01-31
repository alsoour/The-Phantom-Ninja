define(["zepto","FN","initData","spine"],function($,FN,initData,spine){
	return {
		LoadALLIMG:function(obj){
			let URLArr = [];
			if(FN.isArray(obj)){
				URLArr = obj;
			}else if(typeof obj==="string"){
				URLArr.push(obj); 
			}else{
				return;
			}
			let IMGNumber = URLArr.length;
			initData.LoadNum+=IMGNumber;
			for(let i=0;i<URLArr.length;i++){
				FN.loadImage(URLArr[i],function(){
					initData.nowLoadNum++;
					if(initData.nowLoadNum == initData.LoadNum){
						initData.isLoad = true;
					}
				})
			}
		},
		LoadALLSound:function(obj){
			let URLArr = [];
			if(FN.isArray(obj)){
				URLArr = obj;
			}else if(typeof obj==="string"){
				URLArr.push(obj); 
			}else{
				return;
			}
			let SoundNumber = URLArr.length;
			initData.LoadNum+=SoundNumber;
			for(let i=0;i<URLArr.length;i++){
				FN.loadSound(URLArr[i],function(){
					initData.nowLoadNum++;
					if(initData.nowLoadNum == initData.LoadNum){
						initData.isLoad = true;
					}
				})
			}
		},
		LoadALLSpine:function(obj){
			let URLArr = [];
			if(FN.isArray(obj)){
				URLArr = obj;
			}else if(typeof obj==="string"){
				URLArr.push(obj); 
			}else{
				return;
			}
			let SpineNumber = URLArr.length;
			initData.LoadNum+=SpineNumber;
			for(let i=0;i<SpineNumber;i++){
				FN.loadSpine(URLArr[i],function(){
					initData.nowLoadNum++;
					if(initData.nowLoadNum == initData.LoadNum){
						initData.isLoad = true;
					}
				})
			}
		},
		LoadAll:function(obj){
			this.LoadALLIMG(obj.image);
  			this.LoadALLSound(obj.sound);
  			this.LoadALLSpine(obj.spine);
		}
	}
})