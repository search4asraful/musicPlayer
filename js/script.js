const audio = document.getElementById('audio');
const playlist = document.getElementById('playlist');
const tracks = playlist.getElementsByTagName('li');

function playTrack(index) {
    const track = tracks[index];
    audio.src = track.getAttribute('data-src');
    audio.play();
}

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', function () {
        playTrack(i);
    });
}
