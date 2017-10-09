$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;
//document.getElementByIdでhtmlのid属性を取得
var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var for_str = document.getElementById("for");
var if_str = document.getElementById("if");
var triangle = document.getElementById("triangle");
var line = document.getElementById("line");
var pac = document.getElementById("pac");
//画像
var butt_red = document.getElementById("butt_red");
var butt_yellow = document.getElementById("butt_yellow");
var butt_blue = document.getElementById("butt_blue");
var pink_candy = document.getElementById("pink_candy");
var blue_candy = document.getElementById("blue_candy");
var orange_candy = document.getElementById("orange_candy");
var blue_umbrella = document.getElementById("blue_umbrella");
var orange_umbrella = document.getElementById("orange_umbrella");
var green_umbrella = document.getElementById("green_umbrella");
var orange_flower = document.getElementById("orange_flower");
var pink_flower = document.getElementById("pink_flower");
var yellow_flower = document.getElementById("yellow_flower");
var giraffe = document.getElementById("giraffe");
var star = document.getElementById("star");
var tank = document.getElementById("tank");
var global_variables = document.getElementById("global");
var compile = document.getElementById("compile");
var for_property = document.getElementById("for_property");
var sample_for = document.getElementById("sample_for");
var back = document.getElementById("back");
var store = document.getElementById("store");
var if_property = document.getElementById("if_property");
var sample_if = document.getElementById("sample_if");
var key = document.getElementById("key");
var download_file = document.getElementById("download_file");
//表示するコードをいれる配列
var figures = [];
var pImage = [];
var Image_array = [];
var file_array = [];
//何回関数が読みだされたかカウント
var load_figures = 0;
var load_Image = 0;
var count_Rect = 1;
var count_Ellipse = 1;
var count_tri = 1;
var count_line = 1;
var count_pac = 1;
var count_img_1 = 1;
var count_img_2 = 1;
var count_img_3 = 1;
var count_img_4 = 1;
var count_img_5 = 1;
var count_img_6 = 1;
var count_img_7 = 1;
var count_img_8 = 1;
var count_img_9 = 1;
var count_img_10 = 1;
var count_img_11 = 1;
var count_img_12 = 1;
var count_img_13 = 1;
var count_img_14 = 1;
var count_img_15 = 1;
var count_for = 0;
var count_if = 1;
//forを作る判定
var ellipse_flag = false;
var rect_flag = false;
var tri_flag = false;
var for_flag = false;
var if_flag = false;
var line_flag = false;
var pac_flag = false;
var img1_flag = false;
var img2_flag = false;
var img3_flag = false;
var img4_flag = false;
var img5_flag = false;
var img6_flag = false;
var img7_flag = false;
var img8_flag = false;
var img9_flag = false;
var img10_flag = false;
var img11_flag = false;
var img12_flag = false;
var img13_flag = false;
var img14_flag = false;
var img15_flag = false;
//図形のtextboxの値を取得する変数
var x_obj;
var y_obj;
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
var for_code;
var pac_code;
var img_code_1;
var img_code_2;
var img_code_3;
var img_code_4;
var img_code_5;
var img_code_6;
var img_code_7;
var img_code_8;
var img_code_9;
var img_code_10;
var img_code_11;
var img_code_12;
var img_code_13;
var img_code_14;
var img_code_15;
//fileにいれるコード
var rect_file_code;
var ellipse_file_code;
var tri_file_code;
var for_file_code;
var pac_file_code;
var line_file_code;
var img_file_code_1;
var img_file_code_2;
var img_file_code_3;
var img_file_code_4;
var img_file_code_5;
var img_file_code_6;
var img_file_code_7;
var img_file_code_8;
var img_file_code_9;
var img_file_code_10;
var img_file_code_11;
var img_file_code_12;
var img_file_code_13;
var img_file_code_14;
var img_file_code_15;
var if_file_code;
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
var obj_x;
var obj_y;
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
var fill_code_for;
var stroke_code_line;
var fill_code_pac;

var file_rect_fill;
var file_ellipse_fill;
var file_tri_fill;
var file_for_fill;
var file_line_stroke;
var file_pac_fill;

var obj_fill;

var file_write;

var triangle_x;
var triangle_y;

var rect_layer;
var ellipse_layer;
var tri_layer;
var for_layer;
var pac_layer;
var img_layer_1;
var img_layer_2;
var img_layer_3;
var img_layer_4;
var img_layer_5;
var img_layer_6;
var img_layer_7;
var img_layer_8;
var img_layer_9;
var img_layer_10;
var img_layer_11;
var img_layer_12;
var img_layer_13;
var img_layer_14;
var img_layer_15;

var booL_count = 0;
var for_ope;
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

function PImage_literal(PImage_code,img_count,Pimage_inst){
  if(img_count == 2){
    pImage.push(PImage_code);
    Image_array.push(Pimage_inst);
    if(for_flag == true){
      pImage.pop();
      Image_array.pop();
      load_Image--;
    }
    if(++load_Image == pImage.length){
      $("#PImage").append(pImage[pImage.length-1]);
      $("#open").append(Image_array[Image_array.length-1]);
    }
  }
}
//配列に入れて一番最後の要素をpreタグに入れる
function literal(figures_code){
  //引数をfiguersの一番最後にぶちこむ
  figures.push(figures_code);
  //forを作る際のやり直しを行うもの
 if(for_flag == true){
    //最後の要素を消す
    figures.pop();
    --load_figures;
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
       fillStyle:"#666666",
       strokeWidth: 1,
       x: 100,
       y: 100,
       width: 65,
       height: 65,
       fromCenter: false,
       data:i,
       dblclick:function(layer){

         layer.fillStyle = $("#color").val();
         document.getElementById("rec_fill" + (i-1)).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
         document.getElementById("file_rect_fill" + (i-1)).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");\n";
       },
       draggable:true,
       drag:function(layer){
          $("#rect_x" + (i - 1)).val(layer.x);
          $("#rect_y" + (i - 1)).val(layer.y);
       },
       dragstop:function(layer){
         document.getElementById("file_rect_source" + (i-1)).innerHTML = "  rect(" + layer.x + "," + layer.y + ",65,65);\n";
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
           x_obj = "rx" + (i-1);
           y_obj = "ry" + (i-1);
           if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
           if(!document.getElementById("rect_global" + (i-1))){
            $("#global").append("<li id = 'rect_global" + (i-1) + "'>float rx" + (i-1) + " = " + layer.x + ",ry" + (i-1) + " = " + layer.y + ";\n</li>");
          }
           document.getElementById("file_rect_source" + (i-1)).innerHTML = "  rect(rx" + (i-1) + ",ry" + (i-1) + ",65,65);\n";
         }
        }
      });
     }
     if(for_flag == false){
       file_rect_fill = "<span id='file_rect_fill'>  fill(102,102,102);\n</span>"
       rect_file_code = "<sapn id = 'file_rect_source'>  rect(100,100,65,65);\n</span>";
       fill_code_rec = "<li id='rec_fill' class='tooltip'><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
       literal(fill_code_rec);
       rect_code = "<li id = 'rect_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  rect(" + '<input class="textbox" type="text" size="2"id ="rect_x" value = 100>' + "," + '<input class="textbox" type="text" size="2"id ="rect_y" value = 100>' + ",65,65);</font></li>";
       literal(rect_code);
       $("canvas").append(file_rect_fill);
       $("canvas").append(rect_file_code);
       $("#rect_x").attr("id","rect_x" + (count_Rect-1));
       $("#rect_y").attr("id","rect_y" + (count_Rect-1));
       $("#file_rect_source").attr("id","file_rect_source" + (count_Rect-1));
       $("#rect_source").attr("id","rect_source" + (count_Rect-1));
       $("#rect_source" + (count_Rect-1)).addClass("rect_source" + (count_Rect-1));
       $("#file_rect_fill").attr("id","file_rect_fill" + (count_Rect-1));
       $("#rec_fill").attr("id","rec_fill" + (count_Rect-1));
       //setBlobUrl("download_file");
     }
    //forをクリックされた際の処理
    if(for_flag == true){
      //nameプロパティがRect(最後)の図形を見えなくする
      $("canvas").setLayer("Rect" + (count_Rect -1),{
        visible:false
      }).drawLayers();
      count_Rect--;
      for_flag = false;
      ellipse_flag = false;

      line_flag = false;
      tri_flag = false;
      pac_flag = false;
      img1_flag = false;
      img2_flag = false;
      img3_flag = false;
      rect_flag = true;
      img3_flag = false;
      img4_flag = false;
      img5_flag = false;
      img6_flag = false;
      img7_flag = false;
      img8_flag = false;
      img9_flag = false;
      img10_flag = false;
      img11_flag = false;
      img12_flag = false;
      img13_flag = false;
      img14_flag = false;
      img15_flag = false;
      //table内のfor_propertyに書き込む
      for_property.innerHTML = "四角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "2" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
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
    Compile_Line("line1","Line",count_line);
    Compile("pac","Pac",count_pac);
    Compile("img1","Image1",count_img_1);
    Compile("img2","Image2",count_img_2);
    Compile("img3","Image3",count_img_3);
    Compile("img4","Image4",count_img_4);
    Compile("img5","Image5",count_img_5);
    Compile("img6","Image6",count_img_6);
    Compile("img7","Image7",count_img_7);
    Compile("img8","Image8",count_img_8);
    Compile("img9","Image9",count_img_9);
    Compile("img10","Image10",count_img_10);
    Compile("img11","Image11",count_img_11);
    Compile("img12","Image12",count_img_12);
    Compile("img13","Image13",count_img_13);
    Compile("img14","Image14",count_img_14);
    Compile("img15","Image15",count_img_15);
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
  if($("#pace").val() || $("#if_x").val() || $("if_y")){
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
     $("canvas").animateLayer(obj_flag,{
       x:if_x,
       y:if_y
     },pace).drawLayers();

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
     if(if_flag === true){
         var if_code = "<li id = 'if_source' class = 'if_code'><font class = 'light'color = '#f7f7f7' size = '3'>  if(" + x_obj + comp_x + if_x + " &&" + y_obj + comp_y + if_y + "){" + "\n" +
          x_obj + " += ((" + if_x + "-" + X + ")/ (60 * " + subpace + "));" + "\n" +
          y_obj + " += ((" + if_y + "-" + Y + ")/ (60 * " + subpace + "));" + "\n" +
         "  }\n</font></li>";
         literal(if_code);
         $("canvas").append(if_code);
       }
     }
   if_flag = false;
 },false);

