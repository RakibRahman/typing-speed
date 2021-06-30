const $wrapper = document.querySelector(".wrapper");
const $textToType = $wrapper.querySelector(".wrapper__text");
const $textArea = $wrapper.querySelector("#inputText");
const $countdown = $wrapper.querySelector(".wrapper__countdown");
const $btn = $wrapper.querySelector(".wrapper__btn");

$textArea.setAttribute("placeholder", "start typing");

const spellCheck = (_) => {
  let inputText = $textArea.value.split("");
  let text = $textToType.innerText.split("");

  inputText.forEach((letter, i) => {
    if (letter === text[i]) {
      console.log("right");
      $textArea.style.color = "green";
    } else {
      console.log("wrong");
      $textArea.style.color = "red";
    }
  });
  if ($textArea.value.length === $textToType.innerText.length) {
    $wrapper.style.backgroundColor = "red";
  } else {
    $wrapper.style.backgroundColor = "green";
  }
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
