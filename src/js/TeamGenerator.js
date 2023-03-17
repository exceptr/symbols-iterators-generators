export default class TeamGenerator {
  constructor() {
    this.members = new Set();
    this.from = 0;
    this.to = 0;
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Выбранный персонаж уже есть в команде');
    } else this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(
      (character) => this.members.add(character),
    );
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    this.membersArr = this.toArray();
    for (const member of this.membersArr) {
      yield member;
    }
  }
}
