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
var store = document.getElementById("store");
var if_property = document.getElementById("if_property");
var sample_if = document.getElementById("sample_if");
var key = document.getElementById("key");
var download_file = document.getElementById("download_file");
var del = document.getElementById("del");
//表示するコードをいれる配列
var figures = [];
var pImage = [];
var Image_array = [];
var file_array = [];
//何回関数が読みだされたかカウント
var load_figures = 0;
var load_Image = 0;

var count_Figures = {
  "rect":0,
  "ellipse":0,
  "triangle":0,
  "polygon":0,
  "line":0,
  "pac":0,
  "img_1":0,
  "img_2":0,
  "img_3":0,
  "img_4":0,
  "img_5":0,
  "img_6":0,
  "img_7":0,
  "img_8":0,
  "img_9":0,
  "img_10":0,
  "img_11":0,
  "img_12":0,
  "img_13":0,
  "img_14":0,
  "img_15":0,
  "for":0,
  "if":0
};
var count_for = 0;
//図形のtextboxの値を取得する変数
var x_obj;
var y_obj;
//mouseを動かした際のid属性を入れる変数
var object_Over;
var object_Out;

var for_flag = false;
var if_flag = false;
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
var ply_file_code;
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
var fill_code_ply;
var fill_code_for;
var stroke_code_line;
var fill_code_pac;

var file_rect_fill;
var file_ellipse_fill;
var file_tri_fill;
var file_ply_fill;
var file_for_fill;
var file_line_stroke;
var file_pac_fill;

var obj_fill;
var poly_angle;

var object_layer;
var object_count;

var file_write;

var triangle_x;
var triangle_y;

var className;
var booL_count = 0;
var for_ope;
var layer_name;
var focuses_layer;
var i = 0;
var x = 0;
var y = 0;
var ox = 0;
var oy = 0;

var for_object;
var inst_className;
var count_Img = {
  "img_1":0,
  "img_2":0,
  "img_3":0,
  "img_4":0,
  "img_5":0,
  "img_6":0,
  "img_7":0,
  "img_8":0,
  "img_9":0,
  "img_10":0,
  "img_11":0,
  "img_12":0,
  "img_13":0,
  "img_14":0,
  "img_15":0,
  "select_obj":0
};

function axis(){
  $('canvas').draw({
    fn: function(ctx) {
      ctx.strokeStyle = "#666";
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.ceil($("#area").width() * 0.569), 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, Math.ceil(window.innerHeight * 0.95));
      ctx.stroke();
      for(x = 0;x <= Math.ceil($("#area").width() * 0.569);x+=10){
        if(x % 50 == 0 && x != 0){
          ctx.font = "10px 'Noto Sans Japanese'";
          ctx.lineWidth = 0.5;
          ctx.strokeText(x, x-8, 25);
          ctx.lineWidth = 4;
        }else{
          ctx.lineWidth = 2;
        }
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 15);
        ctx.stroke();
      }
      for(y = 0;y <= Math.ceil(window.innerHeight * 0.95);y+=10){
        if(y % 50 == 0 && y != 0){
          ctx.font = "10px 'Noto Sans Japanese'";
          ctx.lineWidth = 0.5;
          ctx.strokeText(y, 15, y+3);
          ctx.lineWidth = 4;
        }else{
          ctx.lineWidth = 2;
        }
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(15, y);
        ctx.stroke();
      }
    },
    name:"CTX",
    strokeDash: [0],
    strokeDashOffset: 0,
  });

}

