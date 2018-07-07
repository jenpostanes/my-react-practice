import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDN2yM9z3ztbiYaOIxLDWTAf048y-W-Stg",
  authDomain: "react-login-f5497.firebaseapp.com",
  databaseURL: "https://react-login-f5497.firebaseio.com",
  projectId: "react-login-f5497",
  storageBucket: "react-login-f5497.appspot.com",
  messagingSenderId: "758600927140"
}

const firebase = Firebase.initializeApp(config);
export default firebase;
