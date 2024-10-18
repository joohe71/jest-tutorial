import { fn } from "./fn";
import { test, expect } from "@jest/globals";

// // 성공 케이스 1
// test("1은 1이야.", () => {
//   expect(1).toBe(1);
// });

// // 성공 케이스 2
// test("2 더하기 3은 5야.", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// // 실패 케이스 1
// test("3 더하기 3은 5야.", () => {
//   expect(fn.add(3, 3)).toBe(5);
// });

// 객체는 toBe가 아닌 toStrictEqual을 사용하도록
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

// 소수점 테스트 할 떄 사용 메서드
test("0.1 더하기 0.2 는 0.3 입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World 에 H라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/h/i);
});

// 배열 안에 해당 값이 존재하는지 확인 하는 메서드 : toContain
test("유저리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

// 에러 확인 메서드
test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("잘못된 접근입니다.");
});