function focuses(x,y,width,height,o_name){
  $("canvas").removeLayer("focuses");
  $('canvas').draw({
    fn:function(ctx){
      ctx.strokeStyle = "#efe600";
      ctx.lineWidth = 2;
      for(ox = x; ox < x+width; ox+=10){
        ctx.beginPath();
        ctx.moveTo(ox, y-2);
        ctx.lineTo(ox+5, y-2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(ox, y+height+2);
        ctx.lineTo(ox+5, y+height+2);
        ctx.stroke();
      }
      for(oy = y; oy < y+height; oy+=10){
        ctx.beginPath();
        ctx.moveTo(x-2, oy);
        ctx.lineTo(x-2, oy+5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x+width+2, oy);
        ctx.lineTo(x+width+2, oy+5);
        ctx.stroke();
      }
    },
    name:"focuses",
  });
  var focuses_layer_o = $("canvas").getLayer("focuses");
  focuses_layer = focuses_layer_o.name;
  canvas.addEventListener("mouseup",function(){
    $("canvas").removeLayer("focuses").drawLayers();
  },false);
}

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
  if(img_count == 1){
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
  /*if(for_flag == true){
  //最後の要素を消す
  figures.pop();
  --load_figures;
}*/
var count = figures.length;
//preタグ内に書き込む
if(++load_figures == figures.length){
  $("#source_code").append(figures[count-1]);
}
}

//四角形を描く
rect.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["rect"];
  //これがJcanvasの四角形を描くソース
  $("canvas").drawRect({
    layer:true,
    name:"Rect" + count_Figures["rect"],
    groups:["obj" + count_groups],
    strokeStyle: "black",
    fillStyle:"#666666",
    strokeWidth: 1,
    x: 100,
    y: 100,
    width: 65,
    height: 65,
    fromCenter: false,
    dblclick:function(layer){

      layer.fillStyle = $("#color").val();
      document.getElementById("rec_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
      document.getElementById("file_rect_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");\n";
    },
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#rect_x" + object_count).val(layer.x);
      $("#rect_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_rect_source" + object_count).innerHTML = "  rect(" + layer.x + "," + layer.y + ",65,65);\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(4);
      $(function(){
        change_text = setInterval(function(){
          $("#rect_x" + object_count).val(layer.x);
          $("#rect_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("rect_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("rect_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      inst_className = document.getElementById("rect_source" + object_count).className;
      className = document.getElementById("file_rect_source" + object_count).className;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "四角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "2" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
        + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
        obj_judge = "rect";
      }
      if(if_flag === true){
        obj_flag = layer.name;
        X = layer.x;
        Y = layer.y;
        x_obj = "rx" + object_count;
        y_obj = "ry" + object_count;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        if(!document.getElementById("rect_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'rect_global" + object_count + "'>float rx" + object_count + " = " + layer.x + ",ry" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_rect_source" + object_count).innerHTML = "  rect(rx" + object_count + ",ry" + object_count + ",65,65);\n";
      }
    }
  });
  file_rect_fill = "<span id='file_rect_fill' class = " + count_groups + ">  fill(102,102,102);\n</span>"
  rect_file_code = "<span id = 'file_rect_source' class = " + count_groups + ">  rect(100,100,65,65);\n</span>";
  fill_code_rec = "<li id='rec_fill' class='tooltip " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
  literal(fill_code_rec);
  rect_code = "<li id = 'rect_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  rect(" + '<input class="textbox" type="text" size="2"id ="rect_x" value = 100>' + "," + '<input class="textbox" type="text" size="2"id ="rect_y" value = 100>' + ",65,65);</font></li>";
  literal(rect_code);
  $("canvas").append(file_rect_fill);
  $("canvas").append(rect_file_code);
  $("#rect_x").attr("id","rect_x" + count_Figures["rect"]);
  $("#rect_y").attr("id","rect_y" + count_Figures["rect"]);
  $("#file_rect_source").attr("id","file_rect_source" + count_Figures["rect"]);
  $("#rect_source").attr("id","rect_source" + count_Figures["rect"]);
  $("#rect_source" + count_Figures["rect"]).addClass("rect_source" + count_Figures["rect"]);
  $("#file_rect_fill").attr("id","file_rect_fill" + count_Figures["rect"]);
  $("#rec_fill").attr("id","rec_fill" + count_Figures["rect"]);
  //setBlobUrl("download_file");
},false);


//ボタンを押して図形の位置を変更する
compile.addEventListener("click",function(){
  //(図形のtextboxのid,nameプロパティ,count_??);
  Compile("rect","Rect",6);
  Compile("ellipse","Ellipse",9);
  Compile("triangle","Triangle",10);
  Compile("polygon","Polygon",9)
  Compile_Line1("line1","Line",7);
  Compile_Line2("line2","Line",7);
  Compile("pac","Pac",5);
  Compile("img1","Image1",6);
  Compile("img2","Image2",6);
  Compile("img3","Image3",6);
  Compile("img4","Image4",6);
  Compile("img5","Image5",6);
  Compile("img6","Image6",6);
  Compile("img7","Image7",6);
  Compile("img8","Image8",6);
  Compile("img9","Image9",6);
  Compile("img10","Image10",7);
  Compile("img11","Image11",7);
  Compile("img12","Image12",7);
  Compile("img13","Image13",7);
  Compile("img14","Image14",7);
  Compile("img15","Image15",7);
  $("canvas").removeLayer("focuses").drawLayers();
  textbox_id = [];
},false);

//Lineだけの変更処理
function Compile_Line1(obj,Obj,count_obj){
  for(var i in textbox_id){
    var count = textbox_id[i].slice(count_obj);
    var line_layer = $("canvas").getLayer("Line" + count);
    obj_x = $("#" + obj + "_x" + count).val();
  obj_y = $("#" + obj + "_y" + count).val();
  //全角→半角変換処理
  $(function(){
    $("#" + obj + "_x" + count).change(function(){
      obj_x = obj_x.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#" + obj + "_x" + count).val(obj_x);
    }).change();
    $("#" + obj + "_y" + count).change(function(){
      obj_y = obj_y.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#" + obj + "_y" + count).val(obj_y);
    }).change();
  })
  //textboxの値判定
  if (typeof obj_x == "undefined" || obj_x == "" ||isNaN($("#" + obj + "_x" + count).val())){
    obj_x = 0;
  }
  if (typeof obj_y == "undefined" || obj_y == "" ||isNaN($("#" + obj + "_y" + count).val())){
    obj_y = 0;
  }

    document.getElementById("file_line_source" + count).innerHTML = "  line(" + obj_x + "," + obj_y + "," + line_layer.x2 + "," + line_layer.y2 + ");\n";
    //nameプロパティを指定して動かす
    $("canvas").setLayer(Obj + count, {
      x1: obj_x,
      y1: obj_y
    })
    .drawLayers();
  }
}

function Compile_Line2(obj,Obj,count_obj){
  for(var i in textbox_id){
    var count = textbox_id[i].slice(count_obj);
    var line_layer = $("canvas").getLayer("Line" + count);
    obj_x = $("#" + obj + "_x" + count).val();
    obj_y = $("#" + obj + "_y" + count).val();
  //全角→半角変換処理
  $(function(){
    $("#" + obj + "_x" + count).change(function(){
      obj_x = obj_x.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#" + obj + "_x" + count).val(obj_x);
    }).change();
    $("#" + obj + "_y" + count).change(function(){
      obj_y = obj_y.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      $("#" + obj + "_y" + count).val(obj_y);
    }).change();
  })
  //textboxの値判定
  if (typeof obj_x == "undefined" || obj_x == "" ||isNaN($("#" + obj + "_x" + count).val())){
    obj_x = 0;
  }
  if (typeof obj_y == "undefined" || obj_y == "" ||isNaN($("#" + obj + "_y" + count).val())){
    obj_y = 0;
  }

  document.getElementById("file_line_source" + count).innerHTML = "  line(" + line_layer.x1 + "," + line_layer.y1 + "," + obj_x + "," + obj_y + ");\n";
    //nameプロパティを指定して動かす
    $("canvas").setLayer(Obj + count, {
      x2: obj_x,
      y2: obj_y
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
      var if_code = "<li id = 'if_source' class = 'if_code " + className + "'><font class = 'light'color = '#f7f7f7' size = '3'>  if(" + x_obj + comp_x + if_x + " &&" + y_obj + comp_y + if_y + "){" + "\n" +
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
  if (for_flag == true){
    count_groups++;
    var inst_int = $("#int").val();
    var inst_for_y = $("#for_y").val();

    inst_int = inst_int.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    inst_for_y = inst_for_y.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    if(obj_judge == "rect"){
      if($(".ver_hori").val() == 0){
        for_object = "    rect(x," + inst_for_y + ",65,65);" + "\n";
      }else if($(".ver_hori").val() == 1){
        for_object = "    rect(" + inst_int + ",y,65,65);" + "\n";
      }
      for_obj("rectangle");
      //グループ化しているものを取得してプロパティを追加
      $("canvas").setLayerGroup("obj" + count_groups,{
        fillStyle:$("#color").val(),
        name:"For" + count_for,
        click:function(layer){
          if($(".ver_hori").val() == 0){
            var zouka = ((ctrl-int)/rate);
            inst_className = document.getElementById("for_source" + object_count).className;
            className = document.getElementById("for_fill" + object_count).className;
            var layer_o = $("canvas").getLayerGroup("obj" + className);
            focuses(layer_o[0].x,layer_o[(zouka-1)].y,((ctrl+layer.width)-int-10),layer_o[0].height);

          }else if($(".ver_hori").val() == 1){
            var zouka = ((ctrl-for_y)/rate);
            inst_className = document.getElementById("for_source" + object_count).className;
            className = document.getElementById("for_fill" + object_count).className;
            var layer_o = $("canvas").getLayerGroup("obj" + className);
            focuses(layer_o[(zouka-1)].x,layer_o[0].y,layer_o[0].width,((ctrl+layer.height)-for_y-10));

          }
        }
      }).drawLayers();
    }
    if(obj_judge == "ellipse"){
      if($(".ver_hori").val() == 0){
        for_object = "    ellipse(x," + inst_for_y + ",65,65);" + "\n";
      }else if($(".ver_hori").val() == 1){
        for_object = "    ellipse(" + inst_int + ",y,65,65);" + "\n";
      }
      for_obj("ellipse");
      $("canvas").setLayerGroup("obj" + count_groups,{
        fillStyle:$("#color").val(),
        name:"For" + count_for,
        click:function(layer){
          var zouka = ((ctrl-int)/rate);
          if($(".ver_hori").val() == 0){
            var zouka = ((ctrl-int)/rate);
            inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
            var layer_o = $("canvas").getLayerGroup("obj" + className);
            focuses(layer_o[0].x,layer_o[(zouka-1)].y,((ctrl+layer.width)-int-10),layer_o[0].height);

          }else if($(".ver_hori").val() == 1){
            var zouka = ((ctrl-for_y)/rate);
            inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
            var layer_o = $("canvas").getLayerGroup("obj" + className);
            focuses(layer_o[(zouka-1)].x,layer_o[0].y,layer_o[0].width,((ctrl+layer.height)-for_y-10));

          }
        }
      }).drawLayers();
    }
    if(obj_judge == "triangle"){
      if($(".ver_hori").val() == 0){
        for_object = "    triangle(x," + parseInt(inst_for_y) + ",x+30," + (parseInt(inst_for_y)+50) + ",x-30," + (parseInt(inst_for_y)+50) + ");" + "\n";
      }else if($(".ver_hori").val() == 1){
        for_object = "    triangle(" + parseInt(inst_int) + ",y," + (parseInt(inst_int)+30) + ",y+50," + (parseInt(inst_int)-30) + ",y+50);" + "\n";
      }
      for_obj("polygon");
      $("canvas").setLayerGroup("obj" + count_groups,{
        fillStyle:$("#color").val(),
        name:"For" + count_for,
        sides:3,
        click:function(layer){
          if($(".ver_hori").val() == 0){
            var zouka = ((ctrl-int)/rate);
            inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
            var layer_o = $("canvas").getLayerGroup("obj" + className);
            focuses(layer_o[0].x,layer_o[(zouka-1)].y,((ctrl+layer.width)-int-10),layer_o[0].height*0.75);

          }else if($(".ver_hori").val() == 1){
            var zouka = ((ctrl-for_y)/rate);
            inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
            var layer_o = $("canvas").getLayerGroup("obj" + className);
            focuses(layer_o[(zouka-1)].x,layer_o[0].y,layer_o[0].width,((ctrl+layer.height)-for_y-25));

          }
        }
      }).drawLayers();
    }
    if(obj_judge == "polygon"){
      if($(".ver_hori").val() == 0){
        for_object = "    polygon(x," + inst_for_y + ",40," + angle.value + ");" + "\n";
      }else if($(".ver_hori").val() == 1){
        for_object = "    polygon(" + inst_int + ",y,40," + angle.value + ");" + "\n";
      }
      for_obj("polygon");
      $("canvas").setLayerGroup("obj" + count_groups,{
        fillStyle:$("#color").val(),
        sides:angle.value,
        name:"For" + count_for,
        click:function(layer){
          if($(".ver_hori").val() == 0){
        	var zouka = ((ctrl-int)/rate);
        	inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
        	var layer_o = $("canvas").getLayerGroup("obj" + className);
          focuses(layer_o[0].x,layer_o[(zouka-1)].y,((ctrl+layer.width)-int-10),layer_o[0].height*0.87);

        }else if($(".ver_hori").val() == 1){
        	var zouka = ((ctrl-for_y)/rate);
        	inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
        	var layer_o = $("canvas").getLayerGroup("obj" + className);
        	focuses(layer_o[(zouka-1)].x,layer_o[0].y,layer_o[0].width,((ctrl+layer.height)-for_y-15));

        }
        }

      }).drawLayers();
    }
    if(obj_judge == "pac"){
      if($(".ver_hori").val() == 0){
        for_object = "    arc(x," + inst_for_y + ",65,65,0.5,5.8,PIE);" + "\n";
      }else if($(".ver_hori").val() == 1){
        for_object = "    arc(" + inst_int + ",y,65,65,0.5,5.8,PIE);" + "\n";
      }
      for_obj("slice");
      $("canvas").setLayerGroup("obj" + count_groups,{
        fillStyle:$("#color").val(),
        start:120,end:420,
        name:"For" + count_for,
        click:function(layer){
          if($(".ver_hori").val() == 0){
          	var zouka = ((ctrl-int)/rate);
          	inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
          	var layer_o = $("canvas").getLayerGroup("obj" + className);
          	focuses(layer_o[0].x,layer_o[(zouka-1)].y,((ctrl+layer.width)-int-10),layer_o[0].height);

          }else if($(".ver_hori").val() == 1){
          	var zouka = ((ctrl-for_y)/rate);
          	inst_className = document.getElementById("for_source" + object_count).className;
className = document.getElementById("for_fill" + object_count).className;
          	var layer_o = $("canvas").getLayerGroup("obj" + className);
          	focuses(layer_o[(zouka-1)].x,layer_o[0].y,layer_o[0].width,((ctrl+layer.height)-for_y-10));

          }
        }
      }).drawLayers();
    }
  }
  for_flag = false;
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
        $("canvas").addLayer({
          type:Obj,
          layer:true,
          groups:["obj" + count_groups],
          strokeStyle: "black",
          strokeWidth: 1,
          sides:for_sizes,
          fillStyle:"#000",
          x:ob_x,
          y: for_y,
          width: 65,
          height: 65,
          radius:32.5,
          fromCenter: false,
          mouseover:function(layer){
            object_layer = $("canvas").getLayer(layer.name);
            object_count = object_layer.name.slice(3);
            $(function(){
              $("pre > .for_source" + object_count).each(function(){
                $(function(){
                  for_over = document.getElementById("for_source" + object_count);
                  for_over.style.backgroundColor = "rgba(127,255,212,0.55)";
                });
              });
            });
          },
          mouseout:function(layer){
            $(function(){
              $("pre > .for_source" + object_count).each(function(){
                $(function(){
                  for_out = document.getElementById("for_source" + object_count);
                  for_out.style.backgroundColor = "rgb(11, 0, 35)";
                });
              });
            });
          }
        }).drawLayers();
      }
      for_code = "<li id = 'for_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int x = " + int + ";x < " + ctrl + "; x+=" + rate + "){" + "\n" +
      "  " + for_object +
      "}\n</font></li>";
    }else if($(".ver_hori").val() == 1){
      for(var ob_y = for_y; ob_y < ctrl; ob_y += rate){
        $("canvas").addLayer({
          type:Obj,
          layer:true,
          groups:["obj" + count_groups],
          strokeStyle: "black",
          strokeWidth: 1,
          x:int,
          y: ob_y,
          fillStyle:"#000",
          width: 65,
          height: 65,
          radius:32.5,
          sides:for_sizes,
          fromCenter: false,
          mouseover:function(layer){
            object_layer = $("canvas").getLayer(layer.name);
            object_count = object_layer.name.slice(3);
            $(function(){
              $("pre > .for_source" + object_count).each(function(){
                $(function(){
                  for_over = document.getElementById("for_source" + object_count);
                  for_over.style.backgroundColor = "rgba(127,255,212,0.55)";
                });
              });
            });
          },
          mouseout:function(layer){
            $(function(){
              $("pre > .for_source" + object_count).each(function(){
                $(function(){
                  for_out = document.getElementById("for_source" + object_count);
                  for_out.style.backgroundColor = "rgb(11, 0, 35)";
                });
              });
            });
          }
        }).drawLayers();
      }
      for_code = "<li id = 'for_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int y = " + int + ";y < " + ctrl + "; y+=" + rate + "){" + "\n" +
      "  " + for_object +
      "  }\n</font></li>";
    }
  }else if(int > ctrl){
    if($(".ver_hori").val() == 0){
      for(var ob_x = int; ob_x > ctrl; ob_x -= rate){
        $("canvas").addLayer({
          type:Obj,
          layer:true,
          groups:["obj" + count_groups],
          strokeStyle: "black",
          strokeWidth: 1,
          fillStyle:"#000",
          x:ob_x,
          y: for_y,
          width: 65,
          height: 65,
          radius:32.5,
          sides:for_sizes,
          fromCenter: false,
          mouseover:function(layer){
            object_layer = $("canvas").getLayer(layer.name);
            object_count = object_layer.name.slice(3);
            $(function(){
              $("pre > .for_source" + object_).each(function(){
                $(function(){
                  for_over = document.getElementById("for_source" + object_);
                  for_over.style.backgroundColor = "rgba(127,255,212,0.55)";
                });
              });
            });
          },
          mouseout:function(layer){
            $(function(){
              $("pre > .for_source" + object_).each(function(){
                $(function(){
                  for_out = document.getElementById("for_source" + object_);
                  for_out.style.backgroundColor = "rgb(11, 0, 35)";
                });
              });
            });
          }
        }).drawLayers();
      }
      for_code = "<li class='Fig " + count_groups + "' id = 'for_source'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int x = " + int + ";x > " + ctrl + "; x-=" + rate + "){" + "\n" +
      "  " + for_object + "\n" +
      "}\n</font></li>";
    }else if($(".ver_hori").val() == 1){
      for(var ob_y = for_y; ob_y > ctrl; ob_y -= rate){
        $("canvas").addLayer({
          type:Obj,
          layer:true,
          groups:["obj" + count_groups],
          strokeStyle: "black",
          strokeWidth: 1,
          fillStyle:"#000",
          x:int,
          y: ob_y,
          width: 65,
          height: 65,
          radius:32.5,
          sides:for_sizes,
          fromCenter: false,
          mouseover:function(layer){
            object_layer = $("canvas").getLayer(layer.name);
            object_count = object_layer.name.slice(3);
            $(function(){
              $("pre > .for_source" + object_).each(function(){
                $(function(){
                  for_over = document.getElementById("for_source" + object_);
                  for_over.style.backgroundColor = "rgba(127,255,212,0.55)";
                });
              });
            });
          },
          mouseout:function(layer){
            $(function(){
              $("pre > .for_source" + object_).each(function(){
                $(function(){
                  for_out = document.getElementById("for_source" + object_);
                  for_out.style.backgroundColor = "rgb(11, 0, 35)";
                });
              });
            });
          }
        }).drawLayers();
      }
      for_code = "<li id = 'for_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  for (int y = " + int + ";y > " + ctrl + "; y-=" + rate + "){" + "\n" +
      "  " + for_object +
      "  }\n</font></li>";
    }
  }


  fill_code_for = "<li id='for_fill' class = " + count_groups + "><font class = 'light'color = '#f7f7f7' size = '3'>  fill(" + parseInt($("#color").val().substring(1,3), 16) + "," + parseInt($("#color").val().substring(3,5), 16) + "," + parseInt($("#color").val().substring(5,7), 16) + ");</font></li>";
  literal(fill_code_for);
  literal(for_code);
  $("canvas").append(fill_code_for);
  $("canvas").append(for_code);
  $("#for_source").attr("id","for_source" + count_for);
  $("#for_source" + count_for).addClass("for_source" + count_for);
  $("#for_fill").attr("id","for_fill" + count_for);
}

var textbox_id = [];
var textbox_count = 0;
//textbox_idにfocusしたidをぶち込む
$(function(){
  var focus_on = setInterval(function(){
    $("input").focus(function(){
      ++textbox_count;
      textbox_id.push($(this).attr('id'));
      if(textbox_id[textbox_id.length-2] === textbox_id[textbox_id.length-1]){
        textbox_id.pop();
      }
      });
  },1000);
});





//図形の位置を変える
function Compile(obj,Obj,count_obj){
    //図形のtextbox内の値を取得
    for(var i in textbox_id){
      var count = textbox_id[i].slice(count_obj);
      var figures = textbox_id[i].slice(0,count_obj-2);
      obj_x = $("#" + figures + "_x" + count).val();
      obj_y = $("#" + figures + "_y" + count).val();
    //全角→半角変換処理
    $(function(){
      $("#" + figures + "_x" + count).change(function(){
        obj_x = obj_x.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        $("#" + figures + "_x" + count).val(obj_x);
      }).change();
      $("#" + figures + "_y" + count).change(function(){
        obj_y = obj_y.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        $("#" + figures + "_y" + count).val(obj_y);
      }).change();
    })
    //textboxの値判定
    if (typeof obj_x == "undefined" || obj_x == "" ||isNaN($("#" + figures + "_x" + count).val())){
      obj_x = 0;
    }
    if (typeof obj_y == "undefined" || obj_y == "" ||isNaN($("#" + figures + "_y" + count).val())){
      obj_y = 0;
    }
    if(figures === "rect" || figures === "ellipse"){
      document.getElementById("file_" + figures + "_source" + count).innerHTML = "  " + figures + "(" + obj_x + "," + obj_y + ",65,65);";
    }else if(figures === "triangle"){
      document.getElementById("file_" + figures + "_source" + count).innerHTML = "  " + figures + "(" + obj_x + "," + obj_y + "," + (obj_x+30) + "," + (obj_y+50) + "," + (obj_x-30) + "," + (obj_y+50) + ");";
    }else if (figures === "polygon"){
      document.getElementById("file_" + figures + "_source" + count).innerHTML = "  " + figures + "(" + obj_x + "," + obj_y + ",40," + angle.value + ");";
    }else if (figures === "pac"){
      document.getElementById("file_" + figures + "_source" + count).innerHTML = "  arc(" + obj_x + "," + obj_y + ",65,65,0.5,5.8,PIE);";
    }
    //nameプロパティを指定して動かす
    $("canvas").setLayer(Obj + count, {
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
//消去のイベントリスナ
del.addEventListener("click",function(){

  if($("#source_code").find("li").filter(":last").hasClass("if_code")){
    $("#source_code > ." + className).remove();
    $("#global > ." + className).remove();
    $("canvas > ." + className).remove();
  }
    console.log(className);
  if(inst_className.match(/Fig/)){
    $("#source_code > ." + className).remove();
    $("#source_code > ." + className).remove();
    $("canvas > ." + className).remove();
    $("canvas > ." + className).remove();
  }
  if(inst_className.match(/Line/)){
    $("#source_code > ." + className).remove();
    $("#source_code > ." + className).remove();
    $("#source_code > ." + className).remove();
    $("canvas > ." + className).remove();
    $("canvas > ." + className).remove();
    $("canvas > ." + className).remove();
    key.src = "img/key_close.png";
  }
  if(inst_className.match(/Img/)){
    $("#source_code > ." + className).remove();
    $("canvas > ." + className).remove();
    --count_Img["img_" + count_Img["select_obj"]];
    if(count_Img["img_" + count_Img["select_obj"]] == 0){
      $(".class" + count_Img["select_obj"]).remove();
      $(".class_" + count_Img["select_obj"]).remove();
    }
  }
  $("canvas").setLayerGroup("obj" + className,{
    visible:false
  }).drawLayers();
  $("canvas").setLayer(focuses_layer,{
    visible:false
  }).drawLayers();

  $("canvas").removeLayerGroup("obj" + className).drawLayers();
  $("canvas").removeLayer(focuses_layer).drawLayers();
},false);

//円を描く
cicle.addEventListener("click",function(){

  ++count_groups;
  ++count_Figures["ellipse"];
  $("canvas").drawEllipse({
    layer:true,
    name:"Ellipse" + count_Figures["ellipse"],
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
      document.getElementById("ell_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
      document.getElementById("file_ellipse_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");\n";
    },
    visible:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#ellipse_x" + object_count).val(layer.x);
      $("#ellipse_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_ellipse_source" + object_count).innerHTML = "  ellipse(" + layer.x + "," + layer.y + ",65,65);\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#ellipse_x" + object_count).val(layer.x);
          $("#ellipse_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("ellipse_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("ellipse_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      inst_className = document.getElementById("ellipse_source" + object_count).className;
className = document.getElementById("file_ellipse_source" + object_count).className;
      if(for_flag === true){
        //forがクリックされたときの処理
        for_property.innerHTML = "円の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "4" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
        + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
        obj_judge = "ellipse";
      }
      if(if_flag === true){
        obj_flag = layer.name;
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "ellx" + object_count;
        y_obj = "elly" + object_count;
        if(!document.getElementById("ellipse_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'ellipse_global" + object_count + "'>float ellx" + object_count + " = " + layer.x + ",elly" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_ellipse_source" + object_count).innerHTML = "  ellipse(ellx" + object_count + ",elly" + object_count + ",65,65);\n";
      }
    }
  });

  file_ellipse_fill = "<span class = " + count_groups + " id='file_ellipse_fill'>  fill(102,102,102);\n</span>";
  ellipse_file_code = "<span class = " + count_groups + " id='file_ellipse_source'>  ellipse(100,100,65,65);\n</span>";
  fill_code_ell = "<li id='ell_fill' class = " + count_groups + "><font class = 'light'color ='#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
  literal(fill_code_ell);
  ellipse_code = "<li id = 'ellipse_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  ellipse(" + '<input class="textbox" type="text" size="2" id="ellipse_x" value = "100">' + "," + '<input class="textbox" type="text" size="2" id="ellipse_y" value = "100">' + ",65,65); </font></li>";
  literal(ellipse_code);
  $("canvas").append(file_ellipse_fill);
  $("canvas").append(ellipse_file_code);
  $("#ellipse_x").attr("id","ellipse_x" + count_Figures["ellipse"]);
  $("#ellipse_y").attr("id","ellipse_y" + count_Figures["ellipse"]);
  $("#file_ellipse_source").attr("id","file_ellipse_source" + count_Figures["ellipse"]);
  $("#ellipse_source").attr("id","ellipse_source" + count_Figures["ellipse"]);
  $("#ellipse_source" + count_Figures["ellipse"]).addClass("ellipse_source" + count_Figures["ellipse"]);
  $("#ell_fill").attr("id","ell_fill" + count_Figures["ellipse"]);
  $("#file_ellipse_fill").attr("id","file_ellipse_fill" + count_Figures["ellipse"]);
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

//全消去のイベントリスナ
store.addEventListener("click",function(){
  $("#source_code").html("");
  $("#PImage").html("");
  $("#open").html("");
  $("canvas").html("");
  for(var i in count_Figures){
    count_Figures[i] = 0;
  }
  for_flag = false;
  if_flag = false;
  for(var i in count_Img){
    count_Img[i] = 0;
  }
  if_property.innerHTML = "";
  for_property.innerHTML = "";
  $("canvas").clearCanvas();
  $("canvas").setLayers({
    visible:false
  }).drawLayers();
  $("canvas").removeLayers();
  axis();
},false);


//三角形を描く
triangle.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["triangle"];
  //これがJcanvasの三角形を描くソース
  $("canvas").drawPolygon({
    layer:true,
    name:"Triangle" + count_Figures["triangle"],
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
      document.getElementById("tri_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
      document.getElementById("file_tri_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
    },
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.radius*2,layer.radius*1.5,(layer.name-1));
      $("#triangle_x" + object_count).val(layer.x);
      $("#triangle_y" + object_count).val(layer.y);
      $("#triangle2_x" + object_count).html(layer.x+30);
      $("#triangle2_y" + object_count).html(layer.y+50);
      $("#triangle3_x" + object_count).html(layer.x-30);
      $("#triangle3_y" + object_count).html(layer.y+50);
    },
    dragstop:function(layer){
      document.getElementById("file_triangle_source" + object_count).innerHTML = "  triangle(" + layer.x + "," + layer.y + "," + (layer.x+30) + "," + (layer.y + 50) + "," + (layer.x-30) + ","
      + (layer.y + 50) + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(8);
      $(function(){
        change_text = setInterval(function(){
          $("#triangle_x" + object_count).val(layer.x);
          $("#triangle_y" + object_count).val(layer.y);
          $("#triangle2_x" + object_count).html(layer.x+30);
          $("#triangle2_y" + object_count).html(layer.y+50);
          $("#triangle3_x" + object_count).html(layer.x-30);
          $("#triangle3_y" + object_count).html(layer.y+50);
        },10);
      });
      $(function(){
        MOver("triangle_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("triangle_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      focuses(layer.x,layer.y,layer.radius*2,layer.radius*1.5,(layer.name-1));
      inst_className = document.getElementById("triangle_source" + object_count).className;
className = document.getElementById("file_triangle_source" + object_count).className;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "三角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "2" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
        + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
        obj_judge = "triangle";
      }
      if(if_flag === true){
        obj_flag = layer.name;
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size = '2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size = '2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size = '2' id = 'if_y'>まで動かす.";
        x_obj = "trix" + object_count;
        y_obj = "triy" + object_count;
        if(!document.getElementById("triangle_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'triangle_global" + object_count + "'>float trix" + object_count + " = " + layer.x + ",triy" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_triangle_source" + object_count).innerHTML = "  triangle(trix" + object_count + ",triy" + object_count + ",trix" + object_count + "+30,triy" + object_count + "+50,trix" + object_count + "-30,triy" + object_count + "+50);\n";
      }
    }
  });
  var triangle_obj = $("canvas").getLayer("Triangle" + count_Figures["triangle"]);
  fill_code_tri = "<li id = 'tri_fill' class = " + count_groups + "><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
  literal(fill_code_tri);
  tri_code = "<li id = 'triangle_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  triangle(" + '<input class="textbox" type="text" size="2"id ="triangle_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="triangle_y" value = "100">' + ",<span id = 'triangle2_x'>" + (triangle_obj.x + 30) + "</span>,<span id = 'triangle2_y'>" + (triangle_obj.y + 50) + "</span>,<span id = 'triangle3_x'>" + (triangle_obj.x-30) + "</span>,<span id = 'triangle3_y'>" + (triangle_obj.y+50) + "</span>);</font></li>";
  literal(tri_code);
  file_tri_fill = "<span class = " + count_groups + " id='file_tri_fill'>  fill(102,102,102);\n</span>"
  tri_file_code = "<span class = " + count_groups + " id='file_triangle_source'>  triangle(100,100,130,150,70,150);\n</span>";
  $("canvas").append(file_tri_fill);
  $("canvas").append(tri_file_code);
  $("#file_triangle_source").attr("id","file_triangle_source" + count_Figures["triangle"]);
  $("#file_tri_fill").attr("id","file_tri_fill" + count_Figures["triangle"]);
  $("#triangle_x").attr("id","triangle_x" + count_Figures["triangle"]);
  $("#triangle_y").attr("id","triangle_y" + count_Figures["triangle"]);
  $("#triangle2_x").attr("id","triangle2_x" + count_Figures["triangle"]);
  $("#triangle2_y").attr("id","triangle2_y" + count_Figures["triangle"]);
  $("#triangle3_x").attr("id","triangle3_x" + count_Figures["triangle"]);
  $("#triangle3_y").attr("id","triangle3_y" + count_Figures["triangle"]);
  $("#triangle_source").attr("id","triangle_source" + count_Figures["triangle"]);
  $("#triangle_source" + count_Figures["triangle"]).addClass("triangle_source" + count_Figures["triangle"]);
  $("#tri_fill").attr("id","tri_fill" + count_Figures["triangle"]);
},false);

polygon.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["polygon"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawPolygon({
    layer:true,
    name:"Polygon" + count_Figures["polygon"],
    groups:["obj" + count_groups],
    strokeStyle: "black",
    fillStyle:"#666666",
    strokeWidth: 1,
    x: 100,
    y: 100,
    radius:32.5,
    fromCenter: false,
    sides: angle.value,
    dblclick:function(layer){
      layer.fillStyle = $("#color").val();
      document.getElementById("ply_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");";
      document.getElementById("file_ply_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");\n";
    },
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.radius*2,layer.radius*1.8,(layer.name-1));
      $("#polygon_x" + object_count).val(layer.x);
      $("#polygon_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_polygon_source" + object_count).innerHTML = "  polygon(" + layer.x + "," + layer.y + ",40," + angle.value + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#polygon_x" + object_count).val(layer.x);
          $("#polygon_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("polygon_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("polygon_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      focuses(layer.x,layer.y,layer.radius*2,layer.radius*1.8,(layer.name-1));
      inst_className = document.getElementById("polygon_source" + object_count).className;
className = document.getElementById("file_polygon_source" + object_count).className;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "多角形の始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "4" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
        + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
        obj_judge = "polygon";
      }
      obj_flag = layer.name;
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "plyx" + object_count;
        y_obj = "plyy" + object_count;
        if(!document.getElementById("ply_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'ply_global" + object_count + "'>float rx" + object_count + " = " + layer.x + ",ry" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_polygon_source" + object_count).innerHTML = "  polygon(plyx" + object_count + ",plyy" + object_count + ",65,65" + angle.value + ");\n";
      }
    }
  });
  if(angle.value % 2 == 0){
    poly_angle = 360/(angle.value*2);
    $("canvas").setLayer("Polygon" + count_Figures["polygon"],{
      rotate:poly_angle
    }).drawLayers();
  }
  fill_code_ply = "<li id='ply_fill' class = " + count_groups + "><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
  literal(fill_code_ply);
  ply_code = "<li id = 'polygon_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  polygon(" + '<input class="textbox" type="text" size="2"id ="polygon_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="polygon_y" value = "100">' + ",40," + angle.value + ");</font></li>";
  literal(ply_code);
  file_ply_fill = "<span class = " + count_groups + " id='file_ply_fill'>  fill(102,102,102);\n</span>"
  ply_file_code = "<span class = " + count_groups + " id='file_polygon_source'>  polygon(100,100,40," + angle.value + ");\n</span>";
  $("canvas").append(file_ply_fill);
  $("canvas").append(ply_file_code);
  $("#file_polygon_source").attr("id","file_polygon_source" + count_Figures["polygon"]);
  $("#file_ply_fill").attr("id","file_ply_fill" + count_Figures["polygon"]);
  $("#polygon_x").attr("id","polygon_x" + count_Figures["polygon"]);
  $("#polygon_y").attr("id","polygon_y" + count_Figures["polygon"]);
  $("#polygon_source").attr("id","polygon_source" + count_Figures["polygon"]);
  $("#polygon_source" + count_Figures["polygon"]).addClass("polygon_source" + count_Figures["polygon"]);
  $("#ply_fill").attr("id","ply_fill" + count_Figures["polygon"]);
},false);


line.addEventListener("click",function(){
  ++count_groups;
  count_Figures["line"]++;
  //これがJcanvasの線を描くソース
  $("canvas").drawLine({
    layer:true,
    name:"Line" + count_Figures["line"],
    groups:["obj" + count_groups],
    strokeStyle:"#666666",
    strokeWidth: 10,
    x1: 100,y1: 100,
    x2: 400,y2: 400,
    fromCenter: false,
    dblclick:function(layer){
      layer.strokeStyle = $("#color").val();
      document.getElementById("line_stroke" + object_count).innerHTML = "  stroke(" + parseInt(layer.strokeStyle.substring(1,3), 16) + "," + parseInt(layer.strokeStyle.substring(3,5),16) + "," + parseInt(layer.strokeStyle.substring(5,7), 16) + ");";
      document.getElementById("file_line_stroke" + object_count).innerHTML = "  stroke(" + parseInt(layer.strokeStyle.substring(1,3), 16) + "," + parseInt(layer.strokeStyle.substring(3,5),16) + "," + parseInt(layer.strokeStyle.substring(5,7), 16) + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(4);
      $(function(){
        change_text = setInterval(function(){
          if(layer.x1 < layer.x2){
            $("#line1_x" + object_count).val(layer.x1);
            $("#line2_x" + object_count).val(layer.x2);
          }else if(layer.x1 > layer.x2){
            $("#line1_x" + object_count).val(layer.x2);
            $("#line2_x" + object_count).val(layer.x1);
          }
          if(layer.y1 < layer.y2){
            $("#line1_y" + object_count).val(layer.y1);
            $("#line2_y" + object_count).val(layer.y2);
          }else if(layer.y1 > layer.y2){
            $("#line1_y" + object_count).val(layer.y2);
            $("#line2_y" + object_count).val(layer.y1);
          }

        },10);
      });
      $(function(){
        MOver("line_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("line_source" + object_count);
      });
    },

    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      focuses(layer.x1,layer.y1,Math.abs(layer.x2-layer.x1),Math.abs(layer.y2-layer.y1),(layer.name-1));
      inst_className = document.getElementById("line_source" + object_count).className;
className = document.getElementById("file_line_source" + object_count).className;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        if_property.innerHTML = "この図形には使えません";
      }
      Line_name = layer.name;
      key.src = "img/key_open.png";
      document.getElementById("file_line_source" + object_count).innerHTML = "line(" + layer.x1 + "," + layer.y1 + "," + layer.x2 + "," + layer.y2 + ");\n";
    }
  });
  stroke_code_line = "<li class=" + count_groups + " id='line_stroke'><font class = 'light'color = '#f7f7f7' size = '3'>  stroke(102,102,102);</font></li>";
  literal(stroke_code_line);
  var line_strokeWeight = "<li class=" + count_groups + "><font class = 'light' color = '#f7f7f7' size = '3'>  strokeWeight(10);</font></li>";
  literal(line_strokeWeight);
  line_code = "<li id = 'line_source' class = 'Line " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  line(" + '<input class="textbox" type="text" size="2"id ="line1_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="line1_y" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="line2_x" value = "400">' + "," + '<input class="textbox" type="text" size="2"id ="line2_y" value = "400">' + ");</font></li>";
  literal(line_code);
  file_line_stroke = "<span class = " + count_groups + " id='file_line_stroke'>  stroke(102,102,102);\n</span>";
  file_strokeWeight = "<span class=" + count_groups + ">  strokeWeight(10);\n</span>";
  line_file_code = "<span class = " + count_groups + " id='file_line_source'>  line(100,100,400,400);\n</span>";
  $("canvas").append(file_line_stroke);
  $("canvas").append(file_strokeWeight);
  $("canvas").append(line_file_code);
  $("#file_line_source").attr("id","file_line_source" + count_Figures["line"]);
  $("#file_line_stroke").attr("id","file_line_stroke" + count_Figures["line"]);
  $("#line1_x").attr("id","line1_x" + count_Figures["line"]);
  $("#line1_y").attr("id","line1_y" + count_Figures["line"]);
  $("#line2_x").attr("id","line2_x" + count_Figures["line"]);
  $("#line2_y").attr("id","line2_y" + count_Figures["line"]);
  $("#line_source").attr("id","line_source" + count_Figures["line"]);
  $("#line_source" + count_Figures["line"]).addClass("line_source" + count_Figures["line"]);
  $("#line_stroke").attr("id","line_stroke" + count_Figures["line"]);
},false);

pac.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["pac"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawSlice({
    layer:true,
    name:"Pac" + count_Figures["pac"],
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
      document.getElementById("pac_fill" + object_count).innerHTML = "<li><font class = 'light'color = '#f7f7f7' size = '3'>fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");</font></li>";
      document.getElementById("file_pac_fill" + object_count).innerHTML = "  fill(" + parseInt(layer.fillStyle.substring(1,3), 16) + "," + parseInt(layer.fillStyle.substring(3,5), 16) + "," + parseInt(layer.fillStyle.substring(5,7), 16) + ");\n";
    },
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.radius*2,layer.radius*2,(layer.name-1));
      $("#pac_x" + object_count).val(layer.x);
      $("#pac_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_pac_source" + object_count).innerHTML = "  arc(" + layer.x + "," + layer.y + ",65,65,0.5,5.8,PIE);\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(3);
      $(function(){
        change_text = setInterval(function(){
          $("#pac_x" + object_count).val(layer.x);
          $("#pac_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("pac_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("pac_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("pac_source" + object_count).className;
className = document.getElementById("file_pac_source" + object_count).className;
      focuses(layer.x,layer.y,layer.radius*2,layer.radius*2,(layer.name-1));
      obj_flag = layer.name;
      if(for_flag === true){
        for_property.innerHTML = "パックマンの始めのx座標を" + '<input class="textbox" type="text" size="2" id = "int">' + "y座標を" + '<input class="textbox" type = "text" size = "2" id = "for_y">' +"から<select class='ver_hori'><option value='0'>横</option><option value='1'>縦</option></select>に" + '<input class="textbox" type="text" size="2" id = "ctrl">' + " まで"
        + '<input class="textbox" type="text" size="2" id = "rate">' + "ずつ動かす";
        obj_judge = "pac";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "pacx" + object_count;
        y_obj = "pacy" + object_count;
        if(!document.getElementById("pac_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'pac_global" + object_count + "'>float pacx" + object_count + " = " + layer.x + ",pacy" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_pac_source" + object_count).innerHTML = "  arc(pacx" + object_count + ",pacy" + object_count + ",65,65,0.5,5.8);\n";
      }
    }
  });
  fill_code_pac = "<li id='pac_fill' class = " + count_groups + "><font class = 'light'color = '#f7f7f7' size = '3'>  fill(102,102,102);</font></li>";
  literal(fill_code_pac);
  pac_code = "<li id = 'pac_source' class='Fig " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  arc(" + '<input class="textbox" type="text" size="2"id ="pac_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="pac_y" value = "100">' + ",65,65,0.5,5.8,PIE);</font></li>";
  literal(pac_code);
  file_pac_fill = "<span class = " + count_groups + " id='file_pac_fill'>  fill(102,102,102);\n</span>"
  pac_file_code = "<span class = " + count_groups + " id='file_pac_source'>  arc(100,100,65,65,0.5,5.8,PIE);\n</span>";
  $("canvas").append(file_pac_fill);
  $("canvas").append(pac_file_code);
  $("#file_pac_source").attr("id","file_pac_source" + count_Figures["pac"]);
  $("#file_pac_fill").attr("id","file_pac_fill" + count_Figures["pac"]);
  $("#pac_x").attr("id","pac_x" + count_Figures["pac"]);
  $("#pac_y").attr("id","pac_y" + count_Figures["pac"]);
  $("#pac_source").attr("id","pac_source" + count_Figures["pac"]);
  $("#pac_source" + count_Figures["pac"]).addClass("pac_source" + count_Figures["pac"]);
  $("#pac_fill").attr("id","pac_fill" + count_Figures["pac"]);
},false);

butt_red.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_1"];
  ++count_Img["img_1"];
  console.log(count_Figures["img_1"]);
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image1" + count_Figures["img_1"],
    source:"img/red_butterfly.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img1_x" + object_count).val(layer.x);
      $("#img1_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_1" + object_count).innerHTML = "  image(red_butterfly," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img1_x" + object_count).val(layer.x);
          $("#img1_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img1_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img1_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img1_source" + object_count).className;
className = document.getElementById("file_img_source_1" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 1;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "red_buttx" + object_count;
        y_obj = "red_butty" + object_count;
        if(!document.getElementById("img_1_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_1_global" + object_count + "'>float red_buttx" + object_count + " = " + layer.x + ",red_butty" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_1" + object_count).innerHTML = "  image(red_butterfly,red_buttx" + object_count + ",red_butty" + object_count + ");\n";

      }
    }
  });
  var red_butt_inst = "<li class = 'class1'>PImage <a href = 'img/red_butterfly.png' download='red_butterfly.png' class='tooltip' title='クリックしてダウンロード.'>red_butterfly;\n</a></li>"
  var red_butt = '<li class = "class_1"><font class = "light"color = "#f7f7f7" size = "3">  red_butterfly=loadImage("red_butterfly.png");\n</font></li>'
  PImage_literal(red_butt,count_Img["img_1"],red_butt_inst);
  img_code_1 = "<li id = 'img1_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(red_butterfly," + '<input class="textbox" type="text" size="2"id ="img1_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img1_y" value = "100">' + ");</font></li>";
  literal(img_code_1);
  img_file_code_1 = "<span class = " + count_groups + " id='file_img_source_1'>  image(red_butterfly,100,100);\n</span>";
  $("canvas").append(img_file_code_1);
  $("#file_img_source_1").attr("id","file_img_source_1" + count_Figures["img_1"]);
  $("#img1_x").attr("id","img1_x" + count_Figures["img_1"]);
  $("#img1_y").attr("id","img1_y" + count_Figures["img_1"]);
  $("#img1_source").attr("id","img1_source" + count_Figures["img_1"]);
  $("#img1_source" + count_Figures["img_1"]).addClass("img1_source" + count_Figures["img_1"]);
},false);

butt_yellow.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_2"];
  ++count_Img["img_2"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image2" + count_Figures["img_2"],
    source:"img/ylw_butterfly.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img2_x" + object_count).val(layer.x);
      $("#img2_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_2" + object_count).innerHTML = "  image(yellow_butterfly," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img2_x" + object_count).val(layer.x);
          $("#img2_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img2_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img2_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img2_source" + object_count).className;
className = document.getElementById("file_img_source_2" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 2;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "ylw_buttx" + object_count;
        y_obj = "ylw_butty" + object_count;
        if(!document.getElementById("img_2_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_2_global" + object_count + "'>float ylw_buttx" + object_count + " = " + layer.x + ",ylw_butty" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_2" + object_count).innerHTML = "  image(yellow_butterfly,ylw_buttx" + object_count + ",ylw_butty" + object_count + ");\n";
      }
    }
  });
  var yellow_butt_inst = "<li class = 'class2'>PImage <a href = 'img/ylw_butterfly.png' download='ylw_butterfly.png' class='tooltip' title='クリックしてダウンロードしてください.'>yellow_butterfly;\n</a></li>"
  var yellow_butt = '<li class = "class_2"><font class = "light"color = "#f7f7f7" size = "3">  yellow_butterfly=loadImage("ylw_butterfly.png");\n</font></li>'
  PImage_literal(yellow_butt,count_Img["img_2"],yellow_butt_inst);
  img_code_2 = "<li id = 'img2_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(yellow_butterfly," + '<input class="textbox" type="text" size="2"id ="img2_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img2_y" value = "100">' + ");</font></li>";
  literal(img_code_2);
  img_file_code_2 = "<span class = " + count_groups + " id='file_img_source_2'>  image(yellow_butterfly,100,100);\n</span>";
  $("canvas").append(img_file_code_2);
  $("#file_img_source_2").attr("id","file_img_source_2" + count_Figures["img_2"]);
  $("#img2_x").attr("id","img2_x" + count_Figures["img_2"]);
  $("#img2_y").attr("id","img2_y" + count_Figures["img_2"]);
  $("#img2_source").attr("id","img2_source" + count_Figures["img_2"]);
  $("#img2_source" + count_Figures["img_2"]).addClass("img2_source" + count_Figures["img_2"]);
},false);

butt_blue.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_3"];
  ++count_Img["img_3"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image3" + count_Figures["img_3"],
    source:"img/blue_butterfly.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img3_x" + object_count).val(layer.x);
      $("#img3_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_3" + object_count).innerHTML = "  image(blue_butterfly," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img3_x" + object_count).val(layer.x);
          $("#img3_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img3_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img3_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img3_source" + object_count).className;
className = document.getElementById("file_img_source_3" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 3;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "blue_buttx" + object_count;
        y_obj = "blue_butty" + object_count;
        if(!document.getElementById("img_3_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_3_global" + object_count + "'>float blue_buttx" + object_count + " = " + layer.x + ",blue_butty" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_3" + object_count).innerHTML = "  image(blue_butterfly,blue_buttx" + object_count + ",blue_butty" + object_count + ");\n";
      }
    }
  });
  var blue_butt_inst = "<li class = 'class3'>PImage <a href = 'img/blue_butterfly.png' download='blue_butterfly.png' class='tooltip' title='クリックしてダウンロードしてください.'>blue_butterfly;\n</a></li>"
  var blue_butt = '<li class = "class_3"><font class = "light"color = "#f7f7f7" size = "3">  blue_butterfly=loadImage("blue_butterfly.png");\n</font></li>'
  PImage_literal(blue_butt,count_Img["img_3"],blue_butt_inst);
  img_code_3 = "<li id = 'img3_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(blue_butterfly," + '<input class="textbox" type="text" size="2"id ="img3_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img3_y" value = "100">' + ");</font></li>";
  literal(img_code_3);
  img_file_code_3 = "<span class = " + count_groups + " id='file_img_source_3'>  image(blue_butterfly,100,100);\n</span>";
  $("canvas").append(img_file_code_3);
  $("#file_img_source_3").attr("id","file_img_source_3" + count_Figures["img_3"]);
  $("#img3_x").attr("id","img3_2" + count_Figures["img_3"]);
  $("#img3_y").attr("id","img3_y" + count_Figures["img_3"]);
  $("#img3_source").attr("id","img3_source" + count_Figures["img_3"]);
  $("#img3_source" + count_Figures["img_3"]).addClass("img3_source" + count_Figures["img_3"]);
},false);

blue_candy.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_4"];
  ++count_Img["img_4"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image4" + count_Figures["img_4"],
    source:"img/blue_candy.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img4_x" + object_count).val(layer.x);
      $("#img4_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_4" + object_count).innerHTML = "  image(blue_candy," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img4_x" + object_count).val(layer.x);
          $("#img4_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img4_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img4_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img4_source" + object_count).className;
className = document.getElementById("file_img_source_4" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 4;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "blue_candyx" + object_count;
        y_obj = "blue_candyy" + object_count;
        if(!document.getElementById("img_4_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_4_global" + object_count + "'>float blue_candyx" + object_count + " = " + layer.x + ",blue_candyy" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_4" + object_count).innerHTML = "  image(blue_candy,blue_candyx" + object_count + ",blue_candyy" + object_count + ");\n";
      }
    }
  });
  var blue_candy_inst = "<li class = 'class4'>PImage <a href = 'img/blue_candy.png' download='blue_candy.png' class='tooltip' title='クリックしてダウンロードしてください.'>blue_candy;\n</a></li>"
  var blue_candy = '<li class = "class_4"><font class = "light"color = "#f7f7f7" size = "3">  blue_candy=loadImage("blue_candy.png");\n</font></li>'
  PImage_literal(blue_candy,count_Img["img_4"],blue_candy_inst);
  img_code_4 = "<li id = 'img4_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(blue_candy," + '<input class="textbox" type="text" size="2"id ="img4_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img4_y" value = "100">' + ");</font></li>";
  literal(img_code_4);
  img_file_code_4 = "<span class = " + count_groups + " id='file_img_source_4'>  image(blue_candy,100,100);\n</span>";
  $("canvas").append(img_file_code_4);
  $("#file_img_source_4").attr("id","file_img_source_4" + count_Figures["img_4"]);
  $("#img4_x").attr("id","img4_x" + count_Figures["img_4"]);
  $("#img4_y").attr("id","img4_y" + count_Figures["img_4"]);
  $("#img4_source").attr("id","img4_source" + count_Figures["img_4"]);
  $("#img4_source" + count_Figures["img_4"]).addClass("img4_source" + count_Figures["img_4"]);
},false);

orange_candy.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_5"];
  ++count_Img["img_5"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image5" + count_Figures["img_5"],
    source:"img/orange_candy.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img5_x" + object_count).val(layer.x);
      $("#img5_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_5" + object_count).innerHTML = "  image(orange_candy," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img5_x" + object_count).val(layer.x);
          $("#img5_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img5_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img5_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img5_source" + object_count).className;
className = document.getElementById("file_img_source_5" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 5;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "orange_candyx" + object_count;
        y_obj = "orange_candyy" + object_count;
        if(!document.getElementById("img_5_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_5_global" + object_count + "'>float orange_candyx" + object_count + " = " + layer.x + ",orange_candyy" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_5" + object_count).innerHTML = "  image(orange_candy,orange_candyx" + object_count + ",orange_candyy" + object_count + ");\n";
      }
    }
  });
  var orange_candy_inst = "<li class = 'class5'>PImage <a href = 'img/orange_candy.png' download='orange_candy.png' class='tooltip' title='クリックしてダウンロードしてください.'>orange_candy;\n</a></li>"
  var orange_candy = '<li class = "class_5"><font class = "light"color = "#f7f7f7" size = "3">  orange_candy=loadImage("orange_candy.png");\n</font></li>'
  PImage_literal(orange_candy,count_Img["img_5"],orange_candy_inst);
  img_code_5 = "<li id = 'img5_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(orange_candy," + '<input class="textbox" type="text" size="2"id ="img5_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img5_y" value = "100">' + ");</font></li>";
  literal(img_code_5);
  img_file_code_5 = "<span class = " + count_groups + " id='file_img_source_5'>  image(orange_candy,100,100);\n</span>";
  $("canvas").append(img_file_code_5);
  $("#file_img_source_5").attr("id","file_img_source_5" + count_Figures["img_5"]);
  $("#img5_x").attr("id","img5_x" + count_Figures["img_5"]);
  $("#img5_y").attr("id","img5_y" + count_Figures["img_5"]);
  $("#img5_source").attr("id","img5_source" + count_Figures["img_5"]);
  $("#img5_source" + count_Figures["img_5"]).addClass("img5_source" + count_Figures["img_5"]);
},false);

pink_candy.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_6"];
  ++count_Img["img_6"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image6" + count_Figures["img_6"],
    source:"img/pink_candy.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img6_x" + object_count).val(layer.x);
      $("#img6_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_6" + object_count).innerHTML = "  image(pink_candy," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img6_x" + object_count).val(layer.x);
          $("#img6_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img6_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img6_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img6_source" + object_count).className;
className = document.getElementById("file_img_source_6" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 6;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "pink_candyx" + object_count;
        y_obj = "pink_candyy" + object_count;
        if(!document.getElementById("img_6_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_6_global" + object_count + "'>float pink_candyyx" + object_count + " = " + layer.x + ",pink_candyy" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_6" + object_count).innerHTML = "  image(pink_candy,pink_candyx" + object_count + ",pink_candyy" + object_count + ");\n";
      }
    }
  });
  var pink_candy_inst = "<li class = 'class6'>PImage <a href = 'img/pink_candy.png' download='pink_candy.png' class='tooltip' title='クリックしてダウンロードしてください.'>pink_candy;\n</a></li>"
  var pink_candy = '<li class = "class_6"><font class = "light"color = "#f7f7f7" size = "3">  pink_candy=loadImage("pink_candy.png");\n</font></li>'
  PImage_literal(pink_candy,count_Img["img_6"],pink_candy_inst);
  img_code_6 = "<li id = 'img6_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(pink_candy," + '<input class="textbox" type="text" size="2"id ="img6_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img6_y" value = "100">' + ");</font></li>";
  literal(img_code_6);
  img_file_code_6 = "<span class = " + count_groups + " id='file_img_source_6'>  image(pink_candy,100,100);\n</span>";
  $("canvas").append(img_file_code_6);
  $("#file_img_source_6").attr("id","file_img_source_6" + count_Figures["img_6"]);
  $("#img6_x").attr("id","img6_x" + count_Figures["img_6"]);
  $("#img6_y").attr("id","img6_y" + count_Figures["img_6"]);
  $("#img6_source").attr("id","img6_source" + count_Figures["img_6"]);
  $("#img6_source" + count_Figures["img_6"]).addClass("img6_source" + count_Figures["img_6"]);
},false);

