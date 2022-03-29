const grid = require("./alphabeticalGrid");

// describe("Basic Tests", function () {
//   test("Valid tests", function () {
//     expect(grid(0)).toStrictEqual("");
//     expect(grid(1)).toStrictEqual("a");
//     expect(grid(2)).toStrictEqual("a b\nb c");
//     expect(grid(4)).toStrictEqual("a b c d\nb c d e\nc d e f\nd e f g");
//     expect(grid(6)).toStrictEqual(
//       "a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k"
//     );
//   });
//   test("Invalid tests", function () {
//     expect(grid(-1)).toStrictEqual(null);
//     expect(grid(-5)).toStrictEqual(null);
//   });
// });

const sol = (N) =>
  N < 0
    ? null
    : Array.from(Array(N), (_, y) =>
        Array.from(
          Array(N),
          (_, x) => "abcdefghijklmnopqrstuvwxyz"[(x + y) % 26]
        ).join(" ")
      ).join("\n");

describe("Basic Tests", function () {
  test("Tests for 0-50", function () {
    for (let i = 0; i < 51; i++) {
      let res = sol(i);
      expect(grid(i)).toStrictEqual(res);
    }
  });
});

function shuffle(a) {
  let i = a.length;
  while (i !== 0) {
    let r = Math.floor(Math.random() * i);
    i -= 1;
    let tmp = a[i];
    a[i] = a[r];
    a[r] = tmp;
  }
}

describe("Random Tests", function () {
  test("Random tests", function () {
    let randomTests = [...Array(126).keys()].map((x) => x - 25);
    shuffle(randomTests);
    for (let r of randomTests) {
      let res = sol(r);
      expect(grid(r)).toStrictEqual(res);
    }
  });
});
