import api from "./api";
import { selectToken } from "./authSlice"; // Import your token selector

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "/departments",
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Department"],
    }),
    getDepartment: build.query({
      query: (id) => `departments/${id}`,
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Department"],
    }),
    postDepartment: build.mutation({
      query: (newDepartment) => ({
        url: "/departments",
        method: "POST",
        body: newDepartment,
      }),
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `/departments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Department"],
    }),
    updateDepartment: build.mutation({
      query: (id, updatedDepartment) => ({
        url: `/departments/${id}`,
        method: "PATCH",
        body: updatedDepartment,
      }),
      invalidatesTags: ["Department"],
    }),
  }),
});

// Use prepareHeaders to add the token to the headers
api.enhanceEndpoints({
  addTagTypes: ["Department"],
  prepareHeaders: (headers, { getState }) => {
    const token = selectToken(getState()); // Get the token from the Redux store
    if (token) {
      headers.set("Authorization", `Bearer ${token}`); // Set the Authorization header
    }
    return headers; // Return the modified headers
  },
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  usePostDepartmentMutation,
  useDeleteDepartmentMutation,
  useUpdateDepartmentMutation,
} = departmentApi;