//for文を実行のイベントリスナ
sample_for.addEventListener("click",function(){
  if(rect_flag == true){
    for_obj("rectangle");
    for_sizes = 1;
    //グループ化しているものを取得してプロパティを追加
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:$("#color").val(),
    }).drawLayers();
  }
  if(ellipse_flag == true){
    for_obj("ellipse");
    for_sizes = 1;
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:$("#color").val(),
    }).drawLayers();
  }
  if(tri_flag == true){
    for_obj("polygon");
    for_sizes = 3;
    $("canvas").setLayerGroup("shapes" + (count_for-1),{
      fillStyle:$("#color").val(),
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
if(int < ctrl){
  if($(".ver_hori").val() == 0){
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
    for_code = "<li id = 'for_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int x = " + int + ";x < " + ctrl + "; x+=" + rate + "){" + "\n" +
    obj_judge + "(x," + for_y + ",65,65);" + "\n" +
    "}\n</font></li>";
}else if($(".ver_hori").val() == 1){
  for(var ob_y = for_y; ob_y < ctrl; ob_y += rate){
    for(var i = 0;i < count_for;i++){
      $("canvas").addLayer({
        type:Obj,
        layer:true,
        groups: ['shapes' + i],
        strokeStyle: "black",
        strokeWidth: 1,
        x:int,
        y: ob_y,
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
  for_code = "<li id = 'for_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int y = " + int + ";y < " + ctrl + "; y+=" + rate + "){" + "\n" +
  "  " + obj_judge + "(" + int + ",y,65,65);" + "\n" +
  "  }\n</font></li>";
}
}else if(int > ctrl){
  if($(".ver_hori").val() == 0){
    for(var ob_x = int; ob_x > ctrl; ob_x -= rate){
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
    for_code = "<li class='Fig' id = 'for_source'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int x = " + int + ";x > " + ctrl + "; x-=" + rate + "){" + "\n" +
    obj_judge + "(x," + for_y + ",65,65);" + "\n" +
    "}\n</font></li>";
}else if($(".ver_hori").val() == 1){
  for(var ob_y = for_y; ob_y > ctrl; ob_y -= rate){
    for(var i = 0;i < count_for;i++){
      $("canvas").addLayer({
        type:Obj,
        layer:true,
        groups: ['shapes' + i],
        strokeStyle: "black",
        strokeWidth: 1,
        x:int,
        y: ob_y,
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
  for_code = "<li id = 'for_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int y = " + int + ";y > " + ctrl + "; y-=" + rate + "){" + "\n" +
  "  " + obj_judge + "(" + int + ",y,65,65);" + "\n" +
  "  }\n</font></li>";
}
}


fill_code_for = "<li id='for_fill'><font class = 'light'color = '#f7f7f7' size = '3'>  fill(" + parseInt($("#color").val().substring(1,3), 16) + "," + parseInt($("#color").val().substring(3,5), 16) + "," + parseInt($("#color").val().substring(5,7), 16) + ");</font></li>";
literal(fill_code_for);
literal(for_code);
$("canvas").append(fill_code_for);
$("canvas").append(for_code);
$("#for_source").attr("id","for_source" + count_for);
$("#for_source" + count_for).addClass("for_source" + count_for);
$("#for_fill").attr("id","for_fill" + count_for);
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
      fillStyle: "#666666",
      strokeWidth: 1,
      x: 100,
      y: 100,
      width: 65,
      height: 65,
      fromCenter: false,
      draggable: true,
      dblclick:function(layer){
        layer.fillStyle = $("#color").val();
        document.getElementById("ell_fill" + (i-1)).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
        document.getElementById("file_ellipse_fill" + (i-1)).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");\n";
      },
      visible:true,
      drag:function(layer){
        $("#ellipse_x" + (i - 1)).val(layer.x);
        $("#ellipse_y" + (i - 1)).val(layer.y);
      },
      dragstop:function(layer){
        document.getElementById("file_ellipse_source" + (i-1)).innerHTML = "  ellipse(" + layer.x + "," + layer.y + ",65,65);\n";
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
          x_obj = "ellx" + (i-1);
          y_obj = "elly" + (i-1);
          if(!document.getElementById("ellipse_global" + (i-1))){
           $("#global").append("<li id = 'ellipse_global" + (i-1) + "'>float ellx" + (i-1) + " = " + layer.x + ",elly" + (i-1) + " = " + layer.y + ";\n</li>");
          }
          document.getElementById("file_ellipse_source" + (i-1)).innerHTML = "  ellipse(ellx" + (i-1) + ",elly" + (i-1) + ",65,65);\n";
        }
       }
    });
  }
  if(for_flag == false){
    file_ellipse_fill = "<span id='file_ellipse_fill'>  fill(102,102,102);\n</span>";
    ellipse_file_code = "<span id='file_ellipse_source'>  ellipse(100,100,65,65);\n";
    fill_code_ell = "<li id='ell_fill'><font class = 'light'color ='#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
    literal(fill_code_ell);
    ellipse_code = "<li id = 'ellipse_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  ellipse(" + '<input class="textbox" type="text" size="2" id="ellipse_x" value = "100">' + "," + '<input class="textbox" type="text" size="2" id="ellipse_y" value = "100">' + ",65,65); </font></li>";
    literal(ellipse_code);
    $("canvas").append(file_ellipse_fill);
    $("canvas").append(ellipse_file_code);
    $("#ellipse_x").attr("id","ellipse_x" + (count_Ellipse-1));
    $("#ellipse_y").attr("id","ellipse_y" + (count_Ellipse-1));
    $("#file_ellipse_source").attr("id","file_ellipse_source" + (count_Ellipse-1));
    $("#ellipse_source").attr("id","ellipse_source" + (count_Ellipse-1));
    $("#ellipse_source" + (count_Ellipse-1)).addClass("ellipse_source" + (count_Ellipse-1));
    $("#ell_fill").attr("id","ell_fill" + (count_Ellipse-1));
    $("#file_ellipse_fill").attr("id","file_ellipse_fill" + (count_Ellipse-1));
  }
    //forがクリックされたときの処理
    if(for_flag == true){
      $("canvas").setLayer("Ellipse" + (count_Ellipse -1),{
        visible:false
      }).drawLayers();
      count_Ellipse--;
      for_flag = false;
      rect_flag = false;
      tri_flag = false;

      pac_flag = false;
      line_flag = false;
      img1_flag = false;
      img2_flag = false;
      img3_flag = false;
      ellipse_flag = true;
      img3_flag = false;
      img4_flag = false;
      img5_flag = false;
      img6_flag = false;
      img7_flag = false;
      img8_flag = false;
      img9_flag = false;
      img10_flag = false;
      img11_flag = false;
      img12_flag = false;
      img13_flag = false;
      img14_flag = false;
      img15_flag = false;
      for_property.innerHTML = "円の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "4" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
      + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
      obj_judge = "ellipse";
    }else{
      $("canvas").setLayer("Ellipse" + (count_Ellipse -1),{
        visible:true
      }).drawLayers();
    }
  },false);

//ifのイベントリスナ
if_str.addEventListener("click",function(){
 if_property.innerHTML = "オブジェクトを選択してください.";
 if_flag = true;
},false);

//forのイベントリスナ
for_str.addEventListener("click",function(){
  for_property.innerHTML = "オブジェクトを選択してください.";
  for_flag = true;
  count_for++;
},false);

//前に戻るのイベントリスナ
back.addEventListener("click",function(){
  //一番最後の要素消去
  var object = $('canvas').getLayerGroup('obj' + (count_groups));
  var object_name = object[0].name;

  if($("#source_code").find("li").filter(":last").hasClass("if_code")){
    $("#source_code > li:last").remove();
  }else{
    if($("#source_code").find("li").filter(":last").hasClass("Fig")){
      $("#source_code > li:last").remove();
      $("#source_code > li:last").remove();
      $("canvas > span:last").remove();
      $("canvas > span:last").remove();
    }

    if($("#source_code").find("li").filter(":last").hasClass("Img")){
      $("#source_code > li:last").remove();
      $("canvas > span:last").remove();
    }
  //それぞれのプロパティを消す
  if(for_flag === true){
    for_property.innerHTML = "";
  }
  if(if_flag === true){
    if_property.innerHTML = "";
  }

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
    else if(object_name == "Line" + (count_line-1)){
      $("canvas").removeLayer("Line" + (count_line - 1));
      count_line--;
    }
    else if(object_name == "Pac" + (count_pac - 1)){
      $("canvas").removeLayer("Pac" + (count_pac - 1));
      count_pac--;
    }else if(object_name == "Image1" + (count_img_1-1)){
      $("canvas").removeLayer("Image1" + (count_img_1-1));
      count_img_1--;
      if(count_img_1 == 1){
        $(".class1").remove();
        $(".class_1").remove();
      }
    }else if(object_name == "Image2" + (count_img_2-1)){
      $("canvas").removeLayer("Image2" + (count_img_2-1));
      count_img_2--;
      if(count_img_2 == 1){
        $(".class2").remove();
        $(".class_2").remove();
      }
    }else if(object_name == "Image3" + (count_img_3-1)){
      $("canvas").removeLayer("Image3" + (count_img_3-1));
      count_img_3--;
      if(count_img_3 == 1){
        $(".class3").remove();
        $(".class_3").remove();
      }
    }else if(object_name == "Image4" + (count_img_4-1)){
      $("canvas").removeLayer("Image4" + (count_img_4-1));
      count_img_4--;
      if(count_img_4 == 1){
        $(".class4").remove();
        $(".class_4").remove();
      }
    }else if(object_name == "Image5" + (count_img_5-1)){
      $("canvas").removeLayer("Image5" + (count_img_5-1));
      count_img_5--;
      if(count_img_5 == 1){
        $(".class5").remove();
        $(".class_5").remove();
      }
    }else if(object_name == "Image6" + (count_img_6-1)){
      $("canvas").removeLayer("Image6" + (count_img_6-1));
      count_img_6--;
      if(count_img_6 == 1){
        $(".class6").remove();
        $(".class_6").remove();
      }
    }else if(object_name == "Image7" + (count_img_7-1)){
      $("canvas").removeLayer("Image7" + (count_img_7-1));
      count_img_7--;
      if(count_img_7 == 1){
        $(".class7").remove();
        $(".class_7").remove();
      }
    }else if(object_name == "Image8" + (count_img_8-1)){
      $("canvas").removeLayer("Image8" + (count_img_8-1));
      count_img_8--;
      if(count_img_8 == 1){
        $(".class8").remove();
        $(".class_8").remove();
      }
    }else if(object_name == "Image9" + (count_img_9-1)){
      $("canvas").removeLayer("Image9" + (count_img_9-1));
      count_img_9--;
      if(count_img_9 == 1){
        $(".class9").remove();
        $(".class_9").remove();
      }
    }else if(object_name == "Image10" + (count_img_10-1)){
      $("canvas").removeLayer("Image10" + (count_img_10-1));
      count_img_10--;
      if(count_img_10 == 1){
        $(".class10").remove();
        $(".class_10").remove();
      }
    }else if(object_name == "Image11" + (count_img_11-1)){
      $("canvas").removeLayer("Image11" + (count_img_11-1));
      count_img_11--;
      if(count_img_11 == 1){
        $(".class11").remove();
        $(".class_11").remove();
      }
    }else if(object_name == "Image12" + (count_img_12-1)){
      $("canvas").removeLayer("Image12" + (count_img_12-1));
      count_img_12--;
      if(count_img_12 == 1){
        $(".class12").remove();
        $(".class_12").remove();
      }
    }else if(object_name == "Image13" + (count_img_13-1)){
      $("canvas").removeLayer("Image13" + (count_img_13-1));
      count_img_13--;
      if(count_img_13 == 1){
        $(".class13").remove();
        $(".class_13").remove();
      }
    }else if(object_name == "Image14" + (count_img_14-1)){
      $("canvas").removeLayer("Image14" + (count_img_14-1));
      count_img_14--;
      if(count_img_14 == 1){
        $(".class14").remove();
        $(".class_14").remove();
      }
    }else if(object_name == "Image15" + (count_img_15-1)){
      $("canvas").removeLayer("Image15" + (count_img_15-1));
      count_img_15--;
      if(count_img_15 == 1){
        $(".class15").remove();
        $(".class_15").remove();
      }
    }
    if(count_for != 0){
      $("canvas").removeLayerGroup("shapes" + (count_for - 1));
      count_for--;
    }
  }
    --count_groups;
    for_flag = false;
    if_flag = false;
  }
},false);

//全消去のイベントリスナ
store.addEventListener("click",function(){
  $("#source_code").html("");
  $("#PImage").html("");
  $("#open").html("");
  $("canvas").html("");
  count_Rect = 1;
  count_tri = 1;
  count_Ellipse = 1;
  count_line = 1;
  count_pac = 1;
  count_img_1 = 1;
  count_img_2 = 1;
  count_img_3 = 1;
  count_img_4 = 1;
  count_img_5 = 1;
  count_img_6 = 1;
  count_img_7 = 1;
  count_img_8 = 1;
  count_img_9 = 1;
  count_img_10 = 1;
  count_img_11 = 1;
  count_img_12 = 1;
  count_img_13 = 1;
  count_img_14 = 1;
  count_img_15 = 1;
  count_groups = 0;
  count_for = 0;
  for_flag = false;
  if_flag = false;
  if_property.innerHTML = "";
  for_property.innerHTML = "";
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
       fillStyle:"#666666",
       strokeWidth: 1,
       x: 100,
       y: 100,
       radius:32.5,
       fromCenter: false,
       sides: 3,
       dblclick:function(layer){
         layer.fillStyle = $("#color").val();
         document.getElementById("tri_fill" + (i-1)).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
         document.getElementById("file_tri_fill" + (i-1)).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
       },
       draggable:true,
       drag:function(layer){
         $("#triangle_x" + (i - 1)).val(layer.x);
         $("#triangle_y" + (i - 1)).val(layer.y);
         $("#triangle2_x" + (i - 1)).html(layer.x+30);
         $("#triangle2_y" + (i - 1)).html(layer.y+50);
         $("#triangle3_x" + (i - 1)).html(layer.x-30);
         $("#triangle3_y" + (i - 1)).html(layer.y+50);
       },
       dragstop:function(layer){
         document.getElementById("file_tri_source" + (i-1)).innerHTML = "  triangle(" + layer.x + "," + layer.y + "," + (layer.x+30) + "," + (layer.y + 50) + "," + (layer.x-30) + ","
         + (layer.y + 50) + ");\n";
       },
       mouseover:function(layer){
         $(function(){
           change_text = setInterval(function(){
             $("#triangle_x" + (i - 1)).val(layer.x);
             $("#triangle_y" + (i - 1)).val(layer.y);
             $("#triangle2_x" + (i - 1)).html(layer.x+30);
             $("#triangle2_y" + (i - 1)).html(layer.y+50);
             $("#triangle3_x" + (i - 1)).html(layer.x-30);
             $("#triangle3_y" + (i - 1)).html(layer.y+50);
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
     if(for_flag == false){
       var triangle_obj = $("canvas").getLayer("Triangle" + (count_tri-1));
       fill_code_tri = "<li id = 'tri_fill'><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
       literal(fill_code_tri);
       tri_code = "<li id = 'triangle_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  triangle(" + '<input class="textbox" type="text" size="2"id ="triangle_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="triangle_y" value = "100">' + ",<span id = 'triangle2_x'>" + (triangle_obj.x + 30) + "</span>,<span id = 'triangle2_y'>" + (triangle_obj.y + 50) + "</span>,<span id = 'triangle3_x'>" + (triangle_obj.x-30) + "</span>,<span id = 'triangle3_y'>" + (triangle_obj.y+50) + "</span>);</font></li>";
       literal(tri_code);
       file_tri_fill = "<span id='file_tri_fill'>  fill(102,102,102);\n</span>"
       tri_file_code = "<sapn id = 'file_tri_source'>  triangle(100,100,130,150,70,150);\n</span>";
       $("canvas").append(file_tri_fill);
       $("canvas").append(tri_file_code);
       $("#file_tri_source").attr("id","file_tri_source" + (count_tri-1));
       $("#file_tri_fill").attr("id","file_tri_fill" + (count_tri-1));
       $("#triangle_x").attr("id","triangle_x" + (count_tri-1));
       $("#triangle_y").attr("id","triangle_y" + (count_tri-1));
       $("#triangle2_x").attr("id","triangle2_x" + (count_tri-1));
       $("#triangle2_y").attr("id","triangle2_y" + (count_tri-1));
       $("#triangle3_x").attr("id","triangle3_x" + (count_tri-1));
       $("#triangle3_y").attr("id","triangle3_y" + (count_tri-1));
       $("#triangle_source").attr("id","triangle_source" + (count_tri-1));
       $("#triangle_source" + (count_tri-1)).addClass("triangle_source" + (count_tri-1));
       $("#tri_fill").attr("id","tri_fill" + (count_tri-1));
      }
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

       pac_flag = false;
       img1_flag = false;
       img2_flag = false;
       img3_flag = false;
       tri_flag = true;
       img3_flag = false;
       img4_flag = false;
       img5_flag = false;
       img6_flag = false;
       img7_flag = false;
       img8_flag = false;
       img9_flag = false;
       img10_flag = false;
       img11_flag = false;
       img12_flag = false;
       img13_flag = false;
       img14_flag = false;
       img15_flag = false;
       //table内のfor_propertyに書き込む
       for_property.innerHTML = "三角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "2" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
       + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
       obj_judge = "triangle";
     }else{
       $("canvas").setLayer("Triangle" + (count_tri -1),{
         visible:true
       }).drawLayers();
     }
   },false);

line.addEventListener("click",function(){
  count_line++;
  count_groups++;
  for (var i = 1;i < count_line;i++){
    //これがJcanvasの線を描くソース
     $("canvas").drawLine({
       layer:true,
       name:"Line" + i,
       groups:["obj" + count_groups],
       strokeStyle:"#666666",
       strokeWidth: 10,
       x1: 100,y1: 100,
       x2: 400,y2: 400,
       fromCenter: false,
       dblclick:function(layer){
         layer.strokeStyle = $("#color").val();
         document.getElementById("line_stroke" + (i-1)).innerHTML = "  stroke(" + parseInt(layer.strokeStyle.substring(1,3), 16) + "," + parseInt(layer.strokeStyle.substring(3,5),16) + "," + parseInt(layer.strokeStyle.substring(5,7), 16) + ");";
         document.getElementById("file_line_stroke" + (i-1)).innerHTML = "  stroke(" + parseInt(layer.strokeStyle.substring(1,3), 16) + "," + parseInt(layer.strokeStyle.substring(3,5),16) + "," + parseInt(layer.strokeStyle.substring(5,7), 16) + ");\n";
       },
       mouseover:function(layer){
         $(function(){
           change_text = setInterval(function(){
             if(layer.x1 < layer.x2){
               $("#line1_x" + (i-1)).val(layer.x1);
               $("#line2_x" + (i-1)).val(layer.x2);
             }else if(layer.x1 > layer.x2){
               $("#line1_x" + (i-1)).val(layer.x2);
               $("#line2_x" + (i-1)).val(layer.x1);
             }
             if(layer.y1 < layer.y2){
               $("#line1_y" + (i-1)).val(layer.y1);
               $("#line2_y" + (i-1)).val(layer.y2);
             }else if(layer.y1 > layer.y2){
               $("#line1_y" + (i-1)).val(layer.y2);
               $("#line2_y" + (i-1)).val(layer.y1);
             }

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
         key.src = "img/key_open.png";
         document.getElementById("file_line_source" + (i-1)).innerHTML = "line(" + layer.x1 + "," + layer.y1 + "," + layer.x2 + "," + layer.y2 + ");\n";
       }
      });
     }
     if(for_flag == false){
       stroke_code_line = "<li id='line_stroke'><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
       literal(stroke_code_line);
       line_code = "<li id = 'line_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  line(" + '<input class="textbox" type="text" size="2"id ="line1_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="line1_y" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="line2_x" value = "400">' + "," + '<input class="textbox" type="text" size="2"id ="line2_y" value = "400">' + ");</font></li>";
       literal(line_code);
       file_line_stroke = "<span id='file_line_stroke'>  stroke(102,102,102);\n</span>"
       line_file_code = "<sapn id = 'file_line_source'>  line(100,100,400,400);\n</span>";
       $("canvas").append(file_line_stroke);
       $("canvas").append(line_file_code);
       $("#file_line_source").attr("id","file_line_source" + (count_line-1));
       $("#file_line_stroke").attr("id","file_line_stroke" + (count_line-1));
       $("#line1_x").attr("id","line1_x" + (count_line-1));
       $("#line1_y").attr("id","line1_y" + (count_line-1));
       $("#line2_x").attr("id","line2_x" + (count_line-1));
       $("#line2_y").attr("id","line2_y" + (count_line-1));
       $("#line_source").attr("id","line_source" + (count_line-1));
       $("#line_source" + (count_line-1)).addClass("line_source" + (count_line-1));
       $("#line_stroke").attr("id","line_stroke" + (count_line-1));
     }
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

       pac_flag = false;
       img1_flag = false;
       img2_flag = false;
       img3_flag = false;
       line_flag = true;
       img3_flag = false;
       img4_flag = false;
       img5_flag = false;
       img6_flag = false;
       img7_flag = false;
       img8_flag = false;
       img9_flag = false;
       img10_flag = false;
       img11_flag = false;
       img12_flag = false;
       img13_flag = false;
       img14_flag = false;
       img15_flag = false;
       //table内のfor_propertyに書き込む
       for_property.innerHTML = "この図形には使えません";
     }else{
       $("canvas").setLayer("Line" + (count_line -1),{
         visible:true
       }).drawLayers();
     }
   },false);

   pac.addEventListener("click",function(){
     ++count_groups;
     ++count_pac;
     for (var i = 1;i < count_pac;i++){
       //これがJcanvasの多角形を描くソース
        $("canvas").drawSlice({
          layer:true,
          name:"Pac" + i,
          groups:["obj" + count_groups],
          strokeStyle: "black",
          fillStyle:"#666666",
          strokeWidth: 1,
          x: 100,
          y: 100,
          radius:32.5,
          fromCenter: false,
          start:120,end:420,
          dblclick:function(layer){
            layer.fillStyle = $("#color").val();
            document.getElementById("pac_fill" + (i-1)).innerHTML = "<li><font class = 'light'color = '#f7f7f7' size = '3'>fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");</font></li>";
            document.getElementById("file_pac_fill" + (i-1)).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");\n";
          },
          draggable:true,
          drag:function(layer){
            $("#pac_x" + (i - 1)).val(layer.x);
            $("#pac_y" + (i - 1)).val(layer.y);
          },
          dragstop:function(layer){
            document.getElementById("file_pac_source" + (i-1)).innerHTML = "  arc(" + layer.x + "," + layer.y + ",65,65,0.5,5.8);\n";
          },
          mouseover:function(layer){
            $(function(){
              change_text = setInterval(function(){
                $("#pac_x" + (i - 1)).val(layer.x);
                $("#pac_y" + (i - 1)).val(layer.y);
              },10);
            });
            $(function(){
              MOver("pac_source" + (i-1));
            });
          },
          mouseout:function(layer){
            clearInterval(change_text);
            $(function(){
              MOut("pac_source" + (i-1));
            });
          },
          click:function(layer){
            obj_flag = layer.name;
            if(if_flag === true){
              X = layer.x;
              Y = layer.y;
              if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
              x_obj = "pacx" + (i-1);
              y_obj = "pacy" + (i-1);
              if(!document.getElementById("pac_global" + (i-1))){
               $("#global").append("<li id = 'pac_global" + (i-1) + "'>float pacx" + (i-1) + " = " + layer.x + ",pacy" + (i-1) + " = " + layer.y + ";\n</li>");
              }
              document.getElementById("file_pac_source" + (i-1)).innerHTML = "  arc(pacx" + (i-1) + ",pacy" + (i-1) + ",65,65,0.5,5.8);\n";
            }
           }
         });
        }
        if(for_flag == false){
          fill_code_pac = "<li id='pac_fill'><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
          literal(fill_code_pac);
          pac_code = "<li id = 'pac_source' class='Fig'><font class = 'light'color = '#f7f7f7' size = '3'>  arc(" + '<input class="textbox" type="text" size="2"id ="pac_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="pac_y" value = "100">' + ",65,65,0.5,5.8);</font></li>";
          literal(pac_code);
          file_pac_fill = "<span id='file_pac_fill'>  fill(102,102,102);\n</span>"
          pac_file_code = "<sapn id = 'file_pac_source'>  arc(100,100,65,65,0.5,5.8);\n</span>";
          $("canvas").append(file_pac_fill);
          $("canvas").append(pac_file_code);
          $("#file_pac_source").attr("id","file_pac_source" + (count_pac-1));
          $("#file_pac_fill").attr("id","file_pac_fill" + (count_pac-1));
          $("#pac_x").attr("id","pac_x" + (count_pac-1));
          $("#pac_y").attr("id","pac_y" + (count_pac-1));
          $("#pac_source").attr("id","pac_source" + (count_pac-1));
          $("#pac_source" + (count_pac-1)).addClass("pac_source" + (count_pac-1));
          $("#pac_fill").attr("id","pac_fill" + (count_pac-1));
        }
        //forをクリックされた際の処理
        if(for_flag === true){
         //nameプロパティがPolygon(最後)の図形を見えなくする
         $("canvas").setLayer("Pac" + (count_pac -1),{
           visible:false
         }).drawLayers();
         count_pac--;
         for_flag = false;
         rect_flag = false;
         ellipse_flag = false;
         tri_flag = false;
         line_flag = false;

         img1_flag = false;
         img2_flag = false;
         img3_flag = false;
         pac_flag = true;
         img3_flag = false;
         img4_flag = false;
         img5_flag = false;
         img6_flag = false;
         img7_flag = false;
         img8_flag = false;
         img9_flag = false;
         img10_flag = false;
         img11_flag = false;
         img12_flag = false;
         img13_flag = false;
         img14_flag = false;
         img15_flag = false;
         //table内のfor_propertyに書き込む
         for_property.innerHTML = "この図形には使えません";
       }else{
         $("canvas").setLayer("Pac" + (count_pac -1),{
           visible:true
         }).drawLayers();
       }
     },false);

     butt_red.addEventListener("click",function(){
       ++count_groups;
       ++count_img_1;
       for (var i = 1;i < count_img_1;i++){
         //これがJcanvasの多角形を描くソース
          $("canvas").drawImage({
            layer:true,
            name:"Image1" + i,
            source:"img/red_butterfly.png",
            groups:["obj" + count_groups],
            x: 100,
            y: 100,
            draggable:true,
            drag:function(layer){
              $("#img1_x" + (i - 1)).val(layer.x);
              $("#img1_y" + (i - 1)).val(layer.y);
            },
            dragstop:function(layer){
              document.getElementById("file_img_source_1" + (i-1)).innerHTML = "  image(red_butterfly," + layer.x + "," + layer.y + ");\n";
            },
            mouseover:function(layer){
              $(function(){
                change_text = setInterval(function(){
                  $("#img1_x" + (i - 1)).val(layer.x);
                  $("#img1_y" + (i - 1)).val(layer.y);
                },10);
              });
              $(function(){
                MOver("img1_source" + (i-1));
              });
            },
            mouseout:function(layer){
              clearInterval(change_text);
              $(function(){
                MOut("img1_source" + (i-1));
              });
            },
            click:function(layer){
              obj_flag = layer.name;
              if(if_flag === true){
                X = layer.x;
                Y = layer.y;
                if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                x_obj = "red_buttx" + (i-1);
                y_obj = "red_butty" + (i-1);
                if(!document.getElementById("img_1_global" + (i-1))){
                 $("#global").append("<li id = 'img_1_global" + (i-1) + "'>float red_buttx" + (i-1) + " = " + layer.x + ",red_butty" + (i-1) + " = " + layer.y + ";\n</li>");
                }
                document.getElementById("file_img_source_1" + (i-1)).innerHTML = "  image(red_butterfly,red_buttx" + (i-1) + ",red_butty" + (i-1) + ");\n";

              }
             }
           });
          }
          if(for_flag == false){
            var red_butt_inst = "<li class = 'class1'>PImage <a href = 'img/red_butterfly.png' download='red_butterfly.png' class='tooltip' title='クリックしてダウンロード.'>red_butterfly;\n</a></li>"
            var red_butt = '<li class = "class_1"><font class = "light"color = "#f7f7f7" size = "3">  red_butterfly=loadImage("red_butterfly.png");\n</font></li>'
            PImage_literal(red_butt,count_img_1,red_butt_inst);
            img_code_1 = "<li id = 'img1_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(red_butterfly," + '<input class="textbox" type="text" size="2"id ="img1_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img1_y" value = "100">' + ");</font></li>";
            literal(img_code_1);
            img_file_code_1 = "<sapn id = 'file_img_source_1'>  image(red_butterfly,100,100);\n</span>";
            $("canvas").append(img_file_code_1);
            $("#file_img_source_1").attr("id","file_img_source_1" + (count_img_1-1));
            $("#img1_x").attr("id","img1_x" + (count_img_1-1));
            $("#img1_y").attr("id","img1_y" + (count_img_1-1));
            $("#img1_source").attr("id","img1_source" + (count_img_1-1));
            $("#img1_source" + (count_img_1-1)).addClass("img1_source" + (count_img_1-1));
          }
          //forをクリックされた際の処理
          if(for_flag === true){
           //nameプロパティがPolygon(最後)の図形を見えなくする
           $("canvas").setLayer("Image1" + (count_img_1 -1),{
             visible:false
           }).drawLayers();
           count_img_1--;
           for_flag = false;
           rect_flag = false;
           ellipse_flag = false;
           tri_flag = false;
           line_flag = false;

           pac_flag = false;
           img2_flag = false;
           img3_flag = false;
           img1_flag = true;
           img3_flag = false;
           img4_flag = false;
           img5_flag = false;
           img6_flag = false;
           img7_flag = false;
           img8_flag = false;
           img9_flag = false;
           img10_flag = false;
           img11_flag = false;
           img12_flag = false;
           img13_flag = false;
           img14_flag = false;
           img15_flag = false;
           //table内のfor_propertyに書き込む
           for_property.innerHTML = "この図形には使えません";
         }else{
           $("canvas").setLayer("Image1" + (count_img_1 -1),{
             visible:true
           }).drawLayers();
         }
       },false);

       butt_yellow.addEventListener("click",function(){
         ++count_groups;
         ++count_img_2;
         for (var i = 1;i < count_img_2;i++){
           //これがJcanvasの多角形を描くソース
            $("canvas").drawImage({
              layer:true,
              name:"Image2" + i,
              source:"img/ylw_butterfly.png",
              groups:["obj" + count_groups],
              x: 100,
              y: 100,
              draggable:true,
              drag:function(layer){
                $("#img2_x" + (i - 1)).val(layer.x);
                $("#img2_y" + (i - 1)).val(layer.y);
              },
              dragstop:function(layer){
                document.getElementById("file_img_source_2" + (i-1)).innerHTML = "  image(yellow_butterfly," + layer.x + "," + layer.y + ");\n";
              },
              mouseover:function(layer){
                $(function(){
                  change_text = setInterval(function(){
                    $("#img2_x" + (i - 1)).val(layer.x);
                    $("#img2_y" + (i - 1)).val(layer.y);
                  },10);
                });
                $(function(){
                  MOver("img2_source" + (i-1));
                });
              },
              mouseout:function(layer){
                clearInterval(change_text);
                $(function(){
                  MOut("img2_source" + (i-1));
                });
              },
              click:function(layer){
                obj_flag = layer.name;
                if(if_flag === true){
                  X = layer.x;
                  Y = layer.y;
                  if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                  x_obj = "ylw_buttx" + (i-1);
                  y_obj = "ylw_butty" + (i-1);
                  if(!document.getElementById("img_2_global" + (i-1))){
                   $("#global").append("<li id = 'img_2_global" + (i-1) + "'>float ylw_buttx" + (i-1) + " = " + layer.x + ",ylw_butty" + (i-1) + " = " + layer.y + ";\n</li>");
                  }
                  document.getElementById("file_img_source_2" + (i-1)).innerHTML = "  image(yellow_butterfly,ylw_buttx" + (i-1) + ",ylw_butty" + (i-1) + ");\n";
                }
               }
             });
            }
            if(for_flag == false){
              var yellow_butt_inst = "<li class = 'class2'>PImage <a href = 'img/ylw_butterfly.png' download='ylw_butterfly.png' class='tooltip' title='クリックしてダウンロードしてください.'>yellow_butterfly;\n</a></li>"
              var yellow_butt = '<li class = "class_2"><font class = "light"color = "#f7f7f7" size = "3">  yellow_butterfly=loadImage("ylw_butterfly.png");\n</font></li>'
              PImage_literal(yellow_butt,count_img_2,yellow_butt_inst);
              img_code_2 = "<li id = 'img2_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(yellow_butterfly," + '<input class="textbox" type="text" size="2"id ="img2_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img2_y" value = "100">' + ");</font></li>";
              literal(img_code_2);
              img_file_code_2 = "<sapn id = 'file_img_source_2'>  image(yellow_butterfly,100,100);\n</span>";
              $("canvas").append(img_file_code_2);
              $("#file_img_source_2").attr("id","file_img_source_2" + (count_img_2-1));
              $("#img2_x").attr("id","img2_x" + (count_img_2-1));
              $("#img2_y").attr("id","img2_y" + (count_img_2-1));
              $("#img2_source").attr("id","img2_source" + (count_img_2-1));
              $("#img2_source" + (count_img_2-1)).addClass("img2_source" + (count_img_2-1));
            }
            //forをクリックされた際の処理
            if(for_flag === true){
             //nameプロパティがPolygon(最後)の図形を見えなくする
             $("canvas").setLayer("Image2" + (count_img_2 -1),{
               visible:false
             }).drawLayers();
             count_img_2--;
             for_flag = false;
             rect_flag = false;
             ellipse_flag = false;
             tri_flag = false;
             line_flag = false;

             pac_flag = false;
             img1_flag = false;
             img3_flag = false;
             img2_flag = true;
             img3_flag = false;
             img4_flag = false;
             img5_flag = false;
             img6_flag = false;
             img7_flag = false;
             img8_flag = false;
             img9_flag = false;
             img10_flag = false;
             img11_flag = false;
             img12_flag = false;
             img13_flag = false;
             img14_flag = false;
             img15_flag = false;
             //table内のfor_propertyに書き込む
             for_property.innerHTML = "この図形には使えません";
           }else{
             $("canvas").setLayer("Image2" + (count_img_2 -1),{
               visible:true
             }).drawLayers();
           }
         },false);

         butt_blue.addEventListener("click",function(){
           ++count_groups;
           ++count_img_3;
           for (var i = 1;i < count_img_3;i++){
             //これがJcanvasの多角形を描くソース
              $("canvas").drawImage({
                layer:true,
                name:"Image3" + i,
                source:"img/blue_butterfly.png",
                groups:["obj" + count_groups],
                x: 100,
                y: 100,
                draggable:true,
                drag:function(layer){
                  $("#img3_x" + (i - 1)).val(layer.x);
                  $("#img3_y" + (i - 1)).val(layer.y);
                },
                dragstop:function(layer){
                  document.getElementById("file_img_source_3" + (i-1)).innerHTML = "  image(blue_butterfly," + layer.x + "," + layer.y + ");\n";
                },
                mouseover:function(layer){
                  $(function(){
                    change_text = setInterval(function(){
                      $("#img3_x" + (i - 1)).val(layer.x);
                      $("#img3_y" + (i - 1)).val(layer.y);
                    },10);
                  });
                  $(function(){
                    MOver("img3_source" + (i-1));
                  });
                },
                mouseout:function(layer){
                  clearInterval(change_text);
                  $(function(){
                    MOut("img3_source" + (i-1));
                  });
                },
                click:function(layer){
                  obj_flag = layer.name;
                  if(if_flag === true){
                    X = layer.x;
                    Y = layer.y;
                    if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                    x_obj = "blue_buttx" + (i-1);
                    y_obj = "blue_butty" + (i-1);
                    if(!document.getElementById("img_3_global" + (i-1))){
                     $("#global").append("<li id = 'img_3_global" + (i-1) + "'>float blue_buttx" + (i-1) + " = " + layer.x + ",blue_butty" + (i-1) + " = " + layer.y + ";\n</li>");
                    }
                    document.getElementById("file_img_source_3" + (i-1)).innerHTML = "  image(blue_butterfly,blue_buttx" + (i-1) + ",blue_butty" + (i-1) + ");\n";
                  }
                 }
               });
              }
              if(for_flag == false){
                var blue_butt_inst = "<li class = 'class3'>PImage <a href = 'img/blue_butterfly.png' download='blue_butterfly.png' class='tooltip' title='クリックしてダウンロードしてください.'>blue_butterfly;\n</a></li>"
                var blue_butt = '<li class = "class_3"><font class = "light"color = "#f7f7f7" size = "3">  blue_butterfly=loadImage("blue_butterfly.png");\n</font></li>'
                PImage_literal(blue_butt,count_img_3,blue_butt_inst);
                img_code_3 = "<li id = 'img3_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(blue_butterfly," + '<input class="textbox" type="text" size="2"id ="img3_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img3_y" value = "100">' + ");</font></li>";
                literal(img_code_3);
                img_file_code_3 = "<sapn id = 'file_img_source_3'>  image(blue_butterfly,100,100);\n</span>";
                $("canvas").append(img_file_code_3);
                $("#file_img_source_3").attr("id","file_img_source_3" + (count_img_3-1));
                $("#img3_x").attr("id","img3_x" + (count_img_3-1));
                $("#img3_y").attr("id","img3_y" + (count_img_3-1));
                $("#img3_source").attr("id","img3_source" + (count_img_3-1));
                $("#img3_source" + (count_img_3-1)).addClass("img3_source" + (count_img_3-1));
              }
              //forをクリックされた際の処理
              if(for_flag === true){
               //nameプロパティがPolygon(最後)の図形を見えなくする
               $("canvas").setLayer("Image3" + (count_img_3 -1),{
                 visible:false
               }).drawLayers();
               count_img_3--;
               for_flag = false;
               rect_flag = false;
               ellipse_flag = false;
               tri_flag = false;
               line_flag = false;

               pac_flag = false;
               img1_flag = false;
               img2_flag = false;
               img3_flag = true;
               img3_flag = false;
               img4_flag = false;
               img5_flag = false;
               img6_flag = false;
               img7_flag = false;
               img8_flag = false;
               img9_flag = false;
               img10_flag = false;
               img11_flag = false;
               img12_flag = false;
               img13_flag = false;
               img14_flag = false;
               img15_flag = false;
               //table内のfor_propertyに書き込む
               for_property.innerHTML = "この図形には使えません";
             }else{
               $("canvas").setLayer("Image3" + (count_img_3 -1),{
                 visible:true
               }).drawLayers();
             }
           },false);

           blue_candy.addEventListener("click",function(){
             ++count_groups;
             ++count_img_4;
             for (var i = 1;i < count_img_4;i++){
               //これがJcanvasの多角形を描くソース
                $("canvas").drawImage({
                  layer:true,
                  name:"Image4" + i,
                  source:"img/blue_candy.png",
                  groups:["obj" + count_groups],
                  x: 100,
                  y: 100,
                  draggable:true,
                  drag:function(layer){
                    $("#img4_x" + (i - 1)).val(layer.x);
                    $("#img4_y" + (i - 1)).val(layer.y);
                  },
                  dragstop:function(layer){
                    document.getElementById("file_img_source_4" + (i-1)).innerHTML = "  image(blue_candy," + layer.x + "," + layer.y + ");\n";
                  },
                  mouseover:function(layer){
                    $(function(){
                      change_text = setInterval(function(){
                        $("#img4_x" + (i - 1)).val(layer.x);
                        $("#img4_y" + (i - 1)).val(layer.y);
                      },10);
                    });
                    $(function(){
                      MOver("img4_source" + (i-1));
                    });
                  },
                  mouseout:function(layer){
                    clearInterval(change_text);
                    $(function(){
                      MOut("img4_source" + (i-1));
                    });
                  },
                  click:function(layer){
                    obj_flag = layer.name;
                    if(if_flag === true){
                      X = layer.x;
                      Y = layer.y;
                      if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                      x_obj = "blue_candyx" + (i-1);
                      y_obj = "blue_candyy" + (i-1);
                      if(!document.getElementById("img_4_global" + (i-1))){
                       $("#global").append("<li id = 'img_4_global" + (i-1) + "'>float blue_candyx" + (i-1) + " = " + layer.x + ",blue_candyy" + (i-1) + " = " + layer.y + ";\n</li>");
                      }
                      document.getElementById("file_img_source_4" + (i-1)).innerHTML = "  image(blue_candy,blue_candyx" + (i-1) + ",blue_candyy" + (i-1) + ");\n";
                    }
                   }
                 });
                }
                if(for_flag == false){
                  var blue_candy_inst = "<li class = 'class4'>PImage <a href = 'img/blue_candy.png' download='blue_candy.png' class='tooltip' title='クリックしてダウンロードしてください.'>blue_candy;\n</a></li>"
                  var blue_candy = '<li class = "class_4"><font class = "light"color = "#f7f7f7" size = "3">  blue_candy=loadImage("blue_candy.png");\n</font></li>'
                  PImage_literal(blue_candy,count_img_4,blue_candy_inst);
                  img_code_4 = "<li id = 'img4_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(blue_candy," + '<input class="textbox" type="text" size="2"id ="img4_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img4_y" value = "100">' + ");</font></li>";
                  literal(img_code_4);
                  img_file_code_4 = "<sapn id = 'file_img_source_4'>  image(blue_candy,100,100);\n</span>";
                  $("canvas").append(img_file_code_4);
                  $("#file_img_source_4").attr("id","file_img_source_4" + (count_img_4-1));
                  $("#img4_x").attr("id","img4_x" + (count_img_4-1));
                  $("#img4_y").attr("id","img4_y" + (count_img_4-1));
                  $("#img4_source").attr("id","img4_source" + (count_img_4-1));
                  $("#img4_source" + (count_img_4-1)).addClass("img4_source" + (count_img_4-1));
                }
                //forをクリックされた際の処理
                if(for_flag === true){
                 //nameプロパティがPolygon(最後)の図形を見えなくする
                 $("canvas").setLayer("Image4" + (count_img_4 -1),{
                   visible:false
                 }).drawLayers();
                 count_img_4--;
                 for_flag = false;
                 rect_flag = false;
                 ellipse_flag = false;
                 tri_flag = false;
                 line_flag = false;

                 pac_flag = false;
                 img1_flag = false;
                 img2_flag = false;
                 img3_flag = false;
                 img4_flag = true;
                 img5_flag = false;
                 img6_flag = false;
                 img7_flag = false;
                 img8_flag = false;
                 img9_flag = false;
                 img10_flag = false;
                 img11_flag = false;
                 img12_flag = false;
                 img13_flag = false;
                 img14_flag = false;
                 img15_flag = false;
                 //table内のfor_propertyに書き込む
                 for_property.innerHTML = "この図形には使えません";
               }else{
                 $("canvas").setLayer("Image4" + (count_img_4 -1),{
                   visible:true
                 }).drawLayers();
               }
             },false);

             orange_candy.addEventListener("click",function(){
               ++count_groups;
               ++count_img_5;
               for (var i = 1;i < count_img_5;i++){
                 //これがJcanvasの多角形を描くソース
                  $("canvas").drawImage({
                    layer:true,
                    name:"Image5" + i,
                    source:"img/orange_candy.png",
                    groups:["obj" + count_groups],
                    x: 100,
                    y: 100,
                    draggable:true,
                    drag:function(layer){
                      $("#img5_x" + (i - 1)).val(layer.x);
                      $("#img5_y" + (i - 1)).val(layer.y);
                    },
                    dragstop:function(layer){
                      document.getElementById("file_img_source_5" + (i-1)).innerHTML = "  image(orange_candy," + layer.x + "," + layer.y + ");\n";
                    },
                    mouseover:function(layer){
                      $(function(){
                        change_text = setInterval(function(){
                          $("#img5_x" + (i - 1)).val(layer.x);
                          $("#img5_y" + (i - 1)).val(layer.y);
                        },10);
                      });
                      $(function(){
                        MOver("img5_source" + (i-1));
                      });
                    },
                    mouseout:function(layer){
                      clearInterval(change_text);
                      $(function(){
                        MOut("img5_source" + (i-1));
                      });
                    },
                    click:function(layer){
                      obj_flag = layer.name;
                      if(if_flag === true){
                        X = layer.x;
                        Y = layer.y;
                        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                        x_obj = "orange_candyx" + (i-1);
                        y_obj = "orange_candyy" + (i-1);
                        if(!document.getElementById("img_5_global" + (i-1))){
                         $("#global").append("<li id = 'img_5_global" + (i-1) + "'>float orange_candyx" + (i-1) + " = " + layer.x + ",orange_candyy" + (i-1) + " = " + layer.y + ";\n</li>");
                        }
                        document.getElementById("file_img_source_5" + (i-1)).innerHTML = "  image(orange_candy,orange_candyx" + (i-1) + ",orange_candyy" + (i-1) + ");\n";
                      }
                     }
                   });
                  }
                  if(for_flag == false){
                    var orange_candy_inst = "<li class = 'class5'>PImage <a href = 'img/orange_candy.png' download='orange_candy.png' class='tooltip' title='クリックしてダウンロードしてください.'>orange_candy;\n</a></li>"
                    var orange_candy = '<li class = "class_5"><font class = "light"color = "#f7f7f7" size = "3">  orange_candy=loadImage("orange_candy.png");\n</font></li>'
                    PImage_literal(orange_candy,count_img_5,orange_candy_inst);
                    img_code_5 = "<li id = 'img5_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(orange_candy," + '<input class="textbox" type="text" size="2"id ="img5_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img5_y" value = "100">' + ");</font></li>";
                    literal(img_code_5);
                    img_file_code_5 = "<sapn id = 'file_img_source_5'>  image(orange_candy,100,100);\n</span>";
                    $("canvas").append(img_file_code_5);
                    $("#file_img_source_5").attr("id","file_img_source_5" + (count_img_5-1));
                    $("#img5_x").attr("id","img5_x" + (count_img_5-1));
                    $("#img5_y").attr("id","img5_y" + (count_img_5-1));
                    $("#img5_source").attr("id","img5_source" + (count_img_5-1));
                    $("#img5_source" + (count_img_5-1)).addClass("img5_source" + (count_img_5-1));
                  }
                  //forをクリックされた際の処理
                  if(for_flag === true){
                   //nameプロパティがPolygon(最後)の図形を見えなくする
                   $("canvas").setLayer("Image5" + (count_img_5 -1),{
                     visible:false
                   }).drawLayers();
                   count_img_5--;
                   for_flag = false;
                   rect_flag = false;
                   ellipse_flag = false;
                   tri_flag = false;
                   line_flag = false;

                   pac_flag = false;
                   img1_flag = false;
                   img2_flag = false;
                   img3_flag = false;
                   img4_flag = false;
                   img5_flag = true;
                   img6_flag = false;
                   img7_flag = false;
                   img8_flag = false;
                   img9_flag = false;
                   img10_flag = false;
                   img11_flag = false;
                   img12_flag = false;
                   img13_flag = false;
                   img14_flag = false;
                   img15_flag = false;
                   //table内のfor_propertyに書き込む
                   for_property.innerHTML = "この図形には使えません";
                 }else{
                   $("canvas").setLayer("Image5" + (count_img_5 -1),{
                     visible:true
                   }).drawLayers();
                 }
               },false);

               pink_candy.addEventListener("click",function(){
                 ++count_groups;
                 ++count_img_6;
                 for (var i = 1;i < count_img_6;i++){
                   //これがJcanvasの多角形を描くソース
                    $("canvas").drawImage({
                      layer:true,
                      name:"Image6" + i,
                      source:"img/pink_candy.png",
                      groups:["obj" + count_groups],
                      x: 100,
                      y: 100,
                      draggable:true,
                      drag:function(layer){
                        $("#img6_x" + (i - 1)).val(layer.x);
                        $("#img6_y" + (i - 1)).val(layer.y);
                      },
                      dragstop:function(layer){
                        document.getElementById("file_img_source_6" + (i-1)).innerHTML = "  image(pink_candy," + layer.x + "," + layer.y + ");\n";
                      },
                      mouseover:function(layer){
                        $(function(){
                          change_text = setInterval(function(){
                            $("#img6_x" + (i - 1)).val(layer.x);
                            $("#img6_y" + (i - 1)).val(layer.y);
                          },10);
                        });
                        $(function(){
                          MOver("img6_source" + (i-1));
                        });
                      },
                      mouseout:function(layer){
                        clearInterval(change_text);
                        $(function(){
                          MOut("img6_source" + (i-1));
                        });
                      },
                      click:function(layer){
                        obj_flag = layer.name;
                        if(if_flag === true){
                          X = layer.x;
                          Y = layer.y;
                          if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                          x_obj = "pink_candyx" + (i-1);
                          y_obj = "pink_candyy" + (i-1);
                          if(!document.getElementById("img_6_global" + (i-1))){
                           $("#global").append("<li id = 'img_6_global" + (i-1) + "'>float pink_candyyx" + (i-1) + " = " + layer.x + ",pink_candyy" + (i-1) + " = " + layer.y + ";\n</li>");
                          }
                          document.getElementById("file_img_source_6" + (i-1)).innerHTML = "  image(pink_candy,pink_candyx" + (i-1) + ",pink_candyy" + (i-1) + ");\n";
                        }
                       }
                     });
                    }
                    if(for_flag == false){
                      var pink_candy_inst = "<li class = 'class6'>PImage <a href = 'img/pink_candy.png' download='pink_candy.png' class='tooltip' title='クリックしてダウンロードしてください.'>pink_candy;\n</a></li>"
                      var pink_candy = '<li class = "class_6"><font class = "light"color = "#f7f7f7" size = "3">  pink_candy=loadImage("pink_candy.png");\n</font></li>'
                      PImage_literal(pink_candy,count_img_6,pink_candy_inst);
                      img_code_6 = "<li id = 'img6_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(pink_candy," + '<input class="textbox" type="text" size="2"id ="img6_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img6_y" value = "100">' + ");</font></li>";
                      literal(img_code_6);
                      img_file_code_6 = "<sapn id = 'file_img_source_6'>  image(pink_candy,100,100);\n</span>";
                      $("canvas").append(img_file_code_6);
                      $("#file_img_source_6").attr("id","file_img_source_6" + (count_img_6-1));
                      $("#img6_x").attr("id","img6_x" + (count_img_6-1));
                      $("#img6_y").attr("id","img6_y" + (count_img_6-1));
                      $("#img6_source").attr("id","img6_source" + (count_img_6-1));
                      $("#img6_source" + (count_img_6-1)).addClass("img6_source" + (count_img_6-1));
                    }
                    //forをクリックされた際の処理
                    if(for_flag === true){
                     //nameプロパティがPolygon(最後)の図形を見えなくする
                     $("canvas").setLayer("Image6" + (count_img_6 -1),{
                       visible:false
                     }).drawLayers();
                     count_img_6--;
                     for_flag = false;
                     rect_flag = false;
                     ellipse_flag = false;
                     tri_flag = false;
                     line_flag = false;

                     pac_flag = false;
                     img1_flag = false;
                     img2_flag = false;
                     img3_flag = false;
                     img4_flag = false;
                     img5_flag = false;
                     img6_flag = true;
                     img7_flag = false;
                     img8_flag = false;
                     img9_flag = false;
                     img10_flag = false;
                     img11_flag = false;
                     img12_flag = false;
                     img13_flag = false;
                     img14_flag = false;
                     img15_flag = false;
                     //table内のfor_propertyに書き込む
                     for_property.innerHTML = "この図形には使えません";
                   }else{
                     $("canvas").setLayer("Image6" + (count_img_6 -1),{
                       visible:true
                     }).drawLayers();
                   }
                 },false);

                 blue_umbrella.addEventListener("click",function(){
                   ++count_groups;
                   ++count_img_7;
                   for (var i = 1;i < count_img_7;i++){
                     //これがJcanvasの多角形を描くソース
                      $("canvas").drawImage({
                        layer:true,
                        name:"Image7" + i,
                        source:"img/blue_umbrella.png",
                        groups:["obj" + count_groups],
                        x: 100,
                        y: 100,
                        draggable:true,
                        drag:function(layer){
                          $("#img7_x" + (i - 1)).val(layer.x);
                          $("#img7_y" + (i - 1)).val(layer.y);
                        },
                        dragstop:function(layer){
                          document.getElementById("file_img_source_7" + (i-1)).innerHTML = "  image(blue_umbrella," + layer.x + "," + layer.y + ");\n";
                        },
                        mouseover:function(layer){
                          $(function(){
                            change_text = setInterval(function(){
                              $("#img7_x" + (i - 1)).val(layer.x);
                              $("#img7_y" + (i - 1)).val(layer.y);
                            },10);
                          });
                          $(function(){
                            MOver("img7_source" + (i-1));
                          });
                        },
                        mouseout:function(layer){
                          clearInterval(change_text);
                          $(function(){
                            MOut("img7_source" + (i-1));
                          });
                        },
                        click:function(layer){
                          obj_flag = layer.name;
                          if(if_flag === true){
                            X = layer.x;
                            Y = layer.y;
                            if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                            x_obj = "blue_umbrellax" + (i-1);
                            y_obj = "blue_umbrellay" + (i-1);
                            if(!document.getElementById("img_7_global" + (i-1))){
                             $("#global").append("<li id = 'img_7_global" + (i-1) + "'>float blue_umbrellayx" + (i-1) + " = " + layer.x + ",blue_umbrellay" + (i-1) + " = " + layer.y + ";\n</li>");
                            }
                            document.getElementById("file_img_source_7" + (i-1)).innerHTML = "  image(blue_umbrella,blue_umbrellax" + (i-1) + ",blue_umbrellay" + (i-1) + ");\n";
                          }
                         }
                       });
                      }
                      if(for_flag == false){
                        var blue_umbrella_inst = "<li class = 'class7'>PImage <a href = 'img/blue_umbrella.png' download='blue_umbrella.png' class='tooltip' title='クリックしてダウンロードしてください.'>blue_umbrella;\n</a></li>"
                        var blue_umbrella = '<li class = "class_7"><font class = "light"color = "#f7f7f7" size = "3">  blue_umbrella=loadImage("blue_umbrella.png");\n</font></li>'
                        PImage_literal(blue_umbrella,count_img_7,blue_umbrella_inst);
                        img_code_7 = "<li id = 'img7_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(blue_umbrella," + '<input class="textbox" type="text" size="2"id ="img7_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img7_y" value = "100">' + ");</font></li>";
                        literal(img_code_7);
                        img_file_code_7 = "<sapn id = 'file_img_source_7'>  image(blue_umbrella,100,100);\n</span>";
                        $("canvas").append(img_file_code_7);
                        $("#file_img_source_7").attr("id","file_img_source_7" + (count_img_7-1));
                        $("#img7_x").attr("id","img7_x" + (count_img_7-1));
                        $("#img7_y").attr("id","img7_y" + (count_img_7-1));
                        $("#img7_source").attr("id","img7_source" + (count_img_7-1));
                        $("#img7_source" + (count_img_7-1)).addClass("img7_source" + (count_img_7-1));
                      }
                      //forをクリックされた際の処理
                      if(for_flag === true){
                       //nameプロパティがPolygon(最後)の図形を見えなくする
                       $("canvas").setLayer("Image7" + (count_img_7 -1),{
                         visible:false
                       }).drawLayers();
                       count_img_7--;
                       for_flag = false;
                       rect_flag = false;
                       ellipse_flag = false;
                       tri_flag = false;
                       line_flag = false;

                       pac_flag = false;
                       img1_flag = false;
                       img2_flag = false;
                       img3_flag = false;
                       img4_flag = false;
                       img5_flag = false;
                       img6_flag = false;
                       img7_flag = true;
                       img8_flag = false;
                       img9_flag = false;
                       img10_flag = false;
                       img11_flag = false;
                       img12_flag = false;
                       img13_flag = false;
                       img14_flag = false;
                       img15_flag = false;
                       //table内のfor_propertyに書き込む
                       for_property.innerHTML = "この図形には使えません";
                     }else{
                       $("canvas").setLayer("Image7" + (count_img_7 -1),{
                         visible:true
                       }).drawLayers();
                     }
                   },false);
                   green_umbrella.addEventListener("click",function(){
                     ++count_groups;
                     ++count_img_8;
                     for (var i = 1;i < count_img_8;i++){
                       //これがJcanvasの多角形を描くソース
                        $("canvas").drawImage({
                          layer:true,
                          name:"Image8" + i,
                          source:"img/green_umbrella.png",
                          groups:["obj" + count_groups],
                          x: 100,
                          y: 100,
                          draggable:true,
                          drag:function(layer){
                            $("#img8_x" + (i - 1)).val(layer.x);
                            $("#img8_y" + (i - 1)).val(layer.y);
                          },
                          dragstop:function(layer){
                            document.getElementById("file_img_source_8" + (i-1)).innerHTML = "  image(green_umbrella," + layer.x + "," + layer.y + ");\n";
                          },
                          mouseover:function(layer){
                            $(function(){
                              change_text = setInterval(function(){
                                $("#img8_x" + (i - 1)).val(layer.x);
                                $("#img8_y" + (i - 1)).val(layer.y);
                              },10);
                            });
                            $(function(){
                              MOver("img8_source" + (i-1));
                            });
                          },
                          mouseout:function(layer){
                            clearInterval(change_text);
                            $(function(){
                              MOut("img8_source" + (i-1));
                            });
                          },
                          click:function(layer){
                            obj_flag = layer.name;
                            if(if_flag === true){
                              X = layer.x;
                              Y = layer.y;
                              if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                              x_obj = "green_umbrellax" + (i-1);
                              y_obj = "green_umbrellay" + (i-1);
                              if(!document.getElementById("img_8_global" + (i-1))){
                               $("#global").append("<li id = 'img_8_global" + (i-1) + "'>float green_umbrellayx" + (i-1) + " = " + layer.x + ",green_umbrellay" + (i-1) + " = " + layer.y + ";\n</li>");
                              }
                              document.getElementById("file_img_source_8" + (i-1)).innerHTML = "  image(green_umbrella,green_umbrellax" + (i-1) + ",green_umbrellay" + (i-1) + ");\n";
                            }
                           }
                         });
                        }
                        if(for_flag == false){
                          var green_umbrella_inst = "<li class = 'class8'>PImage <a href = 'img/green_umbrella.png' download='green_umbrella.png' class='tooltip' title='クリックしてダウンロードしてください.'>green_umbrella;\n</a></li>"
                          var green_umbrella = '<li class = "class_8"><font class = "light"color = "#f7f7f7" size = "3">  green_umbrella=loadImage("green_umbrella.png");\n</font></li>'
                          PImage_literal(green_umbrella,count_img_8,green_umbrella_inst);
                          img_code_8 = "<li id = 'img8_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(green_umbrella," + '<input class="textbox" type="text" size="2"id ="img8_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img8_y" value = "100">' + ");</font></li>";
                          literal(img_code_8);
                          img_file_code_8 = "<sapn id = 'file_img_source_8'>  image(green_umbrella,100,100);\n</span>";
                          $("canvas").append(img_file_code_8);
                          $("#file_img_source_8").attr("id","file_img_source_8" + (count_img_8-1));
                          $("#img8_x").attr("id","img8_x" + (count_img_8-1));
                          $("#img8_y").attr("id","img8_y" + (count_img_8-1));
                          $("#img8_source").attr("id","img8_source" + (count_img_8-1));
                          $("#img8_source" + (count_img_8-1)).addClass("img8_source" + (count_img_8-1));
                        }
                        //forをクリックされた際の処理
                        if(for_flag === true){
                         //nameプロパティがPolygon(最後)の図形を見えなくする
                         $("canvas").setLayer("Image8" + (count_img_8 -1),{
                           visible:false
                         }).drawLayers();
                         count_img_8--;
                         for_flag = false;
                         rect_flag = false;
                         ellipse_flag = false;
                         tri_flag = false;
                         line_flag = false;

                         pac_flag = false;
                         img1_flag = false;
                         img2_flag = false;
                         img3_flag = false;
                         img4_flag = false;
                         img5_flag = false;
                         img6_flag = false;
                         img7_flag = false;
                         img8_flag = true;
                         img9_flag = false;
                         img10_flag = false;
                         img11_flag = false;
                         img12_flag = false;
                         img13_flag = false;
                         img14_flag = false;
                         img15_flag = false;
                         //table内のfor_propertyに書き込む
                         for_property.innerHTML = "この図形には使えません";
                       }else{
                         $("canvas").setLayer("Image8" + (count_img_8 -1),{
                           visible:true
                         }).drawLayers();
                       }
                     },false);

                     orange_umbrella.addEventListener("click",function(){
                       ++count_groups;
                       ++count_img_9;
                       for (var i = 1;i < count_img_9;i++){
                         //これがJcanvasの多角形を描くソース
                          $("canvas").drawImage({
                            layer:true,
                            name:"Image9" + i,
                            source:"img/orange_umbrella.png",
                            groups:["obj" + count_groups],
                            x: 100,
                            y: 100,
                            draggable:true,
                            drag:function(layer){
                              $("#img9_x" + (i - 1)).val(layer.x);
                              $("#img9_y" + (i - 1)).val(layer.y);
                            },
                            dragstop:function(layer){
                              document.getElementById("file_img_source_9" + (i-1)).innerHTML = "  image(orange_umbrella," + layer.x + "," + layer.y + ");\n";
                            },
                            mouseover:function(layer){
                              $(function(){
                                change_text = setInterval(function(){
                                  $("#img9_x" + (i - 1)).val(layer.x);
                                  $("#img9_y" + (i - 1)).val(layer.y);
                                },10);
                              });
                              $(function(){
                                MOver("img9_source" + (i-1));
                              });
                            },
                            mouseout:function(layer){
                              clearInterval(change_text);
                              $(function(){
                                MOut("img9_source" + (i-1));
                              });
                            },
                            click:function(layer){
                              obj_flag = layer.name;
                              if(if_flag === true){
                                X = layer.x;
                                Y = layer.y;
                                if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                                x_obj = "orange_umbrellax" + (i-1);
                                y_obj = "orange_umbrellay" + (i-1);
                                if(!document.getElementById("img_9_global" + (i-1))){
                                 $("#global").append("<li id = 'img_9_global" + (i-1) + "'>float orange_umbrellayx" + (i-1) + " = " + layer.x + ",orange_umbrellay" + (i-1) + " = " + layer.y + ";\n</li>");
                                }
                                document.getElementById("file_img_source_9" + (i-1)).innerHTML = "  image(orange_umbrella,orange_umbrellax" + (i-1) + ",orange_umbrellay" + (i-1) + ");\n";
                              }
                             }
                           });
                          }
                          if(for_flag == false){
                            var orange_umbrella_inst = "<li class = 'class9'>PImage <a href = 'img/orange_umbrella.png' download='orange_umbrella.png' class='tooltip' title='クリックしてダウンロードしてください.'>orange_umbrella;\n</a></li>"
                            var orange_umbrella = '<li class = "class_9"><font class = "light"color = "#f7f7f7" size = "3">  orange_umbrella=loadImage("orange_umbrella.png");\n</font></li>'
                            PImage_literal(orange_umbrella,count_img_9,orange_umbrella_inst);
                            img_code_9 = "<li id = 'img9_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(orange_umbrella," + '<input class="textbox" type="text" size="2"id ="img9_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img9_y" value = "100">' + ");</font></li>";
                            literal(img_code_9);
                            img_file_code_9 = "<sapn id = 'file_img_source_9'>  image(orange_umbrella,100,100);\n</span>";
                            $("canvas").append(img_file_code_9);
                            $("#file_img_source_9").attr("id","file_img_source_9" + (count_img_9-1));
                            $("#img9_x").attr("id","img9_x" + (count_img_9-1));
                            $("#img9_y").attr("id","img9_y" + (count_img_9-1));
                            $("#img9_source").attr("id","img9_source" + (count_img_9-1));
                            $("#img9_source" + (count_img_9-1)).addClass("img9_source" + (count_img_9-1));
                          }
                          //forをクリックされた際の処理
                          if(for_flag === true){
                           //nameプロパティがPolygon(最後)の図形を見えなくする
                           $("canvas").setLayer("Image9" + (count_img_9 -1),{
                             visible:false
                           }).drawLayers();
                           count_img_9--;
                           for_flag = false;
                           rect_flag = false;
                           ellipse_flag = false;
                           tri_flag = false;
                           line_flag = false;

                           pac_flag = false;
                           img1_flag = false;
                           img2_flag = false;
                           img3_flag = false;
                           img4_flag = false;
                           img5_flag = false;
                           img6_flag = false;
                           img7_flag = false;
                           img8_flag = false;
                           img9_flag = true;
                           img10_flag = false;
                           img11_flag = false;
                           img12_flag = false;
                           img13_flag = false;
                           img14_flag = false;
                           img15_flag = false;
                           //table内のfor_propertyに書き込む
                           for_property.innerHTML = "この図形には使えません";
                         }else{
                           $("canvas").setLayer("Image9" + (count_img_9 -1),{
                             visible:true
                           }).drawLayers();
                         }
                       },false);

                       orange_flower.addEventListener("click",function(){
                         ++count_groups;
                         ++count_img_10;
                         for (var i = 1;i < count_img_10;i++){
                           //これがJcanvasの多角形を描くソース
                            $("canvas").drawImage({
                              layer:true,
                              name:"Image10" + i,
                              source:"img/orange_flower.png",
                              groups:["obj" + count_groups],
                              x: 100,
                              y: 100,
                              draggable:true,
                              drag:function(layer){
                                $("#img10_x" + (i - 1)).val(layer.x);
                                $("#img10_y" + (i - 1)).val(layer.y);
                              },
                              dragstop:function(layer){
                                document.getElementById("file_img_source_10" + (i-1)).innerHTML = "  image(orange_flower," + layer.x + "," + layer.y + ");\n";
                              },
                              mouseover:function(layer){
                                $(function(){
                                  change_text = setInterval(function(){
                                    $("#img10_x" + (i - 1)).val(layer.x);
                                    $("#img10_y" + (i - 1)).val(layer.y);
                                  },10);
                                });
                                $(function(){
                                  MOver("img10_source" + (i-1));
                                });
                              },
                              mouseout:function(layer){
                                clearInterval(change_text);
                                $(function(){
                                  MOut("img10_source" + (i-1));
                                });
                              },
                              click:function(layer){
                                obj_flag = layer.name;
                                if(if_flag === true){
                                  X = layer.x;
                                  Y = layer.y;
                                  if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                                  x_obj = "orange_flowerx" + (i-1);
                                  y_obj = "orange_flowery" + (i-1);
                                  if(!document.getElementById("img_10_global" + (i-1))){
                                   $("#global").append("<li id = 'img_10_global" + (i-1) + "'>float orange_floweryx" + (i-1) + " = " + layer.x + ",orange_flowery" + (i-1) + " = " + layer.y + ";\n</li>");
                                  }
                                  document.getElementById("file_img_source_10" + (i-1)).innerHTML = "  image(orange_flower,orange_flowerx" + (i-1) + ",orange_flowery" + (i-1) + ");\n";
                                }
                               }
                             });
                            }
                            if(for_flag == false){
                              var orange_flower_inst = "<li class = 'class10'>PImage <a href = 'img/orange_flower.png' download='orange_flower.png' class='tooltip' title='クリックしてダウンロードしてください.'>orange_flower;\n</a></li>"
                              var orange_flower = '<li class = "class_10"><font class = "light"color = "#f7f7f7" size = "3">  orange_flower=loadImage("orange_flower.png");\n</font></li>'
                              PImage_literal(orange_flower,count_img_10,orange_flower_inst);
                              img_code_10 = "<li id = 'img10_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(orange_flower," + '<input class="textbox" type="text" size="2"id ="img10_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img10_y" value = "100">' + ");</font></li>";
                              literal(img_code_10);
                              img_file_code_10 = "<sapn id = 'file_img_source_10'>  image(orange_flower,100,100);\n</span>";
                              $("canvas").append(img_file_code_10);
                              $("#file_img_source_10").attr("id","file_img_source_10" + (count_img_10-1));
                              $("#img10_x").attr("id","img10_x" + (count_img_10-1));
                              $("#img10_y").attr("id","img10_y" + (count_img_10-1));
                              $("#img10_source").attr("id","img10_source" + (count_img_10-1));
                              $("#img10_source" + (count_img_10-1)).addClass("img10_source" + (count_img_10-1));
                            }
                            //forをクリックされた際の処理
                            if(for_flag === true){
                             //nameプロパティがPolygon(最後)の図形を見えなくする
                             $("canvas").setLayer("Image10" + (count_img_10 -1),{
                               visible:false
                             }).drawLayers();
                             count_img_10--;
                             for_flag = false;
                             rect_flag = false;
                             ellipse_flag = false;
                             tri_flag = false;
                             line_flag = false;

                             pac_flag = false;
                             img1_flag = false;
                             img2_flag = false;
                             img3_flag = false;
                             img4_flag = false;
                             img5_flag = false;
                             img6_flag = false;
                             img7_flag = false;
                             img8_flag = false;
                             img9_flag = false;
                             img10_flag = true;
                             img11_flag = false;
                             img12_flag = false;
                             img13_flag = false;
                             img14_flag = false;
                             img15_flag = false;
                             //table内のfor_propertyに書き込む
                             for_property.innerHTML = "この図形には使えません";
                           }else{
                             $("canvas").setLayer("Image10" + (count_img_10 -1),{
                               visible:true
                             }).drawLayers();
                           }
                         },false);

                         pink_flower.addEventListener("click",function(){
                           ++count_groups;
                           ++count_img_11;
                           for (var i = 1;i < count_img_11;i++){
                             //これがJcanvasの多角形を描くソース
                              $("canvas").drawImage({
                                layer:true,
                                name:"Image11" + i,
                                source:"img/pink_flower.png",
                                groups:["obj" + count_groups],
                                x: 100,
                                y: 100,
                                draggable:true,
                                drag:function(layer){
                                  $("#img11_x" + (i - 1)).val(layer.x);
                                  $("#img11_y" + (i - 1)).val(layer.y);
                                },
                                dragstop:function(layer){
                                  document.getElementById("file_img_source_11" + (i-1)).innerHTML = "  image(pink_flower," + layer.x + "," + layer.y + ");\n";
                                },
                                mouseover:function(layer){
                                  $(function(){
                                    change_text = setInterval(function(){
                                      $("#img11_x" + (i - 1)).val(layer.x);
                                      $("#img11_y" + (i - 1)).val(layer.y);
                                    },10);
                                  });
                                  $(function(){
                                    MOver("img11_source" + (i-1));
                                  });
                                },
                                mouseout:function(layer){
                                  clearInterval(change_text);
                                  $(function(){
                                    MOut("img11_source" + (i-1));
                                  });
                                },
                                click:function(layer){
                                  obj_flag = layer.name;
                                  if(if_flag === true){
                                    X = layer.x;
                                    Y = layer.y;
                                    if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                                    x_obj = "pink_flowerx" + (i-1);
                                    y_obj = "pink_flowery" + (i-1);
                                    if(!document.getElementById("img_11_global" + (i-1))){
                                     $("#global").append("<li id = 'img_11_global" + (i-1) + "'>float pink_floweryx" + (i-1) + " = " + layer.x + ",pink_flowery" + (i-1) + " = " + layer.y + ";\n</li>");
                                    }
                                    document.getElementById("file_img_source_11" + (i-1)).innerHTML = "  image(pink_flower,pink_flowerx" + (i-1) + ",pink_flowery" + (i-1) + ");\n";
                                  }
                                 }
                               });
                              }
                              if(for_flag == false){
                                var pink_flower_inst = "<li class = 'class11'>PImage <a href = 'img/pink_flower.png' download='pink_flower.png' class='tooltip' title='クリックしてダウンロードしてください.'>pink_flower;\n</a></li>"
                                var pink_flower = '<li class = "class_11"><font class = "light"color = "#f7f7f7" size = "3">  pink_flower=loadImage("pink_flower.png");\n</font></li>'
                                PImage_literal(pink_flower,count_img_11,pink_flower_inst);
                                img_code_11 = "<li id = 'img11_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(pink_flower," + '<input class="textbox" type="text" size="2"id ="img11_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img11_y" value = "100">' + ");</font></li>";
                                literal(img_code_11);
                                img_file_code_11 = "<sapn id = 'file_img_source_11'>  image(pink_flower,100,100);\n</span>";
                                $("canvas").append(img_file_code_11);
                                $("#file_img_source_11").attr("id","file_img_source_11" + (count_img_11-1));
                                $("#img11_x").attr("id","img11_x" + (count_img_11-1));
                                $("#img11_y").attr("id","img11_y" + (count_img_11-1));
                                $("#img11_source").attr("id","img11_source" + (count_img_11-1));
                                $("#img11_source" + (count_img_11-1)).addClass("img11_source" + (count_img_11-1));
                              }
                              //forをクリックされた際の処理
                              if(for_flag === true){
                               //nameプロパティがPolygon(最後)の図形を見えなくする
                               $("canvas").setLayer("Image11" + (count_img_11 -1),{
                                 visible:false
                               }).drawLayers();
                               count_img_11--;
                               for_flag = false;
                               rect_flag = false;
                               ellipse_flag = false;
                               tri_flag = false;
                               line_flag = false;

                               pac_flag = false;
                               img1_flag = false;
                               img2_flag = false;
                               img3_flag = false;
                               img4_flag = false;
                               img5_flag = false;
                               img6_flag = false;
                               img7_flag = false;
                               img8_flag = false;
                               img9_flag = false;
                               img10_flag = false;
                               img11_flag = true;
                               img12_flag = false;
                               img13_flag = false;
                               img14_flag = false;
                               img15_flag = false;
                               //table内のfor_propertyに書き込む
                               for_property.innerHTML = "この図形には使えません";
                             }else{
                               $("canvas").setLayer("Image11" + (count_img_11 -1),{
                                 visible:true
                               }).drawLayers();
                             }
                           },false);

                           yellow_flower.addEventListener("click",function(){
                             ++count_groups;
                             ++count_img_12;
                             for (var i = 1;i < count_img_12;i++){
                               //これがJcanvasの多角形を描くソース
                                $("canvas").drawImage({
                                  layer:true,
                                  name:"Image12" + i,
                                  source:"img/yellow_flower.png",
                                  groups:["obj" + count_groups],
                                  x: 100,
                                  y: 100,
                                  draggable:true,
                                  drag:function(layer){
                                    $("#img12_x" + (i - 1)).val(layer.x);
                                    $("#img12_y" + (i - 1)).val(layer.y);
                                  },
                                  dragstop:function(layer){
                                    document.getElementById("file_img_source_12" + (i-1)).innerHTML = "  image(yellow_flower," + layer.x + "," + layer.y + ");\n";
                                  },
                                  mouseover:function(layer){
                                    $(function(){
                                      change_text = setInterval(function(){
                                        $("#img12_x" + (i - 1)).val(layer.x);
                                        $("#img12_y" + (i - 1)).val(layer.y);
                                      },10);
                                    });
                                    $(function(){
                                      MOver("img12_source" + (i-1));
                                    });
                                  },
                                  mouseout:function(layer){
                                    clearInterval(change_text);
                                    $(function(){
                                      MOut("img12_source" + (i-1));
                                    });
                                  },
                                  click:function(layer){
                                    obj_flag = layer.name;
                                    if(if_flag === true){
                                      X = layer.x;
                                      Y = layer.y;
                                      if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                                      x_obj = "yellow_flowerx" + (i-1);
                                      y_obj = "yellow_flowery" + (i-1);
                                      if(!document.getElementById("img_12_global" + (i-1))){
                                       $("#global").append("<li id = 'img_12_global" + (i-1) + "'>float yellow_floweryx" + (i-1) + " = " + layer.x + ",yellow_flowery" + (i-1) + " = " + layer.y + ";\n</li>");
                                      }
                                      document.getElementById("file_img_source_12" + (i-1)).innerHTML = "  image(yellow_flower,yellow_flowerx" + (i-1) + ",yellow_flowery" + (i-1) + ");\n";
                                    }
                                   }
                                 });
                                }
                                if(for_flag == false){
                                  var yellow_flower_inst = "<li class = 'class12'>PImage <a href = 'img/yellow_flower.png' download='yellow_flower.png' class='tooltip' title='クリックしてダウンロードしてください.'>yellow_flower;\n</a></li>"
                                  var yellow_flower = '<li class = "class_12"><font class = "light"color = "#f7f7f7" size = "3">  yellow_flower=loadImage("yellow_flower.png");\n</font></li>'
                                  PImage_literal(yellow_flower,count_img_12,yellow_flower_inst);
                                  img_code_12 = "<li id = 'img12_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(yellow_flower," + '<input class="textbox" type="text" size="2"id ="img12_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img12_y" value = "100">' + ");</font></li>";
                                  literal(img_code_12);
                                  img_file_code_12 = "<sapn id = 'file_img_source_12'>  image(yellow_flower,100,100);\n</span>";
                                  $("canvas").append(img_file_code_12);
                                  $("#file_img_source_12").attr("id","file_img_source_12" + (count_img_12-1));
                                  $("#img12_x").attr("id","img12_x" + (count_img_12-1));
                                  $("#img12_y").attr("id","img12_y" + (count_img_12-1));
                                  $("#img12_source").attr("id","img12_source" + (count_img_12-1));
                                  $("#img12_source" + (count_img_12-1)).addClass("img12_source" + (count_img_12-1));
                                }
                                //forをクリックされた際の処理
                                if(for_flag === true){
                                 //nameプロパティがPolygon(最後)の図形を見えなくする
                                 $("canvas").setLayer("Image12" + (count_img_12 -1),{
                                   visible:false
                                 }).drawLayers();
                                 count_img_12--;
                                 for_flag = false;
                                 rect_flag = false;
                                 ellipse_flag = false;
                                 tri_flag = false;
                                 line_flag = false;

                                 pac_flag = false;
                                 img1_flag = false;
                                 img2_flag = false;
                                 img3_flag = false;
                                 img4_flag = false;
                                 img5_flag = false;
                                 img6_flag = false;
                                 img7_flag = false;
                                 img8_flag = false;
                                 img9_flag = false;
                                 img10_flag = false;
                                 img11_flag = false;
                                 img12_flag = true;
                                 img13_flag = false;
                                 img14_flag = false;
                                 img15_flag = false;
                                 //table内のfor_propertyに書き込む
                                 for_property.innerHTML = "この図形には使えません";
                               }else{
                                 $("canvas").setLayer("Image12" + (count_img_12 -1),{
                                   visible:true
                                 }).drawLayers();
                               }
                             },false);

                             tank.addEventListener("click",function(){
                               ++count_groups;
                               ++count_img_13;
                               for (var i = 1;i < count_img_13;i++){
                                 //これがJcanvasの多角形を描くソース
                                  $("canvas").drawImage({
                                    layer:true,
                                    name:"Image13" + i,
                                    source:"img/tank.png",
                                    groups:["obj" + count_groups],
                                    x: 100,
                                    y: 100,
                                    draggable:true,
                                    drag:function(layer){
                                      $("#img13_x" + (i - 1)).val(layer.x);
                                      $("#img13_y" + (i - 1)).val(layer.y);
                                    },
                                    dragstop:function(layer){
                                      document.getElementById("file_img_source_13" + (i-1)).innerHTML = "  image(tank," + layer.x + "," + layer.y + ");\n";
                                    },
                                    mouseover:function(layer){
                                      $(function(){
                                        change_text = setInterval(function(){
                                          $("#img13_x" + (i - 1)).val(layer.x);
                                          $("#img13_y" + (i - 1)).val(layer.y);
                                        },10);
                                      });
                                      $(function(){
                                        MOver("img13_source" + (i-1));
                                      });
                                    },
                                    mouseout:function(layer){
                                      clearInterval(change_text);
                                      $(function(){
                                        MOut("img13_source" + (i-1));
                                      });
                                    },
                                    click:function(layer){
                                      obj_flag = layer.name;
                                      if(if_flag === true){
                                        X = layer.x;
                                        Y = layer.y;
                                        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                                        x_obj = "tankx" + (i-1);
                                        y_obj = "tanky" + (i-1);
                                        if(!document.getElementById("img_13_global" + (i-1))){
                                         $("#global").append("<li id = 'img_13_global" + (i-1) + "'>float tankyx" + (i-1) + " = " + layer.x + ",tanky" + (i-1) + " = " + layer.y + ";\n</li>");
                                        }
                                        document.getElementById("file_img_source_13" + (i-1)).innerHTML = "  image(tank,tankx" + (i-1) + ",tanky" + (i-1) + ");\n";
                                      }
                                     }
                                   });
                                  }
                                  if(for_flag == false){
                                    var tank_inst = "<li class = 'class13'>PImage <a href = 'img/tank.png' download='tank.png' class='tooltip' title='クリックしてダウンロードしてください.'>tank;\n</a></li>"
                                    var tank = '<li class = "class_13"><font class = "light"color = "#f7f7f7" size = "3">  tank=loadImage("tank.png");\n</font></li>'
                                    PImage_literal(tank,count_img_13,tank_inst);
                                    img_code_13 = "<li id = 'img13_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(tank," + '<input class="textbox" type="text" size="2"id ="img13_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img13_y" value = "100">' + ");</font></li>";
                                    literal(img_code_13);
                                    img_file_code_13 = "<sapn id = 'file_img_source_13'>  image(tank,100,100);\n</span>";
                                    $("canvas").append(img_file_code_13);
                                    $("#file_img_source_13").attr("id","file_img_source_13" + (count_img_13-1));
                                    $("#img13_x").attr("id","img13_x" + (count_img_13-1));
                                    $("#img13_y").attr("id","img13_y" + (count_img_13-1));
                                    $("#img13_source").attr("id","img13_source" + (count_img_13-1));
                                    $("#img13_source" + (count_img_13-1)).addClass("img13_source" + (count_img_13-1));
                                  }
                                  //forをクリックされた際の処理
                                  if(for_flag === true){
                                   //nameプロパティがPolygon(最後)の図形を見えなくする
                                   $("canvas").setLayer("Image13" + (count_img_13 -1),{
                                     visible:false
                                   }).drawLayers();
                                   count_img_13--;
                                   for_flag = false;
                                   rect_flag = false;
                                   ellipse_flag = false;
                                   tri_flag = false;
                                   line_flag = false;

                                   pac_flag = false;
                                   img1_flag = false;
                                   img2_flag = false;
                                   img3_flag = false;
                                   img4_flag = false;
                                   img5_flag = false;
                                   img6_flag = false;
                                   img7_flag = false;
                                   img8_flag = false;
                                   img9_flag = false;
                                   img10_flag = false;
                                   img11_flag = false;
                                   img12_flag = false;
                                   img13_flag = true;
                                   img14_flag = false;
                                   img15_flag = false;
                                   //table内のfor_propertyに書き込む
                                   for_property.innerHTML = "この図形には使えません";
                                 }else{
                                   $("canvas").setLayer("Image13" + (count_img_13 -1),{
                                     visible:true
                                   }).drawLayers();
                                 }
                               },false);

                               star.addEventListener("click",function(){
                                 ++count_groups;
                                 ++count_img_14;
                                 for (var i = 1;i < count_img_14;i++){
                                   //これがJcanvasの多角形を描くソース
                                    $("canvas").drawImage({
                                      layer:true,
                                      name:"Image14" + i,
                                      source:"img/star.png",
                                      groups:["obj" + count_groups],
                                      x: 100,
                                      y: 100,
                                      draggable:true,
                                      drag:function(layer){
                                        $("#img14_x" + (i - 1)).val(layer.x);
                                        $("#img14_y" + (i - 1)).val(layer.y);
                                      },
                                      dragstop:function(layer){
                                        document.getElementById("file_img_source_14" + (i-1)).innerHTML = "  image(star," + layer.x + "," + layer.y + ");\n";
                                      },
                                      mouseover:function(layer){
                                        $(function(){
                                          change_text = setInterval(function(){
                                            $("#img14_x" + (i - 1)).val(layer.x);
                                            $("#img14_y" + (i - 1)).val(layer.y);
                                          },10);
                                        });
                                        $(function(){
                                          MOver("img14_source" + (i-1));
                                        });
                                      },
                                      mouseout:function(layer){
                                        clearInterval(change_text);
                                        $(function(){
                                          MOut("img14_source" + (i-1));
                                        });
                                      },
                                      click:function(layer){
                                        obj_flag = layer.name;
                                        if(if_flag === true){
                                          X = layer.x;
                                          Y = layer.y;
                                          if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                                          x_obj = "starx" + (i-1);
                                          y_obj = "stary" + (i-1);
                                          if(!document.getElementById("img_14_global" + (i-1))){
                                           $("#global").append("<li id = 'img_14_global" + (i-1) + "'>float staryx" + (i-1) + " = " + layer.x + ",stary" + (i-1) + " = " + layer.y + ";\n</li>");
                                          }
                                          document.getElementById("file_img_source_14" + (i-1)).innerHTML = "  image(star,starx" + (i-1) + ",stary" + (i-1) + ");\n";
                                        }
                                       }
                                     });
                                    }
                                    if(for_flag == false){
                                      var star_inst = "<li class = 'class14'>PImage <a href = 'img/star.png' download='star.png' class='tooltip' title='クリックしてダウンロードしてください.'>star;\n</a></li>"
                                      var star = '<li class = "class_14"><font class = "light"color = "#f7f7f7" size = "3">  star=loadImage("star.png");\n</font></li>';
                                      PImage_literal(star,count_img_14,star_inst);
                                      img_code_14 = "<li id = 'img14_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(star," + '<input class="textbox" type="text" size="2"id ="img14_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img14_y" value = "100">' + ");</font></li>";
                                      literal(img_code_14);
                                      img_file_code_14 = "<sapn id = 'file_img_source_14'>  image(star,100,100);\n</span>";
                                      $("canvas").append(img_file_code_14);
                                      $("#file_img_source_14").attr("id","file_img_source_14" + (count_img_14-1));
                                      $("#img14_x").attr("id","img14_x" + (count_img_14-1));
                                      $("#img14_y").attr("id","img14_y" + (count_img_14-1));
                                      $("#img14_source").attr("id","img14_source" + (count_img_14-1));
                                      $("#img14_source" + (count_img_14-1)).addClass("img14_source" + (count_img_14-1));
                                    }
                                    //forをクリックされた際の処理
                                    if(for_flag === true){
                                     //nameプロパティがPolygon(最後)の図形を見えなくする
                                     $("canvas").setLayer("Image14" + (count_img_14 -1),{
                                       visible:false
                                     }).drawLayers();
                                     count_img_14--;
                                     for_flag = false;
                                     rect_flag = false;
                                     ellipse_flag = false;
                                     tri_flag = false;
                                     line_flag = false;

                                     pac_flag = false;
                                     img1_flag = false;
                                     img2_flag = false;
                                     img3_flag = false;
                                     img4_flag = false;
                                     img5_flag = false;
                                     img6_flag = false;
                                     img7_flag = false;
                                     img8_flag = false;
                                     img9_flag = false;
                                     img10_flag = false;
                                     img11_flag = false;
                                     img12_flag = false;
                                     img13_flag = false;
                                     img14_flag = true;
                                     img15_flag = false;
                                     //table内のfor_propertyに書き込む
                                     for_property.innerHTML = "この図形には使えません";
                                   }else{
                                     $("canvas").setLayer("Image14" + (count_img_14 -1),{
                                       visible:true
                                     }).drawLayers();
                                   }
                                 },false);

                                 giraffe.addEventListener("click",function(){
                                   ++count_groups;
                                   ++count_img_15;
                                   for (var i = 1;i < count_img_15;i++){
                                     //これがJcanvasの多角形を描くソース
                                      $("canvas").drawImage({
                                        layer:true,
                                        name:"Image15" + i,
                                        source:"img/giraffe.png",
                                        groups:["obj" + count_groups],
                                        x: 100,
                                        y: 100,
                                        draggable:true,
                                        drag:function(layer){
                                          $("#img15_x" + (i - 1)).val(layer.x);
                                          $("#img15_y" + (i - 1)).val(layer.y);
                                        },
                                        dragstop:function(layer){
                                          document.getElementById("file_img_source_15" + (i-1)).innerHTML = "  image(giraffe," + layer.x + "," + layer.y + ");\n";
                                        },
                                        mouseover:function(layer){
                                          $(function(){
                                            change_text = setInterval(function(){
                                              $("#img15_x" + (i - 1)).val(layer.x);
                                              $("#img15_y" + (i - 1)).val(layer.y);
                                            },10);
                                          });
                                          $(function(){
                                            MOver("img15_source" + (i-1));
                                          });
                                        },
                                        mouseout:function(layer){
                                          clearInterval(change_text);
                                          $(function(){
                                            MOut("img15_source" + (i-1));
                                          });
                                        },
                                        click:function(layer){
                                          obj_flag = layer.name;
                                          if(if_flag === true){
                                            X = layer.x;
                                            Y = layer.y;
                                            if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
                                            x_obj = "giraffex" + (i-1);
                                            y_obj = "giraffey" + (i-1);
                                            if(!document.getElementById("img_15_global" + (i-1))){
                                             $("#global").append("<li id = 'img_15_global" + (i-1) + "'>float giraffeyx" + (i-1) + " = " + layer.x + ",giraffey" + (i-1) + " = " + layer.y + ";\n</li>");
                                            }
                                            document.getElementById("file_img_source_15" + (i-1)).innerHTML = "  image(giraffe,giraffex" + (i-1) + ",giraffey" + (i-1) + ");\n";
                                          }
                                         }
                                       });
                                      }
                                      if(for_flag == false){
                                        var giraffe_inst = "<li class = 'class15'>PImage <a href = 'img/giraffe.png' download='giraffe.png' class='tooltip' title='クリックしてダウンロードしてください.'>giraffe;\n</a></li>"
                                        var giraffe = '<li class = "class_15"><font class = "light"color = "#f7f7f7" size = "3">  giraffe=loadImage("giraffe.png");\n</font></li>';
                                        PImage_literal(giraffe,count_img_15,giraffe_inst);
                                        img_code_15 = "<li id = 'img15_source' class = 'Img'><font class = 'light'color = '#f7f7f7' size = '3'>  image(giraffe," + '<input class="textbox" type="text" size="2"id ="img15_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img15_y" value = "100">' + ");</font></li>";
                                        literal(img_code_15);
                                        img_file_code_15 = "<sapn id = 'file_img_source_15'>  image(giraffe,100,100);\n</span>";
                                        $("canvas").append(img_file_code_15);
                                        $("#file_img_source_15").attr("id","file_img_source_15" + (count_img_15-1));
                                        $("#img15_x").attr("id","img15_x" + (count_img_15-1));
                                        $("#img15_y").attr("id","img15_y" + (count_img_15-1));
                                        $("#img15_source").attr("id","img15_source" + (count_img_15-1));
                                        $("#img15_source" + (count_img_15-1)).addClass("img15_source" + (count_img_15-1));
                                      }
                                      //forをクリックされた際の処理
                                      if(for_flag === true){
                                       //nameプロパティがPolygon(最後)の図形を見えなくする
                                       $("canvas").setLayer("Image15" + (count_img_15 -1),{
                                         visible:false
                                       }).drawLayers();
                                       count_img_15--;
                                       for_flag = false;
                                       rect_flag = false;
                                       ellipse_flag = false;
                                       tri_flag = false;
                                       line_flag = false;

                                       pac_flag = false;
                                       img1_flag = false;
                                       img2_flag = false;
                                       img3_flag = false;
                                       img4_flag = false;
                                       img5_flag = false;
                                       img6_flag = false;
                                       img7_flag = false;
                                       img8_flag = false;
                                       img9_flag = false;
                                       img10_flag = false;
                                       img11_flag = false;
                                       img12_flag = false;
                                       img13_flag = false;
                                       img14_flag = false;
                                       img15_flag = true;
                                       //table内のfor_propertyに書き込む
                                       for_property.innerHTML = "この図形には使えません";
                                     }else{
                                       $("canvas").setLayer("Image15" + (count_img_15 -1),{
                                         visible:true
                                       }).drawLayers();
                                     }
                                   },false);

                                   function setBlobUrl(id) {

                                     booL_count++;
                                     file_write = $("canvas").text();
                                     file_write = $("#global").text() + $("#open").text() + $("#setup").text() + $("#PImage").text() + "\n" + $("#setup_close").text() + "\n" + file_write + $("#close").text();
                                     file_write = file_write.replace(/\n/g, "\r\n").replace(/\r\r/g, "\r");

                                     var date = new Date();
                                     var year = date.getFullYear().toString();
                                     year = year.substr( 2,2 );
                                     var month = date.getMonth() + 1;
                                     var day = ("0"+date.getDate()).slice(-2);
                                     // 指定されたデータを保持するBlobを作成する。
                                     var blob = new Blob([ file_write ], { "type" : "application/x-msdownload" });
                                     // Aタグのhref属性にBlobオブジェクトを設定し、リンクを生成
                                     window.URL = window.URL || window.webkitURL;
                                     $("#" + id).attr("href", window.URL.createObjectURL(blob));
                                     $("#" + id).attr("download", "processing_" + year + month + day + "_" + booL_count + ".pde");
                                   }

                                   download_file.addEventListener("click",function(){
                                     setBlobUrl("download_file");
                                  },false);
