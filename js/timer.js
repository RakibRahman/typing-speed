const Timer = ((_) => {
  const $wrapper = document.querySelector(".wrapper");
  const $countdown = $wrapper.querySelector(".wrapper__countdown");

  let milliseconds = 0;
  let timer;

  const countStart = (_) => {
    $countdown.style.backgroundColor = "lime";
    clearInterval(timer);

    timer = setInterval(() => {
      milliseconds += 10;
      let clock = new Date(milliseconds);

      $countdown.innerHTML = `   
     <span> ${("0" + clock.getUTCMinutes()).slice(-2)}:</span><span> ${(
        "0" + clock.getUTCSeconds()
      ).slice(-2)}:</span><span>${("0" + clock.getUTCMilliseconds()).slice(
        -3,
        -1
      )} </span>
      `;
    }, 10);
  };
  const countPause = (_) => {
    clearInterval(timer);
  };
  const countReset = (_) => {
    clearInterval(timer);
    milliseconds = 0;
    $countdown.innerHTML = "00: 00: 00";
  };
  return {
    countStart,
    countPause,
    countReset,
  };
})();
export default Timer;
