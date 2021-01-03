import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAmZwF9qgGiJpbWp7YQ32hZ_U1bXPj1yPs",
    authDomain: "reactcoder-prueba.firebaseapp.com",
    projectId: "reactcoder-prueba",
    storageBucket: "reactcoder-prueba.appspot.com",
    messagingSenderId: "695205126621",
    appId: "1:695205126621:web:a2cf8b19526955aa2cd634",
    measurementId: "G-TMLNSD7SFC"
})

export const getFirebase = () => {
    return app;
}

// Para llamar la base de datos
export const getFirestore = () => {
    return firebase.firestore();
}