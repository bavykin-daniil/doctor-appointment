// models
import { CityModel, CityResponseModel } from "@root/api/models/city.model";
// types
import type { Static } from "runtypes";

export type City = Static<typeof CityModel>;
export type CityResponse = Static<typeof CityResponseModel>;
