// utils
import { request } from "@root/api/resources/core";
// models
import { CityResponseModel } from "@root/api/models/city.model";
// types
import { CityResponse } from "@root/api/types/city.types";

export const getCities = async () => {
  const response = await request<NonNullable<unknown>, CityResponse>({
    path: "/9fcb58ca-d3dd-424b-873b-dd3c76f000f4",
  });

  return CityResponseModel.check(response);
};
