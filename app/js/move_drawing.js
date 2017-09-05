$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;
//document.getElementByIdでhtmlのid属性を取得
var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var for_str = document.getElementById("for");
var if_str = document.getElementById("if");
var triangle = document.getElementById("triangle");
var polygon = document.getElementById("polygon");
var line = document.getElementById("line");
var compile = document.getElementById("compile");
var for_property = document.getElementById("for_property");
var sample_for = document.getElementById("sample_for");
var back = document.getElementById("back");
var store = document.getElementById("store");
var if_property = document.getElementById("if_property");
var sample_if = document.getElementById("sample_if");
//表示するコードをいれる配列
var figures = [];
//何回関数が読みだされたかカウント
var load_figures = 0;
var count_Rect = 1;
var count_Ellipse = 1;
var count_tri = 1;
var count_ply = 1;
var count_line = 1;
var count_for = 0;
//forを作る判定
var ellipse_flag = false;
var rect_flag = false;
var tri_flag = false;
var ply_flag = false;
var for_flag = false;
var if_flag = false;
var line_flag = false;
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
var ply_code;
//図形が何回canvas内にあるか
var count_groups = 0;
//forの多角形の画数を決める
var for_sizes;
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
//図形のx,y座標取得する変数
var fig_x = 100;
var fig_y = 100;
//Lineの第二座標を決める変数
var x;
var y;
//Lineのlayerを受け取る変数
var Line_name;
//setIntervalをインスタンス化する変数
var change_text;
//色のソースコード
var fill_code_rec;
var fill_code_ell;
var fill_code_tri;
var fill_code_ply;
var stroke_code_line;

//Lineの第二座標をクリックで設定する関数
function onClick(e) {
  //図形の絶対値座標を取得する
    var line = e.target.getBoundingClientRect();
    //Math.ceilで数字の切り上げ,
    //clientでページ内の座標取得
    x = Math.ceil(e.clientX - line.left);
    y = Math.ceil(e.clientY - line.top);
    $("canvas").setLayer(Line_name,{
      x2:x,
      y2:y,
    }).drawLayers();
}
canvas.addEventListener("click",onClick,false);

//配列に入れて一番最後の要素をpreタグに入れる
function literal(figures_code){
  //引数をfiguersの一番最後にぶちこむ
  figures.push(figures_code);
  //forを作る際のやり直しを行うもの
  if(for_flag == true){
    //最後の要素を消す
    figures.pop();
  }
  var count = figures.length;
//preタグ内に書き込む
  if(++load_figures == figures.length){
    $("#source_code").append(figures[count-1]);
  }
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
       width: 65,
       height: 65,
       fromCenter: false,
       dblclick:function(layer){

         layer.fillStyle = $("#color").val();
         document.getElementById('rec_fill' + (i-1)).innerHTML = "<li><font color = '#f7f7f7' size = '3'>fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");</font></li>";
       },
       draggable:true,
       drag:function(layer){
          $("#rect_x" + (i - 1)).val(layer.x);
          $("#rect_y" + (i - 1)).val(layer.y);
       },

       mouseover:function(layer){
         $(function(){
           change_text = setInterval(function(){
                 $("#rect_x" + (i - 1)).val(layer.x);
                 $("#rect_y" + (i - 1)).val(layer.y);
           },10);
         });
         $(function(){
           MOver("rect_source" + (i-1));
         });
       },
       mouseout:function(layer){
         clearInterval(change_text);
         $(function(){
           MOut("rect_source" + (i-1));
         });
       },
       click:function(layer){
       	 if(if_flag === true){
           obj_flag = layer.name;
           X = layer.x;
           Y = layer.y;
           if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
         }
        }
      });
     }

    fill_code_rec = "<li id='rec_fill'><font color = '#f7f7f7' size = '3'>fill(255,0,0);</font></li>";
    literal(fill_code_rec);
    rect_code = "<li id = 'rect_source'><font color = '#f7f7f7' size = '3'>rect(" + '<input class="textbox" type="text" size="2"id ="rect_x" placeholder = 100>' + "," + '<input class="textbox" type="text" size="2"id ="rect_y" placeholder = 100>' + ",100,100);</font></li>";
    literal(rect_code);
    $("#rect_x").attr("id","rect_x" + (count_Rect-1));
    $("#rect_y").attr("id","rect_y" + (count_Rect-1));
    $("#rect_source").attr("id","rect_source" + (count_Rect-1));
    $("#rect_source" + (count_Rect-1)).addClass("rect_source" + (count_Rect-1));
    $("#rec_fill").attr("id","rec_fill" + (count_Rect-1));
    //forをクリックされた際の処理
    if(for_flag === true){
      //nameプロパティがRect(最後)の図形を見えなくする
      $("canvas").setLayer("Rect" + (count_Rect -1),{
        visible:false
      }).drawLayers();
    count_Rect--;
    for_flag = false;
    ellipse_flag = false;
    ply_flag = false;
    line_flag = false;
    tri_flag = false;
    rect_flag = true;
    //table内のfor_propertyに書き込む
    for_property.innerHTML = "四角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "2" id = "for_y">' +"から横に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
    + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
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
    Compile("polygon","Polygon",count_ply);
    Compile_Line("line1","Line",count_line);
  },false);

