import { defineConfig } from "tsup";

const isDev = process.env["npm_lifecycle_event"] === "dev";

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["src/**/*.ts"],
    format: ["cjs", "esm"],
    minify: false,
    metafile: !isDev,
    sourcemap: true,
    outDir: "dist",
    splitting: false,
    keepNames: true,
    bundle: false
});