const fetch = require("node-fetch");

const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

get_ip = () => {
  let api_key = "db4dbab3775b48e0b19eaa83397f89bb";

  const firebaseConfig = {
    apiKey: "AIzaSyCXgbK99XUSoKBsg3erbM56nc_-JgvKkrM",
    authDomain: "info-gatherer-a788d.firebaseapp.com",
    projectId: "info-gatherer-a788d",
    storageBucket: "info-gatherer-a788d.appspot.com",
    messagingSenderId: "626954672405",
    appId: "1:626954672405:web:5d160218d666b5e3a1b11c",
  };

  const fb = firebase.initializeApp(firebaseConfig);

  const getJSON = async (url) => {
    const response = await fetch(url);

    const data = response.json();
    return data;
  };

  console.log("Fetching data...");

  getJSON(`https://ipgeolocation.abstractapi.com/v1/?api_key=${api_key}`).then(
    (data) => {
      data.dateCreated = Date.now();
      // console.log(data.ip_address);
      // console.log(data.country);
      // console.log(data.dateCreated);
      // console.log(data);
      fb.firestore().collection("Usuário").add(data);
    }
  );
};

module.exports = { get_ip };
