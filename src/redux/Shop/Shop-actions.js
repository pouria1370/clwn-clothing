import {ShopTypes} from './Shop-Types'
export const UpdateCollection=collection=>({
    type:ShopTypes.UPDATE_COLLECTION,
    payload:collection
})