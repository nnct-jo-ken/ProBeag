$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle_code = "";
var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var figuers = [];
var load_figuers = 0;
  rect.addEventListener("click",function(){
    $("canvas").drawRect({
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
    var rect_code = "rect(" + ' <input type="text" width="50"> ' + ",y,w,h); " + "\n";
    figuers.push(rect_code);
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
    },false);

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
  var ellipse_code = "ellipse(" + ' <input type="text" width="50"> ' + ",y,w,h); " + "\n";
  figuers.push(ellipse_code);
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
},false);
