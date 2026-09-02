import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.umd.js",
    format: "umd",
    name: "inBatches",
    sourcemap: true
  },
  plugins: [
    typescript({
      compilerOptions: {
        composite: false,
        declaration: false,
        declarationMap: false,
        module: "ESNext",
        inlineSourceMap: false,
        sourceMap: true
      }
    }),
    terser()
  ]
};
