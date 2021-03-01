const utterance = new SpeechSynthesisUtterance();

let isPlaying;

utterance.lang = "fr-FR";
utterance.rate = 0.7;

utterance.addEventListener("end", () => (isPlaying = false));

export const setText = (text) => {
  utterance.text = text;
};

export const speak = () => {
  if (!isPlaying) {
    isPlaying = !isPlaying;
    return speechSynthesis.speak(utterance);
  }
  isPlaying = false;
  speechSynthesis.cancel();
};
