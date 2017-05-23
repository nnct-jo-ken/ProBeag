$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle_code = "";
var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var figuers = [];
var load_figuers = 0;
var compile = document.getElementById("compile");
var count = 1;
var x_point = 200;
var obj_x;

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
rect.addEventListener("click",function(){
  ++count;
  for (var i = 1;i < count ;i++){
     $("canvas").drawRect({
       name:"myBox" + i,
       strokeStyle: "black",
       fillStyle: "red",
       strokeWidth: 1,
       x: 100,
       y: 100,
       width: 100,
       height: 100,
       fromCenter: false,
       draggable:true,
       id:"rect",
       click: function(layer){
         //compile.addEventListener("click",function(){
           translateX: "+=" + x_point
         //},false);
         }
       });
     }
     //});
    var rect_code = "rect(" + '<form><input type="text" size="4"id ="rect_x"></form> ' + ",y,w,h); " + "\n";
    literal(rect_code);
  },false);

  compile.addEventListener("click",function(){
    for(var i = 1;i < count;i++){
    obj_x = $("#rect_x" + i).val();
    $('canvas').setLayer('myBox' + i, {
      //fillStyle: '#36b',
      //rotate: 30,
      x: '+=' + obj_x,
      y: '-=100'
    })
    .drawLayers();
  }
  },false);

    function change_id(obj){
      $(function(){
        $("input").each(function(i){
            $("#" + obj).attr("id",obj + (i+1));
//            document.getElementById(obj + (i+1) ).val();

          //  var obj + (i+1) = document.getElementById(obj + (i+1));

        });
      });
  //    console.log(document.getElementById("rect_x1").val());
    }

    function trans(){
      $(function(){
        $("input").each(function(i){

//          var obj_x = document.getElementById("rect").x;
          console.log(document.getElementById("rect").translateX);
      });
    });
  }

cicle.addEventListener("click",function(){
  $("canvas").drawEllipse({
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
  var ellipse_code = "ellipse(" + '<form><input type="text" size="4" id="ellipse_x"></form>' + ",y,w,h); " + "\n";
  literal(ellipse_code);
},false);
