import { createSelector } from "reselect";

const state = (state) => state.shop;

const shopSelector = createSelector([state], (shop) => shop.collection);

export default shopSelector;

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopSelector],
    (collection) => collection?collection[collectionUrlParam]:null
  );
export const selsctCollectionsPreview=createSelector(
    [shopSelector],
    collection=>collection?Object.keys(collection).map(key=>collection[key]):[]
)  