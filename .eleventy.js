module.exports = function(eleventyConfig) 
{
    // Copy static assets directly to build folder
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: {
            input: "src",
            output: "_site",
            data: "../data"
        }
    };
};
