// module.exports = {
//   process() {
//     return {
//       code: `module.exports = {};`,
//     };
//   },
// };


const path = require("path");

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};