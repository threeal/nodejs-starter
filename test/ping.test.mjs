import esmock from "esmock";
import { createRequire } from "module";
import path from "path";
import sinon from "sinon";

const require = createRequire(import.meta.url);

it("should not ping the localhost", async () => {
  const probeStub = sinon.stub();
  const { pingLocalhost } = await esmock("../dist/ping.mjs", {
    [require.resolve("ping").replaceAll(path.sep, "/")]: {
      promise: {
        probe: probeStub,
      },
    },
  });
  probeStub.resolves({ alive: true });
  return pingLocalhost().should.eventually.be.true;
});
