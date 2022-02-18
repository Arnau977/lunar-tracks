// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAaMq5p5cAFai5GKgQf-dSm848VbMPJzlA",
  authDomain: "lunartracksdb.firebaseapp.com",
  projectId: "lunartracksdb",
  storageBucket: "lunartracksdb.appspot.com",
  messagingSenderId: "620218111129",
  appId: "1:620218111129:web:27bb0cf88d938cd2131408",
  measurementId: "G-TFGMSKRPKM"
};



export function initFirebase() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app); 
}

export function addMovie() {
    initFirebase()

    // Get image, synopsis from api
    await setDoc(doc(db, "movies"), {
        id: uuidv4(),
        title: movie.title,
        status: movie.status,
        // image: "fdfasfsa.png",
        // synopsis: "A movie very very good",
        user: "testUserId", //user id
    });
}
