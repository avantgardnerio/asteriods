var cnvMain;
var lastTick;
var ctx;
var pos = [0, 0];
var velocity = [200, 200];
var keymap = {};

var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;

$(document).ready(function() {

    // Set up canas
    cnvMain = $("#cnvMain")[0];
    cnvMain.width = window.innerWidth;
    cnvMain.height = window.innerHeight;
    ctx = cnvMain.getContext("2d");

    // Add key listeners
    $(window).keydown(function(ev) {
        console.log(ev.keyCode);
        keymap[ev.keyCode] = true;
    });
    $(window).keyup(function(ev) {
        keymap[ev.keyCode] = false;
    });

    // Start animation loop
    requestAnimationFrame(render);
});

function render(timestamp) {
    // start stuff
    if(lastTick === undefined) {
        lastTick = timestamp;
        requestAnimationFrame(render);
        return;
    }
    var delta = (timestamp - lastTick) / 1000;

    // Physics
    if(keymap[KEY_LEFT] === true) {
        pos[0] -= delta * velocity[0];
    }
    if(keymap[KEY_RIGHT] === true) {
        pos[0] += delta * velocity[0];
    }
    if(keymap[KEY_UP] === true) {
        pos[1] -= delta * velocity[1];
    }
    if(keymap[KEY_DOWN] === true) {
        pos[1] += delta * velocity[1];
    }

    // Rendering
    ctx.clearRect(0, 0, cnvMain.width, cnvMain.height);
    ctx.fillRect(pos[0], pos[1], 50, 50);

    // End stuff
    lastTick = timestamp;
    requestAnimationFrame(render);
}
