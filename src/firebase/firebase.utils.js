import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyAjcqVo-y_7RhwUz7x5gyrd5sZhI6IUCQE",
    authDomain: "crwn-db-5111f.firebaseapp.com",
    databaseURL: "https://crwn-db-5111f.firebaseio.com",
    projectId: "crwn-db-5111f",
    storageBucket: "crwn-db-5111f.appspot.com",
    messagingSenderId: "362531480583",
    appId: "1:362531480583:web:9e89db7e979b4f410776a2",
    measurementId: "G-W2VV1KGLJ3"
  }; 

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snap = await userRef.get();
    if(!snap.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch(err){
            console.log(err.message);
        }
        

    }

    return userRef;
    

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;