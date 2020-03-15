import { call, put, takeEvery } from 'redux-saga/effects'
import BookstoreService from './services/bookstore-service';


const bookstoreService = new BookstoreService();
// воркер Saga: будет запускаться на действия типа `FETCH_BOOKS_REQUEST`
function* fetchBooks(action) {
    try {
        const newBooks = yield call(() => bookstoreService.getBooks());
        yield put({ type: "FETCH_BOOKS_SUCCESS", payload: newBooks });
    } catch (error) {
        console.log(error)
        yield put({ type: "FETCH_BOOKS_FAILURE", payload: error });
    }
}

/*
  Запускаем `fetchBooks` на каждое задиспатченное действие `FETCH_BOOKS_REQUEST`.
  Позволяет одновременно получать данные.
*/
function* mySaga() {
    yield takeEvery("FETCH_BOOKS_REQUEST", fetchBooks);
}


export default mySaga;
