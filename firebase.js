/** @format */

import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI6N6T4JZC2GyRIk5-eCZmOZYYdcR-U28",
  authDomain: "audbyte-c1339.firebaseapp.com",
  projectId: "audbyte-c1339",
  storageBucket: "audbyte-c1339.appspot.com",
  messagingSenderId: "766216951816",
  appId: "1:766216951816:web:4fa39055ca38363fd959bd",
  measurementId: "G-X70JM00FZ2",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage= firebase.storage();

export { db, auth ,storage};