blue_umbrella.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_7"];
  ++count_Img["img_7"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image7" + count_Figures["img_7"],
    source:"img/blue_umbrella.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img7_x" + object_count).val(layer.x);
      $("#img7_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_7" + object_count).innerHTML = "  image(blue_umbrella," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img7_x" + object_count).val(layer.x);
          $("#img7_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img7_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img7_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img7_source" + object_count).className;
className = document.getElementById("file_img_source_7" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 7;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "blue_umbrellax" + object_count;
        y_obj = "blue_umbrellay" + object_count;
        if(!document.getElementById("img_7_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_7_global" + object_count + "'>float blue_umbrellayx" + object_count + " = " + layer.x + ",blue_umbrellay" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_7" + object_count).innerHTML = "  image(blue_umbrella,blue_umbrellax" + object_count + ",blue_umbrellay" + object_count + ");\n";
      }
    }
  });
  var blue_umbrella_inst = "<li class = 'class7'>PImage <a href = 'img/blue_umbrella.png' download='blue_umbrella.png' class='tooltip' title='クリックしてダウンロードしてください.'>blue_umbrella;\n</a></li>"
  var blue_umbrella = '<li class = "class_7"><font class = "light"color = "#f7f7f7" size = "3">  blue_umbrella=loadImage("blue_umbrella.png");\n</font></li>'
  PImage_literal(blue_umbrella,count_Img["img_7"],blue_umbrella_inst);
  img_code_7 = "<li id = 'img7_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(blue_umbrella," + '<input class="textbox" type="text" size="2"id ="img7_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img7_y" value = "100">' + ");</font></li>";
  literal(img_code_7);
  img_file_code_7 = "<span class = " + count_groups + " id='file_img_source_7'>  image(blue_umbrella,100,100);\n</span>";
  $("canvas").append(img_file_code_7);
  $("#file_img_source_7").attr("id","file_img_source_7" + count_Figures["img_7"]);
  $("#img7_x").attr("id","img7_x" + count_Figures["img_7"]);
  $("#img7_y").attr("id","img7_y" + count_Figures["img_7"]);
  $("#img7_source").attr("id","img7_source" + count_Figures["img_7"]);
  $("#img7_source" + count_Figures["img_7"]).addClass("img7_source" + count_Figures["img_7"]);
},false);
green_umbrella.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_8"];
  ++count_Img["img_8"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image8" + count_Figures["img_8"],
    source:"img/green_umbrella.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img8_x" + object_count).val(layer.x);
      $("#img8_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_8" + object_count).innerHTML = "  image(green_umbrella," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img8_x" + object_count).val(layer.x);
          $("#img8_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img8_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img8_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img8_source" + object_count).className;
