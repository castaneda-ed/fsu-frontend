import api from "./api";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "departments",
      transformResponse: (response) => response.departments,
      transformErrorResponse: (response) => response.departments.error,
      providesTags: ["Department"],
    }),
  }),
});

export const { useGetDepartmentsQuery } = departmentApi;
