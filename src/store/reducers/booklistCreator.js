import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api';

const fetAllBooks = createAsyncThunk('Booklist/fethAll', async (payload, thunkApi) => {
    try{
        const reponse = await api.getBooks();
        return reponse.data;
    }catch (err) {
        return thunkApi.rejectWithValue('Sorry, something ahse gone wrrong. Try again later');
    }
});

export default fetAllBooks;