//Lineだけの変更処理
  function Compile_Line(obj,Obj,count_obj){
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
        x1: obj_x,
        y1: obj_y
      })
    .drawLayers();
    }
  }

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

 var if_code = "<span id = 'if_source'><font color = '#f7f7f7' size = '3'>" +
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
    for_sizes = 1;
    //グループ化しているものを取得してプロパティを追加
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"#FF0000",
    }).drawLayers();
  }
  if(ellipse_flag == true){
    for_obj("ellipse");
    for_sizes = 1;
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"#0000FF",
    }).drawLayers();
  }
  if(tri_flag == true){
    for_obj("polygon");
    for_sizes = 3;
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"#FFC90E",
    }).drawLayers();
  }
  if(ply_flag == true){
    for_obj("polygon");
    for_sizes = angle.value;
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:"#A349A4",
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
    width: 65,
    height: 65,
    radius:32.5,
    sides:for_sizes,
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
  var for_code = "<span id = 'for_source'><font color = '#f7f7f7' size = '3'>" +
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
/*要らなくなった
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
    */
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
      width: 65,
      height: 65,
      fromCenter: false,
      draggable: true,
      dblclick:function(layer){
        layer.fillStyle = $("#color").val();
        document.getElementById("ell_fill" + (i-1)).innerHTML = "<li><font color = '#f7f7f7' size = '3'>fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");</font></li>";
      },
      visible:true,
      drag:function(layer){
        $("#ellipse_x" + (i - 1)).val(layer.x);
        $("#ellipse_y" + (i - 1)).val(layer.y);
      },
      mouseover:function(layer){
        $(function(){
          change_text = setInterval(function(){
            $("#ellipse_x" + (i - 1)).val(layer.x);
            $("#ellipse_y" + (i - 1)).val(layer.y);
          },10);
        });
        $(function(){
          MOver("ellipse_source" + (i-1));
        });
      },
      mouseout:function(layer){
        clearInterval(change_text);
        $(function(){
          MOut("ellipse_source" + (i-1));
        });
      },
      click:function(layer){
        if(if_flag === true){
          obj_flag = layer.name;
          X = layer.x;
          Y = layer.y;
          if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        }
       }
    });
  }
  fill_code_ell = "<li id='ell_fill'><font color ='#f7f7f7' size = '3'>fill(0,0,255)</font></li>";
  literal(fill_code_ell);
  ellipse_code = "<li id = 'ellipse_source'><font color = '#f7f7f7' size = '3'>ellipse(" + '<input class="textbox" type="text" size="2" id="ellipse_x" placeholder = "100">' + "," + '<input class="textbox" type="text" size="2" id="ellipse_y" placeholder = "100">' + ",100,100); </font></li>";
  literal(ellipse_code);
  $("#ellipse_x").attr("id","ellipse_x" + (count_Ellipse-1));
  $("#ellipse_y").attr("id","ellipse_y" + (count_Ellipse-1));
  $("#ellipse_source").attr("id","ellipse_source" + (count_Ellipse-1));
  $("#ellipse_source" + (count_Ellipse-1)).addClass("ellipse_source" + (count_Ellipse-1));
  $("#ell_fill").attr("id","ell_fill" + (count_Ellipse-1));
  //forがクリックされたときの処理
  if(for_flag === true){
    $("canvas").setLayer("Ellipse" + (count_Ellipse -1),{
      visible:false
    }).drawLayers();
    count_Ellipse--;
  for_flag = false;
  rect_flag = false;
  tri_flag = false;
  ply_flag = false;
  line_flag = false;
  ellipse_flag = true;
  for_property.innerHTML = "円の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "4" id = "for_y">' +"から横に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
  + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
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
  //一番最後の要素消去
  $("li:last").remove();
  $("li:last").remove();
  //それぞれのプロパティを消す
  if(for_flag === true){
    for_property.innerHTML = "";
  }
  if(if_flag === true){
    if_property.innerHTML = "";
  }

 var object = $('canvas').getLayerGroup('obj' + (count_groups));
 var object_name = object[0].name;
  //図形を消してレイヤーごと消去
  if (count_groups != 0){
    $("canvas").setLayerGroup("obj" + (count_groups),{
      visible:false
    }).drawLayers();
    $("canvas").removeLayerGroup("obj" + (count_groups));

    if(object_name == "Rect" + (count_Rect-1)){
      $("canvas").removeLayer("Rect" + (count_Rect - 1));
      count_Rect--;
    }
    else if(object_name == "Ellipse" + (count_Ellipse-1)){
      $("canvas").removeLayer("Ellipse" + (count_Ellipse - 1));
      count_Ellipse--;
    }
    else if(object_name == "Triangle" + (count_tri-1)){
      $("canvas").removeLayer("Triangle" + (count_tri - 1));
      count_tri--;
    }
    else if(object_name == "Polygon" + (count_ply-1)){
      $("canvas").removeLayer("Polygon" + (count_ply - 1));
      count_ply--;
    }
    else if(object_name == "Line" + (count_line-1)){
      $("canvas").removeLayer("Line" + (count_line - 1));
      count_line--;
    }
    if(count_for != 0){
      $("canvas").removeLayerGroup("shapes" + (count_for - 1));
      count_for--;
    }
    --count_groups;
    for_flag = false;
    if_flag = false;
  }
},false);

