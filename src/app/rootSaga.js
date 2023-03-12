import {fork} from 'redux-saga/effects';
import Posts from '../features/posts/saga'

export default function* rootSaga() {
    yield fork(Posts)
}