import esmock from "esmock";
import { createRequire } from "module";
import path from "path";
import sinon from "sinon";

const require = createRequire(import.meta.url);

const stubs = {
  ping: { promise: { probe: sinon.stub() } },
};

async function mockImport() {
  return esmock("../dist/ping.mjs", {
    [require.resolve("ping").replaceAll(path.sep, "/")]: stubs.ping,
  });
}

it("should not ping the localhost", async () => {
  const { pingLocalhost } = await mockImport("../dist/ping.mjs");
  stubs.ping.promise.probe.resolves({ alive: true });
  pingLocalhost().should.eventually.be.true;
});
