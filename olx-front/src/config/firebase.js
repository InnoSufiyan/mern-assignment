// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, setDoc, doc, getDoc ,} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAKx-2aElmBlrwKnzvsMugnDsSPRWcTIs",
  authDomain: "olxreactt.firebaseapp.com",
  projectId: "olxreactt",
  storageBucket: "olxreactt.appspot.com",
  messagingSenderId: "468957855607",
  appId: "1:468957855607:web:8dff2c790d71dd35d8eb72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(app);


async function adPost (product, price, quantity) {
  // const {product, price, quantity} = postDetails
  console.log(product)
  console.log(price)
  console.log(quantity)
  const docRef = await addDoc(collection(db, "add"), {
    product ,price, quantity
  })
}


export {
  adPost
}