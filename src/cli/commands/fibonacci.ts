import { Command, Option } from "clipanion";
import { fibonacciSequence } from "../../fibonacci.js";

export class FibonacciCommand extends Command {
  static paths = [Command.Default];

  static usage = Command.Usage({
    description:
      "Generate a Fibonacci sequence up to the given number of terms.",
    details: "The `n` argument specifies the number of terms to generate.",
    examples: [["Generate 5 terms", "$0 5"]],
  });

  n = Option.String({ name: "n" });

  execute(): Promise<void> {
    const sequence = fibonacciSequence(parseInt(this.n, 10));
    this.context.stdout.write(`${sequence.join(" ")}\n`);
    return Promise.resolve();
  }
}
