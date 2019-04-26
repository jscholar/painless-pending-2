import * as firebase from "firebase/app";
import "firebase/database";


const firebaseConfigDev = {
    apiKey: "AIzaSyBbq6sq6XL3qgjLOi585NsDvTjM8UeNlzQ",
    authDomain: "painless-pending-development.firebaseapp.com",
    databaseURL: "https://painless-pending-development.firebaseio.com",
    projectId: "painless-pending-development",
    storageBucket: "painless-pending-development.appspot.com",
    messagingSenderId: "625683804341"
};

firebase.initializeApp(firebaseConfigDev);

const database = firebase.database();

export default database;
