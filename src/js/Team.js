export default class Team {
  constructor() {
    this.members = new Set();
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

  [Symbol.iterator]() {
    const membersArr = this.toArray();
    // this.to = this.membersArr.length;
    let currentTeam = 0;
    return {
      next() {
        if (currentTeam < membersArr.length) {
          // eslint-disable-next-line no-plusplus
          return { value: membersArr[currentTeam++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
