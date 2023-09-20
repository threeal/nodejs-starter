import { jest } from "@jest/globals";
import sinon from "sinon";

const stubs = {
  ping: { promise: { probe: sinon.stub() } },
};

jest.unstable_mockModule("ping", () => ({
  default: stubs.ping,
}));

describe("localhost ping", () => {
  it("should ping the localhost", async () => {
    const { pingLocalhost } = await import("../dist/ping.mjs");
    stubs.ping.promise.probe.resolves({ alive: true });
    expect(pingLocalhost()).resolves.toBe(true);
  });

  it("should not ping the localhost", async () => {
    const { pingLocalhost } = await import("../dist/ping.mjs");
    stubs.ping.promise.probe.resolves({ alive: false });
    expect(pingLocalhost()).resolves.toBe(false);
  });
});
