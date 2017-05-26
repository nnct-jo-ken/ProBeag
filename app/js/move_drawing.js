$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var figuers = [];
var load_figuers = 0;
var compile = document.getElementById("compile");
var count_Rect = 1;
var count_Ellipse = 1;
var x_point = 200;
var obj_x;
var obj_y;
//配列に入れてtoString()で文字列に直している
function literal(figures_code){
  figuers.push(figures_code);
  code = figuers.toString();
  decompile_code = code.replace("\t","\n");
  $(function ($) {
    $("#decompile").click( function() {
      for (var i in figuers){
        if(++load_figuers == figuers.length){
          $("#source_code").append(function(){
            code = figuers.toString();
            decompile_code = code.replace("\t","\n");
          });
        }
      }
    });
  });
}
//四角形を描く
rect.addEventListener("click",function(){
  ++count_Rect;
  for (var i = 1;i < count_Rect;i++){
     $("canvas").drawRect({
       layer:true,
       name:"Rect" + i,
       strokeStyle: "black",
       fillStyle: "red",
       strokeWidth: 1,
       x: 100,
       y: 100,
       width: 100,
       height: 100,
       fromCenter: false,
       draggable:true
       });
     }
    var rect_code = "rect(" + '<input type="text" size="4"id ="rect_x">' + "," + '<input type="text" size="4"id ="rect_y">' + ",w,h); " + "\n";
    literal(rect_code);
  },false);
//ボタンを押して図形の位置を変更する
  compile.addEventListener("click",function(){
    Compile("rect","Rect",count_Rect);
    Compile("ellipse","Ellipse",count_Ellipse);
  },false);


//図形の位置を変える
function Compile(obj,Obj,count_obj){
  for(var i = 1;i < count_obj;i++){
    obj_x = $("#" + obj + "_x" + i).val();
    obj_y = $("#" + obj + "_y" + i).val();
    if (typeof obj_x == "undefined" || obj_x == ""){
      obj_x = 0;
    }
    if (typeof obj_y == "undefined" || obj_y == ""){
      obj_y = 0;
    }
    $("canvas").setLayer(Obj + i, {
      x: obj_x,
      y: obj_y
    })
  .drawLayers();
  }
}
//idを変更している
    function change_id(obj){
      $(function(){
        $("input").each(function(i){
            $("#" + obj +"_x").attr("id",obj + "_x" + (i+1));
            $("#" + obj +"_y").attr("id",obj + "_y" + (i+1));
        });
      });
    }
//円を描く
cicle.addEventListener("click",function(){
  ++count_Ellipse;
  for(var i = 1;i < count_Ellipse;i++){
    $("canvas").drawEllipse({
      layer:true,
      name:"Ellipse" + i,
      strokeStyle: "black",
      fillStyle: "blue",
      strokeWidth: 1,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fromCenter: false,
      draggable: true
    });
  }
  var ellipse_code = "ellipse(" + '<input type="text" size="4" id="ellipse_x">' + "," + '<input type="text" size="4" id="ellipse_y">' + ",w,h); " + "\n";
  literal(ellipse_code);
},false);