//全消去のイベントリスナ
store.addEventListener("click",function(){
  $("#source_code").html("");
  count_Rect = 1;
  count_tri = 1;
  count_Ellipse = 1;
  count_ply = 1;
  count_line = 1;
  count_groups = 0;
  count_for = 0;
  for_flag = false;
  if_flag = false;
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
       fillStyle:"#FFC90E",
       strokeWidth: 1,
       x: 100,
       y: 100,
       radius:32.5,
       fromCenter: false,
       sides: 3,
       dblclick:function(layer){
         layer.fillStyle = $("#color").val();
         document.getElementById("tri_fill" + (i-1)).innerHTML = "<li><font color = '#f7f7f7' size = '3'>fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");</font></li>";
       },
       draggable:true,
       drag:function(layer){
         $("#triangle_x" + (i - 1)).val(layer.x);
         $("#triangle_y" + (i - 1)).val(layer.y);
       },
       mouseover:function(layer){
         $(function(){
           change_text = setInterval(function(){
             $("#triangle_x" + (i - 1)).val(layer.x);
             $("#triangle_y" + (i - 1)).val(layer.y);
           },10);
         });
         $(function(){
           MOver("triangle_source" + (i-1));
         });
       },
       mouseout:function(layer){
         clearInterval(change_text);
         $(function(){
           MOut("triangle_source" + (i-1));
         });
       },
       click:function(layer){
       	 if(if_flag === true){
           obj_flag = layer.name;
           X = layer.x;
           Y = layer.y;
           if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size = '2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size = '2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size = '2' id = 'if_y'>まで動かす.";
         }
        }
      });
     }
    fill_code_tri = "<li id = 'tri_fill'><font color = '#f7f7f7' size = '3'>fill(255,201,14);</font></li>";
    literal(fill_code_tri);
    tri_code = "<li id = 'triangle_source'><font color = '#f7f7f7' size = '3'>triangle(" + '<input class="textbox" type="text" size="2"id ="triangle_x" placeholder = "100">' + "," + '<input class="textbox" type="text" size="2"id ="triangle_y" placeholder = "100">' + ",100,100);</font></li>";
    literal(tri_code);
    $("#triangle_x").attr("id","triangle_x" + (count_tri-1));
    $("#triangle_y").attr("id","triangle_y" + (count_tri-1));
    $("#triangle_source").attr("id","triangle_source" + (count_tri-1));
    $("#triangle_source" + (count_tri-1)).addClass("triangle_source" + (count_tri-1));
    $("#tri_fill").attr("id","tri_fill" + (count_tri-1));
    //forをクリックされた際の処理
    if(for_flag === true){
      //nameプロパティがTriangle(最後)の図形を見えなくする
      $("canvas").setLayer("Triangle" + (count_tri -1),{
        visible:false
      }).drawLayers();
    count_tri--;
    for_flag = false;
    rect_flag = false;
    line_flag = false;
    ellipse_flag = false;
    ply_flag = false;
    tri_flag = true;
    //table内のfor_propertyに書き込む
    for_property.innerHTML = "三角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "2" id = "for_y">' +"から横に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
    + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
    obj_judge = "triangle";
  }else{
    $("canvas").setLayer("Triangle" + (count_tri -1),{
      visible:true
    }).drawLayers();
  }
  },false);

  //多角形を描く
  polygon.addEventListener("click",function(){
    ++count_groups;
    ++count_ply;
    for (var i = 1;i < count_ply;i++){
      //これがJcanvasの多角形を描くソース
       $("canvas").drawPolygon({
         layer:true,
         name:"Polygon" + i,
         groups:["obj" + count_groups],
         strokeStyle: "black",
         fillStyle:"#A349A4",
         strokeWidth: 1,
         x: 100,
         y: 100,
         radius:32.5,
         fromCenter: false,
         sides: angle.value,
         dblclick:function(layer){
           layer.fillStyle = $("#color").val();
           document.getElementById("ply_fill" + (i-1)).innerHTML = "<li><font color = '#f7f7f7' size = '3'>fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");</font></li>";
         },
         draggable:true,
         drag:function(layer){
           $("#polygon_x" + (i - 1)).val(layer.x);
           $("#polygon_y" + (i - 1)).val(layer.y);
         },
         mouseover:function(layer){
           $(function(){
             change_text = setInterval(function(){
               $("#polygon_x" + (i - 1)).val(layer.x);
               $("#polygon_y" + (i - 1)).val(layer.y);
             },10);
           });
           $(function(){
             MOver("polygon_source" + (i-1));
           });
         },
         mouseout:function(layer){
           clearInterval(change_text);
           $(function(){
             MOut("polygon_source" + (i-1));
           });
         },
         click:function(layer){
           obj_flag = layer.name;
         	 if(if_flag === true){
             X = layer.x;
             Y = layer.y;
             if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
           }
          }
        });
       }
      fill_code_ply = "<li id='ply_fill'><font color = '#f7f7f7' size = '3'>fill(163,73,164);</font></li>";
      literal(fill_code_ply);
      ply_code = "<li id = 'polygon_source'><font color = '#f7f7f7' size = '3'>polygon(" + '<input class="textbox" type="text" size="2"id ="polygon_x" placeholder = "100">' + "," + '<input class="textbox" type="text" size="2"id ="polygon_y" placeholder = "100">' + ",100,100);</font></li>";
      literal(ply_code);
      $("#polygon_x").attr("id","polygon_x" + (count_ply-1));
      $("#polygon_y").attr("id","polygon_y" + (count_ply-1));
      $("#polygon_source").attr("id","polygon_source" + (count_ply-1));
      $("#polygon_source" + (count_ply-1)).addClass("polygon_source" + (count_ply-1));
      $("#ply_fill").attr("id","ply_fill" + (count_ply-1));
      //forをクリックされた際の処理
      if(for_flag === true){
        //nameプロパティがPolygon(最後)の図形を見えなくする
        $("canvas").setLayer("Polygon" + (count_ply -1),{
          visible:false
        }).drawLayers();
      count_ply--;
      for_flag = false;
      rect_flag = false;
      ellipse_flag = false;
      tri_flag = false;
      line_flag = false;
      ply_flag = true;
      //table内のfor_propertyに書き込む
      for_property.innerHTML = "多角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "4" id = "for_y">' +"から横に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
      + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
      obj_judge = "polygon";
    }else{
      $("canvas").setLayer("Polygon" + (count_ply -1),{
        visible:true
      }).drawLayers();
    }
    },false);

