// constants
import { HttpMethod } from "@root/constants/http-methods.constants";
import { ContentType } from "@root/constants/content-type.constants";

export type RequestParams<Payload> = {
  path: string;
  method?: HttpMethod;
  type?: ContentType;
  body?: Payload;
  params?: Payload;
};
