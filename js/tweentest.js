(function(){
	var position;var tween;
	var target = document.querySelectorAll(".page0")[0];
	position = {x:0,y:-100,z:0,opacity:0};
	tween = new TWEEN.Tween(position);
	tween.to({x:0,y:0,z:0,opacity:1},1000).onUpdate(translate3d);
	tween.start();
	animate(100);
	function animate(time){
		requestAnimationFrame(animate);
		TWEEN.update(time);
	}
  //3d位移函数
  function translate3d(){
  	target.style.transform = target.style.webkitTransform = "translate3d("+position.x+","+position.y+"%,"+position.z+")";
  	target.style.opacity = position.opacity;
  }	
})();