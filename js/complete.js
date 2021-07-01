const TypingComplete = (() => {
  const $wrapper = document.querySelector(".wrapper");
  const $textToType = $wrapper.querySelector(".wrapper__text");
  const $textArea = $wrapper.querySelector("#inputText");
  const $countdown = $wrapper.querySelector(".wrapper__countdown");

  let timeToComplete = ``;
  let array = [];

  const isCompleted = (a1, a2) => {
    if (JSON.stringify(a1) === JSON.stringify(a2)) {
      $wrapper.style.backgroundColor = "green";
      $textArea.setAttribute("disabled", "true");
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
    isCompleted,
  };
})();
export default TypingComplete;