define(["zepto","initData"],function($,initData){
	return {
		draw:function(img,x,y,w,h){//画图
			initData.context.drawImage(
		      img,x,y,w,h
		    );
		},
		isArray:function(obj){//数组检测
			return Object.prototype.toString.call(obj)=='[object Array]';
		},
		loadImage:function(url,fn){//图片加载
		  let image=new Image();
		  image.src=url;
		  let name=url.replace(/.*\/([^\/]+)\..+/,'$1');
		  image.onload=function(){
		    fn?fn():null;
		    initData.IMGArr.push({
		    	"name":name,
		    	"imgObj":image
		    })
		  }
		},
		loadSound:function(url,fn){
			let sound = new Audio();
			sound.src = url;
			let name = url.replace(/.*\/([^\/]+)\..+/,'$1');
			sound.onloadedmetadata = function(){
				fn?fn():null;
				initData.SoundArr.push({
			    	"name":name,
			    	"soundObj":sound
			    })
			}
		},
		loadSpine:function(url,fn){
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
					    	"spineObj":assetManager
					    })
					});
				});
			});
		}
	}
})