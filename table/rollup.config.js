import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

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
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
                plugins: ['@babel/plugin-proposal-class-properties']
            }),
            terser()
        ]
    }
]