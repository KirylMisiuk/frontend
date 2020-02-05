const now = new Date();
const required = (value) => (value ? undefined : 'Required');
const checkString = (value) => (/[^A-Za-z\d]/.test(value) ? 'Please enter only letter and numeric characters' : undefined);
const dateLength = (value) => (value.length === 4 ? undefined : 'Must be 4 characters or more');
const date = (value) => ((value > now.getFullYear() || value < 1000) ? 'incorrect date!' : undefined);
export {
  required,
  checkString,
  dateLength,
  date,
};
