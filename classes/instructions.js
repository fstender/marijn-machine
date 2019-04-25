const instructions = [
    {
      id: 1,
      name: "MOV VAL",
      opcode: 0b00110001
    },
    {
      id: 2,
      name: "MOV MEM",
      opcode: 0b00110011
    },
    {
      id: 3,
      name: "SUB",
      opcode: 0b01010001
    },
    {
      id: 4,
      name: "JNZ",
      opcode: 0b00100010
    },
    {
      id: 5,
      name: "ADD MEM",
      opcode: 0b01000011
    },
    {
      id: 6,
      name: "ADD VAL",
      opcode: 0b01000001
    },
    {
      id: 7,
      name: "JMP",
      opcode: 0b00010000
    },
    {
      id: 8,
      name: "OUT",
      opcode: 0b01100010
    }
  ];

  module.exports = { instructions };
  