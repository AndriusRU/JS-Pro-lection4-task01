import getHealth from '../basic';

test('test green level of health', () => {
  const data = {
    name: 'wizard',
    health: 90,
  };
  const result = getHealth(data);

  expect(result).toBe('healthy');
});

test('test yellow level of health', () => {
  const data = {
    name: 'wizard',
    health: 40,
  };
  const result = getHealth(data);

  expect(result).toBe('wounded');
});

test('test red level of health', () => {
  const data = {
    name: 'wizard',
    health: 10,
  };
  const result = getHealth(data);

  expect(result).toBe('critical');
});
