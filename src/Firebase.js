import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXgbK99XUSoKBsg3erbM56nc_-JgvKkrM",
  authDomain: "info-gatherer-a788d.firebaseapp.com",
  projectId: "info-gatherer-a788d",
  storageBucket: "info-gatherer-a788d.appspot.com",
  messagingSenderId: "626954672405",
  appId: "1:626954672405:web:5d160218d666b5e3a1b11c",
};

export const send_data = (data) => {
  const fb = Firebase.initializeApp(firebaseConfig);
  fb.firestore().collection("Usuário").add(data);
};
