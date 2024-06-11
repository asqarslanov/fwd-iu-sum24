main();
function main(): void {
  putSyllableBreaks();
}

function putSyllableBreaks(): void {
  const SELECTOR: string = "div.pronunciation div";
  const matches = document.querySelectorAll<HTMLSpanElement>(SELECTOR);

  for (const pronunciation of matches) {
    for (const word of pronunciation.children) {
      const result = wordWithSyllableBreaks(word as HTMLSpanElement);
      word.innerHTML = result.innerHTML;
    }
  }
}

function wordWithSyllableBreaks(word: HTMLSpanElement): HTMLSpanElement {
  const newWord = document.createElement("span");
  newWord.appendChild(word.firstElementChild!.cloneNode(true));

  const syllables = Array.from(word.children).slice(1);

  for (const syllable of syllables) {
    const syllableBreak = document.createElement("span");
    syllableBreak.className = "syllable-break";
    syllableBreak.innerHTML = "·";

    newWord.appendChild(syllableBreak);
    newWord.appendChild(syllable.cloneNode(true));
  }

  return newWord;
}

function playAudio(id: string): void {
  const audio = document.getElementById(id)! as HTMLAudioElement;
  audio.play();
}
