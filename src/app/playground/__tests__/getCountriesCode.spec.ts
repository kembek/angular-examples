import { getCountriesCode } from "../getCountriesCode";

describe("getCountriesCode function", () => {
  it("should contain countries code", () => {
    const result = getCountriesCode();

    expect(result).toContain("KG");
    expect(result).toContain("KZ");
    expect(result).toContain("CH");
  });
});
