import esmock from "esmock";
import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);

it("should not ping the localhost", async () => {
  const { pingLocalhost } = await esmock("../dist/ping.mjs", {
    [require.resolve("ping").replaceAll(path.sep, "/")]: {
      promise: {
        probe: async () => ({ alive: true }),
      },
    },
  });
  return pingLocalhost().should.eventually.be.true;
});
