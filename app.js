// const $wrapper = document.querySelector(".wrapper");
// const $textToType = $wrapper.querySelector(".wrapper__text");
// const $textArea = $wrapper.querySelector("#inputText");
// const $countdown = $wrapper.querySelector(".wrapper__countdown");
// const $btn = $wrapper.querySelector(".wrapper__btn");

// $textArea.setAttribute("placeholder", "start typing");

// let milliseconds = 0;
// let timer;

// const spellCheck = (_) => {
//   let inputText = $textArea.value.split("");
//   let text = $textToType.innerText.split("");

//   inputText.forEach((letter, i) => {
//     if (letter === text[i]) {
//       $textArea.style.color = "green";
//     } else {
//       $textArea.style.color = "red";
//     }
//   });

//   typingComplete();
// };

// const startTimer = (_) => {
//   $countdown.style.color = "#0f62fe";
//   $countdown.style.backgroundColor = "#ffffff";
//   clearInterval(timer);
//   timer = setInterval(() => {
//     milliseconds += 10;
//     let dateTimer = new Date(milliseconds);
//     $countdown.innerHTML =
//       ("0" + dateTimer.getUTCHours()).slice(-2) +
//       ":" +
//       ("0" + dateTimer.getUTCMinutes()).slice(-2) +
//       ":" +
//       ("0" + dateTimer.getUTCSeconds()).slice(-2) +
//       ":" +
//       ("0" + dateTimer.getUTCMilliseconds()).slice(-3, -1);
//   }, 10);
// };

// const startClock = () => {
//   let inputTextLength = $textArea.value.length;
//   if (inputTextLength === 0) {
//     startTimer();
//   }
//   if ($textArea.value.length === $textToType.innerText.length - 1) {
//     clearInterval(timer);
//   }
// };
// const typingComplete = () => {
//   if ($textArea.value.length === $textToType.innerText.length) {
//     $wrapper.style.backgroundColor = "green";
//     console.log($textArea.value.length);
//     console.log($textToType.innerText.length);
//   } else {
//     $wrapper.style.backgroundColor = "transparent";
//   }
// };

// const init = () => {
//   $textArea.addEventListener("keydown", startClock, false);
//   $textArea.addEventListener("keyup", spellCheck);
// };
// init();
