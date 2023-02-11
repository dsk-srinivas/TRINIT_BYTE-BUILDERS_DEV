
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDC7A9ZA4ZCFevQLMH9o9H4owU9MQo_yU4",
  authDomain: "vision-cc.firebaseapp.com",
  databaseURL: "https://vision-cc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vision-cc",
  storageBucket: "vision-cc.appspot.com",
  messagingSenderId: "514043847972",
  appId: "1:514043847972:web:a1e4886f3f163413213fb1",
  measurementId: "G-7Y0P00XNYL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })