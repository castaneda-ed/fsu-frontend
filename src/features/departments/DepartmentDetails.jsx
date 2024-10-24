import { useParams } from "react-router-dom";
export default function DepartmentDetails() {
  const { id } = useParams()
  return <h1>Department details</h1>;
}
