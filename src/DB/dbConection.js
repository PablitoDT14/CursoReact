import firebase from "firebase/app";
import '@firebase/firestore'

const db = firebase.initializeApp({
    apiKey: "AIzaSyBlj2sOJmZ2eK_VGRsB6ctcFBFEfpVttxk",
    authDomain: "coderhouse-pait.firebaseapp.com",
    projectId: "coderhouse-pait",
    storageBucket: "coderhouse-pait.appspot.com",
    messagingSenderId: "165371125795",
    appId: "1:165371125795:web:d359ae387b2e5ea8a29196"
})

export function getFirebase(){
    return db;
}

export function getFireStore(){
    return firebase.firestore(db);
}