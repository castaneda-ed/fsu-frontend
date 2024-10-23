import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectToken } from "../account/authSlice";
import { useGetFacultyQuery, useGetProfessorMutation } from "./facultySlice";

import "./BookDetails.scss";

/**
 * Details about a single book.
 * Users can reserve a book if they are logged in.
 */
export default function BookDetails() {
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookQuery(id);

  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const [reserveBook, { isLoading: isReserving }] = useReserveBookMutation();
  const tryReserveBook = async (event) => {
    event.preventDefault();
    await reserveBook(book.id);
    navigate("/account");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="book-details">
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <img src={book.coverimage} />
      <p>{book.description}</p>
      {token &&
        (book.available ? (
          <form onSubmit={tryReserveBook}>
            <button>{isReserving ? "Reserving..." : "Reserve"}</button>
          </form>
        ) : (
          <button disabled>Book is already reserved.</button>
        ))}
    </main>
  );
}
