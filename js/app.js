import Timer from "./timer.js";
import TypingComplete from "./complete.js";

const $wrapper = document.querySelector(".wrapper");
const $textToType = $wrapper.querySelector(".wrapper__text");
const $textArea = $wrapper.querySelector("#inputText");
const $countdown = $wrapper.querySelector(".wrapper__countdown");
const $btn = $wrapper.querySelector(".wrapper__btn");

$textArea.setAttribute("placeholder", "start typing");

const spellCheck = (_) => {
  const inputText = $textArea.value.split("");
  const text = $textToType.innerText.split("");

  inputText.forEach((letter, i) => {
    if (letter === text[i]) {
      $textArea.style.color = "green";
      console.log(letter);
    } else {
      $textArea.style.color = "red";
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
};

const init = (_) => {
  $textArea.addEventListener("keydown", startClock, false);
  $textArea.addEventListener("keyup", spellCheck, false);
  $btn.addEventListener("click", resetApp, false);
};
init();
