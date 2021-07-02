import { sound } from "./app.js";
const TypingStatus = (() => {
  const $wrapper = document.querySelector(".wrapper");
  const $textToType = $wrapper.querySelector(".wrapper__text");
  const $textArea = $wrapper.querySelector("#inputText");
  const $countdown = $wrapper.querySelector(".wrapper__countdown");

  let timeToComplete = ``;
  let array = [];

  const IsCorrect = (_) => {
    const inputText = $textArea.value.split("");
    const givenText = $textToType.innerText.split("");
    inputText.forEach((letter, i) => {
      if (letter === givenText[i]) {
        $textArea.style.color = "whitesmoke";
        $textArea.style.borderColor = "whitesmoke";
      } else {
        $textArea.style.color = "red";
        $textArea.style.borderColor = "red";
        $textArea.style.borderWidth = "10px";
        sound.error.play();
      }
    });
  };

  const isCompleted = (_) => {
    const inputText = $textArea.value.split("");
    const givenText = $textToType.innerText.split("");
    if (JSON.stringify(givenText) === JSON.stringify(inputText)) {
      $wrapper.style.backgroundColor = "#2ecc71";
      $textArea.setAttribute("disabled", "true");
      sound.win.play();
    } else {
      $wrapper.style.backgroundColor = "transparent";
    }
  };

  /**
     * 
     * timeToComplete = $countdown.innerText;
    return timeToComplete;
     */
  return {
    IsCorrect,
    isCompleted,
  };
})();
export default TypingStatus;
