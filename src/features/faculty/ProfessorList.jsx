import { useState } from "react";
import ProfessorCard from "./ProfessorCard";
import { useGetFacultyQuery } from "../../store/facultySlice";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/authSlice";
import { Link } from "react-router-dom";

// Function that renders a list of all departments
export default function ProfessorList() {
  const { data: professors, error, isLoading } = useGetFacultyQuery();
  const token = useSelector(selectToken);

  const [filter, setFilter] = useState("");
  const searchRegex = new RegExp(filter, "i");

  if (isLoading) return <h2>Loading faculty...</h2>;

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!professors.length) {
    return <p>There are no professors.</p>;
  }

  return (
    <main>
      <h1>University Departments</h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      {token && <Link to={`/faculty/form`}>Create a new Professor</Link>}
      <ul className="faculty-list">
        {professors
          .filter((professor) => professor.name.match(searchRegex))
          .sort((a, z) => a.name.localeCompare(z.name))
          .map((professor) => (
            <ProfessorCard key={professor.id} professor={professor} />
          ))}
      </ul>
    </main>
  );
}
