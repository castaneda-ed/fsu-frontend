import React from "react";
import { useParams } from "react-router-dom";
import { useGetDepartmentQuery } from "../../store/departmentSlice";

// export default function Professor() {
export default function DepartmentDetails() {
  const { id } = useParams();
  const { data: department, isLoading } = useGetDepartmentQuery(id);
  console.log(department);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Department Details</h1>
      <ul>
        <li>
          <h2>{department.name}</h2>

          <img src={department.image} alt={department.name} />
          <p>
            <b>Description:</b> {department.description}
          </p>
          <p>
            <b>Info: </b>
            {department.info}
          </p>
          <b>Faculty: </b>
          <ol>
            {department.faculty.map((professor) => {
              return (
                <li className="orderlist" key={professor.id}>
                  <p>
                    <b>Name:</b> {professor.name}{" "}
                  </p>
                  <img src={professor.image} alt={professor.name} />
                </li>
              );
            })}
          </ol>
        </li>
      </ul>
    </>
  );
}
