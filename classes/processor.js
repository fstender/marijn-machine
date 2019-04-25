const { instructions } = require("./instructions");

const processor = (fn = (code, memory, debug) => {
  let programCounter = 0;
  let output = "";

  for (;;) {
    // Exit when we reach the end of the code
    if (programCounter >= code.length) {
      return {
        code: 0,
        programCounter,
        message: "",
        output
      };
    }
    let line = code[programCounter];

    // Get opcode and parameters
    let opcode = line[0];
    let p1 = line[1];
    let p2 = line[2];

    let instruction = instructions.find(function(i) {
      return i.opcode === opcode;
    });

    // Opcode not found
    if (instruction === undefined) {
      return {
        code: 1,
        programCounter,
        message: `Opcode not found: ${opcode}`,
        output
      };
    }

    if (debug) {
      console.log(`${programCounter}: ${instruction.name} ${p1} ${p2}`);
    }

    switch (instruction.id) {
      case 1:
        // Store the number p1 in memory location p2
        memory[p2] = p1;
        break;
      case 2:
        // Store the value of memory location p1 in memory location p2
        memory[p2] = memory[p1];
        break;
      case 3:
        // Subtract the number p1 from the value in memory location p2
        memory[p2] -= p1;
        break;
      case 4:
        // If the value in memory location p1 is the number 0, continue with instruction p2
        if (memory[p1] === 0) {
          programCounter = p2;
          continue;
        }
        break;
      case 5:
        // Add the value of memory location p1 to memory location p2
        memory[p2] += memory[p1];
        break;
      case 6:
        // Add the number p1 to the value of memory location p2
        memory[p2] += p1;
        break;
      case 7:
        // Continue with instruction p1
        programCounter = p1;
        continue;
      case 8:
        // Output the value of memory location p1
        if (debug) {
          console.log(`==> ${memory[p1]}`);
        }
        output += `${memory[p1]}\n`;
        break;
      default:
        // Instruction not found
        return {
          code: 2,
          programCounter,
          message: `Undefined instruction: ${instruction.id}`,
          output
        };
    }

    // Continue with the next instruction
    programCounter += 1;
  }
});

module.exports = { processor };
