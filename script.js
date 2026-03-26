const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const play = document.querySelector("#play");
const image = document.querySelector(".song-img");
const songName = document.querySelector(".song-name");
const audio = document.querySelector("#audio");
const progress = document.querySelector("#progress");

let songs = [
  {
    songName: "Balam Pichkari",
    src: "/audio/Balam Pichkari - Yeh Jawaani Hai Deewani (128 kbps).mp3",
    img: "images/Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg",
  },
  {
    songName: "Desi kalakaar",
    src: "images/Desi-Kalakaar-Hindi-2014-500x500.jpg",
    img: "/images/Desi-Kalakaar-Hindi-2014-500x500.jpg",
  },
  {
    songName: "Aari Aari",
    src: "/audio/Dhurandhar The Revenge - Aari Aari - Dhurandhar The Revenge (128 kbps).mp3",
    img: "/images/aari-aari-dhurandhar-the-revenge-500-500.jpg",
  },
  {
    songName: "Tum Tak",
    src: "/audio/Tum Tak - Raanjhanaa (128 kbps).mp3",
    img: "/images/Raanjhanaa-Hindi-2013-20260120201336-500x500.jpg",
  }
];
let songIndex = 0;

function loadSong(song) {
    songName.textContent = song.songName;
    audio.src = song.src;
    image.src = song.img;
}


