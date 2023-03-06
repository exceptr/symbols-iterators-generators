export default class Team {
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

  next() {
    this.membersArr = this.toArray();
    this.to = this.membersArr.length;
    if (this.from < this.to) {
      // eslint-disable-next-line no-plusplus
      return { value: this.membersArr[this.from++], done: false };
    }
    return { value: undefined, done: true };
  }

  * [Symbol.iterator]() {
    this.membersArr = this.toArray();
    for (const member of this.members) {
      yield member;
    }
  }
}
