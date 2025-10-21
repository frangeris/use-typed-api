import type { ServiceConfig, ServiceMap } from "@/types";
import Service from "@/core/service";
import Config from "@/global/config";
import Context from "@/global/context";

export function initialize(config: ServiceConfig) {
  Config.instance(config);

  // create service client per endpoint with shared options
  const { endpoints } = config;
  const services: ServiceMap = {};
  for (const key in endpoints) {
    Object.assign(services, {
      [key]: new Service<unknown>(endpoints[key]),
    });
  }

  const ctx = Context?.();
  if (
    typeof ctx?.services === "undefined" ||
    typeof ctx?.config === "undefined"
  ) {
    Object.defineProperty(globalThis, "TypedApi", {
      value: { services, config },
      enumerable: false,
      configurable: true,
      writable: true,
    });
  }
}

export default initialize;
