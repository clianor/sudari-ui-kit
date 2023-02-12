/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    interactionsDebugger: true,
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
      propFilter: (prop) => {
        if (prop.name === 'children') {
          return false;
        }
        if (prop.parent) {
          return (
            !/@types\/react/.test(prop.parent.fileName) &&
            !/@emotion/.test(prop.parent.fileName) &&
            !/twin.macro/.test(prop.parent.fileName)
          );
        }
        return true;
      },
      include: ['**/**.tsx'],
    },
  },
};
export default config;
