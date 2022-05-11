function playVid() {
    let video = document.getElementById('bg');
    let button = document.getElementById('bgButton');
    if(video.paused){
        video.play();
        button.innerHTML = "Pause";
    } else {
        video.pause();
        button.innerHTML = 'Play';
    }
}