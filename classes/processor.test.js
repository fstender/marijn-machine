const { processor, programCounter } = require("./processor");

const memory = new Int8Array(4);

test("no code doesn't return error", () => {
  const code = [];
  const result = processor(code, memory);
  expect(result.code).toBe(0);
});

test("no code doesn't increase programCounter", () => {
  const code = [];
  const result = processor(code, memory);
  expect(result.programCounter).toBe(0);
});

test("one line is one step", () => {
  const code = [ [ 0b00110001, 0, 0]];
  const result = processor(code, memory);
  expect(result.code).toBe(0);
  expect(result.programCounter).toBe(1);
});
