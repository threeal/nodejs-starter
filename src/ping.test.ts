import { jest } from "@jest/globals";

const mockedPing = { promise: { probe: jest.fn() } };

jest.unstable_mockModule("ping", () => ({
  default: mockedPing,
}));

describe("localhost ping", () => {
  it("should ping the localhost", async () => {
    const { pingLocalhost } = await import("./ping.mjs");
    mockedPing.promise.probe.mockReturnValue(Promise.resolve({ alive: true }));
    return expect(pingLocalhost()).resolves.toBe(true);
  });

  it("should not ping the localhost", async () => {
    const { pingLocalhost } = await import("./ping.mjs");
    mockedPing.promise.probe.mockReturnValue(Promise.resolve({ alive: false }));
    return expect(pingLocalhost()).resolves.toBe(false);
  });
});
