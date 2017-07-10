$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;
//document.getElementByIdでhtmlのid属性を取得
var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var for_str = document.getElementById("for");
var if_str = document.getElementById("if");
var triangle = document.getElementById("triangle");
var polygon = document.getElementById("polygon");
var compile = document.getElementById("compile");
var for_property = document.getElementById("for_property");
var sample_for = document.getElementById("sample_for");
var back = document.getElementById("back");
var store = document.getElementById("store");
var if_property = document.getElementById("if_property");
var sample_if = document.getElementById("sample_if");
//表示するコードをいれる配列
var figuers = [];
//何回関数が読みだされたかカウント
var load_figuers = 0;
var count_Rect = 1;
var count_Ellipse = 1;
var count_tri = 1;
var count_ply = 1;
var count_for = 0;
//forを作る判定
var ellipse_flag = false;
var rect_flag = false;
var tri_flag = false;
var ply_flag = false;
var for_flag = false;
var if_flag = false;
//図形のtextboxの値を取得する変数
var obj_x;
var obj_y;
//mouseを動かした際のid属性を入れる変数
var object_Over;
var object_Out;
//forのtextboxの値を取得する変数
var int;
var ctrl;
var rate;
//forで作った図形のmouse動作
var for_over;
var for_out;
//forで指定するy座標の変数
var for_y;
//図形のソースコード
var rect_code;
var ellipse_code;
var tri_code;
//図形が何回canvas内にあるか
var count_groups = 0;
//図形のnameプロパティを取得
var obj_flag;
//図形の座標取得
var X;
var Y;
//for文のellipseかrectなどを取得する変数
var obj_judge;
//if文のインクリメントかデクリメントかをを決める
var obj_ope_x;
var obj_ope_y;
//if文の演算子を決める
var comp_x;
var comp_y;
//ぶっちゃけいらない,改良予定の部分
var re_x = 100;
var re_y = 100;

//配列に入れてtoString()で文字列に直している
function literal(figures_code){
  //引数をfiguersの一番最後にぶちこむ
  figuers.push(figures_code);
  //forを作る際のやり直しを行うもの
  if(for_flag == true){
    //最後の要素を消す
    figuers.pop();
  }
  //配列を文字列に直す
  code = figuers.toString();
  //正規表現のところやね
  decompile_code = code.replace("\t","\n");
  //これでpreタグ内に書き込める
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
  ++count_groups;
  ++count_Rect;
  for (var i = 1;i < count_Rect;i++){
    //これがJcanvasの四角形を描くソース
     $("canvas").drawRect({
       layer:true,
       name:"Rect" + i,
       groups:["obj" + count_groups],
       strokeStyle: "black",
       fillStyle:"#FF0000",
       strokeWidth: 1,
       x: 100,
       y: 100,
       width: 100,
       height: 100,
       fromCenter: false,
       dblclick:function(layer){
         layer.fillStyle = $("#color").val();
       },
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
       },
       click:function(layer){
       	 if(if_flag === true){
           obj_flag = layer.name;
           X = layer.x;
           Y = layer.y;
           if_property.innerHTML = "オブジェクトを<input type = 'text' size = '4' id = 'pace'>秒でx座標を<input type = 'text' size = '4' id = 'if_x'>までy座標を<input type = 'text' size = '4' id = 'if_y'>まで動かす.";
         }
        }
      });
     }
    rect_code = "<span id = 'rect_source'><font color = '#f7f7f7' size = '5'>rect(" + '<input type="text" size="4"id ="rect_x" value = ' + re_x + '>' + "," + '<input type="text" size="4"id ="rect_y" value = ' + re_y + '>' + ",w,h);</font></span>" + "\n";
    literal(rect_code);
    //forをクリックされた際の処理
    if(for_flag === true){
      //nameプロパティがRect(最後)の図形を見えなくする
      $("canvas").setLayer("Rect" + (count_Rect -1),{
        visible:false
      }).drawLayers();
    count_Rect--;
    for_flag = false;
    ellipse_flag = false;
    rect_flag = true;
    //table内のfor_propertyに書き込む
    for_property.innerHTML = "四角形の始めのx座標を" + '<input type="text" size="4" id = "int">' + "y座標を" + '<input type = "text" size = "4" id = "for_y">' +"から横に" + '<input type="text" size="4" id = "ctrl">' + " まで"
    + '<input type="text" size="4" id = "rate">' + "ずつ動かす";
    obj_judge = "rect";
  }else{
    $("canvas").setLayer("Rect" + (count_Rect -1),{
      visible:true
    }).drawLayers();
  }
  },false);

