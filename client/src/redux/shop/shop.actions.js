import shopActionTypes from './shop.types';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';

export const fetchCollectionsStart=()=>({
    type:shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess=collectionMap=>({
    type:shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionMap
});

export const fetchCollectionFailure=message=>({
    type:shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:message
});

export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        
       collectionRef.get().then(snapshot=>{
            const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionSuccess(collectionsMap));
       });
    }
}