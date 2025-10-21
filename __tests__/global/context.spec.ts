import type { Context } from "@/types";
import context from "@/global/context";
import initialize from "@/core/initialize";

const dummy: Context = {
  TypedApi: {
    config: { baseURL: "https://test.io", endpoints: {} },
    services: {},
  },
};

describe("global context", () => {
  beforeEach(() => {
    initialize({ baseURL: "https://test.io", endpoints: {} });
  });

  it("should return the TypedApi property from globalThis", () => {
    const result = context();
    expect(result).toEqual(dummy.TypedApi);
  });
});
