import {
  Union,
  Array,
  Number,
  Record,
  String,
  Literal,
  Optional,
} from "runtypes";

const GenderUnion = Union(Literal("Male"), Literal("Female"));

export const SpecialityModel = Record({
  id: String,
  name: String,
  params: Optional(
    Record({
      maxAge: Optional(Number),
      gender: Optional(GenderUnion),
    })
  ),
});

export const SpecialityResponseModel = Array(SpecialityModel);
