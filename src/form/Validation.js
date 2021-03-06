import _ from 'lodash';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value => (value && value.length > max ? `With ${max} characters or less` : undefined);
const maxLength20 = maxLength(20);
const maxLength11 = maxLength(11);
const minLength = min => value => (value && value.length < min ? `With ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const number = value => (value && _.isNaN(Number(value))
  ? 'Please check your mobile number.'
  : undefined);
const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Please check your E-mail address.'
  : undefined);

export default {
  required,
  maxLength20,
  maxLength11,
  minLength8,
  number,
  email,
};
