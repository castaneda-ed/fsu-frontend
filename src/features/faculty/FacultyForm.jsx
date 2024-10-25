import { useState } from "react";
import { useAddProfessorMutation } from "../../store/facultySlice";
import { useNavigate, useParams } from "react-router-dom";

export default function FacultyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [addProfessor, { isLoading, error }] = useAddProfessorMutation();

  function postProfessor(event) {
    event.preventDefault();

    addProfessor({ name, email, bio, image, department });
    navigate();
  }

  return (
    <>
      <h1>Add a Faculty Member</h1>
      <form onClick={postProfessor}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Bio
          <input
            type="text"
            name="bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </label>
        <label>
          Image
          <input
            type="text"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        <label>
          Department
          <input
            type="text"
            name="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
