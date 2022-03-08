import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/book';

export default function Form() {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('.title');
    const author = e.target.querySelector('.author');
    const newBook = {
      id: uuidv4(),
      title: title.value,
      author: author.value,
    };
    title.value = '';
    author.value = '';
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
        <input placeholder="Book Title" className="title" />
        <input placeholder="Book Author" className="author" />
        <button type="submit"> Add Book </button>
      </form>
    </div>
  );
}
