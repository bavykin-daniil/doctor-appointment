import { useQuery } from "react-query";
// utils
import { getDoctors } from "@root/api/resources/doctor";
// types
import type { DoctorResponse } from "@root/api/types/doctor.types";

const useDoctorsHook = () =>
  useQuery<DoctorResponse>({
    queryKey: ["doctors"],
    queryFn: getDoctors,
    retry: 1,
  });

export default useDoctorsHook;
