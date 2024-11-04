export const fn = {
  add: (a: number, b: number) => a + b,
  makeUser: (name: string, age: number) => ({ name, age }),
  throwErr: () => {
    throw new Error("에러");
  },
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ brand: "bmw", name: "z4", color: "red" });
      }, 500);
    });
  },
  disConnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({});
      }, 500);
    });
  },
};
