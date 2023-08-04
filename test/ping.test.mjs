import "chai/register-should.js";
import { pingLocalhost } from "../dist/ping.mjs";

it("should ping the localhost", async () => {
  const isAlive = await pingLocalhost();
  isAlive.should.be.true;
});