className = document.getElementById("file_img_source_8" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 8;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "green_umbrellax" + object_count;
        y_obj = "green_umbrellay" + object_count;
        if(!document.getElementById("img_8_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_8_global" + object_count + "'>float green_umbrellayx" + object_count + " = " + layer.x + ",green_umbrellay" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_8" + object_count).innerHTML = "  image(green_umbrella,green_umbrellax" + object_count + ",green_umbrellay" + object_count + ");\n";
      }
    }
  });
  var green_umbrella_inst = "<li class = 'class8'>PImage <a href = 'img/green_umbrella.png' download='green_umbrella.png' class='tooltip' title='クリックしてダウンロードしてください.'>green_umbrella;\n</a></li>"
  var green_umbrella = '<li class = "class_8"><font class = "light"color = "#f7f7f7" size = "3">  green_umbrella=loadImage("green_umbrella.png");\n</font></li>'
  PImage_literal(green_umbrella,count_Img["img_8"],green_umbrella_inst);
  img_code_8 = "<li id = 'img8_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(green_umbrella," + '<input class="textbox" type="text" size="2"id ="img8_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img8_y" value = "100">' + ");</font></li>";
  literal(img_code_8);
  img_file_code_8 = "<span class = " + count_groups + " id='file_img_source_8'>  image(green_umbrella,100,100);\n</span>";
  $("canvas").append(img_file_code_8);
  $("#file_img_source_8").attr("id","file_img_source_8" + count_Figures["img_8"]);
  $("#img8_x").attr("id","img8_x" + count_Figures["img_8"]);
  $("#img8_y").attr("id","img8_y" + count_Figures["img_8"]);
  $("#img8_source").attr("id","img8_source" + count_Figures["img_8"]);
  $("#img8_source" + count_Figures["img_8"]).addClass("img8_source" + count_Figures["img_8"]);
},false);

