let songIndex =0;
const audioElement = new Audio('songs/1.mp3');
// audioElement.play();
const currPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Yadav Brand", filePath: "songs/1.mp3" , coverPath: "components/yadav.jpg"},
    {songName: "Ram Ram", filePath: "songs/2.mp3" , coverPath: "components/mc.jpg"},
    {songName: " Bholenath", filePath: "songs/3.mp3" , coverPath: "components/bhola.jpg"},
    {songName: "Shri krishna govind", filePath: "songs/4.mp3" , coverPath: "components/jubin.jpg"},
    {songName: "Baarish Mein Tum", filePath: "songs/5.mp3" , coverPath: "components/baarish.jpf.jpeg"},
    {songName: "Ud Jaa Kale Kawa", filePath: "songs/6.mp3" , coverPath: "bg.jpg"},
    {songName: "Radha Kaise Na jale", filePath: "songs/7.mp3" , coverPath: "components/radha.jpg"},
    {songName: "Aakhien Khuli Ho ya ho", filePath: "songs/8.mp3" , coverPath: "components/srk.jpg"},
    {songName: "Yagaar", filePath: "songs/9.mp3" , coverPath: "components/yalgar.jpg"},
    {songName: "Brown Mnde", filePath: "songs/10.mp3" , coverPath: "components/brown munde.jpeg"},
]
songItems.forEach((element, i)=>{ 
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

currPlay.addEventListener('click' , () =>{
    // console.log('clicked');
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        currPlay.classList.remove(`fa-circle-play`);
        currPlay.classList.add(`fa-pause`);
        
    }
    else {
        audioElement.pause();
        currPlay.classList.remove(`fa-pause`);
        currPlay.classList.add(`fa-circle-play`);
        
    }
});
// listen
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    // console.log('progress');
    myProgressBar.value = progress;

});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove(`fa-pause`);
        element.classList.add(`fa-circle-play`);
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove(`fa-circle-play`);
        e.target.classList.add(`fa-pause`);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-pause`);
    })
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove(`fa-circle-play`);
    masterPlay.classList.add(`fa-pause`);
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove(`fa-circle-play`);
    masterPlay.classList.add(`fa-pause`);

})
