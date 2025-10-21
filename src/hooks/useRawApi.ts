import Service from "@/core/service";
import Config from "@/global/config";

export function useRawApi() {
  return (url: string) => {
    Config.instance().useBaseURL = false;
    return new Service(url);
  };
}

export default useRawApi;
