const printerError = require("./printerError");

describe("printerError", function () {
  test("Basic tests", function () {
    let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    expect(printerError(s)).toEqual("3/56");
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    expect(printerError(s)).toEqual("6/60");
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu";
    expect(printerError(s)).toEqual("11/65");
    s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm";
    expect(printerError(s)).toEqual("0/53");
  });
});
