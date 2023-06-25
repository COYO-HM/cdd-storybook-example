import svgr from 'vite-plugin-svgr';

const config = {
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
    async viteFinal(config) {
        (config.plugins).push(svgr());
        return config;
    },
};
export default config;