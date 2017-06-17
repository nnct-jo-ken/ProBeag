$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var for_str = document.getElementById("for");
var compile = document.getElementById("compile");
var for_property = document.getElementById("for_property");
var figuers = [];
var for_figuers = [];
var load_figuers = 0;
var count_Rect = 1;
var count_Ellipse = 1;
var count_for = 1;
var ellipse_flag = false;
var rect_flag = false;
var for_flag = false;
var obj_x;
var obj_y;
var object_Over;
var object_Out;
var int;
var ctrl;
var rate;
//配列に入れてtoString()で文字列に直している
function literal(figures_code){
  figuers.push(figures_code);
  if(for_flag == true){
    figuers.pop();
  }
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
       mouseover:function(layer){
         $(function(){
           MOver("rect_source" + (i-1));
         });
       },
       mouseout:function(layer){
         $(function(){
           MOut("rect_source" + (i-1));
         });
       }
      });
     }
    var rect_code = "<span id = 'rect_source'><font color = '#f7f7f7' size = '5'>rect(" + '<input type="text" size="4"id ="rect_x">' + "," + '<input type="text" size="4"id ="rect_y">' + ",w,h);</font></span>" + "\n";
    literal(rect_code);
    if(for_flag === true){
          $("canvas").setLayer("Rect" + (count_Rect -1),{
            visible:false
        }).drawLayers();
        count_Rect--;
    for_flag = false;
    for_property.innerHTML = "四角形始めの" + '<input type="text" size="4" id = "int">' + "から横に" + '<input type="text" size="4" id = "ctrl">' + " まで"
    + '<input type="text" size="4" id = "rate">' + "ずつ動かす";
  }else{
    $("canvas").setLayer("Rect" + (count_Rect -1),{
      visible:true
    }).drawLayers();
  }
  },false);

//ボタンを押して図形の位置を変更する
  compile.addEventListener("click",function(){
    Compile("rect","Rect",count_Rect);
    Compile("ellipse","Ellipse",count_Ellipse);
    for_obj();
  },false);

function MOver(obj){
  $(function(){
    $("pre > ." + obj).each(function(){
      object_Over = document.getElementById(obj);
      object_Over.style.backgroundColor = "rgba(127,255,212,0.55)";
    });
  });
}
function MOut(obj){
  $(function(){
    $("pre > ." + obj).each(function(){
      object_Out = document.getElementById(obj);
      object_Out.style.backgroundColor = "rgb(11, 0, 35)";
    });
  });
}

function for_obj(){
  var subint = $("#int").val();
  var subctrl = $("#ctrl").val();
  var subrate = $("#rate").val();

  int =  parseInt(subint);
  ctrl = parseInt(subctrl);
  rate = parseInt(subrate);
var i = count_for;
for(var ob_x = int; ob_x < ctrl; ob_x += rate){
  i++;
  $("canvas").drawRect({
    layer:true,
  /*  groups: ['shapes'],
    dragGroups: ['shapes'],*/
    strokeStyle: "black",
    fillStyle: "red",
    strokeWidth: 1,
    x:ob_x,
    y: 100,
    width: 100,
    height: 100,
    fromCenter: false,
    draggable:true,
    mouseover:function(layer){
      $(function(){
        var for_over = document.getElementById("for_source");
        for_over.style.backgroundColor = "rgba(127,255,212,0.55)";
      });
    },
    mouseout:function(layer){
      $(function(){
        var for_out = document.getElementById("for_source");
        for_out.style.backgroundColor = "rgb(11, 0, 35)"
      });
    }
  }).drawLayers();

  }
  var for_code = "<span id = 'for_source'><font color = '#f7f7f7' size = '5'>" +
  "for (int x = " + int + ";x < " + ctrl + "; x+=" + rate + ";){" + "\n" +
    "rect(x,100,100,100);" + "\n" +
  "}" + "\n" +
  "</font></span>";
  literal(for_code);
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
//      visible:true,
      x: obj_x,
      y: obj_y
    })
  .drawLayers();
  }
}

function change_class_span(obj){
  $(function(){
    $("span").each(function(i){
        $("#" + obj + (i+1)).addClass(obj + (i+1));
      //  i++;
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

    function change_id_span(obj){
      $(function(){
        $("span").each(function(i){
          $("#" + obj).attr("id",obj + (i+1));
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
      draggable: true,
      visible:true,
      mouseover:function(layer){
        $(function(){
          MOver("ellipse_source" + (i-1));
        });
      },
      mouseout:function(layer){
        $(function(){
          MOut("ellipse_source" + (i-1));
        });
      }
    });
  }
  var ellipse_code = "<span id = 'ellipse_source'><font color = '#f7f7f7' size = '5'>ellipse(" + '<input type="text" size="4" id="ellipse_x">' + "," + '<input type="text" size="4" id="ellipse_y">' + ",w,h); </font></span>" + "\n";
  literal(ellipse_code);
  if(for_flag === true){
    $("canvas").setLayer("Ellipse" + (count_Ellipse -1),{
      visible:false
    }).drawLayers();
    count_Ellipse--;
  for_flag = false;
  for_property.innerHTML = "Ellipse";
  }else{
      $("canvas").setLayer("Ellipse" + (count_Ellipse -1),{
        visible:true
      }).drawLayers();
    }
},false);

for_str.addEventListener("click",function(){
  for_property.innerHTML = "オブジェクトを選択してください.";
  for_flag = true;
},false);
/*
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
*/