//ボタンを押して図形の位置を変更する
  compile.addEventListener("click",function(){
    //(図形のtextboxのid,nameプロパティ,count_??);
    Compile("rect","Rect",count_Rect);
    Compile("ellipse","Ellipse",count_Ellipse);
    Compile("triangle","Triangle",count_tri);
  },false);

//マウスオーバーの関数
function MOver(obj){
  $(function(){
    //preタグ内のspanのclass名を取得
    $("pre > ." + obj).each(function(){
      object_Over = document.getElementById(obj);
      object_Over.style.backgroundColor = "rgba(127,255,212,0.55)";
    });
  });
}
//マウスアウトの関数
function MOut(obj){
  $(function(){
    $("pre > ." + obj).each(function(){
      object_Out = document.getElementById(obj);
      object_Out.style.backgroundColor = "rgb(11, 0, 35)";
    });
  });
}
//if文の実行のイベントリスナ
sample_if.addEventListener("click",function(){
//ifのtextbox内の値をid属性で指定して取得
var subpace = $("#pace").val();
var subif_x = $("#if_x").val();
var subif_y = $("#if_y").val();
//全角で打った時の数値を半角に直す処理
$(function(){
    $("#pace").change(function(){
      subpace = subpace.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#pace").val(subpace);
    }).change();
    $("#if_x").change(function(){
      subif_x = subif_x.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#if_x").val(subif_x);
    }).change();
    $("#if_y").change(function(){
      subif_y = subif_y.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#if_y").val(subif_y);
    }).change();
    });
//textbox内の値の中身が入ってなかったり、数値以外だった際に行う処理
	if (typeof subpace == "undefined" || subpace == "" ||isNaN($("#pace").val())){
      subpace = 1;
    }
    if (typeof subif_x == "undefined" || subif_x == "" ||isNaN($("#if_x").val())){
      subif_x = 0;
    }
    if (typeof subif_y == "undefined" || subif_y == "" ||isNaN($("#if_y").val())){
      subif_y = 0;
    }
//textboxで取得した値を数値に直す処理(そのまま使うと文字列になるため)
    pace = parseInt((subpace*1000));
    if_x = parseInt(subif_x);
 	  if_y = parseInt(subif_y);
//ifのときにクリックされた図形に対して行うアニメーション
 if(if_flag === true){
  $("canvas").animateLayer(obj_flag,{
   x:if_x,
   y:if_y
  },pace).drawLayers();
 }

 if(X <= if_x && Y <= if_y){
   comp_x = "<=";
   comp_y = "<=";
   obj_ope_x = "+=";
   obj_ope_y = "+=";
 }else if(X >= if_x && Y <= if_y){
   comp_x = ">=";
   comp_y = "<=";
   obj_ope_x = "-=";
   obj_ope_y = "+=";
 }else if(X <= if_x && Y >= if_y){
   comp_x = "<=";
   comp_y = ">=";
   obj_ope_x = "+=";
   obj_ope_y = "-=";
 }else if(X >= if_x && Y >= if_y){
   comp_x = ">=";
   comp_y = ">=";
   obj_ope_x = "-=";
   obj_ope_y = "-=";
 }
 //変化率を出す処理
 //x,yに+=か-=する数値
 var num_x = (if_x - X)/(60*subpace);
 var num_y = (if_y - Y)/(60*subpace);

 var if_code = "<span id = 'if_source'><font color = '#f7f7f7' size = '5'>" +
 "if( x " + comp_x + if_x + " && y "+ comp_y + if_y + "){" + "\n" +
                                        //↓小数点を決める、この場合は第二位まで
   " x " + obj_ope_x + parseFloat(num_x).toFixed(2) + ";" + "\n" +
   " y " + obj_ope_y + parseFloat(num_y).toFixed(2) + ";" + "\n" +
 "}" + "\n" +
 "</font></span>" + "\n";
  literal(if_code);
  if_flag = false;
},false);

