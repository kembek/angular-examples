import { greet } from "../greet";

describe("greet function", () => {
  it("should contain and return the message with a name", () => {
    const message = greet("Angular");

    expect(message).toContain("Angular");
  });
});