orange_umbrella.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_9"];
  ++count_Img["img_9"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image9" + count_Figures["img_9"],
    source:"img/orange_umbrella.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img9_x" + object_count).val(layer.x);
      $("#img9_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_9" + object_count).innerHTML = "  image(orange_umbrella," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(6);
      $(function(){
        change_text = setInterval(function(){
          $("#img9_x" + object_count).val(layer.x);
          $("#img9_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img9_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img9_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img9_source" + object_count).className;
className = document.getElementById("file_img_source_9" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 9;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "orange_umbrellax" + object_count;
        y_obj = "orange_umbrellay" + object_count;
        if(!document.getElementById("img_9_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_9_global" + object_count + "'>float orange_umbrellayx" + object_count + " = " + layer.x + ",orange_umbrellay" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_9" + object_count).innerHTML = "  image(orange_umbrella,orange_umbrellax" + object_count + ",orange_umbrellay" + object_count + ");\n";
      }
    }
  });
  var orange_umbrella_inst = "<li class = 'class9'>PImage <a href = 'img/orange_umbrella.png' download='orange_umbrella.png' class='tooltip' title='クリックしてダウンロードしてください.'>orange_umbrella;\n</a></li>"
  var orange_umbrella = '<li class = "class_9"><font class = "light"color = "#f7f7f7" size = "3">  orange_umbrella=loadImage("orange_umbrella.png");\n</font></li>'
  PImage_literal(orange_umbrella,count_Img["img_9"],orange_umbrella_inst);
  img_code_9 = "<li id = 'img9_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(orange_umbrella," + '<input class="textbox" type="text" size="2"id ="img9_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img9_y" value = "100">' + ");</font></li>";
  literal(img_code_9);
  img_file_code_9 = "<span class = " + count_groups + " id='file_img_source_9'>  image(orange_umbrella,100,100);\n</span>";
  $("canvas").append(img_file_code_9);
  $("#file_img_source_9").attr("id","file_img_source_9" + count_Figures["img_9"]);
  $("#img9_x").attr("id","img9_x" + count_Figures["img_9"]);
  $("#img9_y").attr("id","img9_y" + count_Figures["img_9"]);
  $("#img9_source").attr("id","img9_source" + count_Figures["img_9"]);
  $("#img9_source" + count_Figures["img_9"]).addClass("img9_source" + count_Figures["img_9"]);
},false);

orange_flower.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_10"];
  ++count_Img["img_10"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image10" + count_Figures["img_10"],
    source:"img/orange_flower.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img10_x" + object_count).val(layer.x);
      $("#img10_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_10" + object_count).innerHTML = "  image(orange_flower," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#img10_x" + object_count).val(layer.x);
          $("#img10_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img10_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img10_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img10_source" + object_count).className;
className = document.getElementById("file_img_source_10" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      console.log(className);
      count_Img["select_obj"] = 10;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "orange_flowerx" + object_count;
        y_obj = "orange_flowery" + object_count;
        if(!document.getElementById("img_10_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_10_global" + object_count + "'>float orange_floweryx" + object_count + " = " + layer.x + ",orange_flowery" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_10" + object_count).innerHTML = "  image(orange_flower,orange_flowerx" + object_count + ",orange_flowery" + object_count + ");\n";
      }
    }
  });
  var orange_flower_inst = "<li class = 'class10'>PImage <a href = 'img/orange_flower.png' download='orange_flower.png' class='tooltip' title='クリックしてダウンロードしてください.'>orange_flower;\n</a></li>"
  var orange_flower = '<li class = "class_10"><font class = "light"color = "#f7f7f7" size = "3">  orange_flower=loadImage("orange_flower.png");\n</font></li>'
  PImage_literal(orange_flower,count_Img["img_10"],orange_flower_inst);
  img_code_10 = "<li id = 'img10_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(orange_flower," + '<input class="textbox" type="text" size="2"id ="img10_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img10_y" value = "100">' + ");</font></li>";
  literal(img_code_10);
  img_file_code_10 = "<span class = " + count_groups + " id='file_img_source_10'>  image(orange_flower,100,100);\n</span>";
  $("canvas").append(img_file_code_10);
  $("#file_img_source_10").attr("id","file_img_source_10" + count_Figures["img_10"]);
  $("#img10_x").attr("id","img10_x" + count_Figures["img_10"]);
  $("#img10_y").attr("id","img10_y" + count_Figures["img_10"]);
  $("#img10_source").attr("id","img10_source" + count_Figures["img_10"]);
  $("#img10_source" + count_Figures["img_10"]).addClass("img10_source" + count_Figures["img_10"]);
},false);

