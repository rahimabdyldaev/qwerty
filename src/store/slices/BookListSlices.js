import { createSlice } from '@reduxjs/toolkit';
import fetAllBooks from '../reducers/booklistCreator';

const initialState = {
    books: [],
    booksStatus: 'pending',
    booksError: '',
};

const bookListSlice = createSlice({
    name: 'Booklist',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetAllBooks.pending, (state) => {
            state.booksStatus = 'pending';
            state.booksError = '';
            state.books = [];
        });

        builder.addCase(fetAllBooks.fulfilled, (state, action) => {
            state.booksStatus = 'fulfilled';
            state.books = action.payload;
        });
        
        builder.addCase(fetAllBooks.rejected, (state, action) => {
            state.booksStatus = 'rejected';
            state.books = action.payload;
        });
    },
});

const bookListReducer = bookListSlice.reducer;
export const { setBooks } = bookListSlice.actions;
export default bookListReducer;