line.addEventListener("click",function(){
  count_line++;
  count_groups++;
  for (var i = 1;i < count_line;i++){
    //これがJcanvasの多角形を描くソース
     $("canvas").drawLine({
       layer:true,
       name:"Line" + i,
       groups:["obj" + count_groups],
       strokeStyle:"#FFAEC9",
       strokeWidth: 10,
       x1: 100,y1: 100,
       x2: 400,y2: 400,
       fromCenter: false,
       dblclick:function(layer){
         layer.strokeStyle = $("#color").val();
         document.getElementById("line_stroke").innerHTML = "<li><font color = '#f7f7f7' size = '3'>fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");</font></li>";
       },
       mouseover:function(layer){
         $(function(){
           change_text = setInterval(function(){
             $("#line2_x" + (i-1)).val(layer.x2);
             $("#line2_y" + (i-1)).val(layer.y2);
           },10);
         });
         $(function(){
           MOver("line_source" + (i-1));
         });
       },
       mouseout:function(layer){
         clearInterval(change_text);
         $(function(){
           MOut("line_source" + (i-1));
         });
       },

       click:function(layer){
         Line_name = layer.name;
       }
      });
     }
    stroke_code_line = "<li id='line_stroke'><font color = '#f7f7f7' size = '3'>fill(255,174,201);</font></li>";
    literal(stroke_code_line);
    line_code = "<li id = 'line_source'><font color = '#f7f7f7' size = '3'>line(" + '<input class="textbox" type="text" size="2"id ="line1_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="line1_y" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="line2_x" placeholder = "400">' + "," + '<input class="textbox" type="text" size="2"id ="line2_y" placeholder = "400">' + ");</font></li>";
    literal(line_code);
    $("#line1_x").attr("id","line1_x" + (count_line-1));
    $("#line1_y").attr("id","line1_y" + (count_line-1));
    $("#line2_x").attr("id","line2_x" + (count_line-1));
    $("#line2_y").attr("id","line2_y" + (count_line-1));
    $("#line_source").attr("id","line_source" + (count_line-1));
    $("#line_source" + (count_line-1)).addClass("line_source" + (count_line-1));
    $("#line_stroke").attr("id","line_stroke" + (count_line-1));
    //forをクリックされた際の処理
    if(for_flag === true){
      //nameプロパティがLine(最後)の図形を見えなくする
      $("canvas").setLayer("Line" + (count_line -1),{
        visible:false
      }).drawLayers();
    count_line--;
    for_flag = false;
    rect_flag = false;
    ellipse_flag = false;
    tri_flag = false;
    ply_flag = false;
    line_flag = true;
    //table内のfor_propertyに書き込む
    for_property.innerHTML = "この図形には使えません";
  }else{
    $("canvas").setLayer("Line" + (count_line -1),{
      visible:true
    }).drawLayers();
  }
},false);
