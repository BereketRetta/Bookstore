import React from 'react';

export default function Form() {
  return (
    <div>
      <form id="add-book-form">
        <input placeholder="Book Title" />
        <input placeholder="Book Author" />
        <button type="submit"> Add Book </button>
      </form>
    </div>
  );
}
