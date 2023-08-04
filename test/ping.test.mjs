import { pingLocalhost } from "../dist/ping.mjs";

it("should ping the localhost", () => {
  return pingLocalhost().should.eventually.be.true;
});
