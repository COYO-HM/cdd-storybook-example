
const config = {
    core:{builder:'@storybook/builder-vite'},
    stories: [
        '../src/components/**/*.mdx',
        '../src/components/**/*.stories.@(js|jsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;