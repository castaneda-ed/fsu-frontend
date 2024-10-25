import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfessorQuery } from "../../store/facultySlice";

// export default function Professor() {
export default function ProfessorDetails() {
  const { id } = useParams();
  const { data: professor, isLoading } = useGetProfessorQuery(id);
  console.log(professor);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Professor Details</h1>
      <ul>
        <li>
          <h2>{professor.name}</h2>
          <p>
            <b>Bio:</b> {professor.bio}
          </p>
          <img src={professor.image} alt={professor.name} />
          <p>
            <b>Email: </b>
            {professor.email}
          </p>
          <p>
            <b>Department: </b>
            {professor.department.name}
          </p>
        </li>
      </ul>
    </>
  );
}
