const { processor } = require("./classes/processor");
const { code } = require("./data/testcode");

// Reserve 4 Bytes of RAM
const memory = new Int8Array(4);

// Run the code
let result = processor(code, memory, true);
if (result.code) {
  console.log("ERROR: " + result);
} else {
  console.log(result.output);
}
