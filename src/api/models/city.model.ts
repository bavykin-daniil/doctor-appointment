import { Array, Record, String } from "runtypes";

export const CityModel = Record({
  id: String,
  name: String,
});

export const CityResponseModel = Array(CityModel);
