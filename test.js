import test from 'ava';
import isSinglish from './';

test('Returns rejected promise if input string is not provided', t => {
  t.throws(isSinglish(), 'String required');
});

test('Returns fulfilled promise with true if Singlish is detected', t => {
  return isSinglish('pass la').then(result => {
    t.true(result);
  });
});

test('Returns fulfilled promise with false if Singlish is detected', t => {
  return isSinglish('This should pass').then(result => {
    t.false(result);
  });
});
