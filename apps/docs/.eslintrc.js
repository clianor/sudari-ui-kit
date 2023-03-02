module.exports = {
  extends: ['custom'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'off',
  },
};
