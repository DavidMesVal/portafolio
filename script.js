function openModal() {
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("videoPlayer");

    modal.style.display = "flex"; 
    video.play(); 
}

function closeModal() {
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("videoPlayer");

    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
}

window.onclick = function(event) {
    let modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById("videoModal");
    modal.style.display = "none";
    let video = document.getElementById("videoPlayer");
    video.pause();
    video.currentTime = 0;
});
