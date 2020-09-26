import firebase from "firebase/app";

const fire = firebase.initializeApp({
    apiKey: "AIzaSyAtNIVkgXBrcAFmX6JRmzbL_XxZOfryKCg",
    authDomain: "demon-program.firebaseapp.com",
    databaseURL: "https://demon-program.firebaseio.com",
    projectId: "demon-program",
    storageBucket: "demon-program.appspot.com",
    messagingSenderId: "413808399942",
    appId: "1:413808399942:web:1a69fa6c603a6fd2325c47",
    measurementId: "G-RHZCMLKM7B"
});

export default fire;