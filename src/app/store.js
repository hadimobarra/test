import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myNewPosts: postsReducer,
  },
  middleware: [sagaMiddleware, ]
});

export default function configureAppStore(){
  sagaMiddleware.run(rootSaga)
  return {store}
}


sagaMiddleware.run(rootSaga);