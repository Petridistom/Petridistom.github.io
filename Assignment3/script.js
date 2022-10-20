window.onload = function(){


let svgElement = document.getElementById('svg-mask');
let svgRect = document.getElementById('rectFollow');


//when the mouse moves, run function followMouse
svgElement.addEventListener('mousemove', followMouse);


//use mouse postion to move the circle
function followMouse(e){
    svgRect.x.baseVal.value = e.layerX - 2000;
    svgRect.y.baseVal.value = e.layerY - 25;
}


//when the mouse is clicked, change the bottom picture for 1 second
svgElement.addEventListener('mousedown', changeBottom);
function changeBottom(){
    document.getElementById('img-masked').src = 'images/ezGIF.gif'
    setTimeout(function(){document.getElementById('img-masked').src = 'images/squigly.jpg'}, 1000)
}


//make the rect appear on mouse over
svgElement.addEventListener('mouseover', createRect)
function createRect(){
    document.getElementById('rectFollow').style.width = 4000
}


//make the rect dissappear on mouse exit
svgElement.addEventListener('mouseout', removeRect)
function removeRect(){
    document.getElementById('rectFollow').style.width = 0
}


//load sounds
sound1 = new Audio('sounds/sound1.wav')
sound2 = new Audio('sounds/sound2.wav')
sound3 = new Audio('sounds/sound3.wav')
sound4 = new Audio('sounds/sound4.wav')
sound5 = new Audio('sounds/sound5.wav')
sound6 = new Audio('sounds/sound6.wav')
sound7 = new Audio('sounds/sound7.wav')
sound8 = new Audio('sounds/sound8.wav')
sound9 = new Audio('sounds/sound9.wav')
sound10 = new Audio('sounds/sound10.wav')
sound11 = new Audio('sounds/sound11.wav')
sound12 = new Audio('sounds/sound12.wav')
sound13 = new Audio('sounds/sound13.wav')
sound14 = new Audio('sounds/sound14.wav')
sound15 = new Audio('sounds/sound15.wav')
sound16 = new Audio('sounds/sound16.wav')
sound17 = new Audio('sounds/sound17.wav')
sound18 = new Audio('sounds/sound18.wav')
sound19 = new Audio('sounds/sound19.wav')
sound20 = new Audio('sounds/sound20.wav')
sound21 = new Audio('sounds/sound21.wav')
sound22 = new Audio('sounds/sound22.wav')
sound23 = new Audio('sounds/sound23.wav')
sound24 = new Audio('sounds/sound24.wav')


//add them to array for random indexing
let soundsArray = [
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
    sound7,
    sound8,
    sound9,
    sound10,
    sound11,
    sound12,
    sound13,
    sound14,
    sound15,
    sound16,
    sound17,
    sound18,
    sound19,
    sound20,
    sound21,
    sound22,
    sound23,
    sound24
]


//randomise audio src when the mouse is clicked
svgElement.addEventListener('mousedown', newSrc)
function newSrc(){
audiosrc = soundsArray[ Math.floor(Math.random() * 24)];
}


//play a sound when the mouse is clicked
svgElement.addEventListener('mousedown', playAudio)
function playAudio(){
    audiosrc.play()
    console.log(audiosrc)
}

}




