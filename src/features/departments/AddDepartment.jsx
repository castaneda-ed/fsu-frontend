import { useState } from "react";
import { usePostDepartmentMutation } from "../../store/departmentSlice";
import { useNavigate } from "react-router-dom";

//Token related imports
import { useSelector } from "react-redux";
import { selectToken } from "../../store/authSlice";

/**
 * @component
 * TThe use can add a new department by submittting this form
 * and they redirected to the new created department details
 */
export default function AddDepartment() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [info, setInfo] = useState("");
  const [faculty, setFaculty] = useState("");

  const [addDepartment, { isLoading, error }] = usePostDepartmentMutation();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  async function postDepartment(event) {
    event.preventDefault();

    // Make sure the token exists
    if (!token) {
      alert("Error: You must be logged in to add a department.");
      return;
    }

    console.log("Token:", token);

    try {
      const professors = faculty
        .split(",")
        .map((id) => parseInt(id.trim(), 10));

      const response = await addDepartment({
        name,
        description,
        image,
        info,
        professors,
      }).unwrap();

      navigate(`/departments/${response.id}`);
    } catch (err) {
      console.error("Error creating department:", err);
    }
  }

  return (
    <main>
      <h2>Add a Department</h2>
      <form onSubmit={postDepartment}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Image URL
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Info
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>
        <label>
          Faculty
          <input
            type="text"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
        </label>
        <button>Add Department</button>
        {isLoading && <output>Uploading department...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </main>
  );
}
