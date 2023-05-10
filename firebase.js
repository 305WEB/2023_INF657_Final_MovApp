// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyAhSKrdT9A0o1FJ_ZcU7Ue0o6FAmIriQaY",
//   authDomain: "fir-list-a.firebaseapp.com",
//   projectId: "fir-list-a",
//   storageBucket: "fir-list-a.appspot.com",
//   messagingSenderId: "958344907716",
//   appId: "1:958344907716:web:24475b0496750a624fb291"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBh091mOJtXOeqNkmeRhmKoJKicxqwil58",
  authDomain: "task-manager-dbdea.firebaseapp.com",
  projectId: "task-manager-dbdea",
  storageBucket: "task-manager-dbdea.appspot.com",
  messagingSenderId: "71531233020",
  appId: "1:71531233020:web:6ebfab87051c5c5911a179",
  measurementId: "G-STRRQ6K3E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;
