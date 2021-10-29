module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.setBrowserSyncConfig({
        files: './dist/css/**/*.css'
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            layouts: "_layouts"
        }
    };
};