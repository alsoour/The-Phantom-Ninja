define(["zepto","FN","initData","spine","custom"],function($,FN,initData,spine,custom){
	let FileType = {//文件配置列表
		"IMG":["jpg","png","gif"],
		"Sound":["mp3","wav"],
		"Spine":["atlas"]
	};
	let FileArrange = {};//文件整理存储
	function loadImage(url,fn){//图片加载
		  let image=new Image();
		  image.src=url;
		  let name=url.replace(/.*\/([^\/]+)\..+/,'$1');
		  image.onload=function(){
		    fn?fn():null;
		    initData.IMGArr.push({
		    	"name":name,
		    	"Obj":image,
		    	"width":image.width,
		    	"height":image.height
		    })
		  }
	}
	function loadSound(url,fn){//音频加载
			let sound = new Audio();
			sound.src = url;
			let name = url.replace(/.*\/([^\/]+)\..+/,'$1');
			sound.onloadedmetadata = function(){
				fn?fn():null;
				initData.SoundArr.push({
			    	"name":name,
			    	"Obj":sound
			    })
			}
	}
	function loadSpine(url,fn){//spine加载
			assetManager = new spine.canvas.AssetManager();
			name = url.replace(/.*\/([^\/]+)\..+/,'$1');
			address = url.replace(/(.*\/)[^\/]+\..+/,'$1');
			// console.log(address)
			assetManager.loadText(address + name + ".json",function(){
				assetManager.loadText(address + name + ".atlas",function(){
					assetManager.loadTexture(address + name + ".png",function(){
						fn?fn():null;
						initData.SpineArr.push({
					    	"name":name,
					    	"address":address,
					    	"Obj":assetManager
					    })
					});
				});
			});
	}
	function LoadFile(obj){//文件加载配置
		function JudgeLoad(){
			initData.nowLoadNum++;
			if(initData.nowLoadNum == initData.LoadNum){
				initData.isLoad = true;
			}
		}
		for(let index in obj){
			for(let i=0;i<obj[index].length;i++){
				if(index == "Spine"){
					loadSpine(obj[index][i],JudgeLoad)
				}else if(index == "Sound"){
					loadSound(obj[index][i],JudgeLoad)
				}else if(index == "IMG"){
					loadImage(obj[index][i],JudgeLoad)
				}
			}
		}
	}
	function JudgefileType(obj){//判断文件类型
		var str=obj;
		var thisType=str.replace(/.*\/([^\/]+)\.(.+)/,'$2');
		for(let index in FileType){
			for(let j=0;j<FileType[index].length;j++){
				if(FileType[index][j] == thisType){
					if(!custom.isArray(FileArrange[index])){
						FileArrange[index] = [];
					}
					FileArrange[index].push(obj);
				}
			}
		}
	}
	return {
		LoadAll:function(obj){//加载文件函数
			initData.LoadNum = obj.length;
			for(let i = 0;i < obj.length;i++){
				JudgefileType(obj[i]);
			}
			LoadFile(FileArrange);
		}
	}
})