import esmock from "esmock";
import { createRequire } from "module";
import path from "path";
import sinon from "sinon";

const require = createRequire(import.meta.url);

describe("localhost ping", () => {
  const stubs = {
    ping: { promise: { probe: sinon.stub() } },
  };

  const mockImport = () =>
    esmock("../dist/ping.mjs", {
      [require.resolve("ping").replaceAll(path.sep, "/")]: stubs.ping,
    });

  it("should ping the localhost", async () => {
    const { pingLocalhost } = await mockImport("../dist/ping.mjs");
    stubs.ping.promise.probe.resolves({ alive: true });
    pingLocalhost().should.eventually.be.true;
  });

  it("should not ping the localhost", async () => {
    const { pingLocalhost } = await mockImport("../dist/ping.mjs");
    stubs.ping.promise.probe.resolves({ alive: false });
    pingLocalhost().should.eventually.be.false;
  });
});
