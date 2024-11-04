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

// 비동기 테스트 => done callback 함수 사용하도록
test("3초 후에 받아온 이름은 Mike", (done) => {
  const getName = (name: string) => {
    expect(name).toBe("Mike");
    done();
  };
  fn.getName(getName);
});

// resolves, rejects
test("3초 후에 받아온 나이는 30", () => {
  //   return fn.getAge().then((age) => {
  //     expect(age).toBe(30);
  //   });
  return expect(fn.getAge()).resolves.toBe(30);
});

// async await
test("3초 후에 받아온 나이는 30", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
  // await expect(fn.getAge()).resolves.toBe(30)
});

describe("Car 관련 작업", () => {
  let car;
  beforeAll(async () => {
    car = await fn.connectCarDb();
  });
  afterAll(() => {
    return fn.disConnectCarDb();
  });

  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("bmw");
  });
});

let num = 0;
// test.only는 해당 테스트만 단독 실행 된다.
// skip은 해당 테스트 스킵
test("0 더하기 1은 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test.skip("0 더하기 2는 2", () => {
  expect(fn.add(num, 2)).toBe(2);
  num = 10;
});
test("0 더하기 3은 3", () => {
  expect(fn.add(num, 3)).toBe(3);
});

const mockFn = jest.fn();
mockFn.mockReturnValue({ name: "Mike", age: 15 });

test("유저를 만든다", () => {
  const user = mockFn();
  expect(user.name).toBe("Mike");
});
