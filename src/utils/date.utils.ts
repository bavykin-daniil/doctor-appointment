// utils
import { subYears, differenceInYears } from "date-fns";
// constants
import { LEGAL_AGE } from "@root/constants/date.constants";

export const currentDate = new Date();

export const hundredYearsAgo = subYears(new Date(), 100);

export const isAdultAge = (date: Date | null): boolean => {
  if (date !== null) {
    const age = differenceInYears(currentDate, date);

    return age >= LEGAL_AGE;
  }

  return true;
};
