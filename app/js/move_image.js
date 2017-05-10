//画像をインプット、移動
/*var image_src = function(){
var isDragging = false;
var dragTarget = null;
var image_img = [];
var images = [];
this.load_image = function(src_img){
image_img.push(src_img);
  for (var i in image_img) {
    images[i] = new Image();
    images[i].src = image_img[i];
  }
  var loadedCount = 0;
  for (var i in images) {
     images[i].addEventListener('load', function() {
       if (++loadedCount == images.length) {
            var x = 0;
            var y = 0;
            var w = 100;
            var h = 100;
            for (var j in images) {
                images[j].drawOffsetX = x;
                images[j].drawOffsetY = y;
                images[j].drawWidth   = w;
                images[j].drawHeight  = h;

                canvas_ctx.drawImage(images[j], x, y, w, h)
            }
          }
        }, false);
    }
}
this.Image_drag = function(){
  var mouseDown = function(e) {
    var posX = parseInt(e.clientX - canvas.offsetLeft);
    var posY = parseInt(e.clientY - canvas.offsetTop);

      for (var i = images.length - 1; i >= 0; i--) {
            if (posX >= images[i].drawOffsetX &&
                posX <= (images[i].drawOffsetX + images[i].drawWidth) &&
                posY >= images[i].drawOffsetY &&
                posY <= (images[i].drawOffsetY + images[i].drawHeight)
            ) {
              dragTarget = i;
              isDragging = true;
              break;
            }
        }
    }
    var mouseUp = function(e) {
        isDragging = false;
    };
    var mouseOut = function(e) {
    }
    var mouseMove = function(e) {
        var posX = parseInt(e.clientX - canvas.offsetLeft);
        var posY = parseInt(e.clientY - canvas.offsetTop);

        if (isDragging) {
            canvas_ctx.clearRect(0, 0, canvas.width, canvas.height);

            var x = 0;
            var y = 0;
            var w = 100;
            var h = 100;
            for (var i in images) {
                if (i == dragTarget) {
                    x = posX - images[i].drawWidth / 2;
                    y = posY - images[i].drawHeight / 2;
                    images[i].drawOffsetX = x;
                    images[i].drawOffsetY = y;
                } else {
                    x = images[i].drawOffsetX;
                    y = images[i].drawOffsetY;
                }
                w = images[i].drawWidth;
                h = images[i].drawHeight;
                canvas_ctx.drawImage(images[i], x, y, w, h);
            }
        }
    }

    // canvasにイベント登録
    canvas.addEventListener('mousedown', function(e){mouseDown(e);}, false);
    canvas.addEventListener('mousemove', function(e){mouseMove(e);}, false);
    canvas.addEventListener('mouseup',   function(e){mouseUp(e);},   false);
    canvas.addEventListener('mouseout',  function(e){mouseOut(e);},  false);
 }
}

var thisImage = new image_src();
function Image_load(load){
thisImage.load_image(load);
}
thisImage.Image_drag();
*/
