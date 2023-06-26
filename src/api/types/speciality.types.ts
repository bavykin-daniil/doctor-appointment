// models
import {
  SpecialityModel,
  SpecialityResponseModel,
} from "@root/api/models/speciality.model";
// types
import type { Static } from "runtypes";

export type Speciality = Static<typeof SpecialityModel>;
export type SpecialityResponse = Static<typeof SpecialityResponseModel>;
