import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{` ${book.title} `}</span>
      <span>{` ${book.category} `}</span>
      <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove book</button>
    </li>
  );
}
