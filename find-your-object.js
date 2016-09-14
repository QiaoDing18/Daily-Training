window.onload = function(){
	showStyle();
};

function showStyle(){
	var weather = document.getElementsByClassName('search1')[0];

	// 点击就会展示信息
	weather.onclick = function(){
		var oTable = document.getElementsByClassName('contentBox')[0];
		var putInf = document.getElementById('putInf');
		var inPut = document.getElementsByTagName("input")[0];
		var oBtn = document.getElementById("btn1");
		var oBtn2 = document.getElementById("btn2");
		var showResult = document.getElementById("showContent");
		oTable.style.display = "block";
		putInf.style.display = "block";

		// 点击就会查找
		oBtn.onclick = function(){
			if(inPut.value !== undefined){
				putInf.style.display = "none";
				showResult.style.display = "block";

				var oBtn1 = document.getElementById("btn3");
				oBtn1.onclick = function(){
					showResult.style.display = "none";
					putInf.style.display = "block";
				};
			}
		};

		oBtn2.onclick = function(){
			oTable.style.display = "none";
			putInf.style.display = "none";
		};
	};
}