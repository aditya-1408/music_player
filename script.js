// Select elements
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const playBtn = document.querySelector("#play"); // button
const playIcon = playBtn.querySelector("i"); // icon inside button

const image = document.querySelector(".song-img");
const songName = document.querySelector(".song-name");
const audio = document.querySelector("#audio");
const progress = document.querySelector("#progress");

// Songs data
let songs = [
  {
    songName: "Balam Pichkari",
    src: "audio/Balam Pichkari - Yeh Jawaani Hai Deewani (128 kbps).mp3",
    img: "images/Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg",
  },
  {
    songName: "Desi Kalakaar",
    src: "audio/Desi Kalakaar (128 kbps).mp3",
    img: "images/Desi-Kalakaar-Hindi-2014-500x500.jpg",
  },
  {
    songName: "Aari Aari",
    src: "audio/Dhurandhar The Revenge - Aari Aari - Dhurandhar The Revenge (128 kbps).mp3",
    img: "images/aari-aari-dhurandhar-the-revenge-500-500.jpg",
  },
  {
    songName: "Tum Tak",
    src: "audio/Tum Tak - Raanjhanaa (128 kbps).mp3",
    img: "images/Raanjhanaa-Hindi-2013-20260120201336-500x500.jpg",
  },
];

let songIndex = 0;

// Load song
function loadSong(song) {
  songName.textContent = song.songName;
  audio.src = song.src;
  image.src = song.img;
}

// Initial load
loadSong(songs[songIndex]);

// Play / Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
     image.style.animationPlayState = "running";
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    // wantde stop rotation when paused
    image.style.animationPlayState = "paused";
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
});

// Next song
next.addEventListener("click", () => {
    songIndex++;
    if(songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
})

// Previous song
prev.addEventListener("click", () => {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  audio.play();

  playIcon.classList.remove("fa-play");
  playIcon.classList.add("fa-pause");
});

