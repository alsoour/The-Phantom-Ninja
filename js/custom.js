define(["zepto"],function($){
	return {
		isArray:function(obj){//判断是否为数组
			return Object.prototype.toString.call(obj)=='[object Array]';
		}
	}
})