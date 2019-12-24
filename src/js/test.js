import Team from './app';

test('iteration test', () => {
  const expected1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const expected2 = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const expected3 = {
    name: 'Маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const expected4 = {
    name: 'Демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const teamList = new Team();
  const iterator = teamList[Symbol.iterator]();


  expect(iterator.next().value).toEqual(expected1);
  expect(iterator.next().value).toEqual(expected2);
  expect(iterator.next().value).toEqual(expected3);
  expect(iterator.next().value).toEqual(expected4);
  expect(iterator.done).toBe();
});
