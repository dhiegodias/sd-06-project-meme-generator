const DQSEL = function (params) { return document.querySelector(params); };
const INPUTXT = DQSEL('#text-input');
const INPUTIMG = DQSEL('#meme-insert');
const MEMEIMG = DQSEL('.meme-img');
const MEMETXT = DQSEL('#meme-text');
const DIVIMG = DQSEL('.image-container');
const BORDERBTN = document.querySelectorAll('.border-btn');
const BORDERS = ['3px dashed red', '5px blue double', '6px green groove'];

INPUTXT.oninput = () => {
  MEMETXT.textContent = INPUTXT.value;
};

INPUTIMG.oninput = () => {
  MEMEIMG.src = URL.createObjectURL(INPUTIMG.files[0]);
};

BORDERBTN[0].onclick = () => {
  DIVIMG.style.border = BORDERS[0];
};

BORDERBTN[1].onclick = () => {
  DIVIMG.style.border = BORDERS[1];
};

BORDERBTN[2].onclick = () => {
  DIVIMG.style.border = BORDERS[2];
};