pink_flower.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_11"];
  ++count_Img["img_11"];
  console.log(count_Figures["img_11"]);
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image11" + count_Figures["img_11"],
    source:"img/pink_flower.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img11_x" + object_count).val(layer.x);
      $("#img11_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_11_" + object_count).innerHTML = "  image(pink_flower," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#img11_x" + object_count).val(layer.x);
          $("#img11_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img11_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img11_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img11_source" + object_count).className;
className = document.getElementById("file_img_source_11_" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      console.log(className);
      count_Img["select_obj"] = 11;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "pink_flowerx" + object_count;
        y_obj = "pink_flowery" + object_count;
        if(!document.getElementById("img_11_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_11_global" + object_count + "'>float pink_floweryx" + object_count + " = " + layer.x + ",pink_flowery" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_11_" + object_count).innerHTML = "  image(pink_flower,pink_flowerx" + object_count + ",pink_flowery" + object_count + ");\n";
      }
    }
  });

  var pink_flower_inst = "<li class = 'class11'>PImage <a href = 'img/pink_flower.png' download='pink_flower.png' class='tooltip' title='クリックしてダウンロードしてください.'>pink_flower;\n</a></li>"
  var pink_flower = '<li class = "class_11"><font class = "light"color = "#f7f7f7" size = "3">  pink_flower=loadImage("pink_flower.png");\n</font></li>'
  PImage_literal(pink_flower,count_Img["img_11"],pink_flower_inst);
  img_code_11 = "<li id = 'img11_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(pink_flower," + '<input class="textbox" type="text" size="2"id ="img11_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img11_y" value = "100">' + ");</font></li>";
  literal(img_code_11);
  img_file_code_11 = "<span class = " + count_groups + " id='file_img_source_11_'>  image(pink_flower,100,100);\n</span>";
  $("canvas").append(img_file_code_11);
  $("#file_img_source_11_").attr("id","file_img_source_11_" + count_Figures["img_11"]);
  $("#img11_x").attr("id","img11_x" + count_Figures["img_11"]);
  $("#img11_y").attr("id","img11_y" + count_Figures["img_11"]);
  $("#img11_source").attr("id","img11_source" + count_Figures["img_11"]);
  $("#img11_source" + count_Figures["img_11"]).addClass("img11_source" + count_Figures["img_11"]);

  console.log(count_Figures["img_11"]);
},false);

