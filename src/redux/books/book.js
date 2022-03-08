import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'opQreyKrNQepd5FMlRdY';
const appUrl = `${baseUrl}/apps/${key}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.item_id !== action.payload),
      getBooks: (state, action) => action.payload,
    },
  },
);

const getBooks = async (dispatch) => {
  const res = await axios.get(appUrl);
  const bookList = Object.entries(res.data).map(([id, [book]]) => (
    {
      item_id: id,
      title: book.title,
      category: book.category,
    }
  ));
  dispatch({ type: 'books/getBooks', payload: bookList });
};

const addBook = (book) => {
  const addBookThunk = async (dispatch) => {
    const res = await axios.post(appUrl, {
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    });
    if (res.status) {
      dispatch({ type: 'books/addBook', payload: book });
    }
  };
  return addBookThunk;
};

const removeBook = (id) => {
  const deleteBookThunk = async (dispatch) => {
    const res = await axios.delete(`${appUrl}/${id}`);
    if (res.status) {
      dispatch({ type: 'books/removeBook', payload: id });
    }
  };
  return deleteBookThunk;
};

export { addBook, getBooks, removeBook };
export default bookSlice.reducer;
