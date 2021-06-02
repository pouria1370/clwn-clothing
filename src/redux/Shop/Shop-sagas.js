import { takeEvery,all,call, put } from "redux-saga/effects";
import { ShopTypes } from "./Shop-Types";
import {
  firestore,
  ConvertCollectionsSnapshotsToMap,
} from "../../components/firbase/firebase.utility";
import {
  FetchCollectionFailiure,
  FetchCollectionSuccess,
} from "./Shop-actions";
export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      ConvertCollectionsSnapshotsToMap,
      snapShot
    );
    yield put(FetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(FetchCollectionFailiure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(ShopTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas(){
  yield all([call(fetchCollectionStart)])
}