//for文を実行のイベントリスナ
sample_for.addEventListener("click",function(){
  if(rect_flag == true){
    for_obj("rectangle");
    //グループ化しているものを取得してプロパティを追加
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"#FF0000",
    }).drawLayers();
  }
  if(ellipse_flag == true){
    for_obj("ellipse");
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"#0000FF",
    }).drawLayers();
  }
  },false);

//for文の実行コード
function for_obj(Obj){
  //forのtextbox内の値を取得
  var subint = $("#int").val();
  var subctrl = $("#ctrl").val();
  var subrate = $("#rate").val();
  var subfor_y = $("#for_y").val();
  //全角→半角変換処理
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
//textboxの値判定
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
//文字列→数値変換処理
  int =  parseInt(subint);
  ctrl = parseInt(subctrl);
  rate = parseInt(subrate);
  for_y = parseInt(subfor_y);
//for文を実行して図形を出す処理
for(var ob_x = int; ob_x < ctrl; ob_x += rate){
  for(var i = 0;i < count_for;i++){
  $("canvas").addLayer({
    type:Obj,
    layer:true,
    groups: ['shapes' + i],
    strokeStyle: "black",
    strokeWidth: 1,
    x:ob_x,
    y: for_y,
    width: 100,
    height: 100,
    radius:50,
    fromCenter: false,
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
    }
  }).drawLayers();
  }
}
  var for_code = "<span id = 'for_source'><font color = '#f7f7f7' size = '5'>" +
  "for (int x = " + int + ";x < " + ctrl + "; x+=" + rate + "){" + "\n" +
    obj_judge + "(x," + for_y + ",100,100);" + "\n" +
  "}" + "\n" +
  "</font></span>" + "\n";
      literal(for_code);
}

//図形の位置を変える
function Compile(obj,Obj,count_obj){
  for(var i = 1;i < count_obj;i++){
    //図形のtextbox内の値を取得
    obj_x = $("#" + obj + "_x" + i).val();
    obj_y = $("#" + obj + "_y" + i).val();
//全角→半角変換処理
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
    //textboxの値判定
    if (typeof obj_x == "undefined" || obj_x == "" ||isNaN($("#" + obj + "_x" + i).val())){
      obj_x = 0;
    }
    if (typeof obj_y == "undefined" || obj_y == "" ||isNaN($("#" + obj + "_y" + i).val())){
      obj_y = 0;
    }
//nameプロパティを指定して動かす
    $("canvas").setLayer(Obj + i, {
      x: obj_x,
      y: obj_y
    })
  .drawLayers();
  }
}

//spanタグにClassを付与
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
//spanタグのid変更
    function change_id_span(obj){
      $(function(){
        $("span").each(function(i){
          $("#" + obj).attr("id",obj + (i+1));
        });
      });
    }
//円を描く
cicle.addEventListener("click",function(){
  ++count_groups;
  ++count_Ellipse;
  for(var i = 1;i < count_Ellipse;i++){
    $("canvas").drawEllipse({
      layer:true,
      name:"Ellipse" + i,
      groups:["obj" + count_groups],
      strokeStyle: "black",
      fillStyle: "#0000FF",
      strokeWidth: 1,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fromCenter: false,
      draggable: true,
      dblclick:function(layer){
        layer.fillStyle = $("#color").val();
      },
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
  ellipse_code = "<span id = 'ellipse_source'><font color = '#f7f7f7' size = '5'>ellipse(" + '<input type="text" size="4" id="ellipse_x" value = "100">' + "," + '<input type="text" size="4" id="ellipse_y" value = "100">' + ",w,h); </font></span>" + "\n";
  literal(ellipse_code);
  //forがクリックされたときの処理
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
  obj_judge = "ellipse";
  }else{
      $("canvas").setLayer("Ellipse" + (count_Ellipse -1),{
        visible:true
      }).drawLayers();
    }
},false);

//画像の緑のイベントリスナ
if_str.addEventListener("click",function(){
 if_property.innerHTML = "オブジェクトを選択してください.";
 if_flag = true;
},false);

//画像の黒のイベントリスナ
for_str.addEventListener("click",function(){
  for_property.innerHTML = "オブジェクトを選択してください.";
  for_flag = true;
  count_for++;
},false);

//前に戻るのイベントリスナ
back.addEventListener("click",function(){
  //一番最後の配列の要素消去
  figuers.pop();
  //それぞれのプロパティを消す
  if(for_flag === true){
    for_property.innerHTML = "";
  }
  if(if_flag === true){
    if_property.innerHTML = "";
  }
  //図形を消してレイヤーごと消去
  if(count_Rect != 1){
    $("canvas").setLayerGroup("obj" + (count_groups),{
      visible:false
    }).drawLayers();
    $("canvas").removeLayer("Rect" + (count_Rect - 1));
    count_Rect--;
  }
  if(count_Ellipse != 1){
    $("canvas").setLayerGroup("obj" + (count_groups),{
      visible:false
    }).drawLayers();
    $("canvas").removeLayer("Ellipse" + (count_Ellipse - 1));
    count_Ellipse--;
  }
  if(count_tri != 1){
    $("canvas").setLayerGroup("obj" + (count_groups),{
      visible:false
    }).drawLayers();
    $("canvas").removeLayer("Triangle" + (count_tri - 1));
    count_tri--;
  }
  if(count_for != 0){
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      visible:false
    }).drawLayers();
    $("canvas").removeLayerGroup("shapes" + (count_for - 1));
    count_for--;
  }
  --count_groups;
  for_flag = false;
},false);

