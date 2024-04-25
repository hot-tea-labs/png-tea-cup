const { randomTeaCup } = require('@hot-tea-labs/cup-of-tea');
const fs = require('fs');

/**
 * Generates a PNG image of a tea cup and save to file.
 * @param {string} outputFileName - Name of the output PNG file.
 */
function saveRandomTeaCupPNG(outputFileName) {
  generateRandomTeaCupPNG(outputFileName);
}

// Export the function for use as an npm package
module.exports = { saveRandomTeaCupPNG };