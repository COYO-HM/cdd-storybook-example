import {defineConfig} from "rollup";

export default defineConfig({
    plugins: [svgr({ svgrOptions: { plugins: ['@svgr/plugin-svgo'] } })],
});