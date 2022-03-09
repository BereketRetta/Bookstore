import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="list-item">
      <div>
        <p className="cate">{` ${book.category} `}</p>
        <p className="book-title">{` ${book.title} `}</p>
        <div>
          <button className="list-butt" type="button">Comment</button>
          <button className="list-butt" type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
          <button className="list-butt" type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="oval-2" />
        <div>
          <h2>100%</h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="info">
        <p className="info-p">CURRENT CHAPTER</p>
        <p>CHAPTER 15</p>
        <button className="progress-button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
