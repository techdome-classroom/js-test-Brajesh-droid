function decodeTheRing(input, pattern) {
  if (input.length !== pattern.length) return false;

  for (let i = 0; i < input.length; i++) {
      if (pattern[i] !== '*' && pattern[i] !== input[i]) {
          return false;
      }
  }
  return true;
}

const tests = [
  { input: "hello", pattern: "h*llo", expected: true },
  { input: "secret", pattern: "sec?", expected: false },
  { input: "codeword", pattern: "c*de", expected: false }
];

tests.forEach((test, index) => {
  const result = decodeTheRing(test.input, test.pattern);
  console.log(`Test ${index + 1}: Expected ${test.expected}, got ${result}`);
  console.assert(result === test.expected, `Test ${index + 1} failed`);
});

// node program2.js