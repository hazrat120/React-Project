import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  book: [
    { id: uuidv4(), title: "I Love Bangladesh", author: "Hazrat Ali" },
    { id: uuidv4(), title: "I am a bangladeshi", author: "Hazrat Ali" },
  ],
};

export const booksSlice = createSlice({
  name: "bookx",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.book.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.book.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deletBook: (state, action) => {
      const id = action.payload;
      state.book = state.book.filter((book) => book.id != id);
    },
  },
});

export const { showBooks, addBook, deletBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
