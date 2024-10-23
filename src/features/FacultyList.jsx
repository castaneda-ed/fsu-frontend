import { Link } from "react-router-dom";
import { useGetFacultyQuery } from "../store/facultySlice";

export default function FacultyList() {
  const { data: faculty = [], isLoading, error } = useGetFacultyQuery();

  if (isLoading) {
    return <p>Loading faculty...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!faculty) {
    return <p>There are no professors.</p>;
  }

  return (
    <>
      <h1>Fullstack University Faculty</h1>
      <ul>
        {faculty.map((professor) => (
          <li key={professor.id}>
            <h2>
              {professor.name} {professor.email}
            </h2>
            <p>{professor.bio}</p>
            <img src={professor.image} alt={professor.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
