import esmock from "esmock";
import sinon from "sinon";

describe("localhost ping", () => {
  const stubs = {
    ping: { promise: { probe: sinon.stub() } },
  };

  const mockImport = () => esmock("../dist/ping.mjs", { ping: stubs.ping });

  it("should ping the localhost", async () => {
    const { pingLocalhost } = await mockImport();
    stubs.ping.promise.probe.resolves({ alive: true });
    pingLocalhost().should.eventually.be.true;
  });

  it("should not ping the localhost", async () => {
    const { pingLocalhost } = await mockImport();
    stubs.ping.promise.probe.resolves({ alive: false });
    pingLocalhost().should.eventually.be.false;
  });
});
