import * as chai from "chai";
import { isOdd, isEven } from "../dist/index.mjs";

chai.should();

it("should be odd", () => {
  const val = 5;
  isOdd(val).should.equal(true);
  isEven(val).should.equal(false);
});

it("should be even", () => {
  const val = 6;
  isOdd(val).should.equal(false);
  isEven(val).should.equal(true);
});
