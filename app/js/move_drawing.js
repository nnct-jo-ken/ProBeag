$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;

var cicle_code = "";
var cicle = document.getElementById("cicle");
var rect = document.getElementById("rect");
var figuers = [];

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
    var load_figuers = 0;
    var rect_code = "rect(x,y,w,h);";
    figuers.push(rect_code);
    $(function ($) {
    $("#decompile").click( function() {
    for (var i in figuers){
      if(++load_figuers == figuers.length){
        $("#source_code").append(figuers[i] + "\n");
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
  })
},false);
