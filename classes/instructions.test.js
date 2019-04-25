const { instructions } = require("./instructions");

test("there are 8 instructions", () => {
  expect(instructions.length).toBe(8);
});

test("all instructions are unique", () => {
  instructions.map(template => {
    let instances = instructions.filter(function(i) {
      return i.opcode === template.opcode;
    });
    expect(instances.length).toBe(1);
  });
});

test("all ids are unique", () => {
  instructions.map(template => {
    let instances = instructions.filter(function(i) {
      return i.id === template.id;
    });
    expect(instances.length).toBe(1);
  });
});

test("all names are unique", () => {
  instructions.map(template => {
    let instances = instructions.filter(function(i) {
      return i.name === template.name;
    });
    expect(instances.length).toBe(1);
  });
});