yellow_flower.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_12"];
  ++count_Img["img_12"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image12" + count_Figures["img_12"],
    source:"img/yellow_flower.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img12_x" + object_count).val(layer.x);
      $("#img12_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_12" + object_count).innerHTML = "  image(yellow_flower," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#img12_x" + object_count).val(layer.x);
          $("#img12_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img12_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img12_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img12_source" + object_count).className;
className = document.getElementById("file_img_source_12" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 12;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      obj_flag = layer.name;
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "yellow_flowerx" + object_count;
        y_obj = "yellow_flowery" + object_count;
        if(!document.getElementById("img_12_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_12_global" + object_count + "'>float yellow_floweryx" + object_count + " = " + layer.x + ",yellow_flowery" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_12" + object_count).innerHTML = "  image(yellow_flower,yellow_flowerx" + object_count + ",yellow_flowery" + object_count + ");\n";
      }
    }
  });
  var yellow_flower_inst = "<li class = 'class12'>PImage <a href = 'img/yellow_flower.png' download='yellow_flower.png' class='tooltip' title='クリックしてダウンロードしてください.'>yellow_flower;\n</a></li>"
  var yellow_flower = '<li class = "class_12"><font class = "light"color = "#f7f7f7" size = "3">  yellow_flower=loadImage("yellow_flower.png");\n</font></li>'
  PImage_literal(yellow_flower,count_Img["img_12"],yellow_flower_inst);
  img_code_12 = "<li id = 'img12_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(yellow_flower," + '<input class="textbox" type="text" size="2"id ="img12_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img12_y" value = "100">' + ");</font></li>";
  literal(img_code_12);
  img_file_code_12 = "<span class = " + count_groups + " id='file_img_source_12'>  image(yellow_flower,100,100);\n</span>";
  $("canvas").append(img_file_code_12);
  $("#file_img_source_12").attr("id","file_img_source_12" + count_Figures["img_12"]);
  $("#img12_x").attr("id","img12_x" + count_Figures["img_12"]);
  $("#img12_y").attr("id","img12_y" + count_Figures["img_12"]);
  $("#img12_source").attr("id","img12_source" + count_Figures["img_12"]);
  $("#img12_source" + count_Figures["img_12"]).addClass("img12_source" + count_Figures["img_12"]);
},false);

