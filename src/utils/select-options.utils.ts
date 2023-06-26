// types
import type { City } from "@root/api/types/city.types";
import type { Doctor } from "@root/api/types/doctor.types";
import type { Speciality } from "@root/api/types/speciality.types";
import type { SelectOption } from "@root/types/select-option.types";

export const mapDoctorsToOptions = (doctors: Doctor[] = []): SelectOption[] =>
  doctors.map((doctor) => ({
    id: doctor.id,
    name: doctor.name + " " + doctor.surname,
    value: doctor.name + " " + doctor.surname,
  }));
export const mapSpecialitiesToOptions = (
  specialities: Speciality[] = []
): SelectOption[] =>
  specialities.map((speciality) => ({
    id: speciality.id,
    name: speciality.name,
    value: speciality.name,
  }));
export const mapCitiesToOptions = (cities: City[] = []): SelectOption[] =>
  cities.map((city) => ({
    id: city.id,
    name: city.name,
    value: city.name,
  }));
