import { fn } from "./fn";
import { test, expect } from "@jest/globals";

// 성공 케이스 1
test("1은 1이야.", () => {
  expect(1).toBe(1);
});

// 성공 케이스 2
test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// 실패 케이스 1
test("3 더하기 3은 5야.", () => {
  expect(fn.add(3, 3)).toBe(5);
});
