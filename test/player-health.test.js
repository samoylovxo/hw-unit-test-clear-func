/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import checkingLife from '../src/js/app';

test('checkingLife >50', () => {
  const result = checkingLife({ name: 'Маг', health: 60 });
  expect(result).toBe('healthy');
});

test('checkingLife =50', () => {
  const result = checkingLife({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('checkingLife <50', () => {
  const result = checkingLife({ name: 'Маг', health: 30 });
  expect(result).toBe('wounded');
});

test('checkingLife =15', () => {
  const result = checkingLife({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('checkingLife >15', () => {
  const result = checkingLife({ name: 'Маг', health: 20 });
  expect(result).toBe('wounded');
});

test('checkingLife <15 || other', () => {
  const result = checkingLife({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