tank.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_13"];
  ++count_Img["img_13"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image13" + count_Figures["img_13"],
    source:"img/tank.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img13_x" + object_count).val(layer.x);
      $("#img13_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_13" + object_count).innerHTML = "  image(tank," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#img13_x" + object_count).val(layer.x);
          $("#img13_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img13_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img13_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img13_source" + object_count).className;
className = document.getElementById("file_img_source_13" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 13;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      obj_flag = layer.name;
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "tankx" + object_count;
        y_obj = "tanky" + object_count;
        if(!document.getElementById("img_13_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_13_global" + object_count + "'>float tankyx" + object_count + " = " + layer.x + ",tanky" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_13" + object_count).innerHTML = "  image(tank,tankx" + object_count + ",tanky" + object_count + ");\n";
      }
    }
  });
  var tank_inst = "<li class = 'class13'>PImage <a href = 'img/tank.png' download='tank.png' class='tooltip' title='クリックしてダウンロードしてください.'>tank;\n</a></li>"
  var tank = '<li class = "class_13"><font class = "light"color = "#f7f7f7" size = "3">  tank=loadImage("tank.png");\n</font></li>'
  PImage_literal(tank,count_Img["img_13"],tank_inst);
  img_code_13 = "<li id = 'img13_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(tank," + '<input class="textbox" type="text" size="2"id ="img13_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img13_y" value = "100">' + ");</font></li>";
  literal(img_code_13);
  img_file_code_13 = "<span class = " + count_groups + " id='file_img_source_13'>  image(tank,100,100);\n</span>";
  $("canvas").append(img_file_code_13);
  $("#file_img_source_13").attr("id","file_img_source_13" + count_Figures["img_13"]);
  $("#img13_x").attr("id","img13_x" + count_Figures["img_13"]);
  $("#img13_y").attr("id","img13_y" + count_Figures["img_13"]);
  $("#img13_source").attr("id","img13_source" + count_Figures["img_13"]);
  $("#img13_source" + count_Figures["img_13"]).addClass("img13_source" + count_Figures["img_13"]);
},false);

star.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_14"];
  ++count_Img["img_14"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image14" + count_Figures["img_14"],
    source:"img/star.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img14_x" + object_count).val(layer.x);
      $("#img14_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_14" + object_count).innerHTML = "  image(star," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#img14_x" + object_count).val(layer.x);
          $("#img14_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img14_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img14_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img14_source" + object_count).className;
className = document.getElementById("file_img_source_14" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 14;
      obj_flag = layer.name;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "starx" + object_count;
        y_obj = "stary" + object_count;
        if(!document.getElementById("img_14_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_14_global" + object_count + "'>float staryx" + object_count + " = " + layer.x + ",stary" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_14" + object_count).innerHTML = "  image(star,starx" + object_count + ",stary" + object_count + ");\n";
      }
    }
  });
  var star_inst = "<li class = 'class14'>PImage <a href = 'img/star.png' download='star.png' class='tooltip' title='クリックしてダウンロードしてください.'>star;\n</a></li>"
  var star = '<li class = "class_14"><font class = "light"color = "#f7f7f7" size = "3">  star=loadImage("star.png");\n</font></li>';
  PImage_literal(star,count_Img["img_14"],star_inst);
  img_code_14 = "<li id = 'img14_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(star," + '<input class="textbox" type="text" size="2"id ="img14_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img14_y" value = "100">' + ");</font></li>";
  literal(img_code_14);
  img_file_code_14 = "<span class = " + count_groups + " id='file_img_source_14'>  image(star,100,100);\n</span>";
  $("canvas").append(img_file_code_14);
  $("#file_img_source_14").attr("id","file_img_source_14" + count_Figures["img_14"]);
  $("#img14_x").attr("id","img14_x" + count_Figures["img_14"]);
  $("#img14_y").attr("id","img14_y" + count_Figures["img_14"]);
  $("#img14_source").attr("id","img14_source" + count_Figures["img_14"]);
  $("#img14_source" + count_Figures["img_14"]).addClass("img14_source" + count_Figures["img_14"]);
},false);

giraffe.addEventListener("click",function(){
  ++count_groups;
  ++count_Figures["img_15"];
  ++count_Img["img_15"];
  //これがJcanvasの多角形を描くソース
  $("canvas").drawImage({
    layer:true,
    name:"Image15" + count_Figures["img_15"],
    source:"img/giraffe.png",
    groups:["obj" + count_groups],
    x: 100,
    y: 100,
    draggable:true,
    drag:function(layer){
      //focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      $("#img15_x" + object_count).val(layer.x);
      $("#img15_y" + object_count).val(layer.y);
    },
    dragstop:function(layer){
      document.getElementById("file_img_source_15" + object_count).innerHTML = "  image(giraffe," + layer.x + "," + layer.y + ");\n";
    },
    mouseover:function(layer){
      object_layer = $("canvas").getLayer(layer.name);
      object_count = object_layer.name.slice(7);
      $(function(){
        change_text = setInterval(function(){
          $("#img15_x" + object_count).val(layer.x);
          $("#img15_y" + object_count).val(layer.y);
        },10);
      });
      $(function(){
        MOver("img15_source" + object_count);
      });
    },
    mouseout:function(layer){
      clearInterval(change_text);
      $(function(){
        MOut("img15_source" + object_count);
      });
    },
    click:function(layer){
      var layer_o = $("canvas").getLayer(layer.name);
      layer_name = layer_o.name;
      inst_className = document.getElementById("img15_source" + object_count).className;
className = document.getElementById("file_img_source_15" + object_count).className;
      focuses(layer.x,layer.y,layer.width,layer.height,(layer.name-1));
      count_Img["select_obj"] = 15;
      if(for_flag === true){
        //table内のfor_propertyに書き込む
        for_property.innerHTML = "この図形には使えません";
      }
      obj_flag = layer.name;
      if(if_flag === true){
        X = layer.x;
        Y = layer.y;
        if_property.innerHTML = "オブジェクトを<input class='textbox' type = 'text' size='2' id = 'pace'>秒でx座標を<input class='textbox' type = 'text' size='2' id = 'if_x'>までy座標を<input class='textbox' type = 'text' size='2' id = 'if_y'>まで動かす.";
        x_obj = "giraffex" + object_count;
        y_obj = "giraffey" + object_count;
        if(!document.getElementById("img_15_global" + object_count)){
          $("#global").append("<li class = " + count_groups + " id = 'img_15_global" + object_count + "'>float giraffeyx" + object_count + " = " + layer.x + ",giraffey" + object_count + " = " + layer.y + ";\n</li>");
        }
        document.getElementById("file_img_source_15" + object_count).innerHTML = "  image(giraffe,giraffex" + object_count + ",giraffey" + object_count + ");\n";
      }
    }
  });
  var giraffe_inst = "<li class = 'class15'>PImage <a href = 'img/giraffe.png' download='giraffe.png' class='tooltip' title='クリックしてダウンロードしてください.'>giraffe;\n</a></li>"
  var giraffe = '<li class = "class_15"><font class = "light"color = "#f7f7f7" size = "3">  giraffe=loadImage("giraffe.png");\n</font></li>';
  PImage_literal(giraffe,count_Img["img_15"],giraffe_inst);
  img_code_15 = "<li id = 'img15_source' class = 'Img " + count_groups + "'><font class = 'light'color = '#f7f7f7' size = '3'>  image(giraffe," + '<input class="textbox" type="text" size="2"id ="img15_x" value = "100">' + "," + '<input class="textbox" type="text" size="2"id ="img15_y" value = "100">' + ");</font></li>";
  literal(img_code_15);
  img_file_code_15 = "<span class = " + count_groups + " id='file_img_source_15'>  image(giraffe,100,100);\n</span>";
  $("canvas").append(img_file_code_15);
  $("#file_img_source_15").attr("id","file_img_source_15" + count_Figures["img_15"]);
  $("#img15_x").attr("id","img15_x" + count_Figures["img_15"]);
  $("#img15_y").attr("id","img15_y" + count_Figures["img_15"]);
  $("#img15_source").attr("id","img15_source" + count_Figures["img_15"]);
  $("#img15_source" + count_Figures["img_15"]).addClass("img15_source" + count_Figures["img_15"]);
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
