import { useDispatch, useSelector } from "react-redux";
import { deletBook } from "./BooksSlice";
import { Link } from "react-router-dom";

export default function BookView() {
  const books = useSelector((state) => state.booksReducer.book);

  const dispatch = useDispatch();
  const handleDeletBook = (id) => {
    dispatch(deletBook(id));
  };
  return (
    <div>
      <h3 className="show">List of Books</h3>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  {/* <td>{id}</td> */}
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDeletBook(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
