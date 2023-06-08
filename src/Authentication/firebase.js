// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4UOAcJinwhR4D3DXYBwYswxL9Tz0xkJY",
    authDomain: "blog-e5a1e.firebaseapp.com",
    projectId: "blog-e5a1e",
    storageBucket: "blog-e5a1e.appspot.com",
    messagingSenderId: "114362570255",
    appId: "1:114362570255:web:2f2a8b01a16881e042357a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app