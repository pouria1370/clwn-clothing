import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const shopSelector = createSelector([selectShop], (shop) => shop.collection);

export default shopSelector;

export const selectCollection = (collectionUrlParam) =>
  createSelector([shopSelector], (collection) =>
    collection ? collection[collectionUrlParam] : null
  );
export const selsctCollectionsPreview = createSelector(
  [shopSelector],
  (collection) =>
    collection ? Object.keys(collection).map((key) => collection[key]) : []
);
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collection
);
