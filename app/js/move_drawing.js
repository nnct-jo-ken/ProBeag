$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var Image = document.getElementById("for");
var compile = document.getElementById("compile");
var figuers = [];
var for_figuers = [];
var load_figuers = 0;
var count_Rect = 1;
var count_Ellipse = 1;
var count_Image = 1;
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
            decompile_code = code.replace("/^/","\n");
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
       draggable:true,
       mouseover:function(){
         MOver("rect_source",count_Rect)
       },
       mouseout:function(){
         MOut("rect_source",count_Rect);
       }
       });
     }
    var rect_code = "<font color = '#f7f7f7'>rect(" + '<input type="text" size="4"id ="rect_x">' + "," + '<input type="text" size="4"id ="rect_y">' + ",w,h);</font>" + "\n";
    literal(rect_code);
  },false);

//ボタンを押して図形の位置を変更する
  compile.addEventListener("click",function(){
    Compile("rect","Rect",count_Rect);
    Compile("ellipse","Ellipse",count_Ellipse);
  },false);

function MOver(obj,count_obj){
  for(var i = 1;i < count_obj;i++){
  $(function(){
      $("span","#" + obj + i).css({
        'background-color':'yellow'
      });
  });
}
}
function MOut(obj,count_obj){
  for(var i = 1;i < count_obj;i++){
    $(function(){
      $("#" + obj + i).css({
        "background-color" : "white",
      });
    });
  }
}

//図形の位置を変える
function Compile(obj,Obj,count_obj){
  for(var i = 1;i < count_obj;i++){
    obj_x = $("#" + obj + "_x" + i).val();
    obj_y = $("#" + obj + "_y" + i).val();

    $(function(){
      $("#" + obj + "_x" + i).change(function(){
        obj_x = obj_x.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        $("#" + obj + "_x" + i).val(obj_x);
      }).change();
      $("#" + obj + "_y" + i).change(function(){
        obj_y = obj_y.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        $("#" + obj + "_y" + i).val(obj_y);
      }).change();
    })

    if (typeof obj_x == "undefined" || obj_x == "" ||isNaN($("#" + obj + "_x" + i).val())){
      obj_x = 0;
    }
    if (typeof obj_y == "undefined" || obj_y == "" ||isNaN($("#" + obj + "_y" + i).val())){
      obj_y = 0;
    }

    $("canvas").setLayer(Obj + i, {
      x: obj_x,
      y: obj_y
    })
  .drawLayers();
  }
}

function change_id_span(obj){
  $(function(){
    $("span").each(function(i){
        $("#" + obj).attr("id",obj + (i+1));
    });
  });
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
  var ellipse_code = "<font color = '#f7f7f7'>ellipse(" + '<input type="text" size="4" id="ellipse_x">' + "," + '<input type="text" size="4" id="ellipse_y">' + ",w,h); </font>" + "\n";
  literal(ellipse_code);
},false);

Image.addEventListener("click",function(){
  ++count_Image;
  for(var i = 1;i < count_Image;i++){
    $("canvas").drawImage({
      layer:true,
      name:"Image" + i,
      source:"img/black.png",
      x: 100,
      y: 100,
      width : 100,
      height : 100,
      fromCenter : false,
      draggable : true
    });
  }
  var for_code = "for(int i =" + '<input type="text" size="4" id="for_init">' + "; i" + '<input type="text" size="4" id="for_ctr">' + "; i" + '<input type="text" size="4" id="for_incr">' + ";){" + "\n";
  literal(for_code);
},false);
