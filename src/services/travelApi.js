import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const hotelsApiHeaders = {
  "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  "X-RapidAPI-Key": "2aca2883ccmsha30c691d132f478p12d213jsnd28011583fd9",
};
const baseUrl = "https://travel-advisor.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: hotelsApiHeaders });
export const locationsApi = createApi({
  reducerPath: "locationsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: (title) => createRequest(`/locations/search?query=${title}`),
    }),
    getRestaurants: builder.query({
      query: (locationId) =>
        createRequest(`/restaurants/list?location_id=${locationId}`),
    }),
  }),
});

export const { useGetLocationsQuery, useGetRestaurantsQuery } = locationsApi;
