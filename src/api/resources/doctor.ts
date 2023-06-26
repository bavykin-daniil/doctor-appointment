// utils
import { request } from "@root/api/resources/core";
// models
import { DoctorResponseModel } from "@root/api/models/doctor.model";
import { SpecialityResponseModel } from "@root/api/models/speciality.model";
// types
import { DoctorResponse } from "@root/api/types/doctor.types";
import { SpecialityResponse } from "@root/api/types/speciality.types";

export const getDoctors = async () => {
  const response = await request<NonNullable<unknown>, DoctorResponse>({
    path: "/3d1c993c-cd8e-44c3-b1cb-585222859c21",
  });

  return DoctorResponseModel.check(response);
};

export const getSpecialities = async () => {
  const response = await request<NonNullable<unknown>, SpecialityResponse>({
    path: "/e8897b19-46a0-4124-8454-0938225ee9ca",
  });

  return SpecialityResponseModel.check(response);
};
