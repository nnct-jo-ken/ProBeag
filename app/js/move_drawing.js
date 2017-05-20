$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle_code = "";
var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var figuers = [];
var load_figuers = 0;
var compile = document.getElementById("compile");

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
    var rect_code = "rect(" + '<form><input type="text" size="4"id ="rect_x"></form> ' + ",y,w,h); " + "\n";
    literal(rect_code);
    },false);

    function change_id(obj){
      $(function(){
        $("form").each(function(i){
            $("#" + obj).attr("id",obj + (i+1));
            console.log($("#" + obj + (i+1)).val());
        });
      });
    }

compile.addEventListener("click",function(){
  change_id("rect_x");
  change_id("ellipse_x");
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
  var ellipse_code = "ellipse(" + '<form><input type="text" size="4" id="ellipse_x"></form>' + ",y,w,h); " + "\n";
  literal(ellipse_code);
},false);
