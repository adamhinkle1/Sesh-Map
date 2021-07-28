// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvk2gFjVCXeftclnua_23cyeesWyk8E5M",
  authDomain: "forum-addea.firebaseapp.com",
  projectId: "forum-addea",
  storageBucket: "forum-addea.appspot.com",
  messagingSenderId: "1026353255339",
  appId: "1:1026353255339:web:9896d957ea7fd0388b38ee",
  measurementId: "G-9CPZB7JW76"
};
// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initial database
const db = firebaseApp.firestore();
db.settings({timestampsInSnapshots: true})

// set auth
const auth = firebase.auth();
// set provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, provider};
export default db;