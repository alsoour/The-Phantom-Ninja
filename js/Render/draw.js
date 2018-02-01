define(["zepto","initData","FN"],function($,initData,FN){
	return {
		drawBg:function(obj){
			FN.drawBg(obj.Obj,obj.x,obj.y,obj.w,obj.h);
		},
		draw:function(img,x,y,w,h){//画图
			initData.context.drawImage(
		      img,x,y,w,h
		    );
		},
	}
})