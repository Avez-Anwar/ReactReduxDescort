import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUpbIBYXEZXA5DcY2LAWp4ZFvuUCfx978",
    authDomain: "discord-clone-1789e.firebaseapp.com",
    databaseURL: "https://discord-clone-1789e.firebaseio.com",
    projectId: "discord-clone-1789e",
    storageBucket: "discord-clone-1789e.appspot.com",
    messagingSenderId: "406846126045",
    appId: "1:406846126045:web:2b6de013cb69a6eacf6834"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;