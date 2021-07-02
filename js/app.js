import Timer from "./timer.js";
import TypingStatus from "./typing.js";
import Text from "./text.js";

const $wrapper = document.querySelector(".wrapper");
const $textToType = $wrapper.querySelector(".wrapper__text");
const $textArea = $wrapper.querySelector("#inputText");
const $countdown = $wrapper.querySelector(".wrapper__countdown");
const $btn = $wrapper.querySelector(".wrapper__btn");

export const sound = {
  win: new Audio("./../media/win.mp3"),
  error: new Audio("./../../media/error.mp3"),
  click: new Audio("./../media/click.mp3"),
};

$textArea.setAttribute("placeholder", "Start typing...");

$textToType.innerHTML = `${Text.randomPara()}`;

const spellCheck = (_) => {
  TypingStatus.IsCorrect();
  TypingStatus.isCompleted();
};

const startClock = (_) => {
  const givenText = $textToType.innerText.length - 1;
  const inputTextLength = $textArea.value.length;
  if (inputTextLength === 0) {
    Timer.countStart();
  }
  if (inputTextLength === givenText) {
    Timer.countPause();
  }
};

const resetApp = (_) => {
  Timer.countReset();
  $textArea.removeAttribute("disabled");
  $textArea.value = "";
  $textArea.style.borderColor = "whitesmoke";
  $textArea.style.borderWidth = "5px";
  $textToType.innerHTML = `${Text.randomPara()}`;
  sound.click.play();
};

const init = (_) => {
  $textArea.addEventListener("keydown", startClock, false);
  $textArea.addEventListener("keyup", spellCheck, false);
  $btn.addEventListener("click", resetApp, false);
};
init();
