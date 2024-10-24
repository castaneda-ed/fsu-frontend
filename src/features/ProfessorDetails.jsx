import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProfessorQuery } from '../store/facultySlice';



// export default function Professor() {
const Professors = () => {
const { id } = useParams();
const { data: professor, isLoading } = useGetProfessorQuery(id);
console.log(professor)
if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Professors</h1>
      <ul>
          <li>
            <h2>{professor.name}</h2>
            <p>{professor.bio}</p>
            <img src={professor.image} alt={professor.name}/>
            <p>{professor.email}</p>
            <p>{professor.department.name}</p>
          </li>
              </ul>
    </>
  );
};

export default Professors;

//disregard code below
//ln 57 will be used to test what shows, and from there we 
//can edit to see whether we should add:
//<Link to={`/departments/${professor.departmentId}`}>
//{department.name}
//</Link>