import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getDatabase} from "firebase/database";



const app = firebase.initializeApp({
    apiKey: "AIzaSyBo0cxlom-0jSg1bLrGBtD5RGSDOFu_C2Y",
    authDomain: "hostel-allocation-assign-a927b.firebaseapp.com",
    projectId: "hostel-allocation-assign-a927b",
    storageBucket: "hostel-allocation-assign-a927b.appspot.com",
    messagingSenderId: "856600835169",
    appId: "1:856600835169:web:cbc6edef2ff55763e7e620"
});

export const auth = app.auth();
export const db = getDatabase(app);

export default app;