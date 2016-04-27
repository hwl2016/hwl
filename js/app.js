(function() {
	//字体自适应
	var fontSize = 100;
	var page = document.querySelector('body');
	var docEl = document.documentElement,
	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	    recalc = function() {
	        docEl.style.fontSize = fontSize * (docEl.clientWidth / 320) + 'px';
	        page.style.fontSize = fontSize * (docEl.clientWidth / 320) + 'px';
	    };

	//绑定浏览器缩放与加载时间
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
})();


//进度条
var w = h = 100 * (document.documentElement.clientWidth / 320) - 8;

var canvas1 = document.getElementById('per1');
var ctx1 = canvas1.getContext('2d');
set_canvas(canvas1, w, h);

var canvas2 = document.getElementById('per2');
var ctx2 = canvas2.getContext('2d');
set_canvas(canvas2, w, h);

var canvas3 = document.getElementById('per3');
var ctx3 = canvas3.getContext('2d');
set_canvas(canvas3, w, h);

var canvas4 = document.getElementById('per4');
var ctx4 = canvas4.getContext('2d');
set_canvas(canvas4, w, h);

var canvas5 = document.getElementById('per5');
var ctx5 = canvas5.getContext('2d');
set_canvas(canvas5, w, h);

var canvas6 = document.getElementById('per6');
var ctx6 = canvas6.getContext('2d');
set_canvas(canvas6, w, h);

var obj1 = null;
var obj2 = null;
var obj3 = null;
var obj4 = null;
var obj5 = null;
var obj6 = null;

$("#fullPage").fullpage({
	// sectionsColor: ["#B4D8D8", "#F37560", "#1E0D3A", "#f69", "#B4D8D8", "#1E0D3A"],
	resize: true,
	// controlArrows: false,
	anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8"],
	controlArrowColor: "#fff",
	afterLoad: function(anchorLink, index) {
		if(index == 1) {
			$(".logo").css("opacity",1).addClass("animated bounceInDown");
			setTimeout(function() {
				$(".info.name").css("opacity",1).addClass("animated zoomInRight");
			}, 700);
			setTimeout(function() {
				$(".info.school").css("opacity",1).addClass("animated zoomInRight");
			}, 1000);
			setTimeout(function() {
				$(".info.aphorism").css("opacity",1).addClass("animated zoomInRight");
			}, 1300);
		}
		if(index == 2) {
			$(".section2 .personInfo.edu").css("opacity",1).addClass("animated bounceInDown");
			setTimeout(function() {
				$(".section2 .personInfo.work").css("opacity",1).addClass("animated fadeInUp");
			}, 700);
		}
		if(index == 3) {
			$(".section3 h4").css("opacity",1).addClass("animated bounceInDown");
			setTimeout(function() {
				$(".section3 .wrapper .list").eq(0).css("opacity",1).addClass("animated slideInDown");
			}, 700);
			setTimeout(function() {
				$(".section3 .wrapper .list").eq(1).css("opacity",1).addClass("animated slideInDown");
			}, 1050);
			setTimeout(function() {
				$(".section3 .wrapper .list").eq(2).css("opacity",1).addClass("animated slideInDown");
			}, 1400);
			setTimeout(function() {
				$(".section3 .wrapper .list").eq(3).css("opacity",1).addClass("animated slideInDown");
			}, 1750);
			setTimeout(function() {
				$(".section3 .wrapper .list").eq(4).css("opacity",1).addClass("animated slideInDown");
			}, 2100);
		}
		if(index == 4) {
			$(".section4 h4").css("opacity",1).addClass("animated bounceInDown");
			setTimeout(function() {
				$(".skill").css("opacity",1);
				init();
			}, 1000);  //进度条
		}
		if(index == 5) {
			$(".section5 h4").css("opacity",1).addClass("animated bounceInDown");
		}
		if(index == 6) {
			$(".section6 h4").css("opacity",1).addClass("animated bounceInDown");
		}
		if(index == 7) {
			$(".section7 h4").css("opacity",1).addClass("animated bounceInDown");
			setTimeout(function() {
				$(".contact").css("opacity",1).addClass("animated flip");
			}, 1000);
		}
	},
	onLeave: function(index, nextIndex, direction ) {
		if(index == 1) {
			$(".logo").css("opacity",0).removeClass("animated bounceInDown");
			$(".info").css("opacity",0).removeClass("animated zoomInRight");
		}
		if(index == 2) {
			$(".section2 .personInfo").css("opacity",0).removeClass("animated bounceInDown fadeInUp");
		}
		if(index == 3) {
			$(".section3 h4").css("opacity",0).removeClass("animated bounceInDown");
			$(".section3 .wrapper .list").css("opacity",0).removeClass("animated slideInDown");
		}
		if(index == 4) {
			$(".section4 h4").css("opacity",0).removeClass("animated bounceInDown");
			$(".skill").css("opacity",0);
		}
		if(index == 5) {
			$(".section5 h4").css("opacity",0).removeClass("animated bounceInDown");
		}
		if(index == 6) {
			$(".section6 h4").css("opacity",0).removeClass("animated bounceInDown");
		}
		if(index == 7) {
			$(".section7 h4").css("opacity",0).removeClass("animated bounceInDown");
			$(".contact").css("opacity",0).removeClass("animated flip");
		}
	}
});

function set_canvas(canvas, w, h) {
	canvas.width = w;
	canvas.height = h;
}

function init() {
	obj1 = new Product(ctx1, w, h, 90, h/3, '#1ABC9C', '#ECF0F1');
	obj2 = new Product(ctx2, w, h, 90, h/3, '#1ABC9C', '#ECF0F1');
	obj3 = new Product(ctx3, w, h, 80, h/3, '#1ABC9C', '#ECF0F1');
	obj4 = new Product(ctx4, w, h, 50, h/3, '#1ABC9C', '#ECF0F1');
	obj5 = new Product(ctx5, w, h, 50, h/3, '#1ABC9C', '#ECF0F1');
	obj6 = new Product(ctx6, w, h, 60, h/3, '#1ABC9C', '#ECF0F1');
}

function Product(ctx,w,h,per,r,color,textColor) {
	var n=0;
	var bfb = per;
	var timer = setInterval(bbb,10);
	function bbb() {
		progress(ctx,w,h,n,r,n,color,textColor);
		if(n >= bfb || n >= 100) {
			clearInterval(timer);
		}
		n++;
	}
}

function progress(ctx,w,h,per,r,text,color,textColor) {

	ctx.clearRect(0,0,w,h);

	ctx.beginPath();
	ctx.lineWidth=10;
	ctx.strokeStyle="#ccc";
	ctx.arc(w/2,h/2,r,0,2*Math.PI,false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=10;
	ctx.strokeStyle=color;
	ctx.arc(w/2,h/2,r,3*Math.PI/2,-2*Math.PI*per/100+3*Math.PI/2,true);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.font = "16px Arial";
	ctx.fillStyle = textColor;
	ctx.textAlign = 'center'; 
	ctx.textBaseline = 'middle';
	ctx.fillText(text+"%",w/2,h/2);
	ctx.closePath();

}

