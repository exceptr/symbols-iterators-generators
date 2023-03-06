import Team from '../Team';

const user1 = {
  name: 'User1',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const user2 = {
  name: 'User2',
  type: 'Magican',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};


test('Добавление одного персонажа', () => {
  const expectedResult = new Set([user1]);
  const team = new Team();
  team.add(user1);
  expect(team.members).toEqual(expectedResult);
});

test('Добавление одного персонажа несколько раз', () => {
  expect(() => {
    const team = new Team();
    team.add(user1);
    team.add(user1);
  }).toThrowError();
});

test('Добавление нескольких персонажей', () => {
  const expectedResult = new Set([user1, user2]);
  const team = new Team();
  team.addAll(user1, user2);
  expect(team.members).toEqual(expectedResult);
});

test('Конвертация Set в массив', () => {
  const expectedResult = ([user1, user2]);
  const team = new Team();
  team.addAll(user1, user2);
  expect(team.toArray()).toEqual(expectedResult);
});

test('Итерация next, выдаёт по одному персонажу', () => {
  const team = new Team();
  team.addAll(user1, user2);
  expect(team.next().value).toEqual(user1);
  expect(team.next().value).toEqual(user2);
  expect(team.next().value).toEqual(undefined);
});

test('Генератор, выдаёт по одному персонажу', () => {
  const team = new Team();
  const generator = team[Symbol.iterator]();
  team.addAll(user1, user2);
  expect(generator.next().value).toEqual(user1);
  expect(generator.next().value).toEqual(user2);
  expect(generator.next().value).toEqual(undefined);
});
