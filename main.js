var cnvMain;
var lastTick;
var ctx;
var pos = [0, 0];
var velocity = [50, 50];

$(document).ready(function() {
    cnvMain = $("#cnvMain")[0];
    cnvMain.width = window.innerWidth;
    cnvMain.height = window.innerHeight;
    ctx = cnvMain.getContext("2d");

    requestAnimationFrame(render);
});

function render(timestamp) {
    // start stuff
    if(lastTick === undefined) {
        lastTick = timestamp;
        requestAnimationFrame(render);
        return;
    }

    // Physics
    var delta = (timestamp - lastTick) / 1000;
    pos[0] += delta * velocity[0];
    pos[1] += delta * velocity[1];

    // Rendering
    ctx.clearRect(0, 0, cnvMain.width, cnvMain.height);
    ctx.fillRect(pos[0], pos[1], 50, 50);

    // End stuff
    lastTick = timestamp;
    requestAnimationFrame(render);
}
