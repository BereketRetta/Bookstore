import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

export default function BookList() {
  const bookList = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <Form />
    </div>
  );
}
