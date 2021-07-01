import Timer from "./timer.js";
import TypingComplete from "./complete.js";
import Text from "./text.js";

const $wrapper = document.querySelector(".wrapper");
const $textToType = $wrapper.querySelector(".wrapper__text");
const $textArea = $wrapper.querySelector("#inputText");
const $countdown = $wrapper.querySelector(".wrapper__countdown");
const $btn = $wrapper.querySelector(".wrapper__btn");

$textArea.setAttribute("placeholder", "start typing");

$textToType.innerHTML = `${Text.randomPara()}`;

const spellCheck = (_) => {
  const inputText = $textArea.value.split("");
  const text = $textToType.innerText.split("");

  inputText.forEach((letter, i) => {
    if (letter === text[i]) {
      $textArea.style.color = "green";
      $textArea.style.opacity = "1";
    } else {
      $textArea.style.color = "red";
      $textArea.style.borderColor = "red";
      $textArea.style.borderWidth = "10px";
      $textArea.style.opacity = "0.8";
    }
  });
  TypingComplete.isCompleted(inputText, text);
};

const startClock = (_) => {
  let inputTextLength = $textArea.value.length;
  if (inputTextLength === 0) {
    Timer.countStart();
  }
  if ($textArea.value.length === $textToType.innerText.length - 1) {
    Timer.countPause();
  }
};

const resetApp = (_) => {
  Timer.countReset();
  $textArea.removeAttribute("disabled");
  $textArea.value = "";
  $textToType.innerHTML = `${Text.randomPara()}`;
};

const init = (_) => {
  $textArea.addEventListener("keydown", startClock, false);
  $textArea.addEventListener("keyup", spellCheck, false);
  $btn.addEventListener("click", resetApp, false);
};
init();
