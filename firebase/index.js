import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDMxxKjsJXTPgwpz23vlHlPQM6GMbEiY2Y",
    authDomain: "cake-shop-ecommerce.firebaseapp.com",
    databaseURL: "https://cake-shop-ecommerce.firebaseio.com",
    projectId: "cake-shop-ecommerce",
    storageBucket: "cake-shop-ecommerce.appspot.com",
    messagingSenderId: "857792836229",
    appId: "1:857792836229:web:5f90733186f924a772afec",
    measurementId: "G-5Q8FBX1FMK"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}
