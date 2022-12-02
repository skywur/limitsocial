window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#e3e3e3',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: .3,
    });

    circle.animate(1);
};



var audio = document.getElementById('audio');

document.getElementById("enter").addEventListener("click", function() {

    const target = document.getElementById("enter");
    const pre = document.getElementById("uwu");

    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());

    if (typeof window.orientation == 'undefined') {
        audio.play();
    }
});