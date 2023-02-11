importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDC7A9ZA4ZCFevQLMH9o9H4owU9MQo_yU4",
  authDomain: "vision-cc.firebaseapp.com",
  databaseURL: "https://vision-cc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vision-cc",
  storageBucket: "vision-cc.appspot.com",
  messagingSenderId: "514043847972",
  appId: "1:514043847972:web:a1e4886f3f163413213fb1",
  measurementId: "G-7Y0P00XNYL"
});
const messaging = firebase.messaging();