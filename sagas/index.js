import { delay } from 'redux-saga'
import { put, takeEvery,call,fork,takeLatest } from 'redux-saga/effects'
// import MainPageSaga from '../App/containers/MainPage/saga'
// import PushSaga from '../App/containers/PushOpen/saga'
export default function* watch() {
    yield[
        fork(MainPageSaga),

    ]
};
