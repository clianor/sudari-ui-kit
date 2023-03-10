module.exports = {
  extends: ['next', 'turbo', 'airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-key': 'off',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
