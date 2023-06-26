// types
import type { Speciality } from "@root/api/types/speciality.types";

export const filterSpecialities = (
  sex: string,
  specialities: Speciality[] = []
): Speciality[] => {
  if (!sex) {
    return specialities;
  }

  return specialities.filter(
    (speciality) =>
      speciality.params?.gender === sex || speciality.params === undefined
  );
};
