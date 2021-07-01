const Text = ((_) => {
  const para = [
    "Firefighters what meditation truck stuck ramps srirachaliveedge. Green godard hella fingerstache williamsburg. Palo batch quinoa belly coloring. Everyday mug offal cliche. Roof youll party readymadebraid truck great i people. Dont af. Tousled.",
    "Leggings air knock. Hashtag literally. Greatest shaman take mumblecore mustache food. Palo seitan bad viral freegan bottle wolf swag satisfied. Celiac everyday put copper thundercats yr yr work fill austin. Actually.",
    "Snackwave occupy locavore shaman af. What mumblecore direct. Scenester mumblecore.As godard disrupt austin put tote tofu.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
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
