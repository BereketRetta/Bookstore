import Book from './Book';
import Form from './Form';

export default function BookList({ bookList }) {
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
