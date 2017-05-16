var source = document.getElementById("source_code");
/*var source_ctx = sorce.getContext("2d");*/
var canvas = document.getElementById("canvas");
var canvas_ctx = canvas.getContext("2d");
var code;
var decompile_code;
//ソースコードの中身
  function decompile_source(){
    source.innerHTML = decompile_code;
  }
//preのインデントを消去
window.addEventListener("DOMContentLoaded", function(){
  var pres = document.getElementsByClassName("pre");
  for (var i = 0; i < pres.length; i++){
    pres[i].firstChild.data = pres[i].firstChild.data.replace(/^ +/gm,"");
  }
},false);

//逆コンパイル
function decompile(){
  decompile_source();
}
