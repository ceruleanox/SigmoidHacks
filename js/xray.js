var can = document.getElementById('canvas-brain-neurons');
var ctx = can.getContext('2d');

can.addEventListener('mousemove', function(e) {
    var mouse = getMouse(e, can);
    redraw(mouse);
}, false);


function redraw(mouse) {
    console.log('a');
    can.width = can.width;
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.rect(0,0,1280,640);
    ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI*2, true);
    ctx.clip();
    ctx.drawImage(overlay_img, 0, 0);
}

var overlay_img = new Image();
overlay_img.src = '../img/learn-nn-neurons.jpg';

var img = new Image();
img.src = '../img/learn-nn-neuron.png';

img.onload = function() {
    redraw({x: -1280, y: -640})
}

img.onmousedown = function(event) {
    ctx.drawImage(overlay_img, 0, 0);
}

function getMouse(e, canvas) {
    var element = canvas,
        offsetX = 0,
        offsetY = 0,
        x, y;

    // compute total offset
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    x = e.pageX - offsetX;
    y = e.pageY - offsetY;

    return {
        x: x,
        y: y
    };
}