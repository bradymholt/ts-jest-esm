import "../src/index";
import { myFunction } from "../src/index";

describe("myFunction", () => {
  it("returns expected string", () => {
    expect(myFunction()).toEqual("Hello World");
  });
});
