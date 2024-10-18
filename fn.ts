export const fn = {
  add: (a: number, b: number) => a + b,
  makeUser: (name: string, age: number) => ({ name, age }),
  throwErr: () => {
    throw new Error("에러");
  },
};
