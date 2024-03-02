import bookListReducer from "./slices/BookListSlices";
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = {
    bookList: bookListReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;