const getSwallowVelocity = (type: "african" | "european"): string => {
  if (type === "african") {
    return "Roughly 11 meters per second.";
  }
  return "I... I don't know that!";
};

const isCatLiquid = (isAsleep: boolean, containerShape: string): boolean => {
  return isAsleep && containerShape !== "none";
};

class Wizard {
  name: string;
  favoriteSpell: string;

  constructor(name: string, favoriteSpell: string) {
    this.name = name;
    this.favoriteSpell = favoriteSpell;
  }

  castSpell(): string {
    return `${this.name} casts ${this.favoriteSpell}!`;
  }
}

console.log(getSwallowVelocity("african")); // "Roughly 11 meters per second."
console.log(getSwallowVelocity("european")); // "I... I don't know that!"');
