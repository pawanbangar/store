import {createSelector} from 'reselect';

const selectShop =state=>state.shop;

export const selectCollections=createSelector(
[selectShop],
    shop=>shop.collections
);
export const selectCollectioForPreview=createSelector(
    [selectCollections],
    collections=>collections?Object.keys(collections).map(key=>collections[key]):[]
)
export const SelectCollection=collectionUrlParam=>createSelector(
[selectCollections],
    collections=>collections?collections[collectionUrlParam]:[]
);

export const selectIsCollectionFetching=createSelector(
[selectShop],
    shop=>shop.isFetching
);
export const selectisCollectionLoading=createSelector(
    [selectShop],
    shop=>!!shop.collections
)