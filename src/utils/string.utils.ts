// constants
import {
  onlyStringRegExp,
  ukrainianPhoneNumberRegex,
} from "@root/constants/string.constants";

export const onlyString = (value: string): boolean =>
  onlyStringRegExp.test(value);

export const checkNumber = (value: string): boolean =>
  ukrainianPhoneNumberRegex.test(value);
