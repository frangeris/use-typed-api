import { Services } from "@/types";
import Context from "@/global/context";

export function useTypedApi<T>() {
  const ctx = Context?.();
  if (!ctx) {
    throw new Error(
      "Seems like you need to initialize the library first, before using useTypedApi hook"
    );
  }

  return ctx.services as Services<T>;
}

export default useTypedApi;
