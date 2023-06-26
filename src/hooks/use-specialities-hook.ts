import { useQuery } from "react-query";
// utils
import { getSpecialities } from "@root/api/resources/doctor";
// types
import type { SpecialityResponse } from "@root/api/types/speciality.types";

const useSpecialitiesHook = () =>
  useQuery<SpecialityResponse>({
    queryKey: ["specialities"],
    queryFn: getSpecialities,
    retry: 1,
  });

export default useSpecialitiesHook;
