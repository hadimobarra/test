import { SEND_POST } from "./actions";
import { takeEvery, call, put } from "@redux-saga/core/effects";
import { fetchPosts } from "./api";
import { addPosts } from "./slice";


function* getPosts() {
    console.log('getPosts')
    try {
        const allPosts = yield call(fetchPosts);
        console.log('all: ', allPosts)
        yield put(addPosts(allPosts))
    } catch(err) {
        yield put({type: SEND_POST, err})
    }
}

function* mySaga() {
    yield takeEvery(SEND_POST, getPosts)
}

export default mySaga;