// utils
import { isAdultAge } from "@root/utils/date.utils";
// types
import type { Doctor } from "@root/api/types/doctor.types";
import type { DoctorFilters } from "@root/types/doctor.types";

export const filterDoctors = ({
  cities = [],
  doctors = [],
  cityName,
  birthdate,
  specialities = [],
  specialityName,
}: DoctorFilters): Doctor[] => {
  const filter: {
    cityId?: string;
    specialityId?: string;
    isPediatrician?: boolean;
  } = {};

  const city = cities?.filter((city) => city.name === cityName)[0];
  const speciality = specialities?.filter(
    (speciality) => speciality.name === specialityName
  )[0];
  const isPediatrician = isAdultAge(birthdate);

  if (cityName) {
    filter.cityId = city?.id;
  }
  if (birthdate) {
    filter.isPediatrician = isPediatrician;
  }
  if (specialityName) {
    filter.specialityId = speciality.id;
  }

  const keys = Object.keys(filter);

  return doctors?.filter((doctor) => {
    return keys.every((key) => {
      return filter[key as keyof object] === doctor[key as keyof object];
    });
  });
};
