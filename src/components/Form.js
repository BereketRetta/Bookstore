import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/book';

export default function Form() {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('.title');
    const category = e.target.querySelector('.category');
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      category: category.value,
    };
    title.value = '';
    category.value = '';
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
        <h2>ADD NEW BOOK</h2>
        <div className="div">
          <input placeholder="Book Title" className="title" />
          <input placeholder="Category" className="category" />
          <button type="submit" className="add-book">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}
