$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var for_str = document.getElementById("for");
var compile = document.getElementById("compile");
var for_property = document.getElementById("for_property");
var sample_for = document.getElementById("sample_for");
var figuers = [];
var for_figuers = [];
var load_figuers = 0;
var count_Rect = 1;
var count_Ellipse = 1;
var count_for = 0;
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
var for_over;
var for_out;
var for_y;
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
    ellipse_flag = false;
    rect_flag = true;
    for_property.innerHTML = "四角形の始めのx座標を" + '<input type="text" size="4" id = "int">' + "y座標を" + '<input type = "text" size = "4" id = "for_y">' +"から横に" + '<input type="text" size="4" id = "ctrl">' + " まで"
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

sample_for.addEventListener("click",function(){
  if(rect_flag == true){
    for_obj("rectangle");
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"red",
/*      mouseover:function(layer){
        console.log(layer.groups);
      }*/
    }).drawLayers();
  }
  if(ellipse_flag == true){
    for_obj("ellipse");
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"blue",
    /*  mouseover:function(layer){
        console.log(layer.groups);
      }*/
    }).drawLayers();
  }
  },false);

function for_obj(Obj){
  var subint = $("#int").val();
  var subctrl = $("#ctrl").val();
  var subrate = $("#rate").val();
  var subfor_y = $("#for_y").val();

  if (typeof subint == "undefined" || subint == "" ||isNaN($("#int").val())){
    subint = 0;
  }
  if (typeof subctrl == "undefined" || subctrl == "" ||isNaN($("#ctrl").val())){
    subctrl = 0;
  }
  if (typeof subrate == "undefined" || subrate == "" ||isNaN($("#rate").val())){
    subrate = 0;
  }
  if (typeof subfor_y == "undefined" || subfor_y == "" ||isNaN($("#for_y").val())){
    subfor_y = 0;
  }

  $(function(){
    $("#int").change(function(){
      subint = subint.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#int").val(subint);
    }).change();
    $("#ctrl").change(function(){
      subctrl = subctrl.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#ctrl").val(subctrl);
    }).change();
    $("#rate").change(function(){
      subrate = subrate.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#rate").val(subrate);
    }).change();
    $("#for_y").change(function(){
      subfor_y = subfor_y.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#for_y").val(subfor_y);
    }).change();
  })

  int =  parseInt(subint);
  ctrl = parseInt(subctrl);
  rate = parseInt(subrate);
  for_y = parseInt(subfor_y);

for(var ob_x = int; ob_x < ctrl; ob_x += rate){
  for(var i = 0;i < count_for;i++){
  $("canvas").addLayer({
    type:Obj,
    layer:true,
//    name:"OBJ" + i,
    groups: ['shapes' + i],
//    dragGroups: ['shapes'],
    strokeStyle: "black",
//    fillStyle: "black",
    strokeWidth: 1,
    x:ob_x,
    y: for_y,
    width: 100,
    height: 100,
    radius:50,
    fromCenter: false,
//    draggable:true,
    mouseover:function(layer){
      $(function(){
        $("pre > .for_source" + i).each(function(){
          $(function(){
            for_over = document.getElementById("for_source" + i);
            for_over.style.backgroundColor = "rgba(127,255,212,0.55)";
          });
        });
      });
    },
    mouseout:function(layer){
      $(function(){
        $("pre > .for_source" + i).each(function(){
          $(function(){
            for_out = document.getElementById("for_source" + i);
            for_out.style.backgroundColor = "rgb(11, 0, 35)";
          });
        });
      });
    //  console.log(i);
    }
  }).drawLayers();
  }
}
  var for_code = "<span id = 'for_source'><font color = '#f7f7f7' size = '5'>" +
  "for (int x = " + int + ";x < " + ctrl + "; x+=" + rate + "){" + "\n" +
    "rect(x," + for_y + ",100,100);" + "\n" +
  "}" + "\n" +
  "</font></span>" + "\n";
      literal(for_code);
}
//図形の位置を変える
function Compile(obj,Obj,count_obj){
  for(var i = 1;i < count_obj;i++){
    obj_x = $("#" + obj + "_x" + i).val();
    obj_y = $("#" + obj + "_y" + i).val();

    if (typeof obj_x == "undefined" || obj_x == "" ||isNaN($("#" + obj + "_x" + i).val())){
      obj_x = 0;
    }
    if (typeof obj_y == "undefined" || obj_y == "" ||isNaN($("#" + obj + "_y" + i).val())){
      obj_y = 0;
    }

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
  rect_flag = false;
  ellipse_flag = true;
  for_property.innerHTML = "円の始めのx座標を" + '<input type="text" size="4" id = "int">' + "y座標を" + '<input type = "text" size = "4" id = "for_y">' +"から横に" + '<input type="text" size="4" id = "ctrl">' + " まで"
  + '<input type="text" size="4" id = "rate">' + "ずつ動かす";
  }else{
      $("canvas").setLayer("Ellipse" + (count_Ellipse -1),{
        visible:true
      }).drawLayers();
    }
},false);

for_str.addEventListener("click",function(){
  for_property.innerHTML = "オブジェクトを選択してください.";
  for_flag = true;
  count_for++;
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
