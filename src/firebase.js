import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBjdZsRZ0YnSbUN3bHD2qy-vud9bdxv8Fo",
  authDomain: "netflix-clone-web-react.firebaseapp.com",
  projectId: "netflix-clone-web-react",
  storageBucket: "netflix-clone-web-react.appspot.com",
  messagingSenderId: "793315977338",
  appId: "1:793315977338:web:aa1aaf7ca49f199f7233c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const register = async (name , email , password) => {
    try {
       const response =  await createUserWithEmailAndPassword(auth, email, password); 
       const user = response.user;
       await addDoc(collection(db, "users"), {
           uid: user.uid,
           name: name,
           email: email,
           password: password,
           authProvider: "local"
       })
       toast.success("Register successful")
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email , password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password); 
       toast.success("Login successful")
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout = () => {
    signOut(auth);
}

export { auth , db, login , register , logout }