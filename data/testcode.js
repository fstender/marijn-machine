const code = [
  [0b00110001, 0b00000000, 0b00000000], // Store the number 0 in memory location 0.
  [0b00110001, 0b00000001, 0b00000001], // Store the number 1 in memory location 1.
  [0b00110011, 0b00000001, 0b00000010], // Store the value of memory location 1 in memory location 2.
  [0b01010001, 0b00001011, 0b00000010], // Subtract the number 11 from the value in memory location 2.
  [0b00100010, 0b00000010, 0b00001000], // If the value in memory location 2 is the number 0, continue with instruction 9.
  [0b01000011, 0b00000001, 0b00000000], // Add the value of memory location 1 to memory location 0.
  [0b01000001, 0b00000001, 0b00000001], // Add the number 1 to the value of memory location 1.
  [0b00010000, 0b00000010, 0b00000000], // Continue with instruction 3.
  [0b01100010, 0b00000000, 0b00000000] // Output the value of memory location 0.
];

module.exports = { code };
