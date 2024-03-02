import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

const BookList = () => {
    const {books, booksError, booksStatus} = useSelector((state) => state.bookList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBooks)
    }, [])

    const booksCases = {
        pending: '...loading',
        fulfilled: books?.map((book) => <BookListItem key={book.id} book={book} />),
        rejected: booksError,
    };

  return <div>{booksError[booksStatus]}</div>;
  
}

export default BookList;