//document.getElementByIdでhtmlのid属性を取得
var source = document.getElementById("source_code");
var canvas = document.getElementById("canvas");
var decompile = document.getElementById("decompile");
var angle = document.getElementById("angle");
//ソースコードの中身の変数
var code;
var decompile_code;
//逆コンパイル
  decompile.addEventListener("click",function(){
    //ソースコード表示
    source.innerHTML = decompile_code;
    change_id("rect");
    change_id("ellipse");
    change_id("triangle");
    change_id("polygon");
    change_id("line1")
    change_id("line2");
    change_id_span("rect_source");
    change_id_span("ellipse_source");
    change_id_span("triangle_source");
    change_id_span("polygon_source");
    change_id_span("for_source");
    change_id_span("line_source");
    change_class_span("rect_source");
    change_class_span("ellipse_source");
    change_class_span("triangle_source");
    change_class_span("polygon_source");
    change_class_span("for_source");
    change_class_span("line_source");
  },false);

//preのインデントを消去

window.addEventListener("DOMContentLoaded", function(){
  var pres = document.getElementsByClassName("pre");
  for (var i = 0; i < pres.length; i++){
    pres[i].firstChild.data = pres[i].firstChild.data.replace(/^ +/gm,"");
  }
},false);
//color_picker
$(document).ready(function() {
  $('#colorpicker').farbtastic('#color');
});
//angleがつくid属性に<option>タグを入れている
for(var i = 0;i < 11;i++){
  $("#angle").append("<option value = " + (i+5) + " > " + (i+5) + "</option>")
}

function disableContextMenu(e) {
  Line_name = "";
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
	/*=======================================
	タブ切り替え
	=========================================*/
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
