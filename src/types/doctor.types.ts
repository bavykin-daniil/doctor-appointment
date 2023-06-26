// types
import type { City } from "@root/api/types/city.types";
import type { Doctor } from "@root/api/types/doctor.types";
import type { Speciality } from "@root/api/types/speciality.types";

export type DoctorFilters = {
  cityName: string;
  cities?: City[];
  doctors?: Doctor[];
  birthdate: Date | null;
  specialities?: Speciality[];
  specialityName: string;
};
