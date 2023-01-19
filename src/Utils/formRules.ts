const FormRules = {
  username: {
    required: 'Username cannot be empty',
    minLength: {
      value: 3,
      message: 'Username should 3 charecters long',
    },
    pattern: {
      value: new RegExp('[a-zA-Z0-9]$'),
      message: 'Username should only contains letters numbers and underscores',
    },
  },
  email: {
    required: 'Email cannot be empty',
    pattern: {
      value: new RegExp(/^\S+@\S+$/i),
      message: 'Invalid Email',
    },
  },
  password: {
    required: 'Password cannot be empty',
    minLength: {
      value: 3,
      message: 'Password should 3 charecters long',
    },
    maxLength: {value: 24, message: 'Password too long'},
  },
};
export default FormRules;
