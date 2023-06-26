import { Array, Record, String, Boolean } from "runtypes";

export const DoctorModel = Record({
  id: String,
  name: String,
  surname: String,
  specialityId: String,
  isPediatrician: Boolean,
  cityId: String,
});

export const DoctorResponseModel = Array(DoctorModel);
