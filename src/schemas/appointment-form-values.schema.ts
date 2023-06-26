import * as yup from "yup";
// utils
import { checkNumber, onlyString } from "@root/utils/string.utils";
import { currentDate, hundredYearsAgo } from "@root/utils/date.utils";
// constants
import { ERRORS } from "@root/constants/validation-errors.constants";

export const AppointmentFormValuesSchema = yup.object().shape(
  {
    sex: yup.string().required(ERRORS.REQUIRED),
    city: yup.string().required(ERRORS.REQUIRED),
    name: yup
      .string()
      .required(ERRORS.REQUIRED)
      .test("Only string", ERRORS.NOT_CONTAIN_NUMBERS, onlyString),
    email: yup
      .string()
      .email(ERRORS.EMAIL)
      .required(ERRORS.REQUIRED)
      .when("mobile", {
        is: (mobile: string) => !!mobile?.trim(),
        then: (schema) => schema.notRequired(),
      }),
    mobile: yup
      .string()
      .required(ERRORS.REQUIRED)
      .test("Ukrainian number", ERRORS.NUMBER_FORMAT, checkNumber)
      .when("email", {
        is: (email: string) => !!email?.trim(),
        then: (schema) => schema.notRequired(),
      }),
    birthday: yup
      .date()
      .required(ERRORS.REQUIRED)
      .min(hundredYearsAgo, ERRORS.MIN_DATA)
      .max(currentDate, ERRORS.MAX_DATA)
      .nullable(),
    speciality: yup.string().notRequired(),
    doctorFullName: yup.string().required(ERRORS.REQUIRED),
  },
  [["email", "mobile"]]
);
