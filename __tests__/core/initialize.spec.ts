import type { Context } from "@/types";
import { initialize } from "@/core/initialize";
import Service from "@/core/service";
import Config from "@/global/config";
import useTypedApi from "@/hooks/useTypedApi";

enum Test {
  endpoint1 = "/endpoint1",
  endpoint2 = "/endpoint2",
  endpoint3 = "/endpoint3",
}

describe("init", () => {
  const baseURL = "http://api.example.io";
  beforeEach(() => {
    jest.clearAllMocks();
    initialize({ baseURL, endpoints: Test });
  });

  it("should set the baseURL correctly", () => {
    expect(Config.instance().baseURL).toBe(baseURL);
  });

  it("should define globalThis.TypedApi correctly", () => {
    const ctx = globalThis as unknown as Context;
    expect(ctx.TypedApi).toBeDefined();
  });

  it("should create services correctly", () => {
    const svs = useTypedApi<typeof Test>();
    expect(svs.endpoint1).toBeDefined();
    expect(svs.endpoint1).toBeInstanceOf(Service);

    expect(svs.endpoint2).toBeDefined();
    expect(svs.endpoint2).toBeInstanceOf(Service);

    expect(svs.endpoint3).toBeDefined();
    expect(svs.endpoint3).toBeInstanceOf(Service);
  });
});
