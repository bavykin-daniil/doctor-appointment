// types
import type { RequestParams } from "@root/types/request.types";
// constants
import { HttpMethod } from "@root/constants/http-methods.constants";
import { ContentType } from "@root/constants/content-type.constants";
import { API_VERSION, BASE_URL } from "@root/constants/api.constants";

export const request = async <Payload = unknown, Response = unknown>({
  path,
  type = ContentType.JSON,
  body,
  method = HttpMethod.GET,
}: RequestParams<Payload>): Promise<Response> => {
  const options = {
    body: body ? JSON.stringify({ ...(body || {}) }) : null,
    method,
    headers: new Headers(),
  };

  options.headers.set("Content-Type", type);

  return fetch(`${BASE_URL}${API_VERSION}${path}`, options).then(
    async (response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Something went wrong!");
    }
  );
};
