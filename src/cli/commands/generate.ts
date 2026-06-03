import type { CommandModule } from "yargs";
import { fibonacciSequence } from "../../fibonacci.js";

export function createGenerateCommand({
  stdout,
}: {
  stdout: NodeJS.WritableStream;
}): CommandModule<object, { n: number }> {
  return {
    command: "generate <n>",
    describe: "Generate a Fibonacci sequence up to the given number of terms.",
    builder: (y) =>
      y.positional("n", {
        type: "number",
        demandOption: true,
        describe: "The number of terms",
      }),
    handler: (argv) => {
      const sequence = fibonacciSequence(argv.n);
      stdout.write(`${sequence.join(" ")}\n`);
    },
  };
}
