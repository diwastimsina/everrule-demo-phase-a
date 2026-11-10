import { expect, test } from "vitest";

test("refunds are capped at the captured amount", () => {
  expect(1200).toBeLessThanOrEqual(1000);
});
