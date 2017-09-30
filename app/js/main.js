//document.getElementByIdでhtmlのid属性を取得
var source = document.getElementById("source_code");
var canvas = document.getElementById("canvas");
var decompile = document.getElementById("decompile");
var angle = document.getElementById("angle");
/*
$(function(){
  $(document).keydown(function(event){
    var keyCode = event.keyCode;
    if(keyCode == 116 || keyCode == 123){
      return false;
    }
  });
});
*/
//preのインデントを消去
/*
window.addEventListener("DOMContentLoaded", function(){
  var pres = document.getElementsByClassName("pre");
  for (var i = 0; i < pres.length; i++){
    pres[i].firstChild.data = pres[i].firstChild.data.replace(/^ +/gm,"");
  }
},false);*/
//color_picker
$(document).ready(function() {
  $('#colorpicker').farbtastic('#color');
});
//angleがつくid属性に<option>タグを入れている
for(var i = 0;i < 6;i++){
  $("#angle").append("<option value = " + (i+5) + " > " + (i+5) + "</option>")
}

function disableContextMenu(e) {
  Line_name = "";
  key.src = "img/key_close.png";
	if (e.preventDefault) {
		e.preventDefault();	// Firefox, Opera用
	} else {
		event.returnValue = false;	// IE用
	}
}
// 右クリックイベントを追加
if (document.attachEvent) {
	document.attachEvent('oncontextmenu' , disableContextMenu);
} else {
	document.addEventListener('contextmenu', disableContextMenu, false);
}
$(function(){
	// タブメニューをクリックしたとき
	$('.tab > div').click(function(){
		// タブメニューとタブコンテンツのクラス「select」を削除
		$('.tab > div,.tab_content').removeClass('select');
		// タブメニューのクラスを取得し、変数にいれる
		var tabClass = $(this).attr('class');
		// クリックしたタブメニューにクラス「select」を付与
		$(this).addClass('select');
		// それぞれのタブコンテンツに対して
		$('.tab_content').each(function(){
			// 変数「tabClass」と、同じクラスがついたタブコンテンツに
			if($(this).attr('class').indexOf(tabClass) != -1){
				// クラス「select」を付与し、フェードインしながら表示
				$(this).addClass('select').fadeIn();
			// それ以外のタブコンテンツは
			}else{
				// 隠す
				$(this).hide();
			}
		});
	});
});
