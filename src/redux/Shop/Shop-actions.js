import { ShopTypes } from "./Shop-Types";
import {
  firestore,
  ConvertCollectionsSnapshotsToMap,
} from "../../components/firbase/firebase.utility";


export const FetchCollectionStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START,
});
export const FetchCollectionSuccess = (collection) => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collection,
});
export const FetchCollectionFailiure = (errorMessage) => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILIURE,
  payload: errorMessage,
});

export const FetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(FetchCollectionStart());
    collectionRef.get().then((snapShot) => {
      const collectionsMap = ConvertCollectionsSnapshotsToMap(snapShot);
      dispatch(FetchCollectionSuccess(collectionsMap));
    }).catch(error=>dispatch(FetchCollectionFailiure(error.message)));
  };
};
