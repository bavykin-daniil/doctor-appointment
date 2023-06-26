import { useQuery } from "react-query";
// utils
import { getCities } from "@root/api/resources/city";
// types
import type { CityResponse } from "@root/api/types/city.types";

const useDoctorsHook = () =>
  useQuery<CityResponse>({
    queryKey: ["cities"],
    queryFn: getCities,
    retry: 1,
  });

export default useDoctorsHook;
