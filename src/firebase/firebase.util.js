import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBOJUykAzORFrM5as1PaTQhCzwDA5T5xuw",
    authDomain: "store-f7b54.firebaseapp.com",
    databaseURL: "https://store-f7b54.firebaseio.com",
    projectId: "store-f7b54",
    storageBucket: "store-f7b54.appspot.com",
    messagingSenderId: "769183748058",
    appId: "1:769183748058:web:6bc341043418f13c45bae3",
    measurementId: "G-NXVWWXNV49"
  };


export const creteProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef=firestore.doc(`user/${userAuth.uid}`);
    const snapshot=await userRef.get();
    if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const createdAt =new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
//    console.log(snapshot);
}

export const addCollectionAndDocuments=(collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj=>{
        const newDocRef=collectionRef.doc();
        batch.set(newDocRef,obj);
    });
    batch.commit();
}

export const convertCollectionsSnapshotToMap=(collections)=>{
    const transFormedCollection=collections.docs.map(doc=>{
        const {title,items}=doc.data();
        
        return {
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    // create object like hats:hatsCollection     
    
    });
    return transFormedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLocaleLowerCase()]=collection;
        return accumulator;
    },{})
}

export const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
        const unSubscribe=auth.onAuthStateChanged(userAuth=>{
            unSubscribe();
            resolve(userAuth);
        },reject)
    })
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
export const googleProvider=new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=>auth.signInWithPopup(googleProvider);
export default firebase;