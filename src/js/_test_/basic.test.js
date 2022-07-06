import personage from '../app';

test('level 90', () => {
  const result = personage({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('level 50', () => {
  const result = personage({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('level 15', () => {
  const result = personage({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});

test('level 10', () => {
  const result = personage({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});
