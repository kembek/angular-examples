import { compute } from "../compute";

describe("compute function", () => {
  it("should return zero for negative number", () => {
    const result = compute(-1);

    expect(result).toBe(0);
  });

  it("should increment positive number", () => {
    const result = compute(1);

    expect(result).toBe(2);
  });
});
