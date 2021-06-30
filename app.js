const $wrapper = document.querySelector(".wrapper");
const $textToType = $wrapper.querySelector(".wrapper__text");
const $textArea = $wrapper.querySelector("#inputText");
const $countdown = $wrapper.querySelector(".wrapper__countdown");
const $btn = $wrapper.querySelector(".wrapper__btn");

$textArea.setAttribute("placeholder", "start typing");

const spellCheck = (_) => {
  let inputText = $textArea.value;
  console.log(inputText);
};
const startTimer = (e) => {
  let inputTextLength = $textArea.value.length;
  console.log(inputTextLength);
};

const init = () => {
  $textArea.addEventListener("keydown", startTimer);
  $textArea.addEventListener("keyup", spellCheck);
};
init();
