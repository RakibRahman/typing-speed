const Text = ((_) => {
  const para = [
    "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",

    "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.",

    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",

    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",

    "When to use iterative development? You should use iterative development only on projects that you want to succeed.",

    "Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.",

    "Thinking you’re no-good and worthless is the worst thing you can do",
    "Don’t give up, there’s no shame in falling down! True shame is to not stand up again!",
  ];
  const randomPara = (_) => {
    const pick = Math.floor(Math.random() * para.length);
    return para[pick];
  };
  return {
    randomPara,
  };
})();
export default Text;
