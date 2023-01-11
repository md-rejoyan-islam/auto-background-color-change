const body = document.querySelector("body");
const random = Math.floor(Math.random() * 255);
const showRgb = document.getElementById("showRgb");
const showHex = document.getElementById("showHex");
const copyText = document.getElementById("copyText");
const show = document.getElementById("show");
// rgb =()

showRgb.innerHTML = `Color: rgb(255,255,255)`;
showHex.innerHTML = `Color: #fff`;

let RGB = "";
let HEX = "#ffffff";
setInterval(() => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  RGB = `rgb(${red},${green},${blue})`;
  HEX = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  body.style.backgroundColor = `${RGB}`;
  showRgb.innerHTML = `Color: rgb(${red},${green},${blue})`;
  showHex.innerHTML = `Color: ${HEX}`;
}, 2000);

//copy text
copyText.onclick = () => {
  navigator.clipboard.writeText(HEX);
  show.style.display = "block";
  show.innerHTML = `copied : ${HEX}`;
  setInterval(() => {
    show.style.display = "none";
  }, 700);
};
