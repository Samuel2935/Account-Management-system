import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token =
        getState()?.auth?.userInfo?.token || getState()?.auth?.token || null;
      // console.log(getState());
      if (token) {
        return headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["Users"],
  endpoints: () => ({}),
});
