import { hello_world } from "../utils/util";

describe("hello_world", () => {
  it("should return Hello World!", () => {
    expect(hello_world()).toBe("Hello World!");
  });
  it("should return Hello World! every time", () => {
    expect(hello_world()).toBe("Hello World!");
    expect(hello_world()).toBe("Hello World!");
    expect(hello_world()).toBe("Hello World!");
  });
});
