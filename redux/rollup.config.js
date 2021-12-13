import babel from "@rollup/plugin-babel";

import postcss from "rollup-plugin-postcss";

import { terser } from "rollup-plugin-terser";

import path from "path";

const postCSSOptions = {
    sourceMap: false,
    extract: path.resolve("dist/hfn-components.min.css"),
    minimize: true
};

export default [
    {
        input: "./src/index.js",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                exports: "named"
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named"
            }
        ],
        plugins: [
            babel({
                exclude: "node_modules/**, src/**",
                presets: ["@babel/preset-react"]
            }),
            postcss(postCSSOptions),
            terser()
        ]
    }
]