let countButton=document.getElementById("count-button");
countButton.addEventListener("click",()=>{
    let count=document.getElementById("count");
    let countNumber=Number(count.innerHTML);
   
    countNumber++;
    count.innerHTML=countNumber
   if(countNumber==5){
    alert("Çok fazla telefona baktınız.");

   }
})

const birdSong=document.getElementById("bird-song");
const birdIcon=document.getElementById("birdIcon");

birdIcon.addEventListener("click",()=>{
    if(birdSong.paused){
        birdSong.play();
        birdIcon.className="fa-solid fa-music";
    }
    else{
        birdSong.pause();
        birdIcon.className="fa-solid fa-dove"
    }
})

const pianoSong=document.getElementById("piano-song");
const pianoIcon=document.getElementById("pianoIcon");

pianoIcon.addEventListener("click",()=>{
    if(pianoSong.paused){
        pianoSong.play();
        pianoIcon.className="fa-solid fa-music";
    }
    else{
        pianoSong.pause();
        pianoIcon.className="fa-solid fa-moon"
    }
})

const rainSong=document.getElementById("rain-song");
const rainIcon=document.getElementById("rainIcon");

rainIcon.addEventListener("click",()=>{
    if(rainSong.paused){
        rainSong.play();
        rainIcon.className="fa-solid fa-music";
    }
    else{
        rainSong.pause();
        rainIcon.className="fa-solid fa-cloud-showers-heavy"
    }
})

let volumeInput=document.getElementById("volume");
volume.addEventListener("input",()=>{
    birdSong.volume=volumeInput.value/100;
    pianoSong.volume=volumeInput.value/100;
    rainSong.volume=volumeInput.value/100;
    
})