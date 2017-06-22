var source = document.getElementById("source_code");
/*var source_ctx = sorce.getContext("2d");*/
var canvas = document.getElementById("canvas");
var canvas_ctx = canvas.getContext("2d");
var code;
var decompile_code;
var decompile = document.getElementById("decompile");
var rect_judge = false;
var ellipse_judge = false;
//逆コンパイル
  decompile.addEventListener("click",function(){
    source.innerHTML = decompile_code;
    change_id("rect");
    change_id("ellipse");
    change_id_span("rect_source");
    change_id_span("ellipse_source");
    change_id_span("for_source");
    change_class_span("rect_source");
    change_class_span("ellipse_source");
    change_class_span("for_source");
  },false);

//preのインデントを消去
window.addEventListener("DOMContentLoaded", function(){
  var pres = document.getElementsByClassName("pre");
  for (var i = 0; i < pres.length; i++){
    pres[i].firstChild.data = pres[i].firstChild.data.replace(/^ +/gm,"");
  }
},false);

//tab用関数
function openItem(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