//全消去のイベントリスナ
store.addEventListener("click",function(){
  decompile_code = "";
  count_Rect = 1;
  count_tri = 1;
  count_Ellipse = 1;
  count_groups = 0;

  $("canvas").clearCanvas();
  $("canvas").setLayers({
    visible:false
  }).drawLayers();
  $("canvas").removeLayers();
},false);


//三角形を描く
triangle.addEventListener("click",function(){
  ++count_groups;
  ++count_tri;
  for (var i = 1;i < count_tri;i++){
    //これがJcanvasの三角形を描くソース
     $("canvas").drawPolygon({
       layer:true,
       name:"Triangle" + i,
       groups:["obj" + count_groups],
       strokeStyle: "black",
       fillStyle:"#FFA500",
       strokeWidth: 1,
       x: 100,
       y: 100,
       radius:50,
       fromCenter: false,
       sides: 3,
       dblclick:function(layer){
         layer.fillStyle = $("#color").val();
       },
       draggable:true,
       mouseover:function(layer){
         $(function(){
           MOver("triangle_source" + (i-1));
         });
       },
       mouseout:function(layer){
         $(function(){
           MOut("triangle_source" + (i-1));
         });
       },
       click:function(layer){
       	 if(if_flag === true){
           obj_flag = layer.name;
           X = layer.x;
           Y = layer.y;
           if_property.innerHTML = "オブジェクトを<input type = 'text' size = '4' id = 'pace'>秒でx座標を<input type = 'text' size = '4' id = 'if_x'>までy座標を<input type = 'text' size = '4' id = 'if_y'>まで動かす.";
         }
        }
      });
     }
    tri_code = "<span id = 'triangle_source'><font color = '#f7f7f7' size = '5'>triangle(" + '<input type="text" size="4"id ="triangle_x" value = ' + re_x + '>' + "," + '<input type="text" size="4"id ="triangle_y" value = ' + re_y + '>' + ",w,h);</font></span>" + "\n";
    literal(tri_code);
    //forをクリックされた際の処理
    if(for_flag === true){
      //nameプロパティがTriangle(最後)の図形を見えなくする
      $("canvas").setLayer("Triangle" + (count_tri -1),{
        visible:false
      }).drawLayers();
    count_tri--;
    for_flag = false;
    rect_flag = false;
    ellipse_flag = false;
    tri_flag = true;
    //table内のfor_propertyに書き込む
    for_property.innerHTML = "三角形の始めのx座標を" + '<input type="text" size="4" id = "int">' + "y座標を" + '<input type = "text" size = "4" id = "for_y">' +"から横に" + '<input type="text" size="4" id = "ctrl">' + " まで"
    + '<input type="text" size="4" id = "rate">' + "ずつ動かす";
    obj_judge = "rect";
  }else{
    $("canvas").setLayer("Triangle" + (count_tri -1),{
      visible:true
    }).drawLayers();
  }
  },false);
