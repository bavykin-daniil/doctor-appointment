// models
import {
  DoctorModel,
  DoctorResponseModel,
} from "@root/api/models/doctor.model";
// types
import type { Static } from "runtypes";

export type Doctor = Static<typeof DoctorModel>;
export type DoctorResponse = Static<typeof DoctorResponseModel>;
