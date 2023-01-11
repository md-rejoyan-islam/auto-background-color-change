const body=document.querySelector('body')
const random = Math.floor(Math.random()*255);
const showRgb=document.getElementById('showRgb')
const showHex=document.getElementById('showHex')
// rgb =()



showRgb.innerHTML = `Color: rgb(255,255,255)`;
showHex.innerHTML = `Color: #fff`;


setInterval(()=>{
    const red = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);

const hexCode=`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
body.style.backgroundColor = `rgb(${red},${green},${blue})`;
showRgb.innerHTML = `Color: rgb(${red},${green},${blue})`;
showHex.innerHTML = `Color: ${hexCode}`;
},1000)
