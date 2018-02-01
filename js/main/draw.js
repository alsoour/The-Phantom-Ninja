define(["zepto","initData","FN"],function($,initData,FN){
	return {
		drawBg:function(obj){
			FN.drawBg(obj.Obj,obj.x,obj.y,obj.w,obj.h);
		}
	}
})