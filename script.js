console.log("welcome to spotify");
let songindex = 1;
let songindex2 = 1;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprog = document.getElementById('myprog');
let gif = document.getElementById('gif');
let masterplaysong = document.getElementById('masterplaysong');
let coverphoto = document.getElementById('coverphoto');

let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songname: "Warriyo-Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songname: "Different Heaven & EHIDE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: "Janji-Heroes-Tonight-fest", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songname: "Sub Urban - Cradles ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songname: "Cartoon - On & On ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songname: "Lost Sky - Fearless ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songname: "Halvorsen - Band-Aid ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songname: "Unknown Brain - Superhero", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },


]
songItem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;

});
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        makeplay();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    myprog.value = progress;
})
myprog.addEventListener('change', () => {
    audioelement.currentTime = (myprog.value * audioelement.duration) / 100;

})
const makeplay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioelement.paused || audioelement.currentTime <= 0) {


            makeplay();
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioelement.src = `songs/${songindex}.mp3`
            masterplaysong.innerText = songs[songindex - 1].songname;
            coverphoto.src = songs[songindex - 1].coverPath
            audioelement.currentTime = 0;
            audioelement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');



        }
        else {
            makeplay();
            songindex2 = parseInt(e.target.id);
            if (songindex == songindex2) {
                audioelement.pause();
                e.target.classList.remove('fa-circle-pause');
                e.target.classList.add('fa-circle-play');
                masterplay.classList.remove('fa-circle-pause');
                masterplay.classList.add('fa-circle-play');
            }

            else {
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                audioelement.src = `songs/${songindex2}.mp3`
                masterplaysong.innerText = songs[songindex2 - 1].songname;
                coverphoto.src = songs[songindex2 - 1].coverPath
                audioelement.currentTime = 0;
                audioelement.play();
                gif.style.opacity = 1;
                masterplay.classList.remove('fa-circle-play');
                masterplay.classList.add('fa-circle-pause');
            }

        }

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 10) {
        songindex = 1
    }
    else {
        songindex = songindex + 1
    }
    audioelement.src = `songs/${songindex}.mp3`
    masterplaysong.innerText = songs[songindex - 1].songname;
    coverphoto.src = songs[songindex - 1].coverPath
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 1) {
        songindex = 10
    }
    else {
        songindex = songindex - 1
    }
    audioelement.src = `songs/${songindex}.mp3`
    masterplaysong.innerText = songs[songindex - 1].songname;
    coverphoto.src = songs[songindex - 1].coverPath
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

