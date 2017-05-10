var source = document.getElementById("source_code");
/*var source_ctx = sorce.getContext("2d");*/
var canvas = document.getElementById("canvas");
var canvas_ctx = canvas.getContext("2d");
var image_object;
var code = [];

//ソースコードの中身
  function decompile_source(){
    for(var i in code){
      code[i]
    }